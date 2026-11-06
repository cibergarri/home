import {
  Mum, Dad, Brother, Grandma, Grandpa,
} from '../../../drawings/Family';

const picture = Drawing => ({ Drawing, width: 160, height: 110 });

// English, welcome: Who’s that? That’s (my cousin). That’s (Grace).
const whosThat = {
  slug: 'whos-that',
  title: 'Who’s that?',
  heading: 'Look and answer',
  type: 'quiz',
  instructions: 'Look at the picture and choose the right answer.',
  questions: [
    {
      prompt: 'Who’s that?',
      scene: picture(Grandma),
      choices: ['That’s my grandma.', 'That’s my grandpa.', 'That’s my sister.'],
      answer: 'That’s my grandma.',
    },
    {
      prompt: 'Who’s that?',
      scene: picture(Grandpa),
      choices: ['That’s my dad.', 'That’s my grandpa.', 'That’s my mum.'],
      answer: 'That’s my grandpa.',
    },
    {
      prompt: 'Who’s that?',
      scene: picture(Mum),
      choices: ['That’s my mum.', 'That’s my brother.', 'That’s my grandpa.'],
      answer: 'That’s my mum.',
    },
    {
      prompt: 'Who’s that?',
      scene: picture(Dad),
      choices: ['That’s my sister.', 'That’s my grandma.', 'That’s my dad.'],
      answer: 'That’s my dad.',
    },
    {
      prompt: 'Who’s that?',
      scene: picture(Brother),
      choices: ['That’s my brother.', 'That’s my sister.', 'That’s my mum.'],
      answer: 'That’s my brother.',
    },
    {
      prompt: 'Who’s that? 👧 (prima)',
      say: 'Who’s that?',
      choices: ['That’s my sister.', 'That’s my cousin.', 'That’s my dad.'],
      answer: 'That’s my cousin.',
    },
    {
      prompt: 'Who’s that? 👧 (Grace)',
      say: 'Who’s that?',
      choices: ['That’s Grace.', 'That’s Toby.', 'That’s Jack.'],
      answer: 'That’s Grace.',
    },
    {
      prompt: 'Who’s that? 👦 (Jack)',
      say: 'Who’s that?',
      choices: ['That’s Daisy.', 'That’s Jack.', 'That’s Grace.'],
      answer: 'That’s Jack.',
    },
  ],
  more: [
    {
      title: 'Make the sentence',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: '¿Quién es ese?', answer: ['Who’s', 'that?'] },
        { prompt: 'Esa es mi prima.', answer: ['That’s', 'my', 'cousin.'] },
        { prompt: 'Esa es Grace.', answer: ['That’s', 'Grace.'] },
        { prompt: 'Ese es mi abuelo.', answer: ['That’s', 'my', 'grandpa.'] },
        { prompt: 'Ese es mi hermano pequeño.', answer: ['That’s', 'my', 'little', 'brother.'] },
      ],
    },
  ],
};

export default whosThat;
