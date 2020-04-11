import styled from 'styled-components';
import { AppBar, Switch, Toolbar, Typography } from '@material-ui/core';

export const Header = styled.header`
  background-color: ${props => props.theme.main.background};
  color: ${props => props.theme.main.primary};
  max-height: 300px;
  display: flex;
  flex-direction: row;
  align-items: right;
  justify-content: right;
  text-align: center;
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-size: 16px:
`;

export const CustomAppBar = styled(AppBar).attrs(props => ({
  color: 'inherit',
  position: 'static',
}))`
  background-color: transparent !important;
  color: ${props => {
    return props.theme.main.primary;
  }};
`;

export const CustomToolbar = styled(Toolbar)`
  transition: all 0.5s;
  alignItems: 'flex-start';
`;

export const Title = styled(Typography)`
  alignSelf: 'flex-end';
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
  fill: ${props => props.theme.main.primary};;
`;

export const NightModeContainer = styled(Typography)`
  transition: fill 2s;
`;

export const CustomSwitch = styled(Switch).attrs(props => ({
  color: 'primary',
}))`
  flex-grow: 1;
  alignSelf: 'flex-end';
`;




