// Lengua, tema 9: lengua oral y lengua escrita. Hablar y escuchar, o escribir y leer; el braille y
// la lengua de signos.
const ORAL = { id: 'oral', title: 'Lengua oral (hablar y escuchar)' };
const ESCRITA = { id: 'escrita', title: 'Lengua escrita (escribir y leer)' };

const oralEscrita = {
  slug: 'oral-escrita',
  title: 'Lengua oral y lengua escrita',
  heading: '¿Oral o escrita?',
  type: 'sort',
  instructions: 'Mica y Lena hablan: usan la lengua oral. Teo escribe y Topi lee: usan la lengua escrita. Lleva cada situación a su columna.',
  columns: [ORAL, ESCRITA],
  cards: [
    { id: 'telefono', text: 'Hablar por teléfono', columns: ['oral'] },
    { id: 'cuento', text: 'Contar un cuento en voz alta', columns: ['oral'] },
    { id: 'saludar', text: 'Saludar a una amiga', columns: ['oral'] },
    { id: 'radio', text: 'Escuchar la radio', columns: ['oral'] },
    { id: 'carta', text: 'Escribir una carta', columns: ['escrita'] },
    { id: 'libro', text: 'Leer un libro', columns: ['escrita'] },
    { id: 'lista', text: 'Escribir la lista de la compra', columns: ['escrita'] },
    { id: 'cartel', text: 'Leer un cartel', columns: ['escrita'] },
  ],
  more: [
    {
      title: 'El braille y la lengua de signos',
      type: 'quiz',
      instructions: 'Hay otras formas de comunicarse.',
      questions: [
        { prompt: '¿Quién usa el alfabeto braille?', choices: ['Las personas que no pueden ver', 'Las personas que no pueden oír', 'Los bebés'], answer: 'Las personas que no pueden ver' },
        { prompt: '¿Cómo se lee el braille?', choices: ['Con los dedos, porque los signos están en relieve', 'Con una lupa', 'Escuchando'], answer: 'Con los dedos, porque los signos están en relieve' },
        { prompt: '¿Dónde puedes encontrar braille?', choices: ['En los botones de los ascensores', 'En las nubes', 'En la arena'], answer: 'En los botones de los ascensores' },
        { prompt: '¿Quién usa la lengua de signos?', choices: ['Las personas que no pueden oír', 'Las personas que no pueden ver', 'Solo los mimos'], answer: 'Las personas que no pueden oír' },
        { prompt: '¿Con qué se habla en la lengua de signos?', choices: ['Con las manos y los gestos', 'Con los pies', 'Con un silbato'], answer: 'Con las manos y los gestos' },
      ],
    },
  ],
};

export default oralEscrita;
