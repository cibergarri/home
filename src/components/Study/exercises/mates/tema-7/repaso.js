import { money } from '../scenes';

// Mates, tema 7: el repaso del final del tema, "¿Qué he aprendido?", y la lógica en acción.
const repaso = {
  slug: 'repaso',
  title: 'Repaso',
  heading: '1. Cromos aproximados',
  type: 'numbers',
  write: true,
  instructions: 'Juan tiene 125 cromos, María 228 y Carlos 172. Aproxima y suma. Pulsa ✓ después de cada número.',
  questions: [
    { story: 'Aproxima a la decena y suma.', prompt: '? + ? + ? = ?', answer: [130, 230, 170, 530] },
    { story: 'Ahora aproxima a la centena y suma.', prompt: '? + ? + ? = ?', answer: [100, 200, 200, 500] },
  ],
  more: [
    {
      title: '2. Suma de dos formas',
      type: 'numbers',
      write: true,
      instructions: 'Asocia los sumandos de dos formas distintas. Es la propiedad asociativa.',
      questions: [
        { prompt: '6 + 13 + 27 = ? + 27 = ?', answer: [19, 46] },
        { prompt: '6 + 13 + 27 = 6 + ? = ?', answer: [40, 46] },
        { prompt: '24 + 8 + 16 = ? + 16 = ?', answer: [32, 48] },
        { prompt: '24 + 8 + 16 = ? + 8 = ?', answer: [40, 48] },
      ],
    },
    {
      title: '3. En el cine',
      type: 'tower',
      instructions: 'En un cine hay 235 butacas. Quedan 86 libres. ¿Cuántos espectadores ven la película? Resta desagrupando.',
      questions: [{ op: '-', a: 235, b: 86 }],
    },
    {
      title: 'Haz la prueba',
      type: 'numbers',
      write: true,
      instructions: 'Suma el resultado y el sustraendo: tiene que salir el minuendo.',
      questions: [
        { story: '¿Cuántos espectadores ven la película?', prompt: '? espectadores', answer: 149 },
        { prompt: '149 + 86 = ?', answer: 235 },
      ],
    },
    {
      title: '4. Las monedas',
      type: 'numbers',
      write: true,
      instructions: 'Cuenta los euros y los céntimos. Pulsa ✓ después de cada número.',
      questions: [
        { prompt: 'Hay ? € y ? céntimos', scene: money(2, '50c', '20c'), answer: [2, 70] },
        { prompt: 'Hay ? € y ? céntimos', scene: money(2, 1, '50c', '20c', '20c'), answer: [3, 90] },
      ],
    },
    {
      title: '5. ¿Seguro, posible o imposible?',
      type: 'quiz',
      instructions: 'Seguro: pasa siempre. Posible: puede pasar. Imposible: no pasa nunca.',
      questions: [
        { prompt: 'Mi profesor tiene menos años que yo.', choices: ['Seguro', 'Posible', 'Imposible'], answer: 'Imposible' },
        { prompt: 'Una semana tiene 7 días.', choices: ['Seguro', 'Posible', 'Imposible'], answer: 'Seguro' },
        { prompt: 'Mañana tengo clase de Matemáticas.', choices: ['Seguro', 'Posible', 'Imposible'], answer: 'Posible' },
      ],
    },
    {
      title: 'Lógica en acción',
      type: 'numbers',
      write: true,
      instructions: 'Piensa y calcula de cabeza.',
      questions: [
        { story: '¿Cuál es el doble de 150?', prompt: '150 + 150 = ?', answer: 300 },
        { prompt: '350, 349, 348, ?, ?, ?', answer: [347, 346, 345] },
      ],
    },
  ],
};

export default repaso;
