// Mates, tema 3: medir longitudes con el cuerpo (dedo, palmo, pie, paso) y con cubos y barras.
// Estas medidas dependen de quién mide.
const tool = (prompt, answer) => ({ prompt, choices: ['Dedo', 'Palmo', 'Pie', 'Paso'], answer });

const medir = {
  slug: 'medir',
  title: 'Medir la longitud',
  heading: '¿Qué usarías para medir?',
  type: 'quiz',
  instructions: 'Para medir podemos usar el dedo, el palmo, el pie o el paso. Para algo corto, usa algo pequeño; para algo largo, algo grande.',
  questions: [
    tool('¿Qué usarías para medir una goma de borrar?', 'Dedo'),
    tool('¿Qué usarías para medir el largo de tu mesa?', 'Palmo'),
    tool('¿Qué usarías para medir el patio del cole?', 'Paso'),
    tool('¿Qué usarías para medir una alfombra, poniendo un pie delante del otro?', 'Pie'),
    tool('¿Qué usarías para medir un lápiz?', 'Dedo'),
    tool('¿Qué usarías para medir el pasillo de casa?', 'Paso'),
  ],
  more: [
    {
      title: '¿Medimos todos lo mismo?',
      type: 'quiz',
      instructions: 'Las manos, los pies y los pasos no son iguales en todas las personas.',
      questions: [
        {
          prompt: 'Julia mide su mesa: 6 palmos. Si la mide su profesor, ¿cuántos palmos le saldrán?',
          choices: ['Más palmos', 'Menos palmos', 'Los mismos'],
          answer: 'Menos palmos',
        },
        {
          prompt: '¿Por qué le salen menos palmos al profesor?',
          choices: ['Porque su mano es más grande', 'Porque su mano es más pequeña'],
          answer: 'Porque su mano es más grande',
        },
        {
          prompt: 'Teo mide la clase con pasos. Si la mide Lena, ¿obtendrá siempre el mismo resultado?',
          choices: ['Sí', 'No'],
          answer: 'No',
        },
        {
          prompt: 'Si dos niños miden la clase en baldosas, ¿obtendrán el mismo resultado?',
          choices: ['Sí, porque todas las baldosas son iguales', 'No, porque cada niño es diferente'],
          answer: 'Sí, porque todas las baldosas son iguales',
        },
      ],
    },
    {
      title: 'Cubos y barras',
      type: 'numbers',
      write: true,
      instructions: 'Una barra roja mide lo mismo que 10 cubos azules puestos en fila.',
      questions: [
        { story: 'El libro mide 30 cubos. ¿Cuántas barras rojas mide?', prompt: '? barras', answer: 3 },
        { story: 'El pincel mide 2 barras rojas. ¿Cuántos cubos mide?', prompt: '? cubos', answer: 20 },
        { story: 'La regla mide 1 barra roja y 5 cubos. ¿Cuántos cubos mide en total?', prompt: '? cubos', answer: 15 },
        { story: 'La cuerda mide 40 cubos. ¿Cuántas barras rojas mide?', prompt: '? barras', answer: 4 },
        { story: 'La caja mide 2 barras rojas y 3 cubos. ¿Cuántos cubos mide en total?', prompt: '? cubos', answer: 23 },
      ],
    },
  ],
};

export default medir;
