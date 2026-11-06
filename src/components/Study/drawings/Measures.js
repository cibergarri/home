// Pictures for the later maths units: clocks with hands and digital clocks, a bar chart, a ruler
// with something to measure, and flat and solid shapes. Each comes with its size, as the
// drawings in Maths.js do.

const INK = '#24324a';
const at = value => Math.round(value * 100) / 100; // the same digits on the server and in the browser

// A clock with hands. The hour hand moves on between the hours, as on a real clock.
export const CLOCK = { width: 240, height: 240 };

export function Clock({ hours, minutes = 0 }) {
  const c = 120;
  const hand = (turn, length) => [at(c + length * Math.sin(turn * 2 * Math.PI)), at(c - length * Math.cos(turn * 2 * Math.PI))];
  const [hx, hy] = hand(((hours % 12) + minutes / 60) / 12, 52);
  const [mx, my] = hand(minutes / 60, 80);
  return (
    <g>
      <rect width={240} height={240} fill="#fffaf2" />
      <circle cx={c} cy={c} r={108} fill="#fff" stroke="#ff7a59" strokeWidth={8} />
      {Array.from({ length: 60 }, (_, i) => {
        const [x1, y1] = hand(i / 60, i % 5 ? 98 : 92);
        const [x2, y2] = hand(i / 60, 102);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={INK} strokeWidth={i % 5 ? 1 : 3} />;
      })}
      {Array.from({ length: 12 }, (_, i) => {
        const [x, y] = hand((i + 1) / 12, 76);
        return <text key={i} x={x} y={y + 8} textAnchor="middle" fontSize={22} fontWeight={700} fill={INK} fontFamily="inherit">{i + 1}</text>;
      })}
      <line x1={c} y1={c} x2={hx} y2={hy} stroke={INK} strokeWidth={9} strokeLinecap="round" />
      <line x1={c} y1={c} x2={mx} y2={my} stroke="#2d7dd2" strokeWidth={5} strokeLinecap="round" />
      <circle cx={c} cy={c} r={7} fill={INK} />
    </g>
  );
}

// A digital clock: hours and minutes, the minutes always with two figures.
export const DIGITAL = { width: 300, height: 120 };

export function DigitalClock({ hours, minutes = 0 }) {
  return (
    <g>
      <rect width={300} height={120} fill="#fffaf2" />
      <rect x={20} y={14} width={260} height={92} rx={18} fill="#24324a" />
      <rect x={34} y={26} width={232} height={68} rx={8} fill="#0f1a2b" />
      <text x={150} y={80} textAnchor="middle" fontSize={56} fontWeight={700} fill="#7cf29c" fontFamily="ui-monospace, monospace" letterSpacing={4}>
        {`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`}
      </text>
    </g>
  );
}

// A bar chart: one bar per item, `bars` as { label, value, colour? }, up an axis that counts by
// `step`.
const CHART = { left: 60, top: 20, bottom: 50, bar: 70, gap: 30, height: 240 };
const CHART_COLOURS = ['#7fc77f', '#8ec5f2', '#f7c96f', '#f5a8c8', '#c3a6f0', '#ffab91'];
// A bar named after a colour is drawn in it.
const NAMED_COLOURS = {
  rojo: '#ef6a5b', azul: '#5f9be0', verde: '#6cc070', amarillo: '#f7d14c', naranja: '#f5a04a', rosa: '#f5a8c8',
  morado: '#a27bd8', blanco: '#ffffff', negro: '#3a3f4a', marrón: '#a9744f', gris: '#a6acb5',
};
const barColour = (label, i) => NAMED_COLOURS[label.toLowerCase()] ?? CHART_COLOURS[i % CHART_COLOURS.length];

export const chartSize = ({ bars }) => ({
  width: CHART.left + bars.length * (CHART.bar + CHART.gap) + CHART.gap,
  height: CHART.top + CHART.height + CHART.bottom,
});

