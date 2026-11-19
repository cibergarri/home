'use client';

import { Instructions } from '../LabelMap/style';
import { Sheet, Note } from './style';

// A drawing to look at and learn from, with nothing to drag or answer: a mind map, a diagram.
// `description` says what it shows, for screen readers; `note` goes under it.
export default function Diagram({ exercise }) {
  const {
    instructions, width, height, Drawing, description, note,
  } = exercise;
  return (
    <>
      {instructions && <Instructions>{instructions}</Instructions>}
      <Sheet>
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={description}>
          <Drawing />
        </svg>
        {note && <Note>{note}</Note>}
      </Sheet>
    </>
  );
}
