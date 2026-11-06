// English, Review 2 (units 3 and 4): the story "The sun and the wind", the Review Race, the
// dominoes and the picture dictionary, with unit 4's own review.
const review = {
  slug: 'review',
  title: 'Review 2',
  heading: 'A. The sun and the wind',
  type: 'quiz',
  instructions: 'Think about the rhyming story and choose the right answer.',
  questions: [
    {
      prompt: '☀️ Is the sun hot or cold?',
      say: 'Is the sun hot or cold?',
      choices: ['The sun is hot.', 'The sun is cold.'],
      answer: 'The sun is hot.',
    },
    {
      prompt: '🌬️ Is the wind hot or cold?',
      say: 'Is the wind hot or cold?',
      choices: ['The wind is hot.', 'The wind is cold.'],
      answer: 'The wind is cold.',
    },
    {
      prompt: 'What does the wind blow on the sea?',
      choices: ['The boats.', 'The trees.', 'The hats.'],
      answer: 'The boats.',
    },
    {
      prompt: 'Who can take off the man’s coat?',
      choices: ['The wind.', 'The sun.'],
      answer: 'The sun.',
    },
    {
      prompt: 'Where is the sun?',
      choices: ['In the sea.', 'In the sky.', 'In the house.'],
      answer: 'In the sky.',
    },
    {
      prompt: 'What does the story teach us?',
      choices: ['It’s good to be calm and quiet.', 'It’s good to be cold.', 'It’s good to shout.'],
      answer: 'It’s good to be calm and quiet.',
    },
  ],
  more: [
    {
      title: 'B. Picture dictionary',
      type: 'letters',
      write: true,
      instructions: 'Write the letters that are missing, one at a time, and tap ✓.',
      words: [
        { clue: '👗', word: 'dress', shown: 'd_e_s' },
        { clue: '🧥', word: 'jacket', shown: 'ja_ke_' },
        { clue: 'un jersey', word: 'sweater', shown: 's_eat_r' },
        { clue: '👖', word: 'jeans', shown: 'je_n_' },
        { clue: '🧔', word: 'beard', shown: 'be_r_' },
        { clue: 'bigote', word: 'moustache', shown: 'mo_sta_he' },
        { clue: '👑', word: 'crown', shown: 'c_ow_' },
        { clue: '👓', word: 'glasses', shown: 'g_as_es' },
      ],
    },
    {
      title: 'C. Review Race',
      type: 'quiz',
      instructions: 'Read the question and choose the right answer.',
      questions: [
        {
          prompt: '👕 What are you wearing?',
          choices: ['I’m wearing a T-shirt.', 'I’m wearing a skirt.', 'I’m wearing trainers.'],
          answer: 'I’m wearing a T-shirt.',
        },
        {
          prompt: '👨 Ben: long hair. Has he got long hair?',
          say: 'Has he got long hair?',
          choices: ['Yes, he has.', 'No, he hasn’t.', 'Yes, she has.'],
          answer: 'Yes, he has.',
        },
        {
          prompt: '👩 Kate: straight hair. Has she got curly hair?',
          say: 'Has she got curly hair?',
          choices: ['Yes, she has.', 'No, she hasn’t.', 'No, he hasn’t.'],
          answer: 'No, she hasn’t.',
        },
        {
          prompt: '👩 Kate: no beard. Has she got a beard?',
          say: 'Has she got a beard?',
          choices: ['Yes, she has.', 'No, she hasn’t.'],
          answer: 'No, she hasn’t.',
        },
        {
          prompt: '🧔 Ben: a moustache. Has he got a moustache?',
          say: 'Has he got a moustache?',
          choices: ['Yes, he has.', 'No, he hasn’t.'],
          answer: 'Yes, he has.',
        },
        {
          prompt: 'My dress … new.',
          say: false,
          choices: ['is', 'are'],
          answer: 'is',
        },
        {
          prompt: 'My trainers … dirty.',
          say: false,
          choices: ['is', 'are'],
          answer: 'are',
        },
      ],
    },
    {
      title: 'D. Dominoes',
      type: 'match',
      instructions: 'Tap a sentence, then the picture that goes with it.',
      pairs: [
        { id: 'long', en: 'She’s got long hair.', es: '👩 pelo largo' },
        { id: 'trainers', en: 'I’m wearing trainers.', es: '👟' },
        { id: 'moustache', en: 'He’s got a moustache.', es: '👨 bigote' },
        { id: 'sweater', en: 'I’m wearing a sweater.', es: 'jersey' },
        { id: 'curly', en: 'She’s got curly hair.', es: '👩‍🦱' },
        { id: 'dress', en: 'I’m wearing a dress.', es: '👗' },
        { id: 'crown', en: 'She’s got a crown and a necklace.', es: '👸 👑 📿' },
        { id: 'glasses', en: 'He’s got glasses.', es: '👓' },
      ],
    },
    {
      title: 'E. Put the words in order',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'wearing / I’m / jacket / a', answer: ['I’m', 'wearing', 'a', 'jacket.'] },
        { prompt: 'got / hair / She’s / straight', answer: ['She’s', 'got', 'straight', 'hair.'] },
        { prompt: 'hasn’t / a / He / beard / got', answer: ['He', 'hasn’t', 'got', 'a', 'beard.'] },
        { prompt: 'he / Has / wig / got / a', answer: ['Has', 'he', 'got', 'a', 'wig?'] },
        { prompt: 'are / My / old / trousers', answer: ['My', 'trousers', 'are', 'old.'] },
      ],
    },
  ],
};

export default review;
