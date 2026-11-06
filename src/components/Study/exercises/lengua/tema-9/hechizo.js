// Lengua, tema 9: el cuento «El hechizo de Teo». Teo dice el hechizo de protección en lo alto del
// Tukuruku, la niebla se desvanece y llega el final del curso.
const hechizo = {
  slug: 'hechizo',
  title: 'El hechizo de Teo',
  heading: 'Comprendo el cuento',
  type: 'quiz',
  instructions: 'Lee primero el cuento en tu libro. Después, contesta.',
  questions: [
    { prompt: 'Al volver del Reino del Valle, ¿qué descubren?', choices: ['Que la niebla ya rodea el claro', 'Que la niebla se ha ido', 'Que la escuela está vacía'], answer: 'Que la niebla ya rodea el claro' },
    { prompt: '¿Adónde va corriendo Teo?', choices: ['A la biblioteca', 'A su casa', 'Al lago'], answer: 'A la biblioteca' },
    { prompt: '¿Qué quiere saber Teo?', choices: ['Desde dónde lanzó Braviana el hechizo', 'Dónde vive Malún', 'Cómo se hace un molinillo'], answer: 'Desde dónde lanzó Braviana el hechizo' },
    { prompt: '¿Quién descubre el cuadro del hada Braviana?', choices: ['Mica', 'Lena', 'Topi'], answer: 'Mica' },
    { prompt: '¿Desde dónde hay que decir el hechizo?', choices: ['Desde lo alto del árbol Tukuruku', 'Desde el tejado de la escuela', 'Desde el lago'], answer: 'Desde lo alto del árbol Tukuruku' },
    { prompt: '¿Por qué al principio Teo no logra decir las palabras?', choices: ['Porque está muy nervioso', 'Porque no sabe leer', 'Porque ha perdido el papel'], answer: 'Porque está muy nervioso' },
    { prompt: '¿Cómo le ayudan sus amigos?', choices: ['Están a su lado y le dan ánimos', 'Dicen el hechizo por él', 'Se van corriendo'], answer: 'Están a su lado y le dan ánimos' },
    { prompt: '¿Por qué se iluminan las palabras sobre el papel?', choices: ['Por todo el amor que Teo siente por ese mundo', 'Porque las pinta con purpurina', 'Porque sale el sol'], answer: 'Por todo el amor que Teo siente por ese mundo' },
    { prompt: '¿Qué le pasa a la niebla?', choices: ['Se desvanece', 'Se hace más grande', 'Se vuelve rosa'], answer: 'Se desvanece' },
    { prompt: '¿Adónde lleva la brújula a Teo al final?', choices: ['A la cocina de su casa', 'Al Reino del Valle', 'Al castillo de Malún'], answer: 'A la cocina de su casa' },
  ],
  more: [
    {
      title: 'El hechizo protector',
      type: 'match',
      instructions: 'Lee el hechizo en tu libro. ¿Qué pertenece a cada reino?',
      columns: ['Reino', 'En el hechizo'],
      pairs: [
        { id: 'praderas', en: 'Reino de las Praderas', es: 'las frutillas' },
        { id: 'pantanos', en: 'Reino de los Pantanos', es: 'el frescor' },
        { id: 'montanas', en: 'Reino de las Montañas', es: 'la roca' },
        { id: 'valle', en: 'Reino del Valle', es: 'la flor' },
      ],
    },
    {
      title: 'Palabras del cuento',
      type: 'quiz',
      instructions: '¿Qué significan estas palabras?',
      questions: [
        { prompt: 'Un torbellino es…', choices: ['un movimiento con vueltas muy rápidas', 'un árbol muy alto', 'una luz pequeña'], answer: 'un movimiento con vueltas muy rápidas' },
        { prompt: 'Están aliviados: están…', choices: ['sin preocupaciones', 'muy cansados', 'enfadados'], answer: 'sin preocupaciones' },
        { prompt: 'Un estallido es…', choices: ['una explosión con mucho ruido', 'un susurro', 'una canción'], answer: 'una explosión con mucho ruido' },
        { prompt: 'Teo llega polvoriento: llega…', choices: ['lleno de polvo', 'muy limpio', 'mojado'], answer: 'lleno de polvo' },
        { prompt: 'La niebla se desvanece: la niebla…', choices: ['desaparece poco a poco', 'crece', 'se queda quieta'], answer: 'desaparece poco a poco' },
      ],
    },
    {
      title: 'El final',
      type: 'quiz',
      instructions: 'Piensa en el final del cuento.',
      questions: [
        { prompt: '«No regreses si no es con palabras de paz.» ¿Cuándo podrá volver Malún?', choices: ['Cuando venga en paz', 'Cuando quiera', 'Nunca, pase lo que pase'], answer: 'Cuando venga en paz' },
        { prompt: '¿Cómo desaparece Malún?', choices: ['Con un estallido de humo morado', 'Volando en una escoba', 'Andando muy despacio'], answer: 'Con un estallido de humo morado' },
        { prompt: '¿De qué color brilla la espiral de Topi al despedirse de Teo?', choices: ['Rosa', 'Azul', 'Lila'], answer: 'Rosa' },
        { prompt: '¿Volverá Teo a Monteoscuro?', choices: ['Sí, el año que viene', 'No, nunca'], answer: 'Sí, el año que viene' },
        { prompt: '¿Qué piensa Teo al abrazar a sus padres?', choices: ['Que tardará medio verano en contarles todo', 'Que no les contará nada', 'Que quiere volver ya'], answer: 'Que tardará medio verano en contarles todo' },
      ],
    },
  ],
};

export default hechizo;
