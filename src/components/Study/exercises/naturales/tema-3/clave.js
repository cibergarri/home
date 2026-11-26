import AnimalKey from '../../../drawings/AnimalKey';

// Naturales, tema 3: el taller científico, clasificar animales con una clave: unas preguntas que,
// una tras otra, dicen a qué grupo pertenece un animal.
const clave = {
  slug: 'clave',
  title: 'Clasificar animales: la clave',
  heading: 'La clave',
  type: 'diagram',
  instructions: 'Como en la página 52: empieza por la pregunta 1 y sigue las flechas hasta saber a qué grupo pertenece el animal.',
  width: 1200,
  height: 940,
  Drawing: AnimalKey,
  description: 'Una clave para clasificar animales. 1: ¿Tiene huesos en su interior? Si no, es un invertebrado. '
    + 'Si sí, es un vertebrado. 2: ¿Tiene pelo? Si sí, es un mamífero. 3: ¿Tiene plumas? Si sí, es un ave. '
    + '4: ¿Tiene escamas? Si no, es un anfibio. 5: ¿Tiene patas? Si sí, es un reptil. 6: ¿Tiene aletas? Si sí, es un pez.',
  note: 'Sí, sigue la flecha verde; no, sigue la roja.',
  more: [
    {
      title: 'Completa la clave',
      type: 'gaps',
      instructions: 'Como en la página 52: lleva cada palabra a su hueco para completar la clave.',
      sentences: [
        '1. ¿Tiene [huesos] en su interior? Sí: es un vertebrado.',
        '2. ¿Tiene [pelo]? Sí: es un mamífero.',
        '3. ¿Tiene [plumas]? Sí: es un ave.',
        '4. ¿Tiene [escamas]? No: es un anfibio.',
        '5. ¿Tiene [patas]? Sí: es un reptil.',
        '6. ¿Tiene [aletas]? Sí: es un pez.',
      ],
    },
    {
      title: 'Usa la clave',
      type: 'quiz',
      instructions: 'Utiliza la clave: ¿en qué grupo clasificas cada animal?',
      questions: [
        { prompt: '🐅 El tigre tiene huesos y pelo. Es…', choices: ['un mamífero', 'un ave', 'un reptil'], answer: 'un mamífero' },
        { prompt: '🐞 La mariquita no tiene huesos. Es…', choices: ['un invertebrado', 'un vertebrado'], answer: 'un invertebrado' },
        { prompt: '🐍 La serpiente tiene huesos y escamas, pero no tiene patas ni aletas. Es…', choices: ['un reptil', 'un pez', 'un anfibio'], answer: 'un reptil' },
        { prompt: '🦉 El búho tiene huesos y plumas. Es…', choices: ['un ave', 'un mamífero'], answer: 'un ave' },
        { prompt: '🐸 La rana tiene huesos, pero no tiene pelo, ni plumas, ni escamas. Es…', choices: ['un anfibio', 'un reptil', 'un pez'], answer: 'un anfibio' },
        { prompt: '🐟 La trucha tiene huesos, escamas y aletas, y no tiene patas. Es…', choices: ['un pez', 'un reptil'], answer: 'un pez' },
        { prompt: '🦎 El lagarto tiene huesos, escamas y patas. Es…', choices: ['un reptil', 'un anfibio'], answer: 'un reptil' },
      ],
    },
  ],
};

export default clave;
