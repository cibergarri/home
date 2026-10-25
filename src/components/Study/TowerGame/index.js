'use client';

import { useId, useRef, useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import { SpeakerIcon, WellDone, QuestionNav } from '../game';
import { sayable } from '../NumberGame';
import { Instructions, Message } from '../LabelMap/style';
import { Row, Listen, Next } from '../NumberGame/style';
import {
  Card, Story, Tower, Head, Cell, Box, Side, Prompt, Keypad, Key,
} from './style';

const digits = n => ({ hundreds: Math.floor(n / 100), tens: Math.floor(n / 10) % 10, units: n % 10 });

// The boxes to fill in, in order, with what goes in each and what to say about it: units first,
// then (for a sum that carries) the 1 above the tens, then the tens, and the same again for the
// hundreds when the numbers have them.
const stepsFor = ({ a, b, op }, text) => {
  const x = digits(a);
  const y = digits(b);
  const result = digits(op === '-' ? a - b : a + b);
  const hundreds = Math.max(a, b) >= 100 || result.hundreds > 0;
  if (op === '-') {
    return [
      { box: 'units', value: x.units - y.units, prompt: text.subtractUnits(x.units, y.units) },
      { box: 'tens', value: x.tens - y.tens, prompt: text.subtractTens(x.tens, y.tens) },
      ...(hundreds ? [{ box: 'hundreds', value: x.hundreds - y.hundreds, prompt: text.subtractHundreds(x.hundreds, y.hundreds) }] : []),
    ];
  }
  const units = x.units + y.units;
  const carry = units >= 10 ? 1 : 0;
  const tens = carry + x.tens + y.tens;
  const carryTens = tens >= 10 ? 1 : 0;
  const parts = (first, ...rest) => [first && '1', ...rest.map(n => n > 0 && String(n))].filter(Boolean);
  return [
    { box: 'units', value: units % 10, prompt: text.addUnits(x.units, y.units) },
    ...(carry ? [{ box: 'carry', value: 1, prompt: text.carry(units) }] : []),
    { box: 'tens', value: tens % 10, prompt: text.addTens(parts(carry, x.tens, y.tens)) },
    ...(carryTens ? [{ box: 'carryHundreds', value: 1, prompt: text.carryHundreds(tens) }] : []),
    ...(hundreds ? [{ box: 'hundreds', value: carryTens + x.hundreds + y.hundreds, prompt: text.addHundreds(parts(carryTens, x.hundreds, y.hundreds)) }] : []),
  ];
};

// Sums and subtractions in columns ("en torre"), one box at a time, guided: each digit typed goes
// in the glowing box and is checked straight away. A sum whose units (or tens) come to 10 or more
// asks for the 1 carried above the next column. Numbers up to 999, with a column for the hundreds
// when there are any; results under 1000, and subtractions that don't borrow.
export default function TowerGame({ exercise }) {
  const { instructions, questions } = exercise;
  const text = useStrings();
  const [index, setIndex] = useState(0);
  const [filled, setFilled] = useState({});
  const [wrong, setWrong] = useState(null);
  const [mistakes, setMistakes] = useState(0);
  const [message, setMessage] = useState(null);
  const [finished, setFinished] = useState(false);
  const wrongTimer = useRef(null);
  const promptId = useId();

  const question = questions[index];
  const steps = stepsFor(question, text);
  const step = steps.find(({ box }) => filled[box] === undefined);
  const solved = !step;
  const a = digits(question.a);
  const b = digits(question.b);
  const result = question.op === '-' ? question.a - question.b : question.a + question.b;
  const sentence = `${question.a} ${question.op} ${question.b} = ${result}`;
  const big = steps.some(({ box }) => box === 'hundreds');
  const [hundredsLabel, tensLabel, unitsLabel] = big ? text.columnsHTU : ['', ...text.columnsTU];

  const type = (digit) => {
    if (solved) return;
    if (digit === step.value) {
      const next = { ...filled, [step.box]: digit };
      setFilled(next);
      setMessage(null);
      if (steps.every(({ box }) => next[box] !== undefined)) speak(sayable(sentence, text.lang), text.lang);
      return;
    }
    setMistakes(count => count + 1);
    setWrong(step.box);
    setMessage(text.wrongDigit);
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => setWrong(null), 600);
  };

  const goTo = (to) => {
    setFilled({});
    setMessage(null);
    setIndex(to);
  };

  const next = () => {
    if (index + 1 < questions.length) goTo(index + 1);
    else setFinished(true);
  };

  const playAgain = () => {
    setIndex(0);
    setFilled({});
    setMistakes(0);
    setMessage(null);
    setFinished(false);
  };

  if (finished) {
    return (
      <>
        <Instructions>{instructions}</Instructions>
        <WellDone mistakes={mistakes} onAgain={playAgain} />
      </>
    );
  }

  const box = (name, small = false) => {
    if (!steps.some(s => s.box === name)) return null;
    return (
      <Box
        $small={small}
        $active={step?.box === name}
        $done={filled[name] !== undefined}
        $wrong={wrong === name}
        data-testid={`box-${name}`}
      >
        {filled[name] ?? ''}
      </Box>
    );
  };

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Card>
        {question.story && <Story>{question.story}</Story>}
        <Tower role="group" aria-label={text.tower} aria-describedby={promptId} $columns={big ? 3 : 2}>
          <Cell $plain />
          {big && <Head $kind="hundreds">{hundredsLabel}</Head>}
          <Head $kind="tens" $first={!big}>{tensLabel}</Head>
          <Head $kind="units">{unitsLabel}</Head>

          <Cell $plain />
          {big && <Cell>{question.op === '+' && box('carryHundreds', true)}</Cell>}
          <Cell>{question.op === '+' && box('carry', true)}</Cell>
          <Cell />

          <Cell $plain />
          {big && <Cell>{a.hundreds || ''}</Cell>}
          <Cell>{a.hundreds || a.tens ? a.tens : ''}</Cell>
          <Cell>{a.units}</Cell>

          <Cell $plain>{question.op}</Cell>
          {big && <Cell>{b.hundreds || ''}</Cell>}
          <Cell>{b.hundreds || b.tens ? b.tens : ''}</Cell>
          <Cell>{b.units}</Cell>

          <Cell $plain />
          {big && <Cell $line>{box('hundreds')}</Cell>}
          <Cell $line>{box('tens')}</Cell>
          <Cell $line>{box('units')}</Cell>
        </Tower>

        <Side>
          <Prompt id={promptId} aria-live="polite">
            {solved ? `✓ ${sentence}` : step.prompt}
          </Prompt>
          {solved ? (
            <Row>
              <Listen type="button" onClick={() => speak(sayable(sentence, text.lang), text.lang)}>
                <SpeakerIcon />
                {text.listen}
              </Listen>
              <Next type="button" onClick={next}>{index + 1 < questions.length ? text.next : text.finish}</Next>
            </Row>
          ) : (
            <Keypad role="group" aria-label={text.keypad}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(digit => (
                <Key key={digit} type="button" onClick={() => type(digit)}>{digit}</Key>
              ))}
            </Keypad>
          )}
        </Side>
      </Card>
      <QuestionNav index={index} total={questions.length} onGo={goTo} />
      <div aria-live="polite">
        {message && <Message $kind="wrong">{message}</Message>}
      </div>
    </>
  );
}
