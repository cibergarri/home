'use client';

import styled, { css } from 'styled-components';

export const Line = styled.p`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0;
  font-size: 44px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
`;

export const Number = styled.span``;

// Where the sign goes.
export const Gap = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 66px;
  border-radius: 14px;
  border: 3px dashed var(--s-accent);
  background: #fff4ec;
  ${({ $solved }) => $solved && css`
    border-style: solid;
    border-color: var(--s-good);
    background: var(--s-good-bg);
  `}
`;

export const Signs = styled.div`
  display: flex;
  gap: 12px;
`;

export const Sign = styled.button`
  width: 76px;
  height: 68px;
  border-radius: 16px;
  border: 2px solid var(--s-line);
  background: var(--s-card);
  box-shadow: 0 4px 0 var(--s-line);
  color: var(--s-ink);
  font-family: inherit;
  font-size: 38px;
  font-weight: 700;
  cursor: pointer;
  touch-action: manipulation;
  &:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 var(--s-line);
  }
  ${({ $state }) => $state === 'right' && css`
    border-color: var(--s-good);
    background: var(--s-good-bg);
  `}
  ${({ $state }) => $state === 'wrong' && css`
    border-color: var(--s-bad);
    background: var(--s-bad-bg);
    text-decoration: line-through;
    opacity: 0.6;
  `}
`;
