'use client';

import styled from 'styled-components';

import { Copyleft, Heart, Javascript } from '@/icons';

export const FooterBar = styled.footer`
  background: var(--c-background);
  color: var(--c-muted);
  border-top: 1px solid var(--c-line);
  transition: all 0.5s;
`;

export const FooterInner = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 28px 24px 40px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 24px;
  font-size: 14px;
  line-height: 1.5;
  @media (min-width: 768px) {
    padding: 28px 40px 48px;
  }
`;

export const Copyright = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
`;

export const StyledCopyLeftIcon = styled(Copyleft).attrs({ height: '14px', width: '14px' })`
  fill: var(--c-muted);
  transition: all 0.5s;
  circle {
    stroke: var(--c-muted);
  }
`;

export const StyledHeartIcon = styled(Heart).attrs({ height: '14px', width: '14px' })`
  fill: #ff0000;
`;

export const StyledJSIcon = styled(Javascript).attrs({ height: '14px', width: '14px' })`
  border-radius: 2px;
`;
