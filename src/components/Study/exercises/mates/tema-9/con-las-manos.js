import { shapes } from '../scenes';

// Mates, tema 9: las actividades del cuaderno "Con las manos en las mates": construir las tablas
// del 2 y del 5 haciendo grupos de bloques, y las figuras simétricas, que al doblarlas por su eje
// de simetría tienen las dos partes iguales.
const axis = kind => shapes({ kind, axis: true });
const YES_NO = ['Sí, las dos partes coinciden', 'No, no coinciden'];

const conLasManos = {
  slug: 'con-las-manos',
  title: 'Con las manos en las mates',
  heading: 'Grupos de 2',
  type: 'numbers',
  write: true,
  instructions: 'Haz grupos de dos cubitos y cuenta. 3 veces 2 es 3 × 2 = 6. Escribe el número que falta.',
  questions: [
    { prompt: '3 × 2 = ?', answer: 6 },
    { prompt: '4 × ? = 8', answer: 2 },
    { prompt: '? × 2 = 10', answer: 5 },
    { prompt: '6 × ? = 12', answer: 2 },
    { prompt: '? × 2 = 14', answer: 7 },
    { prompt: '8 × 2 = ?', answer: 16 },
    { prompt: '? × 2 = 18', answer: 9 },
    { prompt: '10 × ? = 20', answer: 2 },
  ],
  more: [
    {
      title: 'Grupos de 5',
      type: 'numbers',
      write: true,
      instructions: 'Haz grupos de 5 cubitos azules y cuenta de 5 en 5.',
      questions: [
        { prompt: '3 × 5 = ?', answer: 15 },
        { prompt: '? × 5 = 20', answer: 4 },
        { prompt: '5 × ? = 25', answer: 5 },
        { prompt: '? × 5 = 35', answer: 7 },
        { prompt: '8 × 5 = ?', answer: 40 },
        { prompt: '? × 5 = 45', answer: 9 },
        { prompt: '10 × 5 = ?', answer: 50 },
        { prompt: '11 × 5 = ?', answer: 55 },
      ],
    },
    {
      title: '¿Qué multiplicación es?',
      type: 'quiz',
      instructions: 'Cuenta cuántos grupos hay y cuántos cubitos tiene cada grupo.',
      questions: [
        { prompt: 'Hay 4 grupos de 2 cubitos.', choices: ['4 × 2 = 8', '4 × 5 = 20', '4 + 2 = 6'], answer: '4 × 2 = 8' },
        { prompt: 'Hay 6 grupos de 5 cubitos.', choices: ['6 × 2 = 12', '6 × 5 = 30', '6 + 5 = 11'], answer: '6 × 5 = 30' },
        { prompt: 'Hay 9 grupos de 2 cubitos.', choices: ['9 × 2 = 18', '9 × 5 = 45', '2 × 2 = 4'], answer: '9 × 2 = 18' },
        { prompt: 'Hay 12 grupos de 5 cubitos.', choices: ['12 × 2 = 24', '12 × 5 = 50', '12 × 5 = 60'], answer: '12 × 5 = 60' },
        { prompt: '¿Cuántas veces 5 son 35?', choices: ['5 veces', '7 veces', '6 veces'], answer: '7 veces' },
        { prompt: '¿Cuántas veces 2 son 20?', choices: ['10 veces', '2 veces', '5 veces'], answer: '10 veces' },
      ],
    },
    {
      title: 'Dobla por la línea',
      type: 'quiz',
      instructions: 'Una figura es simétrica si al doblarla por su eje de simetría las dos partes coinciden.',
      questions: [
        { prompt: '¿El rectángulo es simétrico por esta línea?', scene: axis('rectangulo'), choices: YES_NO, answer: YES_NO[0] },
        { prompt: '¿Y la línea poligonal?', scene: axis('poligonal'), choices: YES_NO, answer: YES_NO[1] },
        { prompt: '¿El círculo es simétrico por esta línea?', scene: axis('circulo'), choices: YES_NO, answer: YES_NO[0] },
        { prompt: '¿Y la pirámide, doblada por esta línea?', scene: axis('piramide'), choices: YES_NO, answer: YES_NO[1] },
        { prompt: '¿El hexágono es simétrico por esta línea?', scene: axis('hexagono'), choices: YES_NO, answer: YES_NO[0] },
        { prompt: '¿Y la línea recta inclinada?', scene: axis('recta'), choices: YES_NO, answer: YES_NO[1] },
        { prompt: '¿El pentágono es simétrico por esta línea?', scene: axis('pentagono'), choices: YES_NO, answer: YES_NO[0] },
      ],
    },
    {
      title: '¿Es simétrica?',
      type: 'sort',
      instructions: 'Imagina que doblas cada cosa por la mitad. ¿Coinciden las dos partes?',
      columns: [{ id: 'si', title: 'Es simétrica' }, { id: 'no', title: 'No es simétrica' }],
      cards: [
        { id: 'corazon', text: '❤️ un corazón', columns: ['si'] },
        { id: 'mariposa', text: '🦋 una mariposa', columns: ['si'] },
        { id: 'circulo', text: 'un círculo', columns: ['si'] },
        { id: 'letra-a', text: 'la letra A', columns: ['si'] },
        { id: 'nube', text: '☁️ una nube', columns: ['no'] },
        { id: 'letra-f', text: 'la letra F', columns: ['no'] },
        { id: 'numero-7', text: 'el número 7', columns: ['no'] },
      ],
    },
  ],
};

export default conLasManos;
