'use client';

import styled, { css, keyframes } from 'styled-components';

const shake = keyframes`
  20%, 60% { transform: translateX(-6px) }
  40%, 80% { transform: translateX(6px) }
`;

/* The two lists face to face, as in the book, with room between them for the lines. */
export const Board = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
  align-items: center;
  gap: clamp(48px, 14vw, 160px);
  margin-bottom: 16px;
  padding: 18px;
  border-radius: 18px;
  background: #fff;
  border: 2px solid var(--s-line);
`;

export const List = styled.ul`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

/* A word with its dot on the side facing the other list. */
export const Item = styled.button`
  position: relative;
  width: 100%;
  min-height: 52px;
  padding: 8px 14px;
  border: 3px solid ${({ $colour }) => $colour || 'var(--s-line)'};
  border-radius: 14px;
  background: ${({ $colour }) => ($colour ? `${$colour}33` : '#fff')};
  color: var(--s-ink);
  font-family: inherit;
  font-size: 20px;
  font-weight: 600;
  text-align: ${({ $side }) => ($side === 'left' ? 'right' : 'left')};
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    ${({ $side }) => ($side === 'left' ? 'right: -12px;' : 'left: -12px;')}
    width: 14px;
    height: 14px;
    margin-top: -7px;
    border-radius: 50%;
    background: #f08c3a;
    border: 2px solid #fff;
  }
  &:disabled {
    cursor: default;
  }
  ${({ $selected }) => $selected && css`
    border-color: var(--s-teal);
    background: #e6f5f3;
  `}
  ${({ $wrong }) => $wrong && css`
    border-color: var(--s-bad);
    background: var(--s-bad-bg);
    animation: ${shake} 0.45s;
  `}
  ${({ $picture }) => $picture && css`
    padding: 6px;
    svg {
      display: block;
      width: 100%;
      max-width: 280px;
      border-radius: 10px;
    }
  `}
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 2px;
  }
`;

export const Lines = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
`;
