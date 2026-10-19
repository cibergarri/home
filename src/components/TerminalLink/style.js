'use client';

import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  50% { opacity: 0 }
`;

/* A small black screen with a green prompt, in the bottom right corner on every screen size. */
export const Button = styled.a`
  position: fixed;
  right: 16px;
  bottom: calc(16px + env(safe-area-inset-bottom));
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid #33ff66;
  border-radius: 12px;
  background: #000;
  color: #33ff66;
  text-decoration: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4), 0 6px 18px rgba(0, 0, 0, 0.35), 0 0 14px rgba(51, 255, 102, 0.25);
  -webkit-tap-highlight-color: transparent;
  /* Smaller on phones, where it floats over the text being read. */
  @media (max-width: 767px) {
    right: 12px;
    bottom: calc(12px + env(safe-area-inset-bottom));
    width: 36px;
    height: 36px;
    border-radius: 9px;
  }
  /* Like the other controls: quick to grow, slow to settle back. */
  transition: transform 1.2s, box-shadow 1.2s;
  &:hover {
    transition-duration: 0.25s;
    transform: scale(1.1);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4), 0 6px 18px rgba(0, 0, 0, 0.35), 0 0 22px rgba(51, 255, 102, 0.55);
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 3px;
  }
`;

export const Glyph = styled.span`
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.05em;
  text-shadow: 0 0 6px rgba(51, 255, 102, 0.8);
  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

/* The underscore blinks like a cursor. */
export const Caret = styled.span`
  animation: ${blink} 1s step-end infinite;
`;
