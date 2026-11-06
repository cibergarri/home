import { Kid } from './parts';

// Little pictures, 160 × 110 each, for the camp activities of English unit 5 and the things to do
// at home ("Do you want to…?"), mostly drawn with Toby, Daisy and Sam. Each is a component to use
// inside an <svg viewBox="0 0 160 110">.

const GROUND = 104;
const LINE = '#24324a';

function Sky({ ground = '#a8d97f' }) {
  return (
    <g>
      <rect width={160} height={110} fill="#e6f4fb" />
      <rect y={GROUND - 14} width={160} height={24} fill={ground} />
    </g>
  );
}

function Room() {
  return (
    <g>
      <rect width={160} height={110} fill="#fbf1e2" />
      <rect y={GROUND - 14} width={160} height={24} fill="#d9b98c" />
    </g>
  );
}

// A table seen from the front, its top at `y`.
function Table({ x1, x2, y }) {
  return (
    <g>
      <rect x={x1} y={y} width={x2 - x1} height={7} fill="#b5824f" stroke="#7a5532" strokeWidth={1.5} />
      <path d={`M${x1 + 6},${y + 7} V${GROUND} M${x2 - 6},${y + 7} V${GROUND}`} stroke="#7a5532" strokeWidth={4} />
    </g>
  );
}

export function ClimbATree() {
  return (
    <g>
      <Sky />
      {/* A big tree, its trunk on the left, a low branch for the feet and a high one for the hands. */}
      <rect x={30} y={28} width={22} height={76} fill="#8a5a32" stroke="#6a4224" strokeWidth={1.5} />
      <path d="M50,72 L128,66" stroke="#8a5a32" strokeWidth={8} strokeLinecap="round" />
      <path d="M50,26 L134,20" stroke="#8a5a32" strokeWidth={8} strokeLinecap="round" />
      <circle cx={34} cy={26} r={24} fill="#3f8f3a" />
      <circle cx={14} cy={40} r={14} fill="#3f8f3a" />
      <circle cx={140} cy={18} r={16} fill="#4fa548" />
      <circle cx={130} cy={66} r={11} fill="#4fa548" />
      <Kid name="Toby" x={96} y={68} scale={0.5} label={false} pose="arms-up" />
    </g>
  );
}

export function GoForAWalk() {
  return (
    <g>
      <rect width={160} height={110} fill="#e6f4fb" />
      <circle cx={136} cy={20} r={11} fill="#f7c948" />
      <path d="M0,70 Q40,40 80,64 Q120,44 160,62 V110 H0 Z" fill="#8fcf6a" />
      <path d="M0,84 Q60,66 160,80 V110 H0 Z" fill="#a8d97f" />
      {/* A path across the hills, and the footprints left on it. */}
      <path d="M150,60 Q110,72 120,84 Q130,98 60,110 H100 Q150,96 140,84 Q130,74 160,64 Z" fill="#e8d3a8" />
      {[[128, 70], [138, 76]].map(([x, y]) => (
        <ellipse key={x} cx={x} cy={y} rx={3} ry={1.8} fill="#b8986a" />
      ))}
      <circle cx={22} cy={60} r={12} fill="#3f8f3a" />
      <rect x={20} y={66} width={4} height={14} fill="#7a5532" />
      <Kid name="Sam" x={78} y={GROUND} scale={0.72} label={false} />
      {/* A rucksack strap and a walking stick. */}
      <path d="M71,57 L76,77" stroke="#e06a4a" strokeWidth={3} strokeLinecap="round" />
      <path d="M97,72 L104,104" stroke="#7a5532" strokeWidth={3} strokeLinecap="round" />
    </g>
  );
}

