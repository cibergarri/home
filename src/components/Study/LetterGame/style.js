'use client';

import styled, { css, keyframes } from 'styled-components';

const pop = keyframes`
  0% { transform: scale(0.8) }
  70% { transform: scale(1.08) }
  100% { transform: scale(1) }
`;

const blink = keyframes`
  50% { border-color: var(--s-accent) }
`;

export const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
`;

/* The number, big, for the word to be spelt. */
export const Number = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 84px;
  height: 84px;
  padding: 0 12px;
  border-radius: 20px;
  background: #e6f5f3;
  color: var(--s-teal);
  font-size: 46px;
  font-weight: 700;
`;

/* The word, a box for each letter, a dashed one for each that is missing. */
export const Word = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 10px;
  border-radius: 14px;
  background: ${({ $done }) => ($done ? 'var(--s-good-bg)' : '#f6f1e7')};
  border: 2px solid ${({ $done }) => ($done ? 'var(--s-good)' : 'transparent')};
`;

const box = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 56px;
  border-radius: 10px;
  font-size: 32px;
  font-weight: 600;
`;

export const Letter = styled.span`
  ${box}
  background: #fff;
  border: 2px solid ${({ $filled }) => ($filled ? 'var(--s-good)' : 'var(--s-line)')};
  color: ${({ $filled }) => ($filled ? 'var(--s-good)' : 'var(--s-ink)')};
  ${({ $filled }) => $filled && css`animation: ${pop} 0.25s ease-out;`}
`;

export const Gap = styled.span`
  ${box}
  border: 3px dashed var(--s-line);
  ${({ $current }) => $current && css`
    border-color: var(--s-accent);
    background: #fff4ee;
    animation: ${blink} 1.2s ease-in-out infinite;
  `}
`;
