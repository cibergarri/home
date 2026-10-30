'use client';

import styled, { css, keyframes } from 'styled-components';

const shake = keyframes`
  20%, 60% { transform: translateX(-6px) }
  40%, 80% { transform: translateX(6px) }
`;

const pop = keyframes`
  0% { transform: scale(0.9) }
  70% { transform: scale(1.06) }
  100% { transform: scale(1) }
`;

export const Crayons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 18px;
`;

/* A crayon to colour with; the one in hand stands up out of the row. */
export const Crayon = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 60px;
  padding: 6px 18px 6px 10px;
  border-radius: 18px;
  border: 3px solid ${({ $selected, $colour }) => ($selected ? $colour : 'var(--s-line)')};
  background: var(--s-card);
  box-shadow: 0 4px 0 ${({ $selected, $colour }) => ($selected ? $colour : 'var(--s-line)')};
  color: var(--s-ink);
  font-family: inherit;
  font-size: 19px;
  font-weight: 600;
  text-align: left;
  line-height: 1.15;
  cursor: pointer;
  transform: ${({ $selected }) => ($selected ? 'translateY(-4px)' : 'none')};
  transition: transform 0.15s;
  svg {
    flex: none;
    width: 40px;
    height: 40px;
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 3px;
  }
`;

export const Words = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
  gap: 12px;
  margin: 0 0 16px;
  padding: 0;
  list-style: none;
`;

/* A word as printed in the book: a box to colour in. Once coloured it is scribbled over in the
   crayon's colour, as if by hand. */
export const Tile = styled.li`
  display: flex;
  align-items: stretch;
  border-radius: 12px;
  border: 3px solid ${({ $colour }) => ($colour ? 'rgba(36, 50, 74, 0.55)' : 'var(--s-line)')};
  background: ${({ $colour }) => ($colour
    ? `repeating-linear-gradient(-28deg, ${$colour} 0 7px, color-mix(in srgb, ${$colour} 70%, #fff) 7px 10px)`
    : 'var(--s-card)')};
  ${({ $colour }) => $colour && css`
    animation: ${pop} 0.35s ease-out;
  `}
  ${({ $wrong }) => $wrong && css`
    border-color: var(--s-bad);
    animation: ${shake} 0.45s;
  `}
`;

export const TileWord = styled.button`
  flex: 1;
  min-width: 0;
  min-height: 60px;
  padding: 0 8px 0 16px;
  border: 0;
  background: none;
  color: var(--s-ink);
  font-family: inherit;
  font-size: 21px;
  font-weight: 600;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: -3px;
    border-radius: 10px;
  }
`;

export const TileSpeaker = styled.button`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  margin: 8px 8px 8px 0;
  border: 0;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.75);
  color: var(--s-teal);
  cursor: pointer;
  svg {
    width: 22px;
    height: 22px;
  }
`;
