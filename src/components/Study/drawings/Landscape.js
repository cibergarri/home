// A countryside landscape seen from the side, in a 1000 × 640 box. Physical features: the
// mountains at the back, the lake at their foot, the river flowing from it to the front and the big
// tree on the right. Human features: the village on the hill, the bridge over the river, and the
// two houses at the front on the left, joined to the bridge by a road.

import { Cloud, SmallHouse } from './parts';

const MOUNTAINS = 'M60,305 L200,140 L262,196 L340,88 L452,212 L520,152 L660,305 Z';
const SNOW = [
  'M174,171 L200,140 L226,164 L212,160 L200,172 L188,162 Z',
  'M306,135 L340,88 L374,135 L358,128 L340,142 L322,128 Z',
  'M498,178 L520,152 L544,180 L530,176 L520,184 L510,175 Z',
];

const RIVER = 'M365,333 C470,380 380,430 470,470 C560,510 520,580 600,640';

const VILLAGE = [
  [742, 286, '#fff4e0', '#d9634a'], [770, 276, '#ffe9c7', '#c95440'],
  [828, 272, '#fff4e0', '#e07a4a'], [856, 284, '#ffe9c7', '#d9634a'], [720, 298, '#ffe9c7', '#e07a4a'],
  [880, 296, '#fff4e0', '#c95440'],
];

const CLOUDS = [[120, 70], [690, 80]];
const FLOWERS = [[60, 600], [300, 520], [330, 610], [640, 600], [760, 520], [960, 620], [40, 420]];

function House({
  x, y, width, height, wall, roof,
}) {
  const left = x - width / 2;
  return (
    <g>
      <rect x={left} y={y} width={width} height={height} fill={wall} stroke="#8a6a4a" strokeWidth={2} />
      <path d={`M${left - 10},${y + 2} L${x},${y - height * 0.6} L${left + width + 10},${y + 2} Z`} fill={roof} stroke="#9c4632" strokeWidth={2} strokeLinejoin="round" />
      <rect x={x - 8} y={y + height - 26} width={16} height={26} fill="#8a5a3a" />
      <rect x={left + 8} y={y + 10} width={14} height={14} fill="#bfe6ff" stroke="#8a6a4a" strokeWidth={1.5} />
      <rect x={left + width - 22} y={y + 10} width={14} height={14} fill="#bfe6ff" stroke="#8a6a4a" strokeWidth={1.5} />
    </g>
  );
}

export default function Landscape() {
  return (
    <g>
      <defs>
        <linearGradient id="landscape-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9fd8f7" />
          <stop offset="1" stopColor="#e4f5fd" />
        </linearGradient>
      </defs>

      {/* Sky, sun and clouds. */}
      <rect width="1000" height="640" fill="url(#landscape-sky)" />
      <circle cx={930} cy={70} r={36} fill="#ffd34d" />
      <circle cx={930} cy={70} r={48} fill="#ffd34d" opacity={0.25} />
      {CLOUDS.map(([x, y]) => <Cloud key={`${x},${y}`} x={x} y={y} />)}

      {/* Mountains at the back. */}
      <path d={MOUNTAINS} fill="#9a8570" stroke="#7d6a57" strokeWidth={2} strokeLinejoin="round" />
      <path d="M340,88 L452,212 L520,152 L660,305 L400,305 Z" fill="#86725f" opacity={0.6} />
      {SNOW.map(d => <path key={d} d={d} fill="#fff" />)}

      {/* A hill on the right for the village, then the fields. */}
      <path d="M480,330 C600,250 780,238 1000,262 V420 H480 Z" fill="#8cc96a" />
      <path d="M0,300 C200,285 400,300 520,312 C700,330 850,320 1000,334 V640 H0 Z" fill="#a8d97f" />

      {/* The village: a cluster of small houses and a church on the hill. */}
      <g>
        <rect x={792} y={238} width={16} height={46} fill="#fff4e0" stroke="#8a6a4a" strokeWidth={1} />
        <path d="M788,240 L800,220 L812,240 Z" fill="#c95440" />
        <rect x={797} y={248} width={6} height={8} fill="#8a6a4a" />
        {VILLAGE.map(([x, y, wall, roof]) => (
          <SmallHouse key={`${x},${y}`} x={x} y={y} wall={wall} roof={roof} />
        ))}
      </g>

      {/* The lake at the foot of the mountains, and the river flowing out of it. */}
      <ellipse cx={250} cy={330} rx={122} ry={24} fill="#5bb3e6" stroke="#3f95c8" strokeWidth={2} />
      <path d="M170,326 q10,-5 20,0 M260,334 q10,-5 20,0" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" opacity={0.8} />
      <path d={RIVER} fill="none" stroke="#3f95c8" strokeWidth={32} strokeLinecap="round" />
      <path d={RIVER} fill="none" stroke="#5bb3e6" strokeWidth={24} strokeLinecap="round" />
      <path d={RIVER} fill="none" stroke="#fff" strokeWidth={2} strokeDasharray="8 26" strokeLinecap="round" opacity={0.8} />

      {/* The road from the houses over the bridge to the village. */}
      <g fill="none" stroke="#e4cf9e" strokeWidth={10} strokeLinecap="round">
        <path d="M190,505 C250,450 330,402 385,397" />
        <path d="M465,397 C560,395 680,330 760,300" />
      </g>

      {/* A stone bridge over the river. */}
      <path d="M383,390 H467 V414 H452 A27,15 0 0 0 398,414 H383 Z" fill="#c9b79c" stroke="#8a7458" strokeWidth={2} strokeLinejoin="round" />
      <path d="M383,390 H467" stroke="#8a7458" strokeWidth={4} />

      {/* Two houses at the front. */}
      <House x={115} y={470} width={96} height={72} wall="#fff4e0" roof="#e06a4a" />
      <House x={225} y={500} width={80} height={62} wall="#ffe3b8" roof="#d9634a" />

      {/* A big tree at the front on the right. */}
      <g>
        <path d="M870,600 L874,500 L894,500 L898,600 Z" fill="#7a5532" />
        <circle cx={842} cy={505} r={42} fill="#3f8f3a" />
        <circle cx={926} cy={508} r={40} fill="#3f8f3a" />
        <circle cx={884} cy={474} r={58} fill="#4a9e42" />
        <circle cx={866} cy={458} r={18} fill="#64b555" />
      </g>

      {FLOWERS.map(([x, y]) => (
        <g key={`${x},${y}`}>
          <circle cx={x} cy={y} r={5} fill="#ff8fb1" />
          <circle cx={x} cy={y} r={2} fill="#ffd34d" />
        </g>
      ))}
    </g>
  );
}
