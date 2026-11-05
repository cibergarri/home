// Lengua, tema 2: sinónimos (significan lo mismo) y antónimos (significan lo contrario).
const sinonimos = {
  slug: 'sinonimos',
  title: 'Sinónimos y antónimos',
  heading: 'Sinónimos',
  type: 'match',
  instructions: 'Complicada y difícil significan lo mismo: son sinónimos. Toca una palabra y después su sinónimo.',
  columns: ['Palabra', 'Sinónimo'],
  pairs: [
    { id: 'danzar', en: 'danzar', es: 'bailar' },
    { id: 'terminar', en: 'terminar', es: 'acabar' },
    { id: 'brincar', en: 'brincar', es: 'saltar' },
    { id: 'regresar', en: 'regresar', es: 'volver' },
    { id: 'precioso', en: 'precioso', es: 'bonito' },
    { id: 'gigante', en: 'gigante', es: 'enorme' },
  ],
  more: [
    {
      title: 'Antónimos con des- e in-',
      type: 'letters',
      write: true,
      instructions: 'Puedes formar antónimos añadiendo des- o in- delante: orden – desorden, justo – injusto. Escribe las letras que faltan.',
      words: [
        { clue: 'Lo contrario de cómoda.', word: 'incómoda', shown: '__cómoda' },
        { clue: 'Lo contrario de peinado.', word: 'despeinado', shown: '___peinado' },
        { clue: 'Lo contrario de coser.', word: 'descoser', shown: '___coser' },
        { clue: 'Lo contrario de correcto.', word: 'incorrecto', shown: '__correcto' },
        { clue: 'Lo contrario de ordenar.', word: 'desordenar', shown: '___ordenar' },
      ],
    },
    {
      title: 'El crucigrama de antónimos',
      type: 'letters',
      write: true,
      instructions: 'Escribe las letras que faltan para formar el antónimo.',
      words: [
        { clue: 'Lo contrario de limpio.', word: 'sucio', shown: 's_c_o' },
        { clue: 'Lo contrario de cerrar.', word: 'abrir', shown: 'a_r_r' },
        { clue: 'Lo contrario de oscuro.', word: 'claro', shown: 'c_a_o' },
        { clue: 'Lo contrario de subir.', word: 'bajar', shown: 'b_j_r' },
        { clue: 'Lo contrario de débil.', word: 'fuerte', shown: 'f_er_e' },
        { clue: 'Lo contrario de temprano.', word: 'tarde', shown: 't_r_e' },
      ],
    },
    {
      title: '¿Sinónimo o antónimo?',
      type: 'quiz',
      instructions: 'Piensa si las dos palabras significan lo mismo o lo contrario.',
      questions: [
        { prompt: '¿Qué palabra NO es sinónima de las demás?', choices: ['acabar', 'finalizar', 'empezar', 'terminar'], answer: 'empezar' },
        { prompt: 'difícil y fácil son…', choices: ['sinónimos', 'antónimos'], answer: 'antónimos' },
        { prompt: 'complicada y difícil son…', choices: ['sinónimos', 'antónimos'], answer: 'sinónimos' },
        { prompt: 'Rodajas gruesas → rodajas…', choices: ['finas', 'grandes'], answer: 'finas' },
        { prompt: 'Una lata grande → una lata…', choices: ['pequeña', 'enorme'], answer: 'pequeña' },
        { prompt: 'Aceitunas con hueso → aceitunas…', choices: ['sin hueso', 'con más hueso'], answer: 'sin hueso' },
      ],
    },
  ],
};

export default sinonimos;
