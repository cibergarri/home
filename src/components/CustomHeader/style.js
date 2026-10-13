/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import styled, { keyframes } from 'styled-components';

export const Header = styled.header`
  background: ${props => `linear-gradient(${props.theme.main.background}DD 80%, ${props.theme.main.background}00 100%)`};
  color: ${props => props.theme.main.primary};
  z-index: 1100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 16px 24px;
  @media (min-width: 768px) {
    padding: 16px 40px 32px;
  }
`;

export const Toolbar = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const Title = styled.a`
  color: ${props => props.theme.main.primary};
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.01em;
  white-space: nowrap;
  transition: color 2s;
  @media (min-width: 768px) {
    font-size: 17px;
  }
  &:focus-visible {
    outline: 2px solid ${props => props.theme.main.accent};
    outline-offset: 4px;
    border-radius: 2px;
  }
`;

export const Blank = styled.div`
  flex-grow: 1;
`;

export const LinksContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0;
  @media (min-width: 768px) {
    gap: 10px;
  }
`;

export const Link = styled.a.attrs(props => ({
  href: props.href,
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  display: inline-flex;
  padding: 5px;
  border-radius: 6px;
  &:focus-visible {
    outline: 2px solid ${props => props.theme.main.accent};
  }
`;

export const SVG = styled.svg`
  transition: all 2s;
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
  fill: ${props => props.theme.main.primary};
  /* stylelint-disable-next-line selector-type-no-unknown */
  ${Link}:hover & {
    transition: all 0.3s;
    transform: scale(1.2);
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
  transition: all 2s;
  font-weight: 700;
  letter-spacing: -0.02em;
  font-size: clamp(30px, 7vw, 60px);
  line-height: 1.1;
  padding: 0 24px 16px 0;
  margin: 0px;
  min-width: 28vw;
  max-width: 500px;
  align-self: flex-end;
  text-align: left;
  @media (min-width: 768px) {
    padding-right: 40px;
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
  transition: all 2s;
  font-weight: 700;
  letter-spacing: -0.01em;
  font-size: clamp(17px, 3.6vw, 32px);
  padding: 0 24px 0 0;
  height: 140px;
  max-width: 500px;
  align-self: flex-end;
  @media (min-width: 768px) {
    padding-right: 40px;
  }
  animation:
    ${appear} 3s 10s both;
`;
