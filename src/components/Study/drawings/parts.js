// Small pieces shared by the drawings, in drawing units.

// A little house far away, its walls `y` to `y + 14` and its roof above.
export function SmallHouse({
  x, y, wall, roof,
}) {
  return (
    <g>
      <rect x={x - 10} y={y} width={20} height={14} fill={wall} stroke="#8a6a4a" strokeWidth={1} />
      <path d={`M${x - 13},${y + 1} L${x},${y - 10} L${x + 13},${y + 1} Z`} fill={roof} />
    </g>
  );
}

export function Cloud({ x, y }) {
  return (
    <g fill="#fff" opacity={0.9}>
      <ellipse cx={x} cy={y} rx={42} ry={16} />
      <circle cx={x - 14} cy={y - 12} r={16} />
      <circle cx={x + 12} cy={y - 16} r={20} />
    </g>
  );
}

const KIDS = {
  Toby: {
    clothes: '#4f8fe0', hair: '#7a4a24', girl: false,
  },
  Daisy: {
    clothes: '#ef6fa3', hair: '#e8b23c', girl: true,
  },
  Sam: {
    clothes: '#3fae6a', hair: '#2b2b2b', girl: false,
  },
};

// Where the arms go for each pose: down by the sides, one hand up, both reaching out (to catch),
// hands together in front (to wash them), both up in the air, or hands over the eyes.
const ARMS = {
  stand: 'M-15,-62 L-26,-36 M15,-62 L26,-36',
  'hand-up': 'M-15,-62 L-26,-36 M15,-62 L24,-104',
  reach: 'M-15,-62 L-30,-56 M15,-62 L30,-56',
  together: 'M-15,-62 L-5,-48 M15,-62 L5,-48',
  'arms-up': 'M-15,-62 L-30,-96 M15,-62 L30,-96',
  eyes: 'M-15,-62 L-9,-84 M15,-62 L9,-84',
};

// Toby, Daisy or Sam standing with their feet at (x, y), about 100 units tall, their name above.
// `pose` moves the arms (see ARMS) and `shouting` opens the mouth wide.
export function Kid({
  name, x, y, scale = 1, label = true, pose = 'stand', shouting = false,
}) {
  const { clothes, hair, girl } = KIDS[name];
  const arms = <path d={ARMS[pose]} stroke="#f2c9a0" strokeWidth={7} strokeLinecap="round" fill="none" />;
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x={-10} y={-32} width={8} height={32} rx={3} fill="#3b4a66" />
      <rect x={2} y={-32} width={8} height={32} rx={3} fill="#3b4a66" />
      {pose !== 'eyes' && arms}
      {girl
        ? <path d="M-13,-66 H13 L22,-26 H-22 Z" fill={clothes} />
        : <rect x={-16} y={-66} width={32} height={38} rx={7} fill={clothes} />}
      <circle cx={0} cy={-82} r={16} fill="#f2c9a0" />
      {girl ? (
        <g fill={hair}>
          <path d="M-16,-84 C-16,-104 16,-104 16,-84 C10,-92 -10,-92 -16,-84 Z" />
          <circle cx={-19} cy={-82} r={7} />
          <circle cx={19} cy={-82} r={7} />
        </g>
      ) : <path d="M-16,-84 C-16,-104 16,-104 16,-84 C8,-91 -8,-91 -16,-84 Z" fill={hair} />}
      <circle cx={-6} cy={-83} r={2} fill="#24324a" />
      <circle cx={6} cy={-83} r={2} fill="#24324a" />
      {shouting
        ? <ellipse cx={0} cy={-73} rx={5} ry={4} fill="#9c3c2c" />
        : <path d="M-5,-75 Q0,-71 5,-75" fill="none" stroke="#24324a" strokeWidth={1.8} strokeLinecap="round" />}
      {pose === 'eyes' && arms}
      {label && (
        <g>
          <rect x={-30} y={-130} width={60} height={22} rx={11} fill="#24324a" />
          <text x={0} y={-114} textAnchor="middle" fontSize={15} fontWeight={700} fill="#fff" fontFamily="inherit">{name}</text>
        </g>
      )}
    </g>
  );
}
