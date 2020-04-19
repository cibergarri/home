import styled from 'styled-components';
import {
  AppBar, Switch, Toolbar, Typography,
} from '@material-ui/core';

import { Sun, Moon } from '../../icons/';

export const Header = styled.header`
  background: ${props => `linear-gradient(${props.theme.main.background}DD 80%, ${props.theme.main.background}00 100%)`};
  color: ${props => props.theme.main.primary};
  max-height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-weight: bold;
  z-index: 1100;
  position: fixed;
  width: 100%;
`;

export const CustomAppBar = styled(AppBar).attrs(props => ({
  color: 'inherit',
  position: 'static',
}))`
  background-color: transparent !important;
  color: ${props => {
    return props.theme.main.primary;
  }};
  box-shadow: none !important; 
  max-width: 90%;
  padding: 1vh 1vw 1vh 1vw;
`;

export const CustomToolbar = styled(Toolbar)`
  transition: all 0.5s;
  alignItems: 'flex-start';
`;

export const Title = styled(Typography)`
  font-weight: bold !important;
  transition: all 4s;
  @media (max-width: 470px) {
    font-size: 0.75rem !important;
  }
`;

export const Blank = styled.div`
  flex-grow: 1;
`;

export const LinksContainer = styled.div`
  margin-right: 1vw;
  display: inline-block;
  min-width: 100px;
`;

export const Link = styled.a.attrs(props => ({
  href: props.href,
  target: '_blank',
  rel: 'noopener noreferrer',
}))``;

export const SVG =  styled.svg`
  transition: all 2s;
  width: 24px;
  height: 24px;
  margin-left: 1vw;
  fill: ${props => props.theme.main.primary};
`;

export const NightModeContainer = styled.div`
  transition: all 2s;
  padding-bottom: 10px;
  min-width: 110px;
  displa: inline-block;
`;

export const CustomSwitch = styled(Switch).attrs(props => ({
  color: 'primary',
}))`
  flex-grow: 1;
  alignSelf: 'flex-end';
`;

export const StyledSunIcon = styled(Sun).attrs(props => ({
  fill: props.theme.main.primary,
  height:"20px",
  width:"20px",
}))`
  transition: fill 2s;
  padding: 0px 0.5vw 0vh 0.5vw;
  vertical-align: middle;
`;

export const StyledMoonIcon = styled(Moon).attrs(props => ({
  fill: props.theme.main.primary,
  height:"20px",
  width:"18px",
}))`
  transition: fill 2s;
  padding: 0px 0.5vw 0vh 0.5vw;
  vertical-align: middle;
`;

export const BackgroundImage = styled.div.attrs(props => ({}))`
  background: ${props => `linear-gradient(${props.theme.main.background}FF 10%, ${props.theme.main.background}88 15%, ${props.theme.main.background}88 85%, ${props.theme.main.background}FF 90%), url( ${require(`../../assets/img/bg-${props.theme.main.name}.png`)})`};
  background-position: center bottom;
  background-repeat: no-repeat;
  transition: fill 2s;
  height: 100vh;
  max-height: 780px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
`;

export const BackgroundTitle = styled.div`
  color: ${props => props.theme.main.primary};
  font-family: Roboto,Helvetica,Arial,sans-serif;
  transition: all 2s;
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-weight: bold;
  font-size: 6vw;
  padding: 0vh 3vw 20px 0vw;
  margin: 0px;
  max-width: 500px;
  align-self: flex-end;
  @media (min-width: 768px) {
    font-size: 60px;
  }
`
export const ColoredText = styled.div`
  color: #ff0000;
  display:inline;
`;

export const BackgroundSubtitle = styled.div`
  color: ${props => props.theme.main.primary};
  font-family: Roboto,Helvetica,Arial,sans-serif;
  transition: all 2s;
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-weight: bold;
  font-size: 3vw;
  padding: 0vh 3vw 0px 0vw;
  height: 200px;
  max-width: 500px;
  align-self: flex-end;
  @media (min-width: 768px) {
    font-size: 35px;
  }
`
