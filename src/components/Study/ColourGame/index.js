'use client';

import { useRef, useState } from 'react';

import { speak } from '../speech';
import { shuffle, SpeakerIcon, WellDone } from '../game';
import { Instructions, Message, Progress } from '../LabelMap/style';
import {
  Crayons, Crayon, Words, Tile, TileWord, TileSpeaker,
} from './style';

function CrayonIcon({ colour }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g transform="rotate(-45 20 20)">
        <rect x={6} y={15} width={22} height={10} rx={2} fill={colour} stroke="#24324a" strokeWidth={1.5} />
        <path d="M28,15 L36,20 L28,25 Z" fill="#f6d9b0" stroke="#24324a" strokeWidth={1.5} strokeLinejoin="round" />
        <path d="M33,18.2 L36,20 L33,21.8 Z" fill={colour} />
        <rect x={10} y={15} width={3} height={10} fill="#fff" opacity={0.6} />
      </g>
    </svg>
  );
}

// Words to colour in, as in a workbook: pick up a crayon, then tap each word it belongs to. Each
// word has one right crayon. A right word is coloured in, a wrong one shakes and stays white.
export default function ColourGame({ exercise }) {
  const { instructions, crayons, words } = exercise;
  const [order, setOrder] = useState(() => words.map(word => word.id));
  const [crayon, setCrayon] = useState(null);
  const [coloured, setColoured] = useState({});
  const [wrong, setWrong] = useState(null);
  const [mistakes, setMistakes] = useState(0);
  const [message, setMessage] = useState(null);
  const wrongTimer = useRef(null);

  const byId = Object.fromEntries(words.map(word => [word.id, word]));
  const crayonById = Object.fromEntries(crayons.map(item => [item.id, item]));
  const colouredCount = Object.keys(coloured).length;
  const finished = colouredCount === words.length;

  const colourIn = (id) => {
    if (!crayon) {
      setMessage({ kind: 'hint' });
      return;
    }
    if (byId[id].crayon === crayon) {
      setColoured(current => ({ ...current, [id]: crayon }));
      setMessage({ kind: 'right', word: byId[id].word, crayon: crayonById[crayon] });
      return;
    }
    setMistakes(count => count + 1);
    setWrong(id);
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => setWrong(null), 600);
    setMessage({ kind: 'wrong', word: byId[id].word, crayon: crayonById[crayon] });
  };

  const playAgain = () => {
    setOrder(shuffle(words.map(word => word.id)));
    setColoured({});
    setCrayon(null);
    setMistakes(0);
    setMessage(null);
  };

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Crayons role="group" aria-label="Crayons">
        {crayons.map(({ id, title, colour }) => (
          <Crayon
            key={id}
            type="button"
            aria-pressed={crayon === id}
            onClick={() => { setCrayon(id); setMessage(null); }}
            $selected={crayon === id}
            $colour={colour}
          >
            <CrayonIcon colour={colour} />
            {title}
          </Crayon>
        ))}
      </Crayons>

      <Words>
        {order.map((id) => {
          const { word } = byId[id];
          const done = coloured[id];
          return (
            <Tile key={id} $colour={done && crayonById[done].colour} $wrong={wrong === id} data-testid={`word-${id}`}>
              <TileWord type="button" onClick={() => colourIn(id)} disabled={Boolean(done) || finished}>
                {word}
              </TileWord>
              <TileSpeaker type="button" onClick={() => speak(word)} aria-label={`Listen to ${word}`}>
                <SpeakerIcon />
              </TileSpeaker>
            </Tile>
          );
        })}
      </Words>

      {finished ? <WellDone mistakes={mistakes} onAgain={playAgain} /> : (
        <Progress>{`${colouredCount} of ${words.length} coloured`}</Progress>
      )}
      <div aria-live="polite">
        {message && !finished && (
          <Message $kind={message.kind}>
            {message.kind === 'right' && (
              <span>
                <strong>{`✓ ${message.word}`}</strong>
                {` is in ${message.crayon.title.toLowerCase()}.`}
              </span>
            )}
            {message.kind === 'wrong' && <span>{`Not quite. ${message.word} isn't in ${message.crayon.title.toLowerCase()}. Try another crayon!`}</span>}
            {message.kind === 'hint' && <span>First pick up a crayon, then tap the words to colour.</span>}
          </Message>
        )}
      </div>
    </>
  );
}
