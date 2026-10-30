'use client';

import {
  createContext, useContext, useEffect, useId, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';

import { speak } from '../speech';
import { SpeakerIcon } from '../game';
import { meaningOf } from '../exercises/glossary';
import {
  Flag, Bubble, BubbleHead, BubblePhoto, Photo, BubbleText, BubbleListen,
} from './style';

// Whether the words of the subject being studied are explained in Spanish.
export const ExplainContext = createContext(false);

const GAP = 8;
const MARGIN = 12;

// Where the bubble goes: below the flag, or above it when there is no room, or else in the middle
// of the screen, and always on screen. With a photo it is wider and much taller.
const placeFor = (flag, photo) => {
  const box = flag.getBoundingClientRect();
  const width = Math.min(photo ? 340 : 300, window.innerWidth - 2 * MARGIN);
  const height = photo ? 190 + width * (2 / 3) : 170;
  const left = Math.max(MARGIN, Math.min(box.left + box.width / 2 - width / 2, window.innerWidth - width - MARGIN));
  const below = box.bottom + GAP;
  if (window.innerHeight - below >= height) return { left, width, top: below };
  if (box.top - GAP >= height) return { left, width, bottom: window.innerHeight - box.top + GAP };
  return { left, width, top: Math.max(MARGIN, (window.innerHeight - height) / 2) };
};

// A Spanish flag beside a word: tapped, a bubble says in Spanish, in a few words, what it means,
// shows a photo of it when there is one, and can read it aloud. Nothing when the subject does not explain its words or the word is not in
// the glossary. `variant` sizes the flag for where it sits: a word card, a coloured tile, a box on
// a picture or a line of text.
export default function Explain({ word, variant = 'inline' }) {
  const explain = useContext(ExplainContext);
  const [place, setPlace] = useState(null);
  const flagRef = useRef(null);
  const bubbleRef = useRef(null);
  const id = useId();
  const meaning = explain ? meaningOf(word) : undefined;

  // Closed by tapping anywhere else, Escape, or the page moving under it.
  useEffect(() => {
    if (!place) return undefined;
    const close = () => setPlace(null);
    const onDown = (event) => {
      if (!bubbleRef.current?.contains(event.target) && !flagRef.current?.contains(event.target)) close();
    };
    const onKey = (event) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', close, true);
    window.addEventListener('resize', close);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', close, true);
      window.removeEventListener('resize', close);
    };
  }, [place]);

  if (!meaning) return null;

  // On the page itself, above any transformed or contained box that would trap a fixed bubble.
  const toggle = () => setPlace(place ? null : {
    host: flagRef.current.closest('[data-study-page]') ?? document.body,
    style: placeFor(flagRef.current, Boolean(meaning.photo)),
  });

  return (
    <>
      <Flag
        ref={flagRef}
        type="button"
        $variant={variant}
        aria-label={`¿Qué significa ${word}?`}
        aria-expanded={Boolean(place)}
        aria-controls={place ? id : undefined}
        onClick={toggle}
      >
        <span aria-hidden="true">🇪🇸</span>
      </Flag>
      {place && createPortal(
        <Bubble ref={bubbleRef} id={id} role="dialog" aria-label={word} lang="es" style={place.style}>
          <BubbleHead>
            <span lang="en">{word}</span>
            <strong>{meaning.es}</strong>
          </BubbleHead>
          {meaning.photo && (
            <BubblePhoto>
              <Photo src={meaning.photo.src} alt={meaning.es} />
              <figcaption>{`Foto: ${meaning.photo.credit}`}</figcaption>
            </BubblePhoto>
          )}
          <BubbleText>{meaning.text}</BubbleText>
          <BubbleListen type="button" onClick={() => speak(`${meaning.es}. ${meaning.text}`, 'es')}>
            <SpeakerIcon />
            Escuchar
          </BubbleListen>
        </Bubble>,
        place.host,
      )}
    </>
  );
}
