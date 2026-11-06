// Mates, tema 5: los números ordinales hasta el 20.º, que dicen la posición: la carrera de
// patitos, la fila de peces y la carrera en la piscina de Monteoscuro.
const ordinales = {
  slug: 'ordinales',
  title: 'Números ordinales hasta el 20.º',
  heading: 'Del 1.º al 10.º',
  type: 'match',
  instructions: 'Los números ordinales dicen la posición. Une cada número con su nombre.',
  columns: ['Número', 'Se lee'],
  pairs: [
    { id: 'o1', en: '1.º', es: 'primero' },
    { id: 'o2', en: '2.º', es: 'segundo' },
    { id: 'o3', en: '3.º', es: 'tercero' },
    { id: 'o4', en: '4.º', es: 'cuarto' },
    { id: 'o5', en: '5.º', es: 'quinto' },
    { id: 'o6', en: '6.º', es: 'sexto' },
    { id: 'o7', en: '7.º', es: 'séptimo' },
    { id: 'o8', en: '8.º', es: 'octavo' },
    { id: 'o9', en: '9.º', es: 'noveno' },
    { id: 'o10', en: '10.º', es: 'décimo' },
  ],
  more: [
    {
      title: 'Del 11.º al 20.º',
      type: 'match',
      instructions: 'Une cada número con su nombre. Fíjate: casi todos empiezan por "decimo".',
      columns: ['Número', 'Se lee'],
      pairs: [
        { id: 'o11', en: '11.º', es: 'undécimo' },
        { id: 'o12', en: '12.º', es: 'duodécimo' },
        { id: 'o13', en: '13.º', es: 'decimotercero' },
        { id: 'o14', en: '14.º', es: 'decimocuarto' },
        { id: 'o15', en: '15.º', es: 'decimoquinto' },
        { id: 'o16', en: '16.º', es: 'decimosexto' },
        { id: 'o17', en: '17.º', es: 'decimoséptimo' },
        { id: 'o18', en: '18.º', es: 'decimoctavo' },
        { id: 'o19', en: '19.º', es: 'decimonoveno' },
        { id: 'o20', en: '20.º', es: 'vigésimo' },
      ],
    },
    {
      title: 'Forma el ordinal',
      type: 'build',
      instructions: 'Toca los trozos en orden para formar el nombre del número.',
      puzzles: [
        { prompt: '13.º', answer: ['decimo', 'tercero'], separator: '' },
        { prompt: '16.º', answer: ['decimo', 'sexto'], separator: '' },
        { prompt: '14.º', answer: ['decimo', 'cuarto'], separator: '' },
        { prompt: '19.º', answer: ['decimo', 'noveno'], separator: '' },
        { prompt: '15.º', answer: ['decimo', 'quinto'], separator: '' },
      ],
    },
    {
      title: '¿En qué posición va?',
      type: 'quiz',
      instructions: 'Piensa en la fila o en la carrera. Si adelantas a alguien, tu número baja.',
      questions: [
        {
          prompt: 'En una carrera de cuatro, Mica ha llegado la primera y Topi justo detrás. ¿En qué posición ha quedado Topi?',
          choices: ['Segundo', 'Tercero', 'Primero'],
          answer: 'Segundo',
        },
        {
          prompt: 'Teo nada en la posición decimotercera y Mica va justo delante. ¿En qué posición va Mica?',
          choices: ['Undécima', 'Duodécima', 'Decimocuarta'],
          answer: 'Duodécima',
        },
        {
          prompt: 'Lena va quinta en la piscina. ¿Cuántos puestos tiene que adelantar para ir la primera?',
          choices: ['4 puestos', '5 puestos', '6 puestos'],
          answer: '4 puestos',
        },
        {
          prompt: 'Topi va undécimo. Si adelanta a un nadador, ¿en qué posición irá?',
          choices: ['Duodécimo', 'Noveno', 'Décimo'],
          answer: 'Décimo',
        },
        {
          prompt: '¿Qué posición va justo después de la decimonovena?',
          choices: ['Undécima', 'Vigésima', 'Decimoctava'],
          answer: 'Vigésima',
        },
        {
          prompt: '¿Qué posición va justo antes de la undécima?',
          choices: ['Décima', 'Duodécima', 'Novena'],
          answer: 'Décima',
        },
        {
          prompt: 'Un patito está entre la posición decimotercera y la decimoquinta. ¿En cuál está?',
          choices: ['Decimosexta', 'Duodécima', 'Decimocuarta'],
          answer: 'Decimocuarta',
        },
        {
          prompt: 'Si una fila de peces se da la vuelta y mira hacia el otro lado, ¿quién es ahora el primero?',
          choices: ['El del medio', 'El que era el último', 'El mismo de antes'],
          answer: 'El que era el último',
        },
      ],
    },
  ],
};

export default ordinales;
