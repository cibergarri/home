import { Kid } from './parts';

// Little pictures, 160 × 110 each, for English unit 6: the places to have fun in summer and the
// ways to get there. Each is a component to use inside an <svg viewBox="0 0 160 110">.

const GROUND = 104;
const LINE = '#24324a';

function Sky({ ground = '#a8d97f', top = 90 }) {
  return (
    <g>
      <rect width={160} height={110} fill="#e6f4fb" />
      <rect y={top} width={160} height={110 - top} fill={ground} />
    </g>
  );
}

function Fish({
  x, y, colour, flip = false,
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`}>
      <ellipse cx={0} cy={0} rx={11} ry={7} fill={colour} stroke={LINE} strokeWidth={1} />
      <path d="M10,0 L19,-7 L19,7 Z" fill={colour} stroke={LINE} strokeWidth={1} strokeLinejoin="round" />
      <circle cx={-5} cy={-2} r={1.6} fill={LINE} />
    </g>
  );
}

export function Aquarium() {
  return (
    <g>
      <rect width={160} height={110} fill="#f2ead9" />
      {/* A big glass tank full of water, with fish, weed, stones and bubbles. */}
      <rect x={10} y={10} width={140} height={86} rx={4} fill="#5fb8e8" stroke={LINE} strokeWidth={3} />
      <rect x={12} y={12} width={136} height={8} fill="#8fd0f2" />
      <path d="M12,94 Q40,84 80,90 Q120,84 148,94 Z" fill="#e8d3a8" />
      <path d="M30,92 Q24,74 32,62 Q26,50 32,40 M120,92 Q128,76 122,64 Q130,54 124,46" fill="none" stroke="#3fae6a" strokeWidth={4} strokeLinecap="round" />
      <Fish x={62} y={44} colour="#f2853a" />
      <Fish x={102} y={66} colour="#f2c94c" flip />
      <Fish x={64} y={76} colour="#ef6fa3" />
      {[[96, 40, 3], [100, 30, 2], [94, 22, 2.5]].map(([x, y, r]) => (
        <circle key={y} cx={x} cy={y} r={r} fill="none" stroke="#fff" strokeWidth={1.2} />
      ))}
      <rect x={6} y={96} width={148} height={8} fill="#7a5532" />
    </g>
  );
}

export function Beach() {
  return (
    <g>
      <rect width={160} height={110} fill="#bfe6fa" />
      <circle cx={132} cy={20} r={12} fill="#f7c948" />
      <rect y={50} width={160} height={24} fill="#3f9fe0" />
      <path d="M10,58 q6,-4 12,0 M70,62 q6,-4 12,0 M120,56 q6,-4 12,0" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
      <path d="M0,72 Q80,62 160,72 V110 H0 Z" fill="#f2d98a" />
      {/* A striped sunshade, a bucket and spade, and a shell. */}
      <path d="M50,32 V96" stroke="#7a5532" strokeWidth={3} />
      <path d="M20,44 Q50,10 80,44 Z" fill="#e5484d" />
      <path d="M40,44 Q42,22 50,18 Q58,22 60,44 Z" fill="#fff" />
      <path d="M100,80 h20 l-3,18 h-14 Z" fill="#4f8fe0" stroke={LINE} strokeWidth={1.2} strokeLinejoin="round" />
      <path d="M102,80 Q110,70 118,80" fill="none" stroke={LINE} strokeWidth={1.2} />
      <path d="M128,98 L136,76" stroke="#e06a4a" strokeWidth={2.5} />
      <path d="M133,74 h8 l-3,8 h-4 Z" fill="#e06a4a" />
      <path d="M24,96 a7,7 0 0 1 14,0 Z" fill="#f5a8c8" stroke="#c96a8a" strokeWidth={1} />
    </g>
  );
}

export function Funfair() {
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];
  const colours = ['#e5484d', '#f2c94c', '#4f8fe0', '#3fae6a'];
  const round = v => Math.round(v * 100) / 100;
  return (
    <g>
      <Sky />
      {/* A big wheel with its cars on the left, and a striped roundabout tent on the right. */}
      <path d="M52,46 L30,96 M52,46 L74,96" stroke="#8a8f98" strokeWidth={4} />
      <circle cx={52} cy={46} r={36} fill="none" stroke="#9b6be0" strokeWidth={3} />
      {angles.map((angle, index) => {
        const x = round(52 + 36 * Math.cos((angle * Math.PI) / 180));
        const y = round(46 + 36 * Math.sin((angle * Math.PI) / 180));
        return (
          <g key={angle}>
            <line x1={52} y1={46} x2={x} y2={y} stroke="#9b6be0" strokeWidth={1.5} />
            <rect x={x - 5} y={y} width={10} height={8} rx={2} fill={colours[index % 4]} stroke={LINE} strokeWidth={0.8} />
          </g>
        );
      })}
      <circle cx={52} cy={46} r={4} fill="#9b6be0" />
      <path d="M96,58 L124,30 L152,58 Z" fill="#fff" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M124,30 L106,58 H114 Z M124,30 L134,58 H142 Z" fill="#e5484d" />
      <path d="M124,30 V22" stroke={LINE} strokeWidth={1.5} />
      <path d="M124,22 l8,3 l-8,3 Z" fill="#f2c94c" />
      <rect x={100} y={58} width={48} height={4} fill="#f2c94c" />
      <path d="M104,62 V96 M124,62 V96 M144,62 V96" stroke="#c9a24a" strokeWidth={2} />
      <rect x={110} y={74} width={10} height={8} rx={3} fill="#fff" stroke={LINE} strokeWidth={1} />
      <rect x={130} y={80} width={10} height={8} rx={3} fill="#fff" stroke={LINE} strokeWidth={1} />
      <rect x={98} y={96} width={52} height={4} fill="#9b6be0" />
    </g>
  );
}

export function Mountains() {
  return (
    <g>
      <rect width={160} height={110} fill="#d4ecf9" />
      <circle cx={136} cy={18} r={10} fill="#f7c948" />
      {/* Three tall peaks with snow on top, and fir trees at the bottom. */}
      <path d="M-10,96 L40,26 L90,96 Z" fill="#7d8ca3" />
      <path d="M50,96 L94,12 L140,96 Z" fill="#6a7a92" />
      <path d="M100,96 L136,44 L172,96 Z" fill="#8a98ad" />
      <path d="M40,26 L30,40 L36,38 L42,44 L50,40 Z" fill="#fff" />
      <path d="M94,12 L82,34 L90,30 L96,38 L106,32 Z" fill="#fff" />
      <path d="M136,44 L128,56 L134,54 L140,58 L144,55 Z" fill="#fff" />
      <rect y={92} width={160} height={18} fill="#8fcf6a" />
      {[16, 64, 118, 146].map(x => (
        <g key={x}>
          <path d={`M${x},74 L${x - 8},94 H${x + 8} Z`} fill="#2f7a3a" />
          <rect x={x - 1.5} y={94} width={3} height={5} fill="#7a5532" />
        </g>
      ))}
    </g>
  );
}

export function SafariPark() {
  return (
    <g>
      <Sky ground="#e8cf7a" top={84} />
      <circle cx={140} cy={16} r={10} fill="#f7a948" />
      {/* An acacia tree, a tall giraffe and a striped zebra. */}
      <rect x={20} y={50} width={5} height={36} fill="#7a5532" />
      <ellipse cx={22} cy={46} rx={22} ry={7} fill="#5f9f3a" />
      <g>
        <path d="M54,62 L50,98 M60,62 L58,98 M76,62 L78,98 M82,62 L86,98" stroke="#d9a440" strokeWidth={4} strokeLinecap="round" />
        <ellipse cx={68} cy={62} rx={18} ry={10} fill="#f2c25a" />
        <path d="M78,60 L90,18" stroke="#f2c25a" strokeWidth={8} strokeLinecap="round" />
        <ellipse cx={95} cy={18} rx={9} ry={5} fill="#f2c25a" />
        <path d="M88,12 v-6 M93,12 v-6" stroke="#9c6a2a" strokeWidth={2} strokeLinecap="round" />
        <circle cx={96} cy={16} r={1.5} fill={LINE} />
        {[[62, 58], [72, 64], [64, 66], [84, 40], [87, 28], [74, 56]].map(([x, y]) => (
          <circle key={`${x},${y}`} cx={x} cy={y} r={2.5} fill="#b5742a" />
        ))}
      </g>
      <g>
        <path d="M116,80 V100 M122,80 V100 M138,80 V100 M144,80 V100" stroke="#fff" strokeWidth={4} strokeLinecap="round" />
        <path d="M112,80 L104,62 L114,58 L122,76 Z" fill="#fff" stroke={LINE} strokeWidth={1} strokeLinejoin="round" />
        <path d="M104,62 L114,58" stroke={LINE} strokeWidth={3} strokeLinecap="round" />
        <path d="M107,68 l8,-3 M110,74 l8,-3" stroke={LINE} strokeWidth={2.5} />
        <ellipse cx={101} cy={64} rx={9} ry={5} transform="rotate(35 101 64)" fill="#fff" stroke={LINE} strokeWidth={1} />
        <circle cx={101} cy={62} r={1.3} fill={LINE} />
        <ellipse cx={130} cy={78} rx={18} ry={9} fill="#fff" stroke={LINE} strokeWidth={1} />
        <path d="M120,70 V86 M126,69 V87 M132,69 V87 M138,70 V86" stroke={LINE} strokeWidth={2.5} />
        <path d="M148,76 l6,8" stroke={LINE} strokeWidth={1.5} />
      </g>
    </g>
  );
}

export function SkatePark() {
  return (
    <g>
      <Sky ground="#b7bec8" top={96} />
      {/* A big curved ramp, and Toby riding his skateboard down it. */}
      <path d="M0,40 Q10,96 80,96 Q150,96 160,40 V110 H0 Z" fill="#9aa6b2" stroke="#5a6472" strokeWidth={2} />
      <path d="M20,74 l8,-4 M130,74 l8,4" stroke="#ef6fa3" strokeWidth={3} strokeLinecap="round" />
      <Kid name="Toby" x={80} y={88} scale={0.64} label={false} pose="reach" />
      <rect x={62} y={88} width={36} height={4} rx={2} fill="#e5484d" stroke={LINE} strokeWidth={1} />
      <circle cx={68} cy={94} r={2.5} fill={LINE} />
      <circle cx={92} cy={94} r={2.5} fill={LINE} />
    </g>
  );
}

function House({
  x, wall, roof, width = 26,
}) {
  return (
    <g>
      <rect x={x} y={70} width={width} height={24} fill={wall} stroke="#8a6a4a" strokeWidth={1} />
      <path d={`M${x - 4},71 L${x + width / 2},54 L${x + width + 4},71 Z`} fill={roof} stroke="#8a3a2a" strokeWidth={1} strokeLinejoin="round" />
      <rect x={x + width / 2 - 3} y={82} width={6} height={12} fill="#8a5a32" />
      <rect x={x + 3} y={76} width={6} height={6} fill="#bfe3f5" stroke="#8a6a4a" strokeWidth={0.8} />
    </g>
  );
}

export function Village() {
  return (
    <g>
      <Sky top={92} />
      <path d="M0,72 Q50,52 100,66 Q130,58 160,64 V96 H0 Z" fill="#8fcf6a" />
      {/* A few little houses round a church tower, and a road. */}
      <rect x={72} y={30} width={18} height={64} fill="#e8dcc4" stroke="#8a6a4a" strokeWidth={1} />
      <path d="M70,31 L81,12 L92,31 Z" fill="#8a5a32" />
      <circle cx={81} cy={44} r={5} fill="#fff" stroke={LINE} strokeWidth={1} />
      <path d="M81,44 V41 M81,44 h2.5" stroke={LINE} strokeWidth={1} />
      <House x={14} wall="#fde9c9" roof="#e06a4a" />
      <House x={44} wall="#fff" roof="#c94a3a" width={22} />
      <House x={98} wall="#fde9c9" roof="#c94a3a" />
      <House x={130} wall="#fff" roof="#e06a4a" width={22} />
      <rect y={94} width={160} height={16} fill="#c9b48a" />
    </g>
  );
}

export function WaterPark() {
  return (
    <g>
      <Sky ground="#f0e0c0" top={80} />
      {/* A tall tower with a winding slide down into a pool, and a big splash. */}
      <rect x={14} y={18} width={22} height={62} fill="#f2c94c" stroke="#b58a1a" strokeWidth={1.5} />
      <path d="M14,18 H36" stroke="#e5484d" strokeWidth={4} />
      <path d="M20,24 V80 M30,24 V80 M20,34 H30 M20,46 H30 M20,58 H30 M20,70 H30" stroke="#b58a1a" strokeWidth={1.2} />
      <path d="M36,24 Q100,24 70,50 Q40,76 110,80" fill="none" stroke="#e5484d" strokeWidth={9} strokeLinecap="round" />
      <path d="M36,24 Q100,24 70,50 Q40,76 110,80" fill="none" stroke="#7fd0f5" strokeWidth={3} strokeLinecap="round" />
      <rect x={60} y={80} width={96} height={22} rx={6} fill="#3fa8e8" stroke="#2a7ab0" strokeWidth={1.5} />
      <path d="M108,78 q-6,-10 -2,-16 M116,76 q2,-12 8,-14 M112,78 v-18" fill="none" stroke="#7fd0f5" strokeWidth={3} strokeLinecap="round" />
      <path d="M72,92 q6,-4 12,0 M130,92 q6,-4 12,0" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}

function Road() {
  return (
    <g>
      <rect width={160} height={110} fill="#e6f4fb" />
      <rect y={88} width={160} height={22} fill="#6a7280" />
      <path d="M6,100 H26 M46,100 H66 M86,100 H106 M126,100 H146" stroke="#fff" strokeWidth={2.5} />
    </g>
  );
}

function Wheel({ x, y, r = 9 }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#2b2b2b" />
      <circle cx={x} cy={y} r={r / 2.5} fill="#c9d6df" />
    </g>
  );
}

export function ByBoat() {
  return (
    <g>
      <rect width={160} height={110} fill="#d4ecf9" />
      <rect y={74} width={160} height={36} fill="#3f9fe0" />
      {/* A ferry with a cabin, round windows and a funnel, on the waves. */}
      <rect x={96} y={26} width={12} height={20} fill="#e5484d" stroke={LINE} strokeWidth={1.2} />
      <path d="M100,20 q4,-6 0,-10 M106,18 q4,-6 0,-10" fill="none" stroke="#b7bec8" strokeWidth={2} strokeLinecap="round" />
      <rect x={46} y={44} width={70} height={22} rx={2} fill="#fff" stroke={LINE} strokeWidth={1.5} />
      {[56, 72, 88, 104].map(x => <circle key={x} cx={x} cy={55} r={4} fill="#bfe3f5" stroke={LINE} strokeWidth={1} />)}
      <path d="M16,64 H148 L132,88 H32 Z" fill="#2f5fa0" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M24,72 H142" stroke="#fff" strokeWidth={2.5} />
      <path d="M8,94 q8,-5 16,0 q8,5 16,0 M110,96 q8,-5 16,0 q8,5 16,0" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}

export function ByBus() {
  return (
    <g>
      <Road />
      {/* A long yellow bus with a row of windows and a door. */}
      <rect x={12} y={26} width={136} height={62} rx={8} fill="#f2c94c" stroke={LINE} strokeWidth={2} />
      {[20, 46, 72, 98].map(x => <rect key={x} x={x} y={34} width={20} height={20} rx={2} fill="#bfe3f5" stroke={LINE} strokeWidth={1.2} />)}
      <rect x={124} y={34} width={18} height={44} rx={2} fill="#bfe3f5" stroke={LINE} strokeWidth={1.2} />
      <path d="M133,34 V78" stroke={LINE} strokeWidth={1.2} />
      <rect x={12} y={62} width={112} height={5} fill="#e5484d" />
      <rect x={144} y={70} width={6} height={6} fill="#fff4c7" stroke={LINE} strokeWidth={1} />
      <Wheel x={38} y={88} r={10} />
      <Wheel x={116} y={88} r={10} />
    </g>
  );
}

export function ByCar() {
  return (
    <g>
      <Road />
      {/* A little red car seen from the side. */}
      <path d="M44,58 L58,36 H104 L120,58 Z" fill="#e5484d" stroke={LINE} strokeWidth={2} strokeLinejoin="round" />
      <path d="M54,57 L63,42 H80 V57 Z M86,57 V42 H101 L112,57 Z" fill="#bfe3f5" stroke={LINE} strokeWidth={1.2} strokeLinejoin="round" />
      <rect x={18} y={56} width={126} height={28} rx={10} fill="#e5484d" stroke={LINE} strokeWidth={2} />
      <rect x={136} y={62} width={8} height={6} rx={2} fill="#fff4c7" />
      <rect x={18} y={64} width={6} height={6} rx={2} fill="#f2853a" />
      <path d="M82,62 V82" stroke="#9c2c2c" strokeWidth={1.2} />
      <Wheel x={46} y={86} r={11} />
      <Wheel x={116} y={86} r={11} />
    </g>
  );
}

export function ByTrain() {
  return (
    <g>
      <rect width={160} height={110} fill="#e6f4fb" />
      <rect y={92} width={160} height={18} fill="#a8d97f" />
      <path d="M0,96 H160" stroke="#7a5532" strokeWidth={3} />
      {[8, 24, 40, 56, 72, 88, 104, 120, 136, 152].map(x => <rect key={x} x={x - 3} y={96} width={6} height={4} fill="#7a5532" />)}
      {/* A green engine with its chimney and steam, pulling a carriage. */}
      <path d="M118,30 q-6,-8 2,-14 q8,-6 16,0" fill="none" stroke="#b7bec8" strokeWidth={4} strokeLinecap="round" />
      <rect x={112} y={30} width={10} height={20} fill={LINE} />
      <rect x={92} y={48} width={52} height={36} rx={4} fill="#3fae6a" stroke={LINE} strokeWidth={1.5} />
      <rect x={76} y={34} width={30} height={50} rx={3} fill="#2f8f5f" stroke={LINE} strokeWidth={1.5} />
      <rect x={82} y={40} width={18} height={14} fill="#bfe3f5" stroke={LINE} strokeWidth={1} />
      <path d="M144,84 L154,92 H144 Z" fill="#e5484d" />
      <rect x={8} y={44} width={62} height={40} rx={4} fill="#e5484d" stroke={LINE} strokeWidth={1.5} />
      {[14, 32, 50].map(x => <rect key={x} x={x} y={50} width={14} height={14} rx={2} fill="#bfe3f5" stroke={LINE} strokeWidth={1} />)}
      <path d="M70,76 H76" stroke={LINE} strokeWidth={3} />
      {[22, 56, 90, 130].map(x => <Wheel key={x} x={x} y={88} r={7} />)}
    </g>
  );
}

export function OnFoot() {
  return (
    <g>
      <rect width={160} height={110} fill="#e6f4fb" />
      <rect y={94} width={160} height={16} fill="#d9d4c8" />
      <path d="M0,94 H160" stroke="#b7b0a0" strokeWidth={2} />
      {/* Daisy walking along the pavement, and her footprints behind her. */}
      <Kid name="Daisy" x={104} y={GROUND} scale={0.76} label={false} />
      <g fill="#8a8f98">
        {[[20, 100], [34, 104], [48, 100], [62, 104], [76, 100]].map(([x, y]) => (
          <g key={x}>
            <ellipse cx={x} cy={y} rx={5} ry={2.4} />
            <circle cx={x + 6} cy={y} r={1.6} />
          </g>
        ))}
      </g>
      <path d="M8,82 h8 M10,78 h10 M6,86 h10" stroke="#9aa6b2" strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}
