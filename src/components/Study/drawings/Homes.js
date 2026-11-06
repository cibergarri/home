// Little pictures, 160 × 110 each, of the kinds of homes in the UK: a house, a flat, a cottage, a
// castle, a caravan and a houseboat. Each is a component to use inside an <svg viewBox="0 0 160 110">.

const LINE = '#24324a';

function Sky({ ground = '#a8d97f' }) {
  return (
    <g>
      <rect width={160} height={110} fill="#dff0fb" />
      <rect y={96} width={160} height={14} fill={ground} />
    </g>
  );
}

function Window({
  x, y, width = 16, height = 16,
}) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill="#bfe6f7" stroke={LINE} strokeWidth={1.8} />
      <path d={`M${x + width / 2},${y} v${height} M${x},${y + height / 2} h${width}`} stroke={LINE} strokeWidth={1.2} />
    </g>
  );
}

// A house with a red roof, a chimney, two windows upstairs and a door.
export function House() {
  return (
    <g>
      <Sky />
      <rect x={100} y={14} width={12} height={22} fill="#b5563c" stroke={LINE} strokeWidth={2} />
      <path d="M36,46 L80,12 L124,46 Z" fill="#e5484d" stroke={LINE} strokeWidth={2.5} strokeLinejoin="round" />
      <rect x={44} y={46} width={72} height={50} fill="#f7e3b0" stroke={LINE} strokeWidth={2.5} />
      <Window x={52} y={54} />
      <Window x={92} y={54} />
      <rect x={72} y={68} width={16} height={28} rx={2} fill="#4f8fe0" stroke={LINE} strokeWidth={2} />
      <circle cx={84} cy={83} r={1.6} fill="#f2c94c" />
      <path d="M8,96 q6,-14 12,0 Z M140,96 q6,-14 12,0 Z" fill="#3f8f3a" />
    </g>
  );
}

// A tall block of flats, with rows of windows and little balconies.
export function Flat() {
  const floors = [14, 30, 46, 62];
  return (
    <g>
      <Sky ground="#c9ced4" />
      <rect x={46} y={6} width={68} height={90} fill="#f2994a" stroke={LINE} strokeWidth={2.5} />
      <rect x={42} y={4} width={76} height={6} fill="#b5642a" stroke={LINE} strokeWidth={2} />
      {floors.map(y => [54, 74, 94].map(x => (
        <Window key={`${x},${y}`} x={x} y={y} width={12} height={11} />
      )))}
      {floors.map(y => (
        <path key={y} d={`M52,${y + 13} h56`} stroke={LINE} strokeWidth={2} />
      ))}
      <rect x={72} y={78} width={16} height={18} fill="#4f8fe0" stroke={LINE} strokeWidth={2} />
      <path d="M80,78 v18" stroke={LINE} strokeWidth={1.2} />
      <rect x={14} y={64} width={22} height={32} fill="#9aa6b2" stroke={LINE} strokeWidth={1.5} />
      <rect x={124} y={50} width={24} height={46} fill="#9aa6b2" stroke={LINE} strokeWidth={1.5} />
    </g>
  );
}

// A little country cottage with a thick straw roof, small windows and flowers by the door.
export function Cottage() {
  return (
    <g>
      <Sky />
      <rect x={42} y={56} width={76} height={40} fill="#fffaf0" stroke={LINE} strokeWidth={2.5} />
      <path d="M30,60 Q34,24 80,20 Q126,24 130,60 Z" fill="#e3b04b" stroke={LINE} strokeWidth={2.5} strokeLinejoin="round" />
      <path d="M44,52 q4,-14 12,-24 M64,54 q2,-16 6,-30 M90,54 q-2,-16 -4,-32 M110,52 q-2,-14 -10,-26" fill="none" stroke="#b5862a" strokeWidth={1.8} strokeLinecap="round" />
      <path d="M30,60 q12,4 25,0 t25,0 t25,0 t25,0" fill="none" stroke="#b5862a" strokeWidth={2} />
      <Window x={50} y={66} width={14} height={13} />
      <Window x={96} y={66} width={14} height={13} />
      <path d="M72,96 v-18 q8,-8 16,0 v18 Z" fill="#3fae6a" stroke={LINE} strokeWidth={2} />
      {[[48, '#ef4f6f'], [58, '#f2c94c'], [104, '#c3a6f2'], [114, '#ef4f6f']].map(([x, colour]) => (
        <g key={x}>
          <path d={`M${x},96 v-6`} stroke="#3f8f3a" strokeWidth={2} />
          <circle cx={x} cy={89} r={3.5} fill={colour} stroke={LINE} strokeWidth={1} />
        </g>
      ))}
    </g>
  );
}

