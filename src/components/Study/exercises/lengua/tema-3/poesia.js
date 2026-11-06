// Lengua, tema 3: la poesía. «Simbad», de Beatriz Giménez de Ory (versos y estrofas), y
// «Paisajes», de Gloria Fuertes, para recitar con pausas y gestos.
const SI = { id: 'si', title: 'Lo vende Simbad', colour: '#f7c96f' };
const NO = { id: 'no', title: 'No está en el poema', colour: '#d9d4c7' };

const poesia = {
  slug: 'poesia',
  title: 'La poesía',
  heading: 'Simbad',
  type: 'quiz',
  instructions: 'Lee en tu libro el poema «Simbad». Después, contesta.',
  questions: [
    { prompt: '¿Quién habla en el poema?', choices: ['Simbad, un comerciante y marinero', 'Teo, un alumno de Arabela', 'Un pirata malo'], answer: 'Simbad, un comerciante y marinero' },
    { prompt: '¿Por qué Simbad es un comerciante?', choices: ['Porque compra y vende artículos', 'Porque sabe navegar'], answer: 'Porque compra y vende artículos' },
    { prompt: '¿De dónde vienen los poemas del libro de Simbad?', choices: ['De sus mil viajes por el mundo', 'De su colegio', 'De la biblioteca'], answer: 'De sus mil viajes por el mundo' },
    { prompt: 'Las líneas de una poesía se llaman…', choices: ['versos', 'estrofas', 'párrafos'], answer: 'versos' },
    { prompt: 'Los versos se agrupan en…', choices: ['estrofas', 'capítulos', 'títulos'], answer: 'estrofas' },
    { prompt: '¿Cuántas estrofas tiene el poema de Simbad?', choices: ['Dos', 'Tres', 'Cinco'], answer: 'Tres' },
    { prompt: '¿Qué palabra rima con «bazar»?', choices: ['pasar', 'tesoro', 'mundo'], answer: 'pasar' },
    { prompt: '¿Qué palabra rima con «delfín»?', choices: ['feliz', 'ola', 'mar'], answer: 'feliz' },
  ],
  more: [
    {
      title: 'El bazar de Simbad',
      type: 'colour',
      instructions: 'Colorea las cosas que vende Simbad en su bazar.',
      crayons: [SI, NO],
      words: [
        { id: 'turquesas', word: 'turquesas', crayon: 'si' },
        { id: 'perlas', word: 'perlas', crayon: 'si' },
        { id: 'varitas', word: 'varitas mágicas', crayon: 'si' },
        { id: 'zapatos', word: 'zapatos', crayon: 'no' },
        { id: 'rubis', word: 'rubís', crayon: 'si' },
        { id: 'pelotas', word: 'pelotas', crayon: 'no' },
        { id: 'pociones', word: 'pociones', crayon: 'si' },
        { id: 'libro', word: 'un libro de poemas', crayon: 'si' },
        { id: 'frutillas', word: 'frutillas', crayon: 'no' },
      ],
    },
    {
      title: 'Palabras del poema',
      type: 'match',
      instructions: 'Toca una palabra del poema y después lo que significa.',
      columns: ['Palabra', 'Significa'],
      pairs: [
        { id: 'bazar', en: 'bazar', es: 'mercado de Oriente' },
        { id: 'turquesas', en: 'turquesas', es: 'piedras preciosas de color azul verdoso' },
        { id: 'rubis', en: 'rubís', es: 'piedras preciosas de color rojizo' },
        { id: 'pociones', en: 'pociones', es: 'bebidas mágicas o medicinales' },
      ],
    },
    {
      title: 'Paisajes',
      type: 'quiz',
      instructions: 'Lee en tu libro el poema «Paisajes», de Gloria Fuertes. Cada estrofa habla de un paisaje.',
      questions: [
        { prompt: 'La estrofa del trigo y el espantapájaros habla…', choices: ['del campo', 'de la playa', 'de la ciudad'], answer: 'del campo' },
        { prompt: 'La estrofa del mar y el barco habla…', choices: ['de la playa', 'del campo', 'de la ciudad'], answer: 'de la playa' },
        { prompt: 'La estrofa de las mil antenas y los mil coches habla…', choices: ['de la ciudad', 'del campo', 'de la playa'], answer: 'de la ciudad' },
        { prompt: '¿Por qué cuesta trabajo respirar en la ciudad?', choices: ['Porque los coches ensucian el aire', 'Porque hay mucho trigo', 'Porque hace frío'], answer: 'Porque los coches ensucian el aire' },
        { prompt: '¿Qué palabra rima con «abajo»?', choices: ['trabajo', 'arriba', 'barco'], answer: 'trabajo' },
        { prompt: 'Al recitar, cuando ves una coma haces…', choices: ['una pausa corta', 'una pausa larga', 'un salto'], answer: 'una pausa corta' },
        { prompt: 'Al recitar, cuando ves un punto haces…', choices: ['una pausa larga', 'una pausa corta', 'un grito'], answer: 'una pausa larga' },
        { prompt: 'En los versos que terminan con «arriba», ¿qué gesto puedes hacer?', choices: ['Señalar hacia el cielo', 'Señalar el suelo', 'Taparte los ojos'], answer: 'Señalar hacia el cielo' },
      ],
    },
  ],
};

export default poesia;
