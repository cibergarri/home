// English, unit 4: He’s / She’s got (short hair). He / She hasn’t got (a beard).
const hesGot = {
  slug: 'hes-got',
  title: 'He’s got, she’s got',
  heading: 'Look and choose',
  type: 'quiz',
  instructions: 'Read about each person and choose the right sentence. A boy or a man is he, a girl or a woman is she.',
  questions: [
    {
      prompt: '👧 Lucy: long hair',
      choices: ['She’s got long hair.', 'He’s got long hair.', 'She hasn’t got long hair.'],
      answer: 'She’s got long hair.',
    },
    {
      prompt: '👦 Tom: short hair',
      choices: ['She’s got short hair.', 'He’s got short hair.', 'He’s got long hair.'],
      answer: 'He’s got short hair.',
    },
    {
      prompt: '🧔 Grandad: a beard',
      choices: ['He hasn’t got a beard.', 'She’s got a beard.', 'He’s got a beard.'],
      answer: 'He’s got a beard.',
    },
    {
      prompt: '👦 Sam: no moustache',
      choices: ['He hasn’t got a moustache.', 'He’s got a moustache.', 'She hasn’t got a moustache.'],
      answer: 'He hasn’t got a moustache.',
    },
    {
      prompt: '👩‍🦱 Mum: curly hair',
      choices: ['She’s got straight hair.', 'She’s got curly hair.', 'He’s got curly hair.'],
      answer: 'She’s got curly hair.',
    },
    {
      prompt: '👱‍♀️ Jill: fair hair, not dark hair',
      choices: ['She hasn’t got fair hair.', 'She’s got dark hair.', 'She hasn’t got dark hair.'],
      answer: 'She hasn’t got dark hair.',
    },
    {
      prompt: '«Él tiene el pelo liso.»',
      say: false,
      choices: ['He’s got straight hair.', 'He’s got curly hair.', 'She’s got straight hair.'],
      answer: 'He’s got straight hair.',
    },
    {
      prompt: '«Ella no tiene el pelo corto.»',
      say: false,
      choices: ['She’s got short hair.', 'She hasn’t got short hair.', 'He hasn’t got short hair.'],
      answer: 'She hasn’t got short hair.',
    },
  ],
  more: [
    {
      title: 'Make the sentence',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'Ella tiene el pelo largo.', answer: ['She’s', 'got', 'long', 'hair.'] },
        { prompt: 'Él tiene el pelo corto.', answer: ['He’s', 'got', 'short', 'hair.'] },
        { prompt: 'Él no tiene barba.', answer: ['He', 'hasn’t', 'got', 'a', 'beard.'] },
        { prompt: 'Ella no tiene el pelo rizado.', answer: ['She', 'hasn’t', 'got', 'curly', 'hair.'] },
        { prompt: 'Mi amiga tiene el pelo oscuro y los ojos azules.', answer: ['My', 'friend’s', 'got', 'dark', 'hair', 'and', 'blue', 'eyes.'] },
      ],
    },
    {
      title: 'Is it Lucy or Tom?',
      type: 'quiz',
      instructions: 'Lucy has got long, fair hair. Tom has got short, straight hair. Read and answer.',
      questions: [
        {
          prompt: 'She’s got long hair. Is it Lucy?',
          choices: ['Yes, it is.', 'No, it isn’t.'],
          answer: 'Yes, it is.',
        },
        {
          prompt: 'He’s got curly hair. Is it Tom?',
          choices: ['Yes, it is.', 'No, it isn’t.'],
          answer: 'No, it isn’t.',
        },
        {
          prompt: 'She’s got short, dark hair. Is it Lucy?',
          choices: ['Yes, it is.', 'No, it isn’t.'],
          answer: 'No, it isn’t.',
        },
        {
          prompt: 'He’s got short, straight hair. Is it Tom?',
          choices: ['Yes, it is.', 'No, it isn’t.'],
          answer: 'Yes, it is.',
        },
      ],
    },
  ],
};

export default hesGot;
