'use client';

import { useEffect, useRef, useState } from 'react';

import { useStrings } from '../language';
import { loadNet, readNumber, readLetter } from '../handwriting';
import {
  Pad, Paper, Canvas, Placeholder, Buttons, Clear, Read,
} from './style';

const INK = '#24324a';
const WIDTH = 7;

const paint = (context, points) => {
  context.strokeStyle = INK;
  context.lineWidth = WIDTH;
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.beginPath();
  context.moveTo(...points[0]);
  points.slice(1).forEach(point => context.lineTo(...point));
  if (points.length === 1) context.lineTo(...points[0]);
  context.stroke();
};

// A lined strip to write a number on with a finger or a pencil, in place of the number keys, or a
// letter (`kind="letters"`). On ✓ what is written is read and handed to `onRead` as a string of
// digits, or one lowercase letter, and the strip is cleared for the next try. If the reader cannot
// be loaded (offline the first time), `onFail` is called and the writing is kept.
export default function WritingPad({
  onRead, onEmpty, onFail, disabled, kind = 'digits', placeholder,
}) {
  const text = useStrings();
  const [strokes, setStrokes] = useState([]);
  const [reading, setReading] = useState(false);
  const canvasRef = useRef(null);
  const drawing = useRef(null);

  // Everything written so far, again: after a change, or when the strip changes size.
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
  }, [strokes]);

  const pointAt = (event) => {
    const box = canvasRef.current.getBoundingClientRect();
    return [event.clientX - box.left, event.clientY - box.top];
  };

  const start = (event) => {
    if (disabled || reading || drawing.current) return;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    drawing.current = { id: event.pointerId, points: [pointAt(event)] };
    const context = canvasRef.current.getContext('2d');
    if (context) paint(context, drawing.current.points);
  };

  const move = (event) => {
    const stroke = drawing.current;
    if (!stroke || stroke.id !== event.pointerId) return;
    const point = pointAt(event);
    const context = canvasRef.current.getContext('2d');
    if (context) paint(context, [stroke.points.at(-1), point]);
    stroke.points.push(point);
  };

  const end = (event) => {
    const stroke = drawing.current;
    if (!stroke || stroke.id !== event.pointerId) return;
    drawing.current = null;
    setStrokes(list => [...list, stroke.points]);
  };

  const read = async () => {
    if (strokes.length === 0) {
      onEmpty();
      return;
    }
    setReading(true);
    try {
      const net = await loadNet(kind);
      onRead((kind === 'letters' ? readLetter : readNumber)(net, strokes).text);
      setStrokes([]);
    } catch {
      onFail?.();
    } finally {
      setReading(false);
    }
  };

  return (
    <Pad $narrow={kind === 'letters'}>
      <Paper>
        {strokes.length === 0 && <Placeholder aria-hidden="true">{placeholder ?? text.writeHere}</Placeholder>}
        <Canvas
          ref={canvasRef}
          role="img"
          aria-label={placeholder ?? text.writeHere}
          data-strokes={strokes.length}
          onPointerDown={start}
          onPointerMove={move}
          onPointerUp={end}
          onPointerCancel={end}
        />
      </Paper>
      <Buttons>
        <Clear type="button" onClick={() => setStrokes([])} disabled={strokes.length === 0 || reading}>
          {text.clearWriting}
        </Clear>
        <Read type="button" onClick={read} disabled={disabled || reading} aria-label={text.check}>
          {reading ? text.reading : '✓'}
        </Read>
      </Buttons>
    </Pad>
  );
}
