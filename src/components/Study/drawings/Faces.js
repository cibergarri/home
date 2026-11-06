// Little pictures, 160 × 110 each, for English unit 4: a child seen from the shoulders up, each
// showing one thing: the hair (curly, straight, long, short, dark or fair), a beard or a moustache,
// or something to wear (a crown, earrings, glasses, a necklace or a wig). Each is a component to
// use inside an <svg viewBox="0 0 160 110">.

const LINE = '#24324a';
const SKIN = '#f2c9a0';
const BROWN = '#a0622d';

// The background, the shoulders in a T-shirt, the neck, the ears and the face. `back` is drawn
// behind it all (long hair behind the head) and `children` over it (hair, beards and things).
function Person({
  shirt = '#4f8fe0', bg = '#eef6fb', back = null, ears = true, smile = true, children,
}) {
  return (
    <g>
      <rect width={160} height={110} fill={bg} />
      {back}
      <rect x={72} y={66} width={16} height={22} fill={SKIN} stroke={LINE} strokeWidth={1.5} />
      <path d="M34,110 C34,90 52,84 80,84 C108,84 126,90 126,110 Z" fill={shirt} stroke={LINE} strokeWidth={1.5} />
      <path d="M70,84 Q80,94 90,84" fill={SKIN} stroke={LINE} strokeWidth={1.5} />
      {ears && (
        <g fill={SKIN} stroke={LINE} strokeWidth={1.5}>
          <circle cx={56} cy={52} r={6} />
          <circle cx={104} cy={52} r={6} />
        </g>
      )}
      <circle cx={80} cy={50} r={24} fill={SKIN} stroke={LINE} strokeWidth={1.5} />
      <circle cx={71} cy={50} r={2.5} fill={LINE} />
      <circle cx={89} cy={50} r={2.5} fill={LINE} />
      <circle cx={66} cy={58} r={3.5} fill="#f3a5a5" opacity={0.7} />
      <circle cx={94} cy={58} r={3.5} fill="#f3a5a5" opacity={0.7} />
      {smile && <path d="M73,60 Q80,66 87,60" fill="none" stroke={LINE} strokeWidth={1.8} strokeLinecap="round" />}
      {children}
    </g>
  );
}

// Short hair, like a cap on the top of the head.
function Cap({ colour = BROWN }) {
  return <path d="M55,48 C52,20 108,20 105,48 C100,36 60,36 55,48 Z" fill={colour} stroke={LINE} strokeWidth={1.5} />;
}

export function ShortHair() {
  return (
    <Person>
      <Cap />
    </Person>
  );
}

export function LongHair() {
  return (
    <Person
      shirt="#ef6fa3"
      back={<path d="M54,44 C50,14 110,14 106,44 L118,110 H42 Z" fill={BROWN} stroke={LINE} strokeWidth={1.5} />}
      ears={false}
    >
      {/* The hair falls over both shoulders and down out of the picture. */}
      <path d="M56,44 C52,62 50,86 48,110 H63 C63,90 62,70 61,52 Z" fill={BROWN} stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M104,44 C108,62 110,86 112,110 H97 C97,90 98,70 99,52 Z" fill={BROWN} stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M54,50 C48,18 112,18 106,50 C102,36 88,30 80,32 C72,30 58,36 54,50 Z" fill={BROWN} stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M55,70 C54,86 53,98 52,108 M105,70 C106,86 107,98 108,108" fill="none" stroke="#7a4a24" strokeWidth={1.5} />
    </Person>
  );
}

export function StraightHair() {
  return (
    <Person
      shirt="#f2c94c"
      back={<path d="M52,44 C50,16 110,16 108,44 V76 H52 Z" fill={BROWN} stroke={LINE} strokeWidth={1.5} />}
      ears={false}
    >
      {/* A bob cut straight across: a fringe over the forehead and the sides down to the chin. */}
      <path d="M54,42 C54,20 106,20 106,42 V40 H54 Z" fill={BROWN} stroke={LINE} strokeWidth={1.5} />
      <rect x={52} y={38} width={10} height={38} fill={BROWN} stroke={LINE} strokeWidth={1.5} />
      <rect x={98} y={38} width={10} height={38} fill={BROWN} stroke={LINE} strokeWidth={1.5} />
      <rect x={56} y={30} width={48} height={11} fill={BROWN} />
      <path d="M54,41 H106" stroke={LINE} strokeWidth={1.5} />
      <path d="M66,26 V40 M74,24 V40 M82,24 V40 M90,24 V40 M98,27 V40 M56,46 V74 M104,46 V74" stroke="#7a4a24" strokeWidth={1.5} />
    </Person>
  );
}

