// English, unit 5, culture: countryside activities in the UK, a camp and the Activity Camp project.
const countryside = {
  slug: 'countryside',
  title: 'In the countryside',
  heading: 'Countryside activities',
  type: 'match',
  instructions: 'Tap an activity in English, then the same activity in Spanish.',
  pairs: [
    { id: 'campfire', en: 'cook on a campfire', es: 'cocinar en una hoguera' },
    { id: 'stories', en: 'tell scary stories', es: 'contar historias de miedo' },
    { id: 'den', en: 'make a den', es: 'hacer una cabaña' },
    { id: 'songs', en: 'sing songs', es: 'cantar canciones' },
    { id: 'tent', en: 'tent', es: 'tienda de campaña' },
    { id: 'countryside', en: 'countryside', es: 'el campo' },
  ],
  more: [
    {
      title: 'What do they do?',
      type: 'quiz',
      instructions: 'Look at the picture and choose the right sentence.',
      questions: [
        {
          prompt: '🔥🍳',
          say: false,
          choices: ['I cook on a campfire.', 'I sing songs.', 'I make a den.'],
          answer: 'I cook on a campfire.',
        },
        {
          prompt: '👻📖',
          say: false,
          choices: ['I make a den.', 'I tell scary stories.', 'I cook on a campfire.'],
          answer: 'I tell scary stories.',
        },
        {
          prompt: '🪵🛖',
          say: false,
          choices: ['I sing songs.', 'I tell scary stories.', 'I make a den.'],
          answer: 'I make a den.',
        },
        {
          prompt: '🎶🎤',
          say: false,
          choices: ['I sing songs.', 'I make a den.', 'I tell scary stories.'],
          answer: 'I sing songs.',
        },
        {
          prompt: '⛺🌳 Where’s the tent?',
          say: 'Where’s the tent?',
          choices: ['It’s next to the tree.', 'It’s in the lake.', 'It’s in the classroom.'],
          answer: 'It’s next to the tree.',
        },
        {
          prompt: '🌳🔥🌳 Where’s the campfire?',
          say: 'Where’s the campfire?',
          choices: ['It’s behind the tent.', 'It’s between the trees.', 'It’s next to the lake.'],
          answer: 'It’s between the trees.',
        },
      ],
    },
    {
      title: 'Come to Activity Camp!',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'Hago una cabaña en el campo.', answer: ['I', 'make', 'a', 'den', 'in', 'the', 'countryside.'] },
        { prompt: 'Mi actividad favorita es cantar canciones.', answer: ['My', 'favourite', 'activity', 'is', 'singing', 'songs.'] },
        { prompt: '¡Ven al Campamento de Actividades!', answer: ['Come', 'to', 'Activity', 'Camp!'] },
        { prompt: '¿Qué puedes hacer en el campamento?', answer: ['What', 'can', 'you', 'do', 'at', 'camp?'] },
      ],
    },
  ],
};

export default countryside;
