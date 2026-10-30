'use client';

import { useRef, useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import { SpeakerIcon, WellDone, QuestionNav } from '../game';
import WritingPad from '../WritingPad';
import { Instructions, Message } from '../LabelMap/style';
import {
  Card, Body, Story, Picture, Sum, Answer, Hint, Keypad, Key, Row, Listen, Next, Secret, SecretLetter, Answering, Switch,
} from './style';

const MAX_DIGITS = 3;

// How a sum is read aloud: the signs as words, so the voice does not spell them out.
const SIGNS = {
  en: { '+': 'plus', '-': 'minus', '−': 'minus', '=': 'equals', '→': 'rounds to' },
  es: { '+': 'más', '-': 'menos', '−': 'menos', '=': 'es igual a', '→': 'se aproxima a' },
};
export const sayable = (sum, lang) => sum.replace(/[+\-−=→]/g, sign => ` ${SIGNS[lang][sign]} `);

// Sums to work out, one after another, typed on a number pad. Each question has a `prompt` with a
// `?` where the answer goes ("45 + 20 = ?", or "? personas" after a word problem in `story`), or
// several `?` and as many answers in order ("145 = 1 C + ? D + ? U", answer [4, 5]), filled one at
// a time. It may have a `hint` or a picture (`scene`). A wrong answer shakes and is cleared for
// another try. If the questions carry a `letter`, each one solved uncovers its letter of a secret
// message (`space: true` leaves a gap after it). With `write: true` the answer is written by hand,
// and read, though the number keys are a tap away.
export default function NumberGame({ exercise }) {
  const { instructions, questions } = exercise;
  const text = useStrings();
  const [index, setIndex] = useState(0);
  const [filled, setFilled] = useState([]);
  const [typed, setTyped] = useState('');
  const [state, setState] = useState(null);
  const [mistakes, setMistakes] = useState(0);
  const [message, setMessage] = useState(null);
  const [finished, setFinished] = useState(false);
  const [uncovered, setUncovered] = useState([]);
  const [writing, setWriting] = useState(Boolean(exercise.write));
  const wrongTimer = useRef(null);

  const question = questions[index];
  const answers = [].concat(question.answer);
  const parts = question.prompt.split('?');
  const current = filled.length;
  const solved = current === answers.length;
  const solution = parts.map((part, i) => `${part}${i < answers.length ? answers[i] : ''}`).join('');
  const secret = questions.some(q => q.letter);

  const type = (digit) => {
    if (solved || typed.length >= MAX_DIGITS) return;
    setTyped(value => value + digit);
    setState(null);
    setMessage(null);
  };

  const check = (value = typed, read = false) => {
    if (!value) {
      setMessage(text.typeFirst);
      return;
    }
    if (Number(value) === answers[current]) {
      const next = [...filled, Number(value)];
      setFilled(next);
      setTyped('');
      setMessage(null);
      if (next.length === answers.length) {
        setUncovered(done => (done.includes(index) ? done : [...done, index]));
        speak(sayable(solution, text.lang), text.lang);
      }
      return;
    }
    setMistakes(count => count + 1);
    setTyped(value);
    setState('wrong');
    setMessage(read ? `${text.readAs(value)} ${text.tryAgain}` : text.tryAgain);
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => {
      setTyped('');
      setState(null);
    }, 600);
  };

  const goTo = (to) => {
    setFilled([]);
    setTyped('');
    setState(null);
    setMessage(null);
    setIndex(to);
  };

  const next = () => {
    if (index + 1 < questions.length) goTo(index + 1);
    else setFinished(true);
  };

  const playAgain = () => {
    goTo(0);
    setMistakes(0);
    setUncovered([]);
    setFinished(false);
  };

  const secretLine = secret && (
    <Secret aria-label={questions.map((q, i) => (uncovered.includes(i) ? q.letter : '_')).join('')}>
      {questions.map((q, i) => (
        // Letters are in a fixed order: the i-th is the i-th question's.
        <SecretLetter key={`${q.prompt}-${q.letter}`} $found={uncovered.includes(i)} $space={q.space}>
          {uncovered.includes(i) ? q.letter : ''}
        </SecretLetter>
      ))}
    </Secret>
  );

  if (finished) {
    return (
      <>
        <Instructions>{instructions}</Instructions>
        {secretLine}
        <WellDone mistakes={mistakes} onAgain={playAgain} />
      </>
    );
  }

  const boxFor = (i) => {
    if (i < current) return <Answer key={`a${i}`} $state="right">{filled[i]}</Answer>;
    if (i === current) return <Answer key={`a${i}`} $state={state} aria-label={text.yourAnswer}>{typed || '?'}</Answer>;
    return <Answer key={`a${i}`} $state="pending">?</Answer>;
  };

  return (
    <>
      <Instructions>{instructions}</Instructions>
      {secretLine}
      <Card>
        <Body>
          {question.story && <Story>{question.story}</Story>}
          {question.scene && (
            <Picture $ratio={`${question.scene.width} / ${question.scene.height}`}>
              <svg viewBox={`0 0 ${question.scene.width} ${question.scene.height}`} role="img" aria-label={text.picture}>
                <question.scene.Drawing {...question.scene.props} />
              </svg>
            </Picture>
          )}
          <Sum aria-live="polite">
            {parts.map((part, i) => (
              <span key={`p${part}${i}`} style={{ display: 'contents' }}>
                {part.trim() && <span>{part.trim()}</span>}
                {i < answers.length && boxFor(i)}
              </span>
            ))}
          </Sum>
          {question.hint && <Hint>{question.hint}</Hint>}
          {solved && (
            <Row>
              <Listen type="button" onClick={() => speak(sayable(solution, text.lang), text.lang)}>
                <SpeakerIcon />
                {text.listen}
              </Listen>
              <Next type="button" onClick={next}>{index + 1 < questions.length ? text.next : text.finish}</Next>
            </Row>
          )}
        </Body>
        {!solved && (
          <Answering>
            {writing ? (
              <WritingPad
                onRead={value => check(value.slice(0, MAX_DIGITS), true)}
                onEmpty={() => setMessage(text.writeFirst)}
                onFail={() => setMessage(text.cannotRead)}
                disabled={state === 'wrong'}
              />
            ) : (
              <Keypad role="group" aria-label={text.keypad}>
                {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(digit => (
                  <Key key={digit} type="button" onClick={() => type(digit)}>{digit}</Key>
                ))}
                <Key type="button" $kind="delete" onClick={() => setTyped(value => value.slice(0, -1))} aria-label={text.delete}>⌫</Key>
                <Key type="button" onClick={() => type('0')}>0</Key>
                <Key type="button" $kind="check" onClick={() => check()} aria-label={text.check}>✓</Key>
              </Keypad>
            )}
            {exercise.write && (
              <Switch type="button" onClick={() => setWriting(on => !on)}>
                {writing ? text.useKeys : text.useHand}
              </Switch>
            )}
          </Answering>
        )}
      </Card>
      <QuestionNav index={index} total={questions.length} onGo={goTo} />
      <div aria-live="polite">
        {message && <Message $kind="wrong">{message}</Message>}
      </div>
    </>
  );
}
