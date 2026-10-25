// A coastal landscape seen from above, in a 1000 × 640 box: the mainland across the top and down
// the left, the sea below. Every feature of the exercise is here, each in its own spot:
// the cape (with a lighthouse) and the bay on the right, the peninsula in the middle, the gulf
// between it and the left coast, the beach and a cliff on that coast, an island and an archipelago
// at sea.

const MAINLAND = [
  'M0,0 H1000 V165',
  'C975,170 950,172 935,172', // towards the cape
  'C925,200 900,240 888,268 C878,240 870,205 860,182', // cape
  'C850,120 800,92 770,110 C745,125 742,160 740,192', // bay
  'C725,198 712,200 700,202',
  'C712,260 760,320 742,382 C722,442 628,452 596,405 C572,365 590,280 588,215', // peninsula
  'C585,140 540,78 450,72 C360,68 310,130 305,212', // gulf
  'C295,280 255,330 245,420 C236,500 215,570 200,640', // the coast with the beach
  'H0 Z',
].join(' ');

const BEACH = 'M303,225 C293,285 256,333 247,410';

const ISLAND = 'M790,505 C790,470 840,460 870,465 C915,472 928,500 915,525 C900,550 830,552 805,535 C793,527 790,515 790,505 Z';

const ARCHIPELAGO = [
  { cx: 355, cy: 300, rx: 26, ry: 18, rotate: -12 },
  { cx: 420, cy: 270, rx: 16, ry: 11, rotate: 20 },
  { cx: 458, cy: 335, rx: 28, ry: 19, rotate: 8 },
  { cx: 385, cy: 378, rx: 19, ry: 13, rotate: -25 },
  { cx: 508, cy: 292, rx: 14, ry: 10, rotate: 0 },
  { cx: 485, cy: 402, rx: 17, ry: 12, rotate: 15 },
];

const TREES = [
  [45, 398], [178, 404], [40, 530], [120, 545], [68, 600], [150, 600],
  [372, 28], [560, 28], [612, 46], [952, 58], [980, 112], [690, 130],
  [640, 262], [700, 318], [628, 372], [872, 492], [832, 512],
];

const HOUSES = [[470, 30], [505, 42], [538, 28]];

const WAVES = [
  [560, 560], [950, 430], [300, 610], [770, 250], [975, 600], [360, 460], [540, 470],
  [680, 600], [820, 400], [990, 300],
];

const GULLS = [[960, 255], [530, 228], [610, 520]];

function Tree({ x, y }) {
  return (
    <g>
      <rect x={x - 2} y={y + 6} width={4} height={9} rx={1} fill="#7a5532" />
      <circle cx={x} cy={y} r={11} fill="#3f8f3a" />
      <circle cx={x - 3} cy={y - 3} r={4} fill="#5fb04f" />
    </g>
  );
}

function House({ x, y }) {
  return (
    <g>
      <rect x={x - 11} y={y} width={22} height={16} fill="#fff4e0" stroke="#8a6a4a" strokeWidth={1.5} />
      <path d={`M${x - 14},${y + 1} L${x},${y - 12} L${x + 14},${y + 1} Z`} fill="#e06a4a" />
      <rect x={x - 3} y={y + 7} width={6} height={9} fill="#8a6a4a" />
    </g>
  );
}

const wave = ([x, y]) => `M${x},${y} q8,-7 16,0 t16,0`;
const gull = ([x, y]) => `M${x},${y} q6,-7 12,0 q6,-7 12,0`;

