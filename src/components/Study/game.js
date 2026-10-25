'use client';

import { useRef, useState } from 'react';

import { Done, Stars, Again } from './LabelMap/style';

// What the study games share: dragging with a finger, the speaker icon, and the end screen.

// How far a finger moves before a tap becomes a drag, and how near a target counts as on it, in px.
const DRAG_THRESHOLD = 8;
const DROP_SLOP = 18;

export const shuffle = (list) => {
  const result = [...list];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

// A fixed mix-up of a list, the same every time for the same seed, so the static page and the
// browser agree on it; never left in its original order.
export const scramble = (list, seed = 1) => {
  let state = seed;
  const random = () => {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };
  const result = [...list];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  if (result.length > 1 && result.every((item, index) => item === list[index])) result.push(result.shift());
  return result;
};

// Whether a point is on an element, or near enough for a finger.
export const isNear = (element, x, y) => {
  const rect = element.getBoundingClientRect();
  return x >= rect.left - DROP_SLOP && x <= rect.right + DROP_SLOP
    && y >= rect.top - DROP_SLOP && y <= rect.bottom + DROP_SLOP;
};

// Drags things by pointer (finger, pen or mouse). `targetAt(x, y)` names the target under a point,
// if any, and `onDrop(id, target)` is called when a dragged thing is let go on one. A press that
// does not move is left to the click that follows, so tapping still works; `isTap(event)` tells
// that click apart from the one a browser may fire at the end of a drag.
export function useDrag({ targetAt, onDrop }) {
  const [drag, setDrag] = useState(null);
  const [over, setOver] = useState(null);
  const pointer = useRef(null);
  const ignoreClicksUntil = useRef(0);

  const start = (event, id) => {
    if (event.button > 0 || pointer.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointer.current = {
      id,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
      dragging: false,
    };
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const move = (event) => {
    const current = pointer.current;
    if (!current || current.pointerId !== event.pointerId) return;
    const distance = Math.hypot(event.clientX - current.startX, event.clientY - current.startY);
    if (!current.dragging && distance < DRAG_THRESHOLD) return;
    current.dragging = true;
    setDrag({ id: current.id, x: event.clientX - current.offsetX, y: event.clientY - current.offsetY });
    setOver(targetAt(event.clientX, event.clientY));
  };

  const end = (event, drop) => {
    const current = pointer.current;
    if (!current || current.pointerId !== event.pointerId) return;
    pointer.current = null;
    if (!current.dragging) return;
    ignoreClicksUntil.current = event.timeStamp + 400;
    setDrag(null);
    setOver(null);
    const target = drop && targetAt(event.clientX, event.clientY);
    if (target) onDrop(current.id, target);
  };

  const handlersFor = id => ({
    onPointerDown: event => start(event, id),
    onPointerMove: move,
    onPointerUp: event => end(event, true),
    onPointerCancel: event => end(event, false),
    onContextMenu: event => event.preventDefault(),
  });

  const isTap = event => event.timeStamp >= ignoreClicksUntil.current;

  return {
    drag, over, handlersFor, isTap,
  };
}

export function SpeakerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" />
      <path d="M15.5 9a4 4 0 0 1 0 6" />
      <path d="M18.5 6.5a7.5 7.5 0 0 1 0 11" />
    </svg>
  );
}

const starsFor = (mistakes) => {
  if (mistakes === 0) return 3;
  return mistakes <= 2 ? 2 : 1;
};

// The end of a game: up to three stars, fewer for mistakes, and a way to play again.
export function WellDone({ mistakes, onAgain }) {
  const stars = starsFor(mistakes);
  return (
    <Done role="status">
      <h2>Well done, Julia!</h2>
      <Stars aria-label={`${stars} out of 3 stars`}>
        {[1, 2, 3].map(n => <span key={n} data-off={n > stars || undefined}>⭐</span>)}
      </Stars>
      <p>{mistakes === 0 ? 'Every word right first time!' : `${mistakes} ${mistakes === 1 ? 'mistake' : 'mistakes'} on the way.`}</p>
      <Again type="button" onClick={onAgain}>Play again</Again>
    </Done>
  );
}
