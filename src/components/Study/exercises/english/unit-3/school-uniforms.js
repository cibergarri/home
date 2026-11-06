// English, unit 3 (culture): school uniforms in the UK, and the clothes we wear to school.
const schoolUniforms = {
  slug: 'school-uniforms',
  title: 'School uniforms in the UK',
  heading: 'School clothes',
  type: 'match',
  instructions: 'Many children in the UK wear a uniform to school. Tap a word in English, then the same in Spanish.',
  pairs: [
    { id: 'uniform', en: 'uniform', es: 'uniforme' },
    { id: 'pe-kit', en: 'PE kit', es: 'ropa de gimnasia' },
    { id: 'sweatshirt', en: 'sweatshirt', es: 'sudadera' },
    { id: 'apron', en: 'apron', es: 'delantal' },
    { id: 'shoes', en: 'shoes', es: 'zapatos' },
  ],
  more: [
    {
      title: 'What do you wear?',
      type: 'quiz',
      instructions: 'Read and choose the right answer.',
      questions: [
        {
          prompt: 'What do you wear in the gym?',
          choices: ['My PE kit.', 'My apron.', 'My scarf.'],
          answer: 'My PE kit.',
        },
        {
          prompt: '🎨 What do you wear to paint in class?',
          choices: ['An apron.', 'A sunhat.', 'Boots.'],
          answer: 'An apron.',
        },
        {
          prompt: '«Llevo uniforme al colegio.»',
          say: false,
          choices: ['I wear a uniform to school.', 'I wear a uniform to the beach.', 'I’m wearing a dress.'],
          answer: 'I wear a uniform to school.',
        },
        {
          prompt: 'Which one is warm for school in winter?',
          choices: ['A T-shirt.', 'A sweatshirt.', 'Sunglasses.'],
          answer: 'A sweatshirt.',
        },
      ],
    },
    {
      title: 'Make the sentence',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'Llevo uniforme al colegio.', answer: ['I', 'wear', 'a', 'uniform', 'to', 'school.'] },
        { prompt: 'Llevo una sudadera, vaqueros y zapatillas al colegio.', answer: ['I', 'wear', 'a', 'sweatshirt,', 'jeans', 'and', 'trainers', 'to', 'school.'] },
        { prompt: 'Mi ropa favorita para el cole son mis vaqueros y mis zapatillas.', answer: ['My', 'favourite', 'school', 'clothes', 'are', 'my', 'jeans', 'and', 'trainers.'] },
      ],
    },
  ],
};

export default schoolUniforms;
