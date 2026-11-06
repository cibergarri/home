// Lengua, tema 4: el cuento «El reloj de Mica».
const reloj = {
  slug: 'reloj',
  title: 'El reloj de Mica',
  heading: 'Comprendo el cuento',
  type: 'quiz',
  instructions: 'Lee primero el cuento en tu libro. Después, contesta.',
  questions: [
    { prompt: '¿Sobre qué quiere escribir Mica en el periódico del colegio?', choices: ['Sobre los animales de la escuela', 'Sobre los relojes', 'Sobre las hadas'], answer: 'Sobre los animales de la escuela' },
    { prompt: '¿Qué lleva siempre Mica con ella?', choices: ['Una libreta para apuntar lo que ve', 'Una varita mágica', 'Una linterna'], answer: 'Una libreta para apuntar lo que ve' },
    { prompt: '¿Dónde se están convirtiendo en ranas los renacuajos?', choices: ['En la bañera', 'En el estanque', 'En una pecera'], answer: 'En la bañera' },
    { prompt: '¿Por qué llega Mica cubierta de polvo y telarañas?', choices: ['Porque ha estado en lugares de la escuela donde nadie entra', 'Porque se ha caído al jardín', 'Porque ha limpiado la clase'], answer: 'Porque ha estado en lugares de la escuela donde nadie entra' },
    { prompt: '¿Qué encuentra Mica en lo alto de la escalera?', choices: ['Un enorme reloj de pie', 'Un baúl con tesoros', 'Un nido de petirrojo'], answer: 'Un enorme reloj de pie' },
    { prompt: '¿Cómo se llama el reloj?', choices: ['Reloj universal', 'Reloj de arena', 'Reloj despertador'], answer: 'Reloj universal' },
    { prompt: '¿Cómo funciona el reloj?', choices: ['Hay que darle cuerda', 'Hay que enchufarlo', 'Hay que ponerle pilas'], answer: 'Hay que darle cuerda' },
    { prompt: '¿Qué pasa cuando Mica mueve la aguja hasta el copo de nieve?', choices: ['Empieza a nevar', 'Se hace de noche', 'Sale el sol'], answer: 'Empieza a nevar' },
    { prompt: '¿Qué le pasa a la aguja al final?', choices: ['Se rompe y se queda en la mano de Mica', 'Se pierde en la nieve', 'Se vuelve de oro'], answer: 'Se rompe y se queda en la mano de Mica' },
  ],
  more: [
    {
      title: '¿Verdadero o falso?',
      type: 'quiz',
      instructions: 'Piensa si cada frase dice lo que pasa en el cuento.',
      questions: [
        { prompt: 'Mica vigila un nido de gorriones.', choices: ['Verdadero', 'Falso'], answer: 'Falso' },
        { prompt: 'Arabela arregla el reloj cuando se rompe.', choices: ['Verdadero', 'Falso'], answer: 'Verdadero' },
        { prompt: 'El reloj tiene dibujos de un sol y una luna.', choices: ['Verdadero', 'Falso'], answer: 'Verdadero' },
        { prompt: 'Monteoscuro se queda de noche para siempre.', choices: ['Verdadero', 'Falso'], answer: 'Falso' },
        { prompt: 'Al final, el reloj vuelve al lugar donde estaba escondido.', choices: ['Verdadero', 'Falso'], answer: 'Verdadero' },
        { prompt: 'Las estrellas solo están en el cielo por la noche.', choices: ['Verdadero', 'Falso'], answer: 'Falso' },
      ],
    },
    {
      title: 'Las esferas del reloj',
      type: 'match',
      instructions: 'El reloj universal tiene tres esferas. ¿Qué cambia cada una?',
      columns: ['Esfera con…', 'Cambia…'],
      pairs: [
        { id: 'numeros', en: 'números', es: 'la hora' },
        { id: 'sol-luna', en: 'un sol y una luna', es: 'el día y la noche' },
        { id: 'flores', en: 'flores, nubes, hojas y nieve', es: 'las estaciones' },
      ],
    },
    {
      title: 'Palabras del cuento',
      type: 'quiz',
      instructions: '¿Qué significan estas palabras?',
      questions: [
        { prompt: 'Un petirrojo es…', choices: ['un pájaro que tiene el pecho rojo', 'un pez rojo', 'una fruta'], answer: 'un pájaro que tiene el pecho rojo' },
        { prompt: 'Las esferas de un reloj son…', choices: ['los círculos que recorren las manecillas', 'las pilas', 'las campanas'], answer: 'los círculos que recorren las manecillas' },
        { prompt: 'Mica está intrigada: está…', choices: ['curiosa', 'dormida', 'enfadada'], answer: 'curiosa' },
        { prompt: 'Los renacuajos son…', choices: ['las crías de las ranas', 'unos insectos', 'unos pájaros'], answer: 'las crías de las ranas' },
        { prompt: 'Las agujas de un reloj también se llaman…', choices: ['manecillas', 'esferas', 'cuerdas'], answer: 'manecillas' },
      ],
    },
    {
      title: '¿Cómo se sienten?',
      type: 'quiz',
      instructions: 'Piensa en los personajes del cuento.',
      questions: [
        { prompt: 'Mica cree que va a ser de noche para siempre. Siente…', choices: ['miedo', 'alegría', 'sueño'], answer: 'miedo' },
        { prompt: 'La nieve desaparece y todos protestan. Están…', choices: ['decepcionados', 'contentos', 'dormidos'], answer: 'decepcionados' },
        { prompt: 'Arabela ve el reloj y abre mucho los ojos. Está…', choices: ['sorprendida', 'aburrida', 'triste'], answer: 'sorprendida' },
      ],
    },
  ],
};

export default reloj;
