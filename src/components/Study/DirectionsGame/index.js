'use client';

import { useRef, useState } from 'react';

import { speak } from '../speech';
import { useStrings } from '../language';
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
// The grid's squares are `cell` units wide in a drawing `width` × `height`; a route starts at its
// own `start` or the exercise's, and may say what to do (`task`) and what happened (`done`)
// instead of naming a place to get to (`goal`). With `marker: 'ring'` what is under the marker
// stays visible, and with `compass: false` there is no compass between the arrows.
export default function DirectionsGame({ exercise }) {
  const {
    intro, title, Drawing, routes, cell = CELL, width = 640, height = 720, marker, compass = true,
  } = exercise;
  const text = useStrings();
  const startOf = route => route.start ?? exercise.start;
  const centre = ([column, row]) => [column * cell + cell / 2, row * cell + cell / 2];
  const [routeIndex, setRouteIndex] = useState(0);
  const [trail, setTrail] = useState([startOf(routes[0])]);
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
      setMessage(text.wrongWay(step.squares - moved, text.directions[step.direction]));
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
    const next = (routeIndex + 1) % routes.length;
    setRouteIndex(next);
    setTrail([startOf(routes[next])]);
    setStepIndex(0);
    setMoved(0);
    setMistakes(0);
    setMessage(null);
  };

  return (
    <>
      <Intro>
        <p>{intro}</p>
        <StepSpeaker type="button" onClick={() => speak(intro, text.lang)} aria-label={text.listenToIntro}>
          <SpeakerIcon />
        </StepSpeaker>
      </Intro>
      <Layout>
        <Map $ratio={width / height}>
          <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={title}>
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
              {marker === 'ring' ? (
                <circle r={cell * 0.42} fill="none" stroke="#ef6a3a" strokeWidth={6} />
              ) : (
                <>
                  <circle r={22} fill="#ef6a3a" opacity={0.3} />
                  <circle r={15} fill="#ef6a3a" stroke="#fff" strokeWidth={4} />
                </>
              )}
            </g>
          </svg>
        </Map>

        <Side>
          <Goal>{route.task ?? text.goal(route.goal)}</Goal>
          <Steps aria-label={text.instructions}>
            {route.steps.map(({ direction, squares: count }, index) => {
              let state = 'next';
              if (index < stepIndex) state = 'done';
              else if (index === stepIndex) state = 'now';
              const words = text.move(count, text.directions[direction]);
              return (
                <Step key={`${index}-${words}`} $state={state} aria-current={state === 'now' ? 'step' : undefined}>
                  <span>{state === 'done' ? `✓ ${words}` : words}</span>
                  {state === 'now' && <small>{`${moved} of ${count}`}</small>}
                  <StepSpeaker type="button" onClick={() => speak(words, text.lang)} aria-label={text.listenTo(words)}>
                    <SpeakerIcon />
                  </StepSpeaker>
                </Step>
              );
            })}
          </Steps>

          {finished ? (
            <>
              <Message $kind="right">{route.done ?? text.arrived(route.goal)}</Message>
              <WellDone mistakes={mistakes} onAgain={nextRoute} />
            </>
          ) : (
            <>
              <Pad role="group" aria-label={text.arrows}>
                {Object.entries(DIRECTIONS).map(([direction, { arrow, area }]) => (
                  <Arrow
                    key={direction}
                    type="button"
                    onClick={() => press(direction)}
                    aria-label={text.directions[direction]}
                    $area={area}
                    $wrong={wrong === direction}
                  >
                    <span aria-hidden="true">{arrow}</span>
                    {text.directions[direction].replace(/^la /, '').toUpperCase()}
                  </Arrow>
                ))}
                {compass && <Compass><CompassRose /></Compass>}
              </Pad>
              <div aria-live="polite">
                {message
                  ? <Message $kind="wrong">{message}</Message>
                  : <Progress>{text.step(stepIndex + 1, route.steps.length)}</Progress>}
              </div>
            </>
          )}
        </Side>
      </Layout>
    </>
  );
}
