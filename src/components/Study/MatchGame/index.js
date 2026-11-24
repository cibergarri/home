'use client';

import {
  useEffect, useLayoutEffect, useRef, useState,
} from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import Explain from '../Explain';
import {
  scramble, shuffle, SpeakerIcon, WellDone, useSlips, practiseItems, pickSome,
} from '../game';
import { Instructions, Message, Progress } from '../LabelMap/style';
import {
  Board, Columns, Column, Heading, Root, Card, CardButton, CardSpeaker, CardTools, Picture, Joins,
} from './style';

// Each matched pair gets its own colour, so the two halves of a pair look alike.
const COLOURS = ['#8ec5f2', '#a6db8a', '#f7dc6f', '#f5a8c8', '#c3a6f2', '#f7b58a', '#7fd6c9', '#e8c37f'];

// Which sides of the board can be joined: the word and what it means, or, with a Spanish row in
// between, the word and its Spanish, then the Spanish and what it means.
const LINKS = { plain: [['left', 'right']], middle: [['left', 'middle'], ['middle', 'right']] };

// English on the left, Spanish on the right: tap a card on one side, then its partner on the
// other. A right pair is coloured in and read aloud in English; a wrong one shakes. A pair with a
// `Picture` (a drawing 160 × 110) shows it on the right instead, its Spanish kept as its label.
// At the end, the pairs gone wrong can be looked at again, and matched again on their own, with
// the ones they were mixed up with.
//
// With a `root`, it is a little diagram down the page: the left cards hang from the root like
// branches, the right ones under them are what each one means, read aloud too, and a matched pair
// is joined with a line. The speaker and the flag go under each card's words. When every pair has
// a `translation`, a row of the words in Spanish goes in between: each word is joined to its
// Spanish first, and the Spanish to what it means. A pair's `meaningEs` is what it means in
// Spanish, behind a flag on that card (on a plain board too). With `explain: false`, the words have
// no flag: when the Spanish is what is matched, it would give it away.
//
// With `draw`, only that many of the pairs are matched, picked at random each time (the first ones
// on the page drawn on the server, until the browser picks).
export default function MatchGame({ exercise }) {
  const { instructions, draw } = exercise;
  const [only, setOnly] = useState(null); // the pairs to practise again, if not all
  const allIds = exercise.pairs.map(pair => pair.id);
  const [drawn, setDrawn] = useState(() => (draw ? allIds.slice(0, draw) : null)); // this time's, with `draw`
  const playing = only ?? drawn;
  const pairs = playing ? exercise.pairs.filter(pair => playing.includes(pair.id)) : exercise.pairs;
  const text = useStrings();
  const diagram = Boolean(exercise.root);
  const middle = diagram && exercise.pairs.every(pair => pair.translation);
  const links = LINKS[middle ? 'middle' : 'plain'];
  const [leftTitle, ...otherTitles] = exercise.columns ?? text.columns;
  const [middleTitle, rightTitle] = middle ? otherTitles : [null, otherTitles[0]];
  const pictures = pairs.every(pair => pair.Picture);
  const ids = pairs.map(pair => pair.id);
  const [left, setLeft] = useState(ids);
  const [centre, setCentre] = useState(() => scramble(ids, ids.length + 1));
  const [right, setRight] = useState(() => scramble(ids, ids.length));
  // The pairs joined, link by link: the word and the right side, or, with the Spanish row, the
  // word and its Spanish (first) and the Spanish and what it means (second).
  const [joined, setJoined] = useState(() => links.map(() => []));
  const [selected, setSelected] = useState(null);
  const [wrong, setWrong] = useState([]);
  const [slips, slip, clearSlips] = useSlips();
  const [message, setMessage] = useState(null);
  const wrongTimer = useRef(null);
  const board = useRef(null);
  const [joins, setJoins] = useState([]);

  // Picked once on the client, after the page drawn on the server has loaded.
  useEffect(() => {
    if (!draw) return;
    const picked = pickSome(exercise.pairs.map(pair => pair.id), draw);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDrawn(picked);
    setLeft(shuffle(picked));
    setCentre(shuffle(picked));
    setRight(shuffle(picked));
  }, [draw, exercise.pairs]);

  const byId = Object.fromEntries(pairs.map(pair => [pair.id, pair]));
  const total = links.length * pairs.length;
  const done = joined.flat().length;
  const finished = done === total;
  // A pair's colour: in the order matched, or with a Spanish row, the same all along the pair.
  const colourOf = id => COLOURS[(middle ? ids.indexOf(id) : joined[0].indexOf(id)) % COLOURS.length];
  const linkOf = (a, b) => links.findIndex(([x, y]) => (x === a && y === b) || (x === b && y === a));
  const sideDone = (side, id) => links.every(([a, b], n) => (a !== side && b !== side) || joined[n].includes(id));
  const sideTouched = (side, id) => links.some(([a, b], n) => (a === side || b === side) && joined[n].includes(id));

  // The lines from each matched card to its partner, measured on the board, again when it changes
  // size (the tablet turned round).
  useLayoutEffect(() => {
    if (!diagram) return undefined;
    const measure = () => {
      const { left: x0, top: y0 } = board.current.getBoundingClientRect();
      const box = (side, id) => board.current.querySelector(`[data-card="${side}-${id}"]`)?.getBoundingClientRect();
      setJoins(links.flatMap(([top, bottom], n) => joined[n].flatMap((id) => {
        const [from, to] = [box(top, id), box(bottom, id)];
        if (!from || !to) return [];
        return [{
          key: `${n}-${id}`,
          colour: colourOf(id),
          x1: from.left + from.width / 2 - x0,
          y1: from.bottom - y0,
          x2: to.left + to.width / 2 - x0,
          y2: to.top - y0,
        }];
      })));
    };
    measure();
    if (typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(measure);
    observer.observe(board.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diagram, joined, left, centre, right]);

  // What each side of a pair says: the word, its Spanish, and what it means.
  const says = (side, pair) => ({ left: pair.en, middle: pair.translation, right: pair.es })[side];

  const choose = (side, id) => {
    const link = selected ? linkOf(selected.side, side) : -1;
    if (link < 0) {
      setSelected(selected?.side === side && selected.id === id ? null : { side, id });
      setMessage(null);
      return;
    }
    if (selected.id === id && !joined[link].includes(id)) {
      setSelected(null);
      setJoined(current => current.map((list, n) => (n === link ? [...list, id] : list)));
      const pair = byId[id];
      const [a, b] = links[link];
      setMessage({ kind: 'right', pair, words: [says(a, pair), says(b, pair)] });
      if (middle && link === 0) {
        speak(pair.translation, 'es'); // one voice at a time: the English word is on its card
      } else {
        speak(diagram ? `${pair.en}: ${pair.es}` : pair.en, text.lang);
      }
      return;
    }
    setSelected(null);
    if (selected.id === id) return; // already joined that way
    // Whichever was picked first: the card nearer the top is the one asked about, and what was
    // put with it was wrong. A picture with the wrong word shows the picture again, with its word.
    const [a, b] = links[link];
    const [first, second] = selected.side === a ? [byId[selected.id], byId[id]] : [byId[id], byId[selected.id]];
    if (second.Picture) {
      slip({
        item: second.id, also: [first.id], Picture: second.Picture, wrong: first.en, right: second.en,
      });
    } else {
      slip({
        item: first.id, also: [second.id], prompt: says(a, first), wrong: says(b, second), right: says(b, first), say: first.en,
      });
    }
    setWrong([`${selected.side}-${selected.id}`, `${side}-${id}`]);
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => setWrong([]), 600);
    setMessage({ kind: 'wrong' });
  };

  const playAgain = (pairsToMatch = null) => {
    let toPlay = pairsToMatch ?? allIds;
    if (draw && !pairsToMatch) {
      toPlay = pickSome(allIds, draw);
      setDrawn(toPlay);
    }
    setOnly(pairsToMatch);
    setLeft(shuffle(toPlay));
    setCentre(shuffle(toPlay));
    setRight(shuffle(toPlay));
    setJoined(links.map(() => []));
    setSelected(null);
    clearSlips();
    setMessage(null);
  };

  const renderCard = (side, id) => {
    const pair = byId[id];
    const said = says(side, pair);
    const lang = side === 'middle' ? 'es' : text.lang;
    let content = said;
    if (side === 'right' && pair.Picture) {
      content = (
        <Picture viewBox="0 0 160 110" aria-hidden="true">
          <pair.Picture />
        </Picture>
      );
    }
    const tools = side === 'left' || diagram || (side === 'right' && Boolean(pair.meaningEs));
    return (
      <Card
        key={id}
        data-card={`${side}-${id}`}
        $branch={diagram && side === 'left'}
        $diagram={diagram}
        $selected={selected?.side === side && selected.id === id}
        $colour={sideTouched(side, id) && colourOf(id)}
        $wrong={wrong.includes(`${side}-${id}`)}
      >
        <CardButton
          type="button"
          onClick={() => choose(side, id)}
          disabled={sideDone(side, id)}
          aria-pressed={selected?.side === side && selected.id === id}
          aria-label={side === 'right' && pair.Picture ? pair.es : undefined}
          lang={side === 'middle' ? 'es' : undefined}
          $picture={side === 'right' && Boolean(pair.Picture)}
        >
          {content}
        </CardButton>
        {tools && (
          <CardTools $diagram={diagram}>
            <CardSpeaker type="button" data-speaker onClick={() => speak(said, lang)} aria-label={text.listenTo(said)}>
              <SpeakerIcon />
            </CardSpeaker>
            {side === 'left' && exercise.explain !== false && <Explain word={pair.en} variant="chip" />}
            {side === 'right' && pair.meaningEs && <Explain word={pair.es} meaning={{ es: pair.meaningEs }} variant="chip" />}
          </CardTools>
        )}
      </Card>
    );
  };

  const rightHeading = pictures ? text.pictures : rightTitle;
  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Board ref={board} lang={text.lang}>
        <Columns $diagram={diagram}>
          <Column aria-label={leftTitle} $across={diagram && pairs.length}>
            {diagram ? <Root>{exercise.root}</Root> : <Heading aria-hidden="true">{leftTitle}</Heading>}
            {left.map(id => renderCard('left', id))}
          </Column>
          {middle && (
            <Column aria-label={middleTitle} $across={pairs.length}>
              {centre.map(id => renderCard('middle', id))}
            </Column>
          )}
          <Column aria-label={rightHeading} $across={diagram && pairs.length}>
            {!diagram && <Heading aria-hidden="true">{rightHeading}</Heading>}
            {right.map(id => renderCard('right', id))}
          </Column>
        </Columns>
        {diagram && (
          <Joins aria-hidden="true">
            {joins.map(({ key, colour, ...ends }) => (
              <g key={key} data-testid="join" stroke={colour} fill={colour}>
                <line {...ends} strokeWidth="5" strokeLinecap="round" />
                <circle cx={ends.x1} cy={ends.y1} r="6" />
                <circle cx={ends.x2} cy={ends.y2} r="6" />
              </g>
            ))}
          </Joins>
        )}
      </Board>

      {finished ? <WellDone slips={slips} onAgain={() => playAgain()} onPractise={() => playAgain(practiseItems(slips))} /> : (
        <Progress>{text.pairs(done, total)}</Progress>
      )}
      <div aria-live="polite">
        {message && !finished && (
          <Message $kind={message.kind}>
            {message.kind === 'right' && (
              <span>
                <strong>
                  {message.pair.Picture
                    ? `✓ ${message.pair.en}`
                    : `✓ ${message.words[0]}${diagram && !(middle && message.words[1] === message.pair.translation) ? ':' : ' ='} ${message.words[1]}`}
                </strong>
              </span>
            )}
            {message.kind === 'wrong' && <span>{text.notQuitePair}</span>}
          </Message>
        )}
      </div>
    </>
  );
}
