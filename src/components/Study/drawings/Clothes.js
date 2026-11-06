// Little pictures, 160 × 110 each, for the clothes of unit 3: the clothes, clean and dirty, new
// and old, a hat and a scarf, the four seasons and the clothes for the sun and the snow. Each is a
// component to use inside an <svg viewBox="0 0 160 110">.

const LINE = '#24324a';

const round = v => Math.round(v * 100) / 100;

function Back({ colour = '#eef6fb' }) {
  return <rect width={160} height={110} fill={colour} />;
}

const outline = {
  stroke: LINE, strokeWidth: 2, strokeLinejoin: 'round', strokeLinecap: 'round',
};

function Sparkle({ x, y, size = 6 }) {
  return (
    <path
      d={`M${x},${y - size} Q${x},${y} ${x + size},${y} Q${x},${y} ${x},${y + size} Q${x},${y} ${x - size},${y} Q${x},${y} ${x},${y - size} Z`}
      fill="#f2c94c"
      stroke="#d9a520"
      strokeWidth={1}
    />
  );
}

function TShirtShape({ colour }) {
  return (
    <g>
      <path d="M62,16 L38,28 L26,50 L44,60 L52,48 L52,98 L108,98 L108,48 L116,60 L134,50 L122,28 L98,16 Q80,32 62,16 Z" fill={colour} {...outline} />
      <path d="M66,18 Q80,30 94,18" fill="none" stroke={LINE} strokeWidth={1.5} />
    </g>
  );
}

export function TShirt() {
  return (
    <g>
      <Back />
      <TShirtShape colour="#f2c94c" />
      <circle cx={80} cy={64} r={11} fill="#ef6fa3" stroke={LINE} strokeWidth={1.5} />
    </g>
  );
}

export function Sweater() {
  const zigzag = [...Array(9)].map((_, i) => `${54 + i * 6.5},${i % 2 ? 60 : 52}`).join(' ');
  return (
    <g>
      <Back />
      <path d="M62,14 L38,24 L20,84 L36,90 L52,46 L52,98 L108,98 L108,46 L124,90 L140,84 L122,24 L98,14 Q80,28 62,14 Z" fill="#3fae6a" {...outline} />
      <path d="M62,14 Q80,32 98,14" fill="none" stroke={LINE} strokeWidth={5} />
      <path d="M62,14 Q80,32 98,14" fill="none" stroke="#2f8a52" strokeWidth={3} />
      {/* Ribbed cuffs and waistband, and a knitted zigzag across the chest. */}
      <path d="M21,80 L37,86 L36,90 L20,84 Z M139,80 L123,86 L124,90 L140,84 Z" fill="#2f8a52" stroke={LINE} strokeWidth={1.5} />
      <rect x={52} y={88} width={56} height={10} fill="#2f8a52" stroke={LINE} strokeWidth={1.5} />
      {[58, 64, 70, 76, 82, 88, 94, 100].map(x => <path key={x} d={`M${x},89 v8`} stroke="#24704a" strokeWidth={1.2} />)}
      <polyline points={zigzag} fill="none" stroke="#fff" strokeWidth={3} strokeLinejoin="round" />
      <polyline points={zigzag.replace(/,(\d+)/g, (_, y) => `,${Number(y) + 14}`)} fill="none" stroke="#f2c94c" strokeWidth={3} strokeLinejoin="round" />
    </g>
  );
}

export function Jacket() {
  return (
    <g>
      <Back />
      <path d="M62,12 L38,22 L22,90 L38,94 L50,48 L50,100 L110,100 L110,48 L122,94 L138,90 L122,22 L98,12 L80,30 Z" fill="#e06a4a" {...outline} />
      {/* The collar, the zip down the middle with its pull, and two pockets. */}
      <path d="M62,12 L72,36 L80,30 L88,36 L98,12" fill="#b84a30" {...outline} />
      <path d="M80,30 V100" stroke={LINE} strokeWidth={2} />
      <path d="M80,32 V98" stroke="#d9dde3" strokeWidth={2} strokeDasharray="2 2" />
      <rect x={76} y={40} width={8} height={12} rx={2} fill="#d9dde3" stroke={LINE} strokeWidth={1.5} />
      <path d="M56,70 h16 v14 h-16 Z M88,70 h16 v14 h-16 Z" fill="#b84a30" stroke={LINE} strokeWidth={1.5} />
      <path d="M22,86 L38,90 M138,86 L122,90" stroke={LINE} strokeWidth={4} />
    </g>
  );
}

