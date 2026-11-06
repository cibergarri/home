// Lengua, tema 8: las palabras derivadas. Se forman a partir de otra palabra: flauta → flautista,
// reloj → relojería, enfermo → enfermero, tostar → tostadora.
const derivadas = {
  slug: 'derivadas',
  title: 'Las palabras derivadas',
  heading: 'Las tiendas',
  type: 'match',
  instructions: 'Flautista se ha formado a partir de flauta: es una palabra derivada. Toca cada palabra y después la tienda donde se vende.',
  columns: ['Palabra', 'Tienda'],
  pairs: [
    { id: 'reloj', en: 'reloj', es: 'relojería' },
    { id: 'fruta', en: 'fruta', es: 'frutería' },
    { id: 'pan', en: 'pan', es: 'panadería' },
    { id: 'libro', en: 'libro', es: 'librería' },
    { id: 'pescado', en: 'pescado', es: 'pescadería' },
    { id: 'zapato', en: 'zapato', es: 'zapatería' },
  ],
  more: [
    {
      title: 'Las profesiones',
      type: 'letters',
      write: true,
      instructions: 'Usa la máquina de crear palabras: enfermo → enfermero. Escribe las letras que faltan.',
      words: [
        { clue: 'Cuida a los enfermos.', word: 'enfermero', shown: 'enferm___' },
        { clue: 'Trabaja en la cocina.', word: 'cocinero', shown: 'cocin___' },
        { clue: 'Trabaja en la granja.', word: 'granjero', shown: 'granj___' },
        { clue: 'Lleva los mensajes.', word: 'mensajero', shown: 'mensaj___' },
        { clue: 'Conduce un camión.', word: 'camionero', shown: 'camion___' },
        { clue: 'Cuida el jardín.', word: 'jardinero', shown: 'jardin___' },
      ],
    },
    {
      title: 'Objetos terminados en -ero',
      type: 'match',
      instructions: '¡Todos estos objetos son palabras derivadas terminadas en -ero! Une cada palabra con su objeto.',
      columns: ['Palabra', 'Objeto'],
      pairs: [
        { id: 'percha', en: 'percha', es: 'perchero' },
        { id: 'maceta', en: 'maceta', es: 'macetero' },
        { id: 'llave', en: 'llave', es: 'llavero' },
        { id: 'moneda', en: 'moneda', es: 'monedero' },
        { id: 'flor', en: 'flor', es: 'florero' },
        { id: 'maleta', en: 'maleta', es: 'maletero' },
      ],
    },
    {
      title: 'Las máquinas',
      type: 'quiz',
      instructions: 'Muchos objetos de casa son palabras derivadas: grapar → grapadora. ¿De qué palabra viene cada una?',
      questions: [
        { prompt: 'tostadora', choices: ['tostar', 'tos', 'tortilla'], answer: 'tostar' },
        { prompt: 'lavadora', choices: ['lavar', 'lava', 'lápiz'], answer: 'lavar' },
        { prompt: 'batidora', choices: ['batir', 'bata', 'bote'], answer: 'batir' },
        { prompt: 'borrador', choices: ['borrar', 'borde', 'burro'], answer: 'borrar' },
        { prompt: 'congelador', choices: ['congelar', 'conejo', 'gel'], answer: 'congelar' },
        { prompt: 'aspiradora', choices: ['aspirar', 'aspa', 'piragua'], answer: 'aspirar' },
        { prompt: 'despertador', choices: ['despertar', 'desierto', 'perro'], answer: 'despertar' },
        { prompt: 'freidora', choices: ['freír', 'fresa', 'frío'], answer: 'freír' },
      ],
    },
  ],
};

export default derivadas;
