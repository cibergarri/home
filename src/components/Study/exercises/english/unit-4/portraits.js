// English, unit 4 (art): drawing portraits (circle, oval, line, colour, rub out), and reading
// short descriptions of people.
const portraits = {
  slug: 'portraits',
  title: 'Let’s draw a portrait',
  heading: 'Drawing words',
  type: 'match',
  instructions: 'Tap a word in English, then the same in Spanish.',
  pairs: [
    { id: 'circle', en: 'circle', es: 'círculo' },
    { id: 'oval', en: 'oval', es: 'óvalo' },
    { id: 'line', en: 'line', es: 'línea' },
    { id: 'colour', en: 'colour', es: 'colorea' },
    { id: 'rub-out', en: 'rub out', es: 'borra' },
    { id: 'portrait', en: 'portrait', es: 'retrato' },
    { id: 'eyes', en: 'eyes', es: 'ojos' },
  ],
  more: [
    {
      title: 'Read and answer',
      type: 'quiz',
      instructions: 'Read about each person and choose the right answer.',
      questions: [
        {
          prompt: 'He’s got short, red hair. He’s got blue eyes and a beard. Has he got a beard?',
          choices: ['Yes, he has.', 'No, he hasn’t.'],
          answer: 'Yes, he has.',
        },
        {
          prompt: 'He’s got short, red hair and blue eyes. What colour are his eyes?',
          choices: ['Brown.', 'Blue.', 'Red.'],
          answer: 'Blue.',
        },
        {
          prompt: 'She’s got long, fair hair. She’s got earrings and a necklace. Has she got a crown?',
          choices: ['Yes, she has.', 'No, she hasn’t.'],
          answer: 'No, she hasn’t.',
        },
        {
          prompt: 'She’s got short, dark hair, a necklace and a crown. Has she got long hair?',
          choices: ['Yes, she has.', 'No, she hasn’t.'],
          answer: 'No, she hasn’t.',
        },
        {
          prompt: 'This is Mark. He’s got a red wig and green glasses. What colour is his wig?',
          choices: ['Green.', 'Red.', 'Yellow.'],
          answer: 'Red.',
        },
        {
          prompt: 'What shape is a face in a portrait?',
          choices: ['An oval.', 'A line.', 'A square.'],
          answer: 'An oval.',
        },
      ],
    },
    {
      title: 'My friend’s portrait',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'Mi amigo tiene el pelo castaño y los ojos verdes.', answer: ['My', 'friend’s', 'got', 'brown', 'hair', 'and', 'green', 'eyes.'] },
        { prompt: 'Este es Mark. Tiene una peluca roja.', answer: ['This', 'is', 'Mark.', 'He’s', 'got', 'a', 'red', 'wig.'] },
        { prompt: 'Yo tengo los ojos azules.', answer: ['I’ve', 'got', 'blue', 'eyes.'] },
      ],
    },
  ],
};

export default portraits;
