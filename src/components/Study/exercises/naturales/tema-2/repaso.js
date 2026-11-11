// Naturales, tema 2: comprueba tu progreso, y «Mi cuestionario de salud» con la respuesta más
// saludable de cada pregunta.
const repaso = {
  slug: 'repaso',
  title: 'Comprueba tu progreso',
  heading: '¿Qué has aprendido?',
  type: 'quiz',
  instructions: 'Lee y elige la respuesta correcta.',
  questions: [
    { prompt: '¿Qué debes hacer para cuidar tu salud?', choices: ['Comer fruta, hacer ejercicio y dormir bien', 'Comer chucherías y dormir poco'], answer: 'Comer fruta, hacer ejercicio y dormir bien' },
    { prompt: 'Con un cuchillo…', choices: ['te puedes cortar', 'te puede dar calambre'], answer: 'te puedes cortar' },
    { prompt: 'Con el fuego…', choices: ['te puedes quemar', 'te puedes cortar'], answer: 'te puedes quemar' },
    { prompt: 'Con un enchufe…', choices: ['te puede dar calambre', 'te puedes quemar'], answer: 'te puede dar calambre' },
    { prompt: 'El médico de los niños y las niñas es el…', choices: ['pediatra', 'dentista', 'veterinario'], answer: 'pediatra' },
    { prompt: 'Las vacunas sirven para…', choices: ['prevenir enfermedades', 'curar una herida'], answer: 'prevenir enfermedades' },
  ],
  more: [
    {
      title: 'Mi cuestionario de salud',
      type: 'quiz',
      instructions: '¿Cuál es la respuesta más saludable?',
      questions: [
        { prompt: '¿Cuántas veces comes al día?', choices: ['Cinco', 'Dos'], answer: 'Cinco' },
        { prompt: '¿Cuántas piezas de fruta tomas cada día?', choices: ['Tres o más', 'Ninguna'], answer: 'Tres o más' },
        { prompt: '¿Cuántos días de la semana comes verduras?', choices: ['Todos', 'Pocos'], answer: 'Todos' },
        { prompt: '¿Qué bebida tomas más a menudo?', choices: ['Agua', 'Refresco'], answer: 'Agua' },
        { prompt: '¿Cuántos días a la semana haces ejercicio?', choices: ['Tres o más', 'Ninguno'], answer: 'Tres o más' },
        { prompt: '¿Cuántas horas duermes al día?', choices: ['Diez', 'Ocho o menos'], answer: 'Diez' },
        { prompt: '¿Cuidas tu higiene personal y tus dientes?', choices: ['A diario', 'Casi nunca'], answer: 'A diario' },
      ],
    },
  ],
};

export default repaso;
