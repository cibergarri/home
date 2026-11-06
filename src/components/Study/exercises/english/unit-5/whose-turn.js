// English, unit 5: the sound /tr/ with its tongue twister, and "Whose turn is it?".
const whoseTurn = {
  slug: 'whose-turn',
  title: 'Tr… and Whose turn is it?',
  heading: 'Words with tr',
  type: 'quiz',
  instructions: 'Look at the picture and choose the word with the letters “tr”.',
  questions: [
    { prompt: '🌳', say: false, choices: ['tree', 'three', 'sea'], answer: 'tree' },
    { prompt: '🤸', say: false, choices: ['swing', 'trapeze', 'slide'], answer: 'trapeze' },
    { prompt: '🚆', say: false, choices: ['bus', 'car', 'train'], answer: 'train' },
    { prompt: '👖', say: false, choices: ['trousers', 'jeans', 'skirt'], answer: 'trousers' },
    { prompt: '👟', say: false, choices: ['shoes', 'trainers', 'socks'], answer: 'trainers' },
    { prompt: '🟢 I want to … the zorb ball!', choices: ['turn', 'try', 'take'], answer: 'try' },
  ],
  more: [
    {
      title: 'The tongue twister',
      type: 'build',
      instructions: 'Tap the words in the right order, then say it fast!',
      puzzles: [
        {
          prompt: 'Respeta los turnos para probar el trapecio del árbol.',
          answer: ['Take', 'turns', 'to', 'try', 'the', 'trapeze', 'in', 'the', 'tree.'],
        },
      ],
    },
    {
      title: 'My turn, your turn',
      type: 'quiz',
      instructions: 'Choose “my” or “your”.',
      questions: [
        {
          prompt: '👉🧒 You play now. It’s … turn.', choices: ['my', 'your'], answer: 'your',
        },
        {
          prompt: '🙋 I play now. It’s … turn.', choices: ['my', 'your'], answer: 'my',
        },
        {
          prompt: '«Es mi turno» es…', say: false, choices: ['It’s my turn.', 'It’s your turn.'], answer: 'It’s my turn.',
        },
        {
          prompt: '«Es tu turno» es…', say: false, choices: ['It’s my turn.', 'It’s your turn.'], answer: 'It’s your turn.',
        },
        {
          prompt: '«¿De quién es el turno?» es…', say: false, choices: ['Whose turn is it?', 'What’s that?', 'What about you?'], answer: 'Whose turn is it?',
        },
      ],
    },
    {
      title: 'Ask and answer',
      type: 'build',
      instructions: 'Tap the words in the right order.',
      puzzles: [
        { prompt: '¿De quién es el turno?', answer: ['Whose', 'turn', 'is', 'it?'] },
        { prompt: 'Es mi turno.', answer: ['It’s', 'my', 'turn.'] },
        { prompt: 'Es tu turno, Grace.', answer: ['It’s', 'your', 'turn,', 'Grace.'] },
      ],
    },
  ],
};

export default whoseTurn;
