'use client';

import styled, { keyframes } from 'styled-components';

import { SmallHouse } from './parts';

// A river from its source to its mouth, seen from above at a slant, in a 1000 × 640 box, in three
// bands: the upper course in the mountains at the top, the middle course across the plains, where
// a tributary joins it, and the lower course at the coast, where it reaches the sea.
// It is thin and quick at the top and grows wider and slower on its way down: the ripples on the
// water show its speed. With `focus` set to one course, the other two fade into the background.

export const UPPER = 'M640,60 C622,90 662,110 640,140 L640,170 L640,205';
export const MIDDLE = 'M640,205 C640,240 520,230 470,270 C420,310 470,350 560,340 C660,330 700,370 660,410';
export const LOWER = 'M660,410 C630,440 520,430 500,470 C480,510 560,530 600,570 L625,605';
const TRIBUTARY = 'M1000,236 C930,256 860,300 780,320 C740,330 712,346 694,364';

const BANDS = {
  upper: { y: 0, height: 195 },
  middle: { y: 195, height: 217 },
  lower: { y: 412, height: 228 },
};

const flow = keyframes`
  to { stroke-dashoffset: -40; }
`;

/* Ripples drift down the river, faster where the river is quicker. */
const Ripples = styled.path`
  fill: none;
  stroke: #fff;
  stroke-linecap: round;
  stroke-dasharray: 6 34;
  opacity: 0.85;
  animation: ${flow} ${({ $seconds }) => $seconds}s linear infinite;
`;

const FIELDS = [
  'M120,300 L250,292 L268,340 L132,350 Z',
  'M140,358 L272,348 L290,396 L152,408 Z',
  'M280,290 L380,286 L396,330 L292,336 Z',
  'M800,380 L900,374 L916,410 L812,416 Z',
];
const FIELD_COLOURS = ['#f2d46b', '#c99a62', '#d6e97e', '#f2d46b'];

const TREES = [
  [560, 250], [585, 262], [740, 240], [760, 252], [380, 380], [400, 392], [720, 300],
  [300, 470], [330, 486], [880, 470], [910, 480],
];

const TOWN = [
  [740, 470, '#fff4e0', '#d9634a'], [766, 462, '#ffe9c7', '#c95440'], [792, 474, '#fff4e0', '#e07a4a'],
  [752, 492, '#ffe9c7', '#e07a4a'], [780, 498, '#fff4e0', '#d9634a'], [808, 494, '#ffe9c7', '#c95440'],
];

const DELTA = [
  { cx: 588, cy: 612, rx: 18, ry: 8 },
  { cx: 650, cy: 618, rx: 20, ry: 9 },
  { cx: 618, cy: 630, rx: 14, ry: 6 },
];

function Tree({ x, y }) {
  return (
    <g>
      <rect x={x - 2} y={y + 4} width={4} height={8} fill="#7a5532" />
      <circle cx={x} cy={y} r={9} fill="#3f8f3a" />
    </g>
  );
}

function Water({
  d, width, seconds,
}) {
  return (
    <g>
      <path d={d} fill="none" stroke="#3f95c8" strokeWidth={width + 6} strokeLinecap="round" strokeLinejoin="round" />
      <path d={d} fill="none" stroke="#6cc0ec" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
      <Ripples d={d} strokeWidth={Math.max(2, width / 8)} $seconds={seconds} />
    </g>
  );
}

export default function River({ focus }) {
  return (
    <g>
      <defs>
        <linearGradient id="river-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9fd8f7" />
          <stop offset="1" stopColor="#d9f1fc" />
        </linearGradient>
      </defs>

      {/* Upper course: sky and mountains. */}
      <rect width="1000" height="200" fill="url(#river-sky)" />
      <path d="M0,200 L0,110 L90,40 L170,100 L260,30 L360,105 L450,45 L560,110 L650,25 L760,100 L860,35 L940,90 L1000,60 V200 Z" fill="#9aa6bd" stroke="#7d899f" strokeWidth={2} strokeLinejoin="round" />
      <path d="M72,54 L90,40 L108,54 L98,52 L90,58 L82,52 Z M240,45 L260,30 L280,45 L270,43 L260,50 L250,43 Z M630,40 L650,25 L670,40 L660,38 L650,45 L640,38 Z M840,50 L860,35 L880,50 L870,48 L860,55 L850,48 Z" fill="#fff" />
      <path d="M0,200 C150,150 300,175 450,150 C560,135 720,150 820,140 C900,132 960,150 1000,145 V200 Z" fill="#7cb661" />

      {/* Middle and lower course: the plains, then the coast. */}
      <rect y={195} width={1000} height={445} fill="#b9e08e" />
      {FIELDS.map((d, index) => <path key={d} d={d} fill={FIELD_COLOURS[index]} stroke="#fff" strokeWidth={2} />)}

      {/* The sea, with a sandy coast. */}
      <path d="M0,566 C200,578 400,594 560,594 C700,594 850,580 1000,566 V640 H0 Z" fill="#f4d98e" />
      <path d="M0,578 C200,590 400,604 560,604 C700,604 850,592 1000,578 V640 H0 Z" fill="#4aa3d6" />
      <path d="M120,616 q8,-6 16,0 t16,0 M820,612 q8,-6 16,0 t16,0 M380,626 q8,-6 16,0 t16,0" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" opacity={0.8} />

      {/* A rocky step for the waterfall in the upper course. */}
      <path d="M598,168 H684 L694,208 H588 Z" fill="#a08a72" stroke="#7d6a57" strokeWidth={2} strokeLinejoin="round" />

      {/* The river and its tributary, wider and slower on the way down. */}
      <Water d={TRIBUTARY} width={8} seconds={1.8} />
      <Water d={LOWER} width={30} seconds={4} />
      <Water d={MIDDLE} width={18} seconds={2} />
      <Water d={UPPER} width={7} seconds={0.5} />
      <path d="M634,172 V206 M640,172 V206 M646,172 V206" stroke="#fff" strokeWidth={2} strokeDasharray="4 3" opacity={0.9} />
      {DELTA.map(({
        cx, cy, rx, ry,
      }) => <ellipse key={cx} cx={cx} cy={cy} rx={rx} ry={ry} fill="#d9c27a" />)}
      <circle cx={640} cy={60} r={6} fill="#6cc0ec" stroke="#3f95c8" strokeWidth={2} />

      {TREES.map(([x, y]) => <Tree key={`${x},${y}`} x={x} y={y} />)}
      {TOWN.map(([x, y, wall, roof]) => <SmallHouse key={`${x},${y}`} x={x} y={y} wall={wall} roof={roof} />)}

      {/* Everything but the course in focus fades back. */}
      {Object.entries(BANDS).map(([name, { y, height }]) => (
        <rect
          key={name}
          y={y}
          width={1000}
          height={height}
          fill="#fff7ea"
          style={{ opacity: focus && focus !== name ? 0.62 : 0, transition: 'opacity 0.6s' }}
        />
      ))}
    </g>
  );
}
