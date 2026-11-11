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
  ${({ $diagram }) => $diagram && css`
    /* A diagram goes down the page: the root, its branches, and what they mean under them. */
    display: flex;
    flex-direction: column;
    gap: 56px;
    @media (max-width: 560px) {
      li {
        flex-direction: column;
      }
      button {
        padding: 6px 8px;
        font-size: 16px;
      }
      button + button {
        width: auto;
        height: 34px;
        margin: 0 6px 6px;
      }
    }
  `}
`;

export const Column = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
  ${({ $across }) => $across && css`
    display: grid;
    grid-template-columns: repeat(${$across}, minmax(0, 1fr));
    gap: 32px 14px;
    > :first-child:not([data-card]) {
      grid-column: 1 / -1;
    }
    /* On a phone, more than three branches go in two rows. */
    ${$across > 3 && css`
      @media (max-width: 560px) {
        grid-template-columns: repeat(${Math.ceil($across / 2)}, minmax(0, 1fr));
        gap: 16px 10px;
        li::before, li::after {
          display: none;
        }
      }
    `}
  `}
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
  ${({ $branch }) => $branch && css`
    /* A branch of the diagram: from a bar under the root, a line down to the card. */
    position: relative;
    &::before, &::after {
      content: '';
      position: absolute;
      top: -19px;
    }
    &::before {
      left: calc(50% - 1.5px);
      height: 16px;
      border-left: 3px solid var(--s-line);
    }
    &::after {
      left: -10px;
      right: -10px;
      border-top: 3px solid var(--s-line);
    }
    &:nth-child(2)::after {
      left: 50%;
    }
    &:last-child::after {
      right: 50%;
    }
    /* No room on a phone for the speaker: the word is said when it is matched. */
    @media (max-width: 560px) {
      button {
        hyphens: auto;
      }
      [data-speaker] {
        display: none;
      }
    }
  `}
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

/* The game, with room for the lines joining the pairs of a diagram over it. */
export const Board = styled.div`
  position: relative;
`;

/* What a diagram's left cards hang from, with the line down to them. */
export const Root = styled.li`
  position: relative;
  justify-self: center;
  padding: 10px 18px;
  border-radius: 14px;
  background: var(--s-teal);
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  &::after {
    content: '';
    position: absolute;
    left: calc(50% - 1.5px);
    top: 100%;
    height: 16px;
    border-left: 3px solid var(--s-line);
  }
`;

export const Joins = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
`;

// The speaker and, for a word with a Spanish meaning, its flag: one above the other, so a card in a
// narrow diagram row does not grow wider.
export const CardTools = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px 6px 6px 0;
  & > * {
    flex: 1;
    width: 44px;
    min-height: 36px;
    margin: 0;
  }
  @media (max-width: 560px) {
    flex-direction: row;
    padding: 0 6px 6px;
    & > * {
      width: auto;
      min-height: 34px;
    }
  }
`;
