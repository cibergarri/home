'use client';

import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px;
  border-radius: 20px;
  background: var(--s-card);
  border: 2px solid var(--s-line);
  box-shadow: 0 4px 0 var(--s-line);
`;

export const Where = styled.p`
  margin: 0;
  color: var(--s-teal);
  font-size: 16px;
  font-weight: 600;
`;

export const StepTitle = styled.h2`
  margin: 0;
  font-size: 26px;
  font-weight: 600;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 19px;
  line-height: 1.45;
  strong {
    font-weight: 600;
    color: var(--s-accent);
  }
`;

export const Listen = styled.button`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 16px;
  border: 0;
  border-radius: 22px;
  background: #e6f5f3;
  color: var(--s-teal);
  font-family: inherit;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  svg {
    width: 22px;
    height: 22px;
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 2px;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const NavButton = styled.button`
  flex: 1;
  min-height: 52px;
  padding: 0 14px;
  white-space: nowrap;
  border-radius: 26px;
  font-family: inherit;
  font-size: 19px;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    visibility: hidden;
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 3px;
  }
`;

export const BackButton = styled(NavButton)`
  border: 2px solid var(--s-line);
  background: var(--s-card);
  color: var(--s-ink);
`;

export const NextButton = styled(NavButton)`
  border: 0;
  background: var(--s-accent);
  box-shadow: 0 4px 0 #d95c3d;
  color: #fff;
  &:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #d95c3d;
  }
`;

export const Dots = styled.ol`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--s-line);
  }
  li[aria-current='step'] {
    background: var(--s-accent);
  }
`;