const CURLS = [
  [56, 30], [66, 22], [78, 18], [90, 20], [101, 26], [108, 36], [110, 48], [110, 60], [52, 38], [50, 50], [50, 62],
  [62, 30], [74, 26], [86, 26], [97, 32],
];

export function CurlyHair() {
  return (
    <Person shirt="#3fae6a" ears={false}>
      {CURLS.map(([x, y]) => (
        <g key={`${x},${y}`}>
          <circle cx={x} cy={y} r={8} fill={BROWN} stroke={LINE} strokeWidth={1.5} />
          <path d={`M${x - 3},${y + 1} a3,3 0 1,1 4,2`} fill="none" stroke="#7a4a24" strokeWidth={1.5} strokeLinecap="round" />
        </g>
      ))}
    </Person>
  );
}

export function DarkHair() {
  return (
    <Person shirt="#e06a4a">
      {/* Thick, very black hair with a fringe swept to one side. */}
      <path d="M53,50 C46,14 112,10 107,50 C104,40 98,36 92,34 C84,42 68,44 58,40 C56,44 55,46 53,50 Z" fill="#1d1d24" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M70,24 Q80,30 92,26" fill="none" stroke="#4a4a58" strokeWidth={2} strokeLinecap="round" />
    </Person>
  );
}

export function FairHair() {
  const fair = '#f7d54a';
  return (
    <Person shirt="#9b6be0">
      {/* Bright yellow hair in two bunches. */}
      <g fill={fair} stroke={LINE} strokeWidth={1.5}>
        <ellipse cx={46} cy={56} rx={10} ry={15} />
        <ellipse cx={114} cy={56} rx={10} ry={15} />
        <path d="M55,48 C52,18 108,18 105,48 C98,34 62,34 55,48 Z" />
      </g>
      <g fill="#ef4f6f">
        <circle cx={53} cy={46} r={4} />
        <circle cx={107} cy={46} r={4} />
      </g>
      <path d="M72,26 Q80,30 90,26" fill="none" stroke="#d9a520" strokeWidth={2} strokeLinecap="round" />
    </Person>
  );
}

// A bald head, shiny on the top, with a little hair round the sides, for the beard and moustache.
function Bald() {
  return (
    <g>
      <path d="M56,48 C55,40 58,36 61,34 M104,48 C105,40 102,36 99,34" fill="none" stroke="#6b4a2e" strokeWidth={4} strokeLinecap="round" />
      <ellipse cx={72} cy={33} rx={6} ry={3} fill="#fff" opacity={0.6} transform="rotate(-25 72 33)" />
    </g>
  );
}

export function Beard() {
  return (
    <Person shirt="#3f8f8a" smile={false}>
      <Bald />
      {/* A big brown beard round the chin, from ear to ear, with the mouth showing. */}
      <path d="M56,52 C56,72 66,88 80,90 C94,88 104,72 104,52 C100,62 94,58 80,58 C66,58 60,62 56,52 Z" fill="#6b4a2e" stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
      <ellipse cx={80} cy={66} rx={6} ry={3} fill="#9c3c2c" />
      <path d="M66,72 q2,4 0,8 M80,76 q2,4 0,8 M94,72 q-2,4 0,8" fill="none" stroke="#4a3220" strokeWidth={1.5} strokeLinecap="round" />
    </Person>
  );
}

export function Moustache() {
  return (
    <Person shirt="#e8a33c" smile={false}>
      <Bald />
      <path d="M75,68 Q80,71 85,68" fill="none" stroke={LINE} strokeWidth={1.8} strokeLinecap="round" />
      {/* A big curly moustache under the nose, and no beard. */}
      <path d="M80,60 C74,56 66,58 62,64 C58,68 52,66 52,60 C52,68 62,72 70,66 C74,64 78,64 80,62 C82,64 86,64 90,66 C98,72 108,68 108,60 C108,66 102,68 98,64 C94,58 86,56 80,60 Z" fill="#4a3220" stroke={LINE} strokeWidth={1.2} strokeLinejoin="round" />
    </Person>
  );
}

