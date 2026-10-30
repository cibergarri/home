// Mates, tema 2: el repaso del final del tema, "¿Qué he aprendido?".
const repaso = {
  slug: 'repaso',
  title: 'Repaso',
  heading: '1. Completa la serie',
  type: 'numbers',
  write: true,
  instructions: 'Escribe los números que faltan y descompón.',
  questions: [
    { prompt: '140, 141, ?, 143, ?, ?, 146, ?, ?, 149', answer: [142, 144, 145, 147, 148] },
    { prompt: 'El número con 6 U: 146 = ? C + ? D + ? U', answer: [1, 4, 6] },
    { prompt: '146 = 100 + ? + ?', answer: [40, 6] },
  ],
  more: [
    {
      title: '2. Suma en torre',
      type: 'tower',
      instructions: 'Coloca cada cifra en su columna y suma empezando por las unidades.',
      questions: [{ op: '+', a: 134, b: 41 }, { op: '+', a: 185, b: 13 }, { op: '+', a: 56, b: 123 }],
    },
    {
      title: '¿Qué suma tiene el resultado mayor?',
      type: 'quiz',
      instructions: 'Mira los resultados de las sumas que acabas de hacer.',
      questions: [
        {
          prompt: '¿Cuál tiene un resultado mayor?',
          say: false,
          choices: ['134 + 41 = 175', '185 + 13 = 198', '56 + 123 = 179'],
          answer: '185 + 13 = 198',
        },
      ],
    },
    {
      title: '3. Resta en torre',
      type: 'tower',
      instructions: 'Coloca el minuendo arriba y el sustraendo abajo.',
      questions: [{ op: '-', a: 184, b: 53 }, { op: '-', a: 198, b: 48 }],
    },
    {
      title: '4. Un problema',
      type: 'numbers',
      write: true,
      instructions: 'Lee y calcula.',
      questions: [
        {
          story: 'Claudia tiene 14 € y Aitor 25 €. ¿Cuánto dinero tienen en total?',
          prompt: '? €',
          answer: 39,
        },
        {
          story: 'Quieren comprar un tren que cuesta 32 €. ¿Cuánto dinero les sobrará?',
          prompt: '? €',
          answer: 7,
        },
      ],
    },
  ],
};

export default repaso;
