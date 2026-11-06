// Lengua, tema 3: el cuento «El Festival de las Frutillas».
const frutillas = {
  slug: 'frutillas',
  title: 'El Festival de las Frutillas',
  heading: 'Comprendo el cuento',
  type: 'quiz',
  instructions: 'Lee primero el cuento en tu libro. Después, contesta.',
  questions: [
    { prompt: '¿De qué habla el cuento?', choices: ['De la excursión de la clase de Arabela al Festival de las Frutillas', 'Del viaje de Lena para conocer a la familia de Mica', 'De la obra de teatro de Mica y Topi'], answer: 'De la excursión de la clase de Arabela al Festival de las Frutillas' },
    { prompt: '¿Quién invita a la clase a la gran fiesta de primavera?', choices: ['Las hadas y los cerdivoladores', 'Los trolls', 'El brujo Malún'], answer: 'Las hadas y los cerdivoladores' },
    { prompt: '¿Cómo viajan al Reino de las Praderas?', choices: ['Con la brújula de los Cuatro Reinos', 'En una escoba', 'En tren'], answer: 'Con la brújula de los Cuatro Reinos' },
    { prompt: '¿Quién vive en las praderas?', choices: ['Las hadas', 'Los brujos', 'Los ogros'], answer: 'Las hadas' },
    { prompt: '¿De qué color son las carpas del campamento?', choices: ['Blancas', 'Rojas', 'Verdes'], answer: 'Blancas' },
    { prompt: '¿Qué tiene de curioso la frutilla?', choices: ['Crece, florece y da fruto en un solo día', 'Solo crece en invierno', 'Es azul'], answer: 'Crece, florece y da fruto en un solo día' },
    { prompt: '¿Qué cuidan las hadas para que el suelo esté húmedo y sano?', choices: ['Los estanques y los riachuelos', 'Los castillos', 'Las carpas'], answer: 'Los estanques y los riachuelos' },
    { prompt: '¿Qué cuidan los cerdivoladores?', choices: ['Las colmenas de abejas', 'Los nidos de los pájaros', 'Los caballos'], answer: 'Las colmenas de abejas' },
    { prompt: '¿Por qué están tristes las hadas al principio?', choices: ['Porque este año no hay frutillas', 'Porque llueve mucho', 'Porque Topi se ha perdido'], answer: 'Porque este año no hay frutillas' },
  ],
  more: [
    {
      title: 'Las frutillas',
      type: 'quiz',
      instructions: '¿Qué pasa al final del cuento?',
      questions: [
        { prompt: '¿A qué fruta se parece una frutilla?', choices: ['A una fresa', 'A un plátano', 'A una sandía'], answer: 'A una fresa' },
        { prompt: 'Cuando brotan, ¿a qué le recuerdan a Teo?', choices: ['A las palomitas cuando estallan', 'A las burbujas del baño', 'A los globos'], answer: 'A las palomitas cuando estallan' },
        { prompt: '¿Por qué hay que darse prisa en recogerlas?', choices: ['Hay que recogerlas antes de que caiga la noche', 'Porque viene Malún', 'Porque se las comen los pájaros'], answer: 'Hay que recogerlas antes de que caiga la noche' },
        { prompt: '¿Qué hace Teo cuando no puede dormir?', choices: ['Sale de la carpa y practica el hechizo', 'Se come todas las frutillas', 'Despierta a Mica'], answer: 'Sale de la carpa y practica el hechizo' },
        { prompt: '¿Por qué se iluminan las palabras «De los prados, las frutillas»?', choices: ['Porque Teo las siente con el corazón', 'Porque Teo grita muy fuerte', 'Porque es de día'], answer: 'Porque Teo las siente con el corazón' },
        { prompt: '¿Qué empieza a entender Teo?', choices: ['Que debe amar los Cuatro Reinos para salvarlos', 'Que el hechizo no sirve', 'Que las frutillas son mágicas'], answer: 'Que debe amar los Cuatro Reinos para salvarlos' },
      ],
    },
    {
      title: '¿Cómo se sienten?',
      type: 'quiz',
      instructions: 'Piensa en cómo se sienten los personajes en cada momento del cuento.',
      questions: [
        { prompt: 'Arabela cuenta que ha llegado una carta con una invitación. Topi aletea con su espiral amarilla. Está…', choices: ['contento', 'enfadado', 'aburrido'], answer: 'contento' },
        { prompt: 'Mica se entera de que este año no hay frutillas. Está…', choices: ['triste', 'contenta', 'asustada'], answer: 'triste' },
        { prompt: '¡Pop! De pronto brota una frutilla en la hierba. Los niños sienten…', choices: ['sorpresa', 'miedo', 'sueño'], answer: 'sorpresa' },
        { prompt: 'Por la noche, Teo escucha cantar a las hadas y siente…', choices: ['un gran amor por aquel lugar', 'mucho miedo', 'mucho frío'], answer: 'un gran amor por aquel lugar' },
      ],
    },
    {
      title: 'Palabras del cuento',
      type: 'quiz',
      instructions: '¿Qué significan estas palabras del cuento?',
      questions: [
        { prompt: 'Topi aletea: mueve…', choices: ['las alas', 'la cola', 'las patas'], answer: 'las alas' },
        { prompt: 'Los estanques son…', choices: ['lagos pequeños', 'montañas', 'casas de hadas'], answer: 'lagos pequeños' },
        { prompt: 'Las carpas son…', choices: ['telas que sirven como techo', 'peces de río', 'cestas'], answer: 'telas que sirven como techo' },
        { prompt: 'Una planta brota cuando…', choices: ['sale de la tierra', 'se seca', 'se cae'], answer: 'sale de la tierra' },
        { prompt: 'El campo está rebosante de frutillas: está…', choices: ['lleno', 'vacío', 'mojado'], answer: 'lleno' },
        { prompt: '¿Qué palabra del cuento significa «ríos pequeños»?', choices: ['riachuelos', 'estanques', 'praderas'], answer: 'riachuelos' },
      ],
    },
    {
      title: '¿Podría pasar de verdad?',
      type: 'quiz',
      instructions: 'Piensa si esto podría pasar en la vida real o solo en un cuento.',
      questions: [
        { prompt: 'Las abejas viven en colmenas.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'En la vida real' },
        { prompt: 'Una planta crece, florece y da fruto en un solo día.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'Solo en un cuento' },
        { prompt: 'Unos cerdos con alas cantan con las hadas.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'Solo en un cuento' },
        { prompt: 'Unos amigos duermen en sacos de dormir dentro de una tienda de campaña.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'En la vida real' },
        { prompt: 'Una brújula te lleva volando a otro reino.', choices: ['En la vida real', 'Solo en un cuento'], answer: 'Solo en un cuento' },
      ],
    },
  ],
};

export default frutillas;
