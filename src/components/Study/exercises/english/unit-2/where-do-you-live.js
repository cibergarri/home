import {
  House, Flat, Cottage, Castle, Caravan, Houseboat,
} from '../../../drawings/Homes';

// English, unit 2: Where do you live? I live in a (flat). Homes in the UK, and the sound /ch/:
// "Charlie’s chocolate chair is next to the chimney." Each home is first matched with a picture of
// it (the Spanish kept as its label), then with its Spanish.
const whereDoYouLive = {
  slug: 'where-do-you-live',
  title: 'Where do you live?',
  heading: 'Homes',
  type: 'match',
  instructions: 'Tap a word, then its picture.',
  columns: ['Word', 'Picture'],
  pairs: [
    { id: 'house', en: 'house', es: 'casa', Picture: House },
    { id: 'flat', en: 'flat', es: 'piso', Picture: Flat },
    { id: 'cottage', en: 'cottage', es: 'casita de campo', Picture: Cottage },
    { id: 'castle', en: 'castle', es: 'castillo', Picture: Castle },
    { id: 'caravan', en: 'caravan', es: 'caravana', Picture: Caravan },
    { id: 'houseboat', en: 'houseboat', es: 'barco vivienda', Picture: Houseboat },
  ],
  more: [
    {
      title: 'Homes in Spanish',
      type: 'match',
      instructions: 'Tap a home in English, then the same in Spanish.',
      pairs: [
        { id: 'house', en: '🏠 house', es: 'casa' },
        { id: 'flat', en: '🏢 flat', es: 'piso' },
        { id: 'cottage', en: '🏡 cottage', es: 'casita de campo' },
        { id: 'castle', en: '🏰 castle', es: 'castillo' },
        { id: 'caravan', en: '🚐 caravan', es: 'caravana' },
        { id: 'houseboat', en: '🛥️ houseboat', es: 'barco vivienda' },
      ],
    },
    {
      title: 'I live in a…',
      type: 'quiz',
      instructions: 'Look at the picture and choose the answer to Where do you live?',
      questions: [
        {
          prompt: 'Where do you live? 🏢',
          say: 'Where do you live?',
          choices: ['I live in a flat.', 'I live in a castle.', 'I live in a caravan.'],
          answer: 'I live in a flat.',
        },
        {
          prompt: 'Where do you live? 🏰',
          say: 'Where do you live?',
          choices: ['I live in a cottage.', 'I live in a castle.', 'I live in a flat.'],
          answer: 'I live in a castle.',
        },
        {
          prompt: 'Where do you live? 🛥️',
          say: 'Where do you live?',
          choices: ['I live in a houseboat.', 'I live in a house.', 'I live in a caravan.'],
          answer: 'I live in a houseboat.',
        },
        {
          prompt: 'Where do you live? 🚐',
          say: 'Where do you live?',
          choices: ['I live in a castle.', 'I live in a flat.', 'I live in a caravan.'],
          answer: 'I live in a caravan.',
        },
        {
          prompt: 'Where do you live? 🏡',
          say: 'Where do you live?',
          choices: ['I live in a cottage.', 'I live in a houseboat.', 'I live in a castle.'],
          answer: 'I live in a cottage.',
        },
        {
          prompt: '🌊 This home can go on the water. What is it?',
          choices: ['A castle.', 'A houseboat.', 'A flat.'],
          answer: 'A houseboat.',
        },
        {
          prompt: '🚗 This home can go on the road. What is it?',
          choices: ['A caravan.', 'A cottage.', 'A castle.'],
          answer: 'A caravan.',
        },
      ],
    },
    {
      title: 'The sound ch',
      type: 'quiz',
      instructions: 'Which word has the sound ch, as in chocolate?',
      questions: [
        { prompt: '🍫 Find the ch word.', choices: ['chocolate', 'shower', 'sofa'], answer: 'chocolate' },
        { prompt: '🪑 Find the ch word.', choices: ['shark', 'chair', 'bed'], answer: 'chair' },
        { prompt: '🏠 Find the ch word.', choices: ['chimney', 'fish', 'garden'], answer: 'chimney' },
        { prompt: '🍳 Find the ch word.', choices: ['bathroom', 'shout', 'kitchen'], answer: 'kitchen' },
        { prompt: '👦 Find the ch word.', choices: ['Sam', 'Charlie', 'Toby'], answer: 'Charlie' },
      ],
    },
    {
      title: 'Say it fast',
      type: 'build',
      instructions: 'Tap the words in the right order. Then say it fast!',
      puzzles: [
        {
          prompt: 'La silla de chocolate de Charlie está al lado de la chimenea.',
          answer: ['Charlie’s', 'chocolate', 'chair', 'is', 'next', 'to', 'the', 'chimney.'],
        },
        { prompt: '¿Dónde vives?', answer: ['Where', 'do', 'you', 'live?'] },
        { prompt: 'Vivo en un piso.', answer: ['I', 'live', 'in', 'a', 'flat.'] },
        { prompt: 'Mi casa de ensueño es un castillo.', answer: ['My', 'dream', 'house', 'is', 'a', 'castle.'] },
      ],
    },
  ],
};

export default whereDoYouLive;
