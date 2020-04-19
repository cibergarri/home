import styled from 'styled-components';
import { Button, Switch } from '@material-ui/core';

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

export const Body = styled.div`
  transition: all 0.5s;
  color: ${props => props.theme.main.primary};
  min-height: 100vh;
`;

export const CustomButton = styled(Button).attrs(props => ({
  color: 'primary',
}))``;
