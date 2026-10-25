'use client';

import styled, { css, keyframes } from 'styled-components';

const pop = keyframes`
  0% { transform: scale(0.4) }
  70% { transform: scale(1.12) }
  100% { transform: scale(1) }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 18px;
  border-radius: 20px;
  background: var(--s-card);
  border: 2px solid var(--s-line);
  margin-bottom: 14px;
`;

export const Story = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 1.45;
`;

/* The numbers of the operation, each drawn small in blocks below it. */
export const Operation = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 14px 22px;
  font-size: 34px;
  font-weight: 600;
`;

export const Term = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

/* Level with the numbers, which have their blocks drawn below them in a sum. */
export const Sign = styled.span`
  padding-bottom: ${({ $raised }) => ($raised ? '66px' : '0')};
`;

export const Blocks = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${({ $small }) => ($small ? '4px' : '8px')};
  min-height: ${({ $small }) => ($small ? '60px' : '140px')};
`;

export const Cubes = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $small }) => ($small ? 2 : 5)}, auto);
  gap: ${({ $small }) => ($small ? '3px' : '6px')};
  align-self: flex-end;
  margin-left: 6px;
`;

const crossedOut = css`
  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    background:
      linear-gradient(to top right, transparent 44%, #24324a 44% 56%, transparent 56%),
      linear-gradient(to top left, transparent 44%, #24324a 44% 56%, transparent 56%);
  }
`;

/* A rod of ten, red with a line between each of its ten units. */
export const Rod = styled.button`
  position: relative;
  flex: none;
  width: ${({ $small }) => ($small ? '10px' : '24px')};
  height: ${({ $small }) => ($small ? '60px' : '140px')};
  padding: 0;
  border: ${({ $small }) => ($small ? 1 : 2)}px solid #8f1f1c;
  border-radius: 3px;
  background: repeating-linear-gradient(to bottom, #c9302c 0 calc(10% - 1px), #8f1f1c calc(10% - 1px) 10%);
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  ${({ $new }) => $new && css`
    animation: ${pop} 0.4s ease-out;
    box-shadow: 0 0 0 4px rgba(255, 211, 77, 0.8);
  `}
  ${({ $crossed }) => $crossed && crossedOut}
  &:disabled {
    opacity: 1;
  }
`;

/* A flat of a hundred, green and squared. */
export const Flat = styled.button`
  position: relative;
  flex: none;
  width: ${({ $small }) => ($small ? '60px' : '140px')};
  height: ${({ $small }) => ($small ? '60px' : '140px')};
  padding: 0;
  border: ${({ $small }) => ($small ? 1 : 2)}px solid #2a6e33;
  border-radius: 3px;
  background:
    repeating-linear-gradient(to right, transparent 0 calc(10% - 1px), rgba(42, 110, 51, 0.6) calc(10% - 1px) 10%),
    repeating-linear-gradient(to bottom, #3f9a4a 0 calc(10% - 1px), rgba(42, 110, 51, 0.6) calc(10% - 1px) 10%);
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  ${({ $new }) => $new && css`
    animation: ${pop} 0.4s ease-out;
    box-shadow: 0 0 0 4px rgba(255, 211, 77, 0.8);
  `}
  ${({ $crossed }) => $crossed && crossedOut}
  &:disabled {
    opacity: 1;
  }
`;

/* A unit cube, blue. */
export const Cube = styled.button`
  position: relative;
  flex: none;
  width: ${({ $small }) => ($small ? '10px' : '26px')};
  height: ${({ $small }) => ($small ? '10px' : '26px')};
  padding: 0;
  border: ${({ $small }) => ($small ? 1 : 2)}px solid #1d5a96;
  border-radius: 3px;
  background: #2f80d0;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  ${({ $crossed }) => $crossed && crossedOut}
  &:disabled {
    opacity: 1;
  }
`;

/* Where she draws: a dashed box like the one in the workbook. */
export const Drawing = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px;
  border-radius: 16px;
  border: 3px dashed ${({ $done }) => ($done ? 'var(--s-good)' : 'var(--s-line)')};
  background: ${({ $done }) => ($done ? 'var(--s-good-bg)' : '#fffaf2')};
`;

export const DrawingHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  color: var(--s-muted);
  font-size: 17px;
  strong {
    color: var(--s-ink);
    font-size: 20px;
  }
`;

export const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Tool = styled.button`
  min-height: 52px;
  padding: 0 18px;
  border-radius: 14px;
  border: 2px solid ${({ $kind }) => ({ hundred: '#3f9a4a', ten: '#c9302c', unit: '#2f80d0' }[$kind] ?? 'var(--s-line)')};
  background: ${({ $kind }) => ({
    hundred: '#e5f4e7', ten: '#fdeaea', unit: '#e6f0fb', exchange: '#fff4c7',
  }[$kind] ?? 'var(--s-card)')};
  color: var(--s-ink);
  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  touch-action: manipulation;
  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
  &:active:not(:disabled) {
    transform: translateY(2px);
  }
  ${({ $kind }) => $kind === 'check' && css`
    border: 0;
    background: var(--s-accent);
    box-shadow: 0 4px 0 #d95c3d;
    color: #fff;
    margin-left: auto;
  `}
`;

export const Answering = styled.div`
  display: grid;
  gap: 18px;
  @media (min-width: 760px) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
  }
`;
