import {
  Aquarium, Beach, Funfair, Mountains, SafariPark, SkatePark, Village, WaterPark,
} from '../../../drawings/Summer';

// English, unit 6: places to have fun in summer, matched with their pictures and their Spanish, and
// spelt with some letters missing.
const summerPlaces = {
  slug: 'summer-places',
  title: 'Summer places',
  heading: 'Match the places',
  type: 'match',
  instructions: 'Tap a word, then its picture.',
  columns: ['Word', 'Picture'],
  pairs: [
    { id: 'aquarium', en: 'aquarium', es: 'acuario', Picture: Aquarium },
    { id: 'beach', en: 'beach', es: 'playa', Picture: Beach },
    { id: 'funfair', en: 'funfair', es: 'feria', Picture: Funfair },
    { id: 'mountains', en: 'mountains', es: 'montañas', Picture: Mountains },
    { id: 'safari-park', en: 'safari park', es: 'safari, parque de animales', Picture: SafariPark },
    { id: 'skate-park', en: 'skate park', es: 'parque de patinaje', Picture: SkatePark },
    { id: 'village', en: 'village', es: 'pueblo', Picture: Village },
    { id: 'water-park', en: 'water park', es: 'parque acuático', Picture: WaterPark },
  ],
  more: [
    {
      title: 'In Spanish',
      type: 'match',
      instructions: 'Tap a place in English, then the same place in Spanish.',
      pairs: [
        { id: 'aquarium', en: 'aquarium', es: 'acuario' },
        { id: 'beach', en: 'beach', es: 'playa' },
        { id: 'funfair', en: 'funfair', es: 'feria' },
        { id: 'mountains', en: 'mountains', es: 'montañas' },
        { id: 'safari-park', en: 'safari park', es: 'safari, parque de animales' },
        { id: 'skate-park', en: 'skate park', es: 'parque de patinaje' },
        { id: 'village', en: 'village', es: 'pueblo' },
        { id: 'water-park', en: 'water park', es: 'parque acuático' },
      ],
    },
    {
      title: 'Where is it?',
      type: 'quiz',
      instructions: 'Look at the picture and choose the place.',
      questions: [
        { prompt: '🐠🦈', say: false, choices: ['aquarium', 'beach', 'village'], answer: 'aquarium' },
        { prompt: '🏖️', say: false, choices: ['mountains', 'beach', 'funfair'], answer: 'beach' },
        { prompt: '🎡🎠', say: false, choices: ['water park', 'skate park', 'funfair'], answer: 'funfair' },
        { prompt: '⛰️', say: false, choices: ['mountains', 'village', 'aquarium'], answer: 'mountains' },
        { prompt: '🦁🦓', say: false, choices: ['skate park', 'safari park', 'water park'], answer: 'safari park' },
        { prompt: '🛹', say: false, choices: ['skate park', 'funfair', 'beach'], answer: 'skate park' },
        { prompt: '🏘️', say: false, choices: ['aquarium', 'mountains', 'village'], answer: 'village' },
        { prompt: '💦🛝', say: false, choices: ['safari park', 'water park', 'skate park'], answer: 'water park' },
      ],
    },
    {
      title: 'Missing letters',
      type: 'letters',
      write: true,
      instructions: 'Write the letters that are missing, one at a time, and tap ✓. Tap 🔊 to hear the word.',
      words: [
        { clue: '🐠', word: 'aquarium', shown: 'aq_ar_um' },
        { clue: '🏖️', word: 'beach', shown: 'b_a_h' },
        { clue: '🎡', word: 'funfair', shown: 'f_nf_ir' },
        { clue: '⛰️', word: 'mountains', shown: 'm_unt_ins' },
        { clue: '🦁', word: 'safari park', shown: 's_far_ park' },
        { clue: '🛹', word: 'skate park', shown: 'sk_te p_rk' },
        { clue: '🏘️', word: 'village', shown: 'v_ll_ge' },
        { clue: '💦', word: 'water park', shown: 'w_ter p_rk' },
      ],
    },
  ],
};

export default summerPlaces;
