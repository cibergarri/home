'use client';

import styled from 'styled-components';

import { Sun, Moon } from '@/icons';

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  @media (min-width: 768px) {
    gap: 12px;
  }
`;

export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: var(--c-primary);
  cursor: pointer;
  /* Like the social icons: quick to colour and grow on hover, slow to settle back. */
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

export const StyledSunIcon = styled(Sun).attrs({ height: '20px', width: '20px' })`
  fill: currentColor;
`;

export const StyledMoonIcon = styled(Moon).attrs({ height: '18px', width: '18px' })`
  fill: currentColor;
`;

export const LanguageGroup = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--c-line);
  border-radius: 999px;
  padding: 2px;
  /* The whole switch reacts to hover, like the other controls in the bar. */
  transition: all 2s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.2);
    border-color: var(--c-secondary);
  }
`;

export const LanguageButton = styled.button`
  border: none;
  border-radius: 999px;
  padding: 5px 8px;
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1;
  cursor: pointer;
  color: ${props => (props.$selected ? 'var(--c-background)' : 'var(--c-primary)')};
  background: ${props => (props.$selected ? 'var(--c-primary)' : 'transparent')};
  transition: background-color 2s, color 2s;
  ${LanguageGroup}:hover & {
    transition: background-color 0.3s, color 0.3s;
    ${props => (props.$selected ? 'background: var(--c-secondary);' : 'color: var(--c-secondary);')}
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 2px;
  }
`;
