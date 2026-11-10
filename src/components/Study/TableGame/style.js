'use client';

import styled, { css, keyframes } from 'styled-components';

const shake = keyframes`
  20%, 60% { transform: translateX(-6px) }
  40%, 80% { transform: translateX(6px) }
`;

const pop = keyframes`
  0% { transform: scale(0.85) }
  70% { transform: scale(1.06) }
  100% { transform: scale(1) }
`;

/* The table, as in the notebook: a column of words and a column for each thing to find. */
export const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $count }) => $count}, minmax(0, 1fr));
  gap: 8px;
  margin-bottom: 16px;
  padding: 12px;
  border-radius: 18px;
  background: #fff;
  border: 2px solid var(--s-line);
`;

export const Heading = styled.div`
  padding: 4px 6px 8px;
  border-bottom: 2px solid var(--s-line);
  color: var(--s-ink);
  font-size: 19px;
  font-weight: 700;
  text-align: center;
  &::first-letter {
    color: #e2483d;
  }
`;

const cell = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-height: 52px;
  padding: 6px 8px;
  border-radius: 12px;
  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  overflow-wrap: anywhere;
`;

/* The word of a row, to hear. */
export const RowWord = styled.button`
  ${cell}
  border: 0;
  background: #fff4dc;
  color: var(--s-ink);
  cursor: pointer;
`;

/* An empty box: tapping it puts the chosen word there, and a word can be dropped on it. */
export const EmptyCell = styled.button`
  ${cell}
  border: 3px dashed var(--s-line);
  background: rgba(255, 255, 255, 0.7);
  color: var(--s-muted);
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  ${({ $ready }) => $ready && css`
    border-color: var(--s-teal);
    background: #e6f5f3;
  `}
  ${({ $over }) => $over && css`
    border-style: solid;
    border-color: var(--s-teal);
    background: #fff;
  `}
  ${({ $wrong }) => $wrong && css`
    border-style: solid;
    border-color: var(--s-bad);
    background: var(--s-bad-bg);
    animation: ${shake} 0.45s;
  `}
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 2px;
  }
`;

export const FilledCell = styled.button`
  ${cell}
  border: 3px solid var(--s-good);
  background: var(--s-good-bg);
  color: var(--s-ink);
  cursor: pointer;
  animation: ${pop} 0.35s ease-out;
`;
