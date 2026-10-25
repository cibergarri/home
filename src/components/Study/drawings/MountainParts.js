// The parts of a mountain, seen from the side in a 1000 × 640 box: a big mountain on the left with
// its peak, slope and foot, a second one on the right, and the valley at the bottom between them.

import { Cloud } from './parts';

const LEFT = 'M-40,565 C40,563 110,535 150,465 L300,100 L440,465 C455,505 475,550 500,580 Z';
const RIGHT = 'M500,580 C525,550 545,505 560,470 L720,150 L860,470 C890,535 960,563 1040,565 Z';
// The low land where the two mountains' sides come down and meet, green and with a river.
const VALLEY = 'M415,400 L440,465 C455,505 475,550 500,580 C525,550 545,505 560,470 L595,400 C560,420 450,420 415,400 Z';
const RIVER = 'M500,482 C494,520 508,550 500,585 C494,610 506,628 503,640';
const GROUND = 'M0,556 H468 C482,556 492,578 500,586 C508,578 518,556 532,556 H1000 V640 H0 Z';

const PINES = [[452, 450], [548, 452], [470, 512], [530, 514], [880, 520], [930, 545]];
const BUSHES = [[40, 600], [260, 610], [700, 615], [860, 600], [960, 620]];

function Pine({ x, y }) {
  return (
    <g>
      <rect x={x - 2} y={y + 6} width={4} height={8} fill="#6b4a2b" />
      <path d={`M${x},${y - 22} L${x + 11},${y + 7} H${x - 11} Z`} fill="#2f7a3a" />
    </g>
  );
}

export default function MountainParts() {
  return (
    <g>
      <defs>
        <linearGradient id="parts-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9fd8f7" />
          <stop offset="1" stopColor="#e4f5fd" />
        </linearGradient>
      </defs>

      <rect width="1000" height="640" fill="url(#parts-sky)" />
      <Cloud x={560} y={80} />
      <Cloud x={900} y={60} />

      {/* The mountain on the right, a little further away. */}
      <path d={RIGHT} fill="#9aa6bd" stroke="#7d899f" strokeWidth={2} strokeLinejoin="round" />
      <path d="M690,210 L720,150 L746,210 L733,200 L720,214 L706,200 Z" fill="#fff" />

      {/* The big mountain on the left, its sunny slope lighter than its shady one. */}
      <path d={LEFT} fill="#a08a72" stroke="#7d6a57" strokeWidth={2} strokeLinejoin="round" />
      <path d="M300,100 L440,465 C455,505 475,550 500,580 H300 Z" fill="#86725f" opacity={0.5} />
      <path d="M271,170 L300,100 L327,170 L313,160 L300,174 L287,160 Z" fill="#fff" />

      {/* The valley between the two mountains, with a river along it, and the flat land around. */}
      <path d={VALLEY} fill="#8cc96a" stroke="#6fae50" strokeWidth={2} strokeLinejoin="round" />
      <path d={GROUND} fill="#a8d97f" />
      <path d={RIVER} fill="none" stroke="#3f95c8" strokeWidth={12} strokeLinecap="round" />
      <path d={RIVER} fill="none" stroke="#5bb3e6" strokeWidth={7} strokeLinecap="round" />

      {PINES.map(([x, y]) => <Pine key={`${x},${y}`} x={x} y={y} />)}
      {BUSHES.map(([x, y]) => <circle key={`${x},${y}`} cx={x} cy={y} r={10} fill="#6fae50" />)}
    </g>
  );
}
