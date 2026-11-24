'use client';

import { useRef, useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import Explain from '../Explain';
import {
  SpeakerIcon, WellDone, useSlips, practiseItems,
} from '../game';
import {
  Instructions, Message, Progress, Speaker,
} from '../LabelMap/style';
import {
  Scene, Spot, Ask, What, Answers, Answer, Hint,
} from './style';

// A picture with things to find in it, as in the book's "cross out the bad behaviours and circle
// the good ones": `spots` are where each one is (a circle x, y, r in the drawing), what is
// happening (`text`, and `es` behind its flag) and its `answer`, one of the `answers` (each an id,
// a `label` and a `mark`, 'circle' or 'cross'). Tap someone in the picture, then the answer: a
// right one is marked on the picture and read aloud; a wrong one shakes. At the end, the ones gone
// wrong can be found again on their own.
export default function SpotGame({ exercise }) {
  const {
    instructions, hint, width, height, Drawing, spots: all, answers,
  } = exercise;
  const text = useStrings();
  const [only, setOnly] = useState(null); // the spots to find again, if not all
  const spots = only ? all.filter(spot => only.includes(spot.id)) : all;
  const [done, setDone] = useState([]);
  const [selected, setSelected] = useState(null);
  const [wrong, setWrong] = useState(false);
  const [slips, slip, clearSlips] = useSlips();
  const [message, setMessage] = useState(null);
  const wrongTimer = useRef(null);

  const byId = Object.fromEntries(all.map(spot => [spot.id, spot]));
  const answerOf = id => answers.find(answer => answer.id === id);
  const finished = done.length === spots.length;
  const spot = selected && byId[selected];

  const choose = (answer) => {
    if (answer.id === spot.answer) {
      setDone(current => [...current, spot.id]);
      setSelected(null);
      speak(spot.text, text.lang);
      setMessage({ kind: 'right', text: `${answer.label}: ${spot.text}` });
      return;
    }
    slip({
      item: spot.id, prompt: spot.text, wrong: answer.label, right: answerOf(spot.answer).label,
    });
    setWrong(true);
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => setWrong(false), 600);
    setMessage({ kind: 'wrong' });
  };

  const pick = (id) => {
    setSelected(current => (current === id ? null : id));
    setMessage(null);
  };

  const playAgain = (which = null) => {
    setOnly(which);
    setDone([]);
    setSelected(null);
    clearSlips();
    setMessage(null);
  };

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Scene>
        <svg viewBox={`0 0 ${width} ${height}`} role="group" aria-label={instructions}>
          <Drawing />
          {all.filter(({ id }) => done.includes(id)).map(({
            id, x, y, r, answer,
          }) => (answerOf(answer).mark === 'circle' ? (
            <ellipse key={id} cx={x} cy={y} rx={r} ry={r * 1.05} fill="none" stroke="#2f9e5a" strokeWidth={8} data-testid="circle" />
          ) : (
            <path key={id} d={`M${x - r * 0.7} ${y - r * 0.7} L${x + r * 0.7} ${y + r * 0.7} M${x + r * 0.7} ${y - r * 0.7} L${x - r * 0.7} ${y + r * 0.7}`} stroke="#e2483d" strokeWidth={12} strokeLinecap="round" data-testid="cross" />
          )))}
          {spots.filter(({ id }) => !done.includes(id)).map(({
            id, x, y, r, text: said,
          }) => (
            <Spot
              key={id}
              cx={x}
              cy={y}
              r={r}
              role="button"
              tabIndex={0}
              aria-label={said}
              aria-pressed={selected === id}
              $selected={selected === id}
              onClick={() => pick(id)}
              onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); pick(id); } }}
            />
          ))}
        </svg>
      </Scene>

      {finished ? <WellDone slips={slips} onAgain={() => playAgain()} onPractise={() => playAgain(practiseItems(slips))} /> : (
        <>
          {spot ? (
            <Ask $wrong={wrong}>
              <What>
                <span>{spot.text}</span>
                <Speaker type="button" onClick={() => speak(spot.text, text.lang)} aria-label={text.listenTo(spot.text)}>
                  <SpeakerIcon />
                </Speaker>
                {spot.es && <Explain word={spot.text} meaning={{ es: spot.es }} variant="chip" />}
              </What>
              <Answers>
                {answers.map(answer => <Answer key={answer.id} type="button" onClick={() => choose(answer)}>{answer.label}</Answer>)}
              </Answers>
            </Ask>
          ) : <Hint>{hint}</Hint>}
          <Progress>{text.progressDone(done.length, spots.length)}</Progress>
        </>
      )}
      <div aria-live="polite">
        {message && !finished && (
          <Message $kind={message.kind}>
            {message.kind === 'right' && <strong>{`✓ ${message.text}`}</strong>}
            {message.kind === 'wrong' && <span>{text.tryAgain}</span>}
          </Message>
        )}
      </div>
    </>
  );
}
