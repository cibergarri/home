// English, welcome: a review of the whole unit, family, greetings, Who’s that? and the story.
const review = {
  slug: 'review',
  title: 'Review',
  heading: 'Choose the right one',
  type: 'quiz',
  instructions: 'Choose the right answer.',
  questions: [
    {
      prompt: '«Hermana» es…', say: false, choices: ['brother', 'sister', 'cousin'], answer: 'sister',
    },
    {
      prompt: '«Abuelo» es…', say: false, choices: ['grandpa', 'grandma', 'dad'], answer: 'grandpa',
    },
    {
      prompt: '«Primo» es…', say: false, choices: ['brother', 'cousin', 'mum'], answer: 'cousin',
    },
    {
      prompt: '«¿Quién es ese?» es…', say: false, choices: ['Who’s that?', 'How old are you?', 'What’s your name?'], answer: 'Who’s that?',
    },
    {
      prompt: '«¿Cuántos años tienes?» es…', say: false, choices: ['What’s your name?', 'How old are you?', 'Who’s that?'], answer: 'How old are you?',
    },
    {
      prompt: '«Tengo un hermano» es…', say: false, choices: ['I’ve got a brother.', 'I’ve got a sister.', 'That’s my brother.'], answer: 'I’ve got a brother.',
    },
    {
      prompt: 'In the story, whose birthday is it?', choices: ['Dad’s.', 'Mum’s.', 'Sam’s.'], answer: 'Mum’s.',
    },
  ],
  more: [
    {
      title: 'Put the words in order',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'old / you / are / How', answer: ['How', 'old', 'are', 'you?'] },
        { prompt: 'my / That’s / grandma', answer: ['That’s', 'my', 'grandma.'] },
        { prompt: 'got / a / I’ve / cousin', answer: ['I’ve', 'got', 'a', 'cousin.'] },
        { prompt: 'name / your / What’s', answer: ['What’s', 'your', 'name?'] },
      ],
    },
  ],
};

export default review;
