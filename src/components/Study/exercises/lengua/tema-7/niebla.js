// Lengua, tema 7: el cuento «La niebla en el corazón del bosque». Arabela, los ventiladores y los
// molinillos de papel contra la niebla de Malún.
const niebla = {
  slug: 'niebla',
  title: 'La niebla en el corazón del bosque',
  heading: 'Comprendo el cuento',
  type: 'quiz',
  instructions: 'Lee primero el cuento en tu libro. Después, contesta.',
  questions: [
    { prompt: '¿Quién llega con la noticia de que la niebla avanza muy rápido?', choices: ['Tok, el ogro', 'Topi', 'Malún'], answer: 'Tok, el ogro' },
    { prompt: '¿Dónde pasa Arabela toda la tarde trabajando?', choices: ['En la biblioteca', 'En el bosque', 'En la cocina'], answer: 'En la biblioteca' },
    { prompt: '¿Qué hay dibujado en el pergamino de Arabela?', choices: ['Un ventilador, parecido a un molino de viento', 'Un mapa del bosque', 'Un dragón'], answer: 'Un ventilador, parecido a un molino de viento' },
    { prompt: '¿Cuántos ventiladores quiere construir Arabela, como mínimo?', choices: ['Dos', 'Seis', 'Diez'], answer: 'Seis' },
    { prompt: '¿Qué tienen que hacer Teo y los demás alumnos?', choices: ['Muchos molinillos de papel', 'Un muñeco de nieve', 'Una tarta'], answer: 'Muchos molinillos de papel' },
    { prompt: '¿Con qué papel hacen los molinillos?', choices: ['Con sus viejos ejercicios de clase', 'Con papel de regalo', 'Con hojas de los árboles'], answer: 'Con sus viejos ejercicios de clase' },
    { prompt: '¿Por qué mueven los ventiladores sobre plataformas con ruedas?', choices: ['Porque son grandes y pesados', 'Porque así van más rápido', 'Porque son de cristal'], answer: 'Porque son grandes y pesados' },
    { prompt: '¿Qué hacen los molinillos con el hechizo de Arabela?', choices: ['Suben como globos y giran alrededor de la escuela', 'Se rompen', 'Se convierten en pájaros'], answer: 'Suben como globos y giran alrededor de la escuela' },
    { prompt: 'Al final, ¿adónde tiene que ir Teo?', choices: ['Al Reino del Valle', 'A su casa', 'Al castillo de Malún'], answer: 'Al Reino del Valle' },
  ],
  more: [
    {
      title: '¿Quién lo hace?',
      type: 'match',
      instructions: 'Todos ayudan para que la niebla retroceda. Toca a cada uno y después lo que hace.',
      columns: ['Quién', 'Qué hace'],
      pairs: [
        { id: 'tok', en: 'Tok', es: 'trae la mala noticia' },
        { id: 'arabela', en: 'Arabela', es: 'tiene un plan y hace el hechizo' },
        { id: 'alumnos', en: 'Teo y los alumnos', es: 'hacen molinillos de papel' },
        { id: 'trolls', en: 'Tala y Bolo', es: 'mueven los ventiladores pesados' },
      ],
    },
    {
      title: 'Palabras del cuento',
      type: 'quiz',
      instructions: '¿Qué significan estas palabras y expresiones?',
      questions: [
        { prompt: 'Arabela se pone en pie con decisión: está…', choices: ['muy convencida', 'muy cansada', 'muy asustada'], answer: 'muy convencida' },
        { prompt: 'No se va a quedar de brazos cruzados: quiere decir que…', choices: ['va a hacer algo para ayudar', 'se va a sentar a descansar', 'va a dar un abrazo'], answer: 'va a hacer algo para ayudar' },
        { prompt: 'Arabela despliega el pergamino: lo…', choices: ['extiende', 'rompe', 'esconde'], answer: 'extiende' },
        { prompt: 'Retroceder es…', choices: ['ir hacia atrás', 'ir hacia delante', 'dar vueltas'], answer: 'ir hacia atrás' },
        { prompt: 'El suelo está a rebosar de molinillos: está…', choices: ['lleno', 'vacío', 'mojado'], answer: 'lleno' },
        { prompt: 'Los molinillos comienzan a elevarse: empiezan a…', choices: ['subir', 'bajar', 'caer'], answer: 'subir' },
      ],
    },
    {
      title: '¿Cómo se siente Topi?',
      type: 'quiz',
      instructions: 'La espiral de Topi cambia de color según lo que siente.',
      questions: [
        { prompt: 'Al oír que la niebla se acerca, la espiral de Topi se vuelve…', choices: ['lila', 'rosa', 'verde'], answer: 'lila' },
        { prompt: '¿Por qué cambia de color?', choices: ['Porque siente ansiedad al saber que la niebla se acerca', 'Porque siente vergüenza al no conocer a Tok', 'Porque está muy feliz'], answer: 'Porque siente ansiedad al saber que la niebla se acerca' },
        { prompt: '¿Qué puedes hacer si te sientes como Topi?', choices: ['Respirar despacio y hablar con alguien', 'Gritar muy fuerte', 'Romper algo'], answer: 'Respirar despacio y hablar con alguien' },
      ],
    },
    {
      title: '¿Podría pasar de verdad?',
      type: 'quiz',
      instructions: 'Piensa si esto podría pasar en la vida real o solo en un cuento.',
      questions: [
        { prompt: 'Unos niños hacen molinillos de papel.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'En la vida real' },
        { prompt: 'Los molinillos flotan solos como globos.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'Solo en un cuento' },
        { prompt: 'Un ventilador produce una corriente de aire.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'En la vida real' },
        { prompt: 'Un cerdivolador ayuda en la escuela.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'Solo en un cuento' },
      ],
    },
  ],
};

export default niebla;
