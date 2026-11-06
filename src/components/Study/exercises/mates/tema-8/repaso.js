import { blocks } from '../scenes';

// Mates, tema 8: el repaso del final del tema, "¿Qué he aprendido?".
const repaso = {
  slug: 'repaso',
  title: 'Repaso',
  heading: '1. Pares e impares',
  type: 'sort',
  instructions: 'Arrastra cada número a su columna. ¿En qué cifras acaban los pares?',
  columns: [{ id: 'par', title: 'Par' }, { id: 'impar', title: 'Impar' }],
  cards: [13, 9, 15, 42, 32, 19, 17, 24, 11, 33, 16, 27].map(n => ({ id: `n${n}`, text: String(n), columns: [n % 2 ? 'impar' : 'par'] })),
  more: [
    {
      title: '2. Veces y multiplicaciones',
      type: 'numbers',
      write: true,
      instructions: 'Escribe la suma de sumandos repetidos y la multiplicación.',
      questions: [
        { prompt: '3 veces 6:   6 + 6 + 6 = ?', answer: 18 },
        { prompt: '3 × 6 = ?', answer: 18 },
        { prompt: '4 veces 5:   5 + 5 + 5 + 5 = ?', answer: 20 },
        { prompt: '4 × 5 = ?', answer: 20 },
      ],
    },
    {
      title: '3. El doble y la mitad',
      type: 'numbers',
      write: true,
      instructions: 'Agrupa los bloques y calcula.',
      questions: [
        { prompt: 'El doble de 29:   2 × 29 = 29 + 29 = ?', scene: blocks(2, 9), answer: 58 },
        { prompt: 'La mitad de 12 es ?', scene: blocks(1, 2), answer: 6 },
      ],
    },
    {
      title: '4. Cubitos y centímetros',
      type: 'numbers',
      write: true,
      instructions: 'Un cubito azul mide 1 cm, y 100 cubitos son 1 m.',
      questions: [
        { story: 'Una pulsera mide 18 cubitos azules.', prompt: '? cm', answer: 18 },
        { story: 'Un cable mide 1 m.', prompt: '? cubitos azules', answer: 100 },
        { story: 'Una tiza mide 10 cm.', prompt: '? cubitos azules', answer: 10 },
      ],
    },
    {
      title: '5. Izquierda, derecha y más',
      type: 'quiz',
      instructions: 'Recuerda: si alguien está de frente, su derecha está en tu izquierda.',
      questions: [
        {
          prompt: 'Yoli está de frente a ti y sujeta el boli con la mano que ves a tu izquierda. ¿Con qué mano lo sujeta?',
          choices: ['Derecha', 'Izquierda'],
          answer: 'Derecha',
        },
        { prompt: '¿Qué número es par?', choices: ['27', '33', '16'], answer: '16' },
        { prompt: '¿Qué muestra un plano?', choices: ['Un lugar visto desde arriba', 'Un lugar visto desde abajo'], answer: 'Un lugar visto desde arriba' },
      ],
    },
  ],
};

export default repaso;
