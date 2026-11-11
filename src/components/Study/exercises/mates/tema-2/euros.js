import { money, shop, table } from '../scenes';

// Mates, tema 2: monedas y billetes de euro: contar dinero, cambiarlo por billetes, pagar y dar la
// vuelta con el menor número de monedas y billetes (cuaderno, páginas 10 y 11), lo que falta para
// 100 € y si llega para pagar, y cuánto le devuelven o le falta (cuaderno).
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

// Someone wants something (an emoji) at `price` and has the money in `has`: is it enough? And then
// how much they get back, or how much they are missing (cuaderno: Paula y el juguete, Ana y el
// pastel).
const WANTS = [
  ['Paula', 'un juguete', '🧸', 12, [20]],
  ['Ana', 'un pastel', '🎂', 8, [2, 1]],
  ['Leo', 'un cómic', '📕', 15, [10, 2, 2]],
  ['Topi', 'una cometa', '🪁', 23, [50]],
  ['Nala', 'unas gafas de bucear', '🥽', 18, [10, 5]],
  ['Teo', 'una pelota', '⚽', 9, [10]],
  ['Coco', 'un puzle', '🧩', 31, [20, 5, 2]],
  ['Julia', 'una planta', '🪴', 14, [20]],
  ['Rex', 'un hueso gigante', '🦴', 6, [5]],
  ['Mía', 'unos rotuladores', '🖍️', 27, [20, 10]],
];
const story = (name, thing, price, has) => {
  const total = sum(has);
  const money = has.length === 1 && has[0] >= 5 ? `un billete de ${total} €` : `${total} €`;
  return `${name} quiere ${thing} que cuesta ${price} €. Tiene ${money}.`;
};
const isItEnough = ([name, thing, item, price, has]) => ({
  prompt: `${story(name, thing, price, has)} ¿Le llega para comprarlo?`,
  scene: shop(item, price, ...has),
  choices: ['Sí, le llega', 'No, no le llega'],
  answer: sum(has) >= price ? 'Sí, le llega' : 'No, no le llega',
});
const backOrMissing = ([name, thing, item, price, has]) => {
  const total = sum(has);
  const data = [[price, `€ cuesta ${thing}`], [total, `€ tiene ${name}`]];
  return total >= price
    ? {
      story: `${story(name, thing, price, has)} Le llega. ¿Cuánto le devuelven?`, data, prompt: 'Le devuelven ? €', scene: shop(item, price, ...has), answer: total - price,
    }
    : {
      story: `${story(name, thing, price, has)} No le llega. ¿Cuánto le falta?`, data, prompt: 'Le falta ? €', scene: shop(item, price, ...has), answer: price - total,
    };
};

const PRICES = table(['Básica', 'Especial'], [
  ['Adultos', '6 €', '12 €'],
  ['Niños', '4 €', '8 €'],
]);

const ZOO = table(['Entrada', 'Con tren'], [
  ['Adultos', '9 €', '15 €'],
  ['Niños', '5 €', '8 €'],
]);

const CINEMA = table(['Precio'], [
  ['Entrada', '7 €'],
  ['Palomitas', '4 €'],
  ['Refresco', '2 €'],
  ['Agua', '1 €'],
]);

