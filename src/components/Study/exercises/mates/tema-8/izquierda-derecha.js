// Mates, tema 8: izquierda y derecha cruzadas. Cuando alguien está de frente a ti, su mano derecha
// está a tu izquierda. Y quién está a la izquierda o a la derecha de quién en una fila.
const ROW = 'De izquierda a derecha están: Topi, Lena, Mica y Teo.';

const izquierdaDerecha = {
  slug: 'izquierda-derecha',
  title: 'Izquierda y derecha',
  heading: '¿Quién está a cada lado?',
  type: 'quiz',
  instructions: `${ROW} Contesta mirando la fila desde delante.`,
  questions: [
    { prompt: '¿Quién está a la izquierda de Lena?', choices: ['Topi', 'Mica', 'Teo'], answer: 'Topi' },
    { prompt: '¿Quién está a la derecha de Mica?', choices: ['Topi', 'Lena', 'Teo'], answer: 'Teo' },
    { prompt: '¿Quién está entre Lena y Teo?', choices: ['Topi', 'Mica'], answer: 'Mica' },
    { prompt: '¿Quién está más a la izquierda de todos?', choices: ['Topi', 'Teo'], answer: 'Topi' },
    { prompt: 'Lena está a la izquierda de Mica y a la derecha de…', choices: ['Topi', 'Teo'], answer: 'Topi' },
  ],
  more: [
    {
      title: 'Izquierda y derecha cruzadas',
      type: 'quiz',
      instructions: 'Cuando alguien está de frente a ti, su derecha está en tu izquierda. ¡Están cruzadas! Pruébalo con un compañero.',
      questions: [
        {
          prompt: 'Una persona está de frente a ti. Su mano derecha está…',
          choices: ['a tu izquierda', 'a tu derecha'],
          answer: 'a tu izquierda',
        },
        {
          prompt: 'Una persona está de espaldas a ti, mirando hacia donde miras tú. Su mano derecha está…',
          choices: ['a tu izquierda', 'a tu derecha'],
          answer: 'a tu derecha',
        },
        {
          prompt: 'El policía está de frente a ti y sujeta la paleta con la mano que ves a tu derecha. ¿Con qué mano la sujeta?',
          choices: ['Con su mano derecha', 'Con su mano izquierda'],
          answer: 'Con su mano izquierda',
        },
        {
          prompt: 'Leonor y el médico están de frente y chocan la mano. Leonor levanta su mano derecha y el médico la mano que tiene enfrente. ¿Qué mano levanta el médico?',
          choices: ['Su mano derecha', 'Su mano izquierda'],
          answer: 'Su mano izquierda',
        },
        {
          prompt: 'Topi está de frente a ti y levanta su mano izquierda. ¿En qué lado la ves tú?',
          choices: ['A mi izquierda', 'A mi derecha'],
          answer: 'A mi derecha',
        },
      ],
    },
  ],
};

export default izquierdaDerecha;
