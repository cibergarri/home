import { Kid } from './parts';

// Little pictures, 160 × 110 each, for the school rules and the playground games, drawn with Toby,
// Daisy and Sam. Each is a component to use inside an <svg viewBox="0 0 160 110">.

const GROUND = 104;

function Floor({ colour = '#ead9bd' }) {
  return (
    <g>
      <rect width={160} height={110} fill="#eef6fb" />
      <rect y={GROUND - 14} width={160} height={24} fill={colour} />
    </g>
  );
}

function Bubble({
  x, y, width, children,
}) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={22} rx={11} fill="#fff" stroke="#24324a" strokeWidth={1.5} />
      <path d={`M${x + 10},${y + 21} l-4,8 l10,-8`} fill="#fff" stroke="#24324a" strokeWidth={1.5} strokeLinejoin="round" />
      <text x={x + width / 2} y={y + 16} textAnchor="middle" fontSize={13} fontWeight={700} fill="#24324a" fontFamily="inherit">{children}</text>
    </g>
  );
}

export function ListenToOthers() {
  return (
    <g>
      <Floor />
      <Kid name="Daisy" x={48} y={GROUND} scale={0.72} label={false} />
      <Bubble x={58} y={6} width={44}>…</Bubble>
      <Kid name="Toby" x={118} y={GROUND} scale={0.72} label={false} />
      <path d="M100,38 q-5,6 0,12 M94,34 q-8,10 0,20" fill="none" stroke="#1f9e8f" strokeWidth={2.5} strokeLinecap="round" />
    </g>
  );
}

export function PutYourHandUp() {
  return (
    <g>
      <Floor />
      <rect x={110} y={20} width={44} height={30} rx={3} fill="#2f5f4f" stroke="#7a5532" strokeWidth={3} />
      <Kid name="Toby" x={70} y={GROUND} scale={0.72} label={false} pose="hand-up" />
      <rect x={38} y={80} width={64} height={8} fill="#b5824f" />
      <path d="M44,88 v16 M96,88 v16" stroke="#7a5532" strokeWidth={4} />
    </g>
  );
}

export function PlayNicely() {
  return (
    <g>
      <Floor colour="#a8d97f" />
      <Kid name="Toby" x={62} y={GROUND} scale={0.72} label={false} />
      <Kid name="Daisy" x={100} y={GROUND} scale={0.72} label={false} />
      <path d="M81,22 c-6,-8 -16,-2 -10,6 l10,9 l10,-9 c6,-8 -4,-14 -10,-6 Z" fill="#ef4f6f" />
    </g>
  );
}

export function WashYourHands() {
  return (
    <g>
      <Floor />
      <Kid name="Sam" x={70} y={GROUND} scale={0.72} label={false} pose="together" />
      {/* A sink at his waist, the tap running onto his hands, and soap bubbles. */}
      <path d="M44,74 h76 l-6,14 h-64 Z" fill="#fff" stroke="#9aa6b2" strokeWidth={2} strokeLinejoin="round" />
      <rect x={76} y={88} width={12} height={16} fill="#c9d6df" />
      <path d="M108,74 v-18 h-22" fill="none" stroke="#8a8f98" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M86,62 v4 M86,69 v3" stroke="#6cc0ec" strokeWidth={3} strokeLinecap="round" />
      {[[56, 69], [86, 68], [61, 64], [81, 63]].map(([x, y]) => (
        <circle key={`${x},${y}`} cx={x} cy={y} r={3.5} fill="#fff" stroke="#6cc0ec" strokeWidth={1.5} />
      ))}
    </g>
  );
}

export function LineUp() {
  return (
    <g>
      <Floor />
      <path d="M20,98 L140,104" stroke="#fff" strokeWidth={3} strokeDasharray="6 5" />
      <Kid name="Toby" x={44} y={94} scale={0.58} label={false} />
      <Kid name="Daisy" x={78} y={98} scale={0.66} label={false} />
      <Kid name="Sam" x={116} y={GROUND} scale={0.74} label={false} />
    </g>
  );
}

export function DontShout() {
  return (
    <g>
      <Floor />
      <rect x={6} y={18} width={34} height={72} fill="#b5824f" stroke="#7a5532" strokeWidth={2} />
      {[24, 46, 68].map(y => ['#e06a4a', '#4f8fe0', '#f2c94c', '#3fae6a'].map((colour, index) => (
        <rect key={`${y}${colour}`} x={9 + index * 7.5} y={y} width={6} height={18} fill={colour} />
      )))}
      <Kid name="Toby" x={78} y={GROUND} scale={0.72} label={false} shouting />
      <Bubble x={96} y={8} width={50}>AAH!</Bubble>
      <circle cx={121} cy={19} r={20} fill="none" stroke="#e5484d" strokeWidth={4} />
      <line x1={107} y1={33} x2={135} y2={5} stroke="#e5484d" strokeWidth={4} />
    </g>
  );
}

export function HideAndSeek() {
  return (
    <g>
      <Floor colour="#a8d97f" />
      <Kid name="Toby" x={40} y={GROUND} scale={0.72} label={false} pose="eyes" />
      <Bubble x={44} y={4} width={50}>1, 2, 3…</Bubble>
      <Kid name="Daisy" x={124} y={GROUND} scale={0.72} label={false} />
      <rect x={106} y={50} width={14} height={54} fill="#7a5532" />
      <circle cx={112} cy={40} r={26} fill="#3f8f3a" />
      <circle cx={100} cy={52} r={14} fill="#3f8f3a" />
    </g>
  );
}

export function MonsterTag() {
  return (
    <g>
      <Floor colour="#a8d97f" />
      <Kid name="Sam" x={46} y={GROUND} scale={0.72} label={false} pose="arms-up" />
      <path d="M36,36 l-3,-10 l8,6 Z M56,36 l3,-10 l-8,6 Z" fill="#3fae6a" stroke="#2b7a4a" strokeWidth={1} />
      <Kid name="Daisy" x={120} y={GROUND} scale={0.72} label={false} pose="reach" />
      <path d="M78,50 h10 M74,60 h14 M78,70 h10" stroke="#9aa6b2" strokeWidth={2.5} strokeLinecap="round" />
    </g>
  );
}

export function Catch() {
  return (
    <g>
      <Floor colour="#a8d97f" />
      <path d="M44,58 Q80,0 116,58" fill="none" stroke="#9aa6b2" strokeWidth={2} strokeDasharray="4 4" />
      <circle cx={80} cy={30} r={8} fill="#f2994a" stroke="#b5642a" strokeWidth={1.5} />
      <Kid name="Toby" x={34} y={GROUND} scale={0.72} label={false} pose="reach" />
      <Kid name="Daisy" x={126} y={GROUND} scale={0.72} label={false} pose="reach" />
    </g>
  );
}

export function Hopscotch() {
  const squares = [[52, 92, '1'], [80, 92, '2'], [108, 92, '3'], [66, 74, '4'], [94, 74, '5']];
  return (
    <g>
      <rect width={160} height={110} fill="#eef6fb" />
      <rect y={60} width={160} height={50} fill="#c9c3b6" />
      {squares.map(([x, y, n]) => (
        <g key={n}>
          <rect x={x - 14} y={y - 9} width={28} height={18} fill="none" stroke="#fff" strokeWidth={2.5} />
          <text x={x} y={y + 5} textAnchor="middle" fontSize={12} fontWeight={700} fill="#fff" fontFamily="inherit">{n}</text>
        </g>
      ))}
      <Kid name="Daisy" x={52} y={98} scale={0.6} label={false} pose="arms-up" />
    </g>
  );
}
