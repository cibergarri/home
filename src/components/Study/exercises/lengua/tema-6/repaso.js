// Lengua, tema 6: el repaso del final del tema, «¿Qué he aprendido?».
const repaso = {
  slug: 'repaso',
  title: 'Repaso',
  heading: '1. Verbo, sujeto y predicado',
  type: 'quiz',
  instructions: 'Lee el cartel: «Los alumnos de balonmano entrenarán en el gimnasio».',
  questions: [
    { prompt: '¿Cuál es el verbo?', choices: ['entrenarán', 'alumnos', 'gimnasio'], answer: 'entrenarán' },
    { prompt: '¿Cuál es el sujeto?', choices: ['Los alumnos de balonmano', 'entrenarán en el gimnasio', 'el gimnasio'], answer: 'Los alumnos de balonmano' },
    { prompt: '¿Cuál es el predicado?', choices: ['Los alumnos de balonmano', 'entrenarán en el gimnasio'], answer: 'entrenarán en el gimnasio' },
    { prompt: '¿En qué tiempo está «entrenarán»?', choices: ['Pasado', 'Presente', 'Futuro'], answer: 'Futuro' },
  ],
  more: [
    {
      title: '2. Pon un sujeto',
      type: 'quiz',
      instructions: 'Elige el sujeto que completa cada oración.',
      questions: [
        { prompt: '… tiene la piel verde.', choices: ['La rana', 'Las ranas'], answer: 'La rana' },
        { prompt: '… lleva zapatillas grises.', choices: ['Mi hermano', 'Mis hermanos'], answer: 'Mi hermano' },
        { prompt: '… están leyendo.', choices: ['Los niños', 'El niño'], answer: 'Los niños' },
        { prompt: '… vuela en su escoba.', choices: ['Lena', 'Lena y Teo'], answer: 'Lena' },
      ],
    },
    {
      title: '3. ¿A qué campo pertenecen?',
      type: 'sort',
      instructions: 'Lleva cada palabra a su campo semántico.',
      columns: [
        { id: 'calzado', title: 'Calzado' },
        { id: 'transportes', title: 'Transportes' },
        { id: 'cubiertos', title: 'Cubiertos' },
      ],
      cards: [
        { id: 'zapatillas', text: 'zapatillas', columns: ['calzado'] },
        { id: 'botas', text: 'botas', columns: ['calzado'] },
        { id: 'sandalias', text: 'sandalias', columns: ['calzado'] },
        { id: 'zapatos', text: 'zapatos', columns: ['calzado'] },
        { id: 'tren', text: 'tren', columns: ['transportes'] },
        { id: 'avion', text: 'avión', columns: ['transportes'] },
        { id: 'barco', text: 'barco', columns: ['transportes'] },
        { id: 'autobus', text: 'autobús', columns: ['transportes'] },
        { id: 'tenedor', text: 'tenedor', columns: ['cubiertos'] },
        { id: 'cuchara', text: 'cuchara', columns: ['cubiertos'] },
        { id: 'cuchillo', text: 'cuchillo', columns: ['cubiertos'] },
        { id: 'cucharilla', text: 'cucharilla', columns: ['cubiertos'] },
      ],
    },
    {
      title: '4. Ordena las sílabas',
      type: 'build',
      instructions: 'Toca las sílabas en orden para formar cada palabra.',
      puzzles: [
        { prompt: 'Vive en el mar y tiene concha.', answer: ['me', 'ji', 'llón'], separator: '' },
        { prompt: 'Dos hermanos que nacen a la vez.', answer: ['ge', 'me', 'los'], separator: '' },
        { prompt: 'Cuidar con atención.', answer: ['vi', 'gi', 'lar'], separator: '' },
        { prompt: 'Sirven para cortar papel.', answer: ['ti', 'je', 'ras'], separator: '' },
      ],
    },
    {
      title: '5. Repaso del tema',
      type: 'quiz',
      instructions: 'Lo que has aprendido en el tema.',
      questions: [
        { prompt: '¿En qué lugar quedó Mica en el Rueda-rocas?', choices: ['Segunda', 'Primera', 'Última'], answer: 'Segunda' },
        { prompt: '¿Qué palabra se escribe con j?', choices: ['garaje', 'gigante', 'girasol'], answer: 'garaje' },
        { prompt: '¿Qué palabra se escribe con g?', choices: ['gelatina', 'jirafa', 'tijeras'], answer: 'gelatina' },
        { prompt: 'Pelota, escondite y comba son del campo semántico de…', choices: ['los juegos', 'la ropa', 'el tiempo'], answer: 'los juegos' },
        { prompt: 'Un resumen cuenta…', choices: ['lo más importante', 'todos los detalles'], answer: 'lo más importante' },
        { prompt: '«No hay primavera sin flores» es un…', choices: ['refrán', 'trabalenguas', 'cuento'], answer: 'refrán' },
      ],
    },
  ],
};

export default repaso;
