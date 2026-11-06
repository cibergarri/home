import House from '../../../drawings/House';

// English, unit 2: the rooms of the house, found on a drawing of a house, then matched and
// Where am I? `dot` is the spot on the drawing each box points at and `box` the centre of the box,
// in the drawing's 1000 × 640 units.
const rooms = {
  slug: 'rooms',
  title: 'Rooms in the house',
  heading: 'Find the rooms',
  instructions: 'Drag each room to its box on the house. Tap the speaker to hear it.',
  width: 1000,
  height: 640,
  boxWidth: 175,
  Drawing: House,
  items: [
    {
      id: 'attic', word: 'attic', definition: 'El desván.', dot: [470, 180], box: [880, 100],
    },
    {
      id: 'bedroom', word: 'bedroom', definition: 'El dormitorio.', dot: [415, 340], box: [450, 250],
    },
    {
      id: 'bathroom', word: 'bathroom', definition: 'El cuarto de baño.', dot: [690, 300], box: [890, 300],
    },
    {
      id: 'hall', word: 'hall', definition: 'El recibidor, la entrada.', dot: [380, 500], box: [300, 605],
    },
    {
      id: 'living-room', word: 'living room', definition: 'El salón.', dot: [515, 525], box: [490, 605],
    },
    {
      id: 'kitchen', word: 'kitchen', definition: 'La cocina.', dot: [690, 520], box: [680, 605],
    },
    {
      id: 'garage', word: 'garage', definition: 'El garaje.', dot: [895, 440], box: [880, 605],
    },
    {
      id: 'garden', word: 'garden', definition: 'El jardín.', dot: [100, 470], box: [110, 110],
    },
  ],
  more: [
    {
      title: 'Match the rooms',
      type: 'match',
      instructions: 'Tap a room in English, then the same room in Spanish.',
      pairs: [
        { id: 'attic', en: 'attic', es: 'desván' },
        { id: 'bathroom', en: 'bathroom', es: 'cuarto de baño' },
        { id: 'bedroom', en: 'bedroom', es: 'dormitorio' },
        { id: 'garage', en: 'garage', es: 'garaje' },
        { id: 'garden', en: 'garden', es: 'jardín' },
        { id: 'hall', en: 'hall', es: 'recibidor, entrada' },
        { id: 'kitchen', en: 'kitchen', es: 'cocina' },
        { id: 'living-room', en: 'living room', es: 'salón' },
      ],
    },
    {
      title: 'Where am I?',
      type: 'quiz',
      instructions: 'Read and choose the room.',
      questions: [
        {
          prompt: '😴 I’m in bed. Where am I?',
          choices: ['In the bedroom.', 'In the garage.', 'In the kitchen.'],
          answer: 'In the bedroom.',
        },
        {
          prompt: '🍳 I’m cooking. Where am I?',
          choices: ['In the attic.', 'In the kitchen.', 'In the garden.'],
          answer: 'In the kitchen.',
        },
        {
          prompt: '🚗 Here’s the car. Where am I?',
          choices: ['In the garage.', 'In the bathroom.', 'In the bedroom.'],
          answer: 'In the garage.',
        },
        {
          prompt: '🌷🌳 There are flowers and trees. Where am I?',
          choices: ['In the hall.', 'In the living room.', 'In the garden.'],
          answer: 'In the garden.',
        },
        {
          prompt: '🛁 I’m in the bath. Where am I?',
          choices: ['In the bathroom.', 'In the kitchen.', 'In the garden.'],
          answer: 'In the bathroom.',
        },
        {
          prompt: '📺 I’m watching TV. Where am I?',
          choices: ['In the garage.', 'In the living room.', 'In the attic.'],
          answer: 'In the living room.',
        },
        {
          prompt: '📦 I’m at the top of the house with old boxes. Where am I?',
          choices: ['In the attic.', 'In the hall.', 'In the bathroom.'],
          answer: 'In the attic.',
        },
        {
          prompt: '🚪 I’m next to the front door. Where am I?',
          choices: ['In the bedroom.', 'In the hall.', 'In the garden.'],
          answer: 'In the hall.',
        },
      ],
    },
    {
      title: 'Missing letters',
      type: 'letters',
      write: true,
      instructions: 'Write the letters that are missing, one at a time, and tap ✓. Tap 🔊 to hear the word.',
      words: [
        { clue: 'desván', word: 'attic', shown: 'a_t_c' },
        { clue: 'cuarto de baño', word: 'bathroom', shown: 'b_thr_om' },
        { clue: 'dormitorio', word: 'bedroom', shown: 'bedr__m' },
        { clue: 'garaje', word: 'garage', shown: 'g_ra_e' },
        { clue: 'jardín', word: 'garden', shown: 'g_rd_n' },
        { clue: 'recibidor', word: 'hall', shown: 'h_l_' },
        { clue: 'cocina', word: 'kitchen', shown: 'k_tch_n' },
        { clue: 'salón', word: 'living room', shown: 'l_ving r_om' },
      ],
    },
  ],
};

export default rooms;
