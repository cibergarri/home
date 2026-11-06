'use client';

import { useId, useRef, useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import {
  SpeakerIcon, WellDone, QuestionNav, useSlips, practiseItems,
} from '../game';
import { sayable } from '../NumberGame';
import { Instructions, Message } from '../LabelMap/style';
import { Row, Listen, Next } from '../NumberGame/style';
import {
  Card, Story, Tower, Head, Cell, Box, Digit, Side, Prompt, Keypad, Key,
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
    // Restar desagrupando, as in the book: when the top digit is smaller, 1 of the next column is
    // swapped for 10 of this one. Its digit is crossed out and the new ones written above.
    const borrowUnits = x.units < y.units;
    const tensLeft = x.tens - (borrowUnits ? 1 : 0);
    const borrowTens = tensLeft < y.tens;
    const tensTop = borrowUnits && borrowTens ? 'topTens2' : 'topTens';
    return [
      ...(borrowUnits ? [
        { box: 'topTens', value: tensLeft, prompt: text.borrowTens(x.units, y.units, x.tens) },
        { box: 'topUnits', value: x.units + 10, prompt: text.borrowUnits(x.units) },
      ] : []),
      { box: 'units', value: x.units + (borrowUnits ? 10 : 0) - y.units, prompt: text.subtractUnits(x.units + (borrowUnits ? 10 : 0), y.units) },
      ...(borrowTens ? [
        { box: 'topHundreds', value: x.hundreds - 1, prompt: text.borrowHundreds(tensLeft, y.tens, x.hundreds) },
        { box: tensTop, value: tensLeft + 10, prompt: text.borrowTensFromHundreds(tensLeft) },
      ] : []),
      { box: 'tens', value: tensLeft + (borrowTens ? 10 : 0) - y.tens, prompt: text.subtractTens(tensLeft + (borrowTens ? 10 : 0), y.tens) },
      ...(hundreds ? [{ box: 'hundreds', value: x.hundreds - (borrowTens ? 1 : 0) - y.hundreds, prompt: text.subtractHundreds(x.hundreds - (borrowTens ? 1 : 0), y.hundreds) }] : []),
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
// asks for the 1 carried above the next column; a subtraction whose top digit is too small swaps 1
// of the next column for 10, crossing out its digit and writing the new ones above. Numbers up to
// 999, with a column for the hundreds when there are any; results under 1000, and no borrowing
// across a 0 in the tens. At the end, the steps gone wrong can be looked at again, and those sums
// done again on their own.
export default function TowerGame({ exercise }) {
  const { instructions, questions } = exercise;
  const text = useStrings();
  const [index, setIndex] = useState(0);
  const [filled, setFilled] = useState({});
  const [partial, setPartial] = useState(''); // the first digit of a 10 to 19 written above
  const [wrong, setWrong] = useState(null);
  const [slips, slip, clearSlips] = useSlips();
  const [message, setMessage] = useState(null);
  const [finished, setFinished] = useState(false);
  const [only, setOnly] = useState(null); // the sums to do again, if not all
  const wrongTimer = useRef(null);
  const promptId = useId();

  const order = only ?? questions.map((q, i) => i);
  const question = questions[order[index]];
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
    const typed = `${partial}${digit}`;
    if (step.value >= 10 && typed.length < 2 && String(step.value).startsWith(typed)) {
      setPartial(typed);
      setMessage(null);
      return;
    }
    if (Number(typed) === step.value) {
      const next = { ...filled, [step.box]: step.value };
      setFilled(next);
      setPartial('');
      setMessage(null);
      if (steps.every(({ box }) => next[box] !== undefined)) speak(sayable(sentence, text.lang), text.lang);
      return;
    }
    setPartial('');
    slip({
      item: order[index],
      key: `${order[index]}-${step.box}`,
      prompt: `${question.a} ${question.op} ${question.b}`,
      note: step.prompt,
      wrong: Number(typed),
      right: step.value,
    });
    setWrong(step.box);
    setMessage(text.wrongDigit);
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => setWrong(null), 600);
  };

  const goTo = (to) => {
    setFilled({});
    setPartial('');
    setMessage(null);
    setIndex(to);
  };

  const next = () => {
    if (index + 1 < order.length) goTo(index + 1);
    else setFinished(true);
  };

  const playAgain = (sumsToDo = null) => {
    setOnly(sumsToDo);
    setIndex(0);
    setFilled({});
    setPartial('');
    clearSlips();
    setMessage(null);
    setFinished(false);
  };

  if (finished) {
    return (
      <>
        <Instructions>{instructions}</Instructions>
        <WellDone slips={slips} onAgain={() => playAgain()} onPractise={() => playAgain(practiseItems(slips))} />
      </>
    );
  }

  const box = (name, small = false) => {
    if (!steps.some(s => s.box === name)) return null;
    return (
      <Box
        $small={small}
        $crossed={name === 'topTens' && filled.topTens2 !== undefined}
        $active={step?.box === name}
        $done={filled[name] !== undefined}
        $wrong={wrong === name}
        data-testid={`box-${name}`}
      >
        {filled[name] ?? (step?.box === name ? partial : '')}
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
          {big && <Cell>{question.op === '+' ? box('carryHundreds', true) : box('topHundreds', true)}</Cell>}
          <Cell $pair>{question.op === '+' ? box('carry', true) : <>{box('topTens', true)}{box('topTens2', true)}</>}</Cell>
          <Cell>{question.op === '-' && box('topUnits', true)}</Cell>

          <Cell $plain />
          {big && <Cell><Digit $crossed={filled.topHundreds !== undefined}>{a.hundreds || ''}</Digit></Cell>}
          <Cell><Digit $crossed={filled.topTens !== undefined}>{a.hundreds || a.tens ? a.tens : ''}</Digit></Cell>
          <Cell><Digit $crossed={filled.topUnits !== undefined}>{a.units}</Digit></Cell>

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
              <Next type="button" onClick={next}>{index + 1 < order.length ? text.next : text.finish}</Next>
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
      <QuestionNav index={index} total={order.length} onGo={goTo} />
      <div aria-live="polite">
        {message && <Message $kind="wrong">{message}</Message>}
      </div>
    </>
  );
}
