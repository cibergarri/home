import styled from 'styled-components';
import { Container } from '@material-ui/core';

export const Main = styled.div`
  background-color: ${props => props.theme.main.background};
  text-align: center;
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-size: 16px;
  min-height: 100vh;
`;

export const Body = styled(Container)`
  transition: all 0.5s;
`;
