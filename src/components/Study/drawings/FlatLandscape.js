// A flat landscape seen from the side, in a 1000 × 640 box. Physical features: a plateau on the
// left (high and flat on top), a round hill in the middle and the wide plain everything stands on.
// Human features: farmland in patchwork fields at the front left, a town in the middle, a city of
// tall buildings on the right, and a motorway running from the front to the city.

import { Cloud, SmallHouse } from './parts';

const FIELDS = [
  { d: 'M0,440 L260,430 L300,520 L0,540 Z', fill: '#f2d46b', rows: '#e0bb45' },
  { d: 'M260,430 L420,425 L470,510 L300,520 Z', fill: '#c99a62', rows: '#a87a46' },
  { d: 'M0,540 L300,520 L340,640 H0 Z', fill: '#8cc96a', rows: '#6fae50' },
  { d: 'M300,520 L470,510 L520,640 H340 Z', fill: '#d6e97e', rows: '#b5cc5c' },
];

// Crop rows, drawn across each field.
const ROWS = [
  'M20,455 L270,447 M15,475 L280,467 M10,495 L288,487 M5,515 L295,507',
  'M285,445 L425,440 M292,465 L438,460 M298,485 L452,480',
  'M10,560 L305,540 M10,585 L315,565 M10,610 L325,590',
  'M318,540 L478,532 M325,565 L490,557 M332,590 L500,582 M338,615 L510,607',
];

const TOWN = [
  [436, 368, '#fff4e0', '#d9634a'], [462, 372, '#ffe9c7', '#c95440'], [530, 370, '#fff4e0', '#e07a4a'],
  [556, 376, '#ffe9c7', '#d9634a'], [448, 388, '#ffe9c7', '#e07a4a'], [540, 392, '#fff4e0', '#c95440'],
];

const TOWERS = [
  [834, 232, 30, 92, '#9fb4c9'], [867, 192, 34, 132, '#7f97b0'], [904, 150, 32, 174, '#a9bdd0'],
  [939, 208, 28, 116, '#8aa2ba'], [970, 176, 30, 148, '#9cb0c4'],
];

const PLAIN_TREES = [[640, 362], [700, 470], [520, 470], [960, 420], [940, 520]];

function Tower({
  x, y, width, height, fill,
}) {
  const windows = [];
  for (let wy = y + 10; wy < y + height - 10; wy += 16) {
    for (let wx = x + 6; wx < x + width - 8; wx += 10) windows.push([wx, wy]);
  }
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} stroke="#5f738a" strokeWidth={1.5} />
      {windows.map(([wx, wy]) => <rect key={`${wx},${wy}`} x={wx} y={wy} width={5} height={7} fill="#e8f4ff" />)}
    </g>
  );
}

function Block({ x, y }) {
  return (
    <g>
      <rect x={x} y={y} width={22} height={30} fill="#f1e2c8" stroke="#8a6a4a" strokeWidth={1} />
      {[y + 5, y + 14, y + 23].map(wy => (
        <g key={wy}>
          <rect x={x + 4} y={wy} width={5} height={5} fill="#bfe6ff" />
          <rect x={x + 13} y={wy} width={5} height={5} fill="#bfe6ff" />
        </g>
      ))}
    </g>
  );
}

function RoundTree({ x, y }) {
  return (
    <g>
      <rect x={x - 2} y={y + 4} width={4} height={8} fill="#7a5532" />
      <circle cx={x} cy={y} r={9} fill="#4a9e42" />
    </g>
  );
}

export default function FlatLandscape() {
  return (
    <g>
      <defs>
        <linearGradient id="flat-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9fd8f7" />
          <stop offset="1" stopColor="#e4f5fd" />
        </linearGradient>
      </defs>

      <rect width="1000" height="640" fill="url(#flat-sky)" />
      <Cloud x={470} y={90} />
      <Cloud x={760} y={60} />

      {/* The plateau: high land, flat on top, with steep sides. */}
      <path d="M20,315 L72,172 H328 L382,315 Z" fill="#b8956a" stroke="#8f6f4a" strokeWidth={2} strokeLinejoin="round" />
      <path d="M72,172 H328 L334,188 H66 Z" fill="#8cc96a" />
      <path d="M100,230 L120,300 M180,215 L170,300 M260,225 L280,300" stroke="#9f7d55" strokeWidth={3} strokeLinecap="round" />

      {/* A round hill. */}
      <path d="M560,318 C620,198 760,198 820,318 Z" fill="#8cc96a" stroke="#5f9a48" strokeWidth={2} />
      <RoundTree x={668} y={240} />
      <RoundTree x={720} y={250} />

      {/* The city: tall buildings far away on the right. */}
      {TOWERS.map(([x, y, width, height, fill]) => (
        <Tower key={x} x={x} y={y} width={width} height={height} fill={fill} />
      ))}

      {/* The plain: wide, low and flat. */}
      <rect y={312} width={1000} height={328} fill="#b9e08e" />
      {PLAIN_TREES.map(([x, y]) => <RoundTree key={`${x},${y}`} x={x} y={y} />)}

      {/* The town: houses, some blocks of flats and a church. */}
      <g>
        <Block x={480} y={342} />
        <Block x={504} y={350} />
        <rect x={418} y={336} width={14} height={40} fill="#fff4e0" stroke="#8a6a4a" strokeWidth={1} />
        <path d="M415,338 L425,320 L435,338 Z" fill="#c95440" />
        {TOWN.map(([x, y, wall, roof]) => (
          <SmallHouse key={`${x},${y}`} x={x} y={y} wall={wall} roof={roof} />
        ))}
      </g>

      {/* Farmland: fields of crops at the front, and a tractor. */}
      {FIELDS.map(({ d, fill }) => <path key={d} d={d} fill={fill} stroke="#fff" strokeWidth={3} strokeLinejoin="round" />)}
      {ROWS.map((d, index) => (
        <path key={d} d={d} fill="none" stroke={FIELDS[index].rows} strokeWidth={3} strokeLinecap="round" />
      ))}
      <g>
        <rect x={360} y={462} width={30} height={16} rx={3} fill="#d94a3a" />
        <rect x={378} y={450} width={14} height={14} fill="#d94a3a" stroke="#8a2f25" strokeWidth={1} />
        <circle cx={368} cy={480} r={8} fill="#333" />
        <circle cx={388} cy={482} r={5} fill="#333" />
      </g>

      {/* The motorway: a wide road with lanes, from the front to the city. */}
      <path d="M560,640 L760,640 L905,322 L875,322 Z" fill="#7d838c" />
      <path d="M560,640 L875,322 M760,640 L905,322" stroke="#fff" strokeWidth={3} />
      <path d="M627,640 L885,322 M693,640 L895,322" stroke="#fff" strokeWidth={3} strokeDasharray="14 12" />
      <rect x={676} y={572} width={22} height={14} rx={3} fill="#2f80ed" />
      <rect x={760} y={470} width={16} height={10} rx={2} fill="#f2c94c" />
      <rect x={828} y={420} width={12} height={8} rx={2} fill="#eb5757" />
    </g>
  );
}
