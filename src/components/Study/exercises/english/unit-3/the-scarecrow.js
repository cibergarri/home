// English, unit 3: the story "The scarecrow wants a friend": questions about it, its phrases, and
// its value, having different kinds of friends.
const theScarecrow = {
  slug: 'the-scarecrow',
  title: 'Story: The scarecrow wants a friend',
  heading: 'About the story',
  type: 'quiz',
  instructions: 'Think about the story and choose the right answer.',
  questions: [
    {
      prompt: 'What does the scarecrow want?',
      choices: ['A friend.', 'A sweater.', 'A rucksack.'],
      answer: 'A friend.',
    },
    {
      prompt: 'How is the scarecrow at the start?',
      choices: ['He’s happy.', 'He’s sad.', 'He’s hot.'],
      answer: 'He’s sad.',
    },
    {
      prompt: 'What’s the weather like?',
      choices: ['It’s hot and sunny.', 'It’s cold and windy.', 'It’s snowy.'],
      answer: 'It’s cold and windy.',
    },
    {
      prompt: 'What’s in the dress?',
      choices: ['A bird.', 'A mouse.', 'A rabbit.'],
      answer: 'A rabbit.',
    },
    {
      prompt: 'Where’s the bird?',
      choices: ['Under the hat.', 'In the dress.', 'In the rucksack.'],
      answer: 'Under the hat.',
    },
    {
      prompt: 'Which animals are in the story?',
      choices: ['A rabbit, a mouse and a bird.', 'A cat, a dog and a fish.', 'A shark and a fish.'],
      answer: 'A rabbit, a mouse and a bird.',
    },
    {
      prompt: 'What’s the scarecrow wearing at the end?',
      choices: ['A new scarf.', 'New trainers.', 'An old jacket.'],
      answer: 'A new scarf.',
    },
    {
      prompt: 'What does the story teach us?',
      choices: ['It’s good to have different kinds of friends.', 'It’s good to wear a hat.', 'It’s good to be cold.'],
      answer: 'It’s good to have different kinds of friends.',
    },
  ],
  more: [
    {
      title: 'Phrases from the story',
      type: 'match',
      instructions: 'Tap a phrase in English, then the same phrase in Spanish.',
      pairs: [
        { id: 'cold', en: 'It’s cold and windy.', es: 'Hace frío y viento.' },
        { id: 'jackets', en: 'Put on your jackets.', es: 'Poneos las chaquetas.' },
        { id: 'sad', en: 'I’m sad.', es: 'Estoy triste.' },
        { id: 'friend', en: 'I’m your friend.', es: 'Soy tu amigo.' },
        { id: 'hat', en: 'I’m wearing a hat, too.', es: 'Yo también llevo un gorro.' },
        { id: 'bird', en: 'There’s a bird under your hat!', es: '¡Hay un pájaro debajo de tu gorro!' },
        { id: 'love', en: 'I love my new scarf!', es: '¡Me encanta mi bufanda nueva!' },
      ],
    },
    {
      title: 'What happens?',
      type: 'build',
      instructions: 'Tap the sentences in the order of the story.',
      puzzles: [
        {
          prompt: 'Put the story in order.',
          answer: ['The scarecrow is sad.', 'There are animals in his clothes.', 'He’s happy with his new friends.'],
          separator: ' ',
        },
        { prompt: '¡Me encantan mis nuevos amigos!', answer: ['I', 'love', 'my', 'new', 'friends!'] },
        { prompt: 'Hay un conejo en el vestido.', answer: ['There’s', 'a', 'rabbit', 'in', 'the', 'dress.'] },
      ],
    },
  ],
};

export default theScarecrow;