export function DoYoga() {
  return (
    <g>
      <Room />
      <rect x={30} y={96} width={100} height={6} rx={2} fill="#9b6be0" />
      {/* Sam sitting with his legs crossed, his hands on his knees and his eyes closed. */}
      <g transform="translate(80 0)">
        <path d="M-34,96 Q-30,80 0,82 Q30,80 34,96 Z" fill="#3b4a66" />
        <path d="M-15,52 L-30,86 M15,52 L30,86" stroke="#f2c9a0" strokeWidth={6} strokeLinecap="round" fill="none" />
        <rect x={-14} y={50} width={28} height={36} rx={6} fill="#3fae6a" />
        <circle cx={-30} cy={87} r={4} fill="#f2c9a0" />
        <circle cx={30} cy={87} r={4} fill="#f2c9a0" />
        <circle cx={0} cy={36} r={14} fill="#f2c9a0" />
        <path d="M-14,34 C-14,16 14,16 14,34 C7,28 -7,28 -14,34 Z" fill="#2b2b2b" />
        <path d="M-8,37 q3,2 6,0 M2,37 q3,2 6,0" fill="none" stroke={LINE} strokeWidth={1.6} strokeLinecap="round" />
        <path d="M-4,43 Q0,46 4,43" fill="none" stroke={LINE} strokeWidth={1.6} strokeLinecap="round" />
      </g>
    </g>
  );
}

function Basketball({ x, y, r = 8 }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#f2853a" stroke="#9c4a1a" strokeWidth={1.5} />
      <path d={`M${x - r},${y} H${x + r} M${x},${y - r} V${y + r}`} stroke="#9c4a1a" strokeWidth={1.2} />
    </g>
  );
}

export function PlayBasketball() {
  return (
    <g>
      <Sky ground="#e8a86a" />
      {/* The hoop on its pole, with a board and a net. */}
      <rect x={140} y={16} width={6} height={88} fill="#8a8f98" />
      <rect x={112} y={12} width={30} height={26} fill="#fff" stroke={LINE} strokeWidth={1.5} />
      <rect x={120} y={20} width={14} height={10} fill="none" stroke="#e5484d" strokeWidth={1.5} />
      <path d="M106,36 L128,36" stroke="#e5484d" strokeWidth={3} strokeLinecap="round" />
      <path d="M108,37 L112,50 L122,50 L126,37 M112,37 L116,50 M122,37 L118,50" fill="none" stroke="#9aa6b2" strokeWidth={1.2} />
      <path d="M70,32 Q90,6 112,26" fill="none" stroke="#9aa6b2" strokeWidth={1.5} strokeDasharray="4 4" />
      <Kid name="Daisy" x={52} y={GROUND} scale={0.72} label={false} pose="arms-up" />
      <Basketball x={72} y={26} />
    </g>
  );
}

function Bat({ x, y }) {
  return (
    <g>
      <path d={`M${x},${y} l-5,8`} stroke="#7a5532" strokeWidth={3} strokeLinecap="round" />
      <circle cx={x} cy={y} r={7} fill="#e5484d" stroke="#9c2c2c" strokeWidth={1} />
    </g>
  );
}

export function PlayTableTennis() {
  return (
    <g>
      <Room />
      <Kid name="Toby" x={22} y={GROUND} scale={0.72} label={false} pose="reach" />
      <Kid name="Daisy" x={138} y={GROUND} scale={0.72} label={false} pose="reach" />
      {/* The green table with its white lines and the net in the middle. */}
      <rect x={38} y={70} width={84} height={6} fill="#2f8f5f" stroke="#1f5f3f" strokeWidth={1.5} />
      <path d="M38,70 H122" stroke="#fff" strokeWidth={1} />
      <rect x={78} y={60} width={4} height={10} fill="#fff" stroke="#9aa6b2" strokeWidth={0.8} />
      <path d="M46,76 V104 M114,76 V104" stroke="#555" strokeWidth={3} />
      <Bat x={46} y={60} />
      <Bat x={114} y={60} />
      <path d="M50,54 Q66,36 90,48" fill="none" stroke="#9aa6b2" strokeWidth={1.2} strokeDasharray="3 3" />
      <circle cx={92} cy={50} r={3} fill="#fff" stroke="#9aa6b2" strokeWidth={1} />
    </g>
  );
}

