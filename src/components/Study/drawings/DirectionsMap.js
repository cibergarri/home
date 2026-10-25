// A map on a grid of 8 × 8 squares of 80 units, with a strip below it for the start, so 640 × 720.
// Square (column, row) has its centre at (column × 80 + 40, row × 80 + 40). On the map: a village
// at the top left, the sea at the top right, a river from the sea to the left edge with a bridge,
// a lake, a forest, mountains at the bottom right and some trees at the bottom left.

export const CELL = 80;

const RIVER = 'M400,96 C372,126 360,150 360,200 L360,360 C360,404 322,426 280,440 L180,440 C130,440 118,500 80,520 L0,520';

const HOUSES = [[44, 44, '#e06a4a'], [124, 36, '#d9634a'], [206, 52, '#c95440'], [132, 112, '#e07a4a'], [214, 128, '#d9634a']];
const PINES = [[420, 190], [474, 232], [524, 182], [502, 274], [440, 282], [536, 250]];
const TREES = [[40, 604], [128, 592], [212, 612], [252, 540]];

function House({ x, y, roof }) {
  return (
    <g>
      <rect x={x - 16} y={y - 4} width={32} height={22} fill="#fff4e0" stroke="#8a6a4a" strokeWidth={1.5} />
      <path d={`M${x - 20},${y - 2} L${x},${y - 20} L${x + 20},${y - 2} Z`} fill={roof} />
      <rect x={x - 4} y={y + 6} width={8} height={12} fill="#8a5a3a" />
    </g>
  );
}

function Pine({ x, y }) {
  return (
    <g>
      <rect x={x - 3} y={y + 14} width={6} height={8} fill="#6b4a2b" />
      <path d={`M${x},${y - 26} L${x + 18},${y + 16} H${x - 18} Z`} fill="#2f6f3a" />
      <path d={`M${x},${y - 34} L${x + 12},${y - 6} H${x - 12} Z`} fill="#3a8545" />
    </g>
  );
}

function Tree({ x, y }) {
  return (
    <g>
      <rect x={x - 3} y={y + 6} width={6} height={14} fill="#7a5532" />
      <ellipse cx={x} cy={y} rx={16} ry={20} fill="#3f8f3a" />
    </g>
  );
}

export default function DirectionsMap() {
  const lines = [1, 2, 3, 4, 5, 6, 7].map(n => n * CELL);
  return (
    <g>
      <rect width={640} height={640} fill="#c3db74" />

      {/* The sea, top right. */}
      <path d="M380,0 H640 V160 C560,176 470,170 410,150 C390,110 384,50 380,0 Z" fill="#5bb3e6" />
      <path d="M480,50 q8,-6 16,0 t16,0 M560,96 q8,-6 16,0 t16,0" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" />

      {/* The river, with a wooden bridge across it. */}
      <path d={RIVER} fill="none" stroke="#3f95c8" strokeWidth={36} strokeLinecap="round" strokeLinejoin="round" />
      <path d={RIVER} fill="none" stroke="#6cc0ec" strokeWidth={28} strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <rect x={326} y={186} width={68} height={28} rx={4} fill="#b5824f" stroke="#7a5532" strokeWidth={2} />
        {[338, 350, 362, 374, 386].map(x => <line key={x} x1={x} y1={188} x2={x} y2={212} stroke="#7a5532" strokeWidth={1.5} />)}
      </g>

      {/* The lake. */}
      <ellipse cx={160} cy={240} rx={70} ry={54} fill="#5bb3e6" stroke="#3f95c8" strokeWidth={3} />
      <path d="M128,236 q8,-6 16,0 t16,0" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" />

      {/* Mountains. */}
      <path d="M400,640 L462,440 L524,640 Z" fill="#9aa1ab" stroke="#6f767f" strokeWidth={2} strokeLinejoin="round" />
      <path d="M452,640 L516,410 L566,640 Z" fill="#aab1ba" stroke="#6f767f" strokeWidth={2} strokeLinejoin="round" />
      <path d="M449,482 L462,440 L476,482 L468,476 L462,486 L456,476 Z M502,460 L516,410 L530,460 L522,452 L516,464 L510,452 Z" fill="#fff" />

      {HOUSES.map(([x, y, roof]) => <House key={`${x},${y}`} x={x} y={y} roof={roof} />)}
      {PINES.map(([x, y]) => <Pine key={`${x},${y}`} x={x} y={y} />)}
      {TREES.map(([x, y]) => <Tree key={`${x},${y}`} x={x} y={y} />)}

      {/* The grid of squares. */}
      <g stroke="#fff" strokeWidth={3} opacity={0.85}>
        {lines.map(at => <line key={`v${at}`} x1={at} y1={0} x2={at} y2={640} />)}
        {lines.map(at => <line key={`h${at}`} x1={0} y1={at} x2={640} y2={at} />)}
      </g>
      <rect width={640} height={640} fill="none" stroke="#fff" strokeWidth={4} />

      {/* Start, below the bottom right square. */}
      <rect x={568} y={650} width={64} height={60} rx={6} fill="#f2a08c" />
      <text x={600} y={707} textAnchor="middle" fontSize={13} fontWeight={700} fill="#24324a" fontFamily="inherit">START</text>
    </g>
  );
}
