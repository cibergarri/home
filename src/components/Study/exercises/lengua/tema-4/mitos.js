// Lengua, tema 4: los mitos y las leyendas («Los tres regalos», de Los 100 mitos griegos): Zeus,
// Poseidón y Hades se reparten el universo.
const mitos = {
  slug: 'mitos',
  title: 'Los mitos y las leyendas',
  heading: 'Los tres regalos',
  type: 'quiz',
  instructions: 'Lee en tu libro el mito griego «Los tres regalos». Un mito es una historia muy antigua de dioses y héroes.',
  questions: [
    { prompt: '¿Quién es el padre de Zeus?', choices: ['Cronos', 'Poseidón', 'Hades'], answer: 'Cronos' },
    { prompt: '¿Quiénes son los hermanos de Zeus?', choices: ['Hades y Poseidón', 'Teo y Topi', 'Cronos y Hades'], answer: 'Hades y Poseidón' },
    { prompt: '¿Por qué reúne Zeus a sus hermanos?', choices: ['Porque no puede gobernar él solo todo el universo', 'Para hacer una fiesta', 'Para pelear con ellos'], answer: 'Porque no puede gobernar él solo todo el universo' },
    { prompt: '¿Dónde mete Zeus las piedras preciosas?', choices: ['En su casco', 'En una cesta', 'En el mar'], answer: 'En su casco' },
    { prompt: '¿Por qué elige Zeus primero?', choices: ['Porque es el más poderoso', 'Porque es el más pequeño', 'Porque llega tarde'], answer: 'Porque es el más poderoso' },
    { prompt: '¿Esta historia es real o es un mito?', choices: ['Es un mito', 'Pasó de verdad'], answer: 'Es un mito' },
  ],
  more: [
    {
      title: 'El reparto del universo',
      type: 'match',
      instructions: '¿A quién le toca cada parte del universo?',
      columns: ['Dios', 'Parte del universo'],
      pairs: [
        { id: 'zeus', en: 'Zeus', es: 'el cielo y la Tierra' },
        { id: 'poseidon', en: 'Poseidón', es: 'el mar' },
        { id: 'hades', en: 'Hades', es: 'el inframundo' },
      ],
    },
    {
      title: 'Cada piedra con su color',
      type: 'match',
      instructions: 'Toca cada piedra preciosa y después su color.',
      columns: ['Piedra', 'Color'],
      pairs: [
        { id: 'zafiro', en: 'zafiro', es: 'azul' },
        { id: 'turquesa', en: 'turquesa', es: 'verdoso' },
        { id: 'rubi', en: 'rubí', es: 'rojo' },
      ],
    },
    {
      title: 'Los objetos mágicos',
      type: 'match',
      instructions: '¿Qué objeto de la historia tiene cada poder?',
      columns: ['Objeto', 'Poder'],
      pairs: [
        { id: 'tridente', en: 'El tridente de Poseidón', es: 'Crea terremotos y maremotos.' },
        { id: 'casco', en: 'El casco de Hades', es: 'Hace invisible.' },
        { id: 'lanza', en: 'La lanza de Zeus', es: 'Lanza rayos y truenos.' },
      ],
    },
    {
      title: 'Palabras del mito',
      type: 'quiz',
      instructions: '¿Qué significan estas palabras?',
      questions: [
        { prompt: 'El inframundo es…', choices: ['un mundo subterráneo', 'el cielo', 'una isla'], answer: 'un mundo subterráneo' },
        { prompt: 'Un maremoto es…', choices: ['un terremoto dentro del mar', 'un barco grande', 'una ola pequeña'], answer: 'un terremoto dentro del mar' },
        { prompt: 'Un tridente tiene…', choices: ['tres puntas', 'dos ruedas', 'cuatro patas'], answer: 'tres puntas' },
        { prompt: 'Con el casco de invisibilidad, Hades puede…', choices: ['espiar sin ser visto', 'volar', 'respirar bajo el agua'], answer: 'espiar sin ser visto' },
      ],
    },
  ],
};

export default mitos;
