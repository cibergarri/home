import styled from 'styled-components';

import Copyleft from '../../icons/Copyleft';
import { Heart, Javascript } from '../../icons';

export const Footer = styled.div`
  background: ${props => `${props.theme.main.background}`};
  color: ${props => props.theme.main.primary};
  font-family: Roboto,Helvetica,Arial,sans-serif;
  padding: 2vh 1vw 2vh 1vw;
  min-height: 50px;
  min-width: 250px;
  font-weight: bold;
  font-size: min(3vw,14px);
  transition: all 0.5s;
`;

export const Copyright = styled.div`
  float: right;
  padding-right: 7vw;
  height: 50px;
`;

export const StyledCopyLeftIcon = styled(Copyleft).attrs(props => ({
  fill: props.theme.main.primary,
  height: '1.5vh',
  width: '1.5vh',
}))`
  padding: 0px 0.5vw 0vh 0.5vw;
  transition: all 0.5s;
`;

export const StyledHeartIcon = styled(Heart).attrs(() => ({
  fill: '#ff0000',
  height: '1.5vh',
  width: '1.5vh',
}))`
  padding: 0px 0.5vw 0vh 0.5vw;
`;

export const StyledJSIcon = styled(Javascript).attrs(() => ({
  fill: '#000000',
  height: '1.5vh',
  width: '1.5vh',
}))`
  padding: 0px 0.5vw 0vh 0.5vw;
`;
