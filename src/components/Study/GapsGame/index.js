'use client';

import { useRef, useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import {
  scramble, shuffle, isNear, useDrag, WellDone, SpeakerIcon, useSlips, practiseItems,
} from '../game';
import {
  Instructions, Chip, Word, Speaker, Ghost, Message, Progress,
} from '../LabelMap/style';
import { Bottom, Cards } from '../SortGame/style';
import {
  Sentences, Sentence, Gap, Filled,
} from './style';

// Sentences with gaps, as in the book: "The [mayor] is the head of the local council." The words in
// brackets come in a tray, to drag (or tap, then tap a gap) into their gaps. A word is right in any
// gap that wants that word; a right one stays, and the sentence is read aloud when it is complete;
// a wrong one shakes the gap and goes back. At the end, the sentences gone wrong can be done again
// on their own.
const partsOf = sentence => sentence.split(/(\[[^\]]+\])/).filter(Boolean)
  .map(part => (part.startsWith('[') ? { gap: part.slice(1, -1) } : { text: part }));
const gapsOf = (sentences, which) => which.flatMap(n => partsOf(sentences[n])
  .filter(part => part.gap).map((part, k) => ({ id: `${n}:${k}`, word: part.gap, sentence: n })));
const said = sentence => sentence.replace(/[[\]]/g, '');

export default function GapsGame({ exercise }) {
  const strings = useStrings();
  const { instructions, sentences } = exercise;
  const all = sentences.map((sentence, n) => n);
  const [only, setOnly] = useState(null); // the sentences to do again, if not all
  const playing = only ?? all;
  const gaps = gapsOf(sentences, playing);
  const byId = Object.fromEntries(gaps.map(gap => [gap.id, gap]));
  // The first round is in a fixed order, so the static page and the browser agree on it.
  const [order, setOrder] = useState(() => scramble(gaps.map(gap => gap.id), 2));
  const [filled, setFilled] = useState({}); // gap id → the tile put there
  const [selected, setSelected] = useState(null);
  const [wrong, setWrong] = useState(null);
  const [slips, slip, clearSlips] = useSlips();
  const [message, setMessage] = useState(null);
  const boxes = useRef({});
  const wrongTimer = useRef(null);

  const total = gaps.length;
  const finished = Object.keys(filled).length === total;
  const used = new Set(Object.values(filled));

  const gapAt = (x, y) => Object.keys(boxes.current).find((id) => {
    const element = boxes.current[id];
    return element && !filled[id] && isNear(element, x, y);
  }) ?? null;

  const put = (tileId, gapId) => {
    setSelected(null);
    const gap = byId[gapId];
    if (byId[tileId].word === gap.word) {
      const now = { ...filled, [gapId]: tileId };
      setFilled(now);
      const done = gaps.filter(other => other.sentence === gap.sentence).every(other => now[other.id]);
      speak(done ? said(sentences[gap.sentence]) : gap.word, strings.lang);
      setMessage({ kind: 'right', text: done ? said(sentences[gap.sentence]) : gap.word });
      return;
    }
    slip({
      item: gap.sentence, prompt: said(sentences[gap.sentence]).replace(gap.word, '…'), wrong: byId[tileId].word, right: gap.word,
    });
    setWrong(gapId);
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => setWrong(null), 600);
    setMessage({ kind: 'wrong' });
  };

  const {
    drag, over, handlersFor, isTap,
  } = useDrag({ targetAt: gapAt, onDrop: put });

  const onTileClick = (event, id) => {
    if (!isTap(event)) return;
    setSelected(current => (current === id ? null : id));
    setMessage(null);
  };

  const onGapClick = (id) => {
    if (selected) put(selected, id);
    else setMessage({ kind: 'hint' });
  };

  const playAgain = (which = null) => {
    setOnly(which);
    setOrder(shuffle(gapsOf(sentences, which ?? all).map(gap => gap.id)));
    setFilled({});
    setSelected(null);
    clearSlips();
    setMessage(null);
  };

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Sentences>
        {playing.map(n => (
          <Sentence key={n}>
            {partsOf(sentences[n]).reduce(({ items, k }, part, p) => {
              if (part.text) return { items: [...items, <span key={p}>{part.text.trim()}</span>], k };
              const id = `${n}:${k}`;
              const item = filled[id] ? <Filled key={p}>{`✓ ${part.gap}`}</Filled> : (
                <Gap
                  key={p}
                  ref={(element) => { boxes.current[id] = element; }}
                  type="button"
                  onClick={() => onGapClick(id)}
                  aria-label={`${strings.gap} ${k + 1}`}
                  $ready={Boolean(selected)}
                  $over={over === id}
                  $wrong={wrong === id}
                >
                  ?
                </Gap>
              );
              return { items: [...items, item], k: k + 1 };
            }, { items: [], k: 0 }).items}
          </Sentence>
        ))}
      </Sentences>

      <Bottom>
        {finished ? <WellDone slips={slips} onAgain={() => playAgain()} onPractise={() => playAgain(practiseItems(slips))} /> : (
          <>
            <Cards aria-label={strings.cardsTray}>
              {order.filter(id => byId[id] && !used.has(id)).map((id) => {
                const { word } = byId[id];
                return (
                  <Chip key={id} $selected={selected === id} $dragging={drag?.id === id}>
                    <Word type="button" aria-pressed={selected === id} {...handlersFor(id)} onClick={event => onTileClick(event, id)}>
                      {word}
                    </Word>
                    <Speaker type="button" onClick={() => speak(word, strings.lang)} aria-label={strings.listenTo(word)}>
                      <SpeakerIcon />
                    </Speaker>
                  </Chip>
                );
              })}
            </Cards>
            <Progress>{strings.progressDone(Object.keys(filled).length, total)}</Progress>
          </>
        )}
        <div aria-live="polite">
          {message && !finished && (
            <Message $kind={message.kind}>
              {message.kind === 'right' && <strong>{`✓ ${message.text}`}</strong>}
              {message.kind === 'wrong' && <span>{strings.tryAnotherBox}</span>}
              {message.kind === 'hint' && <span>{strings.pickWordFirst}</span>}
            </Message>
          )}
        </div>
      </Bottom>
      {drag && byId[drag.id] && (
        <Ghost style={{ left: drag.x, top: drag.y }} aria-hidden="true">
          {byId[drag.id].word}
        </Ghost>
      )}
    </>
  );
}
