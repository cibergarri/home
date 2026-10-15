'use client';

import styled, { keyframes } from 'styled-components';

import { IconButton } from '../Controls/style';

/* A tab stuck to the right edge of the screen, with the social icons stacked
   inside. Only narrow phones get it; wider screens show the icons in the bar. */
export const EdgeTab = styled.button`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 7px;
  border: 1px solid var(--c-line);
  border-right: none;
  border-radius: 10px 0 0 10px;
  background: color-mix(in srgb, var(--c-background) 92%, transparent);
  backdrop-filter: blur(8px);
  color: var(--c-primary);
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transform-origin: right center; /* grow into the page, the right edge stays put */
  /* Like the controls in the bar: quick to colour and grow on hover, slow to settle back. */
  transition: all 2s;
  @media (min-width: 480px) {
    display: none;
  }
  &:hover {
    transition: all 0.3s;
    transform: translateY(-50%) scale(1.2);
    color: var(--c-secondary);
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 2px;
  }
`;

export const TabIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;


export const CloseButton = styled(IconButton)`
  width: 30px;
  height: 30px;
`;

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const slideIn = keyframes`
  from { transform: translate(100%, -50%) }
  to { transform: translate(0, -50%) }
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1150;
  background: rgba(0, 0, 0, 0.45);
  animation: ${fadeIn} 0.2s ease-out both;
`;

/* A small card hanging off the right edge, centred like the tab that opens it. */
export const Panel = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  z-index: 1200;
  width: min(144px, 42vw);
  box-sizing: border-box;
  padding: 10px 14px 14px;
  display: flex;
  flex-direction: column;
  background: var(--c-background);
  color: var(--c-primary);
  border: 1px solid var(--c-line);
  border-right: none;
  border-radius: 14px 0 0 14px;
  box-shadow: -12px 0 32px rgba(0, 0, 0, 0.2);
  animation: ${slideIn} 0.25s ease-out both;
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
`;

export const PanelTitle = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DrawerList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DrawerLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 48px;
  padding: 0 8px;
  margin: 0 -8px;
  border-radius: 10px;
  color: var(--c-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transform-origin: left center;
  /* Like the controls in the bar: quick to colour and grow on hover, slow to settle back. */
  transition: all 2s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.2);
    color: var(--c-secondary);
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 2px;
  }
`;

export const DrawerIcon = styled.svg`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  fill: currentColor;
`;
