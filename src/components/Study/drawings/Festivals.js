// Little pictures, 160 × 110 each, for the English festivals: Halloween (a ghost, a skeleton, a
// vampire, a witch, a pumpkin and a bat), Christmas (a letter, a post box, a cracker, a mince pie,
// a reindeer, Father Christmas and the North Pole) and Holi (a bonfire, a drum and coloured
// powder). Each is a component to use inside an <svg viewBox="0 0 160 110">.

const LINE = '#24324a';
const SKIN = '#f2c9a0';
const round = v => Math.round(v * 100) / 100;

function Sky({ colour = '#ece6f7', ground = null }) {
  return (
    <g>
      <rect width={160} height={110} fill={colour} />
      {ground && <rect y={96} width={160} height={14} fill={ground} />}
    </g>
  );
}

function Stars({ points, colour = '#f2c94c' }) {
  return (
    <g fill={colour}>
      {points.map(([x, y]) => (
        <path key={`${x},${y}`} d={`M${x},${y - 5} L${x + 1.5},${y - 1.5} L${x + 5},${y} L${x + 1.5},${y + 1.5} L${x},${y + 5} L${x - 1.5},${y + 1.5} L${x - 5},${y} L${x - 1.5},${y - 1.5} Z`} />
      ))}
    </g>
  );
}

// Halloween.

export function Ghost() {
  return (
    <g>
      <Sky />
      <circle cx={132} cy={22} r={12} fill="#f7e27a" />
      <path d="M50,100 V48 C50,8 110,8 110,48 V100 L100,92 L90,100 L80,92 L70,100 L60,92 Z" fill="#fff" stroke={LINE} strokeWidth={2} strokeLinejoin="round" />
      <path d="M50,58 C38,56 34,46 38,40 M110,58 C122,56 126,46 122,40" fill="none" stroke={LINE} strokeWidth={2} strokeLinecap="round" />
      <ellipse cx={70} cy={42} rx={5} ry={8} fill={LINE} />
      <ellipse cx={90} cy={42} rx={5} ry={8} fill={LINE} />
      <ellipse cx={80} cy={62} rx={7} ry={9} fill={LINE} />
    </g>
  );
}