export function Dress() {
  return (
    <g>
      <Back colour="#fdf1f6" />
      <path d="M64,10 L70,10 Q80,22 90,10 L96,10 L100,48 L128,100 L32,100 L60,48 Z" fill="#9b6be0" {...outline} />
      <path d="M60,46 H100 L101,54 H59 Z" fill="#f2c94c" stroke={LINE} strokeWidth={1.5} />
      {[[60, 70], [80, 66], [100, 70], [50, 88], [72, 86], [90, 88], [110, 88]].map(([x, y]) => (
        <circle key={`${x},${y}`} cx={x} cy={y} r={4} fill="#fff" />
      ))}
    </g>
  );
}

export function Skirt() {
  return (
    <g>
      <Back colour="#fdf1f6" />
      <path d="M54,24 H106 L134,94 Q80,104 26,94 Z" fill="#ef4f6f" {...outline} />
      <rect x={52} y={16} width={56} height={12} rx={2} fill="#b8324f" {...outline} />
      {[44, 62, 80, 98, 116].map((x) => {
        const top = round(64 + (x - 80) * 0.38);
        return <path key={x} d={`M${top},30 L${x},97`} stroke="#b8324f" strokeWidth={2} />;
      })}
    </g>
  );
}

function TrousersShape({ colour }) {
  return <path d="M52,14 H108 L116,100 H88 L80,42 L72,100 H44 Z" fill={colour} {...outline} />;
}

export function Jeans() {
  return (
    <g>
      <Back />
      <TrousersShape colour="#3d6fb8" />
      <path d="M52,14 H108 V24 H52 Z" fill="#335f9e" stroke={LINE} strokeWidth={1.5} />
      {/* Orange stitching, front pockets with rivets, a button and turned-up cuffs. */}
      <path d="M54,28 Q64,40 72,26 M106,28 Q96,40 88,26" fill="none" stroke="#f2994a" strokeWidth={1.8} strokeDasharray="3 2" />
      <path d="M80,24 V40" stroke="#f2994a" strokeWidth={1.8} strokeDasharray="3 2" />
      <circle cx={80} cy={19} r={3} fill="#d9a520" stroke={LINE} strokeWidth={1} />
      <circle cx={58} cy={30} r={1.8} fill="#d9a520" />
      <circle cx={102} cy={30} r={1.8} fill="#d9a520" />
      <path d="M45,92 H72 L73,100 H44 Z M88,92 H115 L116,100 H87 Z" fill="#7fa6dc" stroke={LINE} strokeWidth={1.5} />
    </g>
  );
}

export function Trousers() {
  return (
    <g>
      <Back />
      <TrousersShape colour="#b08a5a" />
      {/* A belt with a buckle, and a crease down each leg. */}
      <rect x={52} y={14} width={56} height={9} fill="#5a3a1e" stroke={LINE} strokeWidth={1.5} />
      <rect x={74} y={12} width={12} height={13} rx={2} fill="none" stroke="#f2c94c" strokeWidth={2.5} />
      <path d="M62,28 L58,98 M98,28 L102,98" stroke="#8a6a40" strokeWidth={1.5} />
    </g>
  );
}

function TrainerShape({ colour, stripe }) {
  return (
    <g>
      <path d="M22,84 L22,58 Q22,42 38,44 L62,46 Q70,60 90,62 L118,66 Q140,70 140,84 Z" fill={colour} {...outline} />
      <path d="M18,84 H144 Q144,96 132,96 H26 Q18,96 18,84 Z" fill="#fff" {...outline} />
      <path d="M42,76 Q70,72 92,64 M48,82 Q76,78 104,68" fill="none" stroke={stripe} strokeWidth={4} strokeLinecap="round" />
      {[50, 60, 70].map((x, i) => (
        <path key={x} d={`M${x},${47 + i * 4} l8,6 M${x + 8},${47 + i * 4} l-8,6`} stroke="#fff" strokeWidth={2} strokeLinecap="round" />
      ))}
    </g>
  );
}

