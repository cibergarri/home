// Pictures for maths, drawn like the textbook's: base-ten blocks, a number line, the hundred chart
// and two-way tables. Each says how big it is, for the <svg> it goes in.

import { useId } from 'react';

// Blocks: green flats of a hundred, red rods of ten and blue unit cubes, the cubes in two
// columns beside the rods, in the middle of a box at least 320 wide so a few blocks are not drawn
// huge.
const FLAT = 100;
const ROD = { width: 18, height: 100, gap: 10 };
const CUBE = 16;

const blocksWidth = ({ hundreds = 0, tens, ones }) => hundreds * (FLAT + 14)
  + tens * (ROD.width + ROD.gap) + (ones > 0 ? 2 * (CUBE + 4) + 10 : 0);

export const blocksSize = ({ hundreds = 0, tens, ones }) => ({
  width: Math.max(320, 40 + blocksWidth({ hundreds, tens, ones })),
  height: 140,
});

export function Blocks({ hundreds = 0, tens, ones }) {
  const { width, height } = blocksSize({ hundreds, tens, ones });
  const start = (width - blocksWidth({ hundreds, tens, ones })) / 2;
  const left = start + hundreds * (FLAT + 14);
  const cubesX = left + tens * (ROD.width + ROD.gap) + 10;
  return (
    <g>
      <rect width={width} height={height} fill="#fffaf2" />
      {Array.from({ length: hundreds }, (_, i) => {
        const x = start + i * (FLAT + 14);
        return (
          <g key={`flat${x}`}>
            <rect x={x} y={20} width={FLAT} height={FLAT} rx={3} fill="#3f9a4a" stroke="#2a6e33" strokeWidth={2} />
            {Array.from({ length: 9 }, (__, j) => (
              <g key={j} stroke="#2a6e33" strokeWidth={0.8} opacity={0.6}>
                <line x1={x + 10 + j * 10} y1={20} x2={x + 10 + j * 10} y2={120} />
                <line x1={x} y1={30 + j * 10} x2={x + FLAT} y2={30 + j * 10} />
              </g>
            ))}
          </g>
        );
      })}
      {Array.from({ length: tens }, (_, i) => {
        const x = left + i * (ROD.width + ROD.gap);
        return (
          <g key={`rod${x}`}>
            <rect x={x} y={20} width={ROD.width} height={ROD.height} rx={2} fill="#c9302c" stroke="#8f1f1c" strokeWidth={1.5} />
            {Array.from({ length: 9 }, (__, j) => (
              <line key={j} x1={x} y1={30 + j * 10} x2={x + ROD.width} y2={30 + j * 10} stroke="#8f1f1c" strokeWidth={0.8} opacity={0.6} />
            ))}
          </g>
        );
      })}
      {Array.from({ length: ones }, (_, i) => {
        const x = cubesX + (i % 2) * (CUBE + 4);
        const y = 120 - CUBE - Math.floor(i / 2) * (CUBE + 4);
        return <rect key={`cube${x},${y}`} x={x} y={y} width={CUBE} height={CUBE} rx={2} fill="#2f80d0" stroke="#1d5a96" strokeWidth={1.5} />;
      })}
    </g>
  );
}

// A number line from `from` to `to` with a tick for every number and the tens labelled, and a
// red dot at `mark` (labelled unless `hideMark`).
export const NUMBER_LINE = { width: 600, height: 110 };

export function NumberLine({
  from, to, mark, hideMark = false,
}) {
  const left = 30;
  const right = NUMBER_LINE.width - 30;
  const x = n => left + ((n - from) / (to - from)) * (right - left);
  const numbers = Array.from({ length: to - from + 1 }, (_, i) => from + i);
  return (
    <g>
      <rect width={NUMBER_LINE.width} height={NUMBER_LINE.height} fill="#fffaf2" />
      <line x1={left - 10} y1={50} x2={right + 10} y2={50} stroke="#1f6f8b" strokeWidth={3} />
      {numbers.map((n) => {
        const ten = n % 10 === 0;
        return (
          <g key={n}>
            <line x1={x(n)} y1={ten ? 36 : 42} x2={x(n)} y2={ten ? 64 : 58} stroke="#1f6f8b" strokeWidth={ten ? 3 : 2} />
            {ten && <text x={x(n)} y={90} textAnchor="middle" fontSize={22} fontWeight={700} fill="#24324a" fontFamily="inherit">{n}</text>}
          </g>
        );
      })}
      {mark !== undefined && (
        <g>
          <circle cx={x(mark)} cy={50} r={8} fill="#e5484d" stroke="#fff" strokeWidth={2} />
          {!hideMark && <text x={x(mark)} y={24} textAnchor="middle" fontSize={22} fontWeight={700} fill="#e5484d" fontFamily="inherit">{mark}</text>}
        </g>
      )}
    </g>
  );
}

