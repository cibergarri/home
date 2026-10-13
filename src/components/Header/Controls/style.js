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
  border: 1px solid transparent;
  border-radius: 999px;
  background: transparent;
  color: var(--c-primary);
  cursor: pointer;
  transition: border-color 0.2s, background-color 0.2s;
  &:hover {
    border-color: var(--c-line);
    background: var(--c-chip);
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 2px;
  }
`;

export const StyledSunIcon = styled(Sun).attrs({ height: '20px', width: '20px' })`
  fill: var(--c-primary);
  transition: fill 2s;
`;

export const StyledMoonIcon = styled(Moon).attrs({ height: '18px', width: '18px' })`
  fill: var(--c-primary);
  transition: fill 2s;
`;

export const LanguageGroup = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--c-line);
  border-radius: 999px;
  padding: 2px;
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
  transition: background-color 0.2s, color 0.2s;
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 2px;
  }
`;
