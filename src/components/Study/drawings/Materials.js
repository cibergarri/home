// Little pictures, 160 × 110 each, of the materials things are made of: wood, stone, metal,
// fabric, straw, plastic and paper. Each shows the material itself, big. Each is a component to
// use inside an <svg viewBox="0 0 160 110">.

const LINE = '#24324a';

function Background({ colour = '#eef6fb' }) {
  return <rect width={160} height={110} fill={colour} />;
}

// Three wooden planks, one above the other, with wavy grain and a knot or two.
export function Wood() {
  const planks = [
    { y: 14, fill: '#c98a4b', knot: 46 },
    { y: 42, fill: '#b5763c', knot: 112 },
    { y: 70, fill: '#d29858', knot: 70 },
  ];
  return (
    <g>
      <Background colour="#f4eee4" />
      {planks.map(({ y, fill, knot }) => (
        <g key={y}>
          <rect x={14} y={y} width={132} height={26} rx={3} fill={fill} stroke={LINE} strokeWidth={2} />
          <path
            d={`M18,${y + 8} q30,-4 60,0 t64,0 M18,${y + 18} q36,4 70,0 t54,0`}
            fill="none"
            stroke="#7a4a24"
            strokeWidth={1.5}
            strokeLinecap="round"
          />
          <ellipse cx={knot} cy={y + 13} rx={7} ry={4} fill="none" stroke="#7a4a24" strokeWidth={1.5} />
          <ellipse cx={knot} cy={y + 13} rx={2.5} ry={1.5} fill="#7a4a24" />
          <circle cx={22} cy={y + 13} r={1.8} fill="#5a3a1c" />
          <circle cx={138} cy={y + 13} r={1.8} fill="#5a3a1c" />
        </g>
      ))}
    </g>
  );
}

// A wall of big grey stones, laid like bricks, with mortar between them.
export function Stone() {
  const rows = [
    [[8, 50], [62, 42], [108, 44]],
    [[8, 28], [40, 46], [90, 34], [128, 24]],
    [[8, 44], [56, 40], [100, 52]],
  ];
  const shades = ['#9aa3ad', '#b4bcc4', '#878f99', '#a7aeb6'];
  return (
    <g>
      <Background />
      <rect x={4} y={10} width={152} height={92} rx={4} fill="#d8d2c4" />
      {rows.map((row, r) => row.map(([x, width], s) => {
        const y = 14 + r * 29;
        return (
          <g key={`${r}-${x}`}>
            <rect x={x} y={y} width={width} height={25} rx={9} fill={shades[(r + s) % 4]} stroke={LINE} strokeWidth={2} />
            <path d={`M${x + 7},${y + 7} q6,-3 12,0`} fill="none" stroke="#e2e6ea" strokeWidth={2} strokeLinecap="round" />
            <circle cx={x + width - 10} cy={y + 17} r={1.8} fill="#6b737d" />
          </g>
        );
      }))}
    </g>
  );
}

// A shiny steel plate with rivets, shine streaks and sparkles, and a bolt and nut beside it.
export function Metal() {
  return (
    <g>
      <Background />
      <rect x={14} y={14} width={94} height={82} rx={6} fill="#b9c3cc" stroke={LINE} strokeWidth={2.5} />
      <path d="M32,16 l-16,21 v12 l30,-33 Z M64,16 l-48,63 v9 l55,-72 Z" fill="#eef2f5" />
      <path d="M94,94 l12,-16 v-6 l-16,22 Z" fill="#eef2f5" />
      {[[22, 22], [100, 22], [22, 88], [100, 88]].map(([x, y]) => (
        <g key={`${x},${y}`}>
          <circle cx={x} cy={y} r={4} fill="#8a96a2" stroke={LINE} strokeWidth={1.5} />
          <circle cx={x - 1} cy={y - 1} r={1.2} fill="#fff" />
        </g>
      ))}
      {/* A bolt standing up, and a nut. */}
      <rect x={124} y={30} width={12} height={46} fill="#a3adb7" stroke={LINE} strokeWidth={2} />
      <path d="M124,38 h12 M124,46 h12 M124,54 h12 M124,62 h12 M124,70 h12" stroke="#6b7682" strokeWidth={1.5} />
      <path d="M116,30 h28 v-10 h-28 Z" fill="#c4ccd4" stroke={LINE} strokeWidth={2} strokeLinejoin="round" />
      <path d="M118,84 l6,-8 h12 l6,8 l-6,8 h-12 Z" fill="#c4ccd4" stroke={LINE} strokeWidth={2} strokeLinejoin="round" />
      <circle cx={130} cy={84} r={4} fill="#eef6fb" stroke={LINE} strokeWidth={1.5} />
      {[[60, 40], [146, 18]].map(([x, y]) => (
        <path key={`${x},${y}`} d={`M${x},${y - 7} L${x + 2},${y - 2} L${x + 7},${y} L${x + 2},${y + 2} L${x},${y + 7} L${x - 2},${y + 2} L${x - 7},${y} L${x - 2},${y - 2} Z`} fill="#fff" stroke="#9aa6b2" strokeWidth={1} />
      ))}
    </g>
  );
}

