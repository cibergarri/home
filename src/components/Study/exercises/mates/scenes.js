import {
  Blocks, blocksSize, NumberLine, NUMBER_LINE, DataTable, tableSize, Money, moneySize, Shop, shopSize, BarModel, barSize,
  ColumnSum, COLUMN_SUM,
} from '../../drawings/Maths';
import {
  Clock, CLOCK, DigitalClock, DIGITAL, BarChart, chartSize, Ruler, rulerSize, Shapes, shapesSize,
} from '../../drawings/Measures';

// Pictures for maths questions: base-ten blocks, a number line, or a two-way table.
export const blocks = (tens, ones, hundreds = 0) => ({
  Drawing: Blocks, ...blocksSize({ hundreds, tens, ones }), props: { hundreds, tens, ones },
});

export const numberLine = (from, to, mark, hideMark = false) => ({
  Drawing: NumberLine, ...NUMBER_LINE, props: {
    from, to, mark, hideMark,
  },
});

export const table = (columns, rows) => ({
  Drawing: DataTable, ...tableSize({ columns, rows }), props: { columns, rows },
});

export const money = (...values) => ({
  Drawing: Money, ...moneySize({ money: values }), props: { money: values },
});

// Something bought, `item` an emoji, at `price`, paid with the notes and coins in `paid`.
export const shop = (item, price, ...paid) => ({
  Drawing: Shop, ...shopSize({ paid }), props: { item, price, paid },
});

// A sum or subtraction written in columns, the bottom number `shift` columns too far left.
export const columns = (top, op, bottom, shift = 0) => ({
  Drawing: ColumnSum, ...COLUMN_SUM, props: {
    top, op, bottom, shift,
  },
});

export const bar = props => ({ Drawing: BarModel, ...barSize(props), props });

// The notes and coins can be cents too: '50c', '20c', '10c', '5c', '2c', '1c'.

// A clock with hands, or a digital one, at `hours` and `minutes`.
export const clock = (hours, minutes = 0) => ({ Drawing: Clock, ...CLOCK, props: { hours, minutes } });

export const digital = (hours, minutes = 0) => ({ Drawing: DigitalClock, ...DIGITAL, props: { hours, minutes } });

// A bar chart, `bars` as [label, value] pairs (or [label, value, colour]), its axis counting by
// `step`. A bar named after a colour, 'Rojo', is drawn in that colour.
export const chart = (bars, step = 1) => {
  const props = { bars: bars.map(([label, value, colour]) => ({ label, value, colour })), step };
  return { Drawing: BarChart, ...chartSize(props), props };
};

// Something `length` centimetres long on a ruler `to` centimetres long.
export const ruler = (length, to = 12, colour = undefined) => ({
  Drawing: Ruler, ...rulerSize({ to }), props: { length, to, colour },
});

// A row of shapes by name (see SHAPE_KINDS), or { kind, axis: true } for one with its axis drawn.
export const shapes = (...kinds) => ({ Drawing: Shapes, ...shapesSize({ shapes: kinds }), props: { shapes: kinds } });
