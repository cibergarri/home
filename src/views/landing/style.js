import styled, { keyframes } from 'styled-components';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Main = styled.div`
  text-align: center;
`;

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

export const Logo = styled.img.attrs({
  src: logo,
  alt: 'logo',
})`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${rotate} infinite 20s linear;
  }
`;

export const Link = styled.a.attrs({
  href: "https://cibergarri.github.io/playground",
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: #61dafb;
`;

export const Body = styled.div`
  background-color: ${props => props.theme.main.background};
  color: ${props => props.theme.main.primary};
`;
export const CustomButton = styled(Button).attrs(props => ({
  color: "primary",
}))``;
