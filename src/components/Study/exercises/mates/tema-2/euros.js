import { money, table } from '../scenes';

// Mates, tema 2: monedas y billetes de euro: contar dinero, lo que falta para 100 € y si llega para
// pagar.
const count = (...values) => ({
  prompt: 'Hay ? €',
  scene: money(...values),
  answer: values.reduce((sum, value) => sum + value, 0),
});

const toHundred = (...values) => {
  const total = values.reduce((sum, value) => sum + value, 0);
  return { prompt: 'Hay ? €. Faltan ? € para tener 100 €.', scene: money(...values), answer: [total, 100 - total] };
};

const PRICES = table(['Básica', 'Especial'], [
  ['Adultos', '6 €', '12 €'],
  ['Niños', '4 €', '8 €'],
]);

const euros = {
  slug: 'euros',
  title: 'Monedas y billetes',
  heading: '¿Cuánto dinero hay?',
  type: 'numbers',
  write: true,
  instructions: 'Cuenta primero los billetes y después las monedas.',
  questions: [
    count(10, 5, 5),
    count(10, 2, 2, 2, 2, 1, 1),
    count(20, 10, 5, 2, 1),
    count(50, 20, 10, 5, 2),
    count(20, 5, 2, 2, 2, 2, 1, 1, 1),
  ],
  more: [
    {
      title: '¿Cuánto falta para 100 €?',
      type: 'numbers',
      write: true,
      instructions: 'Cuenta el dinero y piensa cuánto falta para llegar a 100 €. Pulsa ✓ después de cada número.',
      questions: [toHundred(10, 10, 10, 10), toHundred(50, 10, 10), toHundred(50, 20, 10, 10), toHundred(20, 20, 20, 10, 5)],
    },
    {
      title: 'La exhibición de perros policía',
      type: 'quiz',
      instructions: 'Mira los precios de las entradas en la tabla.',
      questions: [
        {
          prompt: 'Teo tiene 10 €. ¿Puede comprar una entrada especial de niño?',
          scene: PRICES,
          choices: ['Sí', 'No'],
          answer: 'Sí',
        },
        {
          prompt: 'Si Teo compra la entrada especial de niño con sus 10 €, ¿cuánto le sobra?',
          scene: PRICES,
          choices: ['2 €', '4 €', 'Nada'],
          answer: '2 €',
        },
        {
          prompt: 'Teo compra una entrada básica de niño y otra básica de adulto para su madre. Tiene 10 €. ¿Le sobra o le falta dinero?',
          scene: PRICES,
          choices: ['Le sobra', 'Le falta', 'Ni le sobra ni le falta'],
          answer: 'Ni le sobra ni le falta',
        },
        {
          prompt: '¿Dónde hay 20 euros?',
          choices: ['10 € + 5 € + 2 €', '10 € + 5 € + 5 €', '5 € + 5 € + 5 €'],
          answer: '10 € + 5 € + 5 €',
        },
      ],
    },
  ],
};

export default euros;
