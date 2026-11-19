// What the sketchnote drawings share: felt-tip colours, the two hand fonts (from the study corner's
// layout: --font-sketch-title, --font-sketch), highlighter strokes, a wobbly-line filter and
// little people.

export const INK = '#263043';
export const PENCIL = '#6b7487';
export const PAPER = '#fdfdfb';
export const YELLOW = '#ffe066';
export const MINT = '#a8e6c9';
export const PINK = '#ffb3c7';
export const SKY = '#9fd3f5';
export const ORANGE = '#ffc98b';
export const RED = '#f2635f';
export const GREEN = '#4cc38a';
export const BLUE = '#4a90d9';
export const BROWN = '#b07a4f';
export const SKIN = '#ffd9b8';
export const GREY = '#c9d1dc';

export const THIN = 2;

export const ink = {
  stroke: INK, strokeWidth: 3, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round',
};

const TITLE_FONT = 'var(--font-sketch-title), var(--font-sketch), cursive';
const HAND_FONT = 'var(--font-sketch), cursive';

export function Title({
  x, y, size, mid, children,
}) {
  return (
    <text x={x} y={y} fontSize={size} fill={INK} textAnchor={mid ? 'middle' : 'start'} style={{ fontFamily: TITLE_FONT, fontWeight: 700 }}>
      {children}
    </text>
  );
}

// Handwriting; grey for the Spanish.
export function Hand({
  x, y, size, mid, grey, children,
}) {
  return (
    <text x={x} y={y} fontSize={size} fill={grey ? PENCIL : INK} textAnchor={mid ? 'middle' : 'start'} style={{ fontFamily: HAND_FONT }}>
      {children}
    </text>
  );
}

// A highlighter stroke behind a title.
export function Marker({
  x, y, width, colour, tilt = 0, height = 30,
}) {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={6}
      fill={colour}
      opacity={0.75}
      transform={`rotate(${tilt} ${x + width / 2} ${y + height / 2})`}
    />
  );
}

// The wobble of a felt-tip line, and an arrowhead, under ids of the drawing's own (several drawings
// can be on one page).
export function SketchDefs({ id }) {
  return (
    <defs>
      <filter id={`${id}-rough`} x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.5" />
      </filter>
      <marker id={`${id}-head`} viewBox="0 0 12 12" refX="9" refY="6" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
        <path d="M1 1 L10 6 L1 11" fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </marker>
    </defs>
  );
}

// A stick figure with its head at (x, y).
export function Stick({ x, y, r }) {
  const body = r * 2.8;
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={PAPER} />
      <path d={`M${x} ${y + r} L${x} ${y + r + body} M${x - r * 1.4} ${y + r + body * 0.35} L${x + r * 1.4} ${y + r + body * 0.35} M${x} ${y + r + body} L${x - r * 0.9} ${y + r + body + r * 1.8} M${x} ${y + r + body} L${x + r * 0.9} ${y + r + body + r * 1.8}`} />
    </g>
  );
}

// A person standing with their feet at (x, base), `scale` 1 being about 110 high. `hands` are where
// the left and right hands are, from the feet; `hair` grey for an older person; `mouth` 'smile',
// 'open' (shouting) or 'flat'.
export function Person({
  x, base, scale = 1, shirt = SKY, hands = [[-22, -45], [22, -45]], hair = BROWN, mouth = 'smile',
}) {
  const [[lx, ly], [rx, ry]] = hands;
  const mouths = {
    smile: <path d="M-5 -90 Q 0 -86 5 -90" strokeWidth={1.8} />,
    flat: <path d="M-4 -89 L4 -89" strokeWidth={1.8} />,
    open: <ellipse cx={0} cy={-89} rx={4} ry={5} fill={INK} strokeWidth={1} />,
  };
  return (
    <g transform={`translate(${x} ${base}) scale(${scale})`} {...ink}>
      <path d="M-8 -40 L-10 0 M8 -40 L10 0" />
      <path d={`M-12 -74 L${lx} ${ly} M12 -74 L${rx} ${ry}`} />
      <path d="M-14 -80 L14 -80 L18 -40 L-18 -40 Z" fill={shirt} />
      <circle cx={0} cy={-95} r={14} fill={SKIN} />
      <path d="M-14 -97 Q -12 -112 0 -110 Q 12 -112 14 -97 Q 6 -104 -14 -97 Z" fill={hair} strokeWidth={1.5} />
      <circle cx={-5} cy={-96} r={1.4} fill={INK} stroke="none" />
      <circle cx={5} cy={-96} r={1.4} fill={INK} stroke="none" />
      {mouths[mouth]}
    </g>
  );
}

// A dog facing right with its feet on `base`; its collar is at (x + 22, base - 34).
export function Dog({ x, base, colour = ORANGE }) {
  return (
    <g {...ink}>
      <path d={`M${x - 16} ${base - 18} L${x - 18} ${base} M${x - 6} ${base - 18} L${x - 6} ${base} M${x + 8} ${base - 18} L${x + 8} ${base} M${x + 18} ${base - 18} L${x + 20} ${base}`} />
      <path d={`M${x - 26} ${base - 32} Q ${x - 40} ${base - 46} ${x - 34} ${base - 56}`} />
      <ellipse cx={x} cy={base - 28} rx={27} ry={13} fill={colour} />
      <circle cx={x + 28} cy={base - 44} r={12} fill={colour} />
      <path d={`M${x + 22} ${base - 54} Q ${x + 16} ${base - 44} ${x + 22} ${base - 38}`} fill={BROWN} strokeWidth={THIN} />
      <circle cx={x + 32} cy={base - 46} r={1.5} fill={INK} stroke="none" />
      <circle cx={x + 40} cy={base - 41} r={2.2} fill={INK} stroke="none" />
    </g>
  );
}

// A little car, facing right, with its wheels on `base`.
export function Car({
  x, base, colour = RED, width = 54,
}) {
  return (
    <g {...ink} strokeWidth={2.5}>
      <path d={`M${x} ${base - 8} L${x} ${base - 22} L${x + width * 0.22} ${base - 22} L${x + width * 0.34} ${base - 36} L${x + width * 0.7} ${base - 36} L${x + width * 0.84} ${base - 22} L${x + width} ${base - 20} L${x + width} ${base - 8} Z`} fill={colour} />
      <circle cx={x + width * 0.24} cy={base - 6} r={6} fill={PAPER} />
      <circle cx={x + width * 0.76} cy={base - 6} r={6} fill={PAPER} />
    </g>
  );
}
