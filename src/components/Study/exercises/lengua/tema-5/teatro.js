// Lengua, tema 5: el teatro. «¿Tres cerditos o siete enanitos?» (José María Plaza) y «El dragón
// Botijo» (José González Torices). Los personajes hablan, y entre paréntesis se dice lo que hacen.
const teatro = {
  slug: 'teatro',
  title: 'El teatro',
  heading: '¿Tres cerditos o siete enanitos?',
  type: 'quiz',
  instructions: 'Lee la obra de teatro en tu libro. Después, contesta.',
  questions: [
    { prompt: '¿Con quién habla el lobo?', choices: ['Con tres cerditos', 'Con siete enanitos', 'Con Caperucita'], answer: 'Con tres cerditos' },
    { prompt: '¿Qué dicen los cerditos que son?', choices: ['Los siete enanitos', 'Tres lobos', 'Unos brujos'], answer: 'Los siete enanitos' },
    { prompt: '¿Cuántos personajes hablan con el lobo?', choices: ['Tres', 'Siete', 'Uno'], answer: 'Tres' },
    { prompt: '¿Quién tiene razón?', choices: ['El lobo', 'Los cerditos'], answer: 'El lobo' },
    { prompt: '¿Hasta cuánto dice el lobo que sabe contar?', choices: ['Hasta 22 y medio', 'Hasta 100', 'Hasta 3'], answer: 'Hasta 22 y medio' },
    { prompt: '¿Cómo cuenta el cerdito para que le salgan siete?', choices: ['Cuenta a los mismos cerditos más de una vez', 'Cuenta también al lobo', 'Se salta números'], answer: 'Cuenta a los mismos cerditos más de una vez' },
    { prompt: 'Las partes que dicen lo que hacen los personajes, como mirar u oler, van…', choices: ['entre paréntesis y de otro color', 'en mayúsculas', 'al final del libro'], answer: 'entre paréntesis y de otro color' },
  ],
  more: [
    {
      title: 'Cada personaje en su cuento',
      type: 'match',
      instructions: '¿Conoces estos cuentos? Toca un personaje y después su cuento.',
      columns: ['Personajes', 'Cuento'],
      pairs: [
        { id: 'cerditos', en: 'El lobo y tres cerditos', es: 'Los tres cerditos' },
        { id: 'enanitos', en: 'Siete enanitos', es: 'Blancanieves y los siete enanitos' },
        { id: 'caperucita', en: 'Una niña con capa roja y un lobo', es: 'Caperucita Roja' },
      ],
    },
    {
      title: 'El dragón Botijo',
      type: 'quiz',
      instructions: 'Lee la obra «El dragón Botijo» en tu libro.',
      questions: [
        { prompt: '¿Qué arroja Botijo por la boca?', choices: ['Fuego', 'Agua', 'Humo'], answer: 'Fuego' },
        { prompt: '¿Y por la nariz?', choices: ['Humo', 'Fuego', 'Flores'], answer: 'Humo' },
        { prompt: '¿Para qué usan el fuego los vecinos?', choices: ['Para calentarse las manos y los pies', 'Para cocinar', 'Para nada'], answer: 'Para calentarse las manos y los pies' },
        { prompt: '¿Por qué tosen los vecinos?', choices: ['Por el humo del dragón', 'Porque están resfriados', 'Porque se ríen'], answer: 'Por el humo del dragón' },
        { prompt: '¿Por qué no duermen por las noches?', choices: ['Porque Botijo ronca', 'Porque hay tormenta', 'Porque tienen hambre'], answer: 'Porque Botijo ronca' },
        { prompt: '¿Qué hace Botijo en los huertos?', choices: ['Se zampa los tomates y las lechugas', 'Riega las plantas', 'Planta árboles'], answer: 'Se zampa los tomates y las lechugas' },
        { prompt: '¿Cómo es Botijo?', choices: ['Un comilón', 'Muy tímido', 'Muy pequeño'], answer: 'Un comilón' },
        { prompt: '¿Qué llevan los vecinos para protegerse la boca?', choices: ['Pañuelos de colores', 'Cascos', 'Gafas'], answer: 'Pañuelos de colores' },
        { prompt: '¿Qué personaje solo hace sonidos?', choices: ['Botijo', 'El narrador', 'Los vecinos'], answer: 'Botijo' },
      ],
    },
    {
      title: '¿Quién habla ahora?',
      type: 'build',
      instructions: 'Para ensayar la obra, ordenad cuándo participa cada personaje.',
      puzzles: [
        {
          prompt: '¿En qué orden participan?',
          hint: 'Empieza el narrador y termina Botijo cantando.',
          answer: ['Narrador', 'Vecinos', 'Narrador', 'Vecinos', 'Botijo', 'Narrador', 'Botijo'],
          separator: ', ',
        },
      ],
    },
  ],
};

export default teatro;
