// Mates, bienvenida: los números de 1.º. Cómo se lee cada número (el crucigrama), el orden de los
// amigos de Teo en la fila, y sumas y restas para descubrir dónde ha ido Teo de vacaciones.
const numeros = {
  slug: 'numeros',
  title: 'Números, sumas y restas',
  heading: '¿Cómo se lee?',
  type: 'match',
  instructions: 'Toca un número y después cómo se lee.',
  columns: ['Número', 'Se lee'],
  pairs: [
    { id: '27', en: '27', es: 'veintisiete' },
    { id: '60', en: '60', es: 'sesenta' },
    { id: '46', en: '46', es: 'cuarenta y seis' },
    { id: '25', en: '25', es: 'veinticinco' },
    { id: '13', en: '13', es: 'trece' },
    { id: '31', en: '31', es: 'treinta y uno' },
    { id: '12', en: '12', es: 'doce' },
    { id: '15', en: '15', es: 'quince' },
  ],
  more: [
    {
      title: 'En la fila',
      type: 'quiz',
      instructions: 'A Teo le gusta volver al cole y ver a sus amigos. Están en fila: Lena, Mica, Teo, Topi y Arabela.',
      questions: [
        {
          prompt: '¿Quién es el primero de la fila?', choices: ['Lena', 'Teo', 'Arabela'], answer: 'Lena',
        },
        {
          prompt: '¿En qué lugar está Teo?', choices: ['Segundo', 'Tercero', 'Cuarto'], answer: 'Tercero',
        },
        {
          prompt: '¿Quién está en segundo lugar?', choices: ['Mica', 'Topi', 'Lena'], answer: 'Mica',
        },
        {
          prompt: '¿En qué lugar está Arabela, la última?', choices: ['Cuarta', 'Quinta', 'Sexta'], answer: 'Quinta',
        },
        {
          prompt: '¿Qué va después de octavo?', choices: ['Séptimo', 'Noveno', 'Décimo'], answer: 'Noveno',
        },
        {
          prompt: '¿Qué va antes de décimo?', choices: ['Noveno', 'Sexto', 'Primero'], answer: 'Noveno',
        },
      ],
    },
    {
      title: 'Sumas y restas',
      type: 'numbers',
      write: true,
      instructions: 'Resuelve las operaciones. Puedes usar los bloques o tu pizarra.',
      questions: [
        { prompt: '13 + 13 = ?', answer: 26 },
        { prompt: '36 + 9 = ?', answer: 45 },
        { prompt: '59 - 34 = ?', answer: 25 },
        { prompt: '99 - 52 = ?', answer: 47 },
        { prompt: '24 + 15 = ?', answer: 39 },
        { prompt: '68 - 23 = ?', answer: 45 },
        {
          story: 'Teo tiene 13 conchas de la playa y Lena le da 13 más. ¿Cuántas conchas tiene Teo?',
          data: [[13, 'conchas tiene Teo'], [13, 'conchas le da Lena']],
          prompt: '? conchas',
          answer: 26,
        },
      ],
    },
  ],
};

export default numeros;
