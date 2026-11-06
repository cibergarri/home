'use client';

import { useRef, useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
import {
  shuffle, isNear, useDrag, SpeakerIcon, WellDone, useSlips, practiseItems,
} from '../game';
import {
  Instructions, Chip, Word, Speaker, Ghost, Message, Progress,
} from '../LabelMap/style';
import {
  Columns, Column, ColumnButton, Sorted, SortedCard, SmallSpeaker, Bottom, Cards,
} from './style';

// Cards to sort into columns: each card is dragged (or tapped, then a column's name tapped) into
// the column it belongs to. A card can belong to more than one column (`columns`), and then any
// of them is right. A right card stays in its column, a wrong one goes back. At the end, the
// cards gone wrong can be looked at again, and sorted again on their own.
export default function SortGame({ exercise }) {
  const strings = useStrings();
  const { instructions, columns } = exercise;
  const [only, setOnly] = useState(null); // the cards to sort again, if not all
  const cards = only ? exercise.cards.filter(card => only.includes(card.id)) : exercise.cards;
  // The first round is in a fixed order, so the static page and the browser agree on it.
  const [order, setOrder] = useState(() => cards.map(card => card.id).reverse());
  const [sorted, setSorted] = useState({});
  const [selected, setSelected] = useState(null);
  const [wrong, setWrong] = useState(null);
  const [slips, slip, clearSlips] = useSlips();
  const [message, setMessage] = useState(null);
  const zones = useRef({});
  const wrongTimer = useRef(null);

  const byId = Object.fromEntries(cards.map(card => [card.id, card]));
  const sortedCount = Object.keys(sorted).length;
  const finished = sortedCount === cards.length;

  const columnAt = (x, y) => Object.keys(zones.current).find((id) => {
    const element = zones.current[id];
    return element && isNear(element, x, y);
  }) ?? null;

  const put = (cardId, columnId) => {
    setSelected(null);
    const card = byId[cardId];
    if (card.columns.includes(columnId)) {
      setSorted(current => ({ ...current, [cardId]: columnId }));
      setMessage({ kind: 'right', card, column: columns.find(column => column.id === columnId) });
      return;
    }
    const titleOf = id => columns.find(column => column.id === id).title;
    slip({
      item: cardId, prompt: card.text, wrong: titleOf(columnId), right: card.columns.map(titleOf).join(' / '),
    });
    setWrong(columnId);
    clearTimeout(wrongTimer.current);
    wrongTimer.current = setTimeout(() => setWrong(null), 600);
    setMessage({ kind: 'wrong' });
  };

  const {
    drag, over, handlersFor, isTap,
  } = useDrag({ targetAt: columnAt, onDrop: put });

  const onCardClick = (event, id) => {
    if (!isTap(event)) return;
    setSelected(current => (current === id ? null : id));
    setMessage(null);
  };

  const onColumnClick = (id) => {
    if (selected) put(selected, id);
    else setMessage({ kind: 'hint' });
  };

  const playAgain = (cardsToSort = null) => {
    setOnly(cardsToSort);
    setOrder(shuffle(cardsToSort ?? exercise.cards.map(card => card.id)));
    setSorted({});
    setSelected(null);
    clearSlips();
    setMessage(null);
  };

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Columns $count={columns.length}>
        {columns.map(({ id, title, subtitle }) => (
          <Column
            key={id}
            ref={(element) => { zones.current[id] = element; }}
            data-testid={`column-${id}`}
            $over={over === id}
            $wrong={wrong === id}
          >
            <ColumnButton type="button" onClick={() => onColumnClick(id)} $ready={Boolean(selected)}>
              {title}
              {subtitle && <small>{subtitle}</small>}
            </ColumnButton>
            <Sorted>
              {order.filter(cardId => sorted[cardId] === id).map((cardId) => {
                const { text } = byId[cardId];
                return (
                  <SortedCard key={cardId}>
                    {text}
                    <SmallSpeaker type="button" onClick={() => speak(text, strings.lang)} aria-label={strings.listenTo(text)}>
                      <SpeakerIcon />
                    </SmallSpeaker>
                  </SortedCard>
                );
              })}
            </Sorted>
          </Column>
        ))}
      </Columns>

      <Bottom>
        {finished ? <WellDone slips={slips} onAgain={() => playAgain()} onPractise={() => playAgain(practiseItems(slips))} /> : (
          <>
            <Cards aria-label={strings.cardsTray}>
              {order.filter(id => !sorted[id]).map((id) => {
                const { text } = byId[id];
                return (
                  <Chip key={id} $selected={selected === id} $dragging={drag?.id === id}>
                    <Word type="button" aria-pressed={selected === id} {...handlersFor(id)} onClick={event => onCardClick(event, id)}>
                      {text}
                    </Word>
                    <Speaker type="button" onClick={() => speak(text, strings.lang)} aria-label={strings.listenTo(text)}>
                      <SpeakerIcon />
                    </Speaker>
                  </Chip>
                );
              })}
            </Cards>
            <Progress>{strings.progressDone(sortedCount, cards.length)}</Progress>
          </>
        )}
        <div aria-live="polite">
          {message && !finished && (
            <Message $kind={message.kind}>
              {message.kind === 'right' && (
                <span>
                  <strong>{`✓ ${message.column.title}: `}</strong>
                  {`${message.card.text.toLowerCase()}.`}
                </span>
              )}
              {message.kind === 'wrong' && <span>{strings.tryAnotherColumn}</span>}
              {message.kind === 'hint' && <span>{strings.pickCardFirst}</span>}
            </Message>
          )}
        </div>
      </Bottom>
      {drag && (
        <Ghost style={{ left: drag.x, top: drag.y }} aria-hidden="true">
          {byId[drag.id].text}
        </Ghost>
      )}
    </>
  );
}