export function Crown() {
  return (
    <Person shirt="#9b6be0">
      <Cap />
      <path d="M58,32 L56,6 L68,20 L80,2 L92,20 L104,6 L102,32 Z" fill="#f2c94c" stroke="#b08414" strokeWidth={2} strokeLinejoin="round" />
      <rect x={57} y={26} width={46} height={7} fill="#e8b23c" stroke="#b08414" strokeWidth={1.5} />
      <circle cx={80} cy={18} r={3.5} fill="#e5484d" />
      <circle cx={67} cy={25} r={2.5} fill="#4f8fe0" />
      <circle cx={93} cy={25} r={2.5} fill="#3fae6a" />
    </Person>
  );
}

export function Earrings() {
  return (
    <Person shirt="#3fae6a">
      {/* The hair up in a bun, so the ears and the big earrings show. */}
      <circle cx={80} cy={20} r={10} fill={BROWN} stroke={LINE} strokeWidth={1.5} />
      <Cap />
      <g fill="none" stroke="#e8a817" strokeWidth={3.5}>
        <circle cx={55} cy={68} r={9} />
        <circle cx={105} cy={68} r={9} />
      </g>
      <g fill="#e8a817">
        <circle cx={55} cy={58} r={2.5} />
        <circle cx={105} cy={58} r={2.5} />
      </g>
    </Person>
  );
}

export function Glasses() {
  return (
    <Person shirt="#e06a4a">
      <Cap />
      <g fill="#dff1ff" fillOpacity={0.5} stroke="#2f6fd0" strokeWidth={3.5}>
        <circle cx={70} cy={50} r={9} />
        <circle cx={90} cy={50} r={9} />
      </g>
      <path d="M79,49 Q80,46 81,49 M61,48 L54,46 M99,48 L106,46" fill="none" stroke="#2f6fd0" strokeWidth={3} strokeLinecap="round" />
    </Person>
  );
}

const BEADS = [-26, -18, -10, 0, 10, 18, 26];
const BEAD_COLOURS = ['#ef6fa3', '#4f8fe0', '#f2c94c', '#ef4f6f', '#f2c94c', '#4f8fe0', '#ef6fa3'];

export function Necklace() {
  return (
    <Person shirt="#6cc0ec">
      <Cap />
      {/* Big round beads hanging from the neck down onto the T-shirt, and a heart in the middle. */}
      <path d="M58,88 Q80,106 102,88" fill="none" stroke="#b08414" strokeWidth={1.5} />
      {BEADS.map((dx, index) => {
        const x = 80 + dx;
        const y = Math.round((88 + 14 * (1 - (dx / 26) ** 2)) * 100) / 100;
        return <circle key={dx} cx={x} cy={y} r={4.5} fill={BEAD_COLOURS[index]} stroke={LINE} strokeWidth={1} />;
      })}
    </Person>
  );
}

export function Wig() {
  return (
    <g>
      <rect width={160} height={110} fill="#eef6fb" />
      <g transform="translate(0 16)">
        <Person shirt="#3f8f8a" bg="none">
          <Bald />
        </Person>
      </g>
      {/* A bright pink, curly wig lifted off the bald head, and tilted, so you can see it isn't hair. */}
      <g transform="translate(0 5) rotate(-6 80 18)">
        {[54, 64, 74, 84, 94, 104].map((x, index) => (
          <circle key={x} cx={x} cy={index % 2 ? 10 : 15} r={8} fill="#ff6fc3" stroke={LINE} strokeWidth={1.5} />
        ))}
        {[58, 72, 88, 102].map(x => <circle key={x} cx={x} cy={23} r={7} fill="#ff6fc3" stroke={LINE} strokeWidth={1.5} />)}
      </g>
      <path d="M40,38 v-10 M120,30 v-10 M128,36 v-7" stroke={LINE} strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}
