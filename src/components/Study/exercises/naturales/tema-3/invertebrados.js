// Naturales, tema 3: ¿cómo son los animales invertebrados? Medusas, caracoles, cangrejos… y los
// insectos, con seis patas y dos antenas, y cómo una oruga se hace mariposa.
const invertebrados = {
  slug: 'invertebrados',
  title: '¿Cómo son los invertebrados?',
  heading: 'Observa y relaciona',
  type: 'match',
  instructions: 'Como en la página 49: toca un invertebrado y después lo que tiene.',
  columns: ['Invertebrado', '¿Qué tiene?'],
  pairs: [
    { id: 'medusa', en: '🪼 Medusa', es: 'Tiene un cuerpo gelatinoso con tentáculos.' },
    { id: 'caracol', en: '🐌 Caracol', es: 'Tiene una concha que protege su cuerpo.' },
    { id: 'cangrejo', en: '🦀 Cangrejo', es: 'Tiene pinzas y el cuerpo cubierto por un caparazón.' },
    { id: 'gamba', en: '🦐 Gamba', es: 'Tiene caparazón.' },
    { id: 'lombriz', en: '🪱 Lombriz', es: 'Tiene el cuerpo desnudo.' },
    { id: 'mariposa', en: '🦋 Mariposa', es: 'Tiene seis patas, dos antenas y alas.' },
  ],
  more: [
    {
      title: '¿Es un insecto?',
      type: 'sort',
      instructions: 'Los insectos tienen seis patas y dos antenas. Lleva cada invertebrado a su sitio.',
      columns: [
        { id: 'insecto', title: '🐞 Insecto', subtitle: 'Seis patas y dos antenas' },
        { id: 'otro', title: '🐙 Otro invertebrado' },
      ],
      cards: [
        { id: 'hormiga', text: '🐜 Hormiga', columns: ['insecto'] },
        { id: 'abeja', text: '🐝 Abeja', columns: ['insecto'] },
        { id: 'mariposa', text: '🦋 Mariposa', columns: ['insecto'] },
        { id: 'mariquita', text: '🐞 Mariquita', columns: ['insecto'] },
        { id: 'pulga', text: 'Pulga (no tiene alas)', columns: ['insecto'] },
        { id: 'arana', text: '🕷️ Araña (ocho patas)', columns: ['otro'] },
        { id: 'pulpo', text: '🐙 Pulpo', columns: ['otro'] },
        { id: 'almeja', text: 'Almeja', columns: ['otro'] },
        { id: 'caracol', text: '🐌 Caracol', columns: ['otro'] },
      ],
    },
    {
      title: 'De huevo a mariposa',
      type: 'gaps',
      instructions: 'Las crías de algunos insectos son muy diferentes a los adultos. Lleva cada palabra a su hueco.',
      sentences: [
        'Primero, la mariposa pone sus [huevos].',
        'De cada huevo sale una [oruga].',
        'La oruga se encierra en un [capullo].',
        'Del capullo sale una [mariposa].',
        'Los insectos tienen seis [patas] y dos [antenas].',
      ],
    },
    {
      title: 'Los invertebrados',
      type: 'quiz',
      instructions: 'Lee y elige la respuesta correcta.',
      questions: [
        { prompt: 'Los invertebrados no tienen…', choices: ['huesos en su interior', 'cabeza'], answer: 'huesos en su interior' },
        { prompt: 'La mayoría de los invertebrados son…', choices: ['ovíparos', 'vivíparos'], answer: 'ovíparos' },
        { prompt: '¿Cuál de estos invertebrados no vive en el agua?', choices: ['La lombriz', 'El pulpo', 'La almeja', 'La gamba'], answer: 'La lombriz' },
        { prompt: 'La hormiga y la abeja son…', choices: ['insectos', 'peces', 'mamíferos'], answer: 'insectos' },
        { prompt: '¿La araña es un insecto?', choices: ['No, tiene ocho patas y no tiene antenas ni alas', 'Sí, tiene seis patas'], answer: 'No, tiene ocho patas y no tiene antenas ni alas' },
        { prompt: '¿Todos los insectos tienen alas?', choices: ['No, las pulgas no tienen', 'Sí, todos'], answer: 'No, las pulgas no tienen' },
      ],
    },
  ],
};

export default invertebrados;
