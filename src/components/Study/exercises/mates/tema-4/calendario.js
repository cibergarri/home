import { table } from '../scenes';

// Mates, tema 4: el calendario. Un año tiene 12 meses y 365 o 366 días; los meses de 30 y de 31
// días; verdadero o falso con el calendario; las cuatro estaciones; y cuántos días faltan para el
// día del «Vuelo libre» de Topi.
const OCTUBRE = table(['L', 'M', 'X', 'J', 'V', 'S', 'D'], [
  ['Semana 1', '', '', '', '1', '2', '3', '4'],
  ['Semana 2', '5', '6', '7', '8', '9', '10', '11'],
  ['Semana 3', '12', '13', '14', '15', '16', '17', '18'],
  ['Semana 4', '19', '20', '21', '22', '23', '24', '25'],
  ['Semana 5', '26', '27', '28', '29', '30', '31', ''],
]);

const month = (id, text, days) => ({ id, text, columns: [days] });

const calendario = {
  slug: 'calendario',
  title: 'El calendario',
  heading: 'Meses de 30 y de 31 días',
  type: 'sort',
  instructions: 'Arabela explica que la Tierra tarda unos 365 días en dar una vuelta al Sol: ¡un año! Lleva cada mes a su sitio.',
  columns: [
    { id: '31', title: '31 días' },
    { id: '30', title: '30 días' },
    { id: 'otro', title: '28 o 29 días' },
  ],
  cards: [
    month('enero', 'Enero', '31'),
    month('febrero', 'Febrero', 'otro'),
    month('marzo', 'Marzo', '31'),
    month('abril', 'Abril', '30'),
    month('mayo', 'Mayo', '31'),
    month('junio', 'Junio', '30'),
    month('julio', 'Julio', '31'),
    month('agosto', 'Agosto', '31'),
    month('septiembre', 'Septiembre', '30'),
    month('octubre', 'Octubre', '31'),
    month('noviembre', 'Noviembre', '30'),
    month('diciembre', 'Diciembre', '31'),
  ],
  more: [
    {
      title: '¿Verdadero o falso?',
      type: 'quiz',
      instructions: 'Piensa en el calendario y elige.',
      questions: [
        {
          prompt: 'Si hoy es lunes, dentro de 7 días será lunes también.', choices: ['Verdadero', 'Falso'], answer: 'Verdadero',
        },
        {
          prompt: 'Todos los meses empiezan el mismo día de la semana.', choices: ['Verdadero', 'Falso'], answer: 'Falso',
        },
        {
          prompt: 'En un año hay más meses que días.', choices: ['Verdadero', 'Falso'], answer: 'Falso',
        },
        {
          prompt: '¿Cuántos meses tiene un año?', choices: ['10', '12', '7'], answer: '12',
        },
        {
          prompt: '¿Cuántos días tiene un año?', choices: ['365 o 366', '100', '30 o 31'], answer: '365 o 366',
        },
        {
          prompt: '¿Por qué hay números en rojo en el calendario?', choices: ['Son días de fiesta', 'Son los lunes'], answer: 'Son días de fiesta',
        },
      ],
    },
    {
      title: 'Las estaciones',
      type: 'quiz',
      instructions: 'En un año hay 4 estaciones. El invierno va de finales de diciembre a finales de marzo; el verano, de finales de junio a finales de septiembre.',
      questions: [
        { prompt: '¿En enero es invierno?', choices: ['Sí', 'No'], answer: 'Sí' },
        { prompt: '¿En abril es invierno?', choices: ['Sí', 'No'], answer: 'No' },
        { prompt: '¿En mayo es verano?', choices: ['Sí', 'No'], answer: 'No' },
        { prompt: '¿En julio es verano?', choices: ['Sí', 'No'], answer: 'Sí' },
        {
          prompt: '¿Cuáles son las cuatro estaciones?',
          choices: ['Primavera, verano, otoño e invierno', 'Enero, febrero, marzo y abril', 'Lunes, martes, jueves y viernes'],
          answer: 'Primavera, verano, otoño e invierno',
        },
        {
          prompt: 'El otoño empieza a finales de septiembre. ¿Hasta cuándo dura?', choices: ['Hasta finales de diciembre', 'Hasta finales de junio'], answer: 'Hasta finales de diciembre',
        },
      ],
    },
    {
      title: 'El mes de octubre',
      type: 'numbers',
      write: true,
      instructions: 'Mira el calendario de octubre y cuenta los días.',
      questions: [
        {
          story: 'Topi y sus amigos celebran el día del «Vuelo libre» el 28 de octubre. Hoy es 19 de octubre. ¿Cuántos días faltan?',
          data: [[28, 'de octubre es el «Vuelo libre»'], [19, 'de octubre es hoy']],
          scene: OCTUBRE,
          prompt: 'Faltan ? días',
          answer: 9,
        },
        {
          story: '¿Cuántos días tiene octubre?', scene: OCTUBRE, prompt: '? días', answer: 31,
        },
        {
          story: '¿Cuántos lunes hay en este mes de octubre?', scene: OCTUBRE, prompt: '? lunes', answer: 4,
        },
        {
          story: 'Hoy es 12 de octubre. ¿Qué día del mes será dentro de 7 días?', data: [[12, 'de octubre es hoy'], [7, 'días después']], scene: OCTUBRE, prompt: 'El ? de octubre', answer: 19,
        },
        {
          story: 'Hoy es 5 de octubre. ¿Cuántos días faltan para el 31?', data: [[5, 'de octubre es hoy'], [31, 'de octubre, el último día']], scene: OCTUBRE, prompt: 'Faltan ? días', answer: 26,
        },
      ],
    },
  ],
};

export default calendario;
