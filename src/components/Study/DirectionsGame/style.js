'use client';

import styled, { css, keyframes } from 'styled-components';

const shake = keyframes`
  20%, 60% { transform: translateX(-6px) }
  40%, 80% { transform: translateX(6px) }
`;

export const Intro = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  padding: 12px 16px;
  border-radius: 16px;
  background: #fff4c7;
  border: 2px solid #f0dc8a;
  font-size: 18px;
  line-height: 1.4;
  p {
    margin: 0;
    flex: 1;
  }
  strong {
    font-weight: 600;
  }
`;

/* The map, and beside it the instructions and the arrows. */
export const Layout = styled.div`
  display: grid;
  gap: 16px;
  @media (min-width: 760px) {
    grid-template-columns: minmax(0, 1fr) 300px;
    align-items: start;
  }
`;

export const Map = styled.div`
  width: 100%;
  margin: 0 auto;
  aspect-ratio: 640 / 720;
  max-width: 600px;
  @media (orientation: landscape) and (min-width: 900px) {
    max-width: calc((100svh - 210px) * 640 / 720);
  }
  svg {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 18px;
  }
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (orientation: landscape) and (min-width: 900px) {
    gap: 10px;
  }
`;

export const Goal = styled.p`
  margin: 0;
  font-size: 19px;
  font-weight: 600;
`;

export const Steps = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0;
  padding: 10px;
  border-radius: 16px;
  background: #e8f2d8;
  list-style: none;
  @media (orientation: landscape) and (min-width: 900px) {
    gap: 2px;
    padding: 6px;
  }
`;

export const Step = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  padding: 4px 6px 4px 12px;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 500;
  border: 2px solid transparent;
  @media (orientation: landscape) and (min-width: 900px) {
    min-height: 38px;
    font-size: 18px;
  }
  ${({ $state }) => $state === 'now' && css`
    background: #fff;
    border-color: var(--s-accent);
    font-weight: 600;
  `}
  ${({ $state }) => $state === 'done' && css`
    color: var(--s-good);
  `}
  span {
    flex: 1;
  }
  small {
    color: var(--s-muted);
    font-size: 15px;
  }
`;

export const StepSpeaker = styled.button`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: #e6f5f3;
  color: var(--s-teal);
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
`;

/* The four arrows round a compass. */
export const Pad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 84px);
  grid-template-rows: repeat(3, 84px);
  gap: 6px;
  justify-content: center;
  /* Still big enough for a finger, and the whole column fits on a tablet lying flat. */
  @media (orientation: landscape) and (min-width: 900px) {
    grid-template-columns: repeat(3, 72px);
    grid-template-rows: repeat(3, 72px);
  }
`;

export const Arrow = styled.button`
  grid-area: ${({ $area }) => $area};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 0;
  border: 0;
  border-radius: 18px;
  background: var(--s-accent);
  box-shadow: 0 5px 0 #d95c3d;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  touch-action: manipulation;
  span {
    font-size: 34px;
    line-height: 1;
  }
  &:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #d95c3d;
  }
  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 3px;
  }
  ${({ $wrong }) => $wrong && css`
    background: var(--s-bad);
    box-shadow: 0 5px 0 #b3363a;
    animation: ${shake} 0.45s;
  `}
`;

export const Compass = styled.div`
  grid-area: 2 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 76px;
    height: 76px;
  }
`;
