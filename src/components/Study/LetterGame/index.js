'use client';

import { useRef, useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import {
  scramble, shuffle, SpeakerIcon, WellDone, QuestionNav, useSlips, practiseItems,
} from '../game';
import WritingPad from '../WritingPad';
import { Instructions, Message } from '../LabelMap/style';
import {
  Puzzle, Tiles, Tile, Row, Listen, Next,
} from '../BuildGame/style';
import { Answering, Switch } from '../NumberGame/style';
import {
  Top, Number, Clue, Word, Letter, Gap,
} from './style';

// Letters that look like they could fit, to tap among the missing ones.
const DECOYS = 'aeioutnrshvw';

const gapsOf = ({ word, shown }) => [...shown].flatMap((letter, i) => (letter === '_' ? [i] : []))
  .map(i => word[i]);

// The missing letters and three others, mixed up the same way every time for the same seed.
const tilesFor = (puzzle, seed) => {
  const missing = gapsOf(puzzle);
  const decoys = scramble([...DECOYS].filter(letter => !missing.includes(letter)), seed).slice(0, 3);
  return scramble([...missing, ...decoys], seed).map((letter, id) => ({ id, letter }));
};

// Words with some letters missing, one after another, each with its `number` (the numbers in
// English) or a `clue` to find it by ("Lo contrario de bajar"): the missing letters are tapped in order from
// a few letter tiles, or with `write: true` written by hand one at a time. Only the right next
// letter goes in; a wrong one shakes and counts as a mistake. The word can be heard at any time,
// and is read aloud once it is complete. At the end, the words gone wrong can be looked at again,
// and played again on their own.
export default function LetterGame({ exercise }) {
  const { instructions, words } = exercise;
  const text = useStrings();
  const [index, setIndex] = useState(0);
  const [tiles, setTiles] = useState(() => tilesFor(words[0], 3));
  const [used, setUsed] = useState([]);
  const [wrong, setWrong] = useState(null);
  const [slips, slip, clearSlips] = useSlips();
  const [message, setMessage] = useState(null);
  const [finished, setFinished] = useState(false);
  const [writing, setWriting] = useState(Boolean(exercise.write));
  const [only, setOnly] = useState(null); // the words to practise again, if not all
  const wrongTimer = useRef(null);

  const order = only ?? words.map((w, i) => i);
  const puzzle = words[order[index]];
  const missing = gapsOf(puzzle);
  const solved = used.length === missing.length;

  const mistake = letter => slip({
    item: order[index],
    prompt: [puzzle.number ?? puzzle.clue, [...puzzle.shown].join(' ')].filter(item => item !== undefined).join(' → '),
    wrong: letter,
    right: puzzle.word,
  });

  const tap = (tile) => {
    if (tile.letter === missing[used.length]) {
      const next = [...used, tile.id];
      setUsed(next);
      setMessage(null);
      if (next.length === missing.length) speak(puzzle.word, text.lang);
      return;
    }
    mistake(tile.letter);
    setWrong(tile.id);
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => setWrong(null), 600);
    setMessage(text.notThatLetter);
  };

  // A written letter goes in as its tile would, so the tiles still match after switching to them.
  const write = (letter) => {
    const tile = tiles.find(({ id, letter: shown }) => shown === letter && !used.includes(id));
    if (letter === missing[used.length] && tile) {
      tap(tile);
      return;
    }
    mistake(letter);
    setMessage(`${text.readLetterAs(letter)} ${text.tryAgain}`);
  };

  const goTo = (next, playing = order) => {
    setIndex(next);
    setTiles(tilesFor(words[playing[next]], playing[next] + 3));
    setUsed([]);
    setMessage(null);
  };

  const next = () => {
    if (index + 1 < order.length) goTo(index + 1);
    else setFinished(true);
  };

  const playAgain = (wordsToPlay = null) => {
    const playing = wordsToPlay ?? words.map((w, i) => i);
    setOnly(wordsToPlay);
    setIndex(0);
    setTiles(shuffle(tilesFor(words[playing[0]], 3)));
    setUsed([]);
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

  let gap = -1;
  const listen = (
    <Listen type="button" onClick={() => speak(puzzle.word, text.lang)} aria-label={text.listenTo(puzzle.number ?? puzzle.word)}>
      <SpeakerIcon />
      {text.listen}
    </Listen>
  );

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Puzzle>
        {puzzle.clue && <Clue>{puzzle.clue}</Clue>}
        <Top>
          {puzzle.number !== undefined && <Number aria-hidden="true">{puzzle.number}</Number>}
          <Word $done={solved} aria-label={text.yourAnswer}>
            {[...puzzle.shown].map((letter, i) => {
              const key = `${puzzle.word}-${i}`;
              if (letter !== '_') return <Letter key={key}>{letter}</Letter>;
              gap += 1;
              return gap < used.length
                ? <Letter key={key} $filled>{missing[gap]}</Letter>
                : <Gap key={key} $current={gap === used.length} aria-label={text.missingLetter} />;
            })}
          </Word>
        </Top>
        {solved ? (
          <Row>
            {listen}
            <Next type="button" onClick={next}>{index + 1 < order.length ? text.next : text.finish}</Next>
          </Row>
        ) : (
          <>
            <Answering>
              {writing ? (
                <WritingPad
                  kind="letters"
                  placeholder={text.writeLetter}
                  onRead={write}
                  onEmpty={() => setMessage(text.writeLetterFirst)}
                  onFail={() => setMessage(text.cannotRead)}
                />
              ) : (
                <Tiles>
                  {tiles.map(tile => (
                    <Tile key={tile.id} type="button" onClick={() => tap(tile)} disabled={used.includes(tile.id)} $wrong={wrong === tile.id}>
                      {tile.letter}
                    </Tile>
                  ))}
                </Tiles>
              )}
              {exercise.write && (
                <Switch type="button" onClick={() => setWriting(on => !on)}>
                  {writing ? text.useTiles : text.useHand}
                </Switch>
              )}
            </Answering>
            <Row>{listen}</Row>
          </>
        )}
      </Puzzle>
      <QuestionNav index={index} total={order.length} onGo={goTo} label={text.count(index + 1, order.length)} />
      <div aria-live="polite">
        {message && <Message $kind="wrong">{message}</Message>}
      </div>
    </>
  );
}
