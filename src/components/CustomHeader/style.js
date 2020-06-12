/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import styled, { keyframes } from 'styled-components';
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
  /* stylelint-disable-next-line selector-type-no-unknown */
  ${Link}:hover & {
    transition: all 0.3s;
    transform: scale(1.3);
    fill: ${props => props.theme.main.secondary};
  }
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
  font-size: 5.5vw;
  padding: 0vh 3vw 20px 0vw;
  margin: 0px;
  min-width: 28vw;
  max-width: 500px;
  align-self: flex-end;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 60px;
  }
`;

/* The typing effect */
const typing = keyframes`
  from { width: 0% }
  to { width: 50% }
`;

/* The typewriter cursor effect */
const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #ff0000; }
`;

const disappear = keyframes`
  from {
    opacity: 1;
    width: fit-content;
  }
  to {
    opacity: 0;
    width: 0%;
  }
`;

export const TypeWriterContainer = styled.div`
  display: inline-flex;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #ff0000; /* The typwriter cursor */
  white-space: nowrap;
  animation:
    ${typing} 1.5s steps(8, end) 3s both,
    ${typing} 1.5s steps(8, end) 6s reverse forwards,
    ${typing} 1.5s steps(9, end) 8s forwards,
    ${blinkCaret} .75s step-end infinite;
`;

export const Hate = styled.div`
  display: inline;
  color: #ff0000;
  animation:
    ${disappear} .5s steps(1, end) 7.5s 1 forwards;
`;

export const Heart = styled.div`
  display: inline;
  color: #ff0000;
  animation:
    ${disappear} .5s steps(1, end) 6.5s 1 reverse both;
`;

const appear = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
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
  animation:
    ${appear} 3s 10s both;
`;
