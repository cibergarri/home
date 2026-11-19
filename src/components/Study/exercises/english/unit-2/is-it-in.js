import { HouseRoom } from '../../../drawings/House';

// English, unit 2, Activity Book page 18: Is the (bed) in the (attic)? Yes, it is. / No, it isn’t.
// The book asks about Julia's own house; here each question lights up a room of the house in
// "Things in the house", so she looks and answers.
const yesNo = ['Yes, it is.', 'No, it isn’t.'];

const ask = (thing, room, yes) => ({
  prompt: `Is the ${thing} in the ${room}?`,
  scene: {
    Drawing: HouseRoom, width: 1000, height: 640, props: { room },
  },
  choices: yesNo,
  answer: yes ? yesNo[0] : yesNo[1],
});

const isItIn = {
  slug: 'is-it-in',
  title: 'Is the bed in the attic?',
  heading: 'Look at the house',
  type: 'quiz',
  instructions: 'Look at the room in yellow. Is it there? Choose Yes, it is. or No, it isn’t.',
  questions: [
    ask('bed', 'attic', false),
    ask('sofa', 'hall', false),
    ask('shower', 'bathroom', true),
    ask('fridge', 'garage', false),
    ask('cooker', 'kitchen', true),
    ask('bed', 'bedroom', true),
    ask('sofa', 'living room', true),
    ask('car', 'garage', true),
    ask('fridge', 'bathroom', false),
    ask('shower', 'kitchen', false),
  ],
};

export default isItIn;
