import styled from 'styled-components';
import { Button, Container, Switch } from '@material-ui/core';

import {
  World, Nodejs, React, DotNet, Construction
} from '../../icons'

export const Main = styled.div`
  background-color: ${props => props.theme.main.background};
  text-align: center;
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-size: 16px;
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: ${props => {
    return props.theme.main.background;
  }};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${props => props.theme.main.primary};
`;

export const CustomSwitch = styled(Switch).attrs(props => ({
  color: 'primary',
}))``;

export const Link = styled.a.attrs(props => ({
  href: props.href,
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  color: #61dafb;
`;

export const Body = styled(Container)`
  transition: all 0.5s;
`;

export const CustomButton = styled(Button).attrs(props => ({
  color: 'primary',
}))``;

export const MainContainer = styled(Container)`
  background:${props => props.theme.main.canvas};
  min-height: 100vh;
  box-sizing:border-box;
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-size: max(1.2vw, 12px);
  color:  ${props => props.theme.main.primary};
  display: block;
  margin: -60px 30px 0px 30px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 70px 0px
`;

export const TextTitle = styled.h1`
  color: ${props => props.theme.main.primary};
  margin: max(3vw, 40px);
`;

export const Paragraph = styled.p`
  color: ${props => props.color || props.theme.main.primary};
  margin: max(1.5vw, 40px);
`;

export const Span = styled.span`
  color: ${props => props.color || props.theme.main.primary};
`;

export const StyledWorldIcon = styled(World).attrs(props => ({
  fill: props.theme.main.primary,
  height:"max(3vw, 20px)",
  width:"max(3vw, 20px)",
  viewBox: "0 0 600 600",
}))`
  transition: fill 2s;
`;

export const StyledNodeJsIcon = styled(Nodejs).attrs(() => ({
  height:"max(2vw, 20px)",
  width:"max(2vw, 20px)",
}))``;

export const StyledReactIcon = styled(React).attrs(() => ({
  height:"max(2vw, 20px)",
  width:"max(2vw, 20px)",
}))``;

export const StyledDotNetIcon = styled(DotNet).attrs(() => ({
  height:"max(2vw, 20px)",
  width:"max(2vw, 20px)",
}))``;

export const StyledConstructionIcon = styled(Construction).attrs((props) => ({
  fill: props.theme.main.primary,
  height:"max(3vw, 40px)",
  width:"max(3vw, 40px)",
  viewBox: "0 0 60 30",
}))``;