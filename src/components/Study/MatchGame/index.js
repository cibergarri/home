'use client';

import { useLayoutEffect, useRef, useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import {
  scramble, shuffle, SpeakerIcon, WellDone, useSlips, practiseItems,
} from '../game';
import { Instructions, Message, Progress } from '../LabelMap/style';
import {
  Board, Columns, Column, Heading, Root, Card, CardButton, CardSpeaker, Picture, Joins,
} from './style';

// Each matched pair gets its own colour, so the two halves of a pair look alike.
const COLOURS = ['#8ec5f2', '#a6db8a', '#f7dc6f', '#f5a8c8', '#c3a6f2', '#f7b58a', '#7fd6c9', '#e8c37f'];

// English on the left, Spanish on the right: tap a card on one side, then its partner on the
// other. A right pair is coloured in and read aloud in English; a wrong one shakes. A pair with a
// `Picture` (a drawing 160 × 110) shows it on the right instead, its Spanish kept as its label.
// At the end, the pairs gone wrong can be looked at again, and matched again on their own, with
// the ones they were mixed up with.
//
// With a `root`, it is a little diagram down the page: the left cards hang from the root like
// branches, the right ones under them are what each one means, read aloud too, and a matched pair
// is joined with a line.
export default function MatchGame({ exercise }) {
  const { instructions } = exercise;
  const [only, setOnly] = useState(null); // the pairs to practise again, if not all
  const pairs = only ? exercise.pairs.filter(pair => only.includes(pair.id)) : exercise.pairs;
  const text = useStrings();
  const [leftTitle, rightTitle] = exercise.columns ?? text.columns;
  const pictures = pairs.every(pair => pair.Picture);
  const ids = pairs.map(pair => pair.id);
  const [left, setLeft] = useState(ids);
  const [right, setRight] = useState(() => scramble(ids, ids.length));
  const [matched, setMatched] = useState([]);
  const [selected, setSelected] = useState(null);
  const [wrong, setWrong] = useState([]);
  const [slips, slip, clearSlips] = useSlips();
  const [message, setMessage] = useState(null);
  const wrongTimer = useRef(null);
  const board = useRef(null);
  const [joins, setJoins] = useState([]);
  const diagram = Boolean(exercise.root);

  const byId = Object.fromEntries(pairs.map(pair => [pair.id, pair]));
  const finished = matched.length === pairs.length;

  // The lines from each matched left card to its partner, measured on the board, again when it
  // changes size (the tablet turned round).
  useLayoutEffect(() => {
    if (!diagram) return undefined;
    const measure = () => {
      const { left: x0, top: y0 } = board.current.getBoundingClientRect();
      const box = (side, id) => board.current.querySelector(`[data-card="${side}-${id}"]`)?.getBoundingClientRect();
      setJoins(matched.flatMap((id, i) => {
        const [from, to] = [box('left', id), box('right', id)];
        if (!from || !to) return [];
        return [{
          id,
          colour: COLOURS[i % COLOURS.length],
          x1: from.left + from.width / 2 - x0,
          y1: from.bottom - y0,
          x2: to.left + to.width / 2 - x0,
          y2: to.top - y0,
        }];
      }));
    };
    measure();
    if (typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(measure);
    observer.observe(board.current);
    return () => observer.disconnect();
  }, [diagram, matched, left, right]);

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
      speak(diagram ? `${byId[id].en}: ${byId[id].es}` : byId[id].en, text.lang);
      return;
    }
    // Whichever was picked first: a word put with the wrong Spanish one, or a picture with the
    // wrong word (and then it is the picture that is shown again, with its word).
    const [word, partner] = selected.side === 'left' ? [byId[selected.id], byId[id]] : [byId[id], byId[selected.id]];
    slip(partner.Picture ? {
      item: partner.id, also: [word.id], Picture: partner.Picture, wrong: word.en, right: partner.en,
    } : {
      item: word.id, also: [partner.id], prompt: word.en, wrong: partner.es, right: word.es, say: word.en,
    });
    setWrong([`${selected.side}-${selected.id}`, `${side}-${id}`]);
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => setWrong([]), 600);
    setMessage({ kind: 'wrong' });
  };

  const playAgain = (pairsToMatch = null) => {
    const playing = pairsToMatch ?? exercise.pairs.map(pair => pair.id);
    setOnly(pairsToMatch);
    setLeft(shuffle(playing));
    setRight(shuffle(playing));
    setMatched([]);
    setSelected(null);
    clearSlips();
    setMessage(null);
  };

  const renderCard = (side, id) => {
    const pair = byId[id];
    const done = matched.includes(id);
    const said = side === 'left' ? pair.en : pair.es;
    let content = said;
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
        data-card={`${side}-${id}`}
        $branch={diagram && side === 'left'}
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
        {(side === 'left' || diagram) && (
          <CardSpeaker type="button" onClick={() => speak(said, text.lang)} aria-label={text.listenTo(said)}>
            <SpeakerIcon />
          </CardSpeaker>
        )}
      </Card>
    );
  };

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Board ref={board} lang={text.lang}>
        <Columns $diagram={diagram}>
          <Column aria-label={leftTitle} $across={diagram && pairs.length}>
            {diagram ? <Root>{exercise.root}</Root> : <Heading aria-hidden="true">{leftTitle}</Heading>}
            {left.map(id => renderCard('left', id))}
          </Column>
          <Column aria-label={pictures ? text.pictures : rightTitle} $across={diagram && pairs.length}>
            {!diagram && <Heading aria-hidden="true">{pictures ? text.pictures : rightTitle}</Heading>}
            {right.map(id => renderCard('right', id))}
          </Column>
        </Columns>
        {diagram && (
          <Joins aria-hidden="true">
            {joins.map(({ id, colour, ...ends }) => (
              <g key={id} data-testid="join" stroke={colour} fill={colour}>
                <line {...ends} strokeWidth="5" strokeLinecap="round" />
                <circle cx={ends.x1} cy={ends.y1} r="6" />
                <circle cx={ends.x2} cy={ends.y2} r="6" />
              </g>
            ))}
          </Joins>
      )}
      </Board>

      {finished ? <WellDone slips={slips} onAgain={() => playAgain()} onPractise={() => playAgain(practiseItems(slips))} /> : (
        <Progress>{text.pairs(matched.length, pairs.length)}</Progress>
      )}
      <div aria-live="polite">
        {message && !finished && (
          <Message $kind={message.kind}>
            {message.kind === 'right' && (
              <span><strong>{message.pair.Picture ? `✓ ${message.pair.en}` : `✓ ${message.pair.en}${diagram ? ':' : ' ='} ${message.pair.es}`}</strong></span>
            )}
            {message.kind === 'wrong' && <span>{text.notQuitePair}</span>}
          </Message>
        )}
      </div>
    </>
  );
}
