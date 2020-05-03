/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import styled from 'styled-components';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';

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

export const CustomAppBar = styled(AppBar).attrs(() => ({
  color: 'inherit',
  position: 'static',
}))`
  background-color: transparent;
  color: ${props => props.theme.main.primary};
  box-shadow: none; 
  max-width: 90%;
  padding: 1vh 1vw 1vh 1vw;
`;

export const CustomToolbar = styled(Toolbar)`
  transition: all 0.5s;
`;

export const Title = styled(Typography)`
  font-weight: bold;
  transition: all 4s;
  @media (max-width: 470px) {
    font-size: 0.75rem;
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

export const SVG = styled.svg`
  transition: all 2s;
  width: 24px;
  height: 24px;
  margin-left: 1vw;
  fill: ${props => props.theme.main.primary};
`;

export const BackgroundImage = styled.div.attrs(() => ({}))`
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
  font-weight: bold;
  font-size: 6vw;
  padding: 0vh 3vw 20px 0vw;
  margin: 0px;
  max-width: 500px;
  align-self: flex-end;
  @media (min-width: 768px) {
    font-size: 60px;
  }
`;
export const ColoredText = styled.div`
  color: #ff0000;
  display:inline;
`;

export const BackgroundSubtitle = styled.div`
  color: ${props => props.theme.main.primary};
  font-family: Roboto,Helvetica,Arial,sans-serif;
  transition: all 2s;
  font-weight: bold;
  font-size: 3vw;
  padding: 0vh 3vw 0px 0vw;
  height: 200px;
  max-width: 500px;
  align-self: flex-end;
  @media (min-width: 768px) {
    font-size: 35px;
  }
`;