export function Skeleton() {
  const bone = { fill: '#fff', stroke: LINE, strokeWidth: 1.5 };
  return (
    <g>
      <Sky />
      {/* The skull. */}
      <path d="M66,22 C66,4 94,4 94,22 C94,28 90,30 90,34 H70 C70,30 66,28 66,22 Z" {...bone} />
      <ellipse cx={74} cy={21} rx={4} ry={5} fill={LINE} />
      <ellipse cx={86} cy={21} rx={4} ry={5} fill={LINE} />
      <path d="M78,28 L80,25 L82,28 Z" fill={LINE} />
      <path d="M73,32 H87 M76,30 V34 M80,30 V34 M84,30 V34" stroke={LINE} strokeWidth={1} />
      {/* The backbone and ribs. */}
      <rect x={77} y={34} width={6} height={36} rx={3} {...bone} />
      {[40, 47, 54].map(y => (
        <path key={y} d={`M80,${y} C66,${y - 2} 64,${y + 6} 68,${y + 6} M80,${y} C94,${y - 2} 96,${y + 6} 92,${y + 6}`} fill="none" stroke={LINE} strokeWidth={4.5} strokeLinecap="round" />
      ))}
      {[40, 47, 54].map(y => (
        <path key={y} d={`M80,${y} C66,${y - 2} 64,${y + 6} 68,${y + 6} M80,${y} C94,${y - 2} 96,${y + 6} 92,${y + 6}`} fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
      ))}
      {/* The hips, arms and legs. */}
      <path d="M68,70 Q80,64 92,70 L90,76 H70 Z" {...bone} />
      {[
        'M70,38 L56,54 L50,72', 'M90,38 L104,54 L110,72',
        'M72,76 L66,90 L64,104', 'M88,76 L94,90 L96,104',
      ].map(d => (
        <g key={d}>
          <path d={d} fill="none" stroke={LINE} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
          <path d={d} fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}
      <path d="M58,104 H66 M94,104 H102" stroke={LINE} strokeWidth={4} strokeLinecap="round" />
    </g>
  );
}

export function Vampire() {
  return (
    <g>
      <Sky />
      {/* A black cape with a tall red collar. */}
      <path d="M30,110 C34,86 56,80 80,80 C104,80 126,86 130,110 Z" fill="#1d1d24" stroke={LINE} strokeWidth={1.5} />
      <path d="M52,86 L42,52 L72,76 Z M108,86 L118,52 L88,76 Z" fill="#c62f3f" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <rect x={72} y={66} width={16} height={18} fill="#dfe6df" stroke={LINE} strokeWidth={1.5} />
      <path d="M72,82 L80,96 L88,82 Z" fill="#fff" stroke={LINE} strokeWidth={1.5} />
      {/* A pale face, black hair in a point, red eyes and two fangs. */}
      <circle cx={80} cy={48} r={24} fill="#dfe6df" stroke={LINE} strokeWidth={1.5} />
      <path d="M56,46 C54,20 106,20 104,46 C100,34 92,32 80,42 C68,32 60,34 56,46 Z" fill="#1d1d24" />
      <path d="M64,42 L76,46 M96,42 L84,46" stroke={LINE} strokeWidth={2} strokeLinecap="round" />
      <circle cx={71} cy={50} r={2.5} fill="#c62f3f" />
      <circle cx={89} cy={50} r={2.5} fill="#c62f3f" />
      <path d="M70,60 Q80,66 90,60" fill="#9c3c2c" stroke={LINE} strokeWidth={1.5} />
      <path d="M73,61 L75,68 L77,62 M83,62 L85,68 L87,61" fill="#fff" stroke={LINE} strokeWidth={1} strokeLinejoin="round" />
    </g>
  );
}

export function Witch() {
  return (
    <g>
      <Sky />
      <path d="M34,110 C34,90 52,84 80,84 C108,84 126,90 126,110 Z" fill="#6a3fa0" stroke={LINE} strokeWidth={1.5} />
      {/* Long orange hair, a green face with a big nose, and a tall pointed black hat. */}
      <path d="M54,46 L48,92 H64 L60,56 Z M106,46 L112,92 H96 L100,56 Z" fill="#e8742c" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <circle cx={80} cy={58} r={22} fill="#9fd27a" stroke={LINE} strokeWidth={1.5} />
      <circle cx={72} cy={56} r={2.5} fill={LINE} />
      <circle cx={88} cy={56} r={2.5} fill={LINE} />
      <path d="M80,56 L86,66 L79,66" fill="#8cc266" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M72,70 Q80,76 88,70" fill="none" stroke={LINE} strokeWidth={1.8} strokeLinecap="round" />
      <path d="M68,44 L92,2 L96,44 Z" fill="#1d1d24" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <ellipse cx={80} cy={44} rx={34} ry={6} fill="#1d1d24" stroke={LINE} strokeWidth={1.5} />
      <rect x={70} y={34} width={25} height={6} fill="#6a3fa0" />
    </g>
  );
}

export function Pumpkin() {
  return (
    <g>
      <Sky ground="#c9a878" />
      <path d="M78,26 C78,16 82,12 88,10" fill="none" stroke="#3f8f3a" strokeWidth={6} strokeLinecap="round" />
      <path d="M86,16 C96,8 104,14 98,22 C94,20 90,18 86,16 Z" fill="#5fb85f" />
      <ellipse cx={58} cy={64} rx={26} ry={36} fill="#f08a24" stroke={LINE} strokeWidth={1.5} />
      <ellipse cx={102} cy={64} rx={26} ry={36} fill="#f08a24" stroke={LINE} strokeWidth={1.5} />
      <ellipse cx={80} cy={64} rx={22} ry={38} fill="#f59a3a" stroke={LINE} strokeWidth={1.5} />
      {/* A happy jack-o'-lantern face. */}
      <g fill="#5a2e0e">
        <path d="M58,50 L70,50 L64,40 Z M90,50 L102,50 L96,40 Z" />
        <path d="M76,60 L84,60 L80,52 Z" />
        <path d="M54,70 Q80,96 106,70 L98,74 L94,68 L86,76 L80,68 L74,76 L66,68 L62,74 Z" />
      </g>
    </g>
  );
}

export function Bat() {
  return (
    <g>
      <Sky colour="#e3e8f5" />
      <circle cx={80} cy={55} r={44} fill="#f7e27a" />
      {/* Big pointed wings spread out, and a little furry body with ears. */}
      <path d="M80,52 C66,40 46,32 14,34 C22,40 24,46 20,54 C30,50 36,54 36,62 C44,56 52,58 54,66 C60,58 70,58 80,64 C90,58 100,58 106,66 C108,58 116,56 124,62 C124,54 130,50 140,54 C136,46 138,40 146,34 C114,32 94,40 80,52 Z" fill="#2b2b38" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <ellipse cx={80} cy={58} rx={10} ry={14} fill="#3a3a4a" />
      <path d="M72,48 L72,34 L78,44 Z M88,48 L88,34 L82,44 Z" fill="#3a3a4a" />
      <circle cx={76} cy={50} r={2} fill="#fff" />
      <circle cx={84} cy={50} r={2} fill="#fff" />
      <path d="M77,57 L78,60 L79,57 M81,57 L82,60 L83,57" fill="#fff" stroke="#fff" strokeWidth={0.8} />
    </g>
  );
}

// Christmas.

export function Letter() {
  return (
    <g>
      <Sky colour="#eaf4fb" />
      {/* An envelope with a stamp, and a sheet of paper with writing coming out of it. */}
      <rect x={46} y={10} width={68} height={56} fill="#fff" stroke={LINE} strokeWidth={1.5} transform="rotate(-6 80 38)" />
      <path d="M54,20 h40 M54,28 h50 M54,36 h46 M54,44 h30" stroke="#9aa6b2" strokeWidth={2.5} strokeLinecap="round" transform="rotate(-6 80 38)" />
      <rect x={26} y={44} width={108} height={60} rx={3} fill="#f6e6c8" stroke={LINE} strokeWidth={1.5} />
      <path d="M26,44 L80,80 L134,44" fill="#efd9b0" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M26,104 L66,72 M134,104 L94,72" stroke={LINE} strokeWidth={1.5} />
      <rect x={110} y={50} width={18} height={20} fill="#e5484d" stroke="#fff" strokeWidth={2} strokeDasharray="2 2" />
      <path d="M119,54 c-3,-3 -7,1 -3,4 l3,3 l3,-3 c4,-3 0,-7 -3,-4 Z" fill="#fff" />
    </g>
  );
}

export function PostBox() {
  return (
    <g>
      <Sky colour="#eaf4fb" ground="#d6dde3" />
      {/* A red British pillar box with a round top, a slot, and a letter going in. */}
      <rect x={58} y={94} width={44} height={8} fill="#2b2b2b" />
      <rect x={60} y={30} width={40} height={66} fill="#d8282f" stroke={LINE} strokeWidth={1.5} />
      <path d="M56,32 C56,6 104,6 104,32 Z" fill="#d8282f" stroke={LINE} strokeWidth={1.5} />
      <rect x={56} y={30} width={48} height={6} fill="#b81e25" stroke={LINE} strokeWidth={1.5} />
      <rect x={66} y={42} width={28} height={5} rx={2} fill="#2b2b2b" />
      <rect x={68} y={56} width={24} height={14} fill="#f2c94c" stroke={LINE} strokeWidth={1} />
      <rect x={70} y={30} width={20} height={14} fill="#fff" stroke={LINE} strokeWidth={1.5} transform="rotate(-10 80 37)" />
      <path d="M70,30 L80,37 L90,30" fill="none" stroke={LINE} strokeWidth={1.2} transform="rotate(-10 80 37)" />
    </g>
  );
}

export function Cracker() {
  return (
    <g>
      <Sky colour="#fbf0e6" />
      {/* A Christmas cracker: a red tube with gold bands, pinched in and frilly at both ends. */}
      <path d="M8,36 L40,48 V62 L8,74 L14,64 L8,55 L14,46 Z" fill="#e5484d" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M152,36 L120,48 V62 L152,74 L146,64 L152,55 L146,46 Z" fill="#e5484d" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <rect x={38} y={50} width={8} height={10} fill="#b81e25" stroke={LINE} strokeWidth={1.5} />
      <rect x={114} y={50} width={8} height={10} fill="#b81e25" stroke={LINE} strokeWidth={1.5} />
      <rect x={46} y={38} width={68} height={34} rx={6} fill="#e5484d" stroke={LINE} strokeWidth={1.5} />
      <rect x={54} y={38} width={8} height={34} fill="#f2c94c" />
      <rect x={98} y={38} width={8} height={34} fill="#f2c94c" />
      <Stars points={[[80, 55], [24, 22], [136, 90], [140, 20]]} />
    </g>
  );
}

export function MincePie() {
  return (
    <g>
      <Sky colour="#fbf0e6" />
      <ellipse cx={80} cy={82} rx={66} ry={18} fill="#fff" stroke={LINE} strokeWidth={1.5} />
      <ellipse cx={80} cy={80} rx={50} ry={12} fill="#eef1f4" />
      {/* A little round pie with a crinkly edge, a pastry star on top and a sprinkle of sugar. */}
      <path d="M36,62 L42,82 Q80,94 118,82 L124,62 Z" fill="#d99a4e" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M38,68 l4,12 M50,70 l2,14 M64,72 l1,14 M80,72 v15 M96,72 l-1,14 M110,70 l-2,14 M122,68 l-4,12" stroke="#b5762e" strokeWidth={1.5} />
      <ellipse cx={80} cy={62} rx={44} ry={14} fill="#e9b46a" stroke={LINE} strokeWidth={1.5} />
      <ellipse cx={80} cy={62} rx={36} ry={10} fill="#7a3a1e" />
      <path d="M80,48 L85,58 L97,59 L88,65 L91,76 L80,70 L69,76 L72,65 L63,59 L75,58 Z" fill="#f0c27a" stroke="#b5762e" strokeWidth={1.5} strokeLinejoin="round" />
      <g fill="#fff">
        {[[60, 60], [100, 62], [70, 70], [94, 54], [84, 66], [76, 56]].map(([x, y]) => <circle key={`${x},${y}`} cx={x} cy={y} r={1.3} />)}
      </g>
    </g>
  );
}

export function Reindeer() {
  const antler = 'M0,0 C-4,-14 -6,-26 -16,-36 M-4,-14 L-16,-16 M-8,-26 L-4,-38 M-12,-32 L-24,-30';
  return (
    <g>
      <Sky colour="#eaf4fb" ground="#fff" />
      {/* Big branching antlers, a brown face, and a shiny red nose. */}
      <g fill="none" stroke="#7a4a24" strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round">
        <path d={antler} transform="translate(68 38)" />
        <path d={antler} transform="translate(92 38) scale(-1 1)" />
      </g>
      <path d="M40,110 C42,90 58,84 80,84 C102,84 118,90 120,110 Z" fill="#a0622d" stroke={LINE} strokeWidth={1.5} />
      <ellipse cx={56} cy={44} rx={12} ry={5} fill="#a0622d" stroke={LINE} strokeWidth={1.5} transform="rotate(-25 56 44)" />
      <ellipse cx={104} cy={44} rx={12} ry={5} fill="#a0622d" stroke={LINE} strokeWidth={1.5} transform="rotate(25 104 44)" />
      <path d="M62,48 C58,30 102,30 98,48 C98,62 94,82 80,90 C66,82 62,62 62,48 Z" fill="#b5763a" stroke={LINE} strokeWidth={1.5} />
      <ellipse cx={80} cy={76} rx={12} ry={10} fill="#e9c79a" />
      <circle cx={71} cy={52} r={3} fill={LINE} />
      <circle cx={89} cy={52} r={3} fill={LINE} />
      <circle cx={80} cy={72} r={7} fill="#e5383b" stroke={LINE} strokeWidth={1.5} />
      <circle cx={78} cy={70} r={2} fill="#fff" opacity={0.8} />
      <path d="M75,83 Q80,86 85,83" fill="none" stroke={LINE} strokeWidth={1.5} strokeLinecap="round" />
    </g>
  );
}

export function FatherChristmas() {
  return (
    <g>
      <Sky colour="#eaf4fb" />
      <path d="M34,110 C34,90 52,84 80,84 C108,84 126,90 126,110 Z" fill="#d8282f" stroke={LINE} strokeWidth={1.5} />
      <circle cx={80} cy={50} r={24} fill={SKIN} stroke={LINE} strokeWidth={1.5} />
      {/* A big white beard and moustache, rosy cheeks, and a red hat with white fur and a bobble. */}
      <path d="M56,52 C54,80 66,100 80,102 C94,100 106,80 104,52 C100,62 94,62 80,62 C66,62 60,62 56,52 Z" fill="#fff" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M80,62 C74,58 66,60 62,66 C70,68 76,66 80,64 C84,66 90,68 98,66 C94,60 86,58 80,62 Z" fill="#fff" stroke={LINE} strokeWidth={1.2} />
      <circle cx={71} cy={48} r={2.5} fill={LINE} />
      <circle cx={89} cy={48} r={2.5} fill={LINE} />
      <circle cx={65} cy={56} r={4} fill="#f3a5a5" />
      <circle cx={95} cy={56} r={4} fill="#f3a5a5" />
      <circle cx={80} cy={56} r={4} fill="#f0a888" stroke={LINE} strokeWidth={1} />
      <path d="M58,36 C60,8 98,2 120,22 L112,30 C104,22 100,28 102,36 Z" fill="#d8282f" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <rect x={54} y={32} width={52} height={10} rx={5} fill="#fff" stroke={LINE} strokeWidth={1.5} />
      <circle cx={120} cy={26} r={7} fill="#fff" stroke={LINE} strokeWidth={1.5} />
    </g>
  );
}

export function NorthPole() {
  const stripes = [0, 1, 2, 3, 4, 5];
  return (
    <g>
      <Sky colour="#dff0fb" />
      <path d="M0,84 C30,74 60,80 80,76 C110,70 140,80 160,76 V110 H0 Z" fill="#fff" stroke="#b7d3e6" strokeWidth={1.5} />
      {/* A tall red-and-white striped pole stuck in the snow, with a gold ball on top. */}
      <rect x={72} y={18} width={16} height={66} fill="#fff" stroke={LINE} strokeWidth={1.5} />
      {stripes.map(index => (
        <path key={index} d={`M72,${24 + index * 11} L88,${18 + index * 11} V${24 + index * 11} L72,${30 + index * 11} Z`} fill="#e5484d" />
      ))}
      <circle cx={80} cy={13} r={8} fill="#f2c94c" stroke="#b08414" strokeWidth={1.5} />
      <ellipse cx={80} cy={84} rx={18} ry={4} fill="#eef5fa" />
      {/* Snowflakes falling all round. */}
      <g stroke="#8fc3e6" strokeWidth={1.5} strokeLinecap="round">
        {[[24, 22], [44, 50], [120, 30], [140, 56], [30, 64], [110, 62]].map(([x, y]) => (
          <path key={`${x},${y}`} d={`M${x - 5},${y} h10 M${x},${y - 5} v10 M${x - 3.5},${y - 3.5} l7,7 M${x + 3.5},${y - 3.5} l-7,7`} />
        ))}
      </g>
    </g>
  );
}

// Holi.

export function Bonfire() {
  return (
    <g>
      <Sky colour="#fdf0dc" ground="#c9a878" />
      {/* Big orange and yellow flames over a pile of crossed logs. */}
      <path d="M80,6 C92,26 112,34 110,62 C120,52 120,44 118,38 C132,54 130,84 108,94 H52 C30,84 28,54 42,38 C40,44 40,52 50,62 C48,40 64,30 70,14 C72,26 78,30 80,6 Z" fill="#f2702c" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M80,38 C88,50 100,58 96,80 C92,90 68,90 64,80 C60,62 72,56 74,44 C76,52 80,50 80,38 Z" fill="#f7c843" />
      <path d="M80,62 C84,70 88,74 86,84 H74 C72,74 78,72 80,62 Z" fill="#fff4c7" />
      <g stroke={LINE} strokeWidth={1.5}>
        <rect x={34} y={86} width={92} height={10} rx={5} fill="#7a4a24" transform="rotate(12 80 91)" />
        <rect x={34} y={86} width={92} height={10} rx={5} fill="#8f5a2e" transform="rotate(-12 80 91)" />
      </g>
      <g fill="#f2a23c">
        <circle cx={40} cy={24} r={2} />
        <circle cx={122} cy={18} r={2} />
        <circle cx={130} cy={30} r={1.5} />
      </g>
    </g>
  );
}

export function Drum() {
  const zigzag = [0, 1, 2, 3, 4, 5, 6].map(index => `${index ? 'L' : 'M'}${round(46 + index * 11.33)},${index % 2 ? 84 : 46}`).join(' ');
  return (
    <g>
      <Sky colour="#fdf0dc" />
      {/* A drum with its cords in a zigzag, and two drumsticks crossed over the top. */}
      <path d="M40,40 V86 C40,100 120,100 120,86 V40 Z" fill="#e5484d" stroke={LINE} strokeWidth={1.5} />
      <path d={zigzag} fill="none" stroke="#f2c94c" strokeWidth={2.5} strokeLinejoin="round" />
      <path d="M40,86 C40,100 120,100 120,86" fill="none" stroke="#f2c94c" strokeWidth={5} />
      <ellipse cx={80} cy={40} rx={40} ry={12} fill="#fff8e6" stroke={LINE} strokeWidth={1.5} />
      <ellipse cx={80} cy={40} rx={40} ry={12} fill="none" stroke="#f2c94c" strokeWidth={4} />
      <g strokeLinecap="round">
        <path d="M54,8 L84,36 M106,8 L76,36" stroke={LINE} strokeWidth={6} />
        <path d="M54,8 L84,36 M106,8 L76,36" stroke="#d99a4e" strokeWidth={3.5} />
      </g>
      <circle cx={54} cy={8} r={5} fill="#fff8e6" stroke={LINE} strokeWidth={1.5} />
      <circle cx={106} cy={8} r={5} fill="#fff8e6" stroke={LINE} strokeWidth={1.5} />
    </g>
  );
}

const PILES = [[34, '#ef4f9f'], [80, '#f7c843'], [126, '#3fbf6a']];
const PUFFS = [
  [30, 30, '#ef4f9f'], [44, 20, '#ef4f9f'], [70, 18, '#f7c843'], [84, 28, '#f7c843'], [110, 22, '#3fbf6a'],
  [124, 32, '#3fbf6a'], [56, 36, '#9b6be0'], [100, 40, '#4f8fe0'], [140, 18, '#4f8fe0'], [18, 46, '#9b6be0'],
];

export function Powder() {
  return (
    <g>
      <Sky colour="#fdf6ec" />
      {/* Clouds of coloured powder thrown up in the air, and three heaps of it in bowls. */}
      {PUFFS.map(([x, y, colour]) => (
        <circle key={`${x},${y}`} cx={x} cy={y} r={11} fill={colour} opacity={0.6} />
      ))}
      {PILES.map(([x, colour]) => (
        <g key={x}>
          <path d={`M${x - 22},${round(80)} C${x - 18},56 ${x + 18},56 ${x + 22},80 Z`} fill={colour} stroke={LINE} strokeWidth={1.5} />
          <path d={`M${x - 24},80 H${x + 24} C${x + 22},98 ${x - 22},98 ${x - 24},80 Z`} fill="#c98a4b" stroke={LINE} strokeWidth={1.5} />
          <circle cx={x - 6} cy={68} r={2} fill="#fff" opacity={0.7} />
        </g>
      ))}
    </g>
  );
}