// A pile of folded cloths, one with spots and one with stripes, with their stitched edges.
export function Fabric() {
  return (
    <g>
      <Background colour="#fbf1f5" />
      {/* The bottom cloth: blue with white spots. */}
      <path d="M18,66 h124 q8,0 8,8 v14 q0,8 -8,8 h-124 q-8,0 -8,-8 v-14 q0,-8 8,-8 Z" fill="#4f8fe0" stroke={LINE} strokeWidth={2} />
      {[24, 44, 64, 84, 104, 124, 140].map((x, i) => (
        <circle key={x} cx={x} cy={i % 2 ? 76 : 86} r={3.5} fill="#fff" />
      ))}
      <path d="M14,74 h132" stroke="#fff" strokeWidth={1.5} strokeDasharray="4 3" />
      {/* The middle cloth: red and yellow stripes. */}
      <path d="M26,40 h108 q8,0 8,8 v12 q0,8 -8,8 h-108 q-8,0 -8,-8 v-12 q0,-8 8,-8 Z" fill="#ef6f6f" stroke={LINE} strokeWidth={2} />
      {[34, 54, 74, 94, 114].map(x => (
        <rect key={x} x={x} y={41} width={9} height={26} fill="#f7dc6f" />
      ))}
      <path d="M26,40 h108 q8,0 8,8 v12 q0,8 -8,8 h-108 q-8,0 -8,-8 v-12 q0,-8 8,-8 Z" fill="none" stroke={LINE} strokeWidth={2} />
      {/* The top cloth: green, folded over at the front. */}
      <path d="M36,16 h88 q8,0 8,8 v10 q0,8 -8,8 h-88 q-8,0 -8,-8 v-10 q0,-8 8,-8 Z" fill="#3fae6a" stroke={LINE} strokeWidth={2} />
      <path d="M32,22 h96" stroke="#fff" strokeWidth={1.5} strokeDasharray="4 3" />
      <path d="M36,34 h88" stroke="#2b7a4a" strokeWidth={2} />
      {/* A needle and thread. */}
      <path d="M150,18 L136,32" stroke="#8a96a2" strokeWidth={2.5} strokeLinecap="round" />
      <path d="M150,18 q6,20 -6,30" fill="none" stroke="#ef4f6f" strokeWidth={1.5} />
    </g>
  );
}

// A golden bale of straw tied with two strings, and loose straws on the ground.
export function Straw() {
  const strands = [];
  for (let i = 0; i < 12; i += 1) {
    const x = 26 + i * 9.5;
    strands.push(`M${Math.round(x * 100) / 100},28 l${i % 2 ? 3 : -3},60`);
  }
  return (
    <g>
      <Background colour="#eaf4fb" />
      <rect y={88} width={160} height={22} fill="#a8d97f" />
      <rect x={18} y={24} width={124} height={68} rx={8} fill="#f2c94c" stroke={LINE} strokeWidth={2.5} />
      <path d={strands.join(' ')} stroke="#c9952a" strokeWidth={1.8} strokeLinecap="round" />
      <path d="M18,40 h124 M18,74 h124" stroke="#d4a53a" strokeWidth={1.2} />
      <rect x={52} y={22} width={6} height={72} fill="#b5642a" stroke={LINE} strokeWidth={1} />
      <rect x={102} y={22} width={6} height={72} fill="#b5642a" stroke={LINE} strokeWidth={1} />
      {/* Bits of straw sticking out. */}
      <path
        d="M22,26 l-6,-8 M30,24 l-2,-10 M70,24 l4,-9 M120,24 l3,-10 M138,26 l8,-7 M142,50 l10,-3 M142,66 l10,4 M18,56 l-10,-3 M30,96 l-14,4 M128,96 l16,3 M80,96 l-4,8"
        stroke="#d9a630"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </g>
  );
}

