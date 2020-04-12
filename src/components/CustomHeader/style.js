import styled from 'styled-components';
import { AppBar, Switch, Toolbar, Typography } from '@material-ui/core';

export const Header = styled.header`
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
  padding: 25px
`;

export const CustomToolbar = styled(Toolbar)`
  transition: all 0.5s;
  alignItems: 'flex-start';
`;

export const Title = styled(Typography)`
  alignSelf: 'flex-end';
  font-weight: bold !important;
`;

export const Blank = styled.div`
  flex-grow: 1;
`;

export const LinksContainer = styled.div`
  margin-right: 10px;
`;

export const Link = styled.a.attrs(props => ({
  href: props.href,
  target: '_blank',
  rel: 'noopener noreferrer',
}))``;

export const SVG =  styled.svg`
  transition: fill 2s;
  width: 24px;
  height: 24px;
  margin-left: 15px;
  fill: ${props => props.theme.main.primary};
`;

export const NightModeContainer = styled(Typography)`
  transition: fill 2s;
  font-weight: bold !important;
`;

export const CustomSwitch = styled(Switch).attrs(props => ({
  color: 'primary',
}))`
  flex-grow: 1;
  alignSelf: 'flex-end';
`;

export const BackgroundImage = styled.div.attrs(props => ({}))`
  background: ${props => `linear-gradient(${props.theme.main.background}FF 10%, ${props.theme.main.background}00 15%, ${props.theme.main.background}00 85%, ${props.theme.main.background}FF 90%), url( ${require(`../../assets/img/bg-${props.theme.main.name}.png`)})`};
  background-position: center bottom;
  background-repeat: no-repeat;
  height: 780px;
`;
