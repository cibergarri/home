'use client';

import Link from 'next/link';
import styled, { css } from 'styled-components';

/* Julia's study corner: bright and warm whatever the site theme, with big things to tap. */
export const Page = styled.div`
  --s-bg: #fff7ea;
  --s-card: #fff;
  --s-ink: #24324a;
  --s-muted: #5d6b82;
  --s-line: #eadfc9;
  --s-accent: #ff7a59;
  --s-teal: #1f9e8f;
  --s-good: #2f9e5b;
  --s-good-bg: #e3f6e9;
  --s-bad: #e5484d;
  --s-bad-bg: #fde7e7;
  min-height: 100vh;
  min-height: 100svh;
  box-sizing: border-box;
  padding: 16px max(16px, env(safe-area-inset-right)) calc(24px + env(safe-area-inset-bottom)) max(16px, env(safe-area-inset-left));
  background: var(--s-bg);
  color: var(--s-ink);
  font-family: var(--font-study), var(--font-sans), system-ui, sans-serif;
  -webkit-tap-highlight-color: transparent;
  @media (min-width: 768px) {
    padding-left: 28px;
    padding-right: 28px;
  }
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  max-width: 1240px;
  margin: 0 auto 16px;
`;

export const Back = styled(Link)`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--s-card);
  border: 2px solid var(--s-line);
  color: var(--s-ink);
  font-size: 24px;
  text-decoration: none;
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 2px;
  }
`;

export const Titles = styled.div`
  flex: 1;
  min-width: 0;
`;

export const SettingsButton = styled.button`
  flex: none;
  align-self: flex-start;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--s-card);
  border: 2px solid var(--s-line);
  font-size: 24px;
  cursor: pointer;
  &[aria-expanded='true'] {
    border-color: var(--s-teal);
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 2px;
  }
`;

export const SettingsPanel = styled.div`
  position: absolute;
  top: 58px;
  right: 0;
  z-index: 10;
  width: min(360px, 100%);
  box-sizing: border-box;
  padding: 18px;
  border-radius: 20px;
  background: var(--s-card);
  border: 2px solid var(--s-line);
  box-shadow: 0 8px 24px rgb(36 50 74 / 15%);
`;

export const SettingsForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  label {
    flex-basis: 100%;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const NameInput = styled.input`
  flex: 1;
  min-width: 0;
  min-height: 52px;
  padding: 0 14px;
  border-radius: 14px;
  border: 2px solid var(--s-line);
  background: #fffaf2;
  color: var(--s-ink);
  font-family: inherit;
  font-size: 20px;
  &:focus {
    outline: none;
    border-color: var(--s-teal);
  }
`;

export const SaveButton = styled.button`
  min-height: 52px;
  padding: 0 20px;
  border: 0;
  border-radius: 26px;
  background: var(--s-teal);
  color: #fff;
  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &:focus-visible {
    outline: 3px solid var(--s-accent);
    outline-offset: 2px;
  }
`;

export const SettingsNote = styled.p`
  margin: 10px 0 0;
  color: var(--s-muted);
  font-size: 14px;
`;

export const Kicker = styled.p`
  margin: 0;
  color: var(--s-muted);
  font-size: 15px;
  font-weight: 500;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: clamp(24px, 4vw, 34px);
  font-weight: 600;
  line-height: 1.15;
`;

export const Main = styled.main`
  max-width: 1240px;
  margin: 0 auto;
  text-align: left;
  hyphens: manual;
`;

export const Empty = styled.p`
  margin: 0;
  padding: 28px 20px;
  border-radius: 20px;
  border: 2px dashed var(--s-line);
  color: var(--s-muted);
  font-size: 20px;
  text-align: center;
`;

export const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Card = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 96px;
  padding: 18px 20px;
  border-radius: 20px;
  background: var(--s-card);
  border: 2px solid var(--s-line);
  box-shadow: 0 4px 0 var(--s-line);
  color: var(--s-ink);
  text-decoration: none;
  transition: transform 0.15s, box-shadow 0.15s;
  ${({ $hidden }) => $hidden && css`
    opacity: 0.6;
    border-style: dashed;
  `}
  &:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 var(--s-line);
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 2px;
  }
`;

export const CardIcon = styled.span`
  flex: none;
  font-size: 40px;
  line-height: 1;
`;

export const CardText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 22px;
  font-weight: 600;
  small {
    color: var(--s-muted);
    font-size: 16px;
    font-weight: 400;
  }
`;

/* A further picture in the same exercise, below the first. */
export const Part = styled.section`
  margin-top: 36px;
  padding-top: 24px;
  border-top: 2px dashed var(--s-line);
`;

export const PartTitle = styled.h2`
  margin: 0 0 6px;
  font-size: clamp(22px, 3.4vw, 28px);
  font-weight: 600;
`;
