import styled from 'styled-components';
import { Container } from '@material-ui/core';

// eslint-disable-next-line import/prefer-default-export
export const MainContainer = styled(Container)`
  background:${props => props.theme.main.canvas};
  min-height: 100vh;
  width: 90%;
  box-sizing:border-box;
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-size: max(1.2vw, 12px);
  color:  ${props => props.theme.main.primary};
  display: block;
  margin: 30px 30px 40px 30px;
  box-shadow: 0 16px 24px 2px ${props => props.theme.main.primary}14, 0 6px 30px 5px ${props => props.theme.main.primary}12, 0 8px 10px -5px ${props => props.theme.main.primary}20;
  border-radius: 6px;
  padding: 70px 0px;
`;
