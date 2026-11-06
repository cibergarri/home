// Mates, tema 5: medir la masa con el kilo (kg), el medio kilo y el cuarto de kilo: la mantequilla
// de las recetas, las pesas y los trozos de bizcocho de Lena y Mica.
const kilos = {
  slug: 'kilos',
  title: 'El kilo, el medio y el cuarto',
  heading: 'Las pesas',
  type: 'numbers',
  write: true,
  instructions: 'La masa se mide en kilos (kg). 1 kilo son 2 medios kilos. 1 kilo son 4 cuartos de kilo.',
  questions: [
    { prompt: '1 kilo = ? medios kilos', answer: 2 },
    { prompt: '1 kilo = ? cuartos de kilo', answer: 4 },
    { prompt: '1 medio kilo = ? cuartos de kilo', answer: 2 },
    { prompt: '2 medios kilos = ? kilo', answer: 1 },
    { prompt: '2 kilos = ? medios kilos', answer: 4 },
    { prompt: '2 kilos = ? cuartos de kilo', answer: 8 },
  ],
  more: [
    {
      title: '¿Pesa más o menos de 1 kilo?',
      type: 'sort',
      instructions: 'Piensa si cada cosa pesa más o menos que 1 kilo de mantequilla y arrástrala a su columna. ⚖️',
      columns: [{ id: 'mas', title: 'Más de 1 kg' }, { id: 'menos', title: 'Menos de 1 kg' }],
      cards: [
        { id: 'sandia', text: '🍉 Una sandía', columns: ['mas'] },
        { id: 'bici', text: '🚲 Una bicicleta', columns: ['mas'] },
        { id: 'silla', text: '🪑 Una silla', columns: ['mas'] },
        { id: 'perro', text: '🐕 Un perro', columns: ['mas'] },
        { id: 'lapiz', text: '✏️ Un lápiz', columns: ['menos'] },
        { id: 'fresa', text: '🍓 Una fresa', columns: ['menos'] },
        { id: 'calcetin', text: '🧦 Un calcetín', columns: ['menos'] },
        { id: 'galleta', text: '🍪 Una galleta', columns: ['menos'] },
      ],
    },
    {
      title: 'Los trozos de bizcocho',
      type: 'quiz',
      instructions: 'Agrupa los trozos para formar kilos. 🍰',
      questions: [
        { prompt: 'Lena tiene 2 trozos de medio kilo. ¿Cuánto tiene?', choices: ['2 kilos', 'Medio kilo', '1 kilo'], answer: '1 kilo' },
        { prompt: 'Mica tiene 4 trozos de un cuarto de kilo. ¿Cuánto tiene?', choices: ['Medio kilo', '1 kilo', '4 kilos'], answer: '1 kilo' },
        { prompt: 'Entonces, ¿quién tiene más bizcocho, Lena o Mica?', choices: ['Las dos tienen lo mismo', 'Lena', 'Mica'], answer: 'Las dos tienen lo mismo' },
        { prompt: '¿Por qué Mica tiene más trozos pero el mismo bizcocho?', choices: ['Porque sus trozos son más pequeños', 'Porque sus trozos son más grandes'], answer: 'Porque sus trozos son más pequeños' },
        { prompt: 'Teo necesita un kilo de mantequilla, Lena medio kilo y Mica un cuarto de kilo. ¿Quién necesita más?', choices: ['Mica', 'Teo', 'Lena'], answer: 'Teo' },
        { prompt: '¿Cómo se escribe kilo de forma corta?', choices: ['kg', 'L', 'km'], answer: 'kg' },
      ],
    },
    {
      title: 'Forma 2 kilos',
      type: 'numbers',
      write: true,
      instructions: 'Usa pesas de medio kilo y de cuarto de kilo. ¿Cuántas necesitas para tener 2 kilos?',
      questions: [
        { story: 'Solo con pesas de medio kilo.', prompt: '? pesas de medio kilo', answer: 4 },
        { story: 'Solo con pesas de un cuarto de kilo.', prompt: '? pesas de cuarto de kilo', answer: 8 },
        { story: 'Con una pesa de 1 kilo y pesas de medio kilo.', prompt: '1 kilo y ? pesas de medio kilo', answer: 2 },
        { story: 'Con una pesa de 1 kilo, una de medio kilo y pesas de cuarto de kilo.', prompt: '1 kilo, medio kilo y ? cuartos de kilo', answer: 2 },
      ],
    },
  ],
};

export default kilos;
