// Lengua, tema 2: la canción («Canción para vestirse», de María Elena Walsh): los animales, sus
// prendas y las palabras que riman.
const cancion = {
  slug: 'cancion',
  title: 'La canción',
  heading: 'Cada animal con lo suyo',
  type: 'match',
  instructions: 'Lee la canción en tu libro. Toca un animal y después lo que busca o se pone.',
  columns: ['Animal', 'Prenda'],
  pairs: [
    { id: 'pajarito', en: 'El pajarito', es: 'el zapato' },
    { id: 'ratones', en: 'Los ratones', es: 'los camisones' },
    { id: 'grillo', en: 'El grillo', es: 'la flauta (en el bolsillo)' },
    { id: 'gallina', en: 'La gallina', es: 'el gorro y la camisa' },
  ],
  more: [
    {
      title: 'Palabras que riman',
      type: 'match',
      instructions: 'Busca en la canción el animal que rima con cada palabra.',
      columns: ['Palabra', 'Animal'],
      pairs: [
        { id: 'ventana', en: 'ventana', es: 'rana' },
        { id: 'camisones', en: 'camisones', es: 'ratones' },
        { id: 'bolsillo', en: 'bolsillo', es: 'grillo' },
        { id: 'cama', en: 'cama', es: 'rama' },
      ],
    },
    {
      title: 'El estribillo',
      type: 'build',
      instructions: 'Hay unos versos que se repiten varias veces en la canción. Ordénalos.',
      puzzles: [{ prompt: '¿Qué versos se repiten?', answer: ['Tira', 'con', 'tirita', 'y', 'ojal', 'con', 'botón.'] }],
    },
    {
      title: '¿Qué significa?',
      type: 'quiz',
      instructions: 'Palabras de la canción.',
      questions: [
        { prompt: 'Una tira es…', choices: ['el cordón de la zapatilla', 'un trozo de pan'], answer: 'el cordón de la zapatilla' },
        { prompt: 'Un ojal es…', choices: ['el agujero en el que entra el botón', 'un ojo pequeño'], answer: 'el agujero en el que entra el botón' },
        { prompt: '«No hallo mi flauta» quiere decir…', choices: ['no encuentro mi flauta', 'no toco mi flauta'], answer: 'no encuentro mi flauta' },
      ],
    },
  ],
};

export default cancion;