export function Trainers() {
  return (
    <g>
      <Back />
      <g transform="translate(14 -14) scale(0.86)">
        <TrainerShape colour="#2f8fd0" stripe="#f2c94c" />
      </g>
      <g transform="translate(-6 8) scale(0.86)">
        <TrainerShape colour="#4fa8e8" stripe="#f2c94c" />
      </g>
    </g>
  );
}

// Clean: a white T-shirt, sparkling, with soap bubbles.
export function Clean() {
  return (
    <g>
      <Back colour="#e6f6fd" />
      <TShirtShape colour="#ffffff" />
      <Sparkle x={70} y={58} size={9} />
      <Sparkle x={94} y={76} size={6} />
      <Sparkle x={136} y={20} size={8} />
      <Sparkle x={22} y={78} size={7} />
      {[[24, 24, 7], [140, 78, 6], [132, 96, 4], [34, 98, 5]].map(([x, y, r]) => (
        <circle key={`${x},${y}`} cx={x} cy={y} r={r} fill="#fff" stroke="#6cc0ec" strokeWidth={1.5} />
      ))}
    </g>
  );
}

// Dirty: the same T-shirt covered in mud, with flies and smelly lines.
export function Dirty() {
  return (
    <g>
      <Back colour="#f3eee4" />
      <TShirtShape colour="#ffffff" />
      {[[66, 50, 11, 8], [94, 70, 13, 9], [70, 86, 9, 6], [42, 42, 6, 5], [112, 36, 5, 4], [90, 40, 4, 3]].map(([x, y, rx, ry]) => (
        <ellipse key={`${x},${y}`} cx={x} cy={y} rx={rx} ry={ry} fill="#8a5a2a" opacity={0.85} />
      ))}
      <path d="M58,94 q4,6 8,0 M100,94 q3,6 6,0" fill="#8a5a2a" stroke="#8a5a2a" strokeWidth={3} />
      <path d="M22,18 q-6,8 0,16 t0,16 M140,14 q-6,8 0,16 t0,16" fill="none" stroke="#6b8e23" strokeWidth={2.5} strokeLinecap="round" />
      {[[132, 72], [24, 72]].map(([x, y]) => (
        <g key={x}>
          <ellipse cx={x - 3} cy={y - 4} rx={4} ry={3} fill="#cfe6f7" stroke={LINE} strokeWidth={0.8} />
          <ellipse cx={x + 3} cy={y - 4} rx={4} ry={3} fill="#cfe6f7" stroke={LINE} strokeWidth={0.8} />
          <circle cx={x} cy={y} r={3.5} fill={LINE} />
        </g>
      ))}
    </g>
  );
}

function ShoeShape({ colour, sole }) {
  return (
    <g>
      <path d="M24,82 L26,50 Q28,40 40,42 L60,44 Q72,58 96,60 L120,64 Q140,68 140,82 Z" fill={colour} {...outline} />
      <path d="M20,82 H144 V90 H20 Z" fill={sole} {...outline} />
      <path d="M58,46 Q66,56 78,58" fill="none" stroke={LINE} strokeWidth={1.5} />
    </g>
  );
}

// New: a shiny red shoe with a price tag and sparkles.
export function New() {
  return (
    <g>
      <Back colour="#fff7e0" />
      <ShoeShape colour="#e5484d" sole="#5a3a1e" />
      <path d="M44,50 Q60,52 70,60" fill="none" stroke="#fff" strokeWidth={4} strokeLinecap="round" opacity={0.8} />
      <path d="M118,30 L132,16 L150,34 L136,48 Z" fill="#fff" {...outline} />
      <circle cx={134} cy={23} r={2.5} fill={LINE} />
      <path d="M132,23 Q118,40 112,62" fill="none" stroke={LINE} strokeWidth={1.2} />
      <Sparkle x={22} y={24} size={9} />
      <Sparkle x={86} y={28} size={7} />
      <Sparkle x={150} y={78} size={6} />
    </g>
  );
}

