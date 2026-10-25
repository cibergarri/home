'use client';

import { useRef, useState } from 'react';

import { speak } from '../speech';
import { SpeakerIcon, WellDone } from '../game';
import { Message, Progress } from '../LabelMap/style';
import { CELL } from '../drawings/DirectionsMap';
import {
  Intro, Layout, Map, Side, Goal, Steps, Step, StepSpeaker, Pad, Arrow, Compass,
} from './style';

const DIRECTIONS = {
  north: { move: [0, -1], arrow: '↑', area: '1 / 2' },
  west: { move: [-1, 0], arrow: '←', area: '2 / 1' },
  east: { move: [1, 0], arrow: '→', area: '2 / 3' },
  south: { move: [0, 1], arrow: '↓', area: '3 / 2' },
};

const squares = n => `${n} ${n === 1 ? 'square' : 'squares'}`;
const centre = ([column, row]) => [column * CELL + CELL / 2, row * CELL + CELL / 2];

function CompassRose() {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <path d="M40,6 L46,34 L74,40 L46,46 L40,74 L34,46 L6,40 L34,34 Z" fill="#f2a24a" stroke="#24324a" strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M40,6 L46,34 L40,40 Z M74,40 L46,46 L40,40 Z M40,74 L34,46 L40,40 Z M6,40 L34,34 L40,40 Z" fill="#5b9fd6" />
      <circle cx={40} cy={40} r={5} fill="#ffd34d" stroke="#24324a" strokeWidth={1.5} />
    </svg>
  );
}

// A map on a grid and a route to follow, a step at a time ("6 squares north"): each press of an
// arrow moves one square, but only the way the step says. A wrong arrow counts as a mistake and
// does not move. After each route, playing again gives the next one.
export default function DirectionsGame({ exercise }) {
  const {
    intro, title, Drawing, start, routes,
  } = exercise;
  const [routeIndex, setRouteIndex] = useState(0);
  const [trail, setTrail] = useState([start]);
  const [stepIndex, setStepIndex] = useState(0);
  const [moved, setMoved] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [wrong, setWrong] = useState(null);
  const [message, setMessage] = useState(null);
  const wrongTimer = useRef(null);

  const route = routes[routeIndex];
  const finished = stepIndex === route.steps.length;
  const step = route.steps[stepIndex];
  const position = trail[trail.length - 1];
  const [x, y] = centre(position);

  const press = (direction) => {
    if (finished) return;
    if (direction !== step.direction) {
      setMistakes(count => count + 1);
      setWrong(direction);
      clearTimeout(wrongTimer.current);
      wrongTimer.current = setTimeout(() => setWrong(null), 600);
      setMessage(`Not that way! Go ${squares(step.squares - moved)} ${step.direction}.`);
      return;
    }
    const [dx, dy] = DIRECTIONS[direction].move;
    setTrail(current => [...current, [position[0] + dx, position[1] + dy]]);
    setMessage(null);
    if (moved + 1 === step.squares) {
      setStepIndex(index => index + 1);
      setMoved(0);
    } else {
      setMoved(count => count + 1);
    }
  };

  const nextRoute = () => {
    setRouteIndex(index => (index + 1) % routes.length);
    setTrail([start]);
    setStepIndex(0);
    setMoved(0);
    setMistakes(0);
    setMessage(null);
  };

  return (
    <>
      <Intro>
        <p>{intro}</p>
        <StepSpeaker type="button" onClick={() => speak(intro)} aria-label="Listen to the cardinal points">
          <SpeakerIcon />
        </StepSpeaker>
      </Intro>
      <Layout>
        <Map>
          <svg viewBox="0 0 640 720" role="img" aria-label={title}>
            <Drawing />
            <polyline
              points={trail.map(cell => centre(cell).join(',')).join(' ')}
              fill="none"
              stroke="#ef6a3a"
              strokeWidth={8}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g style={{ transform: `translate(${x}px, ${y}px)`, transition: 'transform 0.25s' }}>
              <circle r={22} fill="#ef6a3a" opacity={0.3} />
              <circle r={15} fill="#ef6a3a" stroke="#fff" strokeWidth={4} />
            </g>
          </svg>
        </Map>

        <Side>
          <Goal>{`Follow the instructions to get to ${route.goal}.`}</Goal>
          <Steps aria-label="Instructions">
            {route.steps.map(({ direction, squares: count }, index) => {
              let state = 'next';
              if (index < stepIndex) state = 'done';
              else if (index === stepIndex) state = 'now';
              const text = `${squares(count)} ${direction}`;
              return (
                <Step key={`${index}-${text}`} $state={state} aria-current={state === 'now' ? 'step' : undefined}>
                  <span>{state === 'done' ? `✓ ${text}` : text}</span>
                  {state === 'now' && <small>{`${moved} of ${count}`}</small>}
                  <StepSpeaker type="button" onClick={() => speak(text)} aria-label={`Listen to ${text}`}>
                    <SpeakerIcon />
                  </StepSpeaker>
                </Step>
              );
            })}
          </Steps>

          {finished ? (
            <>
              <Message $kind="right">{`🎉 You got to ${route.goal}!`}</Message>
              <WellDone mistakes={mistakes} onAgain={nextRoute} />
            </>
          ) : (
            <>
              <Pad role="group" aria-label="Arrows">
                {Object.entries(DIRECTIONS).map(([direction, { arrow, area }]) => (
                  <Arrow
                    key={direction}
                    type="button"
                    onClick={() => press(direction)}
                    aria-label={direction}
                    $area={area}
                    $wrong={wrong === direction}
                  >
                    <span aria-hidden="true">{arrow}</span>
                    {direction.toUpperCase()}
                  </Arrow>
                ))}
                <Compass><CompassRose /></Compass>
              </Pad>
              <div aria-live="polite">
                {message
                  ? <Message $kind="wrong">{message}</Message>
                  : <Progress>{`Step ${stepIndex + 1} of ${route.steps.length}`}</Progress>}
              </div>
            </>
          )}
        </Side>
      </Layout>
    </>
  );
}
