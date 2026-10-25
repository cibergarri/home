'use client';

import styled, { css, keyframes } from 'styled-components';

const shake = keyframes`
  20%, 60% { transform: translateX(-6px) }
  40%, 80% { transform: translateX(6px) }
`;

const pop = keyframes`
  0% { transform: scale(0.8) }
  70% { transform: scale(1.08) }
  100% { transform: scale(1) }
`;

export const Puzzle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 18px;
  border-radius: 20px;
  background: var(--s-card);
  border: 2px solid var(--s-line);
  margin-bottom: 14px;
`;

export const Prompt = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  small {
    display: block;
    margin-top: 2px;
    color: var(--s-muted);
    font-size: 16px;
    font-weight: 500;
  }
`;

/* Where the answer is built, a word at a time, with an empty slot for each word still to come. */
export const Line = styled.ol`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  min-height: 58px;
  margin: 0;
  padding: 10px;
  border-radius: 14px;
  background: ${({ $done }) => ($done ? 'var(--s-good-bg)' : '#f6f1e7')};
  border: 2px solid ${({ $done }) => ($done ? 'var(--s-good)' : 'transparent')};
  list-style: none;
`;

export const Placed = styled.li`
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 0 14px;
  border-radius: 12px;
  background: #fff;
  border: 2px solid var(--s-good);
  font-size: 21px;
  font-weight: 600;
  animation: ${pop} 0.25s ease-out;
`;

export const Slot = styled.li`
  min-width: 60px;
  min-height: 44px;
  border-radius: 12px;
  border: 2px dashed var(--s-line);
`;

export const Tiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Tile = styled.button`
  min-height: 56px;
  padding: 0 18px;
  border-radius: 14px;
  border: 2px solid var(--s-line);
  background: var(--s-card);
  box-shadow: 0 4px 0 var(--s-line);
  color: var(--s-ink);
  font-family: inherit;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    visibility: hidden;
  }
  &:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 var(--s-line);
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 2px;
  }
  ${({ $wrong }) => $wrong && css`
    border-color: var(--s-bad);
    background: var(--s-bad-bg);
    animation: ${shake} 0.45s;
  `}
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const Listen = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 18px;
  border: 0;
  border-radius: 24px;
  background: #e6f5f3;
  color: var(--s-teal);
  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  svg {
    width: 22px;
    height: 22px;
  }
`;

export const Next = styled.button`
  min-height: 52px;
  padding: 0 26px;
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
`;