// Old: a scruffy brown shoe with a hole, a patch and its sole coming off.
export function Old() {
  return (
    <g>
      <Back colour="#f1ece4" />
      <path d="M24,82 L26,50 Q28,40 40,42 L60,44 Q72,58 96,60 L120,64 Q140,68 140,82 Z" fill="#9a7a5a" {...outline} />
      <path d="M20,82 H100 V90 H20 Z" fill="#6b5a4a" {...outline} />
      {/* The front of the sole hangs open like a mouth. */}
      <path d="M100,84 L144,98 L142,104 L98,90 Z" fill="#6b5a4a" {...outline} />
      <ellipse cx={86} cy={70} rx={7} ry={5} fill="#3a2a20" />
      <rect x={34} y={56} width={16} height={14} fill="#7fa6dc" stroke={LINE} strokeWidth={1.5} transform="rotate(-8 42 63)" />
      <path d="M36,58 l12,10 M48,58 l-12,10" stroke={LINE} strokeWidth={1} strokeDasharray="2 2" />
      <path d="M60,46 q6,10 18,12" fill="none" stroke={LINE} strokeWidth={1.5} />
      <path d="M110,40 q4,-8 8,0 t8,0 M30,24 q4,-8 8,0 t8,0" fill="none" stroke="#9aa0a8" strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}

// Hat: a woolly hat with a bobble.
export function Hat() {
  return (
    <g>
      <Back />
      <path d="M38,80 Q38,26 80,26 Q122,26 122,80 Z" fill="#e5484d" {...outline} />
      {[52, 66, 80, 94, 108].map(x => <path key={x} d={`M${x},${x === 80 ? 30 : 36} V78`} stroke="#b8324f" strokeWidth={2} />)}
      <rect x={32} y={76} width={96} height={18} rx={6} fill="#f2f2f2" {...outline} />
      <circle cx={80} cy={20} r={13} fill="#f2f2f2" {...outline} />
    </g>
  );
}

// Scarf: a striped woolly scarf, wound round once, its two ends hanging down with fringes.
function ScarfEnd({ x, angle }) {
  return (
    <g transform={`rotate(${angle} ${x + 9} 40)`}>
      <rect x={x} y={40} width={18} height={54} fill="#f2994a" {...outline} />
      {[52, 66, 80].map(y => <rect key={y} x={x + 1} y={y} width={16} height={6} fill="#4f8fe0" />)}
      {[2, 6, 10, 14].map(dx => <path key={dx} d={`M${x + dx + 1},95 v8`} stroke="#f2994a" strokeWidth={2.5} strokeLinecap="round" />)}
    </g>
  );
}

export function Scarf() {
  return (
    <g>
      <Back />
      <ScarfEnd x={62} angle={10} />
      <ScarfEnd x={82} angle={-8} />
      <path d="M36,32 A44,16 0 1 0 124,32 A44,16 0 1 0 36,32 Z M52,32 A28,7 0 1 1 108,32 A28,7 0 1 1 52,32 Z" fill="#f2994a" fillRule="evenodd" {...outline} />
    </g>
  );
}

function Tree({ crown, trunk = '#8a5a2a' }) {
  return (
    <g>
      <rect x={72} y={56} width={16} height={44} fill={trunk} />
      <path d="M80,70 L64,52 M80,64 L98,48" stroke={trunk} strokeWidth={5} strokeLinecap="round" />
      {crown}
    </g>
  );
}

function Crown({ colour }) {
  return (
    <g fill={colour}>
      <circle cx={80} cy={36} r={26} />
      <circle cx={58} cy={48} r={18} />
      <circle cx={102} cy={48} r={18} />
    </g>
  );
}

// Spring: a tree in pink blossom, with flowers in the grass.
export function Spring() {
  return (
    <g>
      <Back colour="#e3f3fc" />
      <rect y={96} width={160} height={14} fill="#8fd46a" />
      <Tree crown={<Crown colour="#7cc86a" />} />
      {[[66, 26], [88, 22], [96, 42], [60, 46], [80, 44], [106, 54], [52, 56], [74, 34]].map(([x, y]) => (
        <circle key={`${x},${y}`} cx={x} cy={y} r={5} fill="#f7a8c8" stroke="#ef6fa3" strokeWidth={1} />
      ))}
      {[[20, '#ef6fa3'], [36, '#f2c94c'], [124, '#9b6be0'], [142, '#ef6fa3']].map(([x, colour]) => (
        <g key={x}>
          <path d={`M${x},104 V90`} stroke="#3e8e41" strokeWidth={2.5} />
          <circle cx={x} cy={88} r={6} fill={colour} />
          <circle cx={x} cy={88} r={2.5} fill="#fff4c7" />
        </g>
      ))}
      <path d="M128,26 q4,-5 8,0 q4,-5 8,0" fill="none" stroke={LINE} strokeWidth={1.8} strokeLinecap="round" />
    </g>
  );
}

function Sun({ x, y, r }) {
  return (
    <g>
      {[...Array(10)].map((_, i) => {
        const a = (i * Math.PI) / 5;
        return (
          <path
            key={i}
            d={`M${round(x + (r + 4) * Math.cos(a))},${round(y + (r + 4) * Math.sin(a))} L${round(x + (r + 12) * Math.cos(a))},${round(y + (r + 12) * Math.sin(a))}`}
            stroke="#f2b01e"
            strokeWidth={3.5}
            strokeLinecap="round"
          />
        );
      })}
      <circle cx={x} cy={y} r={r} fill="#f2c94c" stroke="#f2b01e" strokeWidth={2} />
    </g>
  );
}

// Summer: a big hot sun over the beach and the sea.
export function Summer() {
  return (
    <g>
      <Back colour="#bfe6fb" />
      <rect y={66} width={160} height={20} fill="#3fa9e0" />
      <path d="M0,70 q10,-4 20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0" fill="none" stroke="#fff" strokeWidth={2} />
      <path d="M0,86 Q80,76 160,86 V110 H0 Z" fill="#f5dc9a" />
      <Sun x={44} y={32} r={18} />
      <path d="M118,96 V48" stroke={LINE} strokeWidth={2.5} />
      <path d="M90,52 Q118,24 146,52 Z" fill="#ef4f6f" {...outline} />
      <path d="M109,52 Q118,24 127,52" fill="#fff" stroke={LINE} strokeWidth={1.5} />
    </g>
  );
}

// Autumn: a tree with orange and brown leaves, and leaves falling.
export function Autumn() {
  const leaves = [[26, 40, '#e0732a'], [134, 30, '#c0392b'], [40, 80, '#d9a520'], [126, 72, '#e0732a'], [112, 98, '#c0392b'], [30, 100, '#d9a520']];
  return (
    <g>
      <Back colour="#fbf0dd" />
      <rect y={96} width={160} height={14} fill="#c9a26b" />
      <Tree crown={<Crown colour="#e0732a" />} />
      <g fill="#c0392b"><circle cx={70} cy={30} r={8} /><circle cx={96} cy={40} r={9} /><circle cx={60} cy={54} r={7} /></g>
      <g fill="#d9a520"><circle cx={86} cy={24} r={7} /><circle cx={106} cy={56} r={6} /></g>
      {leaves.map(([x, y, colour]) => (
        <path key={`${x},${y}`} d={`M${x - 7},${y} Q${x},${y - 7} ${x + 7},${y} Q${x},${y + 7} ${x - 7},${y} Z`} fill={colour} stroke="#7a4a24" strokeWidth={1} transform={`rotate(-30 ${x} ${y})`} />
      ))}
    </g>
  );
}

// Winter: a bare tree, snow falling and a snowman.
export function Winter() {
  const flakes = [[14, 16], [40, 30], [30, 60], [128, 14], [150, 40], [110, 30], [60, 12], [146, 66], [8, 44]];
  return (
    <g>
      <Back colour="#dbe8f5" />
      <path d="M0,90 Q80,82 160,92 V110 H0 Z" fill="#fff" />
      <g stroke="#7a5532" strokeLinecap="round">
        <path d="M58,96 V36" strokeWidth={8} />
        <path d="M58,62 L40,42 M58,52 L76,32 M58,44 L50,26 M40,42 L34,40 M76,32 L84,30" strokeWidth={4} />
      </g>
      <path d="M36,40 q4,-4 8,0 M70,32 q6,-5 12,-2 M46,26 q4,-4 8,0" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" />
      <circle cx={118} cy={84} r={14} fill="#fff" {...outline} />
      <circle cx={118} cy={60} r={10} fill="#fff" {...outline} />
      <circle cx={114} cy={58} r={1.5} fill={LINE} />
      <circle cx={122} cy={58} r={1.5} fill={LINE} />
      <path d="M118,61 l7,2 l-7,1 Z" fill="#f2994a" />
      <path d="M109,68 Q118,73 127,68" fill="none" stroke="#e5484d" strokeWidth={4} />
      <circle cx={118} cy={80} r={1.8} fill={LINE} />
      <circle cx={118} cy={88} r={1.8} fill={LINE} />
      {flakes.map(([x, y]) => <circle key={`${x},${y}`} cx={x} cy={y} r={2.8} fill="#fff" stroke="#9ab6d4" strokeWidth={0.8} />)}
    </g>
  );
}

// Sunhat: a straw hat with a wide brim and a ribbon, under the sun.
export function Sunhat() {
  return (
    <g>
      <Back colour="#fff6da" />
      <Sun x={136} y={22} r={10} />
      <ellipse cx={80} cy={78} rx={66} ry={18} fill="#f0d68a" {...outline} />
      <path d="M50,76 Q50,36 80,36 Q110,36 110,76 Q80,86 50,76 Z" fill="#f0d68a" {...outline} />
      <path d="M51,66 Q80,76 109,66 L110,74 Q80,84 50,74 Z" fill="#ef4f6f" stroke={LINE} strokeWidth={1.5} />
      <path d="M30,78 Q80,92 130,78" fill="none" stroke="#d4b25e" strokeWidth={1.5} />
    </g>
  );
}

// Sunglasses: big dark glasses, the sun shining on them.
export function Sunglasses() {
  return (
    <g>
      <Back colour="#fff6da" />
      <Sparkle x={80} y={22} size={9} />
      <path d="M14,46 Q14,40 22,40 H70 Q76,40 74,48 Q70,80 44,80 Q18,80 14,46 Z" fill="#24324a" stroke="#e5484d" strokeWidth={4} strokeLinejoin="round" />
      <path d="M146,46 Q146,40 138,40 H90 Q84,40 86,48 Q90,80 116,80 Q142,80 146,46 Z" fill="#24324a" stroke="#e5484d" strokeWidth={4} strokeLinejoin="round" />
      <path d="M74,48 Q80,42 86,48" fill="none" stroke="#e5484d" strokeWidth={4} />
      <path d="M26,50 L40,64 M100,50 L114,64" stroke="#fff" strokeWidth={4} strokeLinecap="round" opacity={0.6} />
    </g>
  );
}

function Boot({ colour }) {
  return (
    <g>
      <path d="M40,16 H70 V74 L104,78 Q114,80 114,92 H40 Z" fill={colour} {...outline} />
      <rect x={36} y={12} width={38} height={10} rx={4} fill="#f2f2f2" {...outline} />
      <path d="M38,92 H116 V98 H38 Z" fill="#3a2a20" {...outline} />
    </g>
  );
}

// Boots: a pair of tall winter boots in the snow.
export function Boots() {
  return (
    <g>
      <Back colour="#dbe8f5" />
      <rect y={98} width={160} height={12} fill="#fff" />
      <g transform="translate(-14 8) scale(0.85)"><Boot colour="#2f8fd0" /></g>
      <g transform="translate(50 8) scale(0.85)"><Boot colour="#2f8fd0" /></g>
      {[[14, 20], [140, 14], [150, 50], [120, 36]].map(([x, y]) => <circle key={`${x},${y}`} cx={x} cy={y} r={2.8} fill="#fff" stroke="#9ab6d4" strokeWidth={0.8} />)}
    </g>
  );
}
