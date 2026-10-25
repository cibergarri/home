import { placed } from './scenes';

// English, unit 1: positions, between, in front of, behind and next to, and yes or no answers.
const positions = {
  slug: 'positions',
  title: 'Positions',
  heading: 'Where are they?',
  type: 'quiz',
  instructions: 'Look at the picture and choose the right answer.',
  questions: [
    {
      prompt: 'Where’s Daisy?',
      scene: placed('Daisy', 'behind', 'chair'),
      choices: ['She’s in front of the chair.', 'She’s behind the chair.', 'She’s next to the chair.'],
      answer: 'She’s behind the chair.',
    },
    {
      prompt: 'Where’s Toby?',
      scene: placed('Toby', 'in front of', 'table'),
      choices: ['He’s in front of the table.', 'He’s behind the table.', 'He’s next to the table.'],
      answer: 'He’s in front of the table.',
    },
    {
      prompt: 'Where’s Daisy?',
      scene: placed('Daisy', 'between', 'chair'),
      choices: ['She’s next to the chairs.', 'She’s behind the chairs.', 'She’s between the chairs.'],
      answer: 'She’s between the chairs.',
    },
    {
      prompt: 'Where’s Toby?',
      scene: placed('Toby', 'next to', 'bin'),
      choices: ['He’s behind the bin.', 'He’s next to the bin.', 'He’s in front of the bin.'],
      answer: 'He’s next to the bin.',
    },
    {
      prompt: 'Is Daisy next to the bin?',
      scene: placed('Daisy', 'next to', 'bin'),
      choices: ['Yes, she is.', 'No, she isn’t.', 'Yes, he is.'],
      answer: 'Yes, she is.',
    },
    {
      prompt: 'Is Toby behind the chair?',
      scene: placed('Toby', 'in front of', 'chair'),
      choices: ['Yes, he is.', 'No, she isn’t.', 'No, he isn’t.'],
      answer: 'No, he isn’t.',
    },
    {
      prompt: 'Is Sam between the tables?',
      scene: placed('Sam', 'between', 'table'),
      choices: ['Yes, he is.', 'No, he isn’t.', 'Yes, she is.'],
      answer: 'Yes, he is.',
    },
  ],
  more: [
    {
      title: 'Match the positions',
      type: 'match',
      instructions: 'Tap a word in English, then the same in Spanish.',
      pairs: [
        { id: 'between', en: 'between', es: 'entre' },
        { id: 'in-front-of', en: 'in front of', es: 'delante de' },
        { id: 'behind', en: 'behind', es: 'detrás de' },
        { id: 'next-to', en: 'next to', es: 'al lado de' },
        { id: 'chair', en: 'chair', es: 'silla' },
        { id: 'table', en: 'table', es: 'mesa' },
        { id: 'bin', en: 'bin', es: 'papelera' },
      ],
    },
  ],
};

export default positions;
