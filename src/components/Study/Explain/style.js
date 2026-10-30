'use client';

import styled, { css, keyframes } from 'styled-components';

const appear = keyframes`
  from { opacity: 0; transform: translateY(-4px) scale(0.96) }
  to { opacity: 1; transform: none }
`;

/* Sized like the speaker beside it, wherever it sits. */
const VARIANTS = {
  chip: css`
    width: 46px;
    margin: 6px 6px 6px 0;
    border-radius: 12px;
    font-size: 22px;
  `,
  tile: css`
    width: 40px;
    margin: 8px 8px 8px 0;
    border-radius: 10px;
    font-size: 20px;
  `,
  box: css`
    width: 3.4cqw;
    height: 3.4cqw;
    border-radius: 50%;
    font-size: 2.2cqw;
  `,
  inline: css`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    font-size: 19px;
    vertical-align: middle;
  `,
};

export const Flag = styled.button`
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: #fff4c7;
  line-height: 1;
  cursor: pointer;
  touch-action: manipulation;
  ${({ $variant }) => VARIANTS[$variant]}
  &[aria-expanded='true'] {
    background: #ffe48a;
    box-shadow: 0 0 0 2px #f0c94a;
  }
  &:active {
    transform: scale(0.94);
  }
  &:focus-visible {
    outline: 3px solid #1f9e8f;
    outline-offset: 1px;
  }
`;

/* The bubble, on top of everything, kept on screen near its flag. */
export const Bubble = styled.div`
  position: fixed;
  z-index: 40;
  box-sizing: border-box;
  padding: 14px 16px;
  border-radius: 18px;
  border: 2px solid #f0dc8a;
  background: #fffbea;
  box-shadow: 0 10px 30px rgba(36, 50, 74, 0.22);
  color: #24324a;
  font-family: var(--font-study), var(--font-sans), system-ui, sans-serif;
  text-align: left;
  animation: ${appear} 0.15s ease-out;
`;

export const BubbleHead = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 10px;
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 600;
  span {
    color: #5d6b82;
    font-size: 16px;
  }
  strong {
    color: #1f9e8f;
    font-size: 22px;
  }
`;

/* A real photo of it, the same shape for every word, with who took it. */
export const BubblePhoto = styled.figure`
  margin: 6px 0 10px;
  figcaption {
    margin-top: 3px;
    color: #8a93a3;
    font-size: 11px;
    line-height: 1.3;
  }
`;

export const Photo = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  border-radius: 12px;
  background: #f3ead2;
`;

export const BubbleText = styled.p`
  margin: 0 0 10px;
  font-size: 19px;
  line-height: 1.35;
`;

export const BubbleListen = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 42px;
  padding: 0 16px;
  border: 0;
  border-radius: 21px;
  background: #e6f5f3;
  color: #1f9e8f;
  font-family: inherit;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
`;