export function PlayVolleyball() {
  const net = [];
  for (let x = 20; x <= 140; x += 8) net.push(`M${x},58 V74`);
  return (
    <g>
      <Sky ground="#f0d9a0" />
      <Kid name="Daisy" x={116} y={86} scale={0.6} label={false} pose="arms-up" />
      {/* The net, across the picture, on two posts. */}
      <rect x={14} y={52} width={4} height={52} fill="#8a8f98" />
      <rect x={142} y={52} width={4} height={52} fill="#8a8f98" />
      <path d={`${net.join(' ')} M18,66 H142`} stroke="#5a6472" strokeWidth={0.8} />
      <rect x={18} y={56} width={124} height={4} fill="#fff" stroke="#5a6472" strokeWidth={0.8} />
      <Kid name="Sam" x={50} y={GROUND} scale={0.72} label={false} pose="arms-up" />
      <circle cx={50} cy={22} r={9} fill="#fff" stroke={LINE} strokeWidth={1.5} />
      <path d="M41,20 Q50,24 59,20 M46,14 Q52,22 48,31" fill="none" stroke="#f2c94c" strokeWidth={2} />
      <path d="M53,13 Q56,22 58,27" fill="none" stroke="#4f8fe0" strokeWidth={2} />
    </g>
  );
}

function Lake() {
  return (
    <g>
      <rect width={160} height={110} fill="#e6f4fb" />
      <path d="M0,60 Q40,52 80,58 Q120,52 160,60 V70 H0 Z" fill="#8fcf6a" />
      <rect y={66} width={160} height={44} fill="#4fa8e0" />
      <path d="M10,80 q6,-4 12,0 M120,96 q6,-4 12,0 M30,100 q6,-4 12,0" fill="none" stroke="#bfe3f5" strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}

export function SailABoat() {
  return (
    <g>
      <Lake />
      {/* A white sail on a mast, and Daisy in the boat. */}
      <rect x={82} y={10} width={3} height={74} fill="#7a5532" />
      <path d="M85,12 L85,72 L132,72 Z" fill="#fff" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M82,12 L66,18 L82,24 Z" fill="#e5484d" />
      <Kid name="Daisy" x={60} y={94} scale={0.5} label={false} pose="hand-up" />
      <path d="M30,78 H136 L124,96 H44 Z" fill="#e06a4a" stroke="#9c3c2c" strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M36,84 H131" stroke="#fff" strokeWidth={2} />
    </g>
  );
}

export function SwimInTheLake() {
  return (
    <g>
      <rect width={160} height={110} fill="#e6f4fb" />
      <path d="M0,40 Q40,30 80,38 Q120,30 160,40 V50 H0 Z" fill="#8fcf6a" />
      <circle cx={20} cy={30} r={12} fill="#3f8f3a" />
      <circle cx={140} cy={28} r={13} fill="#3f8f3a" />
      <rect y={46} width={160} height={64} fill="#4fa8e0" />
      <Kid name="Toby" x={80} y={128} scale={0.72} label={false} pose="hand-up" />
      {/* The lake over Toby up to his chin, one arm out in a stroke, and splashes round it. */}
      <rect y={80} width={160} height={30} fill="#4fa8e0" />
      <path d="M60,82 q10,-6 20,0 q10,6 20,0 M88,60 l-6,-4 M106,60 l6,-4 M97,48 v-6" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" />
      <path d="M10,96 q6,-4 12,0 M130,92 q6,-4 12,0" fill="none" stroke="#bfe3f5" strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}

export function MakeAModel() {
  return (
    <g>
      <Room />
      <Kid name="Daisy" x={34} y={GROUND} scale={0.72} label={false} pose="together" />
      <Table x1={14} x2={150} y={74} />
      {/* A little cardboard house, the glue and the scissors. */}
      <rect x={86} y={46} width={40} height={28} fill="#d8b47c" stroke="#8a6a4a" strokeWidth={1.5} />
      <path d="M82,48 L106,28 L130,48 Z" fill="#e06a4a" stroke="#9c3c2c" strokeWidth={1.5} strokeLinejoin="round" />
      <rect x={100} y={58} width={10} height={16} fill="#8a5a32" />
      <rect x={113} y={54} width={8} height={8} fill="#bfe3f5" stroke="#8a6a4a" strokeWidth={1} />
      <rect x={134} y={56} width={8} height={18} rx={2} fill="#fff" stroke={LINE} strokeWidth={1.2} />
      <rect x={135} y={50} width={6} height={6} fill="#f2c94c" />
      <g stroke={LINE} strokeWidth={1.5} fill="none">
        <path d="M64,72 L80,62 M64,64 L80,72" />
        <circle cx={61} cy={63} r={3} fill="#e5484d" />
        <circle cx={61} cy={72} r={3} fill="#e5484d" />
      </g>
    </g>
  );
}

export function PlayABoardGame() {
  const colours = ['#e5484d', '#f2c94c', '#3fae6a', '#4f8fe0'];
  const squares = [];
  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      squares.push(
        <rect key={`${row}-${col}`} x={36 + col * 11} y={58 + row * 6} width={11} height={6} fill={colours[(row + col) % 4]} stroke="#fff" strokeWidth={0.8} />,
      );
    }
  }
  return (
    <g>
      <Room />
      <Kid name="Toby" x={30} y={GROUND} scale={0.72} label={false} />
      <Kid name="Daisy" x={130} y={GROUND} scale={0.72} label={false} />
      <Table x1={10} x2={150} y={76} />
      {/* The board on the table, with two counters on it, and a die beside it. */}
      <path d="M40,56 H120 L128,76 H32 Z" fill="#fff" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      {squares}
      <path d="M58,62 l-4,10 h8 Z" fill="#9b6be0" stroke={LINE} strokeWidth={1} />
      <path d="M96,58 l-4,10 h8 Z" fill="#fff" stroke={LINE} strokeWidth={1} />
      <rect x={130} y={64} width={12} height={12} rx={2} fill="#fff" stroke={LINE} strokeWidth={1.5} />
      <circle cx={133.5} cy={67.5} r={1.4} fill={LINE} />
      <circle cx={136} cy={70} r={1.4} fill={LINE} />
      <circle cx={138.5} cy={72.5} r={1.4} fill={LINE} />
    </g>
  );
}

