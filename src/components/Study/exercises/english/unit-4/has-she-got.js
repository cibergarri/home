import {
  Crown, Earrings, Glasses, Necklace, Wig,
} from '../../../drawings/Faces';

// English, unit 4: crown, earrings, glasses, necklace and wig, with "Has he / she got (a crown)?
// Yes, he / she has. / No, he / she hasn’t." and the game "Who’s this?"
const hasSheGot = {
  slug: 'has-she-got',
  title: 'Has she got a crown?',
  heading: 'Match the pictures',
  type: 'match',
  instructions: 'Tap a word, then its picture.',
  columns: ['Word', 'Picture'],
  pairs: [
    { id: 'crown', en: 'crown', es: 'corona', Picture: Crown },
    { id: 'earrings', en: 'earrings', es: 'pendientes', Picture: Earrings },
    { id: 'glasses', en: 'glasses', es: 'gafas', Picture: Glasses },
    { id: 'necklace', en: 'necklace', es: 'collar', Picture: Necklace },
    { id: 'wig', en: 'wig', es: 'peluca', Picture: Wig },
  ],
  more: [
    {
      title: 'Match the things',
      type: 'match',
      instructions: 'Tap a word in English, then the same in Spanish.',
      pairs: [
        { id: 'crown', en: 'crown', es: 'corona' },
        { id: 'earrings', en: 'earrings', es: 'pendientes' },
        { id: 'glasses', en: 'glasses', es: 'gafas' },
        { id: 'necklace', en: 'necklace', es: 'collar' },
        { id: 'wig', en: 'wig', es: 'peluca' },
      ],
    },
    {
      title: 'Missing letters',
      type: 'letters',
      write: true,
      instructions: 'Write the letters that are missing, one at a time, and tap ✓. Tap 🔊 to hear the word.',
      words: [
        { clue: '👑 una corona', word: 'crown', shown: 'cr_w_' },
        { clue: 'unos pendientes', word: 'earrings', shown: 'e_rr_ngs' },
        { clue: '👓 unas gafas', word: 'glasses', shown: 'gl_ss_s' },
        { clue: '📿 un collar', word: 'necklace', shown: 'n_ckl_ce' },
        { clue: 'una peluca', word: 'wig', shown: 'w_g' },
      ],
    },
    {
      title: 'Yes or no?',
      type: 'quiz',
      instructions: 'Look at what each person has got and answer the question.',
      questions: [
        {
          prompt: '👸 Sue: 👑. Has she got a crown?',
          say: 'Has she got a crown?',
          choices: ['Yes, she has.', 'No, she hasn’t.', 'Yes, he has.'],
          answer: 'Yes, she has.',
        },
        {
          prompt: '👨 David: 👓. Has he got glasses?',
          say: 'Has he got glasses?',
          choices: ['No, he hasn’t.', 'Yes, he has.', 'Yes, she has.'],
          answer: 'Yes, he has.',
        },
        {
          prompt: '👩 Alice: 📿. Has she got a wig?',
          say: 'Has she got a wig?',
          choices: ['Yes, she has.', 'No, she hasn’t.', 'No, he hasn’t.'],
          answer: 'No, she hasn’t.',
        },
        {
          prompt: '👦 Tom: 👑. Has he got earrings?',
          say: 'Has he got earrings?',
          choices: ['Yes, he has.', 'No, she hasn’t.', 'No, he hasn’t.'],
          answer: 'No, he hasn’t.',
        },
        {
          prompt: '👩 Alice: 📿. Has she got a necklace?',
          say: 'Has she got a necklace?',
          choices: ['Yes, she has.', 'No, she hasn’t.', 'Yes, he has.'],
          answer: 'Yes, she has.',
        },
        {
          prompt: '👸 Sue: 👑. Is it a man or a woman?',
          say: 'Is it a man or a woman?',
          choices: ['It’s a man.', 'It’s a woman.'],
          answer: 'It’s a woman.',
        },
      ],
    },
    {
      title: 'Ask the question',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: '¿Tiene ella una corona?', answer: ['Has', 'she', 'got', 'a', 'crown?'] },
        { prompt: '¿Tiene él gafas?', answer: ['Has', 'he', 'got', 'glasses?'] },
        { prompt: 'Sí, ella tiene.', answer: ['Yes,', 'she', 'has.'] },
        { prompt: 'No, él no tiene.', answer: ['No,', 'he', 'hasn’t.'] },
        { prompt: 'Ella tiene pendientes y un collar.', answer: ['She’s', 'got', 'earrings', 'and', 'a', 'necklace.'] },
      ],
    },
  ],
};

export default hasSheGot;
