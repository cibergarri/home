// Lengua, tema 6: el resumen. Hacer un resumen es escribir lo más importante de un texto, párrafo a
// párrafo («El tiempo y los animales»).
const resumen = {
  slug: 'resumen',
  title: 'El resumen',
  heading: 'El tiempo y los animales',
  type: 'quiz',
  instructions: 'Lee con atención el texto de tu libro. Hacer un resumen es escribir lo más importante de un texto.',
  questions: [
    { prompt: '¿Qué es hacer un resumen?', choices: ['Escribir lo más importante de un texto', 'Copiar todo el texto', 'Hacer un dibujo'], answer: 'Escribir lo más importante de un texto' },
    { prompt: '¿Cuántos párrafos tiene el texto?', choices: ['Dos', 'Tres', 'Cinco'], answer: 'Tres' },
    { prompt: 'Cada párrafo empieza…', choices: ['en una línea distinta', 'con un dibujo', 'con una pregunta'], answer: 'en una línea distinta' },
    { prompt: 'Hibernar es…', choices: ['entrar en un sueño profundo hasta que hace más calor', 'irse a otro lugar', 'comer mucho'], answer: 'entrar en un sueño profundo hasta que hace más calor' },
    { prompt: 'Migrar es…', choices: ['irse a otro lugar con mejores condiciones', 'dormir todo el invierno', 'cambiar de color'], answer: 'irse a otro lugar con mejores condiciones' },
    { prompt: 'Cuando se acerca la lluvia, las vacas…', choices: ['se agrupan y se tumban', 'corren mucho', 'se suben a los árboles'], answer: 'se agrupan y se tumban' },
    { prompt: '¿Por qué lo hacen?', choices: ['Juntas mantienen el calor y el pasto de debajo sigue seco', 'Porque tienen sueño', 'Para jugar'], answer: 'Juntas mantienen el calor y el pasto de debajo sigue seco' },
    { prompt: 'El pasto es…', choices: ['hierba', 'barro', 'agua'], answer: 'hierba' },
    { prompt: 'Las estaciones son…', choices: ['primavera, verano, otoño e invierno', 'enero, febrero y marzo', 'sol, lluvia y nieve'], answer: 'primavera, verano, otoño e invierno' },
  ],
  more: [
    {
      title: '¿Hibernan o migran?',
      type: 'sort',
      instructions: 'Lleva cada animal del texto a su columna.',
      columns: [
        { id: 'hibernan', title: 'Hibernan' },
        { id: 'migran', title: 'Migran' },
      ],
      cards: [
        { id: 'oso', text: 'el oso', columns: ['hibernan'] },
        { id: 'tortuga', text: 'la tortuga', columns: ['hibernan'] },
        { id: 'caracol', text: 'el caracol', columns: ['hibernan'] },
        { id: 'patos', text: 'los patos', columns: ['migran'] },
        { id: 'garzas', text: 'las garzas', columns: ['migran'] },
        { id: 'golondrinas', text: 'las golondrinas', columns: ['migran'] },
      ],
    },
    {
      title: 'Lo más importante de cada párrafo',
      type: 'match',
      instructions: 'Toca un párrafo y después su idea más importante.',
      columns: ['Párrafo', 'Idea más importante'],
      pairs: [
        { id: 'p1', en: 'Párrafo 1', es: 'Hay animales que cambian su conducta cuando cambia la estación. Algunos hibernan en invierno.' },
        { id: 'p2', en: 'Párrafo 2', es: 'Algunos animales migran cuando cambian las condiciones ambientales.' },
        { id: 'p3', en: 'Párrafo 3', es: 'Podemos saber qué tiempo hace observando cómo se comportan algunos animales.' },
      ],
    },
    {
      title: 'Mi resumen',
      type: 'build',
      instructions: 'Ordena las ideas según el orden de los párrafos. ¡Ya tienes tu resumen!',
      puzzles: [
        {
          prompt: 'El tiempo y los animales',
          answer: [
            'Algunos animales hibernan en invierno.',
            'Otros migran cuando cambian las condiciones.',
            'Los animales nos ayudan a saber qué tiempo hará.',
          ],
        },
      ],
    },
  ],
};

export default resumen;
