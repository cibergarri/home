import {
  ByBoat, ByBus, ByCar, ByTrain, OnFoot,
} from '../../../drawings/Summer';

// English, unit 6: ways to travel, matched with their pictures, and "Do you go to the… by car? Yes, I do. / No, I don't."
const byCar = {
  slug: 'by-car',
  title: 'By car, by bus…',
  heading: 'Match the ways to travel',
  type: 'match',
  instructions: 'Tap a word, then its picture.',
  columns: ['Word', 'Picture'],
  pairs: [
    { id: 'boat', en: 'by boat', es: 'en barco', Picture: ByBoat },
    { id: 'bus', en: 'by bus', es: 'en autobús', Picture: ByBus },
    { id: 'car', en: 'by car', es: 'en coche', Picture: ByCar },
    { id: 'train', en: 'by train', es: 'en tren', Picture: ByTrain },
    { id: 'foot', en: 'on foot', es: 'a pie, andando', Picture: OnFoot },
  ],
  more: [
    {
      title: 'In Spanish',
      type: 'match',
      instructions: 'Tap a way to travel in English, then the same in Spanish.',
      pairs: [
        { id: 'boat', en: 'by boat', es: 'en barco' },
        { id: 'bus', en: 'by bus', es: 'en autobús' },
        { id: 'car', en: 'by car', es: 'en coche' },
        { id: 'train', en: 'by train', es: 'en tren' },
        { id: 'foot', en: 'on foot', es: 'a pie, andando' },
      ],
    },
    {
      title: 'How do they go?',
      type: 'quiz',
      instructions: 'Look at the pictures and choose the right sentence.',
      questions: [
        {
          prompt: '🏖️ 🚌',
          say: false,
          choices: ['I go to the beach by bus.', 'I go to the beach by car.', 'I go to the beach on foot.'],
          answer: 'I go to the beach by bus.',
        },
        {
          prompt: '⛰️ 🚆',
          say: false,
          choices: ['I go to the mountains by boat.', 'I go to the mountains by train.', 'I go to the village by train.'],
          answer: 'I go to the mountains by train.',
        },
        {
          prompt: '🏘️ 🚗',
          say: false,
          choices: ['I go to the village by bus.', 'I go to the funfair by car.', 'I go to the village by car.'],
          answer: 'I go to the village by car.',
        },
        {
          prompt: '🛹 🚶',
          say: false,
          choices: ['I go to the skate park on foot.', 'I go to the skate park by train.', 'I go to the safari park on foot.'],
          answer: 'I go to the skate park on foot.',
        },
        {
          prompt: '🐠 ⛵',
          say: false,
          choices: ['I go to the aquarium by bus.', 'I go to the aquarium by boat.', 'I go to the beach by boat.'],
          answer: 'I go to the aquarium by boat.',
        },
      ],
    },
    {
      title: 'Yes, I do or no, I don’t?',
      type: 'quiz',
      instructions: 'Read the question and look at the picture. Choose the answer.',
      questions: [
        {
          prompt: 'Do you go to the beach by car? 🏖️ 🚗',
          say: 'Do you go to the beach by car?',
          choices: ['Yes, I do.', 'No, I don’t.'],
          answer: 'Yes, I do.',
        },
        {
          prompt: 'Do you go to the village by train? 🏘️ 🚌',
          say: 'Do you go to the village by train?',
          choices: ['Yes, I do.', 'No, I don’t.'],
          answer: 'No, I don’t.',
        },
        {
          prompt: 'Do you go to the water park on foot? 💦 🚶',
          say: 'Do you go to the water park on foot?',
          choices: ['Yes, I do.', 'No, I don’t.'],
          answer: 'Yes, I do.',
        },
        {
          prompt: 'Do you go to the aquarium by boat? 🐠 🚗',
          say: 'Do you go to the aquarium by boat?',
          choices: ['Yes, I do.', 'No, I don’t.'],
          answer: 'No, I don’t.',
        },
        {
          prompt: 'Do you go to the mountains by bus? ⛰️ 🚌',
          say: 'Do you go to the mountains by bus?',
          choices: ['Yes, I do.', 'No, I don’t.'],
          answer: 'Yes, I do.',
        },
      ],
    },
    {
      title: 'Ask and answer',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: '¿Vas a la playa en coche?', answer: ['Do', 'you', 'go', 'to', 'the', 'beach', 'by', 'car?'] },
        { prompt: 'Sí.', answer: ['Yes,', 'I', 'do.'] },
        { prompt: '¿Vas al pueblo en tren?', answer: ['Do', 'you', 'go', 'to', 'the', 'village', 'by', 'train?'] },
        { prompt: 'No.', answer: ['No,', 'I', 'don’t.'] },
        { prompt: 'Voy a la feria andando.', answer: ['I', 'go', 'to', 'the', 'funfair', 'on', 'foot.'] },
      ],
    },
  ],
};

export default byCar;
