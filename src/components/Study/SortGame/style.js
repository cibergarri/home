'use client';

import styled, { css, keyframes } from 'styled-components';

import { Tray } from '../LabelMap/style';

const shake = keyframes`
  20%, 60% { transform: translateX(-6px) }
  40%, 80% { transform: translateX(6px) }
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $count }) => $count}, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 16px;
`;

/* A column cards are sorted into; its whole area takes a dropped card. */
export const Column = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 180px;
  padding: 10px;
  border-radius: 18px;
  border: 3px dashed var(--s-line);
  background: rgba(255, 255, 255, 0.55);
  transition: border-color 0.15s, background 0.15s;
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
`;

/* The column's name; tapping it puts the chosen card there. */
export const ColumnButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 10px 6px;
  border: 0;
  border-radius: 12px;
  background: ${({ $ready }) => ($ready ? '#e6f5f3' : 'transparent')};
  color: var(--s-ink);
  font-family: inherit;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  small {
    color: var(--s-muted);
    font-size: 15px;
    font-weight: 500;
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 2px;
  }
`;

export const Sorted = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const SortedCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding: 6px 6px 6px 12px;
  border-radius: 12px;
  border: 2px solid var(--s-good);
  background: var(--s-good-bg);
  font-size: 17px;
  font-weight: 500;
  line-height: 1.25;
`;

export const SmallSpeaker = styled.button`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--s-good);
  color: #fff;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

/* Cards wrap across the page under the columns, whichever way the tablet is held. */
export const Cards = styled(Tray)`
  @media (orientation: landscape) and (min-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
