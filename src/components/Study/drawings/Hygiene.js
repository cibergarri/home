// Naturales, tema 2: the things we use for our hygiene, to join to their names, as sketches, each
// 320 × 200 on a bathroom-tile background.
import {
  INK, PAPER, YELLOW, MINT, PINK, SKY, ORANGE, BLUE, BROWN, THIN,
  ink,
} from './sketch';

function Tiles({ children }) {
  const lines = [];
  for (let x = 40; x < 320; x += 40) lines.push(`M${x} 0 L${x} 200`);
  for (let y = 40; y < 200; y += 40) lines.push(`M0 ${y} L320 ${y}`);
  return (
    <g>
      <rect width={320} height={200} fill="#eef7fb" />
      <path d={lines.join(' ')} stroke="#d6e9f2" strokeWidth={2} />
      {children}
    </g>
  );
}

export function Toothbrush() {
  return (
    <Tiles>
      <g {...ink}>
        <rect x={40} y={112} width={200} height={22} rx={11} fill={SKY} transform="rotate(-12 140 123)" />
        <rect x={214} y={70} width={66} height={22} rx={6} fill={PAPER} transform="rotate(-12 247 81)" />
        {[0, 1, 2, 3, 4, 5].map(n => (
          <path key={n} d={`M${222 + n * 10} ${88 - n * 2} L${220 + n * 10} ${66 - n * 2}`} strokeWidth={3} stroke={BLUE} transform="rotate(-12 247 81)" />
        ))}
      </g>
    </Tiles>
  );
}

export function Toothpaste() {
  return (
    <Tiles>
      <g {...ink}>
        <path d="M50 120 L210 92 L230 104 L230 136 L210 148 L50 150 Z" fill={PAPER} />
        <path d="M50 120 L50 150 L36 154 L36 116 Z" fill={BLUE} />
        <rect x={230} y={108} width={24} height={24} rx={4} fill={BLUE} />
        <path d="M90 116 L190 104 L190 136 L90 142 Z" fill={MINT} strokeWidth={THIN} />
        <path d="M256 112 Q 280 96 296 108 Q 282 124 260 126" fill={PAPER} strokeWidth={THIN} />
        <path d="M110 124 L170 118" stroke={BLUE} strokeWidth={4} />
      </g>
    </Tiles>
  );
}

export function Shampoo() {
  return (
    <Tiles>
      <g {...ink}>
        <rect x={120} y={60} width={80} height={120} rx={18} fill={PINK} />
        <rect x={142} y={36} width={36} height={26} rx={4} fill={PAPER} />
        <path d="M178 44 L204 40 L204 50 L178 52" fill={PAPER} strokeWidth={THIN} />
        <rect x={134} y={96} width={52} height={50} rx={8} fill={PAPER} strokeWidth={THIN} />
        <circle cx={150} cy={112} r={6} fill={SKY} strokeWidth={1.5} />
        <circle cx={166} cy={126} r={8} fill={SKY} strokeWidth={1.5} />
        <circle cx={240} cy={60} r={14} fill={PAPER} strokeWidth={THIN} />
        <circle cx={262} cy={86} r={9} fill={PAPER} strokeWidth={THIN} />
        <circle cx={232} cy={98} r={7} fill={PAPER} strokeWidth={THIN} />
      </g>
    </Tiles>
  );
}

export function Soap() {
  return (
    <Tiles>
      <g {...ink}>
        <ellipse cx={160} cy={156} rx={110} ry={20} fill={SKY} />
        <rect x={86} y={96} width={148} height={56} rx={26} fill={YELLOW} />
        <path d="M110 112 Q 140 104 170 110" strokeWidth={THIN} stroke={PAPER} />
        <circle cx={110} cy={70} r={14} fill={PAPER} strokeWidth={THIN} />
        <circle cx={150} cy={50} r={18} fill={PAPER} strokeWidth={THIN} />
        <circle cx={196} cy={66} r={11} fill={PAPER} strokeWidth={THIN} />
        <circle cx={226} cy={40} r={8} fill={PAPER} strokeWidth={THIN} />
      </g>
    </Tiles>
  );
}

export function Towel() {
  return (
    <Tiles>
      <g {...ink}>
        <path d="M40 40 L280 40" strokeWidth={6} stroke={BROWN} />
        <circle cx={40} cy={40} r={7} fill={BROWN} />
        <circle cx={280} cy={40} r={7} fill={BROWN} />
        <path d="M80 40 L240 40 L236 176 L84 176 Z" fill={ORANGE} />
        <path d="M84 150 L236 150 M84 160 L236 160" stroke={PAPER} strokeWidth={4} />
        <path d="M120 40 L124 176" strokeWidth={1.5} stroke={INK} strokeDasharray="4 6" />
      </g>
    </Tiles>
  );
}

export function Comb() {
  const teeth = [];
  for (let x = 62; x <= 258; x += 12) teeth.push(`M${x} 112 L${x} 152`);
  return (
    <Tiles>
      <g {...ink}>
        <rect x={50} y={80} width={220} height={34} rx={10} fill={MINT} />
        <path d={teeth.join(' ')} strokeWidth={5} stroke={INK} />
      </g>
    </Tiles>
  );
}
