import {
  Wood, Stone, Metal, Fabric, Straw, Plastic, Paper,
} from '../../../drawings/Materials';

// English, unit 2 (natural science): materials. This house is made of (wood). Each material is
// first matched with a picture of it (the Spanish kept as its label), then with its Spanish.
const materials = {
  slug: 'materials',
  title: 'Materials',
  heading: 'Match the materials',
  type: 'match',
  instructions: 'Tap a word, then its picture.',
  columns: ['Word', 'Picture'],
  pairs: [
    { id: 'wood', en: 'wood', es: 'madera', Picture: Wood },
    { id: 'stone', en: 'stone', es: 'piedra', Picture: Stone },
    { id: 'metal', en: 'metal', es: 'metal', Picture: Metal },
    { id: 'fabric', en: 'fabric', es: 'tela', Picture: Fabric },
    { id: 'straw', en: 'straw', es: 'paja', Picture: Straw },
    { id: 'plastic', en: 'plastic', es: 'plástico', Picture: Plastic },
    { id: 'paper', en: 'paper', es: 'papel', Picture: Paper },
  ],
  more: [
    {
      title: 'Materials in Spanish',
      type: 'match',
      instructions: 'Tap a material in English, then the same in Spanish.',
      pairs: [
        { id: 'wood', en: 'wood', es: 'madera' },
        { id: 'stone', en: 'stone', es: 'piedra' },
        { id: 'metal', en: 'metal', es: 'metal' },
        { id: 'fabric', en: 'fabric', es: 'tela' },
        { id: 'straw', en: 'straw', es: 'paja' },
        { id: 'plastic', en: 'plastic', es: 'plástico' },
        { id: 'paper', en: 'paper', es: 'papel' },
      ],
    },
    {
      title: 'What’s it made of?',
      type: 'quiz',
      instructions: 'Look and choose what it is made of.',
      questions: [
        {
          prompt: '🪑 This chair is made of…',
          hint: 'Viene de los árboles.',
          choices: ['wood', 'fabric', 'paper'],
          answer: 'wood',
        },
        {
          prompt: '🏰 This castle is made of…',
          choices: ['straw', 'stone', 'paper'],
          answer: 'stone',
        },
        {
          prompt: '🥫 This can is made of…',
          choices: ['metal', 'fabric', 'straw'],
          answer: 'metal',
        },
        {
          prompt: '👕 This T-shirt is made of…',
          choices: ['stone', 'fabric', 'metal'],
          answer: 'fabric',
        },
        {
          prompt: '📖 This book is made of…',
          choices: ['paper', 'stone', 'metal'],
          answer: 'paper',
        },
        {
          prompt: '🪣 This bucket is made of…',
          choices: ['straw', 'plastic', 'stone'],
          answer: 'plastic',
        },
        {
          prompt: '🐷 The first little pig’s house is made of…',
          choices: ['stone', 'metal', 'straw'],
          answer: 'straw',
        },
      ],
    },
    {
      title: 'Missing letters',
      type: 'letters',
      write: true,
      instructions: 'Write the letters that are missing, one at a time, and tap ✓. Tap 🔊 to hear the word.',
      words: [
        { clue: 'madera', word: 'wood', shown: 'w__d' },
        { clue: 'piedra', word: 'stone', shown: 'st_n_' },
        { clue: 'metal', word: 'metal', shown: 'm_t_l' },
        { clue: 'tela', word: 'fabric', shown: 'f_br_c' },
        { clue: 'paja', word: 'straw', shown: 'str_w' },
        { clue: 'plástico', word: 'plastic', shown: 'pl_st_c' },
      ],
    },
    {
      title: 'This house is made of…',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'Esta casa es de madera.', answer: ['This', 'house', 'is', 'made', 'of', 'wood.'] },
        { prompt: 'Esta silla es de metal.', answer: ['This', 'chair', 'is', 'made', 'of', 'metal.'] },
        { prompt: 'Este sofá es de tela.', answer: ['This', 'sofa', 'is', 'made', 'of', 'fabric.'] },
        { prompt: '¡Los pájaros hacen casas increíbles!', answer: ['Birds', 'make', 'amazing', 'houses!'] },
      ],
    },
  ],
};

export default materials;
