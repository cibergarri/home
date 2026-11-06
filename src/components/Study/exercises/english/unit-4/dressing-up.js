// English, unit 4 (culture): dressing up in the UK, for a school play, Halloween, carnival or a
// birthday party.
const dressingUp = {
  slug: 'dressing-up',
  title: 'Dressing up in the UK',
  heading: 'When do you dress up?',
  type: 'match',
  instructions: 'Tap a word in English, then the same in Spanish.',
  pairs: [
    { id: 'school-play', en: 'a school play', es: 'una obra de teatro del cole' },
    { id: 'halloween', en: 'Halloween', es: 'Halloween, la noche de las brujas' },
    { id: 'carnival', en: 'carnival', es: 'carnaval' },
    { id: 'birthday', en: 'a birthday party', es: 'una fiesta de cumpleaños' },
    { id: 'costume', en: 'costume', es: 'disfraz' },
    { id: 'pirate', en: 'pirate', es: 'pirata' },
  ],
  more: [
    {
      title: 'I dress up for…',
      type: 'quiz',
      instructions: 'Look at the picture and choose the right sentence.',
      questions: [
        {
          prompt: '🎃 When do you dress up?',
          choices: ['I dress up for Halloween.', 'I dress up for a birthday party.', 'I dress up for carnival.'],
          answer: 'I dress up for Halloween.',
        },
        {
          prompt: '🎂 When do you dress up, Sam?',
          choices: ['I dress up for a school play.', 'I dress up for a birthday party.', 'I dress up for Halloween.'],
          answer: 'I dress up for a birthday party.',
        },
        {
          prompt: '🎭 When do you dress up, Daisy?',
          choices: ['I dress up for a school play.', 'I dress up for carnival.', 'I dress up for a birthday party.'],
          answer: 'I dress up for a school play.',
        },
        {
          prompt: '🏴‍☠️ What’s Toby wearing?',
          say: 'What’s Toby wearing?',
          choices: ['He’s wearing a pirate costume.', 'He’s wearing a uniform.', 'He’s wearing a crown.'],
          answer: 'He’s wearing a pirate costume.',
        },
      ],
    },
    {
      title: 'Make the sentence',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'Me disfrazo en carnaval.', answer: ['I', 'dress', 'up', 'for', 'carnival.'] },
        { prompt: 'Me disfrazo en Halloween.', answer: ['I', 'dress', 'up', 'for', 'Halloween.'] },
        { prompt: 'En esta foto llevo una peluca y una corona.', answer: ['In', 'this', 'picture,', 'I’m', 'wearing', 'a', 'wig', 'and', 'a', 'crown.'] },
      ],
    },
  ],
};

export default dressingUp;
