// Pictures for maths, drawn like the textbook's: base-ten blocks, a number line, the hundred chart
// and two-way tables. Each says how big it is, for the <svg> it goes in.

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

// Euro notes and coins, in a row: `money` is a list of values (5, 10, 20, 50, 100 are notes; 1 and
// 2 are coins).
const NOTES = {
  5: '#9aa8a0', 10: '#e07a6a', 20: '#6f9fd8', 50: '#f2a65a', 100: '#5fb37a',
};
const NOTE = { width: 120, height: 66 };
const COIN = 26;

export const moneySize = ({ money }) => {
  const notes = money.filter(value => NOTES[value]).length;
  const coins = money.length - notes;
  return { width: Math.max(320, 30 + notes * (NOTE.width + 10) + coins * (COIN * 2 + 8)), height: 110 };
};

const widthOf = value => (NOTES[value] ? NOTE.width + 10 : COIN * 2 + 8);

export function Money({ money }) {
  const { width, height } = moneySize({ money });
  const starts = money.map((value, i) => 15 + money.slice(0, i).reduce((sum, v) => sum + widthOf(v), 0));
  return (
    <g>
      <rect width={width} height={height} fill="#fffaf2" />
      {money.map((value, i) => {
        const at = starts[i];
        if (NOTES[value]) {
          return (
            <g key={`${value}-${at}`}>
              <rect x={at} y={22} width={NOTE.width} height={NOTE.height} rx={6} fill={NOTES[value]} stroke="#4b4a73" strokeWidth={1.5} />
              <rect x={at + 8} y={30} width={NOTE.width - 16} height={NOTE.height - 16} rx={4} fill="none" stroke="#fff" strokeWidth={1.5} opacity={0.7} />
              <text x={at + NOTE.width / 2} y={66} textAnchor="middle" fontSize={26} fontWeight={700} fill="#fff" fontFamily="inherit">{`${value} €`}</text>
            </g>
          );
        }
        const gold = '#e2b44a';
        const silver = '#c9ccd1';
        return (
          <g key={`${value}-${at}`}>
            <circle cx={at + COIN} cy={55} r={COIN} fill={value === 2 ? silver : gold} stroke="#8a7a50" strokeWidth={1.5} />
            <circle cx={at + COIN} cy={55} r={COIN - 7} fill={value === 2 ? gold : silver} />
            <text x={at + COIN} y={62} textAnchor="middle" fontSize={18} fontWeight={700} fill="#24324a" fontFamily="inherit">{`${value}€`}</text>
          </g>
        );
      })}
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
