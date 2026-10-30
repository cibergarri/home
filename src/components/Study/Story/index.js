'use client';

import { useEffect, useRef, useState } from 'react';

import Explain from '../Explain';
import { speak } from '../speech';
import { SpeakerIcon } from '../game';
import {
  Instructions, Board, Scene, Side,
} from '../LabelMap/style';
import {
  Card, Where, StepTitle, Text, Listen, Nav, BackButton, NextButton, Dots,
} from './style';

const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

function Boat({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`} aria-hidden="true">
      <path d="M-16,-2 H16 L9,9 H-9 Z" fill="#fff" stroke="#24324a" strokeWidth={2} strokeLinejoin="round" />
      <path d="M0,-3 V-24 L13,-5 Z" fill="#ff7a59" stroke="#24324a" strokeWidth={2} strokeLinejoin="round" />
    </g>
  );
}

function Tag({ text, at: [x, y] }) {
  const width = text.length * 13 + 28;
  return (
    <g>
      <rect x={x - width / 2} y={y - 18} width={width} height={36} rx={8} fill="#1f9e8f" stroke="#fff" strokeWidth={2} />
      <text x={x} y={y + 7} textAnchor="middle" fill="#fff" fontSize={21} fontWeight={600} fontFamily="inherit">{text}</text>
    </g>
  );
}

// A picture told in steps: each step has a card to read (or hear), may light up part of the picture
// (`focus`), and may send a little boat along a stretch of it (`path`) at its own `speed`, in
// drawing units a second. The steps go forward with Next and back with Back.
export default function Story({ exercise }) {
  const {
    title, instructions, width, height, Drawing, start, steps,
  } = exercise;
  const [step, setStep] = useState(0);
  const [boat, setBoat] = useState(start);
  const paths = useRef([]);
  // Going back puts the boat at the end of that step's stretch at once instead of sailing it again.
  const jump = useRef(false);
  const current = steps[step];
  const last = step === steps.length - 1;

  useEffect(() => {
    const element = paths.current[step];
    if (!element || typeof element.getTotalLength !== 'function') return undefined;
    const { speed } = steps[step];
    const length = element.getTotalLength();
    const instant = jump.current || reducedMotion();
    jump.current = false;
    let frame;
    let begin;
    const sail = (time) => {
      begin ??= time;
      const along = instant ? length : Math.min(length, ((time - begin) / 1000) * speed);
      const point = element.getPointAtLength(along);
      setBoat([point.x, point.y]);
      if (along < length) frame = requestAnimationFrame(sail);
    };
    frame = requestAnimationFrame(sail);
    return () => cancelAnimationFrame(frame);
  }, [step, steps]);

  const goTo = (next) => {
    if (!steps[next].path) setBoat(start);
    setStep(next);
  };

  const back = () => {
    jump.current = true;
    goTo(step - 1);
  };

  return (
    <>
      <Instructions>{instructions}</Instructions>
      <Board>
        <Scene $ratio={`${width} / ${height}`}>
          <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={title}>
            <Drawing focus={current.focus} />
            {steps.map(({ path }, index) => path && (
              <path key={path} ref={(element) => { paths.current[index] = element; }} d={path} fill="none" stroke="none" />
            ))}
            {current.tags?.map(tag => <Tag key={tag.text} {...tag} />)}
            <Boat x={boat[0]} y={boat[1]} />
          </svg>
        </Scene>

        <Side>
          <Card aria-live="polite">
            {current.where && <Where>{current.where}</Where>}
            <StepTitle>
              {current.title}
              {' '}
              <Explain word={current.title} />
            </StepTitle>
            <Text>{current.text}</Text>
            <Listen type="button" onClick={() => speak(`${current.title}. ${current.text}`)}>
              <SpeakerIcon />
              Listen
            </Listen>
          </Card>
          <Nav>
            <BackButton type="button" onClick={back} disabled={step === 0}>← Back</BackButton>
            <NextButton type="button" onClick={() => goTo(last ? 0 : step + 1)}>
              {last ? 'Again ↺' : 'Next →'}
            </NextButton>
          </Nav>
          <Dots aria-label={`Step ${step + 1} of ${steps.length}`}>
            {steps.map(({ title: name }, index) => (
              <li key={name} aria-current={index === step ? 'step' : undefined} />
            ))}
          </Dots>
        </Side>
      </Board>
    </>
  );
}
