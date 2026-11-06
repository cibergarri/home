// Lengua, tema 9: repaso. Lengua oral y escrita, bl y br, y palabras compuestas.
const repaso = {
  slug: 'repaso',
  title: 'Repaso',
  heading: '¿Oral o escrita?',
  type: 'quiz',
  instructions: 'Repasa todo lo que has aprendido en este tema.',
  questions: [
    { prompt: 'Teo cuenta a sus padres sus aventuras.', choices: ['Lengua oral', 'Lengua escrita'], answer: 'Lengua oral' },
    { prompt: 'Mica escribe una carta de despedida.', choices: ['Lengua oral', 'Lengua escrita'], answer: 'Lengua escrita' },
    { prompt: 'Topi lee un libro de la biblioteca.', choices: ['Lengua oral', 'Lengua escrita'], answer: 'Lengua escrita' },
    { prompt: 'Arabela habla con Malún.', choices: ['Lengua oral', 'Lengua escrita'], answer: 'Lengua oral' },
  ],
  more: [
    {
      title: 'bl o br',
      type: 'letters',
      write: true,
      instructions: 'Escribe las letras que faltan: bl o br.',
      words: [
        { clue: 'El color de la nieve.', word: 'blanco', shown: '__anco' },
        { clue: 'Parte del cuerpo entre el hombro y la mano.', word: 'brazo', shown: '__azo' },
        { clue: 'Lo lees en la biblioteca.', word: 'libro', shown: 'li__o' },
        { clue: 'Une la lámpara con el enchufe.', word: 'cable', shown: 'ca__e' },
        { clue: 'Animal que trepa por las montañas.', word: 'cabra', shown: 'ca__a' },
        { clue: 'El cielo con muchas nubes está…', word: 'nublado', shown: 'nu__ado' },
      ],
    },
    {
      title: '¿Es compuesta?',
      type: 'quiz',
      instructions: '¿Está formada por dos palabras unidas?',
      questions: [
        { prompt: 'panadería', choices: ['Compuesta', 'No es compuesta'], answer: 'No es compuesta' },
        { prompt: 'quitamanchas', choices: ['Compuesta', 'No es compuesta'], answer: 'Compuesta' },
        { prompt: 'limpiacristales', choices: ['Compuesta', 'No es compuesta'], answer: 'Compuesta' },
        { prompt: 'abrefácil', choices: ['Compuesta', 'No es compuesta'], answer: 'Compuesta' },
        { prompt: 'salero', choices: ['Compuesta', 'No es compuesta'], answer: 'No es compuesta' },
      ],
    },
    {
      title: '¿Cómo se ha formado?',
      type: 'build',
      instructions: 'Teo dice: «Ayer vimos un espantapájaros en el campo. ¡Había miles de saltamontes!». Forma las palabras compuestas con sus dos partes.',
      puzzles: [
        { prompt: 'Asusta a los pájaros del campo:', answer: ['espanta', 'pájaros'], separator: '' },
        { prompt: 'Un insecto que salta muy alto:', answer: ['salta', 'montes'], separator: '' },
        { prompt: 'Quita las manchas:', answer: ['quita', 'manchas'], separator: '' },
        { prompt: 'Limpia los cristales:', answer: ['limpia', 'cristales'], separator: '' },
      ],
    },
  ],
};

export default repaso;
