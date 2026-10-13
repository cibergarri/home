import styled from 'styled-components';

export const IntroHeading = styled.h1`
  color: ${props => props.theme.main.primary};
  font-size: 36px;
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 700;
  margin: 0 0 28px;
  @media (min-width: 768px) {
    font-size: 56px;
  }
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Skill = styled.li`
  color: ${props => props.theme.main.primary};
  background: ${props => props.theme.main.chip};
  border: 1px solid ${props => props.theme.main.line};
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 15px;
  line-height: 1.2;
`;

export const DetailList = styled.dl`
  margin: 16px 0 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6px 12px;
  font-size: 15px;
  line-height: 1.5;
`;

export const DetailLabel = styled.dt`
  color: ${props => props.theme.main.muted};
  margin: 0;
`;

export const DetailValue = styled.dd`
  margin: 0;
  color: ${props => props.theme.main.textColor};
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li + li {
    margin-top: 4px;
  }
`;

export const AwardList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li + li {
    margin-top: 4px;
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
`;

export const ContactLink = styled.a.attrs(props => ({
  href: props.href,
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  color: ${props => props.theme.main.primary};
  border: 1px solid ${props => props.theme.main.lineStrong};
  border-radius: 999px;
  padding: 10px 18px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  &:hover {
    background: ${props => props.theme.main.primary};
    color: ${props => props.theme.main.background};
    border-color: ${props => props.theme.main.primary};
  }
  &:focus-visible {
    outline: 2px solid ${props => props.theme.main.accent};
    outline-offset: 3px;
  }
`;
