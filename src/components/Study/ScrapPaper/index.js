'use client';

import { useEffect, useRef, useState } from 'react';

import { useStrings } from '../language';
import {
  Workspace, Toggle, Sheet, Tools, Tool, Swatch, Paper, Canvas,
} from './style';

const COLOURS = { ink: '#24324a', red: '#d6336c', blue: '#1c7ed6' };
const PENCIL = 3;
const ERASER = 26;

// One stroke of the pencil or the eraser, as a line through its points.
const paint = (context, { points, colour, erase }) => {
  context.globalCompositeOperation = erase ? 'destination-out' : 'source-over';
  context.strokeStyle = COLOURS[colour] ?? COLOURS.ink;
  context.lineWidth = erase ? ERASER : PENCIL;
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.beginPath();
  context.moveTo(...points[0]);
  points.slice(1).forEach(point => context.lineTo(...point));
  if (points.length === 1) context.lineTo(...points[0]);
  context.stroke();
};

// A squared sheet to work sums out on, with a finger or a pencil, beside the exercise: at the
// bottom when the tablet is upright and on the right when it lies down. Whatever she writes stays
// while it is closed, until she clears it.
export default function ScrapPaper({ children }) {
  const text = useStrings();
  const [open, setOpen] = useState(false);
  const [strokes, setStrokes] = useState([]);
  const [colour, setColour] = useState('ink');
  const [erase, setErase] = useState(false);
  const canvasRef = useRef(null);
  const drawing = useRef(null);
  const penSeen = useRef(false);

  // Everything drawn so far, again: after a change, or when the sheet changes size.
  useEffect(() => {
    const canvas = canvasRef.current;
    const redraw = () => {
      const context = canvas.getContext('2d');
      if (!context) return;
      const scale = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * scale;
      canvas.height = canvas.clientHeight * scale;
      context.setTransform(scale, 0, 0, scale, 0, 0);
      strokes.forEach(stroke => paint(context, stroke));
    };
    redraw();
    if (typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(redraw);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [strokes, open]);

  const pointAt = (event) => {
    const box = canvasRef.current.getBoundingClientRect();
    return [event.clientX - box.left, event.clientY - box.top];
  };

  const start = (event) => {
    // One line at a time, and once a pencil has been used, a hand resting on the screen is ignored.
    if (event.pointerType === 'pen') penSeen.current = true;
    if (drawing.current || (penSeen.current && event.pointerType === 'touch')) return;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    drawing.current = {
      id: event.pointerId, points: [pointAt(event)], colour, erase,
    };
    const context = canvasRef.current.getContext('2d');
    if (context) paint(context, drawing.current);
  };

  const move = (event) => {
    const stroke = drawing.current;
    if (!stroke || stroke.id !== event.pointerId) return;
    const point = pointAt(event);
    const context = canvasRef.current.getContext('2d');
    if (context) paint(context, { ...stroke, points: [stroke.points.at(-1), point] });
    stroke.points.push(point);
  };

  const end = (event) => {
    const stroke = drawing.current;
    if (!stroke || stroke.id !== event.pointerId) return;
    drawing.current = null;
    setStrokes(list => [...list, stroke]);
  };

  const pick = (name) => {
    setColour(name);
    setErase(false);
  };

  return (
    <>
      <Workspace $open={open}>{children}</Workspace>
      {!open && (
        <Toggle type="button" onClick={() => setOpen(true)}>
          <span aria-hidden="true">✏️</span>
          {text.scrap}
        </Toggle>
      )}
      <Sheet $open={open} role="region" aria-label={text.scrap} hidden={!open}>
        <Tools role="toolbar" aria-label={text.scrapTools}>
          {Object.keys(COLOURS).map(name => (
            <Swatch
              key={name}
              type="button"
              $colour={COLOURS[name]}
              aria-label={text.pencil(text.colours[name])}
              aria-pressed={!erase && colour === name}
              onClick={() => pick(name)}
            />
          ))}
          <Tool type="button" aria-pressed={erase} onClick={() => setErase(true)}>{text.eraser}</Tool>
          <Tool
            type="button"
            $icon
            aria-label={text.undo}
            disabled={strokes.length === 0}
            onClick={() => setStrokes(list => list.slice(0, -1))}
          >
            ↶
          </Tool>
          <Tool type="button" $icon aria-label={text.clearAll} disabled={strokes.length === 0} onClick={() => setStrokes([])}>
            🗑️
          </Tool>
          <Tool type="button" $icon $close aria-label={text.close} onClick={() => setOpen(false)}>✕</Tool>
        </Tools>
        <Paper>
          <Canvas
            ref={canvasRef}
            data-strokes={strokes.length}
            onPointerDown={start}
            onPointerMove={move}
            onPointerUp={end}
            onPointerCancel={end}
          />
        </Paper>
      </Sheet>
    </>
  );
}
