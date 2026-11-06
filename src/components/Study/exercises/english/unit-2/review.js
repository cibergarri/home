// English, unit 2: Review 1 of the book (units 1 and 2), the story "Goldilocks and the three bears"
// and the Review race.
const review = {
  slug: 'review',
  title: 'Review 1',
  heading: 'Goldilocks and the three bears',
  type: 'quiz',
  instructions: 'Think about the story "Goldilocks and the three bears" and choose the right answer.',
  questions: [
    {
      prompt: '🐻 Where do the bears live?',
      choices: ['In a house in the forest.', 'In a castle.', 'In a flat in the town.'],
      answer: 'In a house in the forest.',
    },
    {
      prompt: '👧 Who goes into the bears’ house?',
      choices: ['Goldilocks.', 'Daisy.', 'The mouse.'],
      answer: 'Goldilocks.',
    },
    {
      prompt: '🐻🐻🐻 How many bears are there?',
      choices: ['There are two bears.', 'There are three bears.', 'There’s one bear.'],
      answer: 'There are three bears.',
    },
    {
      prompt: '🥣 What does Goldilocks eat?',
      choices: ['Sweets.', 'Porridge.', 'A cake.'],
      answer: 'Porridge.',
    },
    {
      prompt: '🛏️ Which bed is perfect?',
      choices: ['Baby Bear’s bed.', 'Daddy Bear’s bed.', 'Mummy Bear’s bed.'],
      answer: 'Baby Bear’s bed.',
    },
    {
      prompt: '😮 “She’s in my bed!” Where’s Goldilocks?',
      choices: ['She’s in the kitchen.', 'She’s in the bed.', 'She’s in the garden.'],
      answer: 'She’s in the bed.',
    },
  ],
  more: [
    {
      title: 'Review race',
      type: 'quiz',
      instructions: 'Read and choose the right answer.',
      questions: [
        {
          prompt: '🏃 Where’s Jack?',
          hint: 'Jack está en el gimnasio.',
          choices: ['Jack’s in the gym.', 'Jack’s in the kitchen.', 'She’s in the gym.'],
          answer: 'Jack’s in the gym.',
        },
        {
          prompt: '📚 Where’s Daisy?',
          hint: 'Daisy está en la biblioteca.',
          choices: ['He’s in the library.', 'She’s in the library.', 'She’s in the garage.'],
          answer: 'She’s in the library.',
        },
        { prompt: '🧊 Is the fridge in the computer room?', choices: ['Yes, it is.', 'No, it isn’t.'], answer: 'No, it isn’t.' },
        { prompt: '🚗 Is the car in the garage?', choices: ['Yes, it is.', 'No, it isn’t.'], answer: 'Yes, it is.' },
        { prompt: '🚿 Is the shower in the hall?', choices: ['Yes, it is.', 'No, it isn’t.'], answer: 'No, it isn’t.' },
        { prompt: '🛋️ Is the sofa in the living room?', choices: ['Yes, it is.', 'No, it isn’t.'], answer: 'Yes, it is.' },
        {
          prompt: '🚽 Is Grace in the toilet?',
          hint: 'Grace está en el patio.',
          choices: ['Yes, she is.', 'No, she isn’t.', 'No, he isn’t.'],
          answer: 'No, she isn’t.',
        },
      ],
    },
    {
      title: 'Words from units 1 and 2',
      type: 'match',
      instructions: 'Tap a word in English, then the same word in Spanish.',
      pairs: [
        { id: 'library', en: 'library', es: 'biblioteca' },
        { id: 'kitchen', en: 'kitchen', es: 'cocina' },
        { id: 'gym', en: 'gym', es: 'gimnasio' },
        { id: 'bedroom', en: 'bedroom', es: 'dormitorio' },
        { id: 'between', en: 'between', es: 'entre' },
        { id: 'garden', en: 'garden', es: 'jardín' },
        { id: 'fridge', en: 'fridge', es: 'nevera' },
        { id: 'behind', en: 'behind', es: 'detrás de' },
      ],
    },
    {
      title: 'Put the words in order',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'bedroom / there’s / In / a / bed / my', answer: ['In', 'my', 'bedroom', 'there’s', 'a', 'bed.'] },
        { prompt: 'are / In / school / there / classrooms / three / my', answer: ['In', 'my', 'school', 'there', 'are', 'three', 'classrooms.'] },
        { prompt: 'isn’t / the / in / She / classroom', answer: ['She', 'isn’t', 'in', 'the', 'classroom.'] },
        { prompt: 'Is / in / sofa / the / the / hall', answer: ['Is', 'the', 'sofa', 'in', 'the', 'hall?'] },
      ],
    },
  ],
};

export default review;
