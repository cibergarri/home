import { blocks, ruler } from '../scenes';

// Mates, tema 8: las actividades del cuaderno "Con las manos en las mates": hacer grupos iguales
// de bloques y escribirlos como suma y como multiplicación, el doble y la mitad con bloques, y
// medir con bloques: un cubito azul mide 1 cm y una barra roja 10 cm.
const scene = n => blocks(Math.floor(n / 10) % 10, n % 10, Math.floor(n / 100));

const double = n => ({ story: `Pon dos veces ${n} con tus bloques.`, prompt: `${n} + ${n} = ?`, scene: scene(n), answer: 2 * n });

const half = n => ({ story: `Reparte ${n} en dos partes iguales.`, prompt: `La mitad de ${n} es ?`, scene: scene(n), answer: n / 2 });

const fits = (prompt, answer) => ({ prompt, choices: ['Sí', 'No'], answer });

const conLasManos = {
  slug: 'con-las-manos',
  title: 'Con las manos en las mates',
  heading: 'Haz grupos iguales',
  type: 'numbers',
  write: true,
  instructions: 'Coloca los cubitos en grupos con el mismo número. Una suma de sumandos iguales se puede escribir como multiplicación.',
  questions: [
    { story: 'Agrupa 10 cubitos de 2 en 2. ¿Cuántos grupos haces?', prompt: '? × 2 = 10', answer: 5 },
    { story: 'Pon 10 cubitos en 2 grupos iguales. ¿Cuántos hay en cada grupo?', prompt: '5 + 5 = ?', answer: 10 },
    { story: '2 veces 5 son 10.', prompt: '2 × ? = 10', answer: 5 },
    { story: 'Haz grupos de 5 con 15 cubitos.', prompt: '5 + 5 + 5 = ?', answer: 15 },
    { story: '¿Cuántas veces está el 5?', prompt: '? × 5 = 15', answer: 3 },
    { story: 'Ahora haz grupos de 3 con los 15 cubitos.', prompt: '? × 3 = 15', answer: 5 },
    { story: 'Coloca 12 cubitos en 3 filas iguales.', prompt: '3 × ? = 12', answer: 4 },
    { story: 'Y ahora en 2 filas iguales.', prompt: '2 × ? = 12', answer: 6 },
  ],
  more: [
    {
      title: 'El doble con bloques',
      type: 'numbers',
      write: true,
      instructions: 'Repetir 2 veces una cantidad es calcular su doble.',
      questions: [double(132), double(34), double(41), double(16), double(312), double(235)],
    },
    {
      title: 'La mitad con bloques',
      type: 'numbers',
      write: true,
      instructions: 'Repartir en dos partes iguales es calcular la mitad. Si hace falta, cambia una barra por 10 cubitos.',
      questions: [
        half(12), half(46), half(264), half(30), half(18),
        { story: 'Reparte 15 cubitos en dos partes iguales. Pones 7 a cada lado. ¿Cuántos te sobran?', prompt: '15 = 7 + 7 + ?', answer: 1 },
      ],
    },
    {
      title: 'Mide con bloques',
      type: 'numbers',
      write: true,
      instructions: 'Un cubito azul mide 1 cm. Una barra roja mide 10 cm: es como 10 cubitos azules. En 1 metro caben 10 barras rojas.',
      questions: [
        { story: 'Mide el cubito azul.', prompt: '? cm', scene: ruler(1), answer: 1 },
        { story: 'Mide la barra roja.', prompt: '? cm', scene: ruler(10), answer: 10 },
        { story: '¿Cuántos cubitos azules caben en 1 barra roja?', prompt: '? cubitos', answer: 10 },
        { story: '¿Cuántas barras rojas caben en 1 metro?', prompt: '? barras', answer: 10 },
        { story: '¿Cuántos cubitos azules caben en 1 metro?', prompt: '? cubitos', answer: 100 },
        { story: '3 barras rojas y 4 cubitos azules.', prompt: '30 + 4 = ? cm', scene: blocks(3, 4), answer: 34 },
        { story: '8 barras rojas y 11 cubitos azules.', prompt: '80 + 11 = ? cm', answer: 91 },
        { story: '6 barras rojas y 14 cubitos azules.', prompt: '60 + 14 = ? cm', answer: 74 },
        { story: '2 barras rojas y 22 cubitos azules.', prompt: '20 + 22 = ? cm', answer: 42 },
      ],
    },
    {
      title: '¿Caben en 2 metros?',
      type: 'quiz',
      instructions: '2 metros son 200 cm. Cada barra roja mide 10 cm y cada cubito azul 1 cm.',
      questions: [
        fits('¿En 2 metros caben 25 barras rojas y 3 cubitos azules?', 'No'),
        fits('¿En 2 metros caben 18 barras rojas y 20 cubitos azules?', 'Sí'),
        fits('¿En 2 metros caben 20 barras rojas?', 'Sí'),
        fits('¿En 1 metro caben 10 barras rojas?', 'Sí'),
        fits('¿En 1 metro caben 9 barras rojas y 20 cubitos azules?', 'No'),
        {
          prompt: '¿Por qué en 2 metros no caben 25 barras rojas y 3 cubitos?',
          choices: ['Porque miden 253 cm, más de 200 cm', 'Porque miden 28 cm', 'Porque los cubitos son azules'],
          answer: 'Porque miden 253 cm, más de 200 cm',
        },
      ],
    },
  ],
};

export default conLasManos;
