'use client';

import styled, { css, keyframes } from 'styled-components';

const shake = keyframes`
  20%, 60% { transform: translateX(-5px) }
  40%, 80% { transform: translateX(5px) }
`;

const glow = keyframes`
  50% { box-shadow: 0 0 0 6px rgba(255, 122, 89, 0.3) }
`;

export const Card = styled.div`
  display: grid;
  gap: 22px;
  padding: 20px;
  border-radius: 20px;
  background: var(--s-card);
  border: 2px solid var(--s-line);
  margin-bottom: 14px;
  @media (min-width: 760px) {
    grid-template-columns: auto minmax(0, 1fr);
    align-items: start;
  }
`;

export const Story = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 1.45;
  @media (min-width: 760px) {
    grid-column: 1 / -1;
  }
`;

/* The tower: a column for the sign, then tens (D) and units (U), as in the textbook. */
export const Tower = styled.div`
  display: grid;
  grid-template-columns: 48px repeat(${({ $columns }) => $columns}, 72px);
  grid-auto-rows: 72px;
  justify-content: center;
  font-size: 40px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 28px;
  background: ${({ $kind }) => ({ hundreds: '#3f9a4a', tens: '#c9302c' }[$kind] ?? '#2f80d0')};
  border-radius: ${({ $kind, $first }) => {
    if ($kind === 'hundreds' || $first) return '12px 0 0 0';
    return $kind === 'units' ? '0 12px 0 0' : '0';
  }};
`;

export const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--s-line);
  background: #fff;
  ${({ $line }) => $line && css`
    border-top: 4px solid var(--s-ink);
  `}
  ${({ $plain }) => $plain && css`
    border-color: transparent;
    background: transparent;
  `}
`;

/* A box to write in: dashed while waiting, orange and glowing when it is its turn. */
export const Box = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $small }) => ($small ? '40px' : '56px')};
  height: ${({ $small }) => ($small ? '40px' : '56px')};
  border-radius: 10px;
  border: 3px dashed var(--s-line);
  font-size: ${({ $small }) => ($small ? '24px' : '36px')};
  color: ${({ $small }) => ($small ? 'var(--s-accent)' : 'var(--s-ink)')};
  ${({ $active }) => $active && css`
    border-style: solid;
    border-color: var(--s-accent);
    background: #fff4ec;
    animation: ${glow} 1.4s ease-in-out infinite;
  `}
  ${({ $done }) => $done && css`
    border-style: solid;
    border-color: var(--s-good);
    background: var(--s-good-bg);
  `}
  ${({ $wrong }) => $wrong && css`
    border-color: var(--s-bad);
    background: var(--s-bad-bg);
    animation: ${shake} 0.45s;
  `}
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Prompt = styled.p`
  margin: 0;
  min-height: 56px;
  padding: 12px 16px;
  border-radius: 14px;
  background: #fff4c7;
  border: 2px solid #f0dc8a;
  font-size: 19px;
  line-height: 1.4;
`;

export const Keypad = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 64px);
  gap: 8px;
  @media (max-width: 420px) {
    grid-template-columns: repeat(5, 54px);
  }
`;

export const Key = styled.button`
  height: 60px;
  border-radius: 14px;
  border: 2px solid var(--s-line);
  background: var(--s-card);
  box-shadow: 0 4px 0 var(--s-line);
  color: var(--s-ink);
  font-family: inherit;
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
  touch-action: manipulation;
  &:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 var(--s-line);
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 2px;
  }
`;
