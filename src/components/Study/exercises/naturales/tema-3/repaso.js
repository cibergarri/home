// Naturales, tema 3: comprueba tu progreso. Las características de cada grupo de vertebrados, y lo
// que tienen en común todos los invertebrados.
const repaso = {
  slug: 'repaso',
  title: 'Comprueba tu progreso',
  heading: 'Los grupos de vertebrados',
  type: 'join',
  instructions: 'Como en la página 55: toca una característica y únela a su grupo de vertebrados.',
  left: [
    { id: 'reptiles', text: 'Reptiles' },
    { id: 'mamiferos', text: 'Mamíferos' },
    { id: 'peces', text: 'Peces' },
    { id: 'anfibios', text: 'Anfibios' },
    { id: 'aves', text: 'Aves' },
  ],
  right: [
    { id: 'escamas-patas', text: 'Escamas o caparazón, y cuatro patas o ninguna.', to: 'reptiles' },
    { id: 'pelo', text: 'Pelo; nacen del vientre de su madre y maman.', to: 'mamiferos' },
    { id: 'aletas', text: 'Aletas y escamas; respiran con branquias.', to: 'peces' },
    { id: 'piel', text: 'Piel desnuda; viven cerca del agua.', to: 'anfibios' },
    { id: 'plumas', text: 'Plumas, pico, dos alas y dos patas.', to: 'aves' },
  ],
  more: [
    {
      title: '¿Qué has aprendido?',
      type: 'quiz',
      instructions: 'Lee y elige la respuesta correcta.',
      questions: [
        { prompt: '¿Qué tienen en común todos los animales invertebrados?', choices: ['No tienen huesos', 'No tienen alas', 'Tienen antenas'], answer: 'No tienen huesos' },
        { prompt: 'El oso es…', choices: ['un mamífero', 'un reptil'], answer: 'un mamífero' },
        { prompt: 'La iguana es…', choices: ['un reptil', 'un anfibio'], answer: 'un reptil' },
        { prompt: 'El búho es…', choices: ['un ave', 'un mamífero'], answer: 'un ave' },
        { prompt: 'La rana es…', choices: ['un anfibio', 'un pez'], answer: 'un anfibio' },
        { prompt: 'El sargo es…', choices: ['un pez', 'un anfibio'], answer: 'un pez' },
        { prompt: 'El lugar donde vive un animal se llama…', choices: ['hábitat', 'esqueleto', 'clave'], answer: 'hábitat' },
        { prompt: '¿Cuál de estos grupos es vivíparo?', choices: ['Los mamíferos', 'Las aves', 'Los peces'], answer: 'Los mamíferos' },
      ],
    },
  ],
};

export default repaso;
