'use client';

import { useLayoutEffect, useRef, useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import {
  scramble, shuffle, WellDone, useSlips, practiseItems,
} from '../game';
import { Instructions, Message, Progress } from '../LabelMap/style';
import {
  Board, List, Item, Lines,
} from './style';

function Drawing({ of }) {
  const { Drawing: Picture } = of;
  return <Picture />;
}

// Each of the left words goes with several on the right.
const COLOURS = ['#4a90d9', '#e0699a', '#3fae7a', '#e8a23a'];

// Join with a line, as in the book: a few words on the left (`left`, each an id and its `text`) and
// on the right the things that go with them (`right`, each with `to`, the left word it goes with).
// Tap a word on one side and then one on the other. A right join draws a line in the colour of the
// left word and is read aloud; a wrong one shakes. A left word can have several lines; a right one,
// only one. A right one can be a picture instead (`Drawing`, 320 × 200, its `text` saying what it
// shows). At the end, the ones gone wrong can be joined again on their own.
export default function JoinGame({ exercise }) {
  const { instructions, left } = exercise;
  const text = useStrings();
  const [only, setOnly] = useState(null); // the right words to join again, if not all
  const right = only ? exercise.right.filter(item => only.includes(item.id)) : exercise.right;
  const [order, setOrder] = useState(() => scramble(exercise.right.map(item => item.id), 2));
  const [joined, setJoined] = useState([]); // the right words joined
  const [selected, setSelected] = useState(null);
  const [wrong, setWrong] = useState([]);
  const [slips, slip, clearSlips] = useSlips();
  const [message, setMessage] = useState(null);
  const [lines, setLines] = useState([]);
  const board = useRef(null);
  const wrongTimer = useRef(null);

  const byId = Object.fromEntries(exercise.right.map(item => [item.id, item]));
  const leftOf = Object.fromEntries(left.map(item => [item.id, item]));
  const colourOf = id => COLOURS[left.findIndex(item => item.id === id) % COLOURS.length];
  const finished = joined.length === right.length;

  // The lines from the dot of each left word to the dots of the right ones joined to it.
  useLayoutEffect(() => {
    const measure = () => {
      if (!board.current) return;
      const { left: x0, top: y0 } = board.current.getBoundingClientRect();
      const box = key => board.current.querySelector(`[data-join="${key}"]`)?.getBoundingClientRect();
      setLines(joined.flatMap((id) => {
        const [from, to] = [box(`left-${byId[id].to}`), box(`right-${id}`)];
        if (!from || !to) return [];
        return [{
          id, colour: colourOf(byId[id].to), x1: from.right + 5 - x0, y1: from.top + from.height / 2 - y0, x2: to.left - 5 - x0, y2: to.top + to.height / 2 - y0,
        }];
      }));
    };
    measure();
    if (typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(measure);
    observer.observe(board.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [joined, order]);

  const choose = (side, id) => {
    if (!selected || selected.side === side) {
      setSelected(selected?.side === side && selected.id === id ? null : { side, id });
      setMessage(null);
      return;
    }
    setSelected(null);
    const [place, thing] = side === 'left' ? [id, selected.id] : [selected.id, id];
    const item = byId[thing];
    if (item.to === place) {
      setJoined(current => [...current, thing]);
      const sentence = item.Drawing ? leftOf[place].text : `${leftOf[place].text}: ${item.text}`;
      speak(sentence, text.lang);
      setMessage({ kind: 'right', text: sentence });
      return;
    }
    slip({
      item: thing, prompt: item.Drawing ? undefined : item.text, scene: item.Drawing && { width: 320, height: 200, Drawing: item.Drawing }, wrong: leftOf[place].text, right: leftOf[item.to].text,
    });
    setWrong([`left-${place}`, `right-${thing}`]);
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => setWrong([]), 600);
    setMessage({ kind: 'wrong' });
  };

  const playAgain = (which = null) => {
    setOnly(which);
    setOrder(shuffle(exercise.right.map(item => item.id)));
    setJoined([]);
    setSelected(null);
    clearSlips();
    setMessage(null);
  };

  const itemProps = (side, id) => ({
    type: 'button',
    'data-join': `${side}-${id}`,
    $side: side,
    $selected: selected?.side === side && selected.id === id,
    $wrong: wrong.includes(`${side}-${id}`),
    'aria-pressed': selected?.side === side && selected.id === id,
    onClick: () => choose(side, id),
  });

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Board ref={board}>
        <List>
          {left.map(item => (
            <li key={item.id}>
              <Item {...itemProps('left', item.id)} $colour={joined.some(id => byId[id].to === item.id) && colourOf(item.id)}>
                {item.text}
              </Item>
            </li>
          ))}
        </List>
        <List>
          {order.filter(id => right.some(item => item.id === id)).map(id => (
            <li key={id}>
              <Item
                {...itemProps('right', id)}
                disabled={joined.includes(id)}
                $colour={joined.includes(id) && colourOf(byId[id].to)}
                $picture={Boolean(byId[id].Drawing)}
                aria-label={byId[id].Drawing ? byId[id].text : undefined}
              >
                {byId[id].Drawing ? (
                  <svg viewBox="0 0 320 200" aria-hidden="true">
                    <Drawing of={byId[id]} />
                  </svg>
                ) : byId[id].text}
              </Item>
            </li>
          ))}
        </List>
        <Lines aria-hidden="true">
          {lines.map(({ id, colour, ...ends }) => (
            <line key={id} data-testid="line" {...ends} stroke={colour} strokeWidth={4} strokeLinecap="round" />
          ))}
        </Lines>
      </Board>

      {finished ? <WellDone slips={slips} onAgain={() => playAgain()} onPractise={() => playAgain(practiseItems(slips))} /> : (
        <Progress>{text.progressDone(joined.length, right.length)}</Progress>
      )}
      <div aria-live="polite">
        {message && !finished && (
          <Message $kind={message.kind}>
            {message.kind === 'right' && <strong>{`✓ ${message.text}`}</strong>}
            {message.kind === 'wrong' && <span>{text.notQuitePair}</span>}
          </Message>
        )}
      </div>
    </>
  );
}
