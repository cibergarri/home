import {
  Ghost, Skeleton, Vampire, Witch, Pumpkin, Bat,
} from '../../../drawings/Festivals';

// English, festivals: Halloween. Who’s there on Halloween night? It’s a (vampire)!
const halloween = {
  slug: 'halloween',
  title: 'Halloween',
  heading: 'Match the pictures',
  type: 'match',
  instructions: 'Tap a word, then its picture.',
  columns: ['Word', 'Picture'],
  pairs: [
    { id: 'ghost', en: 'ghost', es: 'fantasma', Picture: Ghost },
    { id: 'skeleton', en: 'skeleton', es: 'esqueleto', Picture: Skeleton },
    { id: 'vampire', en: 'vampire', es: 'vampiro', Picture: Vampire },
    { id: 'witch', en: 'witch', es: 'bruja', Picture: Witch },
    { id: 'pumpkin', en: 'pumpkin', es: 'calabaza', Picture: Pumpkin },
    { id: 'bat', en: 'bat', es: 'murciélago', Picture: Bat },
  ],
  more: [
    {
      title: 'Match the Halloween words',
      type: 'match',
      instructions: 'Tap a word in English, then the same word in Spanish.',
      pairs: [
        { id: 'ghost', en: '👻 ghost', es: 'fantasma' },
        { id: 'skeleton', en: '💀 skeleton', es: 'esqueleto' },
        { id: 'vampire', en: '🧛 vampire', es: 'vampiro' },
        { id: 'witch', en: '🧙‍♀️ witch', es: 'bruja' },
        { id: 'pumpkin', en: '🎃 pumpkin', es: 'calabaza' },
        { id: 'bat', en: '🦇 bat', es: 'murciélago' },
      ],
    },
    {
      title: 'Who’s there?',
      type: 'quiz',
      instructions: 'Knock, knock! Look at the picture and choose the answer.',
      questions: [
        {
          prompt: '🧛 Who’s there on Halloween night?',
          choices: ['It’s a vampire!', 'It’s a witch!', 'It’s a ghost!'],
          answer: 'It’s a vampire!',
        },
        {
          prompt: '👻 Who’s there?',
          choices: ['It’s a skeleton!', 'It’s a ghost!', 'It’s a vampire!'],
          answer: 'It’s a ghost!',
        },
        {
          prompt: '🧙‍♀️ Who’s at the door?',
          choices: ['It’s a witch!', 'It’s a ghost!', 'It’s a skeleton!'],
          answer: 'It’s a witch!',
        },
        {
          prompt: '💀 Who’s in the garden?',
          choices: ['It’s a vampire!', 'It’s a witch!', 'It’s a skeleton!'],
          answer: 'It’s a skeleton!',
        },
        {
          prompt: '🎃 What’s this?',
          choices: ['It’s a bat.', 'It’s a pumpkin.', 'It’s a ghost.'],
          answer: 'It’s a pumpkin.',
        },
        {
          prompt: '🍬 What do children say at the door on Halloween?',
          choices: ['Trick or treat!', 'Happy birthday!', 'Good morning!'],
          answer: 'Trick or treat!',
        },
      ],
    },
    {
      title: 'Missing letters',
      type: 'letters',
      write: true,
      instructions: 'Write the letters that are missing, one at a time, and tap ✓. Tap 🔊 to hear the word.',
      words: [
        { clue: '👻', word: 'ghost', shown: 'gh_s_' },
        { clue: '💀', word: 'skeleton', shown: 'sk_l_ton' },
        { clue: '🧛', word: 'vampire', shown: 'v_mp_re' },
        { clue: '🧙‍♀️', word: 'witch', shown: 'w_tc_' },
        { clue: '🎃', word: 'pumpkin', shown: 'p_mpk_n' },
      ],
    },
    {
      title: 'Make the sentence',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: '¿Quién está ahí en la noche de Halloween?', answer: ['Who’s', 'there', 'on', 'Halloween', 'night?'] },
        { prompt: '¡Es un vampiro!', answer: ['It’s', 'a', 'vampire!'] },
        { prompt: '¡Es una bruja!', answer: ['It’s', 'a', 'witch!'] },
        { prompt: '¡Truco o trato!', answer: ['Trick', 'or', 'treat!'] },
      ],
    },
  ],
};

export default halloween;