// The hundred chart, `from` to `from` + 99 in rows of ten (0 to 99 unless it says otherwise), each
// square 64 units.
export const HUNDRED_CELL = 64;

export function HundredChart({ from = 0 }) {
  return (
    <g>
      {Array.from({ length: 100 }, (_, n) => {
        const x = (n % 10) * HUNDRED_CELL;
        const y = Math.floor(n / 10) * HUNDRED_CELL;
        return (
          <g key={n}>
            <rect x={x} y={y} width={HUNDRED_CELL} height={HUNDRED_CELL} fill={Math.floor(n / 10) % 2 ? '#fff1b8' : '#ffe68a'} stroke="#e0a800" strokeWidth={1.5} />
            <text x={x + HUNDRED_CELL / 2} y={y + 41} textAnchor="middle" fontSize={from ? 22 : 26} fontWeight={600} fill="#24324a" fontFamily="inherit">{n + from}</text>
          </g>
        );
      })}
    </g>
  );
}

// The chart from 100 to 199, for games that draw a chart without being told where it starts.
export function HundredChartFrom100() {
  return <HundredChart from={100} />;
}

// Euro notes and coins, in a row, looking like the real ones: `money` is a list of values (5, 10,
// 20, 50, 100 and 200 are notes; 1 and 2 are coins). The notes are as big as the real ones, a
// pixel to a millimetre, each with its colour, the flag, an arch and the silver stripe; the coins
// are drawn bigger than real so their numbers can be read.
const NOTES = {
  5: {
    colour: '#97a39c', dark: '#56635c', light: '#d3dbd5', size: [120, 62],
  },
  10: {
    colour: '#dc6f5f', dark: '#9b3a30', light: '#f5c0b4', size: [127, 67],
  },
  20: {
    colour: '#5f90d2', dark: '#2d5797', light: '#bcd2f0', size: [133, 72],
  },
  50: {
    colour: '#ee9c48', dark: '#ad5f1a', light: '#fad3a6', size: [140, 77],
  },
  100: {
    colour: '#52a86d', dark: '#2a6b3f', light: '#b0dcbb', size: [147, 77],
  },
  200: {
    colour: '#d8b04c', dark: '#8f6f1c', light: '#f2dea3', size: [153, 77],
  },
};
const COINS = {
  1: { radius: 27, ring: 'gold', centre: 'silver' },
  2: { radius: 30, ring: 'silver', centre: 'gold' },
};
const METALS = {
  gold: ['#f8e08c', '#d6ac43', '#9c7a24'],
  silver: ['#f4f6f8', '#c3c9d0', '#7f8790'],
};
const MONEY_HEIGHT = 110; // a row of money
const GAP = 10;
const ROW_WIDTH = 640; // more money than fits goes on to another row

export const pieceWidth = value => (NOTES[value] ? NOTES[value].size[0] : COINS[value].radius * 2);

// Where each note and coin goes, notes first as they come, in rows.
const layOut = (money) => {
  const places = [];
  let x = 15;
  let row = 0;
  money.forEach((value) => {
    if (x > 15 && x + pieceWidth(value) > ROW_WIDTH) {
      x = 15;
      row += 1;
    }
    places.push({ value, x, top: row * MONEY_HEIGHT });
    x += pieceWidth(value) + GAP;
  });
  const width = Math.max(320, 15 + Math.max(...places.map(({ value, x: at }) => at + pieceWidth(value) + GAP)));
  return { places, width, height: (row + 1) * MONEY_HEIGHT };
};

export const moneySize = ({ money }) => {
  const { width, height } = layOut(money);
  return { width, height };
};

const svgId = id => id.replace(/[^a-zA-Z0-9-]/g, '');

// The twelve stars of the European flag, in a ring.
function Stars({
  cx, cy, r, size, fill,
}) {
  return Array.from({ length: 12 }, (_, i) => {
    const angle = (i * Math.PI) / 6;
    // Rounded, so the page drawn on the server and in the browser agree to the last digit.
    const at = value => Math.round(value * 100) / 100;
    return <circle key={i} cx={at(cx + r * Math.cos(angle))} cy={at(cy + r * Math.sin(angle))} r={size} fill={fill} />;
  });
}

