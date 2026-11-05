// Lengua, tema 2: el cuento «El ciervo más sabio del bosque».
const ciervo = {
  slug: 'ciervo',
  title: 'El ciervo más sabio del bosque',
  heading: 'Comprendo el cuento',
  type: 'quiz',
  instructions: 'Lee primero el cuento en tu libro. Después, contesta.',
  questions: [
    { prompt: '¿Dónde está escrito el hechizo del hada Braviana?', choices: ['En la entrada de la escuela', 'En el árbol Tukuruku', 'En los pantanos'], answer: 'En la entrada de la escuela' },
    { prompt: '¿Cómo querían Teo y sus amigos acabar con la niebla?', choices: ['Recitando el hechizo con la varita', 'Soplando muy fuerte', 'Hablando con Malún'], answer: 'Recitando el hechizo con la varita' },
    { prompt: '¿Funcionó su plan?', choices: ['Sí', 'No'], answer: 'No' },
    { prompt: '¿Por qué llegan tantos animales a la escuela?', choices: ['Huyen de la niebla de Malún', 'Vienen a una fiesta', 'Buscan a Topi'], answer: 'Huyen de la niebla de Malún' },
    { prompt: '¿Quién es Terom?', choices: ['El ciervo más sabio del bosque', 'El profesor de la escuela', 'Un brujo'], answer: 'El ciervo más sabio del bosque' },
    { prompt: '¿Quién es Pomu?', choices: ['Un anciano que cuida animales', 'Un jabato', 'El hermano de Mica'], answer: 'Un anciano que cuida animales' },
    { prompt: '¿Cuál es la misión del ciervo Terom?', choices: ['Ser el guía de Pomu', 'Proteger la varita', 'Llevar la comida'], answer: 'Ser el guía de Pomu' },
    { prompt: 'Según Terom, ¿qué hay que hacer para que el hechizo funcione?', choices: ['Sentir las palabras en el corazón', 'Gritarlo muy alto', 'Decirlo tres veces'], answer: 'Sentir las palabras en el corazón' },
  ],
  more: [
    {
      title: '¿Podría pasar de verdad?',
      type: 'quiz',
      instructions: 'Piensa si esto podría pasar en la vida real o solo en un cuento.',
      questions: [
        { prompt: 'Unos amigos colocan agua y comida para los animales.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'En la vida real' },
        { prompt: 'Un ciervo sabio te pregunta si conoces las palabras del hechizo.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'Solo en un cuento' },
        { prompt: 'Los animales huyen porque hay un peligro.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'En la vida real' },
        { prompt: 'Un hada protege el bosque con un hechizo.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'Solo en un cuento' },
        { prompt: '¿Qué animal suele hacer de guía de las personas que no ven?', choices: ['El perro', 'El gato', 'El pez'], answer: 'El perro' },
      ],
    },
    {
      title: 'Palabras del cuento',
      type: 'quiz',
      instructions: '¿Qué significan estas palabras?',
      questions: [
        { prompt: 'Al principio del cuento, ¿qué palabra significa lo mismo que hechizo?', choices: ['encantamiento', 'destello', 'torbellino'], answer: 'encantamiento' },
        { prompt: 'Un destello es…', choices: ['un rayo de luz muy fuerte y breve', 'un ruido', 'un animal'], answer: 'un rayo de luz muy fuerte y breve' },
        { prompt: 'La cornamenta del ciervo son sus…', choices: ['cuernos', 'patas', 'orejas'], answer: 'cuernos' },
        { prompt: 'Los jabatos son…', choices: ['las crías de los jabalíes', 'unos pájaros', 'unos brujos'], answer: 'las crías de los jabalíes' },
        { prompt: 'La escuela está alborotada: está…', choices: ['revuelta, con mucho ruido', 'vacía y en silencio', 'cerrada'], answer: 'revuelta, con mucho ruido' },
      ],
    },
  ],
};

export default ciervo;