// A toy brick, its studs on top.
function Brick({
  x, y, width, fill, dark,
}) {
  const studs = [];
  for (let sx = x + 9; sx < x + width; sx += 16) studs.push(sx);
  return (
    <g>
      {studs.map(sx => (
        <rect key={sx} x={sx - 5} y={y - 6} width={10} height={7} rx={2} fill={fill} stroke={LINE} strokeWidth={1.5} />
      ))}
      <rect x={x} y={y} width={width} height={24} rx={3} fill={fill} stroke={LINE} strokeWidth={2} />
      <path d={`M${x + 3},${y + 4} h${width - 6}`} stroke="#fff" strokeOpacity={0.6} strokeWidth={2} strokeLinecap="round" />
      <path d={`M${x + 3},${y + 21} h${width - 6}`} stroke={dark} strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}

// Bright plastic toy bricks with round studs on top, and a see-through plastic bottle.
export function Plastic() {
  return (
    <g>
      <Background />
      <Brick x={10} y={74} width={64} fill="#e5484d" dark="#a8282d" />
      <Brick x={74} y={74} width={32} fill="#4f8fe0" dark="#2f5fa8" />
      <Brick x={26} y={44} width={48} fill="#f2c94c" dark="#b58f1c" />
      <Brick x={40} y={14} width={32} fill="#3fae6a" dark="#2b7a4a" />
      {/* A plastic bottle. */}
      <rect x={128} y={10} width={14} height={10} rx={2} fill="#4f8fe0" stroke={LINE} strokeWidth={2} />
      <path d="M130,20 h10 q0,8 8,14 v58 q0,6 -6,6 h-14 q-6,0 -6,-6 v-58 q8,-6 8,-14 Z" fill="#bfe6f7" fillOpacity={0.85} stroke={LINE} strokeWidth={2} strokeLinejoin="round" />
      <rect x={122} y={54} width={26} height={18} fill="#6cc0ec" />
      <path d="M126,40 v44" stroke="#fff" strokeWidth={3} strokeLinecap="round" />
    </g>
  );
}

// A big white sheet of paper with its corner folded down, writing lines on it, and a paper plane.
export function Paper() {
  return (
    <g>
      <Background colour="#dcebf5" />
      <path d="M30,8 h66 l18,18 v76 h-84 Z" fill="#fff" stroke={LINE} strokeWidth={2} strokeLinejoin="round" />
      <path d="M96,8 v18 h18 Z" fill="#dde3ea" stroke={LINE} strokeWidth={2} strokeLinejoin="round" />
      {[36, 48, 60, 72, 84].map(y => (
        <path key={y} d={`M40,${y} h64`} stroke="#8ec5f2" strokeWidth={1.5} />
      ))}
      <path d="M46,8 v94" stroke="#f5a8c8" strokeWidth={1.5} />
      <path d="M50,32 q8,-6 14,0 t14,0" fill="none" stroke="#6b737d" strokeWidth={1.5} strokeLinecap="round" />
      {/* A paper plane. */}
      <path d="M120,56 L156,40 L134,72 L130,62 Z" fill="#fff" stroke={LINE} strokeWidth={1.8} strokeLinejoin="round" />
      <path d="M130,62 L156,40" stroke={LINE} strokeWidth={1.2} />
      <path d="M118,70 q-6,6 -2,12" fill="none" stroke="#9aa6b2" strokeWidth={1.5} strokeDasharray="3 3" />
    </g>
  );
}
