import { digital } from '../scenes';

// Mates, tema 9: horas, minutos y segundos. 1 hora son 60 minutos y 1 minuto son 60 segundos. Qué
// hora será 60 minutos o 1 minuto después, y cuánto tardamos en hacer las cosas.
const minutosSegundos = {
  slug: 'minutos-segundos',
  title: 'Minutos y segundos',
  heading: 'Horas, minutos y segundos',
  type: 'numbers',
  write: true,
  instructions: '1 hora (h) son 60 minutos (min). 1 minuto (min) son 60 segundos (s).',
  questions: [
    { prompt: '60 minutos son ? hora', answer: 1 },
    { prompt: '60 minutos + 60 minutos = ? horas', answer: 2 },
    { prompt: '60 segundos son ? minuto', answer: 1 },
    { prompt: '2 minutos son ? segundos', answer: 120 },
    { prompt: 'Media hora son ? minutos', answer: 30 },
    { story: '¿Cuántos minutos hay en 3 horas?', prompt: '3 × 60 = 60 + 60 + 60 = ?', answer: 180 },
    { story: '¿Cuántos segundos hay en 5 minutos?', prompt: '5 × 60 = 60 + 60 + 60 + 60 + 60 = ?', answer: 300 },
  ],
  more: [
    {
      title: 'Parejas que forman un minuto',
      type: 'match',
      instructions: 'Une cada tiempo con lo que le falta para llegar a 60 segundos.',
      columns: ['Segundos', 'Y para 1 minuto…'],
      pairs: [
        { id: '30', en: '30 segundos', es: 'otros 30 segundos' },
        { id: '40', en: '40 segundos', es: '20 segundos más' },
        { id: '10', en: '10 segundos', es: '50 segundos más' },
        { id: '15', en: '15 segundos', es: '45 segundos más' },
        { id: '25', en: '25 segundos', es: '35 segundos más' },
      ],
    },
    {
      title: '¿Qué hora será?',
      type: 'numbers',
      write: true,
      instructions: '60 minutos después es 1 hora más. Pulsa ✓ después de cada número.',
      questions: [
        { story: 'Son las 8:30. ¿Qué hora será 60 minutos después?', scene: digital(8, 30), prompt: 'Las ? y ? minutos', answer: [9, 30] },
        { story: 'Son las 11:14. ¿Qué hora será 60 minutos después?', scene: digital(11, 14), prompt: 'Las ? y ? minutos', answer: [12, 14] },
        { story: 'Son las 10:59. ¿Qué hora será dentro de 1 minuto?', scene: digital(10, 59), prompt: 'Las ? en punto', answer: 11 },
        { story: 'Son las 6:59. ¿Qué hora será dentro de 1 minuto?', scene: digital(6, 59), prompt: 'Las ? en punto', answer: 7 },
      ],
    },
    {
      title: '¿Cuánto tardas?',
      type: 'quiz',
      instructions: 'Piensa si se tarda horas, minutos o segundos.',
      questions: [
        { prompt: '¿Cuánto tardas en lavarte los dientes? 🪥', choices: ['2 segundos', '2 minutos', '2 horas'], answer: '2 minutos' },
        { prompt: '¿Cuánto duermes por la noche? 😴', choices: ['9 segundos', '9 minutos', '9 horas'], answer: '9 horas' },
        { prompt: '¿Cuánto tardas en parpadear? 👁️', choices: ['1 segundo', '1 minuto', '1 hora'], answer: '1 segundo' },
        { prompt: '¿Cuánto dura una película? 🎬', choices: ['2 segundos', '2 minutos', '2 horas'], answer: '2 horas' },
        { prompt: '¿Cuánto tardas en desayunar? 🥣', choices: ['15 segundos', '15 minutos', '15 horas'], answer: '15 minutos' },
        { prompt: 'Son las 10:59 y pasa 1 minuto. ¿Qué hora es?', say: false, choices: ['10:60', '11:00', '10:58'], answer: '11:00' },
      ],
    },
  ],
};

export default minutosSegundos;
