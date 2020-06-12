import styled from 'styled-components';
// import { Button } from '@material-ui/core';

import {
  World, Nodejs, React, DotNet, Construction,
} from '../../../icons';

export const Header = styled.header`
  background-color: ${props => props.theme.main.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${props => props.theme.main.primary};
`;

export const Link = styled.a.attrs(props => ({
  href: props.href,
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  color: #61dafb;
`;


export const Paragraph = styled.div`
  color: ${props => props.color || props.theme.main.primary};
  margin: max(1.5vw, 40px);
  line-height: 2.6;
  text-align: justify;
  text-align-last: center;
`;

export const Span = styled.span`
  color: ${props => props.color || props.theme.main.primary};
`;

export const StyledWorldIcon = styled(World).attrs(props => ({
  fill: props.theme.main.primary,
  height: 'max(3vw, 20px)',
  width: 'max(3vw, 20px)',
  viewBox: '0 0 600 600',
}))`
  transition: fill 2s;
`;

export const StyledNodeJsIcon = styled(Nodejs).attrs(() => ({
  height: 'max(2vw, 20px)',
  width: 'max(2vw, 20px)',
}))``;

export const StyledReactIcon = styled(React).attrs(() => ({
  height: 'max(2vw, 20px)',
  width: 'max(2vw, 20px)',
}))``;

export const StyledDotNetIcon = styled(DotNet).attrs(() => ({
  height: 'max(2vw, 20px)',
  width: 'max(2vw, 20px)',
}))``;

export const StyledConstructionIcon = styled(Construction).attrs((props) => ({
  fill: props.theme.main.primary,
  height: 'max(3vw, 40px)',
  width: 'max(3vw, 40px)',
  viewBox: '0 0 60 30',
}))``;
