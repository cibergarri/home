// A mountain landscape seen from the side, in a 1000 × 640 box: a mountain range at the back and a
// valley between two slopes in front, with a river along its floor. A small village sits by the
// river, a bridge crosses it, and a narrow road zigzags up the right slope into a tunnel.

import { Cloud, SmallHouse } from './parts';

const RANGE = 'M0,305 L70,172 L130,232 L210,112 L290,212 L370,132 L450,222 L520,92 L610,202 L690,122 L770,212 L850,102 L930,192 L1000,152 V305 Z';
const PEAKS = [[210, 112], [370, 132], [520, 92], [690, 122], [850, 102]];

const LEFT_SLOPE = 'M0,180 C120,200 260,280 400,330 C330,420 260,540 230,640 H0 Z';
const RIGHT_SLOPE = 'M1000,170 C880,190 740,280 600,330 C680,420 760,540 790,640 H1000 Z';

const RIVER = 'M500,318 C480,380 540,430 502,500 C470,560 522,600 512,640';
const ROAD = 'M445,478 L482,500 L530,500 C590,505 650,520 705,545 L880,505 L742,460 L880,410 L782,360 L860,320';

const VILLAGE = [
  [370, 448, '#fff4e0', '#d9634a'], [398, 438, '#ffe9c7', '#c95440'], [426, 452, '#fff4e0', '#e07a4a'],
  [384, 470, '#ffe9c7', '#e07a4a'], [414, 476, '#fff4e0', '#d9634a'],
];

const PINES = [
  [60, 262], [150, 284], [250, 318], [52, 470], [140, 590], [62, 610], [250, 520],
  [960, 240], [980, 330], [940, 440], [980, 520],
];

function Pine({ x, y }) {
  return (
    <g>
      <rect x={x - 3} y={y + 8} width={6} height={10} fill="#6b4a2b" />
      <path d={`M${x},${y - 30} L${x + 16},${y + 10} H${x - 16} Z`} fill="#2f7a3a" />
      <path d={`M${x},${y - 40} L${x + 12},${y - 10} H${x - 12} Z`} fill="#3a8f45" />
    </g>
  );
}

const snowCap = ([x, y]) => `M${x - 26},${y + 34} L${x},${y} L${x + 26},${y + 34} L${x + 12},${y + 28} L${x},${y + 38} L${x - 12},${y + 28} Z`;

export default function MountainLandscape() {
  return (
    <g>
      <defs>
        <linearGradient id="mountain-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9fd8f7" />
          <stop offset="1" stopColor="#e4f5fd" />
        </linearGradient>
      </defs>

      <rect width="1000" height="640" fill="url(#mountain-sky)" />
      <Cloud x={110} y={70} />
      <Cloud x={720} y={50} />

      {/* The mountain range: a chain of snowy peaks at the back. */}
      <path d={RANGE} fill="#8f9bb3" stroke="#76829b" strokeWidth={2} strokeLinejoin="round" />
      {PEAKS.map(peak => <path key={peak.join()} d={snowCap(peak)} fill="#fff" />)}

      {/* The valley floor, with the river along it. */}
      <rect y={300} width={1000} height={340} fill="#b5e08c" />
      <path d={RIVER} fill="none" stroke="#3f95c8" strokeWidth={28} strokeLinecap="round" />
      <path d={RIVER} fill="none" stroke="#5bb3e6" strokeWidth={20} strokeLinecap="round" />
      <path d={RIVER} fill="none" stroke="#fff" strokeWidth={2} strokeDasharray="8 24" strokeLinecap="round" opacity={0.8} />

      {/* The slopes on either side of the valley, and a face of rock on the right one. */}
      <path d={LEFT_SLOPE} fill="#7cb661" stroke="#5f9a48" strokeWidth={3} strokeLinejoin="round" />
      <path d={RIGHT_SLOPE} fill="#86bd69" stroke="#5f9a48" strokeWidth={3} strokeLinejoin="round" />
      <path d="M796,334 C790,262 930,248 940,334 Z" fill="#a4a4a4" stroke="#7d7d7d" strokeWidth={2} />

      {/* The narrow road: from the village, over the bridge, up the slope in hairpins. */}
      <path d={ROAD} fill="none" stroke="#8a7458" strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />
      <path d={ROAD} fill="none" stroke="#e4cf9e" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />

      {/* The tunnel the road goes into. */}
      <path d="M833,334 V312 A27,27 0 0 1 887,312 V334 Z" fill="#2b2b2b" stroke="#d4d4d4" strokeWidth={5} strokeLinejoin="round" />

      {/* The bridge over the river. */}
      <path d="M478,494 H534 V510 H524 A17,10 0 0 0 488,510 H478 Z" fill="#c9b79c" stroke="#8a7458" strokeWidth={2} strokeLinejoin="round" />

      {/* The small village by the river, with its church. */}
      <g>
        <rect x={346} y={432} width={14} height={36} fill="#fff4e0" stroke="#8a6a4a" strokeWidth={1} />
        <path d="M343,434 L353,416 L363,434 Z" fill="#c95440" />
        {VILLAGE.map(([x, y, wall, roof]) => (
          <SmallHouse key={`${x},${y}`} x={x} y={y} wall={wall} roof={roof} />
        ))}
      </g>

      {PINES.map(([x, y]) => <Pine key={`${x},${y}`} x={x} y={y} />)}
    </g>
  );
}
