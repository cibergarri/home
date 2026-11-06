import {
  Clean, Dirty, New, Old, Hat, Scarf,
} from '../../../drawings/Clothes';

// English, unit 3: clean, dirty, new and old, with "My (hat) is (new)." and "My (trousers) are (old)."
const newAndOld = {
  slug: 'new-and-old',
  title: 'Clean, dirty, new, old',
  heading: 'Find the picture',
  type: 'match',
  instructions: 'Tap a word, then its picture.',
  columns: ['Word', 'Picture'],
  pairs: [
    { id: 'clean', en: 'clean', es: 'limpio', Picture: Clean },
    { id: 'dirty', en: 'dirty', es: 'sucio', Picture: Dirty },
    { id: 'new', en: 'new', es: 'nuevo', Picture: New },
    { id: 'old', en: 'old', es: 'viejo', Picture: Old },
    { id: 'hat', en: 'hat', es: 'gorro', Picture: Hat },
    { id: 'scarf', en: 'scarf', es: 'bufanda', Picture: Scarf },
  ],
  more: [
    {
      title: 'Match the words',
      type: 'match',
      instructions: 'Tap a word in English, then the same word in Spanish.',
      pairs: [
        { id: 'clean', en: 'clean', es: 'limpio' },
        { id: 'dirty', en: 'dirty', es: 'sucio' },
        { id: 'new', en: 'new', es: 'nuevo' },
        { id: 'old', en: 'old', es: 'viejo' },
        { id: 'hat', en: 'hat', es: 'gorro' },
        { id: 'scarf', en: 'scarf', es: 'bufanda' },
      ],
    },
    {
      title: 'Is or are?',
      type: 'quiz',
      instructions: 'One thing is, two or more things are. Trousers, jeans and trainers are!',
      questions: [
        { prompt: 'My hat … new.', say: false, choices: ['is', 'are'], answer: 'is' },
        { prompt: 'My trousers … old.', say: false, choices: ['is', 'are'], answer: 'are' },
        { prompt: 'My dress … dirty.', say: false, choices: ['is', 'are'], answer: 'is' },
        { prompt: 'My trainers … new.', say: false, choices: ['is', 'are'], answer: 'are' },
        { prompt: 'My skirt … clean.', say: false, choices: ['is', 'are'], answer: 'is' },
        { prompt: 'My jeans … clean.', say: false, choices: ['is', 'are'], answer: 'are' },
        { prompt: 'My T-shirt … dirty.', say: false, choices: ['is', 'are'], answer: 'is' },
      ],
    },
    {
      title: 'What’s it like?',
      type: 'quiz',
      instructions: 'Read and choose the right sentence.',
      questions: [
        {
          prompt: '«Mi vestido está sucio.»',
          say: false,
          choices: ['My dress is dirty.', 'My dress is clean.', 'My dress are dirty.'],
          answer: 'My dress is dirty.',
        },
        {
          prompt: '«Mis zapatillas son nuevas.»',
          say: false,
          choices: ['My trainers are old.', 'My trainers are new.', 'My trainers is new.'],
          answer: 'My trainers are new.',
        },
        {
          prompt: '«Mi gorro es viejo.»',
          say: false,
          choices: ['My hat is old.', 'My hat is new.', 'My hat are old.'],
          answer: 'My hat is old.',
        },
        {
          prompt: '«Mis pantalones están limpios.»',
          say: false,
          choices: ['My trousers are dirty.', 'My trousers is clean.', 'My trousers are clean.'],
          answer: 'My trousers are clean.',
        },
        {
          prompt: 'The opposite of clean is…',
          choices: ['dirty', 'new', 'old'],
          answer: 'dirty',
        },
        {
          prompt: 'The opposite of new is…',
          choices: ['clean', 'old', 'dirty'],
          answer: 'old',
        },
      ],
    },
    {
      title: 'Make the sentence',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'Mi gorro es nuevo.', answer: ['My', 'hat', 'is', 'new.'] },
        { prompt: 'Mis pantalones son viejos.', answer: ['My', 'trousers', 'are', 'old.'] },
        { prompt: 'Mi falda está limpia.', answer: ['My', 'skirt', 'is', 'clean.'] },
        { prompt: 'Mis vaqueros están sucios.', answer: ['My', 'jeans', 'are', 'dirty.'] },
        { prompt: 'Esta es mi camiseta favorita.', answer: ['This', 'is', 'my', 'favourite', 'T-shirt.'] },
      ],
    },
  ],
};

export default newAndOld;
