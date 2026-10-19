'use client';

import styled from 'styled-components';

/* A slim tab coming in from the right edge, centred vertically, with the social icons
   stacked inside. Only narrow phones get it; wider screens show the icons in the bar. */
export const Dock = styled.nav`
  position: fixed;
  right: 0;
  top: 50%;
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
