// Naturales, tema 3: cuidamos el hábitat de los animales, y la ficha de un animal de nuestra
// localidad.
const cuidamos = {
  slug: 'cuidamos',
  title: 'Cuidamos el hábitat de los animales',
  heading: '¿Cuido la naturaleza?',
  type: 'sort',
  instructions: 'Como en la página 53: ¿qué hacemos para cuidar la naturaleza y qué no debemos hacer?',
  columns: [
    { id: 'si', title: '✅ Lo hago', subtitle: 'Así cuido la naturaleza' },
    { id: 'no', title: '❌ No lo hago', subtitle: 'Daña el hábitat' },
  ],
  cards: [
    { id: 'basura', text: 'Tirar la basura a la papelera', columns: ['si'] },
    { id: 'reciclar', text: 'Separar la basura para reciclar', columns: ['si'] },
    { id: 'silencio', text: 'Hablar bajito en el bosque para no molestar a los animales', columns: ['si'] },
    { id: 'caminos', text: 'Andar por los caminos sin pisar las plantas', columns: ['si'] },
    { id: 'nidos', text: 'Mirar los nidos sin tocarlos', columns: ['si'] },
    { id: 'tirar', text: 'Dejar bolsas y latas en el campo', columns: ['no'] },
    { id: 'ramas', text: 'Arrancar flores y romper ramas', columns: ['no'] },
    { id: 'piedras', text: 'Tirar piedras a los animales', columns: ['no'] },
    { id: 'charca', text: 'Echar cosas a la charca', columns: ['no'] },
  ],
  more: [
    {
      title: '¿Qué ocurre?',
      type: 'quiz',
      instructions: 'Como en la página 53: piensa y elige.',
      questions: [
        { prompt: '¿Qué ocurre cuando no cuidamos los entornos naturales?', choices: ['Las plantas se secan y los animales se van', 'Hay más animales y plantas'], answer: 'Las plantas se secan y los animales se van' },
        { prompt: '¿Qué sucede si cuidamos el entorno y respetamos a los animales?', choices: ['Hay árboles, agua limpia y muchos animales', 'Los animales se quedan sin casa'], answer: 'Hay árboles, agua limpia y muchos animales' },
        { prompt: '¿Por qué es importante cuidar la naturaleza?', choices: ['Porque es el hábitat de muchos animales y plantas', 'No es importante'], answer: 'Porque es el hábitat de muchos animales y plantas' },
      ],
    },
    {
      title: 'La ficha de un animal',
      type: 'gaps',
      instructions: 'Como en la página 54: completa la ficha de la paloma, un animal que vive en nuestra localidad.',
      sentences: [
        'Nombre: la [paloma].',
        'Se clasifica dentro del grupo de los [vertebrados] porque tiene [huesos].',
        'Dentro de ese grupo, es un [ave] porque tiene [plumas], y sus crías nacen de [huevos].',
        'Vive en los pueblos y ciudades y se desplaza [volando].',
        'Se alimenta de [semillas].',
      ],
    },
  ],
};

export default cuidamos;
