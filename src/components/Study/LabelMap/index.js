'use client';

import { useRef, useState } from 'react';

import Explain from '../Explain';
import { speak } from '../speech';
import { useStrings } from '../language';
import {
  shuffle, isNear, useDrag, SpeakerIcon, WellDone, useSlips, practiseItems,
} from '../game';
import {
  Instructions, Board, Scene, EmptyBox, FilledBox, BoxSpeaker, Side, Tray, Chip, Word, Speaker,
  Groups, Group, GroupTitle, GroupDone, Ghost, Message, Progress,
} from './style';

// Boxes are this big in drawing units (the drawings are 1000 wide), unless an exercise with
// longer words asks for wider ones.
const BOX_WIDTH = 180;
const BOX_HEIGHT = 60;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

// A picture with empty boxes and a tray of words: each word is dragged (or tapped, then its box
// tapped) to the box of the thing it names. A right word stays in its box, a wrong one goes back.
// When the exercise sorts its words into groups, the tray shows them group by group. At the end,
// the words gone wrong can be looked at again and placed again, with the rest already in place.
export default function LabelMap({ exercise }) {
  const text = useStrings();
  const {
    instructions, width, height, Drawing, items, groups, boxWidth = BOX_WIDTH,
  } = exercise;
  // The first round is in a fixed order, so the static page and the browser agree on it.
  const [order, setOrder] = useState(() => items.map(item => item.id).reverse());
  const [placed, setPlaced] = useState({});
  const [selected, setSelected] = useState(null);
  const [wrong, setWrong] = useState(null);
  const [slips, slip, clearSlips] = useSlips();
  const [message, setMessage] = useState(null);
  const boxes = useRef({});
  const wrongTimer = useRef(null);

  const byId = Object.fromEntries(items.map(item => [item.id, item]));
  const placedCount = Object.keys(placed).length;
  const finished = placedCount === items.length;

  const boxAt = (x, y) => Object.keys(boxes.current).find((id) => {
    const element = boxes.current[id];
    return element && !placed[id] && isNear(element, x, y);
  }) ?? null;

  const place = (wordId, boxId) => {
    setSelected(null);
    if (wordId === boxId) {
      setPlaced(current => ({ ...current, [boxId]: true }));
      setMessage({ kind: 'right', id: wordId });
      return;
    }
    slip({
      item: wordId,
      also: [boxId],
      prompt: text.whereGoes(byId[wordId].word),
      note: byId[wordId].definition,
      wrong: text.boxOf(byId[boxId].word),
      right: text.boxOf(byId[wordId].word),
      say: byId[wordId].word,
    });
    setWrong(boxId);
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => setWrong(null), 600);
    setMessage({ kind: 'wrong', id: wordId });
  };

  const {
    drag, over, handlersFor, isTap,
  } = useDrag({ targetAt: boxAt, onDrop: place });

  const onWordClick = (event, id) => {
    if (!isTap(event)) return;
    setSelected(current => (current === id ? null : id));
    setMessage(null);
  };

  const onBoxClick = (id) => {
    if (selected) place(selected, id);
    else setMessage({ kind: 'hint' });
  };

  const playAgain = (wordsToPlace = null) => {
    const left = wordsToPlace ?? items.map(item => item.id);
    setOrder(shuffle(left));
    setPlaced(Object.fromEntries(items.filter(item => !left.includes(item.id)).map(item => [item.id, true])));
    setSelected(null);
    clearSlips();
    setMessage(null);
  };

  const percent = (value, total) => `${(value / total) * 100}%`;
  const messageItem = message?.id && byId[message.id];
  const messageGroup = messageItem && groups?.find(group => group.id === messageItem.group);
  const trays = groups
    ? groups.map(group => ({ ...group, ids: order.filter(id => byId[id].group === group.id) }))
    : [{ id: 'words', title: text.wordsTray, ids: order }];

  const renderChip = (id) => {
    const { word } = byId[id];
    return (
      <Chip key={id} $selected={selected === id} $dragging={drag?.id === id}>
        <Word
          type="button"
          aria-pressed={selected === id}
          {...handlersFor(id)}
          onClick={event => onWordClick(event, id)}
        >
          {word}
        </Word>
        <Explain word={word} variant="chip" />
        <Speaker type="button" onClick={() => speak(word, text.lang)} aria-label={text.listenTo(word)}>
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
                  <Explain word={word} variant="box" />
                  <BoxSpeaker type="button" onClick={() => speak(word, text.lang)} aria-label={text.listenTo(word)}>
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
                aria-label={text.boxNumber(index + 1)}
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
            <WellDone slips={slips} onAgain={() => playAgain()} onPractise={() => playAgain(practiseItems(slips))} />
          ) : (
            <>
              {groups ? (
                <Groups>
                  {trays.map(({ id, title, ids }) => {
                    const left = ids.filter(word => !placed[word]);
                    return (
                      <Group key={id}>
                        <GroupTitle>
                          {title}
                          {' '}
                          <Explain word={title} />
                        </GroupTitle>
                        {left.length > 0
                          ? <Tray aria-label={title}>{left.map(renderChip)}</Tray>
                          : <GroupDone>{text.allInPlace}</GroupDone>}
                      </Group>
                    );
                  })}
                </Groups>
              ) : (
                <Tray aria-label={text.wordsTray}>{order.filter(id => !placed[id]).map(renderChip)}</Tray>
              )}
              <Progress>{text.progressDone(placedCount, items.length)}</Progress>
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
                {message.kind === 'wrong' && <span>{text.tryAnotherBox}</span>}
                {message.kind === 'hint' && <span>{text.pickWordFirst}</span>}
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
