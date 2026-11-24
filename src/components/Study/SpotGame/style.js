'use client';

import styled, { css, keyframes } from 'styled-components';

const shake = keyframes`
  20%, 60% { transform: translateX(-6px) }
  40%, 80% { transform: translateX(6px) }
`;

export const Scene = styled.div`
  margin-bottom: 14px;
  border-radius: 18px;
  overflow: hidden;
  border: 2px solid var(--s-line);
  background: #fff;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;

/* Where a behaviour is: invisible until pointed at or chosen. */
export const Spot = styled.circle`
  fill: transparent;
  stroke: transparent;
  stroke-width: 6;
  stroke-dasharray: 14 10;
  cursor: pointer;
  outline: none;
  &:hover, &:focus-visible {
    stroke: var(--s-teal);
  }
  ${({ $selected }) => $selected && css`
    stroke: var(--s-teal);
    fill: rgba(31, 158, 143, 0.12);
  `}
`;

export const Ask = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 14px 16px;
  margin-bottom: 12px;
  border-radius: 16px;
  background: #fff;
  border: 2px solid var(--s-line);
  ${({ $wrong }) => $wrong && css`
    border-color: var(--s-bad);
    animation: ${shake} 0.45s;
  `}
`;

export const What = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--s-ink);
  font-size: 21px;
  font-weight: 700;
`;

export const Answers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Answer = styled.button`
  flex: 1 1 200px;
  min-height: 52px;
  padding: 8px 14px;
  border: 3px solid var(--s-line);
  border-radius: 14px;
  background: #fff;
  color: var(--s-ink);
  font-family: inherit;
  font-size: 19px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    border-color: var(--s-teal);
  }
`;

export const Hint = styled.p`
  margin: 0 0 12px;
  color: var(--s-muted);
  font-size: 18px;
`;
