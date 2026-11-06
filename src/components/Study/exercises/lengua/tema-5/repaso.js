// Lengua, tema 5: el repaso del final del tema, «¿Qué he aprendido?».
const repaso = {
  slug: 'repaso',
  title: 'Repaso',
  heading: '1. El crucigrama de la g',
  type: 'letters',
  write: true,
  instructions: 'Escribe las letras que faltan: ga, go, gu, gue, gui.',
  words: [
    { clue: 'Se pone en la cabeza para el sol.', word: 'gorra', shown: 'g_rra' },
    { clue: 'Un animal que maúlla.', word: 'gato', shown: 'g_to' },
    { clue: 'Una comida verde y redondita.', word: 'guisantes', shown: 'g_isantes' },
    { clue: 'Lo que bebes cuando tienes sed.', word: 'agua', shown: 'a_ua' },
    { clue: 'Un fuego grande que se hace en el campo.', word: 'hoguera', shown: 'hog_era' },
    { clue: 'Un bicho que se arrastra por la tierra.', word: 'gusano', shown: 'gu_ano' },
  ],
  more: [
    {
      title: '2. ¿Suena la u?',
      type: 'quiz',
      instructions: 'Lee los carteles en voz alta.',
      questions: [
        { prompt: 'Tienda de antigüedades: ¿suena la u?', choices: ['Sí', 'No'], answer: 'Sí' },
        { prompt: 'Club de atletismo El Guepardo: ¿suena la u?', choices: ['Sí', 'No'], answer: 'No' },
        { prompt: 'Cursos de piragüismo: ¿suena la u?', choices: ['Sí', 'No'], answer: 'Sí' },
        { prompt: 'Teatro de guiñol: ¿suena la u?', choices: ['Sí', 'No'], answer: 'No' },
      ],
    },
    {
      title: '3. ¿De qué palabra vienen?',
      type: 'sort',
      instructions: 'Busca la parte que se repite y lleva cada palabra a su familia.',
      columns: [
        { id: 'sol', title: 'sol' },
        { id: 'sal', title: 'sal' },
      ],
      cards: [
        { id: 'soleado', text: 'soleado', columns: ['sol'] },
        { id: 'solar', text: 'solar', columns: ['sol'] },
        { id: 'solecito', text: 'solecito', columns: ['sol'] },
        { id: 'salero', text: 'salero', columns: ['sal'] },
        { id: 'salado', text: 'salado', columns: ['sal'] },
        { id: 'salar', text: 'salar', columns: ['sal'] },
      ],
    },
    {
      title: '4. El fin de semana que viene',
      type: 'quiz',
      instructions: '¿Qué harás el fin de semana que viene? Elige el verbo en futuro.',
      questions: [
        { prompt: 'El sábado … al parque.', choices: ['fui', 'voy', 'iré'], answer: 'iré' },
        { prompt: 'El domingo … en la piscina.', choices: ['nadaré', 'nadé', 'nado'], answer: 'nadaré' },
        { prompt: 'Después … con mis primos.', choices: ['jugué', 'jugaré', 'juego'], answer: 'jugaré' },
        { prompt: '¿En qué tiempo está «visitamos el museo ayer»?', choices: ['Pasado', 'Presente', 'Futuro'], answer: 'Pasado' },
        { prompt: '¿En qué tiempo está «Teo lee un cuento ahora»?', choices: ['Pasado', 'Presente', 'Futuro'], answer: 'Presente' },
      ],
    },
    {
      title: '5. Repaso del tema',
      type: 'quiz',
      instructions: 'Lo que has aprendido en el tema.',
      questions: [
        { prompt: '¿Qué protege una parte del Reino de los Pantanos?', choices: ['Una burbuja mágica', 'Una montaña', 'Un río'], answer: 'Una burbuja mágica' },
        { prompt: 'En una entrevista se hacen…', choices: ['preguntas a una persona', 'recetas de cocina', 'dibujos'], answer: 'preguntas a una persona' },
        { prompt: 'En el teatro, lo que hacen los personajes va…', choices: ['entre paréntesis', 'entre comillas'], answer: 'entre paréntesis' },
        { prompt: '¿Qué palabra es de la familia de «pan»?', choices: ['panadería', 'pantalón', 'pantano'], answer: 'panadería' },
        { prompt: '¿Qué ayuda a tener un aire limpio?', choices: ['Plantar árboles', 'Ir siempre en coche'], answer: 'Plantar árboles' },
      ],
    },
  ],
};

export default repaso;
