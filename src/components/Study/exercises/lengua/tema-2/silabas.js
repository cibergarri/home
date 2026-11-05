// Lengua, tema 2: letras, sílabas, palabras y oraciones. Contar sílabas, monosílabas y
// polisílabas, y separar las palabras de una oración.
const MONO = { id: 'mono', title: 'Monosílaba (1 sílaba)', colour: '#f7c96f' };
const POLI = { id: 'poli', title: 'Polisílaba (2 o más)', colour: '#8ec5f2' };

const syllables = (word, count) => ({ story: `¿Cuántas sílabas tiene «${word}»?`, prompt: '? sílabas', answer: count });

const silabas = {
  slug: 'silabas',
  title: 'Letras, sílabas, palabras y oraciones',
  heading: 'La lista de la compra',
  type: 'numbers',
  write: true,
  instructions: 'Di cada palabra en voz alta dando una palmada en cada sílaba: li - mo - nes. ¡Cada golpe de voz es una sílaba!',
  questions: [
    syllables('limones', 3), syllables('queso', 2), syllables('calabacín', 4), syllables('atún', 2),
    syllables('garbanzos', 3), syllables('lentejas', 3), syllables('pan', 1),
  ],
  more: [
    {
      title: 'Monosílabas y polisílabas',
      type: 'colour',
      instructions: 'Las palabras con una sílaba son monosílabas: pan, sol. Las que tienen dos o más son polisílabas: hada, arbustos.',
      crayons: [MONO, POLI],
      words: [
        { id: 'luna', word: 'luna', crayon: 'poli' },
        { id: 'sal', word: 'sal', crayon: 'mono' },
        { id: 'jardines', word: 'jardines', crayon: 'poli' },
        { id: 'pez', word: 'pez', crayon: 'mono' },
        { id: 'flor', word: 'flor', crayon: 'mono' },
        { id: 'semaforo', word: 'semáforo', crayon: 'poli' },
        { id: 'mar', word: 'Mar', crayon: 'mono' },
        { id: 'gato', word: 'gato', crayon: 'poli' },
        { id: 'tren', word: 'tren', crayon: 'mono' },
      ],
    },
    {
      title: 'Palabras, sílabas y letras',
      type: 'numbers',
      write: true,
      instructions: 'Cuenta con mucha atención. Pulsa ✓ después de cada número.',
      questions: [
        { story: 'Braviana es un hada.', prompt: '? palabras y ? sílabas', answer: [4, 7] },
        { story: 'La varita está en el cajón secreto.', prompt: '? palabras y ? sílabas', answer: [7, 13] },
        { story: '¿Cuántas letras tiene «hada»?', prompt: '? letras', answer: 4 },
        { story: '¿Cuántas letras tiene «varita»?', prompt: '? letras', answer: 6 },
      ],
    },
    {
      title: 'Separa las palabras',
      type: 'build',
      instructions: 'Los alumnos de Monteoscuro han juntado las palabras. Sepáralas tocándolas en orden.',
      puzzles: [
        { prompt: 'hugotieneunlibrodecuentos', answer: ['Hugo', 'tiene', 'un', 'libro', 'de', 'cuentos.'] },
        { prompt: 'hoyhacesolyelcieloestáazul', answer: ['Hoy', 'hace', 'sol', 'y', 'el', 'cielo', 'está', 'azul.'] },
        { prompt: 'losniñoscorrenporelparque', answer: ['Los', 'niños', 'corren', 'por', 'el', 'parque.'] },
      ],
    },
  ],
};

export default silabas;
