// Naturales, tema 3: los peces, los reptiles y los anfibios, los tres ovíparos: escamas, aletas y
// branquias; escamas o caparazón; la piel desnuda; y cómo crece una rana.
const pecesReptilesAnfibios = {
  slug: 'peces-reptiles-anfibios',
  title: 'Los peces, los reptiles y los anfibios',
  heading: '¿Qué grupo es?',
  type: 'sort',
  instructions: 'Como en la página 47: fíjate en sus características y lleva cada animal a su grupo.',
  columns: [
    { id: 'peces', title: '🐟 Peces', subtitle: 'Aletas, escamas, branquias' },
    { id: 'reptiles', title: '🦎 Reptiles', subtitle: 'Escamas o caparazón' },
    { id: 'anfibios', title: '🐸 Anfibios', subtitle: 'Piel desnuda' },
  ],
  cards: [
    { id: 'trucha', text: 'Trucha', columns: ['peces'] },
    { id: 'tiburon', text: 'Tiburón', columns: ['peces'] },
    { id: 'barbo', text: 'Barbo', columns: ['peces'] },
    { id: 'cocodrilo', text: 'Cocodrilo', columns: ['reptiles'] },
    { id: 'serpiente', text: 'Serpiente', columns: ['reptiles'] },
    { id: 'tortuga', text: 'Tortuga marina', columns: ['reptiles'] },
    { id: 'lagarto', text: 'Lagarto', columns: ['reptiles'] },
    { id: 'salamandra', text: 'Salamandra', columns: ['anfibios'] },
    { id: 'rana', text: 'Rana', columns: ['anfibios'] },
    { id: 'sapo', text: 'Sapo', columns: ['anfibios'] },
  ],
  more: [
    {
      title: 'Sus características',
      type: 'join',
      instructions: 'Como en la página 47: toca una característica y únela a su grupo.',
      left: [
        { id: 'peces', text: 'Peces' },
        { id: 'reptiles', text: 'Reptiles' },
        { id: 'anfibios', text: 'Anfibios' },
      ],
      right: [
        { id: 'aletas', text: 'Tienen aletas.', to: 'peces' },
        { id: 'branquias', text: 'Respiran en el agua gracias a las branquias.', to: 'peces' },
        { id: 'caparazon', text: 'Algunos tienen caparazón, como las tortugas.', to: 'reptiles' },
        { id: 'sin-patas', text: 'Algunos no tienen patas, como las serpientes.', to: 'reptiles' },
        { id: 'piel', text: 'Tienen la piel desnuda.', to: 'anfibios' },
        { id: 'renacuajos', text: 'Sus crías son renacuajos.', to: 'anfibios' },
      ],
    },
    {
      title: '¿Cómo crece una rana?',
      type: 'quiz',
      instructions: 'Como en la página 47: ¿en qué orden ocurre?',
      questions: [
        { prompt: '¿Qué ocurre primero?', choices: ['La rana pone sus huevos en el agua.', 'Los renacuajos nacen en el agua.', 'Les salen las patas y pierden la cola.'], answer: 'La rana pone sus huevos en el agua.' },
        { prompt: '¿Qué ocurre después?', choices: ['Los renacuajos nacen en el agua y tienen una cola para nadar.', 'La rana pone sus huevos en el agua.', 'Les salen las patas y pierden la cola.'], answer: 'Los renacuajos nacen en el agua y tienen una cola para nadar.' },
        { prompt: '¿Qué ocurre al final?', choices: ['Les salen las patas y pierden la cola: ¡ya pueden vivir fuera del agua!', 'La rana pone sus huevos en el agua.', 'Los renacuajos nacen en el agua.'], answer: 'Les salen las patas y pierden la cola: ¡ya pueden vivir fuera del agua!' },
        { prompt: 'La palabra «anfibio» significa…', choices: ['ambas vidas', 'sin huesos', 'con escamas'], answer: 'ambas vidas' },
        { prompt: '¿Por qué se llaman así?', choices: ['Porque viven en el agua y fuera de ella', 'Porque tienen dos colas'], answer: 'Porque viven en el agua y fuera de ella' },
      ],
    },
    {
      title: 'Peces, reptiles y anfibios',
      type: 'quiz',
      instructions: 'Lee y elige la respuesta correcta.',
      questions: [
        { prompt: 'Los peces, los reptiles y los anfibios son…', choices: ['ovíparos', 'vivíparos'], answer: 'ovíparos' },
        { prompt: 'El cuerpo de los peces está cubierto de…', choices: ['escamas', 'pelo', 'plumas'], answer: 'escamas' },
        { prompt: 'Los peces respiran en el agua gracias a…', choices: ['las branquias', 'las aletas'], answer: 'las branquias' },
        { prompt: 'Un reptil terrestre es…', choices: ['el lagarto', 'el cocodrilo'], answer: 'el lagarto' },
        { prompt: 'Un reptil acuático es…', choices: ['el cocodrilo', 'el lagarto'], answer: 'el cocodrilo' },
        { prompt: 'Los anfibios necesitan vivir…', choices: ['cerca del agua', 'en el desierto'], answer: 'cerca del agua' },
        { prompt: '¿Qué anfibio tiene cuatro patas y también cola?', choices: ['La salamandra', 'La rana'], answer: 'La salamandra' },
      ],
    },
  ],
};

export default pecesReptilesAnfibios;
