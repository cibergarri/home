// English, unit 5, natural science: how we move, with bones, joints, muscles and the skeleton.
const letsMove = {
  slug: 'lets-move',
  title: 'Let’s move!',
  heading: 'The body',
  type: 'match',
  instructions: 'Tap a word in English, then the same word in Spanish.',
  pairs: [
    { id: 'bone', en: 'bone', es: 'hueso' },
    { id: 'joint', en: 'joint', es: 'articulación' },
    { id: 'muscles', en: 'muscles', es: 'músculos' },
    { id: 'skeleton', en: 'skeleton', es: 'esqueleto' },
    { id: 'legs', en: 'legs', es: 'piernas' },
    { id: 'arms', en: 'arms', es: 'brazos' },
  ],
  more: [
    {
      title: 'How do you move?',
      type: 'quiz',
      instructions: 'Read and choose the right answer.',
      questions: [
        {
          prompt: '🦴🦴🦴 All the bones of the body are the…',
          choices: ['skeleton', 'muscle', 'joint'],
          answer: 'skeleton',
        },
        {
          prompt: '🦵 The knee and the elbow are…',
          choices: ['joints', 'muscles', 'skeletons'],
          answer: 'joints',
        },
        {
          prompt: '💪 They pull the bones to move them.',
          choices: ['muscles', 'joints', 'skeletons'],
          answer: 'muscles',
        },
        {
          prompt: '🏃 I can run. I use my…',
          choices: ['legs.', 'ears.', 'hair.'],
          answer: 'legs.',
        },
        {
          prompt: '🏓 I can play table tennis. I use my…',
          choices: ['arms and hands.', 'nose.', 'hair.'],
          answer: 'arms and hands.',
        },
        {
          prompt: '🐌 Snails haven’t got…',
          choices: ['bones.', 'a home.', 'a body.'],
          answer: 'bones.',
        },
        {
          prompt: '🦒 A giraffe’s neck has got … bones!',
          choices: ['seven', 'two', 'twenty'],
          answer: 'seven',
        },
      ],
    },
    {
      title: 'What can you do?',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: '🏃 Puedo correr. Uso las piernas.', answer: ['I', 'can', 'run.', 'I', 'use', 'my', 'legs.'] },
        { prompt: '🚲 Puedo montar en bici.', answer: ['I', 'can', 'ride', 'a', 'bike.'] },
        { prompt: '⚽ Puedo jugar al fútbol.', answer: ['I', 'can', 'play', 'football.'] },
        { prompt: 'Tengo curiosidad por cómo se mueve mi cuerpo.', answer: ['I’m', 'curious', 'about', 'how', 'my', 'body', 'moves.'] },
      ],
    },
  ],
};

export default letsMove;
