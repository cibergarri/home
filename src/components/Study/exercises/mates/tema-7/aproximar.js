import { numberLine } from '../scenes';

// Mates, tema 7: aproximar números de 3 cifras a la decena y a la centena, con la recta numérica.
// Si un número está justo en medio, se aproxima a la decena o a la centena mayor.
const toTen = n => Math.round(n / 10) * 10;
const toHundred = n => Math.round(n / 100) * 100;

const ten = n => ({
  prompt: `El ${n} aproximado a la decena es ?`,
  scene: numberLine(Math.floor(n / 10) * 10 - 10, Math.floor(n / 10) * 10 + 20, n),
  answer: toTen(n),
});

const hundred = n => ({ prompt: `El ${n} aproximado a la centena es ?`, answer: toHundred(n) });

const between = n => ({ prompt: `${n} está entre ? y ?`, answer: [Math.floor(n / 10) * 10, Math.floor(n / 10) * 10 + 10] });

const betweenHundreds = n => ({ prompt: `${n} está entre ? y ?`, answer: [Math.floor(n / 100) * 100, Math.floor(n / 100) * 100 + 100] });

const aproximar = {
  slug: 'aproximar',
  title: 'Aproximar a la decena y a la centena',
  heading: 'Aproxima a la decena',
  type: 'numbers',
  write: true,
  instructions: 'Mira en la recta a qué decena está más cerca el número. Si está justo en medio, se aproxima a la decena mayor.',
  questions: [ten(164), ten(222), ten(383), ten(175), ten(637), ten(849), ten(512), ten(296)],
  more: [
    {
      title: 'Aproxima a la centena',
      type: 'numbers',
      write: true,
      instructions: 'El 164 está entre el 100 y el 200, pero más cerca del 200. Si el número está justo en medio, se aproxima a la centena mayor.',
      questions: [
        hundred(164), hundred(222), hundred(552), hundred(850), hundred(637), hundred(349), hundred(750), hundred(281),
      ],
    },
    {
      title: '¿Entre qué decenas o centenas está?',
      type: 'numbers',
      write: true,
      instructions: 'Escribe la decena o la centena de antes y la de después. Pulsa ✓ después de cada número.',
      questions: [between(383), between(175), between(628), betweenHundreds(552), betweenHundreds(850), betweenHundreds(417)],
    },
    {
      title: '¿Cuál está más cerca?',
      type: 'quiz',
      instructions: 'Piensa a qué número llegas antes.',
      questions: [
        { prompt: 'El 383, ¿a qué decena está más cerca?', choices: ['380', '390'], answer: '380' },
        { prompt: 'El 175 está justo en medio. ¿A qué decena se aproxima?', choices: ['170', '180'], answer: '180' },
        { prompt: 'El 552, ¿a qué centena está más cerca?', choices: ['500', '600'], answer: '600' },
        { prompt: 'El 850 está justo en medio. ¿A qué centena se aproxima?', choices: ['800', '900'], answer: '900' },
        { prompt: '¿Qué número se aproxima a 300?', choices: ['249', '281', '362'], answer: '281' },
        { prompt: '¿Qué número aproximado a la decena es 640?', choices: ['637', '647', '634'], answer: '637' },
      ],
    },
    {
      title: 'Sumar aproximando',
      type: 'numbers',
      write: true,
      instructions: 'Aproxima los sumandos a la decena antes de sumar. Pulsa ✓ después de cada número.',
      questions: [
        {
          story: 'Alicia tiene 124 cromos y Leo tiene 283. ¿Cuántos cromos tienen, más o menos, entre los dos?',
          data: [[124, 'cromos tiene Alicia'], [283, 'cromos tiene Leo']],
          prompt: '? + ? = ?',
          answer: [120, 280, 400],
        },
        {
          story: 'En el concierto del cole hay 218 niños y 143 mayores. ¿Cuántas personas hay, más o menos?',
          data: [[218, 'niños en el concierto'], [143, 'mayores en el concierto']],
          prompt: '? + ? = ?',
          answer: [220, 140, 360],
        },
        {
          story: 'Mica ha oído 336 cantos de pájaro y Lena 251. ¿Cuántos cantos han oído, más o menos, entre las dos?',
          data: [[336, 'cantos ha oído Mica'], [251, 'cantos ha oído Lena']],
          prompt: '? + ? = ?',
          answer: [340, 250, 590],
        },
      ],
    },
  ],
};

export default aproximar;
