'use client';

import { useRef, useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import {
  scramble, shuffle, SpeakerIcon, WellDone, QuestionNav,
} from '../game';
import WritingPad from '../WritingPad';
import { Instructions, Message } from '../LabelMap/style';
import {
  Puzzle, Tiles, Tile, Row, Listen, Next,
} from '../BuildGame/style';
import { Answering, Switch } from '../NumberGame/style';
import {
  Top, Number, Word, Letter, Gap,
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

// Words with some letters missing, one after another: the missing letters are tapped in order from
// a few letter tiles, or with `write: true` written by hand one at a time. Only the right next
// letter goes in; a wrong one shakes and counts as a mistake. The word can be heard at any time,
// and is read aloud once it is complete.
export default function LetterGame({ exercise }) {
  const { instructions, words } = exercise;
  const text = useStrings();
  const [index, setIndex] = useState(0);
  const [tiles, setTiles] = useState(() => tilesFor(words[0], 3));
  const [used, setUsed] = useState([]);
  const [wrong, setWrong] = useState(null);
  const [mistakes, setMistakes] = useState(0);
  const [message, setMessage] = useState(null);
  const [finished, setFinished] = useState(false);
  const [writing, setWriting] = useState(Boolean(exercise.write));
  const wrongTimer = useRef(null);

  const puzzle = words[index];
  const missing = gapsOf(puzzle);
  const solved = used.length === missing.length;

  const tap = (tile) => {
    if (tile.letter === missing[used.length]) {
      const next = [...used, tile.id];
      setUsed(next);
      setMessage(null);
      if (next.length === missing.length) speak(puzzle.word, text.lang);
      return;
    }
    setMistakes(count => count + 1);
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
    setMistakes(count => count + 1);
    setMessage(`${text.readLetterAs(letter)} ${text.tryAgain}`);
  };

  const goTo = (next) => {
    setIndex(next);
    setTiles(tilesFor(words[next], next + 3));
    setUsed([]);
    setMessage(null);
  };

  const next = () => {
    if (index + 1 < words.length) goTo(index + 1);
    else setFinished(true);
  };

  const playAgain = () => {
    setIndex(0);
    setTiles(shuffle(tilesFor(words[0], 3)));
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

  let gap = -1;
  const listen = (
    <Listen type="button" onClick={() => speak(puzzle.word, text.lang)} aria-label={text.listenTo(puzzle.number)}>
      <SpeakerIcon />
      {text.listen}
    </Listen>
  );

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Puzzle>
        <Top>
          <Number aria-hidden="true">{puzzle.number}</Number>
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
            <Next type="button" onClick={next}>{index + 1 < words.length ? text.next : text.finish}</Next>
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
      <QuestionNav index={index} total={words.length} onGo={goTo} label={text.count(index + 1, words.length)} />
      <div aria-live="polite">
        {message && <Message $kind="wrong">{message}</Message>}
      </div>
    </>
  );
}
