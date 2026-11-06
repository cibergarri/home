import { table } from '../scenes';

// Mates, tema 8: planos y croquis. Un plano muestra un lugar visto desde arriba; un croquis es un
// dibujo sencillo de ese lugar. El plano de Monteoscuro, y la búsqueda del tesoro del desafío.
const MAP = table(['Izquierda', 'Centro', 'Derecha'], [
  ['Arriba', 'Bosque', 'Montañas', 'Lago'],
  ['En medio', 'Pantanos', 'Escuela', 'Praderas'],
  ['Abajo', 'Casas', 'Valle', 'Parque'],
]);

const planos = {
  slug: 'planos',
  title: 'Planos y croquis',
  heading: 'El plano de Monteoscuro',
  type: 'quiz',
  instructions: 'Este es el plano de Monteoscuro, visto desde arriba. La escuela está en el centro. Arriba están las Montañas y a la izquierda los Pantanos.',
  questions: [
    { prompt: '¿Qué reino está arriba de la escuela?', scene: MAP, choices: ['Montañas', 'Valle', 'Pantanos'], answer: 'Montañas' },
    { prompt: '¿Qué reino está a la izquierda de la escuela?', scene: MAP, choices: ['Praderas', 'Pantanos', 'Valle'], answer: 'Pantanos' },
    { prompt: '¿Qué reino está a la derecha de la escuela?', scene: MAP, choices: ['Praderas', 'Pantanos', 'Montañas'], answer: 'Praderas' },
    { prompt: '¿Qué reino está debajo de la escuela?', scene: MAP, choices: ['Montañas', 'Valle', 'Praderas'], answer: 'Valle' },
    { prompt: '¿Qué hay arriba, a la izquierda?', scene: MAP, choices: ['El bosque', 'El lago', 'El parque'], answer: 'El bosque' },
    { prompt: '¿Qué hay a la derecha del valle?', scene: MAP, choices: ['Las casas', 'El parque', 'La escuela'], answer: 'El parque' },
  ],
  more: [
    {
      title: 'Planos y croquis',
      type: 'quiz',
      instructions: 'Piensa en para qué sirven los planos y los croquis.',
      questions: [
        { prompt: 'Un plano muestra un lugar visto desde…', choices: ['arriba', 'abajo', 'un lado'], answer: 'arriba' },
        { prompt: '¿Qué es un croquis?', choices: ['Un dibujo sencillo de un lugar, sin detalles', 'Una foto muy grande', 'Un cuento'], answer: 'Un dibujo sencillo de un lugar, sin detalles' },
        { prompt: '¿Para qué sirve el plano de una ciudad?', choices: ['Para saber cómo llegar a los sitios', 'Para medir el tiempo', 'Para contar dinero'], answer: 'Para saber cómo llegar a los sitios' },
        { prompt: 'Dibujas tu mesa vista desde arriba. ¿Cómo se ve un lápiz?', choices: ['Como una tira larga', 'Como un círculo'], answer: 'Como una tira larga' },
      ],
    },
    {
      title: 'La búsqueda del tesoro',
      type: 'numbers',
      write: true,
      instructions: 'Resuelve cada pista. La solución es cuántas casillas avanzas desde la escuela.',
      questions: [
        { story: '1.ª pista: ¿cuál es el doble de 5? Avanza ese número de casillas hacia arriba.', prompt: '? casillas hacia arriba', answer: 10 },
        { story: '2.ª pista: ¿cuál es el mayor número impar de una cifra? Avanza esas casillas hacia la derecha.', prompt: '? casillas a la derecha', answer: 9 },
        { story: '3.ª pista: ¿cuánto es 3 × 4? Avanza esas casillas hacia abajo.', prompt: '3 × 4 = ?', answer: 12 },
        { story: 'Has subido 10 casillas y has bajado 12. ¿Cuántas casillas por debajo de la escuela está el tesoro?', prompt: '12 - 10 = ?', answer: 2 },
      ],
    },
  ],
};

export default planos;
