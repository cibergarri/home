'use client';

import { useRef, useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import { SpeakerIcon, WellDone, QuestionNav } from '../game';
import { sayable } from '../NumberGame';
import { Instructions, Message } from '../LabelMap/style';
import {
  Sum, Answer, Keypad, Key, Row, Listen, Next,
} from '../NumberGame/style';
import {
  Card, Story, Operation, Term, Sign, Blocks, Cubes, Flat, Rod, Cube, Drawing, DrawingHead, Tools, Tool, Answering,
} from './style';

const MAX_FLATS = 9;
const MAX_RODS = 19;
const MAX_CUBES = 19;
const digits = n => ({ hundreds: Math.floor(n / 100), tens: Math.floor(n / 10) % 10, units: n % 10 });
const NO_CROSSES = { flats: [], rods: [], cubes: [] };

// A number drawn small in blocks, to look at.
function SmallBlocks({ n }) {
  const { hundreds, tens, units } = digits(n);
  return (
    <Blocks $small aria-hidden="true">
      {Array.from({ length: hundreds }, (_, i) => <Flat key={`h${i}`} as="span" $small />)}
      {Array.from({ length: tens }, (_, i) => <Rod key={`t${i}`} as="span" $small />)}
      {units > 0 && (
        <Cubes $small>
          {Array.from({ length: units }, (_, i) => <Cube key={`u${i}`} as="span" $small />)}
        </Cubes>
      )}
    </Blocks>
  );
}

// Adding and subtracting with base-ten blocks, as in the workbook. To add, the answer is drawn
// with flats of a hundred (when there are hundreds), rods of ten and unit cubes, and 10 cubes are
// swapped for a rod and 10 rods for a flat; to subtract, the blocks of the first number are
// crossed out. Either way the number is then typed. Subtractions don't borrow: each digit of the
// second number is no more than the first's.
export default function BlocksGame({ exercise }) {
  const { instructions, questions } = exercise;
  const text = useStrings();
  const [index, setIndex] = useState(0);
  const [flats, setFlats] = useState(0);
  const [rods, setRods] = useState(0);
  const [cubes, setCubes] = useState(0);
  const [fresh, setFresh] = useState(null);
  const [crossed, setCrossed] = useState(NO_CROSSES);
  const [drawn, setDrawn] = useState(false);
  const [typed, setTyped] = useState('');
  const [state, setState] = useState(null);
  const [mistakes, setMistakes] = useState(0);
  const [message, setMessage] = useState(null);
  const [finished, setFinished] = useState(false);
  const wrongTimer = useRef(null);

  const question = questions[index];
  const { a, b, op } = question;
  const adding = op === '+';
  const result = adding ? a + b : a - b;
  const big = Math.max(a, b, result) >= 100;
  const solved = state === 'right';
  const sentence = `${a} ${op} ${b} = ${result}`;
  const first = digits(a);
  const second = digits(b);
  const count = (h, t, u) => (big ? text.blocksCount(h, t, u) : text.tensAndUnits(t, u));

  const reset = () => {
    setFlats(0);
    setRods(0);
    setCubes(0);
    setFresh(null);
    setCrossed(NO_CROSSES);
    setDrawn(false);
    setTyped('');
    setState(null);
    setMessage(null);
  };

  // Drawing a sum.
  const addFlat = () => setFlats(n => Math.min(MAX_FLATS, n + 1));
  const addRod = () => setRods(n => Math.min(big ? MAX_RODS : 9, n + 1));
  const addCube = () => setCubes(n => Math.min(MAX_CUBES, n + 1));
  const exchangeUnits = () => {
    setCubes(n => n - 10);
    setFresh({ kind: 'rod', at: rods });
    setRods(n => n + 1);
    setMessage(null);
  };
  const exchangeTens = () => {
    setRods(n => n - 10);
    setFresh({ kind: 'flat', at: flats });
    setFlats(n => n + 1);
    setMessage(null);
  };
  const checkDrawing = () => {
    if (flats * 100 + rods * 10 + cubes !== result) {
      setMistakes(n => n + 1);
      setMessage({ kind: 'wrong', text: text.drawWrong });
    } else if (cubes >= 10) {
      setMessage({ kind: 'hint', text: text.drawExchange(cubes) });
    } else if (rods >= 10) {
      setMessage({ kind: 'hint', text: text.drawExchangeTens(rods) });
    } else {
      setDrawn(true);
      setMessage({ kind: 'right', text: text.drawDone });
    }
  };

  // Crossing out for a subtraction: done as soon as exactly the second number is crossed out.
  const toggle = (kind, i) => {
    const next = {
      ...crossed,
      [kind]: crossed[kind].includes(i) ? crossed[kind].filter(n => n !== i) : [...crossed[kind], i],
    };
    setCrossed(next);
    if (next.flats.length === second.hundreds && next.rods.length === second.tens && next.cubes.length === second.units) {
      setDrawn(true);
      setMessage({ kind: 'right', text: text.howManyLeft });
    } else {
      setDrawn(false);
      setMessage(null);
    }
  };

  // Writing the number.
  const type = (digit) => {
    if (typed.length >= 3) return;
    setTyped(value => value + digit);
    setState(null);
  };
  const check = () => {
    if (!typed) {
      setMessage({ kind: 'hint', text: text.typeFirst });
      return;
    }
    if (Number(typed) === result) {
      setState('right');
      setMessage(null);
      speak(sayable(sentence, text.lang), text.lang);
      return;
    }
    setMistakes(n => n + 1);
    setState('wrong');
    setMessage({ kind: 'wrong', text: text.tryAgain });
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => {
      setTyped('');
      setState(null);
    }, 600);
  };

  const goTo = (to) => {
    reset();
    setIndex(to);
  };

  const next = () => {
    if (index + 1 < questions.length) goTo(index + 1);
    else setFinished(true);
  };

  const playAgain = () => {
    goTo(0);
    setMistakes(0);
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

  const crossable = (Block, kind, label, total) => Array.from({ length: total }, (_, i) => (
    <Block
      key={`${kind}${i}`}
      type="button"
      aria-label={label}
      aria-pressed={crossed[kind].includes(i)}
      disabled={solved}
      $crossed={crossed[kind].includes(i)}
      onClick={() => toggle(kind, i)}
    />
  ));

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Card>
        {question.story && <Story>{question.story}</Story>}
        <Operation>
          <Term>
            {a}
            {adding && <SmallBlocks n={a} />}
          </Term>
          <Sign $raised={adding}>{op}</Sign>
          <Term>
            {b}
            {adding && <SmallBlocks n={b} />}
          </Term>
        </Operation>

        <Drawing $done={drawn} aria-label={text.yourDrawing} role="group">
          <DrawingHead>
            <span>
              {adding && text.drawHint}
              {!adding && (big
                ? text.crossOutAll(second.hundreds, second.tens, second.units)
                : text.crossOut(second.tens, second.units))}
            </span>
            <strong>
              {adding && count(flats, rods, cubes)}
              {!adding && (big
                ? text.crossedAll(crossed.flats.length, crossed.rods.length, crossed.cubes.length)
                : text.crossed(crossed.rods.length, crossed.cubes.length))}
            </strong>
          </DrawingHead>
          {adding ? (
            <Blocks>
              {Array.from({ length: flats }, (_, i) => (
                <Flat
                  key={`flat${i}`}
                  type="button"
                  aria-label={text.hundred}
                  disabled={drawn}
                  $new={fresh?.kind === 'flat' && fresh.at === i}
                  onClick={() => { setFlats(n => n - 1); setFresh(null); }}
                />
              ))}
              {Array.from({ length: rods }, (_, i) => (
                <Rod
                  key={`rod${i}`}
                  type="button"
                  aria-label={text.ten}
                  disabled={drawn}
                  $new={fresh?.kind === 'rod' && fresh.at === i}
                  onClick={() => { setRods(n => n - 1); setFresh(null); }}
                />
              ))}
              <Cubes>
                {Array.from({ length: cubes }, (_, i) => (
                  <Cube key={`cube${i}`} type="button" aria-label={text.unit} disabled={drawn} onClick={() => setCubes(n => n - 1)} />
                ))}
              </Cubes>
            </Blocks>
          ) : (
            <Blocks>
              {crossable(Flat, 'flats', text.hundred, first.hundreds)}
              {crossable(Rod, 'rods', text.ten, first.tens)}
              <Cubes>{crossable(Cube, 'cubes', text.unit, first.units)}</Cubes>
            </Blocks>
          )}
          {adding && !drawn && (
            <Tools>
              {big && <Tool type="button" $kind="hundred" onClick={addFlat} disabled={flats >= MAX_FLATS}>{text.addHundred}</Tool>}
              <Tool type="button" $kind="ten" onClick={addRod} disabled={rods >= (big ? MAX_RODS : 9)}>{text.addTen}</Tool>
              <Tool type="button" $kind="unit" onClick={addCube} disabled={cubes >= MAX_CUBES}>{text.addUnit}</Tool>
              <Tool type="button" $kind="exchange" onClick={exchangeUnits} disabled={cubes < 10}>{text.exchange}</Tool>
              {big && <Tool type="button" $kind="exchange" onClick={exchangeTens} disabled={rods < 10}>{text.exchangeTens}</Tool>}
              <Tool type="button" $kind="check" onClick={checkDrawing}>{text.checkDrawing}</Tool>
            </Tools>
          )}
        </Drawing>

        {drawn && (
          <Answering>
            <div>
              <Sum>
                <span>{`${a} ${op} ${b} =`}</span>
                <Answer $state={state} aria-label={text.yourAnswer}>{typed || '?'}</Answer>
              </Sum>
              {solved && (
                <Row>
                  <Listen type="button" onClick={() => speak(sayable(sentence, text.lang), text.lang)}>
                    <SpeakerIcon />
                    {text.listen}
                  </Listen>
                  <Next type="button" onClick={next}>{index + 1 < questions.length ? text.next : text.finish}</Next>
                </Row>
              )}
            </div>
            {!solved && (
              <Keypad role="group" aria-label={text.keypad}>
                {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(digit => (
                  <Key key={digit} type="button" onClick={() => type(digit)}>{digit}</Key>
                ))}
                <Key type="button" $kind="delete" onClick={() => setTyped(value => value.slice(0, -1))} aria-label={text.delete}>⌫</Key>
                <Key type="button" onClick={() => type('0')}>0</Key>
                <Key type="button" $kind="check" onClick={check} aria-label={text.check}>✓</Key>
              </Keypad>
            )}
          </Answering>
        )}
      </Card>
      <QuestionNav index={index} total={questions.length} onGo={goTo} />
      <div aria-live="polite">
        {message && <Message $kind={message.kind}>{message.text}</Message>}
      </div>
    </>
  );
}
