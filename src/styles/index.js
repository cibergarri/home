import styled from 'styled-components';

export const Page = styled.main`
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 24px 96px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: 0 40px 128px;
  }
`;

export const Section = styled.section`
  padding-top: 72px;
  &:first-child {
    padding-top: 16px;
  }
  @media (min-width: 768px) {
    padding-top: 112px;
    &:first-child {
      padding-top: 32px;
    }
  }
`;

export const SectionTitle = styled.h2`
  color: ${props => props.theme.main.primary};
  font-size: 28px;
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 700;
  margin: 0 0 12px;
  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const Lede = styled.p`
  color: ${props => props.theme.main.muted};
  font-size: 18px;
  line-height: 1.5;
  max-width: 640px;
  margin: 0 0 40px;
`;

export const Prose = styled.p`
  color: ${props => props.theme.main.textColor};
  font-size: 17px;
  line-height: 1.65;
  max-width: 680px;
  margin: 0 0 20px;
  @media (min-width: 768px) {
    font-size: 19px;
  }
`;

export const Link = styled.a.attrs(props => ({
  href: props.href,
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  color: ${props => props.theme.main.accent};
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-size: 100% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease, color 0.2s ease;
  &:hover,
  &:focus-visible {
    background-size: 100% 2px;
  }
  &:focus-visible {
    outline: 2px solid ${props => props.theme.main.accent};
    outline-offset: 3px;
    border-radius: 2px;
  }
`;

export const Rows = styled.div`
  border-top: 1px solid ${props => props.theme.main.line};
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px 32px;
  padding: 24px 0;
  border-bottom: 1px solid ${props => props.theme.main.line};
  @media (min-width: 768px) {
    grid-template-columns: 240px 1fr;
    padding: 28px 0;
  }
`;

export const RowHead = styled.div`
  color: ${props => props.theme.main.primary};
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3;
`;

export const RowMeta = styled.div`
  color: ${props => props.theme.main.muted};
  font-size: 15px;
  line-height: 1.4;
  margin-top: 4px;
  font-weight: 400;
`;

export const RowBody = styled.div`
  color: ${props => props.theme.main.textColor};
  font-size: 17px;
  line-height: 1.6;
  max-width: 640px;
`;
