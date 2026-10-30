'use client';

import styled, { css, keyframes } from 'styled-components';

const shake = keyframes`
  20%, 60% { transform: translateX(-6px) }
  40%, 80% { transform: translateX(6px) }
`;

const pop = keyframes`
  0% { transform: scale(0.6) }
  70% { transform: scale(1.08) }
  100% { transform: scale(1) }
`;

const pulse = keyframes`
  50% { box-shadow: 0 0 0 5px rgba(31, 158, 143, 0.35) }
`;

export const Instructions = styled.p`
  margin: 0 0 14px;
  color: var(--s-muted);
  font-size: 18px;
`;

/* The picture and the words: stacked on a tablet held upright, side by side when it lies flat. */
export const Board = styled.div`
  display: grid;
  gap: 16px;
  @media (orientation: landscape) and (min-width: 900px) {
    grid-template-columns: minmax(0, 1fr) 260px;
    align-items: start;
  }
`;

/* Everything on the picture is sized in cqw, so the boxes keep their place at any width. */
export const Scene = styled.div`
  position: relative;
  container-type: inline-size;
  width: 100%;
  margin: 0 auto;
  aspect-ratio: ${({ $ratio }) => $ratio};
  border-radius: 22px;
  overflow: hidden;
  border: 3px solid #fff;
  box-shadow: 0 6px 24px rgba(36, 50, 74, 0.18);
  @media (orientation: landscape) and (min-width: 900px) {
    /* Small enough for the whole picture to fit on screen under the title. */
    max-width: calc((100svh - 190px) * ${({ $ratio }) => $ratio});
  }
  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const boxBase = css`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6cqw;
  padding: 0 0.8cqw;
  border-radius: 1.4cqw;
  font-family: inherit;
  font-size: 2.3cqw;
  font-weight: 600;
  color: var(--s-ink);
`;

export const EmptyBox = styled.button`
  ${boxBase}
  border: 0.35cqw dashed var(--s-ink);
  background: rgba(255, 255, 255, 0.82);
  cursor: pointer;
  color: var(--s-muted);
  transition: background 0.15s, transform 0.15s;
  ${({ $over }) => $over && css`
    background: #fff;
    border-style: solid;
    border-color: var(--s-teal);
    transform: scale(1.06);
  `}
  ${({ $ready }) => $ready && css`
    animation: ${pulse} 1.2s ease-in-out infinite;
  `}
  ${({ $wrong }) => $wrong && css`
    border-style: solid;
    border-color: var(--s-bad);
    background: var(--s-bad-bg);
    animation: ${shake} 0.45s;
  `}
  &:focus-visible {
    outline: 0.4cqw solid var(--s-teal);
    outline-offset: 0.3cqw;
  }
`;

export const FilledBox = styled.div`
  ${boxBase}
  border: 0.35cqw solid var(--s-good);
  background: var(--s-good-bg);
  animation: ${pop} 0.35s ease-out;
  white-space: nowrap;
`;

export const BoxSpeaker = styled.button`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.4cqw;
  height: 3.4cqw;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--s-good);
  color: #fff;
  cursor: pointer;
  svg {
    position: static;
    width: 62%;
    height: 62%;
  }
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Tray = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
  @media (orientation: landscape) and (min-width: 900px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px;
  }
`;

/* Words sorted into groups: side by side under the picture, one above the other beside it. */
export const Groups = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  @media (orientation: landscape) and (min-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Group = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  border-radius: 18px;
  border: 2px dashed var(--s-line);
  @media (orientation: landscape) and (min-width: 900px) {
    gap: 8px;
    padding: 8px;
  }
`;

export const GroupTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

