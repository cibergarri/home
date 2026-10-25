'use client';

import { useRef, useState } from 'react';

import { speak } from '../speech';
import {
  Instructions, Board, Scene, EmptyBox, FilledBox, BoxSpeaker, Side, Tray, Chip, Word, Speaker,
  Groups, Group, GroupTitle, GroupDone, Ghost, Message, Progress, Done, Stars, Again,
} from './style';

// Boxes are this big in drawing units (the drawings are 1000 wide), unless an exercise with
// longer words asks for wider ones.
const BOX_WIDTH = 180;
const BOX_HEIGHT = 60;
// How far a finger moves before a tap becomes a drag, and how near a box counts as on it, in px.
const DRAG_THRESHOLD = 8;
const DROP_SLOP = 18;

const shuffle = (list) => {
  const result = [...list];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const near = (rect, x, y) => x >= rect.left - DROP_SLOP && x <= rect.right + DROP_SLOP
  && y >= rect.top - DROP_SLOP && y <= rect.bottom + DROP_SLOP;

function SpeakerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" />
      <path d="M15.5 9a4 4 0 0 1 0 6" />
      <path d="M18.5 6.5a7.5 7.5 0 0 1 0 11" />
    </svg>
  );
}

const starsFor = (mistakes) => {
  if (mistakes === 0) return 3;
  return mistakes <= 2 ? 2 : 1;
};

