// Lengua, tema 8: el diálogo. La raya (—) delante de lo que dice cada personaje, y los gestos;
// representar un diálogo con mimos y gestos.
const dialogo = {
  slug: 'dialogo',
  title: 'El diálogo',
  heading: '¡He visto un cerdito volando!',
  type: 'quiz',
  instructions: 'Lee en tu libro el diálogo de Lucas y su padre. En un diálogo se escribe una raya (—) delante de lo que dice cada persona.',
  questions: [
    { prompt: '¿Qué ha visto Lucas?', choices: ['Un cerdito volando', 'Un dragón', 'Una ballena'], answer: 'Un cerdito volando' },
    { prompt: '¿Dónde lo ha visto?', choices: ['En el camino hacia Arlen', 'En el lago', 'En la granja'], answer: 'En el camino hacia Arlen' },
    { prompt: '¿Qué gesto hace Lucas al principio?', choices: ['Se lleva las manos a la cabeza', 'Se sienta en el sofá', 'Salta'], answer: 'Se lleva las manos a la cabeza' },
    { prompt: '«Con los ojos abiertos como platos» quiere decir…', choices: ['muy sorprendido', 'muy dormido', 'con hambre'], answer: 'muy sorprendido' },
    { prompt: '¿Qué signo va delante de lo que dice cada personaje?', choices: ['La raya (—)', 'El punto (.)', 'La coma (,)'], answer: 'La raya (—)' },
    { prompt: '¿Qué otra cosa se explica en un diálogo, además de lo que dicen?', choices: ['Los gestos de los personajes', 'El precio de las cosas', 'La hora'], answer: 'Los gestos de los personajes' },
  ],
  more: [
    {
      title: 'La carrera de sacos',
      type: 'match',
      instructions: 'Lía y Jorge juegan a la carrera de sacos. Une cada frase con su gesto.',
      columns: ['Lo que dicen', 'Su gesto'],
      pairs: [
        { id: 'arbol', en: '—¡Tenemos que llegar hasta aquel árbol sin caernos! —explica Lía', es: 'señalando con el dedo' },
        { id: 'ya', en: '—¡Uno, dos, tres… ya! —dice Lía', es: 'saltando con energía' },
        { id: 'jaja', en: '—¡Ja, ja, ja, qué divertido! —grita Jorge', es: 'riendo' },
      ],
    },
    {
      title: 'Palabras para el diálogo',
      type: 'quiz',
      instructions: 'Para decir quién habla usamos palabras como dice, pregunta, exclama, responde o explica. Elige la mejor.',
      questions: [
        { prompt: '—¿Por dónde se sube al castillo? —… el turista.', choices: ['pregunta', 'responde', 'exclama'], answer: 'pregunta' },
        { prompt: '—Todo recto por esa calle —… la policía señalando al frente.', choices: ['responde', 'pregunta', 'llora'], answer: 'responde' },
        { prompt: '—¡Qué espectáculo tan bonito! —… Teo.', choices: ['exclama', 'pregunta', 'susurra'], answer: 'exclama' },
        { prompt: '—¿Dónde? —… su padre.', choices: ['preguntó', 'respondió', 'exclamó'], answer: 'preguntó' },
      ],
    },
    {
      title: 'Hablar sin palabras',
      type: 'quiz',
      instructions: 'Los mimos hablan solo con gestos y la postura del cuerpo. ¿Qué quiere decir cada gesto?',
      questions: [
        { prompt: 'Se pone el dedo sobre los labios.', choices: ['¡Silencio!', '¡Ven aquí!', 'Tengo hambre'], answer: '¡Silencio!' },
        { prompt: 'Mueve la mano de un lado a otro, con la palma abierta.', choices: ['¡Hola! o ¡adiós!', 'Tengo frío', 'No lo sé'], answer: '¡Hola! o ¡adiós!' },
        { prompt: 'Se frota la tripa.', choices: ['Tengo hambre', '¡Silencio!', '¡Para!'], answer: 'Tengo hambre' },
        { prompt: 'Para dar la bienvenida a un festival, el presentador se pone…', choices: ['derecho, sonriendo y con los brazos abiertos', 'de espaldas al público', 'mirando al suelo'], answer: 'derecho, sonriendo y con los brazos abiertos' },
      ],
    },
  ],
};

export default dialogo;
