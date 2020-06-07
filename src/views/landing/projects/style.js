import styled from 'styled-components';
import {
  MainContainer,
} from '../../../styles';

export const Link = styled.a.attrs(props => ({
  href: props.href,
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  color: #61dafb;
`;

export const Hr = styled.hr`
  width: 50%;
`;

export const TextTitle = styled.h1`
  color: ${props => props.theme.main.primary};
  margin: max(4vw, 40px);
  text-align: center;
`;
export const ProjectTitle = styled.h2`
  color: ${props => props.theme.main.primary};
  margin: max(2vw, 20px);
  margin-top : max(3vw, 30px);
`;
export const SectionTitle = styled.h3`
  color: ${props => props.theme.main.primary};
  margin: max(1vw, 20px);
`;
export const Paragraph = styled.p`
  color: ${props => props.color || props.theme.main.primary};
  margin: max(1.5vw, 40px);
  line-height: 2.6;
`;

export const Span = styled.span`
  color: ${props => props.color || props.theme.main.primary};
`;

export const ProjectsContainer = styled(MainContainer)`
  text-align: left;
`;

export const ListItem = styled.li``;
