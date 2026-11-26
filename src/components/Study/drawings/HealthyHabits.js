// Naturales, tema 2: healthy habits to join to alimentación, ejercicio or higiene, as sketches,
// each 320 × 200 with the floor at y 180.
import {
  INK, PAPER, YELLOW, MINT, PINK, SKY, ORANGE, RED, GREEN, BLUE, BROWN, GREY, THIN,
  ink, Person,
} from './sketch';

function Indoors({ children }) {
  return (
    <g>
      <rect width={320} height={200} fill="#fdf3e4" />
      <rect y={180} width={320} height={20} fill="#e9d3b4" />
      <path d="M0 180 L320 180" {...ink} strokeWidth={THIN} />
      {children}
    </g>
  );
}

function Outdoors({ children }) {
  return (
    <g>
      <rect width={320} height={200} fill="#eaf6ff" />
      <rect y={170} width={320} height={30} fill="#bfe3a8" />
      <path d="M0 170 L320 170" {...ink} strokeWidth={THIN} />
      <circle cx={280} cy={36} r={16} {...ink} strokeWidth={THIN} fill={YELLOW} />
      {children}
    </g>
  );
}

// A child eating an apple at the table, with a bowl of fruit.
export function EatingFruit() {
  return (
    <Indoors>
      <Person x={110} base={180} scale={1.15} shirt={PINK} hands={[[-22, -45], [8, -96]]} />
      <circle cx={122} cy={76} r={9} {...ink} strokeWidth={THIN} fill={RED} />
      <g {...ink} strokeWidth={2.5}>
        <rect x={150} y={120} width={150} height={12} fill={BROWN} />
        <path d="M164 132 L164 180 M286 132 L286 180" strokeWidth={5} />
        <path d="M190 120 Q 225 146 260 120 Z" fill={PAPER} />
        <circle cx={208} cy={110} r={10} fill={ORANGE} />
        <circle cx={226} cy={106} r={10} fill={RED} />
        <path d="M236 114 Q 250 96 262 112" fill={YELLOW} />
      </g>
    </Indoors>
  );
}

// A plate of vegetables and fish, with a glass of water.
export function HealthyPlate() {
  return (
    <Indoors>
      <g {...ink} strokeWidth={2.5}>
        <rect x={20} y={150} width={280} height={14} fill={BROWN} />
        <ellipse cx={150} cy={130} rx={90} ry={26} fill={PAPER} />
        <ellipse cx={150} cy={128} rx={66} ry={17} fill="#f2f2ee" strokeWidth={1.5} />
        <path d="M110 128 Q 130 112 156 124 Q 140 138 110 128 Z" fill={SKY} />
        <circle cx={172} cy={124} r={9} fill={GREEN} />
        <circle cx={186} cy={130} r={8} fill={GREEN} />
        <path d="M120 136 L144 132 M124 140 L150 136" stroke={ORANGE} strokeWidth={5} />
        <path d="M250 90 L272 90 L268 148 L254 148 Z" fill="#dff1fb" />
        <path d="M252 106 L270 106" stroke={BLUE} strokeWidth={THIN} />
      </g>
    </Indoors>
  );
}

// A child kicking a football.
export function Football() {
  return (
    <Outdoors>
      <Person x={130} base={172} scale={1.15} shirt={RED} mouth="open" hands={[[-34, -70], [30, -60]]} />
      <path d="M140 158 L176 150" {...ink} strokeWidth={4} />
      <g {...ink} strokeWidth={2.5}>
        <circle cx={196} cy={146} r={16} fill={PAPER} />
        <path d="M196 138 L204 144 L201 153 L191 153 L188 144 Z" fill={INK} />
      </g>
      <path d="M220 136 L244 132 M222 148 L250 148" {...ink} strokeWidth={THIN} />
    </Outdoors>
  );
}

// A child skipping with a rope.
export function SkippingRope() {
  return (
    <Outdoors>
      <path d="M126 118 Q 70 40 160 24 Q 250 40 194 118" {...ink} strokeWidth={3} stroke={ORANGE} />
      <Person x={160} base={156} scale={1.1} shirt={MINT} hands={[[-34, -42], [34, -42]]} />
      <path d="M140 170 L180 170" {...ink} strokeWidth={THIN} strokeDasharray="4 6" />
    </Outdoors>
  );
}

// A child brushing their teeth at the basin.
export function BrushingTeeth() {
  return (
    <Indoors>
      <g {...ink} strokeWidth={2.5}>
        <rect x={190} y={30} width={90} height={70} rx={10} fill="#dff1fb" />
        <path d="M180 120 L300 120 L290 140 L190 140 Z" fill={PAPER} />
        <path d="M232 140 L228 180 L252 180 L248 140" fill={PAPER} />
        <path d="M262 120 L262 108 L276 108" strokeWidth={3} />
      </g>
      <Person x={140} base={180} scale={1.15} shirt={YELLOW} hands={[[-22, -45], [8, -100]]} />
      <path d="M148 75 L172 66" {...ink} strokeWidth={5} stroke={SKY} />
      <circle cx={150} cy={84} r={4} {...ink} strokeWidth={1} fill={PAPER} />
    </Indoors>
  );
}

// A child washing their hands with soap.
export function WashingHands() {
  return (
    <Indoors>
      <g {...ink} strokeWidth={2.5}>
        <path d="M150 116 L290 116 L278 140 L162 140 Z" fill={PAPER} />
        <path d="M212 140 L208 180 L234 180 L230 140" fill={PAPER} />
        <path d="M220 116 L220 92 L244 92 L244 100" strokeWidth={3} fill="none" />
        <path d="M244 104 L244 112 M240 106 L240 114" stroke={BLUE} strokeWidth={2} />
        <rect x={260} y={102} width={22} height={14} rx={6} fill={YELLOW} />
        <circle cx={236} cy={96} r={6} fill={PAPER} strokeWidth={1.5} />
        <circle cx={250} cy={84} r={4} fill={PAPER} strokeWidth={1.5} />
      </g>
      <Person x={150} base={180} scale={1.15} shirt={BLUE} hands={[[78, -66], [86, -60]]} />
      <path d="M232 110 L244 108" {...ink} strokeWidth={1} stroke={GREY} />
    </Indoors>
  );
}
