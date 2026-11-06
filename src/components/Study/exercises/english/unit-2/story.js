// English, unit 2: questions about the story "This house is delicious", and thinking before you act.
const story = {
  slug: 'story',
  title: 'Story: This house is delicious',
  heading: 'What happens?',
  type: 'quiz',
  instructions: 'Think about the story "This house is delicious" and choose the right answer.',
  questions: [
    {
      prompt: '🐭 Who lives in the little house?',
      choices: ['A mouse.', 'A dog.', 'Toby.'],
      answer: 'A mouse.',
    },
    {
      prompt: '🌳 Where is the mouse’s house?',
      choices: ['In the kitchen.', 'In the garden.', 'In the attic.'],
      answer: 'In the garden.',
    },
    {
      prompt: '🛏️ How many bedrooms are there?',
      choices: ['There’s one bedroom.', 'There are two bedrooms.', 'There are four bedrooms.'],
      answer: 'There are two bedrooms.',
    },
    {
      prompt: '🎂 What is the bed?',
      choices: ['A cake.', 'A sofa.', 'A book.'],
      answer: 'A cake.',
    },
    {
      prompt: '🍬 Where are the sweets?',
      choices: ['In the garage.', 'In the bathroom.', 'In the hall.'],
      answer: 'In the bathroom.',
    },
    {
      prompt: '🍰 Why is the house delicious?',
      choices: ['It’s made of cake and sweets.', 'It’s made of stone.', 'It’s made of metal.'],
      answer: 'It’s made of cake and sweets.',
    },
    {
      prompt: '🙊 What do they tell Sam?',
      choices: ['Don’t eat the house, Sam.', 'Paint the van, Sam.', 'Go to bed, Sam.'],
      answer: 'Don’t eat the house, Sam.',
    },
    {
      prompt: '💡 Who has a good idea?',
      choices: ['Sam.', 'The mouse.', 'Mum.'],
      answer: 'Sam.',
    },
  ],
  more: [
    {
      title: 'Think before you act',
      type: 'quiz',
      instructions: 'It’s important to think before you act. Is it a good idea or a bad idea?',
      questions: [
        { prompt: '⚽ Let’s play football in the living room.', choices: ['Good idea 👍', 'Bad idea 👎'], answer: 'Bad idea 👎' },
        { prompt: '🧹 Let’s tidy up.', choices: ['Good idea 👍', 'Bad idea 👎'], answer: 'Good idea 👍' },
        { prompt: '🏠 Let’s eat the mouse’s house.', choices: ['Good idea 👍', 'Bad idea 👎'], answer: 'Bad idea 👎' },
        { prompt: '🙏 I eat your house. I say I’m sorry.', choices: ['Good idea 👍', 'Bad idea 👎'], answer: 'Good idea 👍' },
        { prompt: '🖍️ Let’s draw on the walls.', choices: ['Good idea 👍', 'Bad idea 👎'], answer: 'Bad idea 👎' },
      ],
    },
    {
      title: 'Phrases from the story',
      type: 'match',
      instructions: 'Tap a phrase in English, then the same phrase in Spanish.',
      pairs: [
        { id: 'my-house', en: 'This is my house.', es: 'Esta es mi casa.' },
        { id: 'dont-eat', en: 'Don’t eat the house.', es: 'No te comas la casa.' },
        { id: 'sorry', en: 'I’m sorry.', es: 'Lo siento.' },
        { id: 'idea', en: 'I’ve got an idea!', es: '¡Tengo una idea!' },
        { id: 'thank-you', en: 'Thank you!', es: '¡Gracias!' },
        { id: 'sweets', en: 'There are sweets!', es: '¡Hay caramelos!' },
      ],
    },
    {
      title: 'Put the story in order',
      type: 'build',
      instructions: 'Tap what happens first, then next, and so on.',
      puzzles: [
        {
          prompt: 'What happens first?',
          answer: ['The mouse shows its house.', 'Sam eats the house.', 'Sam says sorry.', 'Sam has a good idea.'],
        },
        {
          prompt: 'Vivo en una casita en el jardín.',
          answer: ['I', 'live', 'in', 'a', 'small', 'house', 'in', 'the', 'garden.'],
        },
      ],
    },
  ],
};

export default story;