export default function CoastalLandscape() {
  return (
    <g>
      <defs>
        <linearGradient id="coast-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8fd6f2" />
          <stop offset="1" stopColor="#3f9bd3" />
        </linearGradient>
        <linearGradient id="coast-land" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a8d97f" />
          <stop offset="1" stopColor="#8cc96a" />
        </linearGradient>
      </defs>

      {/* The sea, with a pale band of shallow water along every coast. */}
      <rect width="1000" height="640" fill="url(#coast-sea)" />
      <g fill="none" stroke="#c8f0fb" strokeWidth={18} strokeLinejoin="round">
        <path d={MAINLAND} />
        <path d={ISLAND} />
        {ARCHIPELAGO.map(({ cx, cy, rx, ry, rotate }) => (
          <ellipse key={`${cx},${cy}`} cx={cx} cy={cy} rx={rx} ry={ry} transform={`rotate(${rotate} ${cx} ${cy})`} />
        ))}
      </g>
      <g fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" opacity={0.7}>
        {WAVES.map(point => <path key={point.join()} d={wave(point)} />)}
      </g>

      {/* Land. */}
      <g fill="url(#coast-land)" stroke="#5b9a45" strokeWidth={3} strokeLinejoin="round">
        <path d={MAINLAND} />
        <path d={ISLAND} />
        {ARCHIPELAGO.map(({ cx, cy, rx, ry, rotate }) => (
          <ellipse key={`${cx},${cy}`} cx={cx} cy={cy} rx={rx} ry={ry} transform={`rotate(${rotate} ${cx} ${cy})`} />
        ))}
      </g>

      {/* The beach: a strip of sand along the left coast, with a sunshade and a towel. */}
      <path d={BEACH} fill="none" stroke="#f4d98e" strokeWidth={26} strokeLinecap="round" />
      <path d={BEACH} fill="none" stroke="#e9c46a" strokeWidth={2} strokeDasharray="2 9" strokeLinecap="round" />
      <rect x={256} y={348} width={10} height={16} rx={2} fill="#4fa3e0" transform="rotate(-20 261 356)" />
      <path d="M268,298 a14,14 0 0 1 28,0 Z" fill="#ef5b5b" />
      <path d="M275,298 a7,14 0 0 1 14,0 Z" fill="#fff" />
      <line x1={282} y1={298} x2={282} y2={312} stroke="#7a5532" strokeWidth={2} />

      {/* A cliff: below the beach the coast turns into a wall of rock, with rocks fallen into the sea. */}
      <path d="M236,488 L228,540 L216,592 L202,640 L168,640 L182,590 L195,540 L205,492 Z" fill="#a7835f" stroke="#7a5a3e" strokeWidth={2} strokeLinejoin="round" />
      <g stroke="#7a5a3e" strokeWidth={2} strokeLinecap="round">
        <line x1={206} y1={512} x2={230} y2={514} />
        <line x1={198} y1={546} x2={225} y2={548} />
        <line x1={189} y1={580} x2={217} y2={582} />
        <line x1={180} y1={614} x2={207} y2={616} />
      </g>
      <g fill="#9a9a9a" stroke="#6f6f6f" strokeWidth={1.5}>
        <ellipse cx={241} cy={566} rx={7} ry={5} />
        <ellipse cx={233} cy={612} rx={9} ry={6} />
        <ellipse cx={250} cy={598} rx={5} ry={4} />
      </g>

      {/* Mountains inland. */}
      <path d="M30,215 L100,92 L170,215 Z" fill="#a8927a" />
      <path d="M120,215 L195,62 L272,215 Z" fill="#94806a" />
      <path d="M82,124 L100,92 L118,124 L108,118 L100,126 L92,118 Z" fill="#fff" />
      <path d="M175,103 L195,62 L215,103 L204,96 L195,106 L186,96 Z" fill="#fff" />

      {TREES.map(([x, y]) => <Tree key={`${x},${y}`} x={x} y={y} />)}
      {HOUSES.map(([x, y]) => <House key={`${x},${y}`} x={x} y={y} />)}

      {/* A lighthouse on the cape. */}
      <g>
        <path d="M884,232 L898,232 L895,200 L887,200 Z" fill="#fff" stroke="#8a6a4a" strokeWidth={1} />
        <rect x={886} y={211} width={10} height={6} fill="#e5484d" />
        <rect x={885} y={222} width={12} height={6} fill="#e5484d" />
        <rect x={886} y={193} width={10} height={7} fill="#ffd34d" stroke="#8a6a4a" strokeWidth={1} />
        <path d="M884,193 L891,186 L898,193 Z" fill="#e5484d" />
      </g>

      {/* A sailing boat. */}
      <g>
        <path d="M528,600 L572,600 L564,612 L536,612 Z" fill="#8a5a3a" />
        <path d="M549,598 L549,566 L570,596 Z" fill="#fff" stroke="#c9d6df" strokeWidth={1} />
        <path d="M547,598 L547,572 L532,596 Z" fill="#ffd34d" />
      </g>

      <g fill="none" stroke="#2c3e50" strokeWidth={2} strokeLinecap="round" opacity={0.6}>
        {GULLS.map(point => <path key={point.join()} d={gull(point)} />)}
      </g>
    </g>
  );
}
