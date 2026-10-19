'use client';

import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import {
  MAX_DEBT, createGame, step, squash,
} from './engine';
import {
  Overlay, Bar, Score, DebtMeter, DebtBlock, CloseButton, Field, Production, Bug, Splat,
  Card, CardTitle, CardText, CardNote, Actions, ActionButton,
} from './style';

const BEST_KEY = 'bug-squash-best';
const SPLAT_MS = 600;

const readBest = () => {
  try {
    return Number(localStorage.getItem(BEST_KEY)) || 0;
  } catch {
    return 0; // storage can be unavailable (private mode); the record then lasts for the visit
  }
};

const saveBest = (score) => {
  try {
    localStorage.setItem(BEST_KEY, String(score));
  } catch {
    // see readBest
  }
};

// The easter egg behind the hero's <heart \>: bugs fall towards production and every one that
// gets there adds technical debt. Loaded only when somebody finds it.
export default function BugGame({ onClose }) {
  const { t } = useTranslation();
  const [started, setStarted] = useState(false);
  const [game, setGame] = useState(createGame);
  const [bestBefore, setBestBefore] = useState(readBest); // the record when this round began
  const [splats, setSplats] = useState([]);
  const firstButton = useRef(null);

  const over = started && game.over;
  const record = over && game.fixed > bestBefore;
  const best = Math.max(bestBefore, over ? game.fixed : 0);
  let phase = 'intro';
  if (started) phase = over ? 'over' : 'playing';

  const start = () => {
    setBestBefore(best);
    setGame(createGame());
    setSplats([]);
    setStarted(true);
  };

  // The game loop. Long gaps between frames (a hidden tab) are clamped so bugs do not jump.
  useEffect(() => {
    if (phase !== 'playing') return undefined;
    let frame;
    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      setGame(current => step(current, dt));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [phase]);

  useEffect(() => {
    if (record) saveBest(game.fixed);
  }, [record, game.fixed]);

  // Esc closes it, and the page must not scroll behind it.
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  useEffect(() => {
    if (phase !== 'playing') firstButton.current?.focus();
  }, [phase]);

  const hit = useCallback((bug) => {
    setGame(current => squash(current, bug.id));
    const splat = { id: bug.id, x: bug.x, y: bug.y };
    setSplats(current => [...current, splat]);
    setTimeout(() => setSplats(current => current.filter(s => s !== splat)), SPLAT_MS);
  }, []);

  return (
    <Overlay role="dialog" aria-modal="true" aria-label={t('game.title')}>
      <Bar>
        <Score aria-live="polite">{t('game.fixed', { count: game.fixed })}</Score>
        <DebtMeter aria-label={t('game.debtLabel', { count: game.debt, max: MAX_DEBT })}>
          {t('game.debt')}
          {Array.from({ length: MAX_DEBT }, (_, index) => (
            <DebtBlock key={index} $full={index < game.debt} aria-hidden="true" />
          ))}
        </DebtMeter>
        <CloseButton type="button" aria-label={t('game.closeLabel')} onClick={onClose}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M5.7 4.3 12 10.6l6.3-6.3 1.4 1.4L13.4 12l6.3 6.3-1.4 1.4L12 13.4l-6.3 6.3-1.4-1.4L10.6 12 4.3 5.7z" />
          </svg>
        </CloseButton>
      </Bar>
      <Field>
        {phase === 'playing' && game.bugs.map(bug => (
          <Bug
            key={bug.id}
            type="button"
            aria-label={t('game.bug')}
            style={{ left: `${bug.x * 100}%`, top: `${bug.y * 100}%` }}
            onPointerDown={() => hit(bug)}
          >
            🐛
          </Bug>
        ))}
        {splats.map(splat => (
          <Splat key={splat.id} style={{ left: `${splat.x * 100}%`, top: `${splat.y * 100}%` }}>
            {t('game.splat')}
          </Splat>
        ))}
        {phase === 'intro' && (
          <Card>
            <CardTitle>{t('game.title')}</CardTitle>
            <CardText>{t('game.intro')}</CardText>
            {best > 0 && <CardNote>{t('game.best', { count: best })}</CardNote>}
            <Actions>
              <ActionButton ref={firstButton} type="button" $primary onClick={start}>{t('game.start')}</ActionButton>
            </Actions>
          </Card>
        )}
        {phase === 'over' && (
          <Card>
            <CardTitle>{t('game.overTitle')}</CardTitle>
            <CardText>{t('game.overScore', { count: game.fixed })}</CardText>
            <CardNote>{record ? t('game.newBest') : t('game.best', { count: best })}</CardNote>
            <Actions>
              <ActionButton ref={firstButton} type="button" $primary onClick={start}>{t('game.again')}</ActionButton>
              <ActionButton type="button" onClick={onClose}>{t('game.close')}</ActionButton>
            </Actions>
          </Card>
        )}
      </Field>
      <Production aria-hidden="true">{t('game.production')}</Production>
    </Overlay>
  );
}
