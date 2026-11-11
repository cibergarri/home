'use client';

import { useEffect, useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import {
  SpeakerIcon, WellDone, QuestionNav, useSlips, practiseItems, pickSome,
} from '../game';
import Compare, { signFor, sayComparison } from '../Compare';
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
// tried; the right one turns green and leads on to the next question. At the end, the mistakes
// can be looked at again, and those questions played again on their own.
//
// A question with `solved` shows (and says) that on the right answer once chosen, in place of the
// answer itself: 'des' becomes 'descoser'.
//
// A question with `compare: [a, b]` shows the two numbers with a gap between them, and the signs
// <, > and = to choose from (with `prompt`, if any, above).
//
// With `draw`, only that many of the questions are played, picked at random each time (the first
// ones on the page drawn on the server, until the browser picks).
export default function QuizGame({ exercise }) {
  const { instructions, questions, keepOrder, draw } = exercise;
  const text = useStrings();
  const [index, setIndex] = useState(0);
  const [tried, setTried] = useState([]);
  const [solved, setSolved] = useState(false);
  const [slips, slip, clearSlips] = useSlips();
  const [finished, setFinished] = useState(false);
  const [only, setOnly] = useState(null); // the questions to practise again, if not all
  const all = questions.map((q, i) => i);
  const [drawn, setDrawn] = useState(() => (draw ? all.slice(0, draw) : null)); // this time's, with `draw`

  // Picked once on the client, after the page drawn on the server has loaded.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (draw) setDrawn(pickSome(questions.map((q, i) => i), draw));
  }, [draw, questions]);

  const order = only ?? drawn ?? all;
  const question = questions[order[index]];
  const { scene, compare } = question;
  const answer = compare ? signFor(...compare) : question.answer;
  const choices = compare || keepOrder ? question.choices : mixed(question.choices, `${question.prompt}|${question.choices.join('|')}`);

  const choose = (choice) => {
    if (choice === answer) {
      setSolved(true);
      setTried(current => [...current, choice]);
      speak(compare ? sayComparison(...compare, text.lang) : question.solved ?? choice, text.lang);
      return;
    }
    slip({
      item: order[index], prompt: compare ? `${compare[0]} … ${compare[1]}` : question.prompt, scene, wrong: choice, right: answer,
    });
    setTried(current => [...current, choice]);
  };

  const goTo = (to) => {
    setTried([]);
    setSolved(false);
    setIndex(to);
  };

  const next = () => {
    if (index + 1 < order.length) goTo(index + 1);
    else setFinished(true);
  };

  const playAgain = (questionsToPlay = null) => {
    setOnly(questionsToPlay);
    if (draw && !questionsToPlay) setDrawn(pickSome(all, draw));
    setIndex(0);
    setTried([]);
    setSolved(false);
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
      <Card $picture={Boolean(scene)}>
        {scene && (
          <Picture $ratio={`${scene.width} / ${scene.height}`}>
            <svg viewBox={`0 0 ${scene.width} ${scene.height}`} role="img" aria-label={text.picture}>
              <scene.Drawing {...scene.props} />
            </svg>
          </Picture>
        )}
        <Body>
          {question.prompt && (
          <Question>
            <p>{question.prompt}</p>
            {question.say !== false && (
              <SmallSpeaker type="button" onClick={() => speak(question.say ?? question.prompt, text.lang)} aria-label={text.listenToQuestion}>
                <SpeakerIcon />
              </SmallSpeaker>
            )}
          </Question>
          )}
          {question.hint && <Hint>{question.hint}</Hint>}
          {compare ? <Compare a={compare[0]} b={compare[1]} tried={tried} onChoose={choose} /> : (
          <Choices aria-label={text.answers}>
            {choices.map((choice) => {
              let state;
              if (solved && choice === answer) state = 'right';
              else if (tried.includes(choice)) state = 'wrong';
              return (
                <Choice key={choice} $state={state}>
                  <ChoiceButton type="button" onClick={() => choose(choice)} disabled={solved || Boolean(state)}>
                    {state === 'right' ? `✓ ${question.solved ?? choice}` : choice}
                  </ChoiceButton>
                  <SmallSpeaker type="button" onClick={() => speak(choice, text.lang)} aria-label={text.listenTo(choice)}>
                    <SpeakerIcon />
                  </SmallSpeaker>
                </Choice>
              );
            })}
          </Choices>
          )}
          {solved && <Next type="button" onClick={next}>{index + 1 < order.length ? text.next : text.finish}</Next>}
        </Body>
      </Card>
      <QuestionNav index={index} total={order.length} onGo={goTo} />
    </>
  );
}
