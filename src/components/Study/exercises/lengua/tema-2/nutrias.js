// Lengua, tema 2: el texto expositivo «Nutrias jardineras» y otros animales que ayudan.
const nutrias = {
  slug: 'nutrias',
  title: 'El texto expositivo',
  heading: 'Nutrias jardineras',
  type: 'quiz',
  instructions: 'Lee en tu libro lo que hacen las nutrias marinas. Un texto expositivo explica cosas que son de verdad.',
  questions: [
    { prompt: '¿Qué comen las nutrias marinas?', choices: ['Almejas', 'Zanahorias', 'Pájaros'], answer: 'Almejas' },
    { prompt: '¿Dónde viven las almejas?', choices: ['Enterradas entre las plantas del fondo del mar', 'En los árboles', 'En la playa, al sol'], answer: 'Enterradas entre las plantas del fondo del mar' },
    { prompt: 'Cuando las nutrias desentierran las almejas, ¿qué les pasa a las plantas?', choices: ['Tienen más espacio y crecen más grandes y sanas', 'Se mueren', 'Se van flotando'], answer: 'Tienen más espacio y crecen más grandes y sanas' },
    { prompt: '¿A quién ayudan así las nutrias?', choices: ['A los peces y las tortugas, que comen esas plantas', 'A los pescadores', 'A nadie'], answer: 'A los peces y las tortugas, que comen esas plantas' },
    { prompt: '¿Dónde podrías encontrar este texto?', choices: ['En una revista sobre animales', 'En un álbum de cromos', 'En un libro de fantasía'], answer: 'En una revista sobre animales' },
  ],
  more: [
    {
      title: 'Animales que ayudan',
      type: 'quiz',
      instructions: 'Otros animales también ayudan al medioambiente.',
      questions: [
        { prompt: 'En época de sequía, ¿qué hacen los elefantes?', choices: ['Desentierran agua para que todos beban', 'Se van a dormir', 'Construyen presas'], answer: 'Desentierran agua para que todos beban' },
        { prompt: '¿Qué construyen los castores?', choices: ['Presas que forman estanques', 'Nidos en los árboles', 'Túneles en la arena'], answer: 'Presas que forman estanques' },
        { prompt: 'En los estanques de los castores…', choices: ['viven muchos animales', 'no vive nadie'], answer: 'viven muchos animales' },
      ],
    },
    {
      title: 'El mapa mental',
      type: 'quiz',
      instructions: 'Un mapa mental representa una idea con palabras y dibujos. Lee los datos: come pequeños peces y gusanos, vive en aguas poco profundas, tiene cuatro patas, es rosa, es un gran nadador y está en peligro de extinción.',
      questions: [
        { prompt: '¿De qué animal hablan los datos?', choices: ['El ajolote', 'El chimpancé', 'El oso panda', 'La mariposa monarca'], answer: 'El ajolote' },
        { prompt: '¿De qué color es el ajolote?', choices: ['Rosa', 'Verde', 'Negro'], answer: 'Rosa' },
        { prompt: '¿Cuántas patas tiene el ajolote?', choices: ['Dos', 'Cuatro', 'Seis'], answer: 'Cuatro' },
        { prompt: 'Está en peligro de extinción: eso quiere decir que…', choices: ['quedan muy pocos', 'hay muchísimos', 'es peligroso'], answer: 'quedan muy pocos' },
      ],
    },
  ],
};

export default nutrias;
