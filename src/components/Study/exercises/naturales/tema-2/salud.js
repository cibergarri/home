// Naturales, tema 2: ¿cómo cuidamos nuestra salud? La salud y la enfermedad, los medicamentos y las
// vacunas, y los profesionales que nos atienden en el centro de salud.
const salud = {
  slug: 'salud',
  title: '¿Cómo cuidamos nuestra salud?',
  heading: '¿Quién nos atiende?',
  type: 'match',
  instructions: 'Cuando no nos sentimos bien, vamos al centro de salud. Toca un profesional y después lo que hace.',
  root: 'Centro de salud',
  columns: ['Profesional', '¿Qué hace?'],
  pairs: [
    { id: 'medico', en: 'Médico o médica', es: 'Averigua qué enfermedad tenemos y decide cómo curarla.' },
    { id: 'pediatra', en: 'Pediatra', es: 'Es el médico de los niños y las niñas.' },
    { id: 'enfermera', en: 'Enfermero o enfermera', es: 'Realiza las curas y pone las vacunas.' },
    { id: 'psicologa', en: 'Psicólogo o psicóloga', es: 'Nos ayuda cuando tenemos problemas emocionales.' },
  ],
  more: [
    {
      title: 'Salud y enfermedad',
      type: 'quiz',
      instructions: 'Lee y elige la respuesta correcta.',
      questions: [
        { prompt: 'Tenemos buena salud cuando…', choices: ['nuestro cuerpo funciona bien y nos sentimos bien', 'nos duele la cabeza'], answer: 'nuestro cuerpo funciona bien y nos sentimos bien' },
        { prompt: 'Si algún órgano de nuestro cuerpo no funciona bien, estamos…', choices: ['enfermos', 'contentos', 'cansados'], answer: 'enfermos' },
        { prompt: '¿Cuál es una enfermedad muy común?', choices: ['El resfriado', 'La alegría', 'El deporte'], answer: 'El resfriado' },
        { prompt: 'Para curar las enfermedades tomamos…', choices: ['medicamentos', 'vacunas', 'refrescos'], answer: 'medicamentos' },
        { prompt: 'Para prevenir algunas enfermedades nos ponemos…', choices: ['vacunas', 'tiritas', 'gafas'], answer: 'vacunas' },
        { prompt: 'Las vacunas ayudan a prevenir una enfermedad…', choices: ['antes de que se produzca', 'cuando ya estamos curados'], answer: 'antes de que se produzca' },
        { prompt: '¿Quién nos receta los medicamentos?', choices: ['El pediatra', 'El profesor', 'El cocinero'], answer: 'El pediatra' },
      ],
    },
  ],
};

export default salud;
