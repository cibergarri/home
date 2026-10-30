'use client';

import styled, { css } from 'styled-components';

/* How much of the screen the sheet takes: the bottom when upright, the right when lying down. */
const TALL = '46svh';
const WIDE = 'min(42vw, 560px)';

/* The exercise, kept clear of the open sheet so all of it can still be reached. */
export const Workspace = styled.div`
  padding-bottom: 72px;
  ${({ $open }) => $open && css`
    @media (orientation: portrait) {
      padding-bottom: calc(${TALL} + 16px);
    }
    @media (orientation: landscape) {
      padding-right: ${WIDE};
    }
  `}
`;

export const Toggle = styled.button`
  position: fixed;
  left: max(16px, env(safe-area-inset-left));
  bottom: calc(16px + env(safe-area-inset-bottom));
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 56px;
  padding: 0 22px;
  border: 2px solid var(--s-line);
  border-radius: 28px;
  background: var(--s-card);
  box-shadow: 0 4px 0 var(--s-line), 0 6px 18px rgba(36, 50, 74, 0.12);
  color: var(--s-ink);
  font-family: inherit;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  touch-action: manipulation;
  &:active {
    transform: translateY(3px);
  }
`;

export const Sheet = styled.section`
  position: fixed;
  z-index: 20;
  display: flex;
  flex-direction: column;
  background: var(--s-card);
  box-shadow: 0 0 24px rgba(36, 50, 74, 0.18);
  &[hidden] {
    display: none;
  }
  @media (orientation: portrait) {
    left: 0;
    right: 0;
    bottom: 0;
    height: ${TALL};
    border-top: 3px solid var(--s-line);
    border-radius: 20px 20px 0 0;
    padding-bottom: env(safe-area-inset-bottom);
  }
  @media (orientation: landscape) {
    top: 0;
    right: 0;
    bottom: 0;
    width: ${WIDE};
    border-left: 3px solid var(--s-line);
    padding-right: env(safe-area-inset-right);
  }
`;

export const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-bottom: 2px solid var(--s-line);
`;

const pressed = css`
  &[aria-pressed='true'] {
    outline: 3px solid var(--s-accent);
    outline-offset: 2px;
  }
`;

export const Swatch = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 3px solid #fff;
  background: ${({ $colour }) => $colour};
  box-shadow: 0 0 0 2px var(--s-line);
  cursor: pointer;
  touch-action: manipulation;
  ${pressed}
`;

export const Tool = styled.button`
  min-height: 44px;
  padding: 0 14px;
  border-radius: 12px;
  border: 2px solid var(--s-line);
  background: var(--s-card);
  color: var(--s-ink);
  font-family: inherit;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  touch-action: manipulation;
  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
  ${pressed}
  ${({ $icon }) => $icon && css`
    width: 44px;
    padding: 0;
    font-size: 20px;
  `}
  ${({ $close }) => $close && css`
    margin-left: auto;
  `}
`;

/* Squared like her notebook, so tens and units line up. */
export const Paper = styled.div`
  position: relative;
  flex: 1;
  min-height: 0;
  background-color: #fffdf7;
  background-image:
    linear-gradient(to right, #d7e6f5 1px, transparent 1px),
    linear-gradient(to bottom, #d7e6f5 1px, transparent 1px);
  background-size: 28px 28px;
`;

export const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  touch-action: none;
  cursor: crosshair;
`;