export const GroupDone = styled.p`
  margin: 0;
  color: var(--s-good);
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

export const Chip = styled.li`
  display: flex;
  align-items: stretch;
  border-radius: 16px;
  background: var(--s-card);
  border: 2px solid ${({ $selected }) => ($selected ? 'var(--s-teal)' : 'var(--s-line)')};
  box-shadow: 0 4px 0 ${({ $selected }) => ($selected ? 'var(--s-teal)' : 'var(--s-line)')};
  opacity: ${({ $dragging }) => ($dragging ? 0.35 : 1)};
  transition: opacity 0.15s, transform 0.15s;
  transform: ${({ $selected }) => ($selected ? 'translateY(-3px)' : 'none')};
`;

/* The word itself is the handle: no scrolling, selecting or callouts while a finger drags it. */
export const Word = styled.button`
  flex: 1;
  min-height: 56px;
  padding: 0 8px 0 18px;
  border: 0;
  background: none;
  color: var(--s-ink);
  font-family: inherit;
  font-size: 22px;
  font-weight: 600;
  text-align: left;
  cursor: grab;
  /* A little shorter beside the picture, so the whole column fits on a tablet lying flat. */
  @media (orientation: landscape) and (min-width: 900px) {
    min-height: 46px;
  }
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: -3px;
    border-radius: 14px;
  }
`;

export const Speaker = styled.button`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  margin: 6px 6px 6px 0;
  border: 0;
  border-radius: 12px;
  background: #e6f5f3;
  color: var(--s-teal);
  cursor: pointer;
  svg {
    width: 26px;
    height: 26px;
  }
  &:active {
    background: #cdebe7;
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 1px;
  }
`;

/* The word following the finger. */
export const Ghost = styled.div`
  position: fixed;
  z-index: 50;
  pointer-events: none;
  padding: 14px 20px;
  border-radius: 16px;
  background: var(--s-card);
  border: 2px solid var(--s-teal);
  box-shadow: 0 12px 28px rgba(36, 50, 74, 0.28);
  color: var(--s-ink);
  font-size: 22px;
  font-weight: 600;
  transform: rotate(-3deg) scale(1.05);
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 56px;
  box-sizing: border-box;
  padding: 10px 16px;
  border-radius: 16px;
  font-size: 18px;
  line-height: 1.35;
  background: ${({ $kind }) => ({ right: 'var(--s-good-bg)', wrong: 'var(--s-bad-bg)' }[$kind] ?? 'var(--s-card)')};
  border: 2px solid ${({ $kind }) => ({ right: 'var(--s-good)', wrong: 'var(--s-bad)' }[$kind] ?? 'var(--s-line)')};
  strong {
    font-weight: 600;
  }
`;

export const Progress = styled.p`
  margin: 0;
  color: var(--s-muted);
  font-size: 17px;
  text-align: center;
`;

/* Back and forward between the questions of a game, with where you are in between. */
export const QuestionBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 10px;
  color: var(--s-muted);
  font-size: 17px;
`;

export const QuestionArrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 2px solid var(--s-line);
  background: var(--s-card);
  box-shadow: 0 3px 0 var(--s-line);
  color: var(--s-ink);
  font-family: inherit;
  font-size: 24px;
  cursor: pointer;
  touch-action: manipulation;
  &:disabled {
    visibility: hidden;
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 var(--s-line);
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 2px;
  }
`;

export const Done = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 20px;
  background: var(--s-card);
  border: 2px solid var(--s-good);
  text-align: center;
  animation: ${pop} 0.4s ease-out;
  h2 {
    margin: 0;
    font-size: 28px;
    font-weight: 600;
  }
  p {
    margin: 0;
    font-size: 18px;
    color: var(--s-muted);
  }
`;

export const Stars = styled.div`
  font-size: 40px;
  letter-spacing: 6px;
  span[data-off] {
    filter: grayscale(1);
    opacity: 0.3;
  }
`;

export const Again = styled.button`
  min-height: 52px;
  padding: 0 28px;
  border: 0;
  border-radius: 26px;
  background: var(--s-accent);
  box-shadow: 0 4px 0 #d95c3d;
  color: #fff;
  font-family: inherit;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  &:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #d95c3d;
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 3px;
  }
`;
