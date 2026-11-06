// Lengua, tema 7: las instrucciones («Hacemos un molinillo de viento») y cómo contar el camino para
// llegar a un lugar, con palabras como primero, luego, gira, cruza, izquierda y derecha.
const SI = { id: 'si', title: 'Lo necesito', colour: '#a6db8a' };
const NO = { id: 'no', title: 'No lo necesito', colour: '#d9d4c7' };

const instrucciones = {
  slug: 'instrucciones',
  title: 'Las instrucciones',
  heading: 'Hacemos un molinillo de viento',
  type: 'build',
  instructions: 'Lee en tu libro cómo se hace un molinillo. Las instrucciones tienen pasos en orden. Ordénalos.',
  puzzles: [
    {
      prompt: '¿Cómo se hace un molinillo?',
      answer: [
        'Primero, dibuja un cuadrado y dos líneas.',
        'Después, corta siguiendo las líneas.',
        'A continuación, dobla cuatro puntas hasta el centro.',
        'Por último, clava las puntas en un palito con una chincheta.',
      ],
    },
    {
      prompt: 'Cuenta cómo llegar a la biblioteca:',
      answer: ['Primero, sal del aula.', 'Luego, gira a la derecha.', 'A continuación, sube la escalera.', 'Por último, cruza la puerta azul.'],
    },
  ],
  more: [
    {
      title: 'Los materiales',
      type: 'colour',
      instructions: '¿Qué materiales necesitas para hacer el molinillo de viento?',
      crayons: [SI, NO],
      words: [
        { id: 'cartulina', word: 'cartulina', crayon: 'si' },
        { id: 'tijeras', word: 'tijeras', crayon: 'si' },
        { id: 'palito', word: 'palito de madera', crayon: 'si' },
        { id: 'chincheta', word: 'chincheta', crayon: 'si' },
        { id: 'lapiz', word: 'lápiz', crayon: 'si' },
        { id: 'harina', word: 'harina', crayon: 'no' },
        { id: 'pintura', word: 'pintura de dedos', crayon: 'no' },
        { id: 'cuchara', word: 'cuchara', crayon: 'no' },
      ],
    },
    {
      title: 'Las instrucciones',
      type: 'quiz',
      instructions: 'Piensa en cómo son las instrucciones.',
      questions: [
        { prompt: '¿Para qué sirven unas instrucciones?', choices: ['Para saber cómo se hace algo', 'Para contar un cuento', 'Para hacer una pregunta'], answer: 'Para saber cómo se hace algo' },
        { prompt: '¿Por qué los pasos llevan números?', choices: ['Para seguirlos en orden', 'Para que sean bonitos', 'Para contar los materiales'], answer: 'Para seguirlos en orden' },
        { prompt: '¿Qué pasaría si faltara un paso?', choices: ['El molinillo no saldría bien', 'Saldría igual', 'Saldrían dos molinillos'], answer: 'El molinillo no saldría bien' },
        { prompt: '¿Qué paso va primero?', choices: ['Dibujar el cuadrado y las líneas', 'Clavar las puntas', 'Doblar las puntas'], answer: 'Dibujar el cuadrado y las líneas' },
        { prompt: '¿Qué paso va justo antes de doblar las puntas?', choices: ['Cortar siguiendo las líneas', 'Clavar las puntas en el palito', 'Dibujar el cuadrado'], answer: 'Cortar siguiendo las líneas' },
      ],
    },
    {
      title: 'Cuento cómo llegar',
      type: 'quiz',
      instructions: 'Para explicar cómo llegar a un lugar usamos palabras como gira, sube, cruza, tuerce, recto, izquierda y derecha. ¡Y los gestos ayudan!',
      questions: [
        { prompt: 'Para decir que no cambie de dirección, digo: sigue…', choices: ['recto', 'a la izquierda', 'arriba'], answer: 'recto' },
        { prompt: 'Para pasar al otro lado de la calle, digo:', choices: ['cruza la calle', 'sube la calle', 'dobla la calle'], answer: 'cruza la calle' },
        { prompt: '¿Qué palabra significa lo mismo que «gira»?', choices: ['tuerce', 'para', 'sube'], answer: 'tuerce' },
        { prompt: '¿Qué palabra usas para el primer paso del camino?', choices: ['Primero', 'Por último', 'Luego'], answer: 'Primero' },
        { prompt: 'Si levanto la mano abierta hacia delante, quiero decir…', choices: ['¡Para!', 'Árbol alto', 'Casa pequeña'], answer: '¡Para!' },
        { prompt: '«¡Sorpresa!» dicho con alegría y «¿Sorpresa?» dicho con duda, ¿significan lo mismo?', choices: ['No, la entonación lo cambia', 'Sí, es igual'], answer: 'No, la entonación lo cambia' },
      ],
    },
  ],
};

export default instrucciones;
