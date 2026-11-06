import { shapes } from '../scenes';

// Mates, tema 9: figuras simétricas. Al doblar una figura simétrica por su eje de simetría, las dos
// mitades coinciden. Figuras, letras, el cuadrado y los monumentos del desafío de Malún.
const axis = kind => shapes({ kind, axis: true });
const YES_NO = ['Sí, las dos mitades coinciden', 'No, las mitades son distintas'];

const simetria = {
  slug: 'simetria',
  title: 'Figuras simétricas',
  heading: '¿Es un eje de simetría?',
  type: 'quiz',
  instructions: 'Imagina que doblas la figura por la línea de puntos. ¿Coinciden las dos mitades?',
  questions: [
    { prompt: '¿El corazón es simétrico por esta línea?', scene: axis('corazon'), choices: YES_NO, answer: YES_NO[0] },
    { prompt: '¿Y la nube?', scene: axis('nube'), choices: YES_NO, answer: YES_NO[1] },
    { prompt: '¿La mariposa es simétrica por esta línea?', scene: axis('mariposa'), choices: YES_NO, answer: YES_NO[0] },
    { prompt: '¿Y la bandera, doblada por esta línea?', scene: axis('bandera'), choices: YES_NO, answer: YES_NO[1] },
    { prompt: '¿El cuadrado es simétrico por esta línea?', scene: axis('cuadrado'), choices: YES_NO, answer: YES_NO[0] },
    { prompt: '¿Y el triángulo?', scene: axis('triangulo'), choices: YES_NO, answer: YES_NO[0] },
  ],
  more: [
    {
      title: 'Letras simétricas',
      type: 'quiz',
      instructions: 'Una letra es simétrica si al doblarla por la mitad las dos partes coinciden.',
      questions: [
        { prompt: '¿Qué letra es simétrica?', say: false, choices: ['A', 'F', 'R'], answer: 'A' },
        { prompt: '¿Y cuál de estas?', say: false, choices: ['G', 'M', 'J'], answer: 'M' },
        { prompt: '¿Qué letra se puede doblar en dos mitades iguales?', say: false, choices: ['L', 'S', 'T'], answer: 'T' },
        { prompt: 'Busca la letra simétrica.', say: false, choices: ['U', 'P', 'Z'], answer: 'U' },
        { prompt: '¿Cuál es simétrica?', say: false, choices: ['N', 'H', 'G'], answer: 'H' },
      ],
    },
    {
      title: 'Para pensar',
      type: 'quiz',
      instructions: 'Piensa en lo que has aprendido sobre la simetría.',
      questions: [
        { prompt: '¿Qué pasa al doblar una figura simétrica por su eje?', choices: ['Las dos mitades coinciden', 'Sale una figura nueva'], answer: 'Las dos mitades coinciden' },
        { prompt: '¿Cuántos ejes de simetría tiene un cuadrado?', scene: shapes('cuadrado'), choices: ['1', '2', '4'], answer: '4' },
        {
          prompt: 'La Torre Eiffel, la Alhambra y el Templo de Diana de Mérida tienen algo en común. ¿Qué es?',
          choices: ['Son simétricos', 'Son redondos', 'Están en París'],
          answer: 'Son simétricos',
        },
      ],
    },
  ],
};

export default simetria;
