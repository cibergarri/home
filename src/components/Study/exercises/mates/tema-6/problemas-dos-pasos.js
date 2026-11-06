import { chart } from '../scenes';

// Mates, tema 6: problemas de dos pasos: primero se calcula una cosa y con ese resultado se
// calcula la pregunta. Los puntos del concurso de Teo, Mica y Lena, y otros problemas del tiempo.
const CONCURSO = chart([['Teo', 60], ['Mica', 50], ['Lena', 40]], 10);
const PRUEBA = chart([['Teo', 40], ['Mica', 50], ['Lena', 50]], 10);

const problemasDosPasos = {
  slug: 'problemas-dos-pasos',
  title: 'Problemas de dos pasos',
  heading: 'El concurso',
  type: 'quiz',
  instructions: 'Teo, Mica y Lena han ganado puntos en un concurso. Con 150 puntos se consigue la maqueta de los planetas, con 60 un libro y con 20 unas pegatinas.',
  questions: [
    { prompt: '¿Quién ha conseguido más puntos?', scene: CONCURSO, choices: ['Mica', 'Teo', 'Lena'], answer: 'Teo' },
    { prompt: '¿Quién ha conseguido menos puntos?', scene: CONCURSO, choices: ['Teo', 'Mica', 'Lena'], answer: 'Lena' },
    { prompt: '¿Puede Teo conseguir el libro de 60 puntos él solo?', scene: CONCURSO, choices: ['No', 'Sí'], answer: 'Sí' },
    { prompt: '¿Puede alguno conseguir la maqueta él solo?', scene: CONCURSO, choices: ['Sí', 'No'], answer: 'No' },
    { prompt: '¿Qué pueden hacer para conseguir la maqueta?', scene: CONCURSO, choices: ['Rendirse', 'Juntar todos sus puntos'], answer: 'Juntar todos sus puntos' },
  ],
  more: [
    {
      title: 'Juntan los puntos',
      type: 'numbers',
      write: true,
      instructions: 'Suma los puntos de los tres y compara con los 150 de la maqueta. Pulsa ✓ después de cada número.',
      questions: [
        { story: '¿Cuántos puntos tienen entre los tres?', prompt: '60 + 50 + 40 = ?', scene: CONCURSO, answer: 150 },
        { story: 'La maqueta cuesta 150 puntos. ¿Cuántos puntos les sobran?', prompt: '150 - 150 = ?', answer: 0 },
      ],
    },
    {
      title: 'El termómetro',
      type: 'quiz',
      instructions: 'En la siguiente prueba, el pluviómetro (mide la lluvia) cuesta 200 puntos y el termómetro 100 puntos.',
      questions: [
        { prompt: '¿Alguno puede conseguir el pluviómetro él solo?', scene: PRUEBA, choices: ['Sí', 'No'], answer: 'No' },
        { prompt: '¿Y el termómetro?', scene: PRUEBA, choices: ['Sí', 'No'], answer: 'No' },
        { prompt: '¿Quiénes pueden juntar justo 100 puntos para el termómetro?', scene: PRUEBA, choices: ['Teo y Mica', 'Mica y Lena', 'Teo y Lena'], answer: 'Mica y Lena' },
        { prompt: 'Si juntan los puntos de los tres, ¿consiguen el pluviómetro de 200 puntos?', scene: PRUEBA, choices: ['Sí', 'No'], answer: 'No' },
      ],
    },
    {
      title: 'Primero un paso, luego otro',
      type: 'numbers',
      write: true,
      instructions: 'Calcula el primer paso y usa su resultado en el segundo. Pulsa ✓ después de cada número.',
      questions: [
        {
          story: 'En el pluviómetro de Arabela había 25 litros. Por la noche llovieron 18 litros más. Por la mañana usa 30 litros para regar. ¿Cuántos litros quedan?',
          prompt: '25 + 18 = ?   ? - 30 = ?',
          answer: [43, 43, 13],
        },
        {
          story: 'Teo tenía 64 cromos del tiempo. Le regalan 20 y después da 35 a Mica. ¿Cuántos cromos tiene ahora?',
          prompt: '64 + 20 = ?   ? - 35 = ?',
          answer: [84, 84, 49],
        },
        {
          story: 'En un huerto había 138 lechugas. Granizó y se perdieron 29. Después plantaron 50 más. ¿Cuántas lechugas hay ahora?',
          prompt: '138 - 29 = ?   ? + 50 = ?',
          answer: [109, 109, 159],
        },
        {
          story: 'Lena tiene 150 puntos. Cambia 60 por un libro y 20 por unas pegatinas. ¿Cuántos puntos le quedan?',
          prompt: '150 - 60 = ?   ? - 20 = ?',
          answer: [90, 90, 70],
        },
      ],
    },
  ],
};

export default problemasDosPasos;
