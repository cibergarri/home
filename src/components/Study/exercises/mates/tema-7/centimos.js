import { money } from '../scenes';

// Mates, tema 7: las monedas de céntimo de euro. Contar céntimos, contar euros y céntimos, 1 € son
// 100 céntimos, y quitar las monedas que sobran.
const CENTS = {
  '50c': 50, '20c': 20, '10c': 10, '5c': 5, '2c': 2, '1c': 1,
};
const total = values => values.reduce((sum, value) => sum + (CENTS[value] ?? value * 100), 0);

const cents = (...values) => ({ prompt: 'Hay ? céntimos', scene: money(...values), answer: total(values) });

const eurosAndCents = (...values) => {
  const all = total(values);
  return { prompt: 'Hay ? € y ? céntimos', scene: money(...values), answer: [Math.floor(all / 100), all % 100] };
};

// Has `values`, and wants `euros` euros and `wanted` cents: what is left over, in cents.
const leftOver = (euros, wanted, ...values) => ({
  story: `Quieres tener ${euros} € y ${wanted} céntimos. ¿Cuántos céntimos sobran?`,
  prompt: 'Sobran ? céntimos',
  scene: money(...values),
  answer: total(values) - (euros * 100 + wanted),
});

const centimos = {
  slug: 'centimos',
  title: 'Monedas de céntimo',
  heading: '¿Cuántos céntimos hay?',
  type: 'numbers',
  write: true,
  instructions: 'Las monedas doradas pequeñas son de 10, 20 y 50 céntimos. Las de cobre, de 1, 2 y 5. Cuenta primero las más grandes.',
  questions: [
    cents('50c', '20c'),
    cents('20c', '20c'),
    cents('50c', '20c', '20c'),
    cents('50c', '20c', '10c'),
    cents('10c', '10c', '5c', '2c'),
    cents('20c', '10c', '10c', '5c', '1c'),
  ],
  more: [
    {
      title: 'Euros y céntimos',
      type: 'numbers',
      write: true,
      instructions: 'Cuenta primero los euros y después los céntimos. Pulsa ✓ después de cada número.',
      questions: [
        eurosAndCents(1, '20c', '10c'),
        eurosAndCents(2, 1, '50c', '10c'),
        eurosAndCents(5, 2, '20c', '20c'),
        eurosAndCents(1, '50c', '10c'),
        eurosAndCents(2, '50c', '20c'),
        eurosAndCents(2, 1, '50c', '20c', '20c'),
      ],
    },
    {
      title: 'Un euro son 100 céntimos',
      type: 'numbers',
      write: true,
      instructions: '1 € = 100 céntimos. Piensa cuántas monedas hacen falta.',
      questions: [
        { prompt: '1 € = ? céntimos', answer: 100 },
        { story: '¿Cuántas monedas de 50 céntimos hacen 1 €?', prompt: '? monedas', answer: 2 },
        { story: '¿Cuántas monedas de 10 céntimos hacen 1 €?', prompt: '? monedas', answer: 10 },
        { story: '¿Cuántas monedas de 20 céntimos hacen 1 €?', prompt: '? monedas', answer: 5 },
        { story: '¿Cuántas monedas de 50 céntimos hacen 2 €?', prompt: '? monedas', answer: 4 },
        { story: 'Tienes 70 céntimos. ¿Cuántos céntimos te faltan para tener 1 €?', prompt: '? céntimos', answer: 30 },
      ],
    },
    {
      title: '¿Qué monedas necesitas?',
      type: 'quiz',
      instructions: 'Elige las monedas que hacen el precio justo.',
      questions: [
        {
          prompt: 'La goma cuesta 70 céntimos. ¿Con qué monedas la pagas?',
          choices: ['50 cent + 20 cent', '50 cent + 10 cent', '20 cent + 20 cent'],
          answer: '50 cent + 20 cent',
        },
        {
          prompt: 'El lápiz cuesta 40 céntimos. ¿Con qué monedas lo pagas?',
          choices: ['20 cent + 10 cent', '20 cent + 20 cent', '50 cent + 10 cent'],
          answer: '20 cent + 20 cent',
        },
        {
          prompt: 'El sacapuntas cuesta 90 céntimos. ¿Con qué monedas lo pagas?',
          choices: ['50 cent + 20 cent + 20 cent', '50 cent + 20 cent + 10 cent', '20 cent + 20 cent + 20 cent'],
          answer: '50 cent + 20 cent + 20 cent',
        },
        {
          prompt: 'La libreta cuesta 1 € y 30 céntimos. ¿Con qué monedas la pagas?',
          choices: ['1 € + 20 cent + 10 cent', '1 € + 20 cent + 20 cent', '2 € + 10 cent'],
          answer: '1 € + 20 cent + 10 cent',
        },
        {
          prompt: '¿Qué monedas rodeas para tener 2 € y 70 céntimos?',
          choices: ['2 € + 50 cent + 20 cent', '1 € + 50 cent + 20 cent', '2 € + 20 cent + 20 cent'],
          answer: '2 € + 50 cent + 20 cent',
        },
        {
          prompt: '¿Y para tener 3 € y 90 céntimos?',
          choices: ['2 € + 1 € + 50 cent + 20 cent + 20 cent', '2 € + 1 € + 50 cent + 20 cent', '2 € + 50 cent + 20 cent + 20 cent'],
          answer: '2 € + 1 € + 50 cent + 20 cent + 20 cent',
        },
      ],
    },
    {
      title: '¿Cuánto sobra?',
      type: 'numbers',
      write: true,
      instructions: 'Cuenta todo el dinero y piensa cuánto hay de más.',
      questions: [
        leftOver(1, 60, 1, '50c', '20c', '10c'),
        leftOver(2, 40, 2, '50c', '20c', '20c'),
        leftOver(1, 50, 1, '50c', '20c', '20c'),
      ],
    },
  ],
};

export default centimos;
