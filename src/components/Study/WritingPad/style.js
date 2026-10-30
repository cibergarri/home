'use client';

import styled from 'styled-components';

export const Pad = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: ${({ $narrow }) => ($narrow ? '260px' : '380px')};
  max-width: 100%;
`;

/* Lined like her notebook, with a base line to write the digits on. */
export const Paper = styled.div`
  position: relative;
  height: 180px;
  border-radius: 16px;
  border: 3px solid var(--s-line);
  background-color: #fffdf7;
  background-image:
    linear-gradient(to bottom, transparent 128px, #9fc3e6 128px, #9fc3e6 130px, transparent 130px),
    linear-gradient(to bottom, transparent 48px, #d7e6f5 48px, #d7e6f5 49px, transparent 49px);
  overflow: hidden;
`;

export const Placeholder = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b9b2a3;
  font-size: 20px;
  pointer-events: none;
`;

export const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  touch-action: none;
  cursor: crosshair;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Clear = styled.button`
  flex: 1;
  min-height: 56px;
  border-radius: 16px;
  border: 2px solid var(--s-line);
  background: var(--s-card);
  box-shadow: 0 4px 0 var(--s-line);
  color: var(--s-muted);
  font-family: inherit;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  touch-action: manipulation;
  &:disabled {
    opacity: 0.45;
    cursor: default;
  }
`;

export const Read = styled.button`
  flex: 1;
  min-height: 56px;
  border: 0;
  border-radius: 16px;
  background: var(--s-accent);
  box-shadow: 0 4px 0 #d95c3d;
  color: #fff;
  font-family: inherit;
  font-size: 26px;
  font-weight: 600;
  cursor: pointer;
  touch-action: manipulation;
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
  &:active:not(:disabled) {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #d95c3d;
  }
`;
