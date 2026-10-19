'use client';

import styled, { keyframes } from 'styled-components';

export const HeaderBar = styled.header`
  /* Frosted, but see-through enough to show what passes behind; the bottom edge fades out
     so the blur has no hard line. */
  background: color-mix(in srgb, var(--c-background) 60%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  mask-image: linear-gradient(black calc(100% - 20px), transparent);
  color: var(--c-primary);
  z-index: 1100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 16px 28px;
  @media (min-width: 768px) {
    padding: 14px 40px 32px;
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
  display: inline-block; /* a transform needs a box, inline text has none */
  transform-origin: left center;
  /* Like the social icons: quick to colour and grow on hover, slow to settle back. */
  transition: all 2s;
  @media (min-width: 768px) {
    font-size: 17px;
  }
  &:hover {
    transition: all 0.3s;
    transform: scale(1.2);
    color: var(--c-secondary);
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
  /* Two fades over the image: the bottom edge, then the left and right edges. */
  background:
    linear-gradient(
      color-mix(in srgb, var(--c-background) 53%, transparent) 0%,
      color-mix(in srgb, var(--c-background) 53%, transparent) 55%,
      var(--c-background) 100%
    ),
    linear-gradient(
      to right,
      var(--c-background) 0%,
      transparent 12%,
      transparent 88%,
      var(--c-background) 100%
    ),
    var(--hero-image);
  /* The image is 1920px wide; on wider screens scale it up so it never shows its edges.
     The word in the picture sits in its middle, so centring keeps it in view at every width;
     lifting it clears the bottom-left corner for the title. */
  background-size: auto, auto, max(100%, 1920px) auto;
  background-position: center 80%;
  background-repeat: no-repeat;
  height: 100vh;
  max-height: 780px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* Lined up with the content below, whose column is 1040px wide with 40px gutters. */
  --hero-gutter: max(40px, calc((100% - 1040px) / 2 + 40px));
  /* On phones a full-height hero is mostly empty space, and 100vh hides behind the
     browser chrome on iOS, so use the small viewport height and a lower cap. */
  @media (max-width: 767px) {
    height: min(100svh, 600px);
    min-height: 500px;
    /* A fixed 1000px picture, centred, so it looks the same on every phone and only its sides get
       clipped on narrower ones. It is 16:9, so it is 563px tall; the bottom fade ends exactly
       at its bottom edge so the smaller image has no hard border. */
    --hero-image-height: 563px;
    background:
      linear-gradient(
        color-mix(in srgb, var(--c-background) 53%, transparent) 0%,
        color-mix(in srgb, var(--c-background) 53%, transparent) calc(var(--hero-image-height) - 260px),
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
  padding: 0 0 16px var(--hero-gutter);
  margin: 0;
  /* Fixed to the width of the widest final line ("I <heart \>", the gap and the caret),
     so the block does not shift while the typewriter grows and shrinks. */
  box-sizing: content-box;
  width: 5.2em;
  white-space: nowrap; /* the typed word must never drop below the "I" */
  align-self: flex-start;
  text-align: left;
  /* On phones the block sits on the body gutter, lined up with the headings below it. */
  @media (max-width: 767px) {
    font-size: clamp(40px, 11vw, 60px);
    padding: 0 24px 12px;
  }
`;

/* The typing effect. The end widths are the measured widths of each word in
   Instrument Sans plus a 0.5em gap before the caret, in em so they scale with the title. */
const typeHate = keyframes`
  from { width: 0 }
  to { width: 4.25em }
`;

const typeHeart = keyframes`
  from { width: 0 }
  to { width: 4.7em }
`;

/* The typewriter cursor effect */
const blinkCaret = keyframes`
  from, to { background-color: transparent }
  50% { background-color: var(--c-heart); }
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

/* The cursor fades away once the typing is over. It works on opacity while the blink works on
   colour, so the cursor keeps blinking as it goes. */
const fadeCaret = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`;

/* Two beats, then a rest, every 3 seconds. */
const heartbeat = keyframes`
  0%, 40%, 100% { transform: scale(1) }
  10%, 30% { transform: scale(1.12) }
  20% { transform: scale(1) }
`;

export const TypeWriterContainer = styled.div`
  display: inline-flex;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  /* Room inside the clipped box for the beating word to grow into: above, below and to the
     left; the gap before the caret covers the right. The margins give the room back. */
  padding: 0.1em 0 0.1em 0.3em;
  margin: -0.1em 0 -0.1em -0.05em;
  position: relative; /* anchors the cursor */
  white-space: nowrap;
  text-shadow: var(--heart-glow);
  animation:
    ${typeHate} 1.5s steps(8, end) 3s both,
    ${typeHate} 1.5s steps(8, end) 6s reverse forwards,
    ${typeHeart} 1.5s steps(9, end) 8s forwards;
  /* The typewriter cursor: a bar on the right edge of the revealed box. */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: .15em;
    background-color: var(--c-heart);
    animation:
      ${blinkCaret} 1.1s step-end infinite,
      ${fadeCaret} 4.5s ease 10s forwards; /* same timing as the subtitle fading in */
  }
`;

export const Hate = styled.div`
  display: inline;
  color: var(--c-heart);
  animation: ${disappear} .5s steps(1, end) 7.5s 1 forwards;
`;

/* The opposite of disappear, for the second word. */
const reveal = keyframes`
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: fit-content;
  }
`;

export const Heart = styled.div`
  display: inline;
  color: var(--c-heart);
  /* Tapped five times it opens a game (see Header): no double-tap zoom, selection or flash. */
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  /* Hidden outright until "hate" has gone, not through an animation fill: its "<" sits in the
     gap right after "hate", and browsers differ on how they fill a reversed animation. */
  opacity: 0;
  width: 0;
  transform-origin: center;
  animation:
    ${reveal} .5s steps(1, start) 6.5s forwards,
    ${heartbeat} 3s ease-in-out 10.5s infinite; /* a beat after the word is typed */
`;

/* Holds the typed word and the hint above it; the word's own box clips, so the hint lives here. */
export const HeartSpot = styled.span`
  position: relative;
  display: inline-flex;
`;

/* A clue to the game behind the heart, written like a code comment: shown after a pause
   while the heart is hovered, and for a moment after a tap on touch screens (see Header). */
export const HeartHint = styled.span`
  position: absolute;
  bottom: 100%;
  left: 0.3em;
  margin-bottom: 4px;
  padding: 4px 8px;
  border: 1px solid var(--c-heart);
  border-radius: 6px;
  background: color-mix(in srgb, var(--c-background) 90%, transparent);
  color: var(--c-heart);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.3;
  /* One line where it fits; on narrow phones it wraps before it reaches the social dock. */
  white-space: normal; /* the title it sits in never wraps */
  width: max-content;
  max-width: calc(100vw - 104px);
  pointer-events: none;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.6s, transform 0.6s;
  @media (hover: hover) {
    ${HeartSpot}:has(${Heart}:hover) & {
      transition-duration: 0.25s;
      transition-delay: 3s; /* only for someone who lingers on the heart */
      opacity: 1;
      transform: none;
    }
  }
  ${HeartSpot}[data-hint] & {
    transition-duration: 0.25s;
    transition-delay: 3s; /* only for someone who lingers on the heart */
    opacity: 1;
    transform: none;
  }
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
  padding: 0 0 0 var(--hero-gutter);
  height: 140px;
  max-width: 500px;
  align-self: flex-start;
  animation: ${appear} 4.5s 10s both;
  @media (max-width: 767px) {
    height: auto;
    padding: 0 24px 40px;
  }
`;
