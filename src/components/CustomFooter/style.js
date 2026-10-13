import styled from 'styled-components';

import { Copyleft, Heart, Javascript } from '../../icons';

export const Footer = styled.footer`
  background: ${props => props.theme.main.background};
  color: ${props => props.theme.main.muted};
  border-top: 1px solid ${props => props.theme.main.line};
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

export const StyledCopyLeftIcon = styled(Copyleft).attrs(props => ({
  fill: props.theme.main.muted,
  height: '14px',
  width: '14px',
}))`
  transition: all 0.5s;
  circle {
    stroke: ${props => props.theme.main.muted};
  }
`;

export const StyledHeartIcon = styled(Heart).attrs(() => ({
  fill: '#ff0000',
  height: '14px',
  width: '14px',
}))``;

export const StyledJSIcon = styled(Javascript).attrs(() => ({
  height: '14px',
  width: '14px',
}))`
  border-radius: 2px;
`;
