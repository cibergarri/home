// English, unit 5: the story "Fun at camp", with questions about it, and taking turns.
const funAtCamp = {
  slug: 'fun-at-camp',
  title: 'Story: Fun at camp',
  heading: 'What happens in the story?',
  type: 'quiz',
  instructions: 'Remember the story “Fun at camp” and choose the right answer.',
  questions: [
    {
      prompt: 'Where are the children?',
      choices: ['At camp.', 'At school.', 'At the beach.'],
      answer: 'At camp.',
    },
    {
      prompt: 'What’s the big new ball?',
      choices: ['It’s a basketball.', 'It’s a zorb ball.', 'It’s a volleyball.'],
      answer: 'It’s a zorb ball.',
    },
    {
      prompt: 'What do the children want to try?',
      choices: ['The boat.', 'The tree.', 'The zorb ball.'],
      answer: 'The zorb ball.',
    },
    {
      prompt: '“I can’t stop the …!”',
      choices: ['ball', 'boat', 'tree'],
      answer: 'boat',
    },
    {
      prompt: '“Can you help me, please?”',
      choices: ['Yes, I can.', 'Yes, please.', 'It’s a zorb ball.'],
      answer: 'Yes, I can.',
    },
    {
      prompt: '“Whose turn is it now?”',
      choices: ['It’s your turn, Grace.', 'I want to sail a boat.', 'No, thank you.'],
      answer: 'It’s your turn, Grace.',
    },
    {
      prompt: '¿Qué es importante cuando jugamos?',
      say: false,
      choices: ['Take turns.', 'Shout.', 'Play alone.'],
      answer: 'Take turns.',
    },
  ],
  more: [
    {
      title: 'Want or don’t want?',
      type: 'quiz',
      instructions: 'Remember what the children say in the story.',
      questions: [
        {
          prompt: '“I … try the zorb ball!”',
          choices: ['want to', 'don’t want to'],
          answer: 'want to',
        },
        {
          prompt: '“I … play volleyball. I want to try the zorb ball.”',
          choices: ['want to', 'don’t want to'],
          answer: 'don’t want to',
        },
        {
          prompt: '“I … swim. I want to try the zorb ball!”',
          choices: ['want to', 'don’t want to'],
          answer: 'don’t want to',
        },
        {
          prompt: '“I … sail a boat.”',
          choices: ['want to', 'don’t want to'],
          answer: 'want to',
        },
      ],
    },
    {
      title: 'Phrases from the story',
      type: 'match',
      instructions: 'Tap a phrase in English, then the same phrase in Spanish.',
      pairs: [
        { id: 'whats-that', en: 'What’s that?', es: '¿Qué es eso?' },
        { id: 'try', en: 'I want to try the zorb ball!', es: '¡Quiero probar la bola zorb!' },
        { id: 'stop', en: 'I can’t stop the boat!', es: '¡No puedo parar el barco!' },
        { id: 'my-turn', en: 'But it’s my turn.', es: 'Pero es mi turno.' },
        { id: 'help', en: 'Can you help me, please?', es: '¿Me ayudas, por favor?' },
        { id: 'whose', en: 'Whose turn is it now?', es: '¿De quién es el turno ahora?' },
      ],
    },
    {
      title: 'In order',
      type: 'build',
      instructions: 'Tap what happens in the story, in the right order.',
      puzzles: [
        {
          prompt: 'What happens first? And then?',
          answer: ['The children are at camp.', 'They see a zorb ball.', 'They all want to try it.', 'They take turns.'],
        },
      ],
    },
    {
      title: 'Take turns',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: 'Es importante respetar los turnos cuando jugamos.', answer: ['It’s', 'important', 'to', 'take', 'turns', 'when', 'you', 'play.'] },
        { prompt: 'Respeto los turnos en el parque.', answer: ['I', 'take', 'turns', 'at', 'the', 'park.'] },
        { prompt: 'Respeto los turnos en clase.', answer: ['I', 'take', 'turns', 'in', 'the', 'classroom.'] },
        { prompt: 'Respeto los turnos en casa.', answer: ['I', 'take', 'turns', 'at', 'home.'] },
      ],
    },
  ],
};

export default funAtCamp;
