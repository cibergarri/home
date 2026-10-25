'use client';

import { useRef, useState } from 'react';

import { speak } from '../speech';
import {
  scramble, shuffle, SpeakerIcon, WellDone,
} from '../game';
import { Instructions, Message, Progress } from '../LabelMap/style';
import {
  Columns, Column, Heading, Card, CardButton, CardSpeaker, Picture,
} from './style';

// Each matched pair gets its own colour, so the two halves of a pair look alike.
const COLOURS = ['#8ec5f2', '#a6db8a', '#f7dc6f', '#f5a8c8', '#c3a6f2', '#f7b58a', '#7fd6c9', '#e8c37f'];

// English on the left, Spanish on the right: tap a card on one side, then its partner on the
// other. A right pair is coloured in and read aloud in English; a wrong one shakes. A pair with a
// `Picture` (a drawing 160 × 110) shows it on the right instead, its Spanish kept as its label.
export default function MatchGame({ exercise }) {
  const { instructions, pairs } = exercise;
  const pictures = pairs.every(pair => pair.Picture);
  const ids = pairs.map(pair => pair.id);
  const [left, setLeft] = useState(ids);
  const [right, setRight] = useState(() => scramble(ids, ids.length));
  const [matched, setMatched] = useState([]);
  const [selected, setSelected] = useState(null);
  const [wrong, setWrong] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [message, setMessage] = useState(null);
  const wrongTimer = useRef(null);

  const byId = Object.fromEntries(pairs.map(pair => [pair.id, pair]));
  const finished = matched.length === pairs.length;

  const choose = (side, id) => {
    if (!selected || selected.side === side) {
      setSelected(selected?.side === side && selected.id === id ? null : { side, id });
      setMessage(null);
      return;
    }
    setSelected(null);
    if (selected.id === id) {
      setMatched(current => [...current, id]);
      setMessage({ kind: 'right', pair: byId[id] });
      speak(byId[id].en);
      return;
    }
    setMistakes(count => count + 1);
    setWrong([`${selected.side}-${selected.id}`, `${side}-${id}`]);
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => setWrong([]), 600);
    setMessage({ kind: 'wrong' });
  };

  const playAgain = () => {
    setLeft(shuffle(ids));
    setRight(shuffle(ids));
    setMatched([]);
    setSelected(null);
    setMistakes(0);
    setMessage(null);
  };

  const renderCard = (side, id) => {
    const pair = byId[id];
    const done = matched.includes(id);
    let content = side === 'left' ? pair.en : pair.es;
    if (side === 'right' && pair.Picture) {
      content = (
        <Picture viewBox="0 0 160 110" aria-hidden="true">
          <pair.Picture />
        </Picture>
      );
    }
    return (
      <Card
        key={id}
        $selected={selected?.side === side && selected.id === id}
        $colour={done && COLOURS[matched.indexOf(id) % COLOURS.length]}
        $wrong={wrong.includes(`${side}-${id}`)}
      >
        <CardButton
          type="button"
          onClick={() => choose(side, id)}
          disabled={done}
          aria-pressed={selected?.side === side && selected.id === id}
          aria-label={side === 'right' && pair.Picture ? pair.es : undefined}
          $picture={side === 'right' && Boolean(pair.Picture)}
        >
          {content}
        </CardButton>
        {side === 'left' && (
          <CardSpeaker type="button" onClick={() => speak(pair.en)} aria-label={`Listen to ${pair.en}`}>
            <SpeakerIcon />
          </CardSpeaker>
        )}
      </Card>
    );
  };

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Columns>
        <Column aria-label="English">
          <Heading aria-hidden="true">English</Heading>
          {left.map(id => renderCard('left', id))}
        </Column>
        <Column aria-label={pictures ? 'Pictures' : 'Español'}>
          <Heading aria-hidden="true">{pictures ? 'Pictures' : 'Español'}</Heading>
          {right.map(id => renderCard('right', id))}
        </Column>
      </Columns>

      {finished ? <WellDone mistakes={mistakes} onAgain={playAgain} /> : (
        <Progress>{`${matched.length} of ${pairs.length} pairs`}</Progress>
      )}
      <div aria-live="polite">
        {message && !finished && (
          <Message $kind={message.kind}>
            {message.kind === 'right' && (
              <span><strong>{message.pair.Picture ? `✓ ${message.pair.en}` : `✓ ${message.pair.en} = ${message.pair.es}`}</strong></span>
            )}
            {message.kind === 'wrong' && <span>Not quite. Try another pair!</span>}
          </Message>
        )}
      </div>
    </>
  );
}
