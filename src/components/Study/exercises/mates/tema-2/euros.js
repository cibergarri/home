import { money, shop, table } from '../scenes';

// Mates, tema 2: monedas y billetes de euro: contar dinero, cambiarlo por billetes, pagar y dar la
// vuelta con el menor número de monedas y billetes (cuaderno, páginas 10 y 11), lo que falta para
// 100 € y si llega para pagar.
const count = (...values) => ({
  prompt: 'Hay ? €',
  scene: money(...values),
  answer: values.reduce((sum, value) => sum + value, 0),
});

const toHundred = (...values) => {
  const total = values.reduce((sum, value) => sum + value, 0);
  return { prompt: 'Hay ? €. Faltan ? € para tener 100 €.', scene: money(...values), answer: [total, 100 - total] };
};

const sum = values => values.reduce((total, value) => total + value, 0);

// Cambiar el dinero por `piecesSaid` (pieces notes or coins in all).
const change = (pieces, piecesSaid, ...values) => ({
  story: `Cambia todo este dinero por ${piecesSaid}.`, scene: money(...values), target: sum(values), pieces, piecesSaid,
});

const pay = amount => ({ story: `Paga ${amount} € justos.`, target: amount });

// What is bought (an emoji), its price, and the money paid: the change is given back.
const giveBack = (thing, item, price, ...paid) => ({
  story: `${thing} cuesta ${price} € y pagas con ${paid.length > 1 ? 'estos billetes' : 'este billete'}. ¿Cuánto te devuelven?`,
  scene: shop(item, price, ...paid),
  target: sum(paid) - price,
});

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
      title: 'Cambia por billetes',
      type: 'money',
      instructions: 'Cuenta el dinero y toca los billetes (o las monedas) por los que lo cambias. Toca uno que ya has puesto para quitarlo.',
      questions: [
        change(1, 'un solo billete', 10, 10, 5, 5, 20),
        change(1, 'un solo billete', 20, 5, 5, 5, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1),
        change(3, 'tres billetes', 50, 10),
        change(1, 'un solo billete', 5, 5),
        change(2, 'dos billetes', 10, 10, 10, 5, 5),
        change(1, 'un solo billete', 20, 20, 10),
        change(5, 'cinco monedas iguales', 10),
      ],
    },
    {
      title: 'Paga justo',
      type: 'money',
      instructions: 'Pon el dinero justo con el menor número de billetes y monedas.',
      questions: [pay(8), pay(15), pay(37), pay(26), pay(64), pay(49)],
    },
    {
      title: '¿Cuánto te devuelven?',
      type: 'money',
      instructions: 'Calcula cuánto te devuelven y ponlo con el menor número de billetes y monedas.',
      questions: [
        giveBack('El estuche', '🖍️', 16, 20),
        giveBack('El libro', '📖', 22, 10, 20),
        giveBack('La mochila', '🎒', 38, 50),
        giveBack('El abrigo', '🧥', 54, 50, 20),
        giveBack('El balón', '⚽', 13, 20),
        giveBack('El osito', '🧸', 27, 50),
      ],
    },
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
