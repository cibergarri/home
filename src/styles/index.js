'use client';

import styled from 'styled-components';

import useReveal from '@/hooks/use-reveal';

export const Page = styled.main`
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 24px 96px;
  box-sizing: border-box;
  /* Narrow phones keep the social dock on the right edge: leave it a lane of its own. */
  @media (max-width: 479px) {
    padding-right: 52px;
  }
  @media (min-width: 768px) {
    padding: 0 40px 128px;
  }
`;

const SectionBox = styled.section`
  /* Sections below the fold fade and rise into place as they scroll in, see useReveal. */
  transition: opacity 0.8s ease, transform 0.8s ease;
  &[data-reveal='waiting'] {
    opacity: 0;
    transform: translateY(24px);
  }
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

export function Section(props) {
  const ref = useReveal();
  return <SectionBox ref={ref} {...props} />;
}

export const SectionTitle = styled.h2`
  color: var(--c-primary);
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
  color: var(--c-muted);
  font-size: 18px;
  line-height: 1.5;
  max-width: 640px;
  margin: 0 0 40px;
`;

export const Prose = styled.p`
  color: var(--c-text);
  font-size: 17px;
  line-height: 1.65;
  max-width: 680px;
  margin: 0 0 20px;
  @media (min-width: 768px) {
    font-size: 19px;
  }
`;

export const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  color: var(--c-accent);
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
    outline: 2px solid var(--c-accent);
    outline-offset: 3px;
    border-radius: 2px;
  }
`;

export const Rows = styled.div`
  border-top: 1px solid var(--c-line);
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px 32px;
  padding: 24px 0;
  border-bottom: 1px solid var(--c-line);
  @media (min-width: 768px) {
    grid-template-columns: 240px 1fr;
    padding: 28px 0;
  }
`;

export const RowHead = styled.div`
  color: var(--c-primary);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3;
`;

export const RowMeta = styled.div`
  color: var(--c-muted);
  font-size: 15px;
  line-height: 1.4;
  margin-top: ${props => (props.$tight ? '0' : '4px')}; /* a second line sits right under the first */
  font-weight: 400;
  text-align: left; /* too short to justify */
`;

export const RowBody = styled.div`
  color: var(--c-text);
  font-size: 17px;
  line-height: 1.6;
  max-width: 640px;
  p {
    margin: 0 0 12px;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;
