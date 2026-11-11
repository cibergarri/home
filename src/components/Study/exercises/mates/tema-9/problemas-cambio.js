import { bar, shapes } from '../scenes';

// Mates, tema 9: problemas de cambio con el tangram, el "trato justo". Es justo cambiar un
// triángulo mediano por dos pequeños. Si el mediano vale 8, cada pequeño vale 4, el cuadrado y el
// romboide (dos pequeños) valen 8, y el grande (dos medianos) vale 16.
const problemasCambio = {
  slug: 'problemas-cambio',
  title: 'Problemas de cambio',
  heading: 'El trato justo',
  type: 'numbers',
  write: true,
  instructions: 'Mica y Teo juegan con el tangram. Es un trato justo cambiar un triángulo mediano por dos pequeños. El triángulo mediano vale 8.',
  questions: [
    { story: 'Un triángulo pequeño es la mitad de uno mediano. ¿Cuánto vale?', scene: shapes('triangulo'), prompt: '8 = ? + ?', answer: [4, 4] },
    { story: 'El cuadrado se forma con dos triángulos pequeños. ¿Cuánto vale?', scene: shapes('cuadrado'), prompt: '4 + 4 = ?', answer: 8 },
    { story: 'El romboide también se forma con dos triángulos pequeños. ¿Cuánto vale?', prompt: '4 + 4 = ?', answer: 8 },
    { story: 'Un triángulo grande se forma con dos medianos. ¿Cuánto vale?', prompt: '8 + 8 = ?', answer: 16 },
    { story: '¿Por cuántos triángulos pequeños cambias un triángulo grande?', prompt: '? triángulos pequeños', answer: 4 },
  ],
  more: [
    {
      title: '¿Es un trato justo?',
      type: 'quiz',
      instructions: 'Un trato es justo si lo que das vale lo mismo que lo que recibes.',
      questions: [
        { prompt: 'Cambiar un triángulo mediano por dos pequeños, ¿es justo?', choices: ['Sí', 'No'], answer: 'Sí' },
        { prompt: 'Cambiar un triángulo mediano por uno grande, ¿es justo?', choices: ['Sí', 'No'], answer: 'No' },
        { prompt: 'Cambiar el cuadrado por un triángulo mediano, ¿es justo?', choices: ['Sí', 'No'], answer: 'Sí' },
        { prompt: 'Cambiar un triángulo grande por dos pequeños, ¿es justo?', choices: ['Sí', 'No'], answer: 'No' },
        {
          prompt: 'Alexa corta su tarta con la forma de las piezas del tangram. ¿Por qué el reparto no es justo?',
          choices: ['Porque los trozos no son del mismo tamaño', 'Porque la tarta es cuadrada', 'Porque hay siete trozos'],
          answer: 'Porque los trozos no son del mismo tamaño',
        },
      ],
    },
    {
      title: 'El precio de las figuras',
      type: 'numbers',
      write: true,
      instructions: 'Mira la barra y calcula el precio total.',
      questions: [
        {
          story: 'Un triángulo mediano cuesta 8 € y uno grande 16 €. ¿Cuánto cuestan los dos?',
          data: [[8, '€ cuesta el triángulo mediano'], [16, '€ cuesta el triángulo grande']],
          scene: bar({ total: '?', parts: [{ name: 'Mediano', value: '8 €', size: 8 }, { name: 'Grande', value: '16 €', size: 16 }] }),
          prompt: '? €',
          answer: 24,
        },
        {
          story: 'Teo compra 2 triángulos pequeños de 4 € y un cuadrado de 8 €. ¿Cuánto paga?',
          data: [[2, 'triángulos pequeños'], [4, '€ cuesta cada triángulo'], [8, '€ cuesta el cuadrado']],
          scene: bar({ total: '?', parts: [{ name: 'Pequeño 1', value: '4 €', size: 4 }, { name: 'Pequeño 2', value: '4 €', size: 4 }, { name: 'Cuadrado', value: '8 €', size: 8 }] }),
          prompt: '? €',
          answer: 16,
        },
      ],
    },
  ],
};

export default problemasCambio;
