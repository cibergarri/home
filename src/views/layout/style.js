import styled from 'styled-components';

export const Main = styled.div`
  background-color: ${props => props.theme.main.background};
  color: ${props => props.theme.main.textColor};
  min-height: 100vh;
  transition: background-color 0.5s, color 0.5s;
`;

export const Body = styled.div`
  transition: all 0.5s;
`;
