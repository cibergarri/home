'use client';

import styled, { css } from 'styled-components';

import { Section } from '@/styles';

export const IntroHeading = styled.h1`
  color: var(--c-primary);
  font-size: 36px;
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 700;
  margin: 0 0 28px;
  @media (min-width: 768px) {
    font-size: 56px;
  }
`;

/* The name in the greeting, in the accent colour of the theme. */
export const Name = styled.span`
  color: var(--c-accent);
  transition: color 2s;
`;

/* For sections full of names, products and technologies that read badly split across lines. */
export const UnhyphenatedSection = styled(Section)`
  hyphens: manual;
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

/* A lit bubble turns into a tag, like the <heart \> in the hero: "<" and "/>" slide in around the
   name in the accent colour, and the bubble lifts with a soft glow. The brackets live in the side
   padding, so the bubble keeps its size and nothing around it moves. Like the other controls, it
   lights up quickly and settles back slowly. */
const lit = css`
  transition-duration: 0.25s;
  color: var(--c-accent);
  border-color: var(--c-accent);
  background-color: color-mix(in srgb, var(--c-accent) 10%, transparent);
  box-shadow: 0 6px 18px color-mix(in srgb, var(--c-accent) 25%, transparent);
  transform: translateY(-2px);
  &::before,
  &::after {
    transition-duration: 0.25s;
    opacity: 1;
    transform: translate(0, -50%);
  }
`;

// Lit by the mouse, or by a finger passing over it on a touch screen (see Skills).
export const Skill = styled.li`
  position: relative;
  color: var(--c-primary);
  background: var(--c-chip);
  border: 1px solid var(--c-line);
  border-radius: 999px;
  padding: 8px 20px;
  font-size: 15px;
  line-height: 1.2;
  cursor: default;
  -webkit-tap-highlight-color: transparent;
  transition: color 1.2s, border-color 1.2s, background-color 1.2s, box-shadow 1.2s, transform 1.2s;
  &::before,
  &::after {
    position: absolute;
    top: 50%;
    font-size: 13px;
    font-weight: 700;
    color: var(--c-accent);
    opacity: 0;
    transition: opacity 1.2s, transform 1.2s;
  }
  &::before {
    content: '<';
    left: 7px;
    transform: translate(6px, -50%);
  }
  &::after {
    content: '/>';
    right: 5px;
    transform: translate(-6px, -50%);
  }
  @media (hover: hover) {
    &:hover {
      ${lit}
    }
  }
  &[data-touched] {
    ${lit}
  }
`;

export const DetailList = styled.dl`
  margin: ${props => (props.$flush ? '0' : '16px 0 0')};
  display: grid;
  /* Lists stacked one under another share a label width so their values line up. */
  grid-template-columns: ${props => props.$labelWidth || 'auto'} 1fr;
  gap: 6px 12px;
  font-size: 15px;
  line-height: 1.5;
  text-align: left; /* short items, justifying them only stretches the spaces */
  /* Two columns squeeze the values into four-line stacks on phones: put each label above. */
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const DetailLabel = styled.dt`
  color: var(--c-muted);
  margin: 0;
  @media (max-width: 767px) {
    font-size: 13px;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
`;

export const DetailValue = styled.dd`
  margin: 0;
  color: var(--c-text);
  white-space: pre-line; /* line breaks written in the copy, like the one before an author */
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

export const ContactLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  color: var(--c-primary);
  border: 1px solid var(--c-line-strong);
  border-radius: 999px;
  padding: 10px 18px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  &:hover {
    background: var(--c-primary);
    color: var(--c-background);
    border-color: var(--c-primary);
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 3px;
  }
`;