export function PlayTheGuitar() {
  return (
    <g>
      <Room />
      <Kid name="Sam" x={70} y={GROUND} scale={0.72} label={false} pose="together" />
      {/* The guitar across Sam, its neck up to the right, and the music coming out. */}
      <path d="M76,70 L124,36" stroke="#7a5532" strokeWidth={5} strokeLinecap="round" />
      <rect x={120} y={28} width={10} height={8} rx={2} transform="rotate(-35 125 32)" fill="#5a3a1a" />
      <circle cx={60} cy={82} r={13} fill="#e8a24a" stroke="#9c5a1a" strokeWidth={1.5} />
      <circle cx={72} cy={72} r={10} fill="#e8a24a" stroke="#9c5a1a" strokeWidth={1.5} />
      <circle cx={65} cy={77} r={4} fill="#5a3a1a" />
      <path d="M58,84 L106,48" stroke="#fff" strokeWidth={0.8} />
      <g fill={LINE} stroke={LINE} strokeWidth={1.5}>
        <ellipse cx={108} cy={74} rx={4} ry={3} />
        <path d="M112,74 V58 l6,3" fill="none" />
        <ellipse cx={130} cy={64} rx={4} ry={3} />
        <ellipse cx={142} cy={60} rx={4} ry={3} />
        <path d="M134,64 V48 L146,44 V60" fill="none" />
      </g>
    </g>
  );
}

export function ReadAComic() {
  return (
    <g>
      <Room />
      <Kid name="Daisy" x={80} y={GROUND} scale={0.72} label={false} pose="reach" />
      {/* An open comic in Daisy's hands, with pictures in boxes and a "POW!". */}
      <path d="M54,56 L80,60 L106,56 L106,86 L80,90 L54,86 Z" fill="#fff" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M80,60 V90" stroke={LINE} strokeWidth={1.2} />
      <rect x={58} y={62} width={18} height={10} fill="#bfe3f5" stroke={LINE} strokeWidth={0.8} />
      <rect x={58} y={75} width={8} height={9} fill="#f5a8c8" stroke={LINE} strokeWidth={0.8} />
      <rect x={68} y={75} width={8} height={9} fill="#a6db8a" stroke={LINE} strokeWidth={0.8} />
      <rect x={84} y={75} width={18} height={9} fill="#f7dc6f" stroke={LINE} strokeWidth={0.8} />
      <path d="M93,61 l2,4 l4,-2 l-1,4 l4,1 l-4,2 l2,4 l-4,-1 l-1,4 l-2,-4 l-3,3 l0,-4 l-4,0 l3,-3 l-3,-3 l4,0 Z" fill="#f2853a" stroke="#9c3c2c" strokeWidth={0.8} />
      <circle cx={57} cy={72} r={4} fill="#f2c9a0" />
      <circle cx={103} cy={72} r={4} fill="#f2c9a0" />
    </g>
  );
}
