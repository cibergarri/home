'use client';

import styled, { css, keyframes } from 'styled-components';

const shake = keyframes`
  20%, 60% { transform: translateX(-6px) }
  40%, 80% { transform: translateX(6px) }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 18px;
  border-radius: 20px;
  background: var(--s-card);
  border: 2px solid var(--s-line);
  margin-bottom: 14px;
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: ${({ $picture }) => ($picture ? 'minmax(0, 1.2fr) minmax(0, 1fr)' : '1fr')};
    align-items: start;
  }
`;

export const Picture = styled.div`
  width: 100%;
  aspect-ratio: ${({ $ratio }) => $ratio};
  svg {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 14px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    flex: 1;
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
  }
`;

export const Hint = styled.p`
  margin: -6px 0 0;
  color: var(--s-muted);
  font-size: 17px;
`;

export const Choices = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Choice = styled.li`
  display: flex;
  align-items: stretch;
  border-radius: 14px;
  border: 3px solid var(--s-line);
  background: var(--s-card);
  box-shadow: 0 4px 0 var(--s-line);
  ${({ $state }) => $state === 'right' && css`
    border-color: var(--s-good);
    background: var(--s-good-bg);
    box-shadow: 0 4px 0 var(--s-good);
  `}
  ${({ $state }) => $state === 'wrong' && css`
    border-color: var(--s-bad);
    background: var(--s-bad-bg);
    box-shadow: none;
    opacity: 0.7;
    animation: ${shake} 0.45s;
  `}
`;

export const ChoiceButton = styled.button`
  flex: 1;
  min-height: 56px;
  padding: 6px 10px 6px 16px;
  border: 0;
  background: none;
  color: var(--s-ink);
  font-family: inherit;
  font-size: 21px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: -3px;
    border-radius: 12px;
  }
`;

export const SmallSpeaker = styled.button`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  min-height: 44px;
  margin: 6px 6px 6px 0;
  border: 0;
  border-radius: 10px;
  background: #e6f5f3;
  color: var(--s-teal);
  cursor: pointer;
  svg {
    width: 22px;
    height: 22px;
  }
`;

export const Next = styled.button`
  align-self: flex-end;
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

// Tables to look at while answering, side by side when there is room.
export const Tables = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin-bottom: 14px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 16px;
  overflow: hidden;
  background: var(--s-card);
  border: 2px solid var(--s-line);
  caption {
    caption-side: top;
    padding: 8px 12px;
    font-weight: 800;
    font-size: 1.1rem;
    text-align: left;
  }
  th, td {
    padding: 8px 12px;
    text-align: left;
    vertical-align: top;
    border-top: 1px solid var(--s-line);
  }
  th {
    width: 42%;
    font-size: 0.85rem;
    font-weight: 700;
    opacity: 0.7;
  }
`;
