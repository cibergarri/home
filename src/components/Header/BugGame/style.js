'use client';

import styled, { keyframes } from 'styled-components';

import { IconButton } from '../Controls/style';

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

/* Over the whole page, frosted like the header so the hero still shows through. */
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1300;
  display: flex;
  flex-direction: column;
  background: color-mix(in srgb, var(--c-background) 82%, transparent);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  color: var(--c-primary);
  animation: ${fadeIn} 0.3s ease-out both;
  user-select: none;
  -webkit-user-select: none;
`;

export const Bar = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 700;
  @media (min-width: 768px) {
    padding: 16px 40px;
  }
`;

export const Score = styled.div`
  flex-grow: 1;
`;

/* One block per bug that has slipped through; full ones are debt already taken on. */
export const DebtMeter = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--c-muted);
  font-weight: 400;
  font-size: 13px;
`;

export const DebtBlock = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  border: 1px solid var(--c-heart);
  background: ${props => (props.$full ? 'var(--c-heart)' : 'transparent')};
  transition: background-color 0.2s;
`;

export const CloseButton = styled(IconButton)`
  flex-shrink: 0;
`;

export const Field = styled.div`
  position: relative;
  flex-grow: 1;
  margin: 0 16px;
  overflow: hidden;
  touch-action: none; /* taps are for squashing, not for scrolling or zooming the page */
  @media (min-width: 768px) {
    margin: 0 40px;
  }
`;

/* The line the bugs must not cross. */
export const Production = styled.div`
  flex-shrink: 0;
  margin: 0 16px 24px;
  padding-top: 6px;
  border-top: 2px dashed var(--c-heart);
  color: var(--c-heart);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 13px;
  text-align: right;
  @media (min-width: 768px) {
    margin: 0 40px 32px;
  }
`;

const wiggle = keyframes`
  from { transform: translate(-50%, -50%) rotate(-12deg) }
  to { transform: translate(-50%, -50%) rotate(12deg) }
`;

/* Positioned by its centre; a generous box so a finger can hit it. */
export const Bug = styled.button`
  position: absolute;
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 30px;
  line-height: 48px;
  cursor: crosshair;
  transform: translate(-50%, -50%);
  animation: ${wiggle} 0.35s ease-in-out infinite alternate;
  -webkit-tap-highlight-color: transparent;
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    border-radius: 50%;
  }
`;

const rise = keyframes`
  from { opacity: 1; transform: translate(-50%, -50%) }
  to { opacity: 0; transform: translate(-50%, -150%) }
`;

/* What is left where a bug was squashed. */
export const Splat = styled.div`
  position: absolute;
  pointer-events: none;
  color: var(--c-accent);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  animation: ${rise} 0.6s ease-out forwards;
`;

/* The start and game over cards, centred on the field. */
export const Card = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 24px;
  text-align: center;
  animation: ${fadeIn} 0.3s ease-out both;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 32px;
  letter-spacing: -0.02em;
  color: var(--c-primary);
  @media (min-width: 768px) {
    font-size: 44px;
  }
`;

export const CardText = styled.p`
  margin: 0;
  max-width: 420px;
  color: var(--c-text);
  font-size: 17px;
  line-height: 1.5;
`;

export const CardNote = styled.p`
  margin: 0;
  color: var(--c-muted);
  font-size: 14px;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 8px;
`;

/* Like the contact buttons: an outline that fills in on hover. */
export const ActionButton = styled.button`
  color: ${props => (props.$primary ? 'var(--c-background)' : 'var(--c-primary)')};
  background: ${props => (props.$primary ? 'var(--c-primary)' : 'transparent')};
  border: 1px solid var(--c-primary);
  border-radius: 999px;
  padding: 10px 20px;
  font: inherit;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background: var(--c-primary);
    color: var(--c-background);
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 3px;
  }
`;
