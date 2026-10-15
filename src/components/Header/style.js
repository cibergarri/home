'use client';

import styled, { keyframes } from 'styled-components';

export const HeaderBar = styled.header`
  background: linear-gradient(color-mix(in srgb, var(--c-background) 87%, transparent) 80%, transparent 100%);
  color: var(--c-primary);
  z-index: 1100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 16px 24px;
  @media (min-width: 768px) {
    padding: 16px 40px 32px;
  }
`;

export const Toolbar = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const Title = styled.a`
  color: var(--c-primary);
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.01em;
  white-space: nowrap;
  transition: color 2s;
  @media (min-width: 768px) {
    font-size: 17px;
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 4px;
    border-radius: 2px;
  }
`;

export const Blank = styled.div`
  flex-grow: 1;
`;

export const LinksContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0;
  @media (min-width: 768px) {
    gap: 10px;
  }
  /* The same links live in the Contact section; the bar has no room for them on narrow phones. */
  @media (max-width: 479px) {
    display: none;
  }
`;

export const SocialLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  display: inline-flex;
  padding: 5px;
  border-radius: 6px;
  &:focus-visible {
    outline: 2px solid var(--c-accent);
  }
`;

export const SVG = styled.svg`
  transition: all 2s;
  width: 20px;
  height: 20px;
  fill: var(--c-primary);
  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
  ${SocialLink}:hover & {
    transition: all 0.3s;
    transform: scale(1.2);
    fill: var(--c-secondary);
  }
`;

export const Hero = styled.div`
  /* Two fades over the image: top and bottom edges, then left and right edges. */
  background:
    linear-gradient(
      var(--c-background) 10%,
      color-mix(in srgb, var(--c-background) 53%, transparent) 15%,
      color-mix(in srgb, var(--c-background) 53%, transparent) 85%,
      var(--c-background) 90%
    ),
    linear-gradient(
      to right,
      var(--c-background) 0%,
      transparent 12%,
      transparent 88%,
      var(--c-background) 100%
    ),
    var(--hero-image);
  /* The image is 1920px wide; on wider screens scale it up so it never shows its edges. */
  background-size: auto, auto, max(100%, 1920px) auto;
  background-position: center bottom;
  background-repeat: no-repeat;
  height: 100vh;
  max-height: 780px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
  /* On phones a full-height hero is mostly empty space, and 100vh hides behind the
     browser chrome on iOS, so use the small viewport height and a lower cap. */
  @media (max-width: 767px) {
    height: min(100svh, 640px);
    min-height: 520px;
    text-align: left;
    /* A fixed 1000px picture, centred, so it looks the same on every phone and only its sides get
       clipped on narrower ones. It is 16:9, so it is 563px tall; the vertical fade ends exactly
       at its bottom edge so the smaller image has no hard border. */
    --hero-image-height: 563px;
    background:
      linear-gradient(
        var(--c-background) 10%,
        color-mix(in srgb, var(--c-background) 53%, transparent) 15%,
        color-mix(in srgb, var(--c-background) 53%, transparent) calc(var(--hero-image-height) - 120px),
        var(--c-background) var(--hero-image-height)
      ),
      linear-gradient(
        to right,
        var(--c-background) 0%,
        transparent 6%,
        transparent 94%,
        var(--c-background) 100%
      ),
      var(--hero-image);
    background-size: auto, auto, 1000px auto;
    background-position: center top;
  }
`;

export const HeroTitle = styled.div`
  color: var(--c-primary);
  transition: all 2s;
  font-weight: 700;
  letter-spacing: -0.02em;
  font-size: clamp(30px, 7vw, 60px);
  line-height: 1.1;
  padding: 0 clamp(48px, 10vw, 160px) 16px 0;
  margin: 0;
  /* Fixed to the width of the widest final line ("I <heart \>" plus the caret),
     so the block does not shift while the typewriter grows and shrinks. */
  box-sizing: content-box;
  width: 4.6em;
  white-space: nowrap; /* the typed word must never drop below the "I" */
  align-self: flex-end;
  text-align: left;
  /* On phones the block sits on the body gutter, lined up with the headings below it. */
  @media (max-width: 767px) {
    font-size: clamp(40px, 11vw, 60px);
    padding: 0 24px 12px;
    align-self: flex-start;
  }
`;

/* The typing effect. The end widths are the measured widths of each word in
   Instrument Sans, in em so they scale with the title. */
const typeHate = keyframes`
  from { width: 0 }
  to { width: 3.75em }
`;

const typeHeart = keyframes`
  from { width: 0 }
  to { width: 4.2em }
`;

/* The typewriter cursor effect */
const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #ff0000; }
`;

const disappear = keyframes`
  from {
    opacity: 1;
    width: fit-content;
  }
  to {
    opacity: 0;
    width: 0%;
  }
`;

export const TypeWriterContainer = styled.div`
  display: inline-flex;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #ff0000; /* The typewriter cursor */
  white-space: nowrap;
  margin-left: 0.25em;
  animation:
    ${typeHate} 1.5s steps(8, end) 3s both,
    ${typeHate} 1.5s steps(8, end) 6s reverse forwards,
    ${typeHeart} 1.5s steps(9, end) 8s forwards,
    ${blinkCaret} .75s step-end infinite;
`;

export const Hate = styled.div`
  display: inline;
  color: #ff0000;
  animation: ${disappear} .5s steps(1, end) 7.5s 1 forwards;
`;

export const Heart = styled.div`
  display: inline;
  color: #ff0000;
  animation: ${disappear} .5s steps(1, end) 6.5s 1 reverse both;
`;

const appear = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

export const HeroSubtitle = styled.div`
  color: var(--c-primary);
  transition: all 2s;
  font-weight: 700;
  letter-spacing: -0.01em;
  font-size: clamp(17px, 3.6vw, 32px);
  padding: 0 clamp(16px, 2.5vw, 40px) 0 0;
  height: 140px;
  max-width: 500px;
  align-self: flex-end;
  animation: ${appear} 4.5s 10s both;
  @media (max-width: 767px) {
    height: auto;
    padding: 0 24px 56px;
    align-self: flex-start;
  }
`;
