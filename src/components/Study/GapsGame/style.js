'use client';

import styled, { css, keyframes } from 'styled-components';

const shake = keyframes`
  20%, 60% { transform: translateX(-6px) }
  40%, 80% { transform: translateX(6px) }
`;

/* The sentences, one under another, as in the book. */
export const Sentences = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0 0 16px;
  padding: 16px 18px;
  border-radius: 18px;
  background: #fff;
  border: 2px solid var(--s-line);
  list-style: none;
`;

export const Sentence = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 8px;
  color: var(--s-ink);
  font-size: 21px;
  line-height: 1.4;
  &::before {
    content: '•';
    color: #f08c3a;
    font-weight: 700;
  }
`;

const gap = css`
  min-width: 130px;
  min-height: 44px;
  padding: 4px 12px;
  border-radius: 10px;
  font-family: inherit;
  font-size: 20px;
  font-weight: 600;
`;

/* A gap: tapping it puts the chosen word there, and a word can be dropped on it. */
export const Gap = styled.button`
  ${gap}
  border: 3px dashed var(--s-line);
  background: rgba(255, 255, 255, 0.7);
  color: var(--s-muted);
  cursor: pointer;
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

export const Filled = styled.span`
  ${gap}
  display: inline-flex;
  align-items: center;
  border: 3px solid var(--s-good);
  background: var(--s-good-bg);
  color: var(--s-ink);
`;
