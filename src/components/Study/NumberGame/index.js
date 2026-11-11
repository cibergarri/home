'use client';

import { Fragment, useRef, useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import {
  SpeakerIcon, WellDone, QuestionNav, useSlips, practiseItems,
} from '../game';
import WritingPad from '../WritingPad';
import { sayable } from './sayable';
import ColumnSum, { fitsInColumns } from '../TowerGame/ColumnSum';
import { mixed } from '../QuizGame';
import { Choices, Choice, ChoiceButton } from '../QuizGame/style';
import { Instructions, Message } from '../LabelMap/style';
import {
  Card, Body, Story, Found, Picture, Sum, Data, DataRow, DataLabel, AnswerLabel, StepDone, Answer, Helper, Columns, OperationChoices, Hint, Keypad, Key, Row, Listen, Next, Secret,
  SecretLetter, Answering, Switch,
} from './style';

const MAX_DIGITS = 3;

// Words after a number that do not say what it counts: «8 y», «20 de», «15 más».
const NOT_UNITS = new Set([
  'y', 'e', 'o', 'de', 'del', 'en', 'a', 'al', 'el', 'la', 'los', 'las', 'un', 'una', 'que', 'por', 'para', 'con',
  'sin', 'se', 'es', 'son', 'más', 'menos', 'le', 'les', 'lo', 'su', 'sus', 'and', 'of', 'in', 'the', 'more',
]);

// The data of a word problem: each number in its `story`, where it is (`at`, `end`) and what it
// counts, if the next word says it («25 huevos», «12 €», «1 centena»). Only for a problem that
// asks something (a `?` in the story) with two numbers or more, all whole and short enough to
// type, and whose `prompt` gives no numbers itself («20 + 2 = ?» already has them). Ordinals
// («2.º», «1.ª») are not data. `data: false` leaves a problem out, and `data` can also say which
// numbers are its data, in the order to write them, each with what it means:
// `[[25, 'huevos para la tortilla grande'], [8, 'huevos para la tortilla pequeña']]` (or just the
// numbers, `[305, 152]`, when the story has others that are not data, «la zona 1»).
export const problemData = ({ story, prompt, data }) => {
  if (!story || data === false) return [];
  const given = Array.isArray(data);
  if (!given && (!story.includes('?') || /\d/.test(prompt) || /\d[,.:]\d/.test(story))) return [];
  const numbers = [...story.matchAll(/\d+(?!\d|\.?[ºª])/g)].map((match) => {
    const value = Number(match[0]);
    const after = story.slice(match.index + match[0].length).match(/^\s*(€|[a-záéíóúüñ]+)/i);
    const word = after?.[1];
    const counts = word === '€' || (word && !NOT_UNITS.has(word.toLowerCase()) && (/s$/i.test(word) || value === 1));
    return {
      value, at: match.index, end: match.index + match[0].length, unit: counts ? word : null,
    };
  });
  const chosen = given
    ? data.reduce((list, datum) => {
      const [value, label] = [].concat(datum);
      const number = numbers.find(one => one.value === value && !list.some(other => other.at === one.at));
      if (number) return [...list, { ...number, label }];
      return label ? [...list, { value, label, at: null }] : list; // from an earlier step: nothing to underline
    }, [])
    : numbers;
  if (chosen.length < 2 || chosen.some(({ value }) => String(value).length > MAX_DIGITS)) return [];
  return chosen;
};

// The sum or subtraction that solves a step, to work out in columns: the one in its prompt
// («122 + 16 = ?»), or the one its two data make to give the answer (the bigger on top, to take
// away). Only when a number has two digits or more, and the sum fits in the columns.
export const columnSumFor = (step, data) => {
  if (step.choices || [].concat(step.answer).length > 1) return null;
  const written = step.prompt.match(/^\s*(\d+)\s*([+-])\s*(\d+)\s*=\s*\?\s*$/);
  let sum = null;
  if (written) sum = { a: Number(written[1]), op: written[2], b: Number(written[3]), written: true };
  else if (data.length === 2) {
    const [p, q] = data.map(d => d.value);
    if (p + q === step.answer) sum = { a: p, b: q, op: '+' };
    else if (Math.abs(p - q) === step.answer) sum = { a: Math.max(p, q), b: Math.min(p, q), op: '-' };
  }
  if (!sum || Math.max(sum.a, sum.b) < 10 || !fitsInColumns(sum)) return null;
  return sum;
};

// The story with the data found so far marked, as if underlined in the notebook.
function MarkedStory({ story, data, found }) {
  const pieces = [];
  let from = 0;
  const marked = data.filter((d, i) => found.includes(i) && d.at !== null).sort((a, b) => a.at - b.at);
  marked.forEach(({ at, end }) => {
    pieces.push(story.slice(from, at), <Found key={at}>{story.slice(at, end)}</Found>);
    from = end;
  });
  pieces.push(story.slice(from));
  return <Story>{pieces}</Story>;
}

export { sayable };

// Sums to work out, one after another, typed on a number pad. Each question has a `prompt` with a
// `?` where the answer goes ("45 + 20 = ?", or "? personas" after a word problem in `story`), or
// several `?` and as many answers in order ("145 = 1 C + ? D + ? U", answer [4, 5]), filled one at
// a time. It may have a `hint` or a picture (`scene`). A wrong answer shakes and is cleared for
// another try. If the questions carry a `letter`, each one solved uncovers its letter of a secret
// message (`space: true` leaves a gap after it). A word problem asks first for its data, the numbers
// the story gives (see `problemData`): one after another, each with what it means, if the problem
// says so, or else in any order. Only then comes the answer.
//
// A problem can go on (`then`) with more steps about the same story, each with a bit more of it
// (`story`) and either a number to work out (`prompt` and `answer`, maybe with its own `data` and
// `scene`) or `choices` to pick the `answer` from. The steps done stay above, solved.
//
// With `write: true` the answer is written by hand, and read, though the number keys are a tap
// away. At the end, the mistakes can be looked at again, and those questions played again on their
// own (with no secret message then).
export default function NumberGame({ exercise }) {
  const { instructions, questions } = exercise;
  const text = useStrings();
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState(0); // which step of the problem
  const [filled, setFilled] = useState([]);
  const [typed, setTyped] = useState('');
  const [tried, setTried] = useState([]); // the wrong choices of a step with `choices`
  const [state, setState] = useState(null);
  const [slips, slip, clearSlips] = useSlips();
  const [message, setMessage] = useState(null);
  const [finished, setFinished] = useState(false);
  const [uncovered, setUncovered] = useState([]);
  const [writing, setWriting] = useState(Boolean(exercise.write));
  const [only, setOnly] = useState(null); // the questions to practise again, if not all
  const [dataFound, setDataFound] = useState([]); // which of the step's data are written
  const [helper, setHelper] = useState(null); // 'pick' the operation, or work it out in 'columns'
  const wrongTimer = useRef(null);

  const order = only ?? questions.map((q, i) => i);
  const question = questions[order[index]];
  const steps = [question, ...(question.then ?? [])];
  const step = steps[stage];
  const lastStep = stage === steps.length - 1;
  const choosing = Boolean(step.choices);
  const answers = [].concat(step.answer);
  const parts = choosing ? [] : step.prompt.split('?');
  const data = choosing ? [] : problemData(step);
  const findingData = dataFound.length < data.length;
  const inOrder = data.some(d => d.label); // each datum has its own box, filled one after another
  const current = filled.length;
  const stepSolved = choosing ? tried.includes(step.answer) : !findingData && current === answers.length;
  const solved = lastStep && stepSolved;
  const solutionOf = one => (one.choices
    ? one.answer
    : one.prompt.split('?').map((part, i, all) => `${part}${i < all.length - 1 ? [].concat(one.answer)[i] : ''}`).join(''));
  const solution = solutionOf(step);
  const columns = columnSumFor(step, data);
  const scene = steps.slice(0, stage + 1).reverse().find(one => one.scene)?.scene;
  const secret = !only && questions.some(q => q.letter);

  const resetStep = () => {
    setFilled([]);
    setDataFound([]);
    setTried([]);
    setHelper(null);
    setTyped('');
    setState(null);
    setMessage(null);
  };

  // A step solved: the next one, or the end of the problem.
  const stepDone = () => {
    speak(choosing ? step.answer : sayable(solution, text.lang), text.lang);
    if (!lastStep) {
      resetStep();
      setStage(stage + 1);
      return;
    }
    setUncovered(done => (done.includes(index) ? done : [...done, index]));
  };

  const type = (digit) => {
    if (stepSolved || typed.length >= MAX_DIGITS) return;
    setTyped(value => value + digit);
    setState(null);
    setMessage(null);
  };

  const shake = (value) => {
    setTyped(value);
    setState('wrong');
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => {
      setTyped('');
      setState(null);
    }, 600);
  };

  const check = (value = typed, read = false) => {
    if (!value) {
      setMessage(text.typeFirst);
      return;
    }
    if (findingData) {
      const datum = inOrder
        ? [dataFound.length].find(i => data[i].value === Number(value))
        : data.findIndex((d, i) => d.value === Number(value) && !dataFound.includes(i));
      if (datum >= 0) {
        setDataFound(list => [...list, datum]);
        setTyped('');
        setMessage(null);
        return;
      }
      shake(value);
      const wanted = data[dataFound.length];
      if (!data.some(d => d.value === Number(value))) setMessage(text.notInProblem(value));
      else if (inOrder) setMessage(text.notThisData(value, wanted.label));
      else setMessage(text.dataAlready(value));
      return;
    }
    if (Number(value) === answers[current]) {
      const next = [...filled, Number(value)];
      setFilled(next);
      setTyped('');
      setMessage(null);
      if (next.length === answers.length) stepDone();
      return;
    }
    slip({
      item: order[index],
      key: `${order[index]}-${stage}-${current}`,
      prompt: step.prompt,
      note: [question.story, ...steps.slice(1, stage + 1).map(one => one.story)].filter(Boolean).join(' '),
      scene,
      wrong: Number(value),
      right: answers[current],
    });
    shake(value);
    setMessage(read ? `${text.readAs(value)} ${text.tryAgain}` : text.tryAgain);
  };

  const choose = (choice) => {
    if (choice === step.answer) {
      setTried(list => [...list, choice]);
      stepDone();
      return;
    }
    slip({
      item: order[index],
      key: `${order[index]}-${stage}`,
      prompt: step.story,
      note: question.story,
      wrong: choice,
      right: step.answer,
    });
    setTried(list => [...list, choice]);
  };

  const openColumns = () => {
    setMessage(null);
    setHelper(columns.written ? 'columns' : 'pick');
  };

  const pickOperation = (op) => {
    if (op === columns.op) {
      setMessage(null);
      setHelper('columns');
      return;
    }
    setMessage(text.notThisOperation);
  };

  const columnsDone = (result) => {
    setFilled([result]);
    setTyped('');
    stepDone();
  };

  const goTo = (to) => {
    resetStep();
    setStage(0);
    setIndex(to);
  };

  const next = () => {
    if (index + 1 < order.length) goTo(index + 1);
    else setFinished(true);
  };

  const playAgain = (questionsToPlay = null) => {
    setOnly(questionsToPlay);
    goTo(0);
    clearSlips();
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
        <WellDone slips={slips} onAgain={() => playAgain()} onPractise={() => playAgain(practiseItems(slips))} />
      </>
    );
  }

  const dataBox = (i) => {
    if (inOrder) {
      let box = <Answer $state="pending">?</Answer>;
      if (i < dataFound.length) box = <Answer $state="right">{data[i].value}</Answer>;
      else if (i === dataFound.length) box = <Answer $state={state} aria-label={text.yourData}>{typed || '?'}</Answer>;
      return (
        <DataRow key={`d${i}`} $now={i === dataFound.length}>
          {box}
          <span>{data[i].label}</span>
        </DataRow>
      );
    }
    if (i < dataFound.length) {
      const { value, unit } = data[dataFound[i]];
      return <Answer key={`d${i}`} $state="right">{unit ? `${value} ${unit}` : value}</Answer>;
    }
    if (i === dataFound.length) return <Answer key={`d${i}`} $state={state} aria-label={text.yourData}>{typed || '?'}</Answer>;
    return <Answer key={`d${i}`} $state="pending">?</Answer>;
  };

  const boxFor = (i) => {
    if (findingData) return <Answer key={`a${i}`} $state="pending">?</Answer>;
    if (i < current) return <Answer key={`a${i}`} $state="right">{filled[i]}</Answer>;
    if (i === current) return <Answer key={`a${i}`} $state={state} aria-label={text.yourAnswer}>{typed || '?'}</Answer>;
    return <Answer key={`a${i}`} $state="pending">?</Answer>;
  };

  const storyOf = (one, i) => {
    if (!one.story) return null;
    if (i === stage && data.length) return <MarkedStory key={`s${i}`} story={one.story} data={data} found={dataFound} />;
    return <Story key={`s${i}`}>{one.story}</Story>;
  };

  return (
    <>
      <Instructions>{instructions}</Instructions>
      {secretLine}
      <Card>
        <Body>
          {steps.slice(0, stage + 1).map((one, i) => (
            // Steps never move: the i-th is always the problem's i-th step.
            <Fragment key={`step${i + 1}`}>
              {storyOf(one, i)}
              {i < stage && <StepDone aria-label={text.rightAnswer(solutionOf(one))}>{`✓ ${solutionOf(one)}`}</StepDone>}
            </Fragment>
          ))}
          {scene && (
            <Picture $ratio={`${scene.width} / ${scene.height}`}>
              <svg viewBox={`0 0 ${scene.width} ${scene.height}`} role="img" aria-label={text.picture}>
                <scene.Drawing {...scene.props} />
              </svg>
            </Picture>
          )}
          {data.length > 0 && (
            <Data aria-live="polite" $rows={inOrder}>
              <DataLabel>{findingData ? text.dataFirst : text.data}</DataLabel>
              {data.map((d, i) => dataBox(i))}
            </Data>
          )}
          {choosing ? (
            <Choices aria-label={text.answers}>
              {mixed(step.choices, `${step.story}|${step.choices.join('|')}`).map((choice) => {
                let choiceState;
                if (choice === step.answer && tried.includes(choice)) choiceState = 'right';
                else if (tried.includes(choice)) choiceState = 'wrong';
                return (
                  <Choice key={choice} $state={choiceState}>
                    <ChoiceButton type="button" onClick={() => choose(choice)} disabled={stepSolved || Boolean(choiceState)}>
                      {choiceState === 'right' ? `✓ ${choice}` : choice}
                    </ChoiceButton>
                  </Choice>
                );
              })}
            </Choices>
          ) : (
            <Sum aria-live="polite">
              {(data.length > 0 || question.then) && <AnswerLabel>{text.answerLabel}</AnswerLabel>}
              {parts.map((part, i) => (
                <span key={`p${part}${i}`} style={{ display: 'contents' }}>
                  {part.trim() && <span>{part.trim()}</span>}
                  {i < answers.length && boxFor(i)}
                </span>
              ))}
            </Sum>
          )}
          {columns && !findingData && !stepSolved && !helper && (
            <Helper type="button" onClick={openColumns}>{text.useColumns}</Helper>
          )}
          {helper === 'pick' && (
            <OperationChoices aria-label={text.whichOperation}>
              <span>{text.whichOperation}</span>
              <Helper type="button" onClick={() => pickOperation('+')}>{text.addOperation}</Helper>
              <Helper type="button" onClick={() => pickOperation('-')}>{text.subtractOperation}</Helper>
            </OperationChoices>
          )}
          {step.hint && <Hint>{step.hint}</Hint>}
          {solved && (
            <Row>
              <Listen type="button" onClick={() => speak(choosing ? step.answer : sayable(solution, text.lang), text.lang)}>
                <SpeakerIcon />
                {text.listen}
              </Listen>
              <Next type="button" onClick={next}>{index + 1 < order.length ? text.next : text.finish}</Next>
            </Row>
          )}
        </Body>
        {helper === 'columns' && (
          <Columns>
            <ColumnSum
              a={columns.a}
              b={columns.b}
              op={columns.op}
              tips={false}
              onSolved={columnsDone}
              onMessage={setMessage}
              onSlip={mistake => slip({ ...mistake, item: order[index], key: `${order[index]}-${stage}-${mistake.key}` })}
            />
          </Columns>
        )}
        {!solved && !choosing && helper !== 'columns' && (
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
      <QuestionNav index={index} total={order.length} onGo={goTo} />
      <div aria-live="polite">
        {message && <Message $kind="wrong">{message}</Message>}
      </div>
    </>
  );
}