// A picture with empty boxes and a tray of words: each word is dragged (or tapped, then its box
// tapped) to the box of the thing it names. A right word stays in its box, a wrong one goes back.
// When the exercise sorts its words into groups, the tray shows them group by group.
export default function LabelMap({ exercise }) {
  const {
    instructions, width, height, Drawing, items, groups, boxWidth = BOX_WIDTH,
  } = exercise;
  // The first round is in a fixed order, so the static page and the browser agree on it.
  const [order, setOrder] = useState(() => items.map(item => item.id).reverse());
  const [placed, setPlaced] = useState({});
  const [selected, setSelected] = useState(null);
  const [drag, setDrag] = useState(null);
  const [over, setOver] = useState(null);
  const [wrong, setWrong] = useState(null);
  const [mistakes, setMistakes] = useState(0);
  const [message, setMessage] = useState(null);
  const boxes = useRef({});
  const pointer = useRef(null);
  const ignoreClicksUntil = useRef(0);
  const wrongTimer = useRef(null);

  const byId = Object.fromEntries(items.map(item => [item.id, item]));
  const placedCount = Object.keys(placed).length;
  const finished = placedCount === items.length;

  const boxAt = (x, y) => Object.keys(boxes.current).find((id) => {
    const element = boxes.current[id];
    return element && !placed[id] && near(element.getBoundingClientRect(), x, y);
  }) ?? null;

  const place = (wordId, boxId) => {
    setSelected(null);
    if (wordId === boxId) {
      setPlaced(current => ({ ...current, [boxId]: true }));
      setMessage({ kind: 'right', id: wordId });
      return;
    }
    setMistakes(count => count + 1);
    setWrong(boxId);
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => setWrong(null), 600);
    setMessage({ kind: 'wrong', id: wordId });
  };

  const onPointerDown = (event, id) => {
    if (event.button > 0 || pointer.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointer.current = {
      id,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
      dragging: false,
    };
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event) => {
    const current = pointer.current;
    if (!current || current.pointerId !== event.pointerId) return;
    const distance = Math.hypot(event.clientX - current.startX, event.clientY - current.startY);
    if (!current.dragging && distance < DRAG_THRESHOLD) return;
    current.dragging = true;
    setDrag({ id: current.id, x: event.clientX - current.offsetX, y: event.clientY - current.offsetY });
    setOver(boxAt(event.clientX, event.clientY));
  };

  const endDrag = (event, drop) => {
    const current = pointer.current;
    if (!current || current.pointerId !== event.pointerId) return;
    pointer.current = null;
    if (!current.dragging) return; // a tap: the click that follows selects the word
    // A drag that ends on its own word must not also select it.
    ignoreClicksUntil.current = event.timeStamp + 400;
    setDrag(null);
    setOver(null);
    const box = drop && boxAt(event.clientX, event.clientY);
    if (box) place(current.id, box);
  };

  const onWordClick = (event, id) => {
    if (event.timeStamp < ignoreClicksUntil.current) return;
    setSelected(current => (current === id ? null : id));
    setMessage(null);
  };

  const onBoxClick = (id) => {
    if (selected) place(selected, id);
    else setMessage({ kind: 'hint' });
  };

  const playAgain = () => {
    setOrder(shuffle(items.map(item => item.id)));
    setPlaced({});
    setSelected(null);
    setMistakes(0);
    setMessage(null);
  };

  const percent = (value, total) => `${(value / total) * 100}%`;
  const stars = starsFor(mistakes);
  const messageItem = message?.id && byId[message.id];
  const messageGroup = messageItem && groups?.find(group => group.id === messageItem.group);
  const trays = groups
    ? groups.map(group => ({ ...group, ids: order.filter(id => byId[id].group === group.id) }))
    : [{ id: 'words', title: 'Words', ids: order }];

  const renderChip = (id) => {
    const { word } = byId[id];
    return (
      <Chip key={id} $selected={selected === id} $dragging={drag?.id === id}>
        <Word
          type="button"
          aria-pressed={selected === id}
          onPointerDown={event => onPointerDown(event, id)}
          onPointerMove={onPointerMove}
          onPointerUp={event => endDrag(event, true)}
          onPointerCancel={event => endDrag(event, false)}
          onClick={event => onWordClick(event, id)}
          onContextMenu={event => event.preventDefault()}
        >
          {word}
        </Word>
        <Speaker type="button" onClick={() => speak(word)} aria-label={`Listen to ${word}`}>
          <SpeakerIcon />
        </Speaker>
      </Chip>
    );
  };

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Board>
        <Scene $ratio={`${width} / ${height}`}>
          <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={exercise.title}>
            <Drawing />
            {items.map(({ id, dot, box }) => {
              const [x, y] = dot;
              const end = [
                clamp(x, box[0] - boxWidth / 2, box[0] + boxWidth / 2),
                clamp(y, box[1] - BOX_HEIGHT / 2, box[1] + BOX_HEIGHT / 2),
              ];
              return (
                <g key={id}>
                  <line x1={x} y1={y} x2={end[0]} y2={end[1]} stroke="#24324a" strokeOpacity={0.45} strokeWidth={6} strokeLinecap="round" />
                  <line x1={x} y1={y} x2={end[0]} y2={end[1]} stroke="#fff" strokeWidth={2.5} strokeDasharray="6 5" strokeLinecap="round" />
                  <circle cx={x} cy={y} r={8} fill={placed[id] ? '#2f9e5b' : '#fff'} stroke="#24324a" strokeWidth={3} />
                </g>
              );
            })}
          </svg>
          {items.map(({ id, word, box }, index) => {
            const position = {
              left: percent(box[0] - boxWidth / 2, width),
              top: percent(box[1] - BOX_HEIGHT / 2, height),
              width: percent(boxWidth, width),
              height: percent(BOX_HEIGHT, height),
            };
            if (placed[id]) {
              return (
                <FilledBox key={id} style={position} data-testid={`box-${id}`}>
                  {word}
                  <BoxSpeaker type="button" onClick={() => speak(word)} aria-label={`Listen to ${word}`}>
                    <SpeakerIcon />
                  </BoxSpeaker>
                </FilledBox>
              );
            }
            return (
              <EmptyBox
                key={id}
                type="button"
                style={position}
                ref={(element) => { boxes.current[id] = element; }}
                onClick={() => onBoxClick(id)}
                aria-label={`Box ${index + 1}`}
                data-testid={`box-${id}`}
                $over={over === id}
                $ready={Boolean(selected)}
                $wrong={wrong === id}
              >
                ?
              </EmptyBox>
            );
          })}
        </Scene>

        <Side>
          {finished ? (
            <Done role="status">
              <h2>Well done, Julia!</h2>
              <Stars aria-label={`${stars} out of 3 stars`}>
                {[1, 2, 3].map(n => <span key={n} data-off={n > stars || undefined}>⭐</span>)}
              </Stars>
              <p>{mistakes === 0 ? 'Every word right first time!' : `${mistakes} ${mistakes === 1 ? 'mistake' : 'mistakes'} on the way.`}</p>
              <Again type="button" onClick={playAgain}>Play again</Again>
            </Done>
          ) : (
            <>
              {groups ? (
                <Groups>
                  {trays.map(({ id, title, ids }) => {
                    const left = ids.filter(word => !placed[word]);
                    return (
                      <Group key={id}>
                        <GroupTitle>{title}</GroupTitle>
                        {left.length > 0
                          ? <Tray aria-label={title}>{left.map(renderChip)}</Tray>
                          : <GroupDone>✓ All in place</GroupDone>}
                      </Group>
                    );
                  })}
                </Groups>
              ) : (
                <Tray aria-label="Words">{order.filter(id => !placed[id]).map(renderChip)}</Tray>
              )}
              <Progress>{`${placedCount} of ${items.length} done`}</Progress>
            </>
          )}
          <div aria-live="polite">
            {message && !finished && (
              <Message $kind={message.kind}>
                {message.kind === 'right' && (
                  <span>
                    <strong>{`✓ ${messageItem.word}${messageGroup ? ` (${messageGroup.name})` : ''}: `}</strong>
                    {messageItem.definition}
                  </span>
                )}
                {message.kind === 'wrong' && <span>Not quite. Try another box!</span>}
                {message.kind === 'hint' && <span>First pick a word, then tap its box.</span>}
              </Message>
            )}
          </div>
        </Side>
      </Board>
      {drag && (
        <Ghost style={{ left: drag.x, top: drag.y }} aria-hidden="true">
          {byId[drag.id].word}
        </Ghost>
      )}
    </>
  );
}
