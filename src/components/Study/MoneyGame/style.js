'use client';

import styled from 'styled-components';

/* Where the money goes, and how much it comes to. */
export const Purse = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border-radius: 16px;
  background: ${({ $done }) => ($done ? 'var(--s-good-bg)' : '#f6f1e7')};
  border: 2px solid ${({ $done }) => ($done ? 'var(--s-good)' : 'transparent')};
`;

export const PurseTitle = styled.p`
  margin: 0;
  font-size: 20px;
  strong {
    font-size: 24px;
  }
`;

export const Placed = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  min-height: 70px;
  span {
    color: var(--s-muted);
    font-size: 18px;
  }
`;

export const Tray = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px;
  border-radius: 16px;
  border: 2px dashed var(--s-line);
`;

export const PieceButton = styled.button`
  display: flex;
  padding: 2px;
  border: 0;
  border-radius: 10px;
  background: none;
  cursor: pointer;
  touch-action: manipulation;
  svg {
    display: block;
  }
  &:active:not(:disabled) {
    transform: scale(0.94);
  }
  &:disabled {
    cursor: default;
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 2px;
  }
`;

export const Check = styled.button`
  min-width: 120px;
  min-height: 56px;
  border: 0;
  border-radius: 16px;
  background: var(--s-accent);
  box-shadow: 0 4px 0 #d95c3d;
  color: #fff;
  font-family: inherit;
  font-size: 26px;
  font-weight: 600;
  cursor: pointer;
  touch-action: manipulation;
  &:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #d95c3d;
  }
`;
