// English, welcome: questions about the story "A magical surprise", and doing nice things for others.
const story = {
  slug: 'story',
  title: 'Story: A magical surprise',
  heading: 'What happens?',
  type: 'quiz',
  instructions: 'Think about the story "A magical surprise" and choose the right answer.',
  questions: [
    {
      prompt: '🎂 Whose birthday is it?',
      choices: ['It’s Mum’s birthday.', 'It’s Dad’s birthday.', 'It’s Toby’s birthday.'],
      answer: 'It’s Mum’s birthday.',
    },
    {
      prompt: '🖌️ What do the children paint?',
      choices: ['A house.', 'The van.', 'A rocket.'],
      answer: 'The van.',
    },
    {
      prompt: '🚀 What does Toby like?',
      choices: ['He likes rockets.', 'He likes stars.', 'He likes cars.'],
      answer: 'He likes rockets.',
    },
    {
      prompt: '🔎 What can’t they find?',
      choices: ['The van.', 'The paintbrush.', 'Mum.'],
      answer: 'The paintbrush.',
    },
    {
      prompt: '😀 Does Mum like the van?',
      choices: ['Yes, she loves it!', 'No, she doesn’t like it.'],
      answer: 'Yes, she loves it!',
    },
    {
      prompt: '🙂 How does Mum feel?',
      choices: ['Happy.', 'Sad.', 'Angry.'],
      answer: 'Happy.',
    },
    {
      prompt: '🎁 What’s the surprise?',
      choices: ['A painted van for Mum.', 'A cake for Dad.', 'A new school.'],
      answer: 'A painted van for Mum.',
    },
  ],
  more: [
    {
      title: 'Nice things for others',
      type: 'quiz',
      instructions: 'It’s good to do nice things for others. Choose the nice thing.',
      questions: [
        {
          prompt: '👨‍👩‍👧 Which is a nice thing to do?',
          choices: ['I help my family.', 'I shout at my family.'],
          answer: 'I help my family.',
        },
        {
          prompt: '🎁 Which is a nice thing to do on a birthday?',
          choices: ['I give a present.', 'I take the cake.'],
          answer: 'I give a present.',
        },
        {
          prompt: '🧒 Which is a nice thing to do with your cousin?',
          choices: ['I don’t talk to my cousin.', 'I play with my cousin.'],
          answer: 'I play with my cousin.',
        },
        {
          prompt: '🧹 Which is a nice thing to do at home?',
          choices: ['I tidy up my toys.', 'I break my sister’s toys.'],
          answer: 'I tidy up my toys.',
        },
      ],
    },
    {
      title: 'Put the story in order',
      type: 'build',
      instructions: 'Tap what happens first, then next, and so on.',
      puzzles: [
        {
          prompt: 'What happens first?',
          answer: ['It’s Mum’s birthday.', 'The children paint the van.', 'Mum sees the van.', 'Mum loves it!'],
        },
        {
          prompt: 'What does Mum say?',
          hint: '¡Me encanta!',
          answer: ['I', 'love', 'it!'],
        },
        {
          prompt: 'Let’s… the van.',
          hint: 'Vamos a pintar la furgoneta.',
          answer: ['Let’s', 'paint', 'the', 'van.'],
        },
      ],
    },
  ],
};

export default story;
