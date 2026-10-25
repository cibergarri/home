'use client';

import { useRef, useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import {
  scramble, shuffle, SpeakerIcon, WellDone, QuestionNav,
} from '../game';
import { Instructions, Message } from '../LabelMap/style';
import {
  Puzzle, Prompt, Line, Placed, Slot, Tiles, Tile, Row, Listen, Next,
} from './style';

const mixUp = (puzzle, seed) => scramble(puzzle.answer.map((word, index) => index), seed);

// Puzzles solved one after another: the words (or days) of an answer come mixed up and are tapped
// in order. Only the next right word goes in; a wrong one shakes and counts as a mistake. A
// finished answer is read aloud.
export default function BuildGame({ exercise }) {
  const { instructions, puzzles } = exercise;
  const text = useStrings();
  const [index, setIndex] = useState(0);
  const [order, setOrder] = useState(() => mixUp(puzzles[0], 3));
  const [used, setUsed] = useState([]);
  const [wrong, setWrong] = useState(null);
  const [mistakes, setMistakes] = useState(0);
  const [message, setMessage] = useState(null);
  const [finished, setFinished] = useState(false);
  const wrongTimer = useRef(null);

  const puzzle = puzzles[index];
  const { answer } = puzzle;
  const sentence = answer.join(puzzle.separator ?? ' ');
  const solved = used.length === answer.length;

  // Tiles hold positions in the answer, so a word that comes twice can go in either place.
  const tap = (tile) => {
    if (answer[tile] === answer[used.length]) {
      const next = [...used, tile];
      setUsed(next);
      setMessage(null);
      if (next.length === answer.length) speak(sentence, text.lang);
      return;
    }
    setMistakes(count => count + 1);
    setWrong(tile);
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => setWrong(null), 600);
    setMessage(text.notYet);
  };

  const goTo = (next) => {
    setIndex(next);
    setOrder(mixUp(puzzles[next], next + 3));
    setUsed([]);
    setMessage(null);
  };

  const next = () => {
    if (index + 1 < puzzles.length) goTo(index + 1);
    else setFinished(true);
  };

  const playAgain = () => {
    setIndex(0);
    setOrder(shuffle(puzzles[0].answer.map((word, position) => position)));
    setUsed([]);
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

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Puzzle>
        <Prompt>
          {puzzle.prompt}
          {puzzle.hint && <small>{puzzle.hint}</small>}
        </Prompt>
        <Line $done={solved} aria-label={text.yourAnswer}>
          {answer.map((word, position) => (used[position] !== undefined
            ? <Placed key={`placed-${word}-${position}`}>{answer[used[position]]}</Placed>
            : <Slot key={`slot-${word}-${position}`} aria-hidden="true" />))}
        </Line>
        {solved ? (
          <Row>
            <Listen type="button" onClick={() => speak(sentence, text.lang)}>
              <SpeakerIcon />
              {text.listen}
            </Listen>
            <Next type="button" onClick={next}>{index + 1 < puzzles.length ? text.next : text.finish}</Next>
          </Row>
        ) : (
          <Tiles>
            {order.map(tile => (
              <Tile key={tile} type="button" onClick={() => tap(tile)} disabled={used.includes(tile)} $wrong={wrong === tile}>
                {answer[tile]}
              </Tile>
            ))}
          </Tiles>
        )}
      </Puzzle>
      <QuestionNav index={index} total={puzzles.length} onGo={goTo} label={text.count(index + 1, puzzles.length)} />
      <div aria-live="polite">
        {message && <Message $kind="wrong">{message}</Message>}
      </div>
    </>
  );
}