export function BarChart({ bars, step = 1, max = Math.max(...bars.map(({ value }) => value)) }) {
  const { width, height } = chartSize({ bars });
  const top = Math.ceil(max / step) * step;
  const y = value => at(CHART.top + CHART.height - (value / top) * CHART.height);
  const ticks = Array.from({ length: top / step + 1 }, (_, i) => i * step);
  return (
    <g>
      <rect width={width} height={height} fill="#fff" />
      {ticks.map(tick => (
        <g key={tick}>
          <line x1={CHART.left} x2={width - 10} y1={y(tick)} y2={y(tick)} stroke="#e4e0d8" strokeWidth={1.5} />
          <text x={CHART.left - 10} y={y(tick) + 6} textAnchor="end" fontSize={16} fill={INK} fontFamily="inherit">{tick}</text>
        </g>
      ))}
      {bars.map(({ label, value, colour }, i) => {
        const x = CHART.left + CHART.gap + i * (CHART.bar + CHART.gap);
        return (
          <g key={label}>
            <rect x={x} y={y(value)} width={CHART.bar} height={at(CHART.top + CHART.height - y(value))} rx={4} fill={colour ?? barColour(label, i)} stroke={INK} strokeWidth={1.5} />
            <text x={x + CHART.bar / 2} y={CHART.top + CHART.height + 30} textAnchor="middle" fontSize={label.length > 7 ? 18 : 24} fontFamily="inherit" fill={INK}>{label}</text>
          </g>
        );
      })}
      <line x1={CHART.left} x2={CHART.left} y1={CHART.top - 6} y2={CHART.top + CHART.height} stroke={INK} strokeWidth={2.5} />
      <line x1={CHART.left} x2={width - 10} y1={CHART.top + CHART.height} y2={CHART.top + CHART.height} stroke={INK} strokeWidth={2.5} />
    </g>
  );
}

// A ruler in centimetres, with a coloured strip (a pencil, a ribbon…) `length` long laid on it
// from the 0. The ruler is `to` centimetres long.
const CM = 40;

export const rulerSize = ({ to = 12 }) => ({ width: to * CM + 60, height: 150 });

export function Ruler({ length, to = 12, colour = '#f7c96f' }) {
  const { width } = rulerSize({ to });
  return (
    <g>
      <rect width={width} height={150} fill="#fffaf2" />
      <rect x={30} y={22} width={at(length * CM)} height={34} rx={6} fill={colour} stroke={INK} strokeWidth={2} />
      <rect x={14} y={72} width={to * CM + 32} height={64} rx={6} fill="#fbe7a1" stroke="#c9a640" strokeWidth={2} />
      {Array.from({ length: to * 10 + 1 }, (_, i) => {
        const x = 30 + (i * CM) / 10;
        let tick = 10;
        if (i % 10 === 0) tick = 24;
        else if (i % 5 === 0) tick = 16;
        return <line key={i} x1={x} x2={x} y1={72} y2={72 + tick} stroke={INK} strokeWidth={i % 10 ? 1 : 2} />;
      })}
      {Array.from({ length: to + 1 }, (_, i) => (
        <text key={i} x={30 + i * CM} y={120} textAnchor="middle" fontSize={16} fontWeight={600} fill={INK} fontFamily="inherit">{i}</text>
      ))}
      <text x={to * CM + 40} y={132} textAnchor="end" fontSize={12} fill={INK} fontFamily="inherit">cm</text>
    </g>
  );
}

// Flat shapes, lines and solids, each drawn in a 150 × 150 square. `axis` adds a dashed line of
// symmetry down the middle.
const SHAPE = 150;
const FILLS = ['#8ec5f2', '#f7c96f', '#7fc77f', '#f5a8c8', '#c3a6f0', '#ffab91'];

const polygon = (sides, r = 58, turn = 0) => Array.from({ length: sides }, (_, i) => {
  const a = turn + (i * 2 * Math.PI) / sides - Math.PI / 2;
  return `${at(75 + r * Math.cos(a))},${at(80 + r * Math.sin(a))}`;
}).join(' ');

