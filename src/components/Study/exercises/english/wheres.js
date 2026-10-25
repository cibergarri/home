import { atSchool } from './scenes';

// English, unit 1: Where's…? He's / She's in the… and isn't.
const wheres = {
  slug: 'wheres',
  title: 'Where’s…?',
  heading: 'Look and answer',
  type: 'quiz',
  instructions: 'Look at the school and choose the right answer. A boy is he, a girl is she.',
  questions: [
    {
      prompt: 'Where’s Toby?',
      scene: atSchool({ name: 'Toby', place: 'library' }),
      choices: ['He’s in the library.', 'She’s in the library.', 'He’s in the gym.'],
      answer: 'He’s in the library.',
    },
    {
      prompt: 'Where’s Daisy?',
      scene: atSchool({ name: 'Daisy', place: 'classroom' }),
      choices: ['He’s in the classroom.', 'She’s in the playground.', 'She’s in the classroom.'],
      answer: 'She’s in the classroom.',
    },
    {
      prompt: 'Where’s Toby?',
      scene: atSchool({ name: 'Toby', place: 'playground' }),
      choices: ['He’s in the toilet.', 'He’s in the playground.', 'She’s in the playground.'],
      answer: 'He’s in the playground.',
    },
    {
      prompt: 'Where’s Daisy?',
      scene: atSchool({ name: 'Daisy', place: 'dining room' }),
      choices: ['She’s in the dining room.', 'She’s in the corridor.', 'He’s in the dining room.'],
      answer: 'She’s in the dining room.',
    },
    {
      prompt: 'Where’s Sam?',
      scene: atSchool({ name: 'Sam', place: 'gym' }),
      choices: ['She’s in the gym.', 'He’s in the computer room.', 'He’s in the gym.'],
      answer: 'He’s in the gym.',
    },
    {
      prompt: 'Is Toby in the corridor?',
      scene: atSchool({ name: 'Toby', place: 'computer room' }),
      choices: ['Yes, he is.', 'No, he isn’t.', 'No, she isn’t.'],
      answer: 'No, he isn’t.',
    },
    {
      prompt: 'Is Daisy in the library?',
      scene: atSchool({ name: 'Daisy', place: 'library' }),
      choices: ['Yes, she is.', 'No, she isn’t.', 'Yes, he is.'],
      answer: 'Yes, she is.',
    },
  ],
  more: [
    {
      title: 'Make the sentence',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'Él está en la biblioteca.', answer: ['He’s', 'in', 'the', 'library.'] },
        { prompt: 'Ella está en clase.', answer: ['She’s', 'in', 'the', 'classroom.'] },
        { prompt: 'Toby está en el patio.', answer: ['Toby’s', 'in', 'the', 'playground.'] },
        { prompt: 'Él no está en el pasillo.', answer: ['He', 'isn’t', 'in', 'the', 'corridor.'] },
        { prompt: 'Ella no está en la biblioteca.', answer: ['She', 'isn’t', 'in', 'the', 'library.'] },
      ],
    },
  ],
};

export default wheres;