function Note({
  value, x, top = 0, id,
}) {
  const {
    colour, dark, light, size: [w, h],
  } = NOTES[value];
  const y = top + (MONEY_HEIGHT - h) / 2;
  // An arch like the windows and doorways on the notes, in the middle.
  const archLeft = x + w * 0.4;
  const archRight = x + w * 0.64;
  const archTop = y + h * 0.3;
  const archBottom = y + h - 8;
  const radius = (archRight - archLeft) / 2;
  const arch = inset => `M ${archLeft + inset} ${archBottom} V ${archTop + radius} `
    + `A ${radius - inset} ${radius - inset} 0 0 1 ${archRight - inset} ${archTop + radius} V ${archBottom} Z`;
  return (
    <g>
      <defs>
        <linearGradient id={`${id}-note-${value}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={colour} />
          <stop offset="0.45" stopColor={light} />
          <stop offset="1" stopColor={colour} />
        </linearGradient>
      </defs>
      <rect x={x} y={y} width={w} height={h} rx={4} fill={`url(#${id}-note-${value})`} stroke={dark} strokeWidth={1.2} />
      <circle cx={x + w * 0.3} cy={y + h * 0.55} r={h * 0.36} fill="none" stroke={dark} strokeWidth={0.8} opacity={0.25} />
      <circle cx={x + w * 0.3} cy={y + h * 0.55} r={h * 0.26} fill="none" stroke={dark} strokeWidth={0.8} opacity={0.25} />
      <path d={arch(0)} fill={dark} opacity={0.35} />
      <path d={arch(5)} fill="none" stroke="#fff" strokeWidth={1} opacity={0.6} />
      <rect x={x + 6} y={y + 6} width={22} height={15} rx={1.5} fill="#2c4fa3" />
      <Stars cx={x + 17} cy={y + 13.5} r={4.8} size={0.9} fill="#ffd23f" />
      <rect x={x + w * 0.78} y={y} width={w * 0.08} height={h} fill={`url(#${id}-stripe)`} opacity={0.9} />
      <text x={x + 7} y={y + h - 9} fontSize={h * 0.42} fontWeight={800} fill="#fff" stroke={dark} strokeWidth={1.5} paintOrder="stroke" fontFamily="inherit">{value}</text>
      <text x={x + w - 5} y={y + 15} textAnchor="end" fontSize={13} fontWeight={800} fill={dark} fontFamily="inherit">{value}</text>
      <text x={x + w * 0.52} y={y + 14} textAnchor="middle" fontSize={8} fontWeight={700} letterSpacing={1.5} fill={dark} fontFamily="inherit">EURO</text>
    </g>
  );
}

// The common side of a euro coin: the numeral and EURO beside a few lines with stars.
function Coin({
  value, x, top = 0, id,
}) {
  const { radius, ring, centre } = COINS[value];
  const cx = x + radius;
  const cy = top + MONEY_HEIGHT / 2;
  const inner = radius * 0.68;
  const ink = METALS[centre][2];
  return (
    <g>
      <circle cx={cx} cy={cy} r={radius} fill={`url(#${id}-${ring})`} stroke="#6b5a2a" strokeWidth={1.2} />
      <circle cx={cx} cy={cy} r={radius - 2.5} fill="none" stroke={METALS[ring][2]} strokeWidth={0.8} opacity={0.6} />
      <Stars cx={cx} cy={cy} r={(radius + inner) / 2} size={1.1} fill={METALS[ring][2]} />
      <circle cx={cx} cy={cy} r={inner} fill={`url(#${id}-${centre})`} stroke={METALS[centre][2]} strokeWidth={0.8} />
      <text x={cx - inner * 0.34} y={cy + inner * 0.42} textAnchor="middle" fontSize={inner * 1.25} fontWeight={800} fill={ink} fontFamily="inherit">{value}</text>
      <text x={cx + inner * 0.5} y={cy + inner * 0.55} textAnchor="middle" fontSize={inner * 0.27} fontWeight={800} fill={ink} fontFamily="inherit">EURO</text>
      {[-0.55, -0.3, -0.05].map(dy => (
        <line key={dy} x1={cx + inner * 0.15} x2={cx + inner * 0.8} y1={cy + inner * dy} y2={cy + inner * dy} stroke={ink} strokeWidth={0.9} opacity={0.7} />
      ))}
    </g>
  );
}

// The metals of the coins and the silver stripe of the notes, for the money drawn beside them.
function MoneyShine({ id }) {
  return (
    <defs>
      {Object.entries(METALS).map(([metal, [shine, base, shade]]) => (
        <radialGradient key={metal} id={`${id}-${metal}`} cx="0.4" cy="0.35" r="0.75">
          <stop offset="0" stopColor={shine} />
          <stop offset="0.6" stopColor={base} />
          <stop offset="1" stopColor={shade} />
        </radialGradient>
      ))}
      <linearGradient id={`${id}-stripe`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#eef2f5" />
        <stop offset="0.3" stopColor="#c9d3dc" />
        <stop offset="0.5" stopColor="#f1e6f6" />
        <stop offset="0.7" stopColor="#d2e8e4" />
        <stop offset="1" stopColor="#c9d3dc" />
      </linearGradient>
    </defs>
  );
}

const Piece = ({ value, ...place }) => (NOTES[value] ? <Note value={value} {...place} /> : <Coin value={value} {...place} />);

export function Money({ money }) {
  const id = svgId(useId());
  const { places, width, height } = layOut(money);
  return (
    <g>
      <MoneyShine id={id} />
      <rect width={width} height={height} fill="#fffaf2" />
      {places.map(({ value, x, top }) => <Piece key={`${value}-${x}-${top}`} value={value} x={x} top={top} id={id} />)}
    </g>
  );
}

// One note or coin on its own, as big as in a row of money, to tap.
export const pieceSize = value => ({ width: pieceWidth(value) + 4, height: NOTES[value] ? NOTES[value].size[1] + 4 : COINS[value].radius * 2 + 4 });

export function MoneyPiece({ value }) {
  const id = svgId(useId());
  const { height } = pieceSize(value);
  return (
    <g transform={`translate(2 ${(height - MONEY_HEIGHT) / 2})`}>
      <MoneyShine id={id} />
      <Piece value={value} x={0} id={id} />
    </g>
  );
}

// Something to buy, with its price on a tag, and the money it is paid with.
const SHOP = 150;

export const shopSize = ({ paid }) => {
  const { width, height } = layOut(paid);
  return { width: SHOP + width, height };
};

export function Shop({ item, price, paid }) {
  const { width, height } = shopSize({ paid });
  return (
    <g>
      <rect width={width} height={height} fill="#fffaf2" />
      <path d="M 22 10 H 118 V 42 H 22 L 8 26 Z" fill="#fff" stroke="#9a948a" strokeWidth={1.5} strokeLinejoin="round" />
      <circle cx={20} cy={26} r={3} fill="none" stroke="#9a948a" strokeWidth={1.5} />
      <text x={70} y={34} textAnchor="middle" fontSize={22} fontWeight={600} fill="#24324a" fontFamily="inherit">{`${price} €`}</text>
      <text x={66} y={98} textAnchor="middle" fontSize={50}>{item}</text>
      <g transform={`translate(${SHOP} 0)`}>
        <Money money={paid} />
      </g>
      <text x={SHOP - 4} y={height / 2 + 9} textAnchor="middle" fontSize={30} fill="#ff7a59" fontWeight={700}>→</text>
    </g>
  );
}

// A bar model, as in the textbook's problems. Either one bar split into `parts` with the `total`
// above it, or (`compare`) one bar under another, the gap between them marked with `difference`.
// Values may be '?' for what is to be found; `size` then says how long to draw that part.
export const BAR = { width: 600, height: 190 };

const BAR_COLOURS = ['#7fc77f', '#8ec5f2', '#f7c96f', '#f5a8c8'];

export function BarModel({
  parts = [], total, compare = false, difference,
}) {
  const left = 20;
  const span = BAR.width - 40;
  const label = (x, y, value, size = 22) => (
    <text x={x} y={y} textAnchor="middle" fontSize={size} fontWeight={700} fill="#24324a" fontFamily="inherit">{value}</text>
  );
  if (compare) {
    const longest = Math.max(...parts.map(part => part.size ?? part.value));
    const length = part => ((part.size ?? part.value) / longest) * (span - 110);
    const shorter = Math.min(...parts.map(length));
    return (
      <g>
        <rect width={BAR.width} height={BAR.height} fill="#fffaf2" />
        {parts.map((part, i) => {
          const y = 30 + i * 70;
          return (
            <g key={part.name}>
              <text x={left} y={y + 31} fontSize={20} fontWeight={600} fill="#24324a" fontFamily="inherit">{part.name}</text>
              <rect x={left + 100} y={y} width={length(part)} height={46} rx={4} fill={BAR_COLOURS[i]} stroke="#4b4a73" strokeWidth={1.5} />
              {label(left + 100 + length(part) / 2, y + 31, part.value)}
            </g>
          );
        })}
        <path d={`M${left + 100 + shorter},${170} V${30} M${left + 100 + shorter},${160} H${left + 100 + Math.max(...parts.map(length))}`} stroke="#e5484d" strokeWidth={2} strokeDasharray="5 4" fill="none" />
        {label(left + 100 + (shorter + Math.max(...parts.map(length))) / 2, 185, difference, 20)}
      </g>
    );
  }
  const sizes = parts.map(part => part.size ?? part.value);
  const sum = sizes.reduce((a, b) => a + b, 0);
  const widths = sizes.map(size => (size / sum) * span);
  const starts = widths.map((_, i) => left + widths.slice(0, i).reduce((a, b) => a + b, 0));
  return (
    <g>
      <rect width={BAR.width} height={BAR.height} fill="#fffaf2" />
      <path d={`M${left},50 V40 H${left + span} V50`} fill="none" stroke="#4b4a73" strokeWidth={2} />
      {label(left + span / 2, 30, total)}
      {parts.map((part, i) => {
        const width = widths[i];
        const at = starts[i];
        return (
          <g key={part.name}>
            <rect x={at} y={60} width={width} height={56} fill={BAR_COLOURS[i]} stroke="#4b4a73" strokeWidth={1.5} />
            {label(at + width / 2, 96, part.value)}
            <text x={at + width / 2} y={146} textAnchor="middle" fontSize={18} fill="#4b4a73" fontFamily="inherit">{part.name}</text>
          </g>
        );
      })}
    </g>
  );
}

// A two-way table: `columns` across the top, and `rows`, each a label then a cell per column.
const TABLE = { label: 230, cell: 110, row: 44 };

export const tableSize = ({ columns, rows }) => ({
  width: TABLE.label + columns.length * TABLE.cell,
  height: (rows.length + 1) * TABLE.row,
});

export function DataTable({ columns, rows }) {
  const { width, height } = tableSize({ columns, rows });
  const cellText = (x, y, value, bold) => (
    <text x={x} y={y + 29} textAnchor="middle" fontSize={20} fontWeight={bold ? 700 : 500} fill="#24324a" fontFamily="inherit">{value}</text>
  );
  return (
    <g>
      <rect width={width} height={height} fill="#fff" />
      <rect width={width} height={TABLE.row} fill="#fde6b6" />
      <rect y={TABLE.row} width={TABLE.label} height={height - TABLE.row} fill="#fff4dc" />
      {columns.map((column, i) => (
        // Columns never move, so where a column is is what it is.
        <g key={`column${TABLE.label + i * TABLE.cell}`}>{cellText(TABLE.label + i * TABLE.cell + TABLE.cell / 2, 0, column, true)}</g>
      ))}
      {rows.map(([label, ...cells], r) => {
        const y = (r + 1) * TABLE.row;
        return (
          <g key={label}>
            <text x={14} y={y + 29} fontSize={20} fontWeight={600} fill="#24324a" fontFamily="inherit">{label}</text>
            {cells.map((value, i) => (
              // Cells are positional: the i-th cell of a row is under the i-th column.
              <g key={i}>{cellText(TABLE.label + i * TABLE.cell + TABLE.cell / 2, y, value, false)}</g>
            ))}
          </g>
        );
      })}
      <g stroke="#e3b96a" strokeWidth={1.5}>
        {Array.from({ length: rows.length + 2 }, (_, r) => <line key={`r${r}`} x1={0} y1={r * TABLE.row} x2={width} y2={r * TABLE.row} />)}
        <line x1={0} y1={0} x2={0} y2={height} />
        {Array.from({ length: columns.length + 1 }, (_, c) => (
          <line key={`c${c}`} x1={TABLE.label + c * TABLE.cell} y1={0} x2={TABLE.label + c * TABLE.cell} y2={height} />
        ))}
      </g>
    </g>
  );
}
