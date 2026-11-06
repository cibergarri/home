// Lengua, tema 7: el cómic (AVNI, de Vicent Caut y Romain Pujol). Viñetas, bocadillos y sonidos.
const comic = {
  slug: 'comic',
  title: 'El cómic',
  heading: 'Leo un cómic',
  type: 'quiz',
  instructions: 'Lee el cómic de AVNI en tu libro. Después, contesta.',
  questions: [
    { prompt: 'AVNI ve un espacio publicitario sobre galletas. ¿Qué palabra significa lo mismo?', choices: ['anuncio', 'desayuno', 'programa'], answer: 'anuncio' },
    { prompt: 'Cuando AVNI dice «¡Sería una tontería no aprovecharlo!», ¿qué cree su padre que va a hacer?', choices: ['Dejar la televisión y salir fuera', 'Quedarse en casa todo el día', 'Hablar sobre el tiempo'], answer: 'Dejar la televisión y salir fuera' },
    { prompt: '¿Cuántas viñetas tiene el cómic que has leído?', choices: ['Dos', 'Cuatro', 'Seis'], answer: 'Cuatro' },
  ],
  more: [
    {
      title: 'Las partes del cómic',
      type: 'match',
      instructions: 'Toca cada parte del cómic y después lo que es.',
      columns: ['Parte', 'Qué es'],
      pairs: [
        { id: 'vineta', en: 'Viñeta', es: 'cada recuadro del cómic' },
        { id: 'bocadillo', en: 'Bocadillo', es: 'donde va lo que dicen los personajes' },
        { id: 'onomatopeya', en: 'Palabras como ¡pum! o ¡ring!', es: 'los sonidos y ruidos' },
        { id: 'notas', en: 'Notas musicales ♪ ♫', es: 'el sonido de la música' },
      ],
    },
    {
      title: '¿Qué sonido es?',
      type: 'match',
      instructions: 'En los cómics, los ruidos se escriben con palabras. Une cada sonido con lo que lo hace.',
      columns: ['Sonido', 'Lo hace'],
      pairs: [
        { id: 'guau', en: '¡Guau, guau!', es: 'un perro' },
        { id: 'ring', en: '¡Riiing!', es: 'un timbre' },
        { id: 'toc', en: '¡Toc, toc!', es: 'alguien que llama a la puerta' },
        { id: 'achis', en: '¡Achís!', es: 'un estornudo' },
        { id: 'zzz', en: 'Zzz…', es: 'alguien que duerme' },
      ],
    },
  ],
};

export default comic;
