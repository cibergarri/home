import {
  Blocks, blocksSize, NumberLine, NUMBER_LINE, DataTable, tableSize, Money, moneySize, Shop, shopSize, BarModel, BAR,
} from '../../drawings/Maths';

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

export const bar = props => ({ Drawing: BarModel, ...BAR, props });
