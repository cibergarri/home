import { Bonfire, Drum, Powder } from '../../../drawings/Festivals';

// English, festivals: Holi, the festival of colours. The head is (yellow). This arm is (blue).
const YELLOW = { id: 'yellow', title: 'yellow', colour: '#fff1a8' };
const BLUE = { id: 'blue', title: 'blue', colour: '#b9dcff' };
const PINK = { id: 'pink', title: 'pink', colour: '#ffc9de' };
const GREEN = { id: 'green', title: 'green', colour: '#c4ecc0' };

const holi = {
  slug: 'holi',
  title: 'Holi',
  heading: 'The festival of colours',
  type: 'quiz',
  instructions: 'Holi is a happy festival from India. Read and choose the right answer.',
  questions: [
    {
      prompt: '🇮🇳 Where is Holi from?',
      choices: ['From India.', 'From the UK.', 'From Spain.'],
      answer: 'From India.',
    },
    {
      prompt: '🌈 Holi is the festival of…',
      choices: ['colours.', 'ghosts.', 'letters.'],
      answer: 'colours.',
    },
    {
      prompt: '🌸 When is Holi?',
      choices: ['In spring.', 'In winter.', 'On Halloween night.'],
      answer: 'In spring.',
    },
    {
      prompt: '🎨 What do people throw at Holi?',
      choices: ['Coloured powder.', 'Mince pies.', 'Letters.'],
      answer: 'Coloured powder.',
    },
    {
      prompt: '🔥 What do people make the night before Holi?',
      choices: ['A bonfire.', 'A post box.', 'A pumpkin.'],
      answer: 'A bonfire.',
    },
    {
      prompt: '🥁 What do people play at Holi?',
      choices: ['Drums.', 'Pumpkins.', 'Crackers.'],
      answer: 'Drums.',
    },
  ],
  more: [
    {
      title: 'Holi pictures',
      type: 'match',
      instructions: 'Tap a word, then its picture.',
      columns: ['Word', 'Picture'],
      pairs: [
        { id: 'bonfire', en: 'bonfire', es: 'hoguera', Picture: Bonfire },
        { id: 'drum', en: 'drum', es: 'tambor', Picture: Drum },
        { id: 'powder', en: 'powder', es: 'polvo de colores', Picture: Powder },
      ],
    },
    {
      title: 'Holi words',
      type: 'match',
      instructions: 'Tap a word in English, then the same in Spanish.',
      pairs: [
        { id: 'bonfire', en: '🔥 bonfire', es: 'hoguera' },
        { id: 'drum', en: '🥁 drum', es: 'tambor' },
        { id: 'powder', en: '🎨 powder', es: 'polvo de colores' },
        { id: 'head', en: 'head', es: 'cabeza' },
        { id: 'arm', en: 'arm', es: 'brazo' },
        { id: 'leg', en: 'leg', es: 'pierna' },
        { id: 'body', en: 'body', es: 'cuerpo' },
      ],
    },
    {
      title: 'A Holi figure',
      type: 'colour',
      instructions: 'Colour each part of the Holi figure. Pick up a crayon, then tap its sentences.',
      crayons: [YELLOW, BLUE, PINK, GREEN],
      words: [
        { id: 'head', word: 'The head is yellow.', crayon: 'yellow' },
        { id: 'arm', word: 'This arm is blue.', crayon: 'blue' },
        { id: 'other-arm', word: 'That arm is pink.', crayon: 'pink' },
        { id: 'body', word: 'The body is green.', crayon: 'green' },
        { id: 'leg', word: 'This leg is yellow.', crayon: 'yellow' },
        { id: 'other-leg', word: 'That leg is blue.', crayon: 'blue' },
        { id: 'hands', word: 'The hands are pink.', crayon: 'pink' },
        { id: 'feet', word: 'The feet are green.', crayon: 'green' },
      ],
    },
    {
      title: 'Make the sentence',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'La cabeza es amarilla.', answer: ['The', 'head', 'is', 'yellow.'] },
        { prompt: 'Este brazo es azul.', answer: ['This', 'arm', 'is', 'blue.'] },
        { prompt: 'Hay una hoguera.', answer: ['There’s', 'a', 'bonfire.'] },
        { prompt: '¡Feliz Holi!', answer: ['Happy', 'Holi!'] },
      ],
    },
  ],
};

export default holi;
