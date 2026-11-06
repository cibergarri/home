// Lengua, tema 6: el sujeto y el predicado. El sujeto dice quién hace la acción; el predicado, lo
// que hace. El sujeto concuerda con el verbo.
const sujeto = {
  slug: 'sujeto',
  title: 'El sujeto y el predicado',
  heading: 'Une sujeto y predicado',
  type: 'match',
  instructions: 'En «Mica corre por la mañana», Mica es el sujeto (quién) y corre por la mañana es el predicado (qué hace). Une cada sujeto con su predicado.',
  columns: ['Sujeto', 'Predicado'],
  pairs: [
    { id: 'mica', en: 'Mica', es: 'lleva casco.' },
    { id: 'trolls', en: 'Los trolls', es: 'empujan las piedras.' },
    { id: 'nosotros', en: 'Nosotros', es: 'animamos a Mica.' },
    { id: 'yo', en: 'Yo', es: 'miro las nubes.' },
    { id: 'tu', en: 'Tú', es: 'llevas un paraguas.' },
  ],
  more: [
    {
      title: '¿Sujeto o predicado?',
      type: 'sort',
      instructions: 'Lleva cada parte de la oración a su columna.',
      columns: [
        { id: 'sujeto', title: 'Sujeto (quién)' },
        { id: 'predicado', title: 'Predicado (qué hace)' },
      ],
      cards: [
        { id: 'teo', text: 'Teo', columns: ['sujeto'] },
        { id: 'admira', text: 'admira el paisaje', columns: ['predicado'] },
        { id: 'juez', text: 'Un juez', columns: ['sujeto'] },
        { id: 'salida', text: 'da la salida', columns: ['predicado'] },
        { id: 'rocas', text: 'Las rocas', columns: ['sujeto'] },
        { id: 'retumban', text: 'retumban al rodar', columns: ['predicado'] },
        { id: 'lena', text: 'Lena', columns: ['sujeto'] },
        { id: 'grita', text: 'grita el nombre de Mica', columns: ['predicado'] },
      ],
    },
    {
      title: '¿Quién lo hace?',
      type: 'quiz',
      instructions: 'Busca el sujeto: la persona, el animal o la cosa que hace la acción.',
      questions: [
        { prompt: 'Mica corre por la mañana. ¿Cuál es el sujeto?', choices: ['Mica', 'corre', 'por la mañana'], answer: 'Mica' },
        { prompt: 'Los trolls grandes resbalan en el barro. ¿Cuál es el sujeto?', choices: ['en el barro', 'Los trolls grandes', 'resbalan'], answer: 'Los trolls grandes' },
        { prompt: 'La madre de Mica mira las nubes. ¿Cuál es el sujeto?', choices: ['mira las nubes', 'las nubes', 'La madre de Mica'], answer: 'La madre de Mica' },
        { prompt: 'Topi come castañas. ¿Cuál es el predicado?', choices: ['Topi', 'come castañas'], answer: 'come castañas' },
        { prompt: 'Tala y Bolo suben a Mica a hombros. ¿Cuál es el predicado?', choices: ['Tala y Bolo', 'suben a Mica a hombros'], answer: 'suben a Mica a hombros' },
        { prompt: 'La lluvia cae con fuerza. ¿Cuál es el verbo?', choices: ['cae', 'lluvia', 'fuerza'], answer: 'cae' },
      ],
    },
    {
      title: 'El sujeto concuerda con el verbo',
      type: 'quiz',
      instructions: 'Teo mira las nubes. Teo y Topi miran las nubes. Elige el verbo correcto.',
      questions: [
        { prompt: 'Teo y Topi … las nubes.', choices: ['mira', 'miran'], answer: 'miran' },
        { prompt: 'Mica … muy deprisa.', choices: ['corre', 'corren'], answer: 'corre' },
        { prompt: 'Los trolls … en el barro.', choices: ['resbala', 'resbalan'], answer: 'resbalan' },
        { prompt: 'Nosotros … a Mica.', choices: ['animamos', 'anima'], answer: 'animamos' },
        { prompt: 'Lena … su escoba.', choices: ['coge', 'cogen'], answer: 'coge' },
      ],
    },
    {
      title: 'Oraciones cada vez más largas',
      type: 'build',
      instructions: 'Ana pinta. Ana pinta un dibujo. Ana pinta un dibujo en clase. Ordena las palabras.',
      puzzles: [
        { prompt: 'Ana pinta un dibujo.', answer: ['Ana', 'pinta', 'un', 'dibujo.'] },
        { prompt: 'Ana pinta un dibujo en clase.', answer: ['Ana', 'pinta', 'un', 'dibujo', 'en', 'clase.'] },
        { prompt: 'Mica empuja su roca por la ladera.', answer: ['Mica', 'empuja', 'su', 'roca', 'por', 'la', 'ladera.'] },
      ],
    },
  ],
};

export default sujeto;
