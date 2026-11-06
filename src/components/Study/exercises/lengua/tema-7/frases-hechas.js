// Lengua, tema 7: las frases hechas. Expresiones como «echar una mano» o «estar en las nubes»,
// que no significan lo que dicen sus palabras.
const frasesHechas = {
  slug: 'frases-hechas',
  title: 'Las frases hechas',
  heading: '¿Qué significan?',
  type: 'match',
  instructions: '«Echar una mano» es ayudar, y «estar en las nubes» es estar despistado. Son frases hechas. Toca cada una y después lo que significa.',
  columns: ['Frase hecha', 'Significa'],
  pairs: [
    { id: 'molido', en: 'Teo está molido.', es: 'Teo está agotado.' },
    { id: 'pata', en: 'Teo ha metido la pata.', es: 'Teo se ha equivocado.' },
    { id: 'cable', en: 'Teo echa un cable a Arabela.', es: 'Teo ayuda a Arabela.' },
    { id: 'nubes', en: 'Teo está en las nubes.', es: 'Teo está despistado.' },
    { id: 'codos', en: 'Teo habla por los codos.', es: 'Teo habla mucho.' },
    { id: 'una', en: 'Lena y Mica son uña y carne.', es: 'Lena y Mica están muy unidas.' },
  ],
  more: [
    {
      title: 'Elige la frase hecha',
      type: 'quiz',
      instructions: 'Lee lo que pasa y elige la frase hecha que le va bien.',
      questions: [
        { prompt: 'Los trolls corren muy, muy rápido. Corren…', choices: ['a toda pastilla', 'a paso de tortuga'], answer: 'a toda pastilla' },
        { prompt: 'Topi va muy despacio. Va…', choices: ['a paso de tortuga', 'a toda pastilla'], answer: 'a paso de tortuga' },
        { prompt: 'Mica pide ayuda con los molinillos: «¿Me…»', choices: ['echas una mano?', 'das la mano?'], answer: 'echas una mano?' },
        { prompt: 'Silvia se cayó patinando y se hizo mucho daño. Silvia…', choices: ['vio las estrellas', 'estaba en las nubes'], answer: 'vio las estrellas' },
        { prompt: 'El entrenador estaba harto. Estaba…', choices: ['hasta las narices', 'uña y carne'], answer: 'hasta las narices' },
        { prompt: 'Lena no ha oído nada porque estaba pensando en otra cosa. Estaba…', choices: ['en las nubes', 'molida'], answer: 'en las nubes' },
      ],
    },
    {
      title: 'Frases hechas con animales',
      type: 'quiz',
      instructions: '¡Hay muchas frases hechas con animales! ¿Qué significan?',
      questions: [
        { prompt: 'Topi y Mica llevan la mañana haciendo el ganso: están…', choices: ['haciendo tonterías para reír', 'cuidando gansos', 'durmiendo'], answer: 'haciendo tonterías para reír' },
        { prompt: 'Me aburrí como una ostra: me aburrí…', choices: ['muchísimo', 'un poquito', 'en el mar'], answer: 'muchísimo' },
        { prompt: 'A la excursión fueron cuatro gatos: fueron…', choices: ['muy pocas personas', 'cuatro gatos de verdad', 'muchísimas personas'], answer: 'muy pocas personas' },
        { prompt: '¡Coge el paraguas por si las moscas!: cógelo…', choices: ['por si acaso', 'para espantar moscas', 'porque llueve mucho'], answer: 'por si acaso' },
      ],
    },
  ],
};

export default frasesHechas;