const FLAT = {
  triangulo: fill => <polygon points={polygon(3, 64)} fill={fill} />,
  cuadrado: fill => <rect x={22} y={27} width={106} height={106} fill={fill} />,
  rectangulo: fill => <rect x={8} y={45} width={134} height={72} fill={fill} />,
  pentagono: fill => <polygon points={polygon(5)} fill={fill} />,
  hexagono: fill => <polygon points={polygon(6)} fill={fill} />,
  octogono: fill => <polygon points={polygon(8, 60, Math.PI / 8)} fill={fill} />,
  circulo: fill => <circle cx={75} cy={80} r={58} fill={fill} />,
  circunferencia: () => <circle cx={75} cy={80} r={58} fill="none" strokeWidth={5} />,
  recta: () => <line x1={12} y1={110} x2={138} y2={50} strokeWidth={5} strokeLinecap="round" />,
  curva: () => <path d="M12,110 C40,20 90,140 138,40" fill="none" strokeWidth={5} strokeLinecap="round" />,
  poligonal: () => <polyline points="12,110 45,45 80,105 110,40 138,90" fill="none" strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" />,
  corazon: fill => <path d="M75,135 C20,95 10,60 32,40 C50,24 70,32 75,52 C80,32 100,24 118,40 C140,60 130,95 75,135 Z" fill={fill} />,
  mariposa: fill => <path d="M75,40 C55,10 10,20 20,70 C10,110 55,130 75,95 C95,130 140,110 130,70 C140,20 95,10 75,40 Z" fill={fill} />,
  nube: fill => <path d="M30,115 C5,115 5,80 30,78 C28,48 70,40 80,62 C95,40 135,55 122,85 C145,90 140,118 118,115 Z" fill={fill} />,
  bandera: fill => <g><rect x={30} y={30} width={6} height={100} fill="#8a6a4a" /><path d="M36,32 L130,32 L100,60 L130,88 L36,88 Z" fill={fill} /></g>,
};

const SOLID = {
  cubo: fill => (
    <g>
      <polygon points="30,55 95,55 95,120 30,120" fill={fill} />
      <polygon points="30,55 60,30 125,30 95,55" fill="#fff" fillOpacity={0.5} />
      <polygon points="95,55 125,30 125,95 95,120" fill={fill} fillOpacity={0.7} />
    </g>
  ),
  prisma: fill => (
    <g>
      <polygon points="15,65 105,65 105,125 15,125" fill={fill} />
      <polygon points="15,65 45,40 135,40 105,65" fill="#fff" fillOpacity={0.5} />
      <polygon points="105,65 135,40 135,100 105,125" fill={fill} fillOpacity={0.7} />
    </g>
  ),
  piramide: fill => (
    <g>
      <polygon points="75,15 20,115 85,135" fill={fill} />
      <polygon points="75,15 85,135 135,105" fill={fill} fillOpacity={0.65} />
    </g>
  ),
  esfera: fill => (
    <g>
      <circle cx={75} cy={78} r={58} fill={fill} />
      <ellipse cx={75} cy={78} rx={58} ry={16} fill="none" strokeDasharray="6 5" />
      <circle cx={55} cy={55} r={12} fill="#fff" fillOpacity={0.6} stroke="none" />
    </g>
  ),
  cilindro: fill => (
    <g>
      <path d="M30,35 V118 A45,14 0 0 0 120,118 V35 Z" fill={fill} />
      <ellipse cx={75} cy={35} rx={45} ry={14} fill="#fff" fillOpacity={0.6} />
    </g>
  ),
  cono: fill => (
    <g>
      <path d="M75,12 L28,118 A47,15 0 0 0 122,118 Z" fill={fill} />
      <ellipse cx={75} cy={118} rx={47} ry={15} fill="none" strokeDasharray="6 5" />
    </g>
  ),
};

export const SHAPE_KINDS = [...Object.keys(FLAT), ...Object.keys(SOLID)];

export const shapesSize = ({ shapes }) => ({ width: shapes.length * (SHAPE + 10) + 10, height: SHAPE + 20 });

export function Shapes({ shapes }) {
  const { width, height } = shapesSize({ shapes });
  return (
    <g>
      <rect width={width} height={height} fill="#fffaf2" />
      {shapes.map((shape, i) => {
        const { kind, axis } = typeof shape === 'string' ? { kind: shape } : shape;
        const draw = FLAT[kind] ?? SOLID[kind];
        return (
          // A row of shapes may have the same one twice; where it is tells them apart.
          <g key={i} transform={`translate(${10 + i * (SHAPE + 10)} 10)`} stroke={INK} strokeWidth={3} strokeLinejoin="round">
            {draw(FILLS[i % FILLS.length])}
            {axis && <line x1={75} x2={75} y1={2} y2={148} stroke="#ff4d6d" strokeWidth={3} strokeDasharray="8 6" />}
          </g>
        );
      })}
    </g>
  );
}
