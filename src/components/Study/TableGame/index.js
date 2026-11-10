'use client';

import { useEffect, useRef, useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import {
  scramble, shuffle, isNear, useDrag, WellDone, SpeakerIcon, useSlips, practiseItems, pickSome,
} from '../game';
import {
  Instructions, Chip, Word, Speaker, Ghost, Message, Progress,
} from '../LabelMap/style';
import { Bottom, Cards } from '../SortGame/style';
import {
  Table, Heading, RowWord, EmptyCell, FilledCell,
} from './style';

// A table to fill in, as in the notebook: a column of words (`rows`, each a `word` and its `cells`,
// one for every column after the first) and the words that go in the other columns, in a tray to
// drag (or tap, then tap a box) into their boxes. A word is right in any box that wants that word;
// a right one stays, a wrong one shakes the box and goes back. With `draw`, only that many rows,
// picked at random each time. At the end, the rows gone wrong can be looked at again, and filled
// in again on their own.
const cellId = (rowId, column) => `${rowId}:${column}`;
const tilesFor = rows => rows.flatMap(row => row.cells.map((word, column) => ({ id: cellId(row.id, column), word })));

export default function TableGame({ exercise }) {
  const strings = useStrings();
  const { instructions, columns, draw } = exercise;
  const allIds = exercise.rows.map(row => row.id);
  const [only, setOnly] = useState(null); // the rows to fill in again, if not all
  const [drawn, setDrawn] = useState(() => (draw ? allIds.slice(0, draw) : null)); // this time's, with `draw`
  const playing = only ?? drawn;
  const rows = playing ? exercise.rows.filter(row => playing.includes(row.id)) : exercise.rows;
  // The first round is in a fixed order, so the static page and the browser agree on it.
  const [order, setOrder] = useState(() => scramble(tilesFor(rows).map(tile => tile.id), 3));
  const [filled, setFilled] = useState({}); // box id → the tile put there
  const [selected, setSelected] = useState(null);
  const [wrong, setWrong] = useState(null);
  const [slips, slip, clearSlips] = useSlips();
  const [message, setMessage] = useState(null);
  const boxes = useRef({});
  const wrongTimer = useRef(null);

  // Picked once on the client, after the page drawn on the server has loaded.
  useEffect(() => {
    if (!draw) return;
    const picked = pickSome(exercise.rows.map(row => row.id), draw);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDrawn(picked);
    setOrder(shuffle(tilesFor(exercise.rows.filter(row => picked.includes(row.id))).map(tile => tile.id)));
  }, [draw, exercise.rows]);

  const tiles = Object.fromEntries(tilesFor(rows).map(tile => [tile.id, tile]));
  const rowsById = Object.fromEntries(rows.map(row => [row.id, row]));
  const total = Object.keys(tiles).length;
  const finished = Object.keys(filled).length === total;
  const used = new Set(Object.values(filled));

  const boxAt = (x, y) => Object.keys(boxes.current).find((id) => {
    const element = boxes.current[id];
    return element && !filled[id] && isNear(element, x, y);
  }) ?? null;

  const put = (tileId, boxId) => {
    setSelected(null);
    const [rowId, column] = boxId.split(':');
    const row = rowsById[rowId];
    const wanted = row.cells[Number(column)];
    if (tiles[tileId].word === wanted) {
      setFilled(current => ({ ...current, [boxId]: tileId }));
      speak(wanted, strings.lang);
      setMessage({ kind: 'right', text: `${columns[Number(column) + 1]} de ${row.word}: ${wanted}` });
      return;
    }
    slip({
      item: rowId, prompt: `${columns[Number(column) + 1]} de ${row.word}`, wrong: tiles[tileId].word, right: wanted,
    });
    setWrong(boxId);
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => setWrong(null), 600);
    setMessage({ kind: 'wrong' });
  };

  const {
    drag, over, handlersFor, isTap,
  } = useDrag({ targetAt: boxAt, onDrop: put });

  const onTileClick = (event, id) => {
    if (!isTap(event)) return;
    setSelected(current => (current === id ? null : id));
    setMessage(null);
  };

  const onBoxClick = (id) => {
    if (selected) put(selected, id);
    else setMessage({ kind: 'hint' });
  };

  const playAgain = (rowsToFill = null) => {
    let toPlay = rowsToFill ?? allIds;
    if (draw && !rowsToFill) {
      toPlay = pickSome(allIds, draw);
      setDrawn(toPlay);
    }
    setOnly(rowsToFill);
    setOrder(shuffle(tilesFor(exercise.rows.filter(row => toPlay.includes(row.id))).map(tile => tile.id)));
    setFilled({});
    setSelected(null);
    clearSlips();
    setMessage(null);
  };

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Table $count={columns.length} role="table" aria-label={columns.join(', ')}>
        {columns.map(title => <Heading key={title} role="columnheader">{title}</Heading>)}
        {rows.map(row => [
          <RowWord key={row.id} type="button" onClick={() => speak(row.word, strings.lang)}>{row.word}</RowWord>,
          ...row.cells.map((word, column) => {
            const id = cellId(row.id, column);
            const label = `${columns[column + 1]} de ${row.word}`;
            if (filled[id]) {
              return (
                <FilledCell key={id} type="button" onClick={() => speak(word, strings.lang)} aria-label={`${label}: ${word}`}>
                  {`✓ ${word}`}
                </FilledCell>
              );
            }
            return (
              <EmptyCell
                key={id}
                ref={(element) => { boxes.current[id] = element; }}
                type="button"
                onClick={() => onBoxClick(id)}
                aria-label={label}
                $ready={Boolean(selected)}
                $over={over === id}
                $wrong={wrong === id}
              >
                ?
              </EmptyCell>
            );
          }),
        ])}
      </Table>

      <Bottom>
        {finished ? <WellDone slips={slips} onAgain={() => playAgain()} onPractise={() => playAgain(practiseItems(slips))} /> : (
          <>
            <Cards aria-label={strings.cardsTray}>
              {order.filter(id => tiles[id] && !used.has(id)).map((id) => {
                const { word } = tiles[id];
                return (
                  <Chip key={id} $selected={selected === id} $dragging={drag?.id === id}>
                    <Word type="button" aria-pressed={selected === id} {...handlersFor(id)} onClick={event => onTileClick(event, id)}>
                      {word}
                    </Word>
                    <Speaker type="button" onClick={() => speak(word, strings.lang)} aria-label={strings.listenTo(word)}>
                      <SpeakerIcon />
                    </Speaker>
                  </Chip>
                );
              })}
            </Cards>
            <Progress>{strings.progressDone(Object.keys(filled).length, total)}</Progress>
          </>
        )}
        <div aria-live="polite">
          {message && !finished && (
            <Message $kind={message.kind}>
              {message.kind === 'right' && <strong>{`✓ ${message.text}`}</strong>}
              {message.kind === 'wrong' && <span>{strings.tryAnotherBox}</span>}
              {message.kind === 'hint' && <span>{strings.pickWordFirst}</span>}
            </Message>
          )}
        </div>
      </Bottom>
      {drag && tiles[drag.id] && (
        <Ghost style={{ left: drag.x, top: drag.y }} aria-hidden="true">
          {tiles[drag.id].word}
        </Ghost>
      )}
    </>
  );
}
