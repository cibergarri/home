// Lengua, tema 8: sal al escenario. Contar el cuento «La rana» (Pilar Mateos, «La bruja Mon»),
// y oraciones que significan lo mismo.
const brujaMon = {
  slug: 'bruja-mon',
  title: 'Cuento un cuento',
  heading: 'La bruja Mon',
  type: 'quiz',
  instructions: 'Lee y escucha en tu libro el cuento «La rana». Después, contesta.',
  questions: [
    { prompt: '¿Dónde entró la bruja Mon?', choices: ['En una tienda de vídeos', 'En una panadería', 'En un colegio'], answer: 'En una tienda de vídeos' },
    { prompt: '¿Qué miraba la bruja en la pantalla?', choices: ['Un número musical', 'Un partido de fútbol', 'Las noticias'], answer: 'Un número musical' },
    { prompt: '¿Qué hizo la niña sin querer?', choices: ['Le dio un pisotón', 'Le rompió la varita', 'Le quitó el sombrero'], answer: 'Le dio un pisotón' },
    { prompt: '¿Por qué murmura la niña «¡Huy, perdone!»?', choices: ['Porque se siente mal por haber pisado a la bruja', 'Porque no quiere que la bruja la oiga', 'Porque no sabe hablar más alto'], answer: 'Porque se siente mal por haber pisado a la bruja' },
    { prompt: 'Murmurar es…', choices: ['decir algo en voz muy baja', 'gritar', 'cantar'], answer: 'decir algo en voz muy baja' },
    { prompt: '«Se puso hecha una fiera» quiere decir que…', choices: ['se enfadó muchísimo', 'se convirtió en un león', 'se puso muy contenta'], answer: 'se enfadó muchísimo' },
    { prompt: '¿En qué convirtió la bruja a la niña?', choices: ['En una rana', 'En un gato', 'En una piedra'], answer: 'En una rana' },
    { prompt: '¿Qué le dijo el policía a la bruja?', choices: ['Que tendría que pagar una multa', 'Que era muy simpática', 'Que se fuera a casa'], answer: 'Que tendría que pagar una multa' },
  ],
  more: [
    {
      title: 'Consejos para contar un cuento',
      type: 'quiz',
      instructions: 'Para contar bien un cuento hay que cuidar la voz y los gestos. ¿Es un buen consejo?',
      questions: [
        { prompt: 'Lee despacio y haz pausas para dar emoción.', choices: ['Buen consejo', '¡Intruso!'], answer: 'Buen consejo' },
        { prompt: 'Memoriza algunas oraciones para poder mirar al público.', choices: ['Buen consejo', '¡Intruso!'], answer: 'Buen consejo' },
        { prompt: 'Lee en voz muy baja para atraer la atención.', choices: ['Buen consejo', '¡Intruso!'], answer: '¡Intruso!' },
        { prompt: 'Fíjate en las rayas para saber cuándo habla cada personaje.', choices: ['Buen consejo', '¡Intruso!'], answer: 'Buen consejo' },
        { prompt: '¿Cómo dirías «¡Ahora mismo te convierto en una rana!»?', choices: ['Muy enfadada, con la varita en alto', 'Muy bajito y con vergüenza', 'Riendo'], answer: 'Muy enfadada, con la varita en alto' },
        { prompt: '¿Cómo dirías «¡Huy, perdone!»?', choices: ['Bajito, con cara de pena', 'Gritando muy enfadada', 'Cantando'], answer: 'Bajito, con cara de pena' },
      ],
    },
    {
      title: 'Significan lo mismo',
      type: 'match',
      instructions: 'Une las oraciones que significan lo mismo.',
      columns: ['Oración', 'Significa lo mismo'],
      pairs: [
        { id: 'parque', en: 'Me gusta jugar en el parque con mis amigos.', es: 'Disfruto mucho jugando con mis amigos en el parque.' },
        { id: 'manzana', en: 'La fruta que prefiero comer es la manzana.', es: 'Mi fruta favorita es la manzana.' },
        { id: 'padre', en: 'Mi padre me está esperando cuando salgo de clase.', es: 'A la salida de clase me espera mi padre.' },
        { id: 'natalia', en: 'El nombre de mi compañera es Natalia.', es: 'Mi compañera se llama Natalia.' },
      ],
    },
  ],
};

export default brujaMon;
