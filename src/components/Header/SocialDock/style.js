'use client';

import styled from 'styled-components';

/* A slim tab coming in from the right edge, centred vertically, with the social icons
   stacked inside. Only narrow phones get it; wider screens show the icons in the bar. */
export const Dock = styled.nav`
  position: fixed;
  right: 0;
  /* Centred on the small viewport height, which stays the same while the browser bars collapse
     and expand during a scroll; with 50% the dock would jump each time the screen resizes. */
  top: 50%;
  top: 50svh;
  transform: translateY(-50%);
  z-index: 1100;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  padding: 4px 2px;
  border: 1px solid var(--c-line);
  border-right: none;
  border-radius: 12px 0 0 12px;
  background: color-mix(in srgb, var(--c-background) 85%, transparent);
  backdrop-filter: blur(8px);
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.15);
  /* Dims quickly while the page scrolls and settles back slowly, like the controls in the bar.
     Focus inside it always brings it back. */
  opacity: ${props => (props.$dimmed ? 0.45 : 1)};
  transition: opacity ${props => (props.$dimmed ? '0.2s' : '1.5s')} ease;
  &:focus-within {
    opacity: 1;
  }
  @media (min-width: 480px) {
    display: none;
  }
`;

export const DockLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 36px;
  border-radius: 50%;
  color: var(--c-primary);
  /* Like the controls in the bar: quick to colour and grow on hover, slow to settle back. */
  transition: all 2s;
  &:hover,
  &:active {
    transition: all 0.3s;
    transform: scale(1.2);
    color: var(--c-secondary);
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 2px;
  }
`;

export const DockIcon = styled.svg`
  width: 17px;
  height: 17px;
  fill: currentColor;
`;
