// Naturales, tema 3: los mamíferos y las aves. Los mamíferos son vivíparos, tienen pelo y dientes y
// maman; las aves son ovíparas, tienen plumas, pico, dos alas y dos patas.
const mamiferosAves = {
  slug: 'mamiferos-aves',
  title: 'Los mamíferos y las aves',
  heading: '¿Mamífero o ave?',
  type: 'join',
  instructions: 'Como en la página 45: toca una característica y únela a su grupo de animales.',
  left: [
    { id: 'mamiferos', text: 'Mamíferos' },
    { id: 'aves', text: 'Aves' },
  ],
  right: [
    { id: 'pelo', text: 'Tienen pelo.', to: 'mamiferos' },
    { id: 'dientes', text: 'Tienen dientes.', to: 'mamiferos' },
    { id: 'vientre', text: 'Nacen del vientre de sus madres.', to: 'mamiferos' },
    { id: 'maman', text: 'Maman al nacer.', to: 'mamiferos' },
    { id: 'plumas', text: 'Tienen plumas.', to: 'aves' },
    { id: 'pico', text: 'Tienen pico.', to: 'aves' },
    { id: 'huevos', text: 'Nacen de huevos.', to: 'aves' },
    { id: 'alas', text: 'Tienen dos alas.', to: 'aves' },
  ],
  more: [
    {
      title: '¿Es un ave o un mamífero?',
      type: 'sort',
      instructions: 'Lleva cada animal a su grupo. ¡Cuidado, que algunos engañan!',
      columns: [
        { id: 'mamiferos', title: '🐶 Mamíferos', subtitle: 'Pelo, dientes, maman' },
        { id: 'aves', title: '🦅 Aves', subtitle: 'Plumas, pico, huevos' },
      ],
      cards: [
        { id: 'perro', text: '🐶 Perro', columns: ['mamiferos'] },
        { id: 'murcielago', text: '🦇 Murciélago (vuela)', columns: ['mamiferos'] },
        { id: 'delfin', text: '🐬 Delfín (nada)', columns: ['mamiferos'] },
        { id: 'ballena', text: '🐋 Ballena', columns: ['mamiferos'] },
        { id: 'aguila', text: '🦅 Águila', columns: ['aves'] },
        { id: 'buho', text: '🦉 Búho', columns: ['aves'] },
        { id: 'pinguino', text: '🐧 Pingüino (no vuela)', columns: ['aves'] },
        { id: 'avestruz', text: '🦤 Avestruz (no vuela)', columns: ['aves'] },
      ],
    },
    {
      title: 'Mamíferos y aves',
      type: 'quiz',
      instructions: 'Lee y elige la respuesta correcta.',
      questions: [
        { prompt: 'Los animales que nacen del vientre de sus madres son…', choices: ['vivíparos', 'ovíparos'], answer: 'vivíparos' },
        { prompt: 'Los animales que nacen de huevos son…', choices: ['ovíparos', 'vivíparos'], answer: 'ovíparos' },
        { prompt: 'Las madres mamíferas producen leche en…', choices: ['sus mamas', 'su pico'], answer: 'sus mamas' },
        { prompt: 'La mayoría de los mamíferos tienen…', choices: ['cuatro patas', 'dos patas'], answer: 'cuatro patas' },
        { prompt: 'Las ballenas y los delfines usan para desplazarse sus…', choices: ['aletas', 'patas', 'alas'], answer: 'aletas' },
        { prompt: 'Los únicos mamíferos que tienen alas son…', choices: ['los murciélagos', 'los pingüinos', 'los delfines'], answer: 'los murciélagos' },
        { prompt: 'El cuerpo de las aves está cubierto de plumas, excepto en…', choices: ['las patas', 'las alas'], answer: 'las patas' },
        { prompt: 'Las aves tienen dos patas para…', choices: ['andar o nadar', 'mamar'], answer: 'andar o nadar' },
      ],
    },
    {
      title: '¿Y los seres humanos?',
      type: 'quiz',
      instructions: 'Como en la página 45: ¿a qué grupo de vertebrados pertenecemos los seres humanos?',
      questions: [
        { prompt: '¿Cómo nacemos?', choices: ['Del vientre de nuestra madre', 'De un huevo'], answer: 'Del vientre de nuestra madre' },
        { prompt: '¿Los bebés maman después de nacer?', choices: ['Sí', 'No'], answer: 'Sí' },
        { prompt: '¿Tenemos dientes?', choices: ['Sí', 'No'], answer: 'Sí' },
        { prompt: '¿De qué está cubierto nuestro cuerpo?', choices: ['De pelo', 'De plumas', 'De escamas'], answer: 'De pelo' },
        { prompt: 'Entonces, los seres humanos somos…', choices: ['mamíferos', 'aves', 'reptiles'], answer: 'mamíferos' },
      ],
    },
  ],
};

export default mamiferosAves;
