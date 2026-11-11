'use client';

import { useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import {
  SpeakerIcon, WellDone, QuestionNav, useSlips, practiseItems,
} from '../game';
import { sayable } from '../NumberGame/sayable';
import { Instructions, Message } from '../LabelMap/style';
import { Row, Listen, Next } from '../NumberGame/style';
import ColumnSum from './ColumnSum';
import { Card, Story } from './style';

// Sums and subtractions in columns ("en torre"), one after another (see `ColumnSum`). Numbers up
// to 999, with a column for the hundreds when there are any; results under 1000, and no borrowing
// across a 0 in the tens. At the end, the steps gone wrong can be looked at again, and those sums
// done again on their own.
export default function TowerGame({ exercise }) {
  const { instructions, questions } = exercise;
  const text = useStrings();
  const [index, setIndex] = useState(0);
  const [round, setRound] = useState(0); // a new one each time the sums start again
  const [solved, setSolved] = useState(false);
  const [slips, slip, clearSlips] = useSlips();
  const [message, setMessage] = useState(null);
  const [finished, setFinished] = useState(false);
  const [only, setOnly] = useState(null); // the sums to do again, if not all

  const order = only ?? questions.map((q, i) => i);
  const question = questions[order[index]];
  const result = question.op === '-' ? question.a - question.b : question.a + question.b;
  const sentence = `${question.a} ${question.op} ${question.b} = ${result}`;

  const goTo = (to) => {
    setSolved(false);
    setMessage(null);
    setIndex(to);
  };

  const next = () => {
    if (index + 1 < order.length) goTo(index + 1);
    else setFinished(true);
  };

  const playAgain = (sumsToDo = null) => {
    setOnly(sumsToDo);
    setRound(n => n + 1);
    goTo(0);
    clearSlips();
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

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Card>
        {question.story && <Story>{question.story}</Story>}
        <ColumnSum
          key={`${round}-${index}`}
          a={question.a}
          b={question.b}
          op={question.op}
          onSolved={() => setSolved(true)}
          onMessage={setMessage}
          onSlip={mistake => slip({ ...mistake, item: order[index], key: `${order[index]}-${mistake.key}` })}
        >
          {solved && (
            <Row>
              <Listen type="button" onClick={() => speak(sayable(sentence, text.lang), text.lang)}>
                <SpeakerIcon />
                {text.listen}
              </Listen>
              <Next type="button" onClick={next}>{index + 1 < order.length ? text.next : text.finish}</Next>
            </Row>
          )}
        </ColumnSum>
      </Card>
      <QuestionNav index={index} total={order.length} onGo={goTo} />
      <div aria-live="polite">
        {message && <Message $kind="wrong">{message}</Message>}
      </div>
    </>
  );
}
