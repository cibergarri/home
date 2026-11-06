// English, unit 4: the sound /sc/ ("The scared scarecrow is on the scooter"), and "Can you (swim)?
// Yes, I can do that! I’m brave!"
const imBrave = {
  slug: 'im-brave',
  title: 'I’m brave!',
  heading: 'Words with sc',
  type: 'quiz',
  instructions: 'Which word starts with the letters sc? Tap 🔊 to hear the words.',
  questions: [
    { prompt: 'Which word has sc?', say: 'scooter, sweater, shoes', choices: ['sweater', 'scooter', 'shoes'], answer: 'scooter' },
    { prompt: 'Find the sc word.', say: 'swim, scared, star', choices: ['scared', 'swim', 'star'], answer: 'scared' },
    { prompt: 'Which one starts with sc?', say: 'shark, skirt, scarecrow', choices: ['shark', 'skirt', 'scarecrow'], answer: 'scarecrow' },
    { prompt: 'Tap the word with sc.', say: 'scarf, sofa, swan', choices: ['sofa', 'swan', 'scarf'], answer: 'scarf' },
    { prompt: 'Where is sc?', say: 'school, shower, seven', choices: ['shower', 'school', 'seven'], answer: 'school' },
  ],
  more: [
    {
      title: 'The tongue twister',
      type: 'build',
      instructions: 'Tap the words in the right order, then say it fast!',
      puzzles: [
        {
          prompt: 'El espantapájaros asustado va en el patinete.',
          answer: ['The', 'scared', 'scarecrow', 'is', 'on', 'the', 'scooter.'],
        },
      ],
    },
    {
      title: 'Can you do that?',
      type: 'quiz',
      instructions: 'Read and choose the brave answer.',
      questions: [
        {
          prompt: '🏊 Can you swim?',
          choices: ['Yes, I can do that!', 'Yes, I am.'],
          answer: 'Yes, I can do that!',
        },
        {
          prompt: '🎭 Can you act in a play?',
          choices: ['No, it isn’t.', 'Yes, I can do that! I’m brave!'],
          answer: 'Yes, I can do that! I’m brave!',
        },
        {
          prompt: '🐴 Can you ride a horse?',
          choices: ['I’m brave, too! I can ride a horse.', 'I’m wearing a horse.'],
          answer: 'I’m brave, too! I can ride a horse.',
        },
        {
          prompt: '«Soy valiente.»',
          say: false,
          choices: ['I’m scared.', 'I’m brave.', 'I’m sad.'],
          answer: 'I’m brave.',
        },
        {
          prompt: '«Estoy asustado.»',
          say: false,
          choices: ['I’m scared.', 'I’m brave.', 'I’m cold.'],
          answer: 'I’m scared.',
        },
      ],
    },
  ],
};

export default imBrave;
