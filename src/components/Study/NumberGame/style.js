'use client';

import styled, { css, keyframes } from 'styled-components';

const shake = keyframes`
  20%, 60% { transform: translateX(-6px) }
  40%, 80% { transform: translateX(6px) }
`;

export const Card = styled.div`
  display: grid;
  gap: 18px;
  padding: 18px;
  border-radius: 20px;
  background: var(--s-card);
  border: 2px solid var(--s-line);
  margin-bottom: 14px;
  @media (min-width: 760px) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Story = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 1.45;
`;

export const Picture = styled.div`
  width: 100%;
  max-width: 460px;
  aspect-ratio: ${({ $ratio }) => $ratio};
  svg {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 14px;
  }
`;

/* The sum, with a box where the answer goes. */
export const Sum = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin: 0;
  font-size: 40px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`;

export const Answer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 96px;
  height: 66px;
  padding: 0 12px;
  border-radius: 14px;
  border: 3px dashed var(--s-accent);
  background: #fff4ec;
  color: var(--s-ink);
  ${({ $state }) => $state === 'right' && css`
    border-style: solid;
    border-color: var(--s-good);
    background: var(--s-good-bg);
  `}
  ${({ $state }) => $state === 'wrong' && css`
    border-style: solid;
    border-color: var(--s-bad);
    background: var(--s-bad-bg);
    animation: ${shake} 0.45s;
  `}
  ${({ $state }) => $state === 'pending' && css`
    border-color: var(--s-line);
    background: transparent;
    color: var(--s-muted);
  `}
`;

export const Hint = styled.p`
  margin: 0;
  color: var(--s-muted);
  font-size: 17px;
`;

export const Keypad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 72px);
  gap: 8px;
  justify-content: center;
`;

export const Key = styled.button`
  height: 64px;
  border-radius: 16px;
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
  &:disabled {
    opacity: 0.4;
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 2px;
  }
  ${({ $kind }) => $kind === 'check' && css`
    border: 0;
    background: var(--s-accent);
    box-shadow: 0 4px 0 #d95c3d;
    color: #fff;
    &:active {
      box-shadow: 0 1px 0 #d95c3d;
    }
  `}
  ${({ $kind }) => $kind === 'delete' && css`
    font-size: 22px;
    color: var(--s-muted);
  `}
`;

/* The keys, or the strip to write on, with a way to swap one for the other. */
export const Answering = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Switch = styled.button`
  min-height: 40px;
  padding: 0 14px;
  border: 0;
  border-radius: 20px;
  background: none;
  color: var(--s-teal);
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
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

/* A secret message, its letters uncovered one by one as the questions are solved. */
export const Secret = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  margin-bottom: 14px;
  padding: 14px;
  border-radius: 16px;
  background: #f3ead2;
  border: 2px dashed #c9b27a;
`;

export const SecretLetter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 46px;
  margin-right: ${({ $space }) => ($space ? '22px' : '0')};
  border-bottom: 3px solid #8a6a4a;
  color: var(--s-ink);
  font-size: 30px;
  font-weight: 700;
  ${({ $found }) => $found && css`
    color: #9b2c2c;
  `}
`;
