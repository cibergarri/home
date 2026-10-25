// English, unit 1: the study guide's review, "Repaso sin mirar", with its answers.
const review = {
  slug: 'review',
  title: 'Review',
  heading: 'A. Write it in English',
  type: 'match',
  instructions: 'Tap a word in English, then the same word in Spanish.',
  pairs: [
    { id: 'monday', en: 'Monday', es: 'Lunes' },
    { id: 'friday', en: 'Friday', es: 'Viernes' },
    { id: 'dining-room', en: 'dining room', es: 'Comedor' },
    { id: 'behind', en: 'behind', es: 'Detrás de' },
    { id: 'library', en: 'library', es: 'Biblioteca' },
    { id: 'playground', en: 'playground', es: 'Patio' },
    { id: 'corridor', en: 'corridor', es: 'Pasillo' },
    { id: 'next-to', en: 'next to', es: 'Al lado de' },
  ],
  more: [
    {
      title: 'B and C. Choose the right one',
      type: 'quiz',
      instructions: 'Choose the right answer.',
      questions: [
        {
          prompt: 'Daisy es una niña: … in the classroom.', say: false, choices: ['He’s', 'She’s'], answer: 'She’s',
        },
        {
          prompt: 'Toby es un niño: … in the playground.', say: false, choices: ['He’s', 'She’s'], answer: 'He’s',
        },
        {
          prompt: '«Entre» es…', say: false, choices: ['between', 'behind'], answer: 'between',
        },
        {
          prompt: '«Delante de» es…', say: false, choices: ['next to', 'in front of'], answer: 'in front of',
        },
        {
          prompt: '«No está» es…', say: false, choices: ['isn’t', 'is'], answer: 'isn’t',
        },
        {
          prompt: '«Levanta la mano» es…', say: false, choices: ['Line up.', 'Put your hand up.'], answer: 'Put your hand up.',
        },
      ],
    },
    {
      title: 'D. Put the words in order',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'in / He’s / gym / the', answer: ['He’s', 'in', 'the', 'gym.'] },
        { prompt: 'is / favourite / Sunday / My / day', answer: ['My', 'favourite', 'day', 'is', 'Sunday.'] },
        { prompt: 'the / behind / She’s / chair', answer: ['She’s', 'behind', 'the', 'chair.'] },
      ],
    },
    {
      title: 'E. Answer in English',
      type: 'quiz',
      instructions: 'Read and choose the right answer.',
      questions: [
        {
          prompt: 'Where’s Sam?',
          hint: 'Sam está en el gimnasio.',
          choices: ['She’s in the gym.', 'He’s in the gym.', 'He’s in the library.'],
          answer: 'He’s in the gym.',
        },
        {
          prompt: 'Is Daisy next to the bin?',
          hint: 'Daisy está al lado de la papelera.',
          choices: ['Yes, she is.', 'No, she isn’t.', 'Yes, he is.'],
          answer: 'Yes, she is.',
        },
        {
          prompt: 'Is Toby in the library?',
          hint: 'Toby está en el patio.',
          choices: ['Yes, he is.', 'No, he isn’t.', 'No, she isn’t.'],
          answer: 'No, he isn’t.',
        },
      ],
    },
    {
      title: 'F and G. Rules and games',
      type: 'quiz',
      instructions: 'Choose the rule or the game in English.',
      questions: [
        {
          prompt: 'Lávate las manos.', say: false, choices: ['Line up.', 'Wash your hands.', 'Play nicely.'], answer: 'Wash your hands.',
        },
        {
          prompt: 'Escucha a los demás.', say: false, choices: ['Listen to others.', 'Put your hand up.', 'Line up.'], answer: 'Listen to others.',
        },
        {
          prompt: 'Ponte en fila.', say: false, choices: ['Wash your hands.', 'Listen to others.', 'Line up.'], answer: 'Line up.',
        },
        {
          prompt: 'El escondite', say: false, choices: ['hopscotch', 'hide-and-seek', 'catch'], answer: 'hide-and-seek',
        },
        {
          prompt: 'La rayuela', say: false, choices: ['hopscotch', 'monster tag', 'catch'], answer: 'hopscotch',
        },
        {
          prompt: 'Lanzarse y atrapar una pelota', say: false, choices: ['hide-and-seek', 'hopscotch', 'catch'], answer: 'catch',
        },
      ],
    },
  ],
};

export default review;
