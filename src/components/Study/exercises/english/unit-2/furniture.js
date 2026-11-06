import House from '../../../drawings/House';

// English, unit 2: things in the house, found on the drawing of the house, then matched, and Is
// the (sofa) in the (living room)? Yes, it is. / No, it isn’t. `dot` is the spot on the drawing
// each box points at and `box` the centre of the box, in the drawing's 1000 × 640 units.
const furniture = {
  slug: 'furniture',
  title: 'Things in the house',
  heading: 'Find the things',
  instructions: 'Drag each word to its box on the house. Tap the speaker to hear it.',
  width: 1000,
  height: 640,
  boxWidth: 175,
  Drawing: House,
  items: [
    {
      id: 'bed', word: 'bed', definition: 'La cama.', dot: [420, 340], box: [450, 250],
    },
    {
      id: 'window', word: 'window', definition: 'La ventana.', dot: [566, 248], box: [880, 170],
    },
    {
      id: 'shower', word: 'shower', definition: 'La ducha.', dot: [760, 300], box: [890, 300],
    },
    {
      id: 'sofa', word: 'sofa', definition: 'El sofá.', dot: [520, 515], box: [490, 605],
    },
    {
      id: 'cooker', word: 'cooker', definition: 'La cocina, los fogones.', dot: [682, 525], box: [680, 605],
    },
    {
      id: 'fridge', word: 'fridge', definition: 'El frigorífico, la nevera.', dot: [764, 500], box: [880, 605],
    },
  ],
  more: [
    {
      title: 'Match the things',
      type: 'match',
      instructions: 'Tap a word in English, then the same word in Spanish.',
      pairs: [
        { id: 'bed', en: 'bed', es: 'cama' },
        { id: 'cooker', en: 'cooker', es: 'cocina, fogones' },
        { id: 'fridge', en: 'fridge', es: 'frigorífico, nevera' },
        { id: 'shower', en: 'shower', es: 'ducha' },
        { id: 'sofa', en: 'sofa', es: 'sofá' },
        { id: 'window', en: 'window', es: 'ventana' },
      ],
    },
    {
      title: 'Missing letters',
      type: 'letters',
      write: true,
      instructions: 'Write the letters that are missing, one at a time, and tap ✓. Tap 🔊 to hear the word.',
      words: [
        { clue: '🛏️', word: 'bed', shown: 'b_d' },
        { clue: '🍳', word: 'cooker', shown: 'c_ok_r' },
        { clue: '🧊', word: 'fridge', shown: 'fr_dg_' },
        { clue: '🚿', word: 'shower', shown: 'sh_w_r' },
        { clue: '🛋️', word: 'sofa', shown: 's_f_' },
        { clue: '🪟', word: 'window', shown: 'w_nd_w' },
      ],
    },
    {
      title: 'Is it in the…?',
      type: 'quiz',
      instructions: 'Think about a house. Is it there? Choose the answer.',
      questions: [
        { prompt: '🛏️ Is the bed in the bedroom?', choices: ['Yes, it is.', 'No, it isn’t.'], answer: 'Yes, it is.' },
        { prompt: '🛏️ Is the bed in the bathroom?', choices: ['Yes, it is.', 'No, it isn’t.'], answer: 'No, it isn’t.' },
        { prompt: '🛋️ Is the sofa in the living room?', choices: ['Yes, it is.', 'No, it isn’t.'], answer: 'Yes, it is.' },
        { prompt: '🚿 Is the shower in the kitchen?', choices: ['Yes, it is.', 'No, it isn’t.'], answer: 'No, it isn’t.' },
        { prompt: '🚿 Is the shower in the bathroom?', choices: ['Yes, it is.', 'No, it isn’t.'], answer: 'Yes, it is.' },
        { prompt: '🧊 Is the fridge in the garage?', choices: ['Yes, it is.', 'No, it isn’t.'], answer: 'No, it isn’t.' },
        { prompt: '🍳 Is the cooker in the kitchen?', choices: ['Yes, it is.', 'No, it isn’t.'], answer: 'Yes, it is.' },
        { prompt: '🛋️ Is the sofa in the attic?', choices: ['Yes, it is.', 'No, it isn’t.'], answer: 'No, it isn’t.' },
      ],
    },
    {
      title: 'Ask the question',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: '¿Está la cama en el dormitorio?', answer: ['Is', 'the', 'bed', 'in', 'the', 'bedroom?'] },
        { prompt: '¿Está el sofá en el salón?', answer: ['Is', 'the', 'sofa', 'in', 'the', 'living', 'room?'] },
        { prompt: 'Sí, está.', answer: ['Yes,', 'it', 'is.'] },
        { prompt: 'No, no está.', answer: ['No,', 'it', 'isn’t.'] },
        { prompt: 'Hay una nevera en la cocina.', answer: ['There’s', 'a', 'fridge', 'in', 'the', 'kitchen.'] },
      ],
    },
  ],
};

export default furniture;
