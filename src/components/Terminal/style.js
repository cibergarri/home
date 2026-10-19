'use client';

import styled, { keyframes } from 'styled-components';

export const PHOSPHOR = '#33ff66';

/* An old green phosphor screen. Its own colours are set as the site's colour tokens, so anything
   opened from here (the bug game) turns green too. */
export const Window = styled.div`
  --c-primary: ${PHOSPHOR};
  --c-text: ${PHOSPHOR};
  --c-muted: #1fa347;
  --c-accent: #b6ffcb;
  --c-heart: #ff4060;
  --c-background: #000;
  --c-line: rgba(51, 255, 102, 0.28);
  --c-line-strong: rgba(51, 255, 102, 0.6);
  --c-chip: rgba(51, 255, 102, 0.08);
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background: #000;
  color: ${PHOSPHOR};
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;
  font-size: 13px;
  line-height: 1.5;
  text-shadow: 0 0 4px rgba(51, 255, 102, 0.55);
  @media (min-width: 768px) {
    font-size: 15px;
  }
  /* Scanlines and a dark edge, over everything but never in the way of a tap. */
  &::after {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 5;
    background:
      repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.22) 0 1px, transparent 1px 3px),
      radial-gradient(ellipse at center, transparent 60%, rgba(0, 0, 0, 0.55) 100%);
  }
  ::selection {
    background: ${PHOSPHOR};
    color: #000;
    text-shadow: none;
  }
`;

export const TitleBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: #000;
  border-bottom: 1px solid var(--c-line);
  @media (min-width: 768px) {
    padding: 12px 40px;
  }
`;

export const TitleText = styled.span`
  flex-grow: 1;
  color: var(--c-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* Pixel art, scaled up with hard edges. */
export const Pixels = styled.img`
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  flex-shrink: 0;
`;

export const Logo = styled(Pixels)`
  width: 24px;
  height: 24px;
`;

export const BarLink = styled.a`
  color: ${PHOSPHOR};
  text-decoration: none;
  white-space: nowrap;
  &:hover,
  &:focus-visible {
    background: ${PHOSPHOR};
    color: #000;
    text-shadow: none;
    outline: none;
  }
`;

export const Screen = styled.main`
  flex-grow: 1;
  padding: 16px 16px 24px;
  overflow-wrap: anywhere;
  /* A terminal never justifies or hyphenates, whatever the site does with <main>. */
  text-align: left;
  hyphens: manual;
  @media (min-width: 768px) {
    padding: 24px 40px 32px;
  }
`;

export const Line = styled.div`
  white-space: pre-wrap;
  min-height: 1.5em;
`;

export const Muted = styled.span`
  color: var(--c-muted);
`;

export const Bright = styled.span`
  color: var(--c-accent);
  font-weight: 700;
`;

export const Prompt = styled.span`
  color: var(--c-accent);
  white-space: nowrap;
`;

/* The name in figlet letters, scaled so the widest word (53 columns) fits a phone. */
export const Banner = styled.pre`
  margin: 8px 0 16px;
  font-family: inherit;
  font-size: min(13px, calc((100vw - 32px) / 53 / 0.61));
  line-height: 1.05;
  white-space: pre;
  overflow: hidden;
  text-shadow: 0 0 6px rgba(51, 255, 102, 0.7);
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const Block = styled.div`
  margin: 4px 0 16px;
`;

export const Indent = styled.div`
  padding-left: 2ch;
`;

export const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px 24px;
  margin: 8px 0 16px;
`;

export const Photo = styled(Pixels)`
  width: 240px;
  max-width: 60vw;
  height: auto;
`;

export const NeofetchLogo = styled(Pixels)`
  width: 128px;
  height: 128px;
`;

export const Grid = styled.dl`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0 2ch;
  margin: 0;
  dt {
    color: var(--c-accent);
    font-weight: 700;
  }
  dd {
    margin: 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0 3ch;
`;

export const TermLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  color: var(--c-accent);
  text-decoration: underline;
  text-underline-offset: 3px;
  &:hover,
  &:focus-visible {
    background: ${PHOSPHOR};
    color: #000;
    text-shadow: none;
    outline: none;
  }
`;

const blink = keyframes`
  50% { opacity: 0 }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 0.6em;
  height: 1.1em;
  margin-left: 1px;
  vertical-align: text-bottom;
  background: ${PHOSPHOR};
  box-shadow: 0 0 6px rgba(51, 255, 102, 0.8);
  animation: ${blink} 1s step-end infinite;
`;

/* The command line: the input is real (for keyboards and screen readers) but invisible; what is
   typed is drawn next to the prompt with a block cursor, like a real terminal. */
export const InputLine = styled.label`
  position: relative;
  display: block;
  white-space: pre-wrap;
  cursor: text;
`;

export const HiddenInput = styled.input`
  position: absolute;
  inset: 0;
  width: 100%;
  opacity: 0;
  border: none;
  font: inherit;
  font-size: 16px; /* below 16px iOS zooms into the page on focus */
  caret-color: transparent;
`;

/* Shortcuts for touch screens and for anybody who would rather not type. */
export const Shortcuts = styled.nav`
  position: sticky;
  bottom: 0;
  z-index: 4;
  display: flex;
  gap: 8px;
  padding: 10px 16px calc(10px + env(safe-area-inset-bottom));
  overflow-x: auto;
  background: #000;
  border-top: 1px solid var(--c-line);
  scrollbar-width: none;
  @media (min-width: 768px) {
    padding: 12px 40px;
    flex-wrap: wrap;
  }
`;

export const Shortcut = styled.button`
  flex-shrink: 0;
  padding: 4px 10px;
  border: 1px solid var(--c-line-strong);
  border-radius: 0;
  background: transparent;
  color: ${PHOSPHOR};
  font: inherit;
  text-shadow: inherit;
  cursor: pointer;
  &:hover,
  &:focus-visible {
    background: ${PHOSPHOR};
    color: #000;
    text-shadow: none;
    outline: none;
  }
`;
