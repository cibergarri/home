// Lengua, tema 8: el cuento «Dani quiere un monstruo» (Gabriela Keselman).
const monstruo = {
  slug: 'monstruo',
  title: 'Dani quiere un monstruo',
  heading: 'Comprendo el cuento',
  type: 'quiz',
  instructions: 'Lee el cuento en tu libro. Después, contesta.',
  questions: [
    { prompt: '¿Qué mascota tiene Lara?', choices: ['Un perro', 'Un gato', 'Un hámster'], answer: 'Un perro' },
    { prompt: '¿Qué mascota tiene Diego?', choices: ['Un gato', 'Un perro', 'Un monstruo'], answer: 'Un gato' },
    { prompt: '¿Cuántos hámsters tienen los primos de Dani?', choices: ['Uno', 'Dos', 'Tres'], answer: 'Dos' },
    { prompt: '¿Qué quería Dani de verdad?', choices: ['Un monstruo', 'Un perro', 'Dos hámsters'], answer: 'Un monstruo' },
    { prompt: '¿Qué escribieron sus padres?', choices: ['Un anuncio', 'Una carta', 'Un cuento'], answer: 'Un anuncio' },
    { prompt: '¿En qué lenguas estaba escrito el anuncio?', choices: ['En castellano y en monstrugués', 'En inglés y en francés', 'Solo en castellano'], answer: 'En castellano y en monstrugués' },
    { prompt: '¿Qué es el monstrugués?', choices: ['El idioma de los monstruos', 'Un monstruo', 'Una comida'], answer: 'El idioma de los monstruos' },
    { prompt: '¿Qué traía el monstruo en las manos?', choices: ['Un trozo del anuncio y una almohada', 'Un regalo y una flor', 'Una maleta'], answer: 'Un trozo del anuncio y una almohada' },
    { prompt: '¿Por qué crees que trae una almohada?', choices: ['Porque viene a quedarse a vivir', 'Porque tiene frío', 'Porque quiere jugar a las almohadas'], answer: 'Porque viene a quedarse a vivir' },
    { prompt: '¿Qué crees que decía el anuncio?', choices: ['Buscamos un monstruo para que viva con nosotros', '¡Se ha perdido nuestro monstruo!'], answer: 'Buscamos un monstruo para que viva con nosotros' },
  ],
  more: [
    {
      title: 'Principio, después y final',
      type: 'match',
      instructions: 'Une cada parte del cuento con lo que pasa.',
      columns: ['Parte', 'Qué pasa'],
      pairs: [
        { id: 'principio', en: 'Al principio', es: 'Dani quiere tener un monstruo.' },
        { id: 'despues', en: 'Después', es: 'Los padres de Dani ponen un anuncio.' },
        { id: 'final', en: 'Al final', es: 'Un monstruo llama a la puerta.' },
      ],
    },
    {
      title: 'El anuncio',
      type: 'quiz',
      instructions: 'Recuerda lo que pasó con el anuncio.',
      questions: [
        { prompt: '¿Dónde NO pegaron el anuncio?', choices: ['En el colegio', 'En las farolas', 'En los buzones', 'En la ventana de la panadería'], answer: 'En el colegio' },
        { prompt: '¿Qué día tocaron el timbre?', choices: ['El sábado por la noche', 'El lunes por la mañana', 'El domingo a mediodía'], answer: 'El sábado por la noche' },
        { prompt: '¿Quién pensaba el padre que llamaba a la puerta?', choices: ['El vecino', 'La abuela', 'El cartero'], answer: 'El vecino' },
        { prompt: '¿En qué trabaja la madre de Dani?', choices: ['Es profesora de Lengua', 'Es panadera', 'Es médica'], answer: 'Es profesora de Lengua' },
      ],
    },
  ],
};

export default monstruo;
