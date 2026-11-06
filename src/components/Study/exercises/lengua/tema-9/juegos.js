// Lengua, tema 9: ¡diviértete con Topi! Letras desordenadas en los carteles de las tiendas,
// adivinar quién es quién con pistas, y el animal de Monteoscuro que cuenta su historia.
const juegos = {
  slug: 'juegos',
  title: '¡Diviértete con Topi!',
  heading: '¡Vaya desorden!',
  type: 'build',
  instructions: 'Las letras de los carteles se han movido. Ordénalas y descubre qué tienda es cada una.',
  puzzles: [
    { prompt: 'FRETARÍU (aquí compras manzanas y peras)', answer: ['F', 'R', 'U', 'T', 'E', 'R', 'Í', 'A'], separator: '' },
    { prompt: 'PENARADÍA (aquí compras el pan)', answer: ['P', 'A', 'N', 'A', 'D', 'E', 'R', 'Í', 'A'], separator: '' },
    { prompt: 'TELLAR (aquí arreglan los coches)', answer: ['T', 'A', 'L', 'L', 'E', 'R'], separator: '' },
    { prompt: 'FRAMIACA (aquí compras medicinas)', answer: ['F', 'A', 'R', 'M', 'A', 'C', 'I', 'A'], separator: '' },
  ],
  more: [
    {
      title: '¿Cómo se llaman?',
      type: 'quiz',
      instructions: 'Lee las pistas: Diego es hermano de Julia. Luis es primo de Diego. Eva es hermana de Luis.',
      questions: [
        { prompt: 'Soy hermano de Eva. ¿Cómo me llamo?', choices: ['Luis', 'Diego', 'Julia', 'Eva'], answer: 'Luis' },
        { prompt: 'Soy hermana de Diego. ¿Cómo me llamo?', choices: ['Julia', 'Eva', 'Luis', 'Diego'], answer: 'Julia' },
        { prompt: 'Soy primo de Luis. ¿Cómo me llamo?', choices: ['Diego', 'Luis', 'Eva', 'Julia'], answer: 'Diego' },
        { prompt: 'Soy prima de Diego. ¿Cómo me llamo?', choices: ['Eva', 'Julia', 'Luis', 'Diego'], answer: 'Eva' },
      ],
    },
    {
      title: '¿Qué animal es?',
      type: 'build',
      instructions: 'Un animal de Monteoscuro come nueces en lo alto de un árbol, con la cola enredada en una rama. De repente oye un rugido y nota calor de fuego… Ordena las letras.',
      puzzles: [
        { prompt: 'El animal que cuenta la historia:', answer: ['a', 'r', 'd', 'i', 'l', 'l', 'a'], separator: '' },
        { prompt: 'El personaje que llega después:', answer: ['d', 'r', 'a', 'g', 'ó', 'n'], separator: '' },
      ],
    },
    {
      title: '¿Quién escribió la carta?',
      type: 'quiz',
      instructions: 'Lee en tu libro la carta de despedida que alguien ha escrito al terminar el curso.',
      questions: [
        { prompt: '¿Cuándo se escribe la carta?', choices: ['Al terminar el curso', 'El primer día de clase', 'En Navidad'], answer: 'Al terminar el curso' },
        { prompt: '¿A quién da las gracias por enseñar con tanto cariño?', choices: ['A Arabela', 'A Malún', 'A Tok'], answer: 'A Arabela' },
        { prompt: '¿Cuándo espera volver a ver a sus compañeros?', choices: ['En septiembre', 'En agosto', 'Nunca'], answer: 'En septiembre' },
        { prompt: 'Un curso inolvidable es un curso…', choices: ['que no se olvida nunca', 'muy aburrido', 'muy corto'], answer: 'que no se olvida nunca' },
      ],
    },
  ],
};

export default juegos;