// A grey stone castle with two towers, battlements, flags and a big gate.
export function Castle() {
  const battlements = (x, width, y) => {
    const teeth = [];
    for (let tx = x; tx < x + width; tx += 10) teeth.push(<rect key={tx} x={tx} y={y - 7} width={6} height={7} fill="#a7aeb6" stroke={LINE} strokeWidth={1.5} />);
    return teeth;
  };
  return (
    <g>
      <Sky />
      {battlements(50, 60, 40)}
      <rect x={46} y={40} width={68} height={56} fill="#b4bcc4" stroke={LINE} strokeWidth={2.5} />
      {battlements(18, 30, 24)}
      {battlements(114, 30, 24)}
      <rect x={16} y={24} width={32} height={72} fill="#a7aeb6" stroke={LINE} strokeWidth={2.5} />
      <rect x={112} y={24} width={32} height={72} fill="#a7aeb6" stroke={LINE} strokeWidth={2.5} />
      <path d="M32,17 v-14 M128,17 v-14" stroke={LINE} strokeWidth={2} />
      <path d="M32,3 l14,4 l-14,4 Z M128,3 l14,4 l-14,4 Z" fill="#e5484d" />
      <path d="M26,46 v-8 q6,-6 12,0 v8 Z M122,46 v-8 q6,-6 12,0 v8 Z" fill={LINE} />
      <path d="M66,96 v-26 q14,-16 28,0 v26 Z" fill="#7a5532" stroke={LINE} strokeWidth={2.5} />
      <path d="M73,96 v-28 M80,96 v-32 M87,96 v-28" stroke="#5a3a1c" strokeWidth={1.5} />
      <path d="M56,52 h10 M96,62 h12 M60,80 h8 M100,84 h8 M22,64 h10 M128,72 h10" stroke="#8a929c" strokeWidth={1.5} />
    </g>
  );
}

// A white caravan with a stripe, a window, a door and one wheel, on the road.
export function Caravan() {
  return (
    <g>
      <Sky ground="#8a929c" />
      <path d="M0,103 h160" stroke="#fff" strokeWidth={2} strokeDasharray="10 8" />
      <path d="M24,84 V44 Q24,22 50,22 H118 Q138,22 138,44 V84 Z" fill="#fff" stroke={LINE} strokeWidth={2.5} strokeLinejoin="round" />
      <rect x={24} y={62} width={114} height={8} fill="#1f9e8f" />
      <path d="M24,84 V44 Q24,22 50,22 H118 Q138,22 138,44 V84 Z" fill="none" stroke={LINE} strokeWidth={2.5} strokeLinejoin="round" />
      <rect x={36} y={34} width={40} height={20} rx={5} fill="#bfe6f7" stroke={LINE} strokeWidth={2} />
      <rect x={100} y={34} width={24} height={50} rx={3} fill="#f2c94c" stroke={LINE} strokeWidth={2} />
      <rect x={106} y={40} width={12} height={12} rx={2} fill="#bfe6f7" stroke={LINE} strokeWidth={1.5} />
      <path d="M138,78 H154" stroke={LINE} strokeWidth={3} strokeLinecap="round" />
      <circle cx={154} cy={78} r={3} fill={LINE} />
      <circle cx={66} cy={88} r={11} fill="#3a3a3a" stroke={LINE} strokeWidth={2} />
      <circle cx={66} cy={88} r={4} fill="#c9ced4" />
    </g>
  );
}

// A long narrow houseboat on the river, with round windows, a chimney and plants on its roof.
export function Houseboat() {
  return (
    <g>
      <rect width={160} height={110} fill="#dff0fb" />
      <rect y={36} width={160} height={14} fill="#a8d97f" />
      <rect y={50} width={160} height={60} fill="#6cc0ec" />
      <rect x={30} y={48} width={104} height={26} rx={3} fill="#e5484d" stroke={LINE} strokeWidth={2.5} />
      <path d="M8,72 L20,84 H138 L152,72 Z" fill="#2f5f4f" stroke={LINE} strokeWidth={2.5} strokeLinejoin="round" />
      <path d="M16,72 H146" stroke="#f2c94c" strokeWidth={3} />
      {[46, 66, 86, 106].map(x => (
        <circle key={x} cx={x} cy={60} r={6} fill="#bfe6f7" stroke={LINE} strokeWidth={2} />
      ))}
      <rect x={120} y={54} width={10} height={18} fill="#2f5f4f" stroke={LINE} strokeWidth={1.5} />
      <rect x={40} y={32} width={8} height={16} fill="#3a3a3a" stroke={LINE} strokeWidth={1.5} />
      <path d="M44,28 q-4,-6 2,-10 q6,-4 2,-10" fill="none" stroke="#9aa6b2" strokeWidth={2} strokeLinecap="round" />
      <rect x={70} y={42} width={26} height={6} fill="#b5763c" stroke={LINE} strokeWidth={1.5} />
      <circle cx={76} cy={38} r={4.5} fill="#ef4f6f" />
      <circle cx={84} cy={37} r={4.5} fill="#f2c94c" />
      <circle cx={91} cy={38} r={4.5} fill="#ef4f6f" />
      <path d="M10,94 q8,-4 16,0 t16,0 M64,98 q8,-4 16,0 t16,0 M116,92 q8,-4 16,0 t16,0" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}
