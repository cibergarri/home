import {
  Dress, Jeans, TShirt, Trainers, Jacket, Scarf, Sunglasses,
} from '../../../drawings/Clothes';

const picture = Drawing => ({ Drawing, width: 160, height: 110 });

// English, unit 3: review of the whole unit (Lesson 8 and the fashion show project), "Why do we
// wear clothes?"
const review = {
  slug: 'review',
  title: 'Review: Why do we wear clothes?',
  heading: 'A. What is it?',
  type: 'quiz',
  instructions: 'Look at the picture and choose the word.',
  questions: [
    { prompt: 'What is it?', scene: picture(Dress), say: false, choices: ['dress', 'skirt', 'jacket'], answer: 'dress' },
    { prompt: 'What is it?', scene: picture(Jeans), say: false, choices: ['trousers', 'jeans', 'trainers'], answer: 'jeans' },
    { prompt: 'What is it?', scene: picture(TShirt), say: false, choices: ['T-shirt', 'sweater', 'scarf'], answer: 'T-shirt' },
    { prompt: 'What is it?', scene: picture(Trainers), say: false, choices: ['boots', 'shoes', 'trainers'], answer: 'trainers' },
    { prompt: 'What is it?', scene: picture(Jacket), say: false, choices: ['jacket', 'dress', 'jeans'], answer: 'jacket' },
    { prompt: 'What is it?', scene: picture(Scarf), say: false, choices: ['hat', 'scarf', 'skirt'], answer: 'scarf' },
    { prompt: 'What is it?', scene: picture(Sunglasses), say: false, choices: ['sunhat', 'sunglasses', 'glasses'], answer: 'sunglasses' },
  ],
  more: [
    {
      title: 'B. Write the words',
      type: 'letters',
      write: true,
      instructions: 'Write the letters that are missing, one at a time, and tap ✓.',
      words: [
        { clue: 'sucio', word: 'dirty', shown: 'd_rt_' },
        { clue: 'limpio', word: 'clean', shown: 'cl_a_' },
        { clue: 'nuevo', word: 'new', shown: 'n_w' },
        { clue: 'viejo', word: 'old', shown: 'o_d' },
        { clue: '👗 un vestido', word: 'dress', shown: '_re_s' },
        { clue: 'una falda', word: 'skirt', shown: 's_ir_' },
        { clue: 'unos pantalones', word: 'trousers', shown: 't_ou_er_' },
      ],
    },
    {
      title: 'C. Choose the right one',
      type: 'quiz',
      instructions: 'Read and choose the right answer.',
      questions: [
        {
          prompt: '«Mi camiseta está limpia.»', say: false, choices: ['My T-shirt is clean.', 'My T-shirt is dirty.', 'My T-shirt are clean.'], answer: 'My T-shirt is clean.',
        },
        {
          prompt: '«Mis zapatillas están sucias.»', say: false, choices: ['My trainers are clean.', 'My trainers is dirty.', 'My trainers are dirty.'], answer: 'My trainers are dirty.',
        },
        {
          prompt: '«Mi gorro es nuevo.»', say: false, choices: ['My hat is new.', 'My hat are new.', 'My hat is old.'], answer: 'My hat is new.',
        },
        {
          prompt: '«¿Qué llevas puesto?»', say: false, choices: ['What are you wearing?', 'Where are you?', 'What’s your name?'], answer: 'What are you wearing?',
        },
        {
          prompt: '🥶 It’s cold!', choices: ['Put on your sweater.', 'Take off your sweater.'], answer: 'Put on your sweater.',
        },
        {
          prompt: 'In the story, what’s under the scarecrow’s hat?', choices: ['A bird.', 'A rabbit.', 'A scarf.'], answer: 'A bird.',
        },
      ],
    },
    {
      title: 'D. A fashion show',
      type: 'build',
      instructions: 'Tap the words in the right order, as in a fashion show.',
      puzzles: [
        { prompt: 'Es verano. Llevo puesta una camiseta amarilla y zapatillas azules.', answer: ['It’s', 'summer.', 'I’m', 'wearing', 'a', 'yellow', 'T-shirt', 'and', 'blue', 'trainers.'] },
        { prompt: 'Es invierno. Llevo puestos un jersey rojo y unas botas.', answer: ['It’s', 'winter.', 'I’m', 'wearing', 'a', 'red', 'sweater', 'and', 'boots.'] },
        { prompt: 'Mi vestido es nuevo.', answer: ['My', 'dress', 'is', 'new.'] },
        { prompt: 'Mis vaqueros son viejos.', answer: ['My', 'jeans', 'are', 'old.'] },
      ],
    },
  ],
};

export default review;
