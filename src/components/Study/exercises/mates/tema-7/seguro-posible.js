// Mates, tema 7: seguro, posible e imposible. Coger algo sin mirar de una bolsa, y cosas que pasan
// siempre, que pueden pasar o que no pasan nunca.
const CHOICES = ['Seguro', 'Posible', 'Imposible'];

const seguroPosible = {
  slug: 'seguro-posible',
  title: 'Seguro, posible e imposible',
  heading: 'Coge sin mirar',
  type: 'quiz',
  instructions: 'Seguro: pasa siempre. Posible: puede pasar o no. Imposible: no puede pasar nunca.',
  questions: [
    { prompt: 'En la bolsa hay 🔴🔴🔴. Coges una bola sin mirar. ¿Es seguro, posible o imposible que sea roja?', say: 'En la bolsa hay tres bolas rojas. Coges una sin mirar. ¿Es seguro, posible o imposible que sea roja?', choices: CHOICES, answer: 'Seguro' },
    { prompt: 'En la bolsa hay 🔴🔴🔵. ¿Coger una bola azul es seguro, posible o imposible?', say: 'En la bolsa hay dos bolas rojas y una azul. ¿Coger una bola azul es seguro, posible o imposible?', choices: CHOICES, answer: 'Posible' },
    { prompt: 'En la bolsa hay 🔴🔴🔵. ¿Coger una bola verde es seguro, posible o imposible?', say: 'En la bolsa hay dos bolas rojas y una azul. ¿Coger una bola verde es seguro, posible o imposible?', choices: CHOICES, answer: 'Imposible' },
    { prompt: 'En la cesta hay 🍌🍌🍌🍌. ¿Coger un plátano es seguro, posible o imposible?', say: 'En la cesta hay cuatro plátanos. ¿Coger un plátano es seguro, posible o imposible?', choices: CHOICES, answer: 'Seguro' },
    { prompt: 'En la cesta hay 🍌🍌🍌🍌. ¿Coger una manzana es seguro, posible o imposible?', say: 'En la cesta hay cuatro plátanos. ¿Coger una manzana es seguro, posible o imposible?', choices: CHOICES, answer: 'Imposible' },
    { prompt: 'En la cesta hay 🍎🍌🍎. ¿Coger una manzana es seguro, posible o imposible?', say: 'En la cesta hay dos manzanas y un plátano. ¿Coger una manzana es seguro, posible o imposible?', choices: CHOICES, answer: 'Posible' },
  ],
  more: [
    {
      title: 'Las figuras de Topi',
      type: 'quiz',
      instructions: 'En la caja hay círculos rojos y cuadrados rojos. Topi coge una figura sin mirar.',
      questions: [
        { prompt: '¿Que Topi coja un círculo es seguro, posible o imposible?', choices: CHOICES, answer: 'Posible' },
        { prompt: '¿Que Topi coja una figura roja es seguro, posible o imposible?', choices: CHOICES, answer: 'Seguro' },
        { prompt: '¿Que Topi coja una figura negra es seguro, posible o imposible?', choices: CHOICES, answer: 'Imposible' },
        { prompt: '¿Que Topi coja un triángulo es seguro, posible o imposible?', choices: CHOICES, answer: 'Imposible' },
        { prompt: '¿Que Topi coja un cuadrado es seguro, posible o imposible?', choices: CHOICES, answer: 'Posible' },
      ],
    },
    {
      title: '¿Seguro, posible o imposible?',
      type: 'sort',
      instructions: 'Arrastra cada frase a su columna.',
      columns: [
        { id: 'seguro', title: 'Seguro' },
        { id: 'posible', title: 'Posible' },
        { id: 'imposible', title: 'Imposible' },
      ],
      cards: [
        { id: 'abril', text: 'Abril tiene 30 días.', columns: ['seguro'] },
        { id: 'semana', text: 'Una semana tiene 7 días.', columns: ['seguro'] },
        { id: 'febrero', text: 'Febrero tiene 29 días.', columns: ['posible'] },
        { id: 'mates', text: 'Mañana tengo clase de Matemáticas.', columns: ['posible'] },
        { id: 'lluvia', text: 'Mañana llueve.', columns: ['posible'] },
        { id: 'marzo', text: 'Marzo tiene 32 días.', columns: ['imposible'] },
        { id: 'profe', text: 'Mi profesor tiene menos años que yo.', columns: ['imposible'] },
        { id: 'dado', text: 'Al tirar un dado sale un 7.', columns: ['imposible'] },
      ],
    },
  ],
};

export default seguroPosible;
