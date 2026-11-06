'use client';

import { useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import { SpeakerIcon, WellDone, QuestionNav } from '../game';
import { Instructions } from '../LabelMap/style';
import {
  Card, Picture, Body, Question, Hint, Choices, Choice, ChoiceButton, SmallSpeaker, Next,
} from './style';

// The choices of a question in a mixed order, so the right one is not always first: the same order
// every time for the same question, so the page drawn on the server and in the browser agree.
// Numbers stay in order, as do the choices of an exercise with `keepOrder`.
export const mixed = (choices, seed) => {
  if (choices.every(choice => /^\d+$/.test(choice))) return choices;
  let hash = [...seed].reduce((sum, letter) => (sum * 31 + letter.charCodeAt(0)) % 2147483647, 7);
  const random = () => {
    hash = (hash * 16807) % 2147483647;
    return hash / 2147483647;
  };
  const order = [...choices];
  for (let i = order.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
};

// Questions one after another, each with a few answers to choose from and maybe a picture
// (`scene`: a drawing, its size and what to draw). A wrong answer is crossed out and another can be
// tried; the right one turns green and leads on to the next question.
export default function QuizGame({ exercise }) {
  const { instructions, questions, keepOrder } = exercise;
  const text = useStrings();
  const [index, setIndex] = useState(0);
  const [tried, setTried] = useState([]);
  const [solved, setSolved] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[index];
  const { scene } = question;
  const choices = keepOrder ? question.choices : mixed(question.choices, `${question.prompt}|${question.choices.join('|')}`);

  const choose = (choice) => {
    if (choice === question.answer) {
      setSolved(true);
      speak(choice, text.lang);
      return;
    }
    setMistakes(count => count + 1);
    setTried(current => [...current, choice]);
  };

  const goTo = (to) => {
    setTried([]);
    setSolved(false);
    setIndex(to);
  };

  const next = () => {
    if (index + 1 < questions.length) goTo(index + 1);
    else setFinished(true);
  };

  const playAgain = () => {
    setIndex(0);
    setTried([]);
    setSolved(false);
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

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Card $picture={Boolean(scene)}>
        {scene && (
          <Picture $ratio={`${scene.width} / ${scene.height}`}>
            <svg viewBox={`0 0 ${scene.width} ${scene.height}`} role="img" aria-label={text.picture}>
              <scene.Drawing {...scene.props} />
            </svg>
          </Picture>
        )}
        <Body>
          <Question>
            <p>{question.prompt}</p>
            {question.say !== false && (
              <SmallSpeaker type="button" onClick={() => speak(question.say ?? question.prompt, text.lang)} aria-label={text.listenToQuestion}>
                <SpeakerIcon />
              </SmallSpeaker>
            )}
          </Question>
          {question.hint && <Hint>{question.hint}</Hint>}
          <Choices aria-label={text.answers}>
            {choices.map((choice) => {
              let state;
              if (solved && choice === question.answer) state = 'right';
              else if (tried.includes(choice)) state = 'wrong';
              return (
                <Choice key={choice} $state={state}>
                  <ChoiceButton type="button" onClick={() => choose(choice)} disabled={solved || Boolean(state)}>
                    {state === 'right' ? `✓ ${choice}` : choice}
                  </ChoiceButton>
                  <SmallSpeaker type="button" onClick={() => speak(choice, text.lang)} aria-label={text.listenTo(choice)}>
                    <SpeakerIcon />
                  </SmallSpeaker>
                </Choice>
              );
            })}
          </Choices>
          {solved && <Next type="button" onClick={next}>{index + 1 < questions.length ? text.next : text.finish}</Next>}
        </Body>
      </Card>
      <QuestionNav index={index} total={questions.length} onGo={goTo} />
    </>
  );
}
