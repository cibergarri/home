'use client';

import styled, { css, keyframes } from 'styled-components';

const shake = keyframes`
  20%, 60% { transform: translateX(-6px) }
  40%, 80% { transform: translateX(6px) }
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px 20px;
  margin-bottom: 16px;
`;

export const Column = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Heading = styled.li`
  color: var(--s-muted);
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const Card = styled.li`
  display: flex;
  align-items: stretch;
  border-radius: 14px;
  border: 3px solid var(--s-line);
  background: var(--s-card);
  box-shadow: 0 4px 0 var(--s-line);
  transition: transform 0.15s;
  ${({ $selected }) => $selected && css`
    border-color: var(--s-teal);
    box-shadow: 0 4px 0 var(--s-teal);
    transform: translateY(-3px);
  `}
  ${({ $colour }) => $colour && css`
    border-color: ${$colour};
    background: color-mix(in srgb, ${$colour} 28%, #fff);
    box-shadow: 0 4px 0 ${$colour};
  `}
  ${({ $wrong }) => $wrong && css`
    border-color: var(--s-bad);
    background: var(--s-bad-bg);
    animation: ${shake} 0.45s;
  `}
`;

export const CardButton = styled.button`
  flex: 1;
  min-height: 56px;
  padding: 6px 10px 6px 16px;
  border: 0;
  background: none;
  color: var(--s-ink);
  font-family: inherit;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.25;
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
  ${({ $picture }) => $picture && css`
    display: flex;
    justify-content: center;
    padding: 6px;
  `}
`;

/* A drawing standing in for the Spanish words. */
export const Picture = styled.svg`
  display: block;
  width: 100%;
  max-width: 160px;
  height: auto;
  border-radius: 10px;
`;

export const CardSpeaker = styled.button`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  margin: 7px 7px 7px 0;
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