// A question about a price table: `prompt`, the `answer` first among the `choices`.
const ask = scene => (prompt, answer, ...others) => ({
  prompt, scene, choices: [answer, ...others], answer,
});
const dogs = ask(PRICES);
const zoo = ask(ZOO);
const cinema = ask(CINEMA);

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
      questions: [pay(8), pay(15), pay(37), pay(26), pay(64), pay(49), pay(73), pay(18), pay(55), pay(92)],
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
        giveBack('El disfraz de egipcio de Topi', '🐫', 20, 50),
        giveBack('La linterna', '🔦', 7, 10),
        giveBack('El juego de mesa', '🎲', 34, 20, 20),
        giveBack('La gorra', '🧢', 11, 20),
      ],
    },
    {
      title: '¿Le llega?',
      type: 'quiz',
      keepOrder: true,
      instructions: 'Mira el precio y el dinero que tiene. Si tiene más o lo mismo, le llega. Si tiene menos, no le llega.',
      questions: WANTS.map(isItEnough),
    },
    {
      title: '¿Cuánto le devuelven? ¿Cuánto le falta?',
      type: 'numbers',
      write: true,
      instructions: 'Si le llega, le devuelven lo que sobra: lo que tiene menos el precio. Si no le llega, le falta: el precio menos lo que tiene.',
      questions: WANTS.map(backOrMissing),
    },
    {
      title: '¿Cuánto falta para 100 €?',
      type: 'numbers',
      write: true,
      instructions: 'Cuenta el dinero y piensa cuánto falta para llegar a 100 €. Pulsa ✓ después de cada número.',
      questions: [toHundred(10, 10, 10, 10), toHundred(50, 10, 10), toHundred(50, 20, 10, 10), toHundred(20, 20, 20, 10, 5)],
    },
    {
      title: '¿Dónde hay ese dinero?',
      type: 'quiz',
      instructions: 'Suma los billetes y las monedas de cada respuesta.',
      questions: [
        { prompt: '¿Dónde hay 8 euros?', choices: ['5 € + 2 € + 1 €', '5 € + 2 € + 2 €', '2 € + 2 € + 2 €'], answer: '5 € + 2 € + 1 €' },
        { prompt: '¿Dónde hay 12 euros?', choices: ['10 € + 2 €', '5 € + 5 € + 1 €', '10 € + 5 €'], answer: '10 € + 2 €' },
        { prompt: '¿Dónde hay 15 euros?', choices: ['10 € + 5 €', '5 € + 5 € + 2 €', '10 € + 2 € + 2 €'], answer: '10 € + 5 €' },
        { prompt: '¿Dónde hay 17 euros?', choices: ['10 € + 5 € + 2 €', '10 € + 5 € + 1 €', '5 € + 5 € + 5 € + 1 €'], answer: '10 € + 5 € + 2 €' },
        { prompt: '¿Dónde hay 20 euros?', choices: ['10 € + 5 € + 5 €', '10 € + 5 € + 2 €', '5 € + 5 € + 5 €'], answer: '10 € + 5 € + 5 €' },
        { prompt: '¿Dónde hay 25 euros?', choices: ['20 € + 5 €', '10 € + 10 € + 2 €', '20 € + 2 € + 2 €'], answer: '20 € + 5 €' },
        { prompt: '¿Dónde hay 30 euros?', choices: ['20 € + 10 €', '20 € + 5 € + 2 €', '10 € + 10 € + 5 €'], answer: '20 € + 10 €' },
        { prompt: '¿Dónde hay 50 euros?', choices: ['20 € + 20 € + 10 €', '20 € + 10 € + 10 €', '20 € + 20 € + 5 €'], answer: '20 € + 20 € + 10 €' },
      ],
      draw: 5,
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
        dogs('¿Cuánto cuesta una entrada especial de adulto?', '12 €', '6 €', '8 €'),
        dogs('¿Cuánto más cuesta la entrada especial de niño que la básica de niño?', '4 €', '8 €', '2 €'),
        dogs('Lena y su padre compran entradas especiales. ¿Cuánto pagan?', '20 €', '18 €', '10 €'),
        dogs('Teo, Lena y su madre compran entradas básicas. ¿Cuánto pagan?', '14 €', '12 €', '16 €'),
        dogs('Dos adultos compran entradas básicas y pagan con un billete de 20 €. ¿Cuánto les devuelven?', '8 €', '12 €', '6 €'),
        dogs('Dos niños compran entradas especiales y pagan con un billete de 20 €. ¿Cuánto les devuelven?', '4 €', '6 €', 'Nada'),
        dogs('Ana tiene 15 €. ¿Le llega para una entrada especial de adulto y una básica de niño?', 'No, le falta 1 €', 'Sí, le sobra 1 €', 'Sí, justo'),
        dogs('¿Qué cuesta más: dos entradas básicas de niño o una especial de niño?', 'Cuestan lo mismo', 'Dos básicas de niño', 'Una especial de niño'),
        dogs('Teo tiene 10 €. ¿Qué entradas puede comprar justas?', 'Una básica de adulto y una básica de niño', 'Una especial de adulto', 'Una especial y una básica de niño'),
      ],
      draw: 6,
    },
    {
      title: 'El zoo',
      type: 'quiz',
      instructions: 'Mira los precios del zoo. La entrada «con tren» incluye un paseo en el trenecito.',
      questions: [
        zoo('¿Cuánto cuesta una entrada de niño con tren?', '8 €', '5 €', '15 €'),
        zoo('Mamá y Julia compran entradas sin tren. ¿Cuánto pagan?', '14 €', '18 €', '10 €'),
        zoo('Papá compra una entrada de adulto con tren y paga con un billete de 20 €. ¿Cuánto le devuelven?', '5 €', '15 €', '11 €'),
        zoo('Dos niños compran entradas con tren. ¿Cuánto pagan?', '16 €', '10 €', '13 €'),
        zoo('Lucas tiene 10 €. Compra una entrada de niño con tren. ¿Cuánto le sobra?', '2 €', '5 €', 'Nada'),
        zoo('Un adulto y un niño compran entradas con tren. ¿Cuánto pagan?', '23 €', '14 €', '20 €'),
        zoo('¿Cuánto más cuesta la entrada de adulto con tren que sin tren?', '6 €', '9 €', '5 €'),
        zoo('La abuela tiene 20 €. Compra dos entradas de adulto sin tren. ¿Cuánto le sobra?', '2 €', '11 €', 'Le falta dinero'),
        zoo('Tres niños compran entradas sin tren y pagan con un billete de 20 €. ¿Cuánto les devuelven?', '5 €', '15 €', '10 €'),
        zoo('Paula tiene 7 €. ¿Le llega para una entrada de niño con tren?', 'No, le falta 1 €', 'Sí, le sobra 1 €', 'Sí, justo'),
      ],
      draw: 6,
    },
    {
      title: 'En el cine',
      type: 'quiz',
      instructions: 'Mira lo que cuesta cada cosa en el cine.',
      questions: [
        cinema('Julia compra una entrada y unas palomitas. ¿Cuánto paga?', '11 €', '9 €', '12 €'),
        cinema('Julia tiene 10 €. Compra una entrada y un refresco. ¿Cuánto le sobra?', '1 €', '3 €', 'Le falta dinero'),
        cinema('¿Cuánto cuestan dos entradas?', '14 €', '12 €', '9 €'),
        cinema('Teo compra una entrada, palomitas y un refresco, y paga con un billete de 20 €. ¿Cuánto le devuelven?', '7 €', '9 €', '13 €'),
        cinema('Lena tiene 5 €. ¿Le llega para una entrada?', 'No, le faltan 2 €', 'Sí, le sobran 2 €', 'Sí, justo'),
        cinema('¿Qué cuesta más: unas palomitas o dos refrescos?', 'Cuestan lo mismo', 'Las palomitas', 'Los dos refrescos'),
        cinema('Dos amigos compran dos entradas y unas palomitas para compartir. ¿Cuánto pagan?', '18 €', '15 €', '22 €'),
        cinema('Ana tiene 6 €. ¿Qué puede comprar justo con ese dinero?', 'Palomitas y un refresco', 'Una entrada', 'Palomitas y dos refrescos'),
        cinema('Papá compra tres aguas y paga con una moneda de 5 €. ¿Cuánto le devuelven?', '2 €', '3 €', '1 €'),
        cinema('¿Cuánto más cuesta la entrada que las palomitas?', '3 €', '4 €', '11 €'),
      ],
      draw: 6,
    },
  ],
};

export default euros;
