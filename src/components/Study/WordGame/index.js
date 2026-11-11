'use client';

import {
  useEffect, useRef, useState, useSyncExternalStore,
} from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import {
  SpeakerIcon, WellDone, QuestionNav, useSlips, practiseItems, pickSome,
} from '../game';
import { Instructions } from '../LabelMap/style';
import {
  Card, Body, Question, SmallSpeaker, Next,
} from '../QuizGame/style';
import {
  Answer, Field, Check, Mic, Note,
} from './style';

// A word as it is compared: lowercase, without accents or punctuation, so «Difícil», «dificil» and
// «difícil.» are the same word.
export const plain = word => word.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z\s]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

// The answer meant by what was typed or heard, if it is one of `answers`: the whole of it, or any
// one of its words (said in a sentence, «es grande»). `heard` can be a few guesses at the same words.
export const answerIn = (heard, answers) => {
  const wanted = Object.fromEntries(answers.map(answer => [plain(answer), answer]));
  const guesses = [].concat(heard).map(plain);
  const whole = guesses.find(guess => wanted[guess]);
  if (whole) return wanted[whole];
  const word = guesses.flatMap(guess => guess.split(' ')).find(part => wanted[part]);
  return word ? wanted[word] : null;
};

// Speech recognition, where the browser has it (Chrome, Edge, Safari); never on the server.
const recognition = () => (typeof window === 'undefined' ? null : window.SpeechRecognition ?? window.webkitSpeechRecognition ?? null);
const never = () => () => {};
const useCanListen = () => useSyncExternalStore(never, () => Boolean(recognition()), () => false);

// A word to find for each question, typed or said aloud: a `prompt` («Un sinónimo de pequeño») and
// the `answers` that are right, the first one the one to show. What is typed is checked on ✓; what
// is heard, as soon as it is heard. Capitals and accents do not matter, but the word is shown
// spelt right once found. A first wrong word gives a clue (the first letter), a second one shows
// an answer. With `draw`, only that many of the questions, picked at random each time. At the end,
// the mistakes can be looked at again, and those questions played again on their own.
export default function WordGame({ exercise }) {
  const { instructions, questions, draw } = exercise;
  const text = useStrings();
  const canListen = useCanListen();
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [tries, setTries] = useState(0);
  const [found, setFound] = useState(null); // the answer found, or shown after two tries
  const [note, setNote] = useState(null);
  const [listening, setListening] = useState(false);
  const [slips, slip, clearSlips] = useSlips();
  const [finished, setFinished] = useState(false);
  const [only, setOnly] = useState(null); // the questions to practise again, if not all
  const all = questions.map((q, i) => i);
  const [drawn, setDrawn] = useState(() => (draw ? all.slice(0, draw) : null)); // this time's, with `draw`
  const listener = useRef(null);

  // Picked once on the client, after the page drawn on the server has loaded.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (draw) setDrawn(pickSome(questions.map((q, i) => i), draw));
  }, [draw, questions]);

  useEffect(() => () => listener.current?.abort(), []);

  const order = only ?? drawn ?? all;
  const question = questions[order[index]];
  const solved = Boolean(found);

  const tryWord = (heard, said) => {
    const answer = answerIn(heard, question.answers);
    if (answer) {
      const others = question.answers.filter(other => other !== answer).slice(0, 3);
      setFound(answer);
      setTyped(answer);
      setNote({ kind: 'right', text: `✓ ${answer}`, more: others.length ? text.alsoRight(others.join(', ')) : null });
      speak(answer, text.lang);
      return;
    }
    slip({
      item: order[index], prompt: question.prompt, wrong: said, right: question.answers[0],
    });
    const tried = tries + 1;
    setTries(tried);
    if (tried >= 2) {
      setFound(question.answers[0]);
      setNote({ kind: 'wrong', text: text.notThisWord(said), more: text.oneAnswer(question.answers[0]) });
      speak(question.answers[0], text.lang);
      return;
    }
    setNote({ kind: 'wrong', text: text.notThisWord(said), more: text.startsWith(question.answers[0][0]) });
  };

  const check = (event) => {
    event.preventDefault();
    if (solved) return;
    if (!typed.trim()) {
      setNote({ kind: 'hint', text: text.typeWordFirst });
      return;
    }
    tryWord(typed, typed.trim());
  };

  const listen = () => {
    if (listening) {
      listener.current?.stop();
      return;
    }
    const Recognition = recognition();
    const ear = new Recognition();
    ear.lang = text.lang === 'es' ? 'es-ES' : 'en-GB';
    ear.interimResults = false;
    ear.maxAlternatives = 5;
    let heardSomething = false;
    ear.onresult = (event) => {
      heardSomething = true;
      const guesses = [...event.results[0]].map(alternative => alternative.transcript);
      setTyped(guesses[0].trim());
      tryWord(guesses, guesses[0].trim());
    };
    ear.onend = () => {
      setListening(false);
      if (!heardSomething) setNote({ kind: 'hint', text: text.didNotHear });
    };
    listener.current = ear;
    setNote(null);
    setListening(true);
    ear.start();
  };

  const goTo = (to) => {
    listener.current?.abort();
    setIndex(to);
    setTyped('');
    setTries(0);
    setFound(null);
    setNote(null);
  };

  const next = () => {
    if (index + 1 < order.length) goTo(index + 1);
    else setFinished(true);
  };

  const playAgain = (questionsToPlay = null) => {
    setOnly(questionsToPlay);
    if (draw && !questionsToPlay) setDrawn(pickSome(all, draw));
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

  let state;
  if (solved) state = tries >= 2 ? 'wrong' : 'right';
  else if (note?.kind === 'wrong') state = 'wrong';

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Card>
        <Body>
          <Question>
            <p>{question.prompt}</p>
            <SmallSpeaker type="button" onClick={() => speak(question.say ?? question.prompt, text.lang)} aria-label={text.listenToQuestion}>
              <SpeakerIcon />
            </SmallSpeaker>
          </Question>
          <Answer onSubmit={check}>
            <Field
              key={`${index}-${tries}`}
              value={typed}
              onChange={(event) => { setTyped(event.target.value); setNote(null); }}
              placeholder={text.typeWord}
              aria-label={text.typeWord}
              autoComplete="off"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              readOnly={solved}
              $state={state}
            />
            <Check type="submit" disabled={solved}>{text.check}</Check>
            {canListen && (
              <Mic type="button" onClick={listen} disabled={solved} $listening={listening} aria-label={listening ? text.stopListening : undefined}>
                {listening ? text.listening : text.sayIt}
              </Mic>
            )}
          </Answer>
          <div aria-live="polite">
            {note && (
              <Note $kind={note.kind}>
                {note.text}
                {note.more && <small>{note.more}</small>}
              </Note>
            )}
          </div>
          {solved && <Next type="button" onClick={next}>{index + 1 < order.length ? text.next : text.finish}</Next>}
        </Body>
      </Card>
      <QuestionNav index={index} total={order.length} onGo={goTo} />
    </>
  );
}
