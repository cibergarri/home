import { chart } from '../scenes';

// Mates, tema 6: leer gráficos de barras: el tiempo del último mes en Monteoscuro, el mapa de
// Sofía, la temperatura de la estación de esquí de la Covatilla y el termómetro de Arabela.
const TIEMPO = chart([['☀️', 12], ['⛅', 8], ['☁️', 6], ['🌧️', 4], ['❄️', 0]]);
const MAPA = chart([['Lagos', 3], ['Montañas', 8], ['Ríos', 5], ['Carreteras', 10]]);
const COVATILLA = chart([['2020', 2], ['2021', 3], ['2022', 2], ['2023', 6], ['2024', 8]]);
const ARABELA = chart([['Lun', 12], ['Mar', 14], ['Mié', 10], ['Jue', 16], ['Vie', 8]], 2);

const graficosDeBarras = {
  slug: 'graficos-de-barras',
  title: 'Gráficos de barras',
  heading: 'El tiempo en Monteoscuro',
  type: 'quiz',
  instructions: 'El gráfico cuenta los días del último mes: ☀️ sol, ⛅ parcialmente nublado, ☁️ nublado, 🌧️ lluvia y ❄️ nieve. ¿Verdadero o falso?',
  questions: [
    { prompt: 'No ha nevado ningún día del mes.', scene: TIEMPO, choices: ['Verdadero', 'Falso'], answer: 'Verdadero' },
    { prompt: 'Hubo 11 días de sol.', scene: TIEMPO, choices: ['Verdadero', 'Falso'], answer: 'Falso' },
    { prompt: 'Estuvo parcialmente nublado 8 días.', scene: TIEMPO, choices: ['Verdadero', 'Falso'], answer: 'Verdadero' },
    { prompt: 'Llovió 5 días del mes.', scene: TIEMPO, choices: ['Verdadero', 'Falso'], answer: 'Falso' },
    { prompt: 'Hubo más días de sol que de lluvia.', scene: TIEMPO, choices: ['Verdadero', 'Falso'], answer: 'Verdadero' },
  ],
  more: [
    {
      title: 'Completa con los datos',
      type: 'numbers',
      write: true,
      instructions: 'Mira la altura de cada barra y escribe el número.',
      questions: [
        { story: '¿Cuántos días hizo sol?', prompt: '? días', scene: TIEMPO, answer: 12 },
        { story: '¿Cuántos días llovió?', prompt: '? días', scene: TIEMPO, answer: 4 },
        { story: '¿Cuántos días estuvo nublado?', prompt: '? días', scene: TIEMPO, answer: 6 },
        { story: '¿Cuántos días hubo de sol y de cielo nublado, juntando los dos?', prompt: '12 + 6 = ?', scene: TIEMPO, answer: 18 },
        { story: '¿Cuántos días tuvo el mes en total?', prompt: '12 + 8 + 6 + 4 + 0 = ?', scene: TIEMPO, answer: 30 },
      ],
    },
    {
      title: 'El mapa de Sofía',
      type: 'quiz',
      instructions: 'Sofía ha contado lo que hay en un mapa y lo ha puesto en un gráfico.',
      questions: [
        { prompt: '¿Cuántas montañas hay en el mapa?', scene: MAPA, choices: ['5', '8', '10'], answer: '8' },
        { prompt: '¿De qué hay más en el mapa?', scene: MAPA, choices: ['Lagos', 'Ríos', 'Carreteras'], answer: 'Carreteras' },
        { prompt: '¿De qué hay menos en el mapa?', scene: MAPA, choices: ['Montañas', 'Lagos', 'Ríos'], answer: 'Lagos' },
        { prompt: '¿Cuántos ríos hay?', scene: MAPA, choices: ['3', '8', '5'], answer: '5' },
      ],
    },
    {
      title: 'La estación de esquí',
      type: 'quiz',
      instructions: 'El gráfico muestra la temperatura más alta del 15 de febrero en la Covatilla, en grados (ºC), durante 5 años.',
      questions: [
        { prompt: '¿Qué año hizo más calor ese día?', scene: COVATILLA, choices: ['2020', '2023', '2024'], answer: '2024' },
        { prompt: '¿Qué dos años tuvieron la misma temperatura?', scene: COVATILLA, choices: ['2021 y 2023', '2020 y 2022', '2023 y 2024'], answer: '2020 y 2022' },
        { prompt: '¿Qué temperatura hubo en 2023?', scene: COVATILLA, choices: ['3 ºC', '8 ºC', '6 ºC'], answer: '6 ºC' },
        { prompt: '¿Crees que en 2024 se pudo esquiar bien?', scene: COVATILLA, choices: ['Sí, hacía muchísimo frío', 'Es difícil: con calor la nieve se derrite'], answer: 'Es difícil: con calor la nieve se derrite' },
      ],
    },
    {
      title: 'El termómetro de Arabela',
      type: 'numbers',
      write: true,
      instructions: 'Arabela ha medido la temperatura a las 12 del mediodía durante una semana. Cada línea del gráfico sube 2 grados.',
      questions: [
        { story: '¿Qué temperatura hubo el lunes?', prompt: '? ºC', scene: ARABELA, answer: 12 },
        { story: '¿Qué temperatura hubo el jueves, el día más caluroso?', prompt: '? ºC', scene: ARABELA, answer: 16 },
        { story: '¿Cuántos grados más hizo el jueves que el viernes?', prompt: '16 - 8 = ?', scene: ARABELA, answer: 8 },
        { story: '¿Cuántos grados más hizo el martes que el miércoles?', prompt: '? ºC más', scene: ARABELA, answer: 4 },
      ],
    },
  ],
};

export default graficosDeBarras;
