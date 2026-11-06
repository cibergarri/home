// Lengua, tema 9: las palabras compuestas. Dos palabras unidas: cumple + años, saca + puntas.
const compuestas = {
  slug: 'compuestas',
  title: 'Las palabras compuestas',
  heading: 'En la cocina',
  type: 'build',
  instructions: 'Cumpleaños y sacapuntas están formadas por dos palabras unidas: son palabras compuestas. Toca las dos partes en orden.',
  puzzles: [
    { prompt: 'Sirve para dejar secar los platos:', answer: ['escurre', 'platos'], separator: '' },
    { prompt: 'Sirve para abrir las latas:', answer: ['abre', 'latas'], separator: '' },
    { prompt: 'Sirve para cascar las nueces:', answer: ['casca', 'nueces'], separator: '' },
    { prompt: 'Sirve para pasar los purés:', answer: ['pasa', 'purés'], separator: '' },
    { prompt: 'Sirve para sacar punta a los lápices:', answer: ['saca', 'puntas'], separator: '' },
    { prompt: 'El día en que cumples años:', answer: ['cumple', 'años'], separator: '' },
  ],
  more: [
    {
      title: 'guarda- y para-',
      type: 'match',
      instructions: 'Forma palabras compuestas que empiezan por guarda- y para-. Une cada cosa con su nombre.',
      columns: ['Qué es', 'Palabra compuesta'],
      pairs: [
        { id: 'guardacostas', en: 'Vigila las costas.', es: 'guardacostas' },
        { id: 'guardaespaldas', en: 'Protege a una persona importante.', es: 'guardaespaldas' },
        { id: 'guardabosques', en: 'Cuida el bosque.', es: 'guardabosques' },
        { id: 'parabrisas', en: 'El cristal de delante del coche.', es: 'parabrisas' },
        { id: 'paracaidas', en: 'Sirve para saltar de un avión.', es: 'paracaídas' },
        { id: 'parachoques', en: 'Protege el coche de los golpes.', es: 'parachoques' },
      ],
    },
    {
      title: '¿Es compuesta?',
      type: 'colour',
      instructions: 'Colorea las palabras compuestas y las que no lo son.',
      crayons: [
        { id: 'si', title: 'Compuesta', colour: '#a6db8a' },
        { id: 'no', title: 'No es compuesta', colour: '#d9d4c7' },
      ],
      words: [
        { id: 'cuentacuentos', word: 'cuentacuentos', crayon: 'si' },
        { id: 'trabalenguas', word: 'trabalenguas', crayon: 'si' },
        { id: 'rompecabezas', word: 'rompecabezas', crayon: 'si' },
        { id: 'girasol', word: 'girasol', crayon: 'si' },
        { id: 'hierbabuena', word: 'hierbabuena', crayon: 'si' },
        { id: 'quitanieves', word: 'quitanieves', crayon: 'si' },
        { id: 'cortacesped', word: 'cortacésped', crayon: 'si' },
        { id: 'hechizo', word: 'hechizo', crayon: 'no' },
        { id: 'pelicula', word: 'película', crayon: 'no' },
        { id: 'concurso', word: 'concurso', crayon: 'no' },
      ],
    },
    {
      title: '¡Tacha el intruso!',
      type: 'quiz',
      instructions: 'Piensa bien: ¿qué palabra NO es compuesta?',
      questions: [
        { prompt: '¿Cuál NO es compuesta?', choices: ['hechizo', 'Monteoscuro', 'cerdivolador', 'guardalotodo'], answer: 'hechizo' },
        { prompt: 'Una máquina que quita la nieve es un…', choices: ['quitanieves', 'cortacésped', 'sacapuntas'], answer: 'quitanieves' },
        { prompt: 'Una máquina que corta el césped es un…', choices: ['cortacésped', 'quitanieves', 'abrelatas'], answer: 'cortacésped' },
        { prompt: 'Monteoscuro está formada por…', choices: ['monte + oscuro', 'mon + teos + curo', 'montaña + oscura'], answer: 'monte + oscuro' },
      ],
    },
  ],
};

export default compuestas;
