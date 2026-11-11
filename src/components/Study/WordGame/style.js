'use client';

import styled, { css, keyframes } from 'styled-components';

const shake = keyframes`
  20%, 60% { transform: translateX(-6px) }
  40%, 80% { transform: translateX(6px) }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(255, 122, 89, 0.5) }
  50% { box-shadow: 0 0 0 10px rgba(255, 122, 89, 0) }
`;

/* The word typed, and the buttons to check it or say it instead. */
export const Answer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Field = styled.input`
  flex: 1 1 220px;
  min-width: 0;
  min-height: 60px;
  padding: 0 18px;
  border-radius: 16px;
  border: 3px solid var(--s-line);
  background: #fff;
  color: var(--s-ink);
  font-family: inherit;
  font-size: 26px;
  font-weight: 600;
  &::placeholder {
    color: var(--s-muted);
    font-size: 20px;
    font-weight: 500;
  }
  &:focus {
    outline: none;
    border-color: var(--s-teal);
  }
  ${({ $state }) => $state === 'wrong' && css`
    border-color: var(--s-bad);
    background: var(--s-bad-bg);
    animation: ${shake} 0.45s;
  `}
  ${({ $state }) => $state === 'right' && css`
    border-color: var(--s-good);
    background: var(--s-good-bg);
  `}
`;

const button = css`
  min-height: 60px;
  padding: 0 22px;
  border: 0;
  border-radius: 30px;
  font-family: inherit;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 2px;
  }
`;

export const Check = styled.button`
  ${button}
  background: var(--s-teal);
  box-shadow: 0 4px 0 #13766b;
  color: #fff;
`;

export const Mic = styled.button`
  ${button}
  background: #fff;
  border: 3px solid var(--s-accent);
  color: var(--s-ink);
  ${({ $listening }) => $listening && css`
    background: #fff0eb;
    animation: ${glow} 1.2s ease-in-out infinite;
  `}
`;

export const Note = styled.p`
  margin: 0;
  font-size: 19px;
  font-weight: 600;
  color: ${({ $kind }) => ({ right: 'var(--s-good)', wrong: 'var(--s-bad)' }[$kind] ?? 'var(--s-muted)')};
  small {
    display: block;
    margin-top: 4px;
    color: var(--s-muted);
    font-size: 16px;
    font-weight: 500;
  }
`;
