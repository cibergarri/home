import { chart, table } from '../scenes';

// Mates, tema 5: leer tablas de datos (en las columnas, de arriba abajo; en las filas, de
// izquierda a derecha) y pasarlas a un gráfico de barras: el agua de los calderos y el agua que
// gasta Gonzalo en casa.
const CALDEROS = table(['Litros'], [['Teo', '2 L'], ['Lena', '3 L'], ['Mica', '0 L'], ['Topi', '4 L']]);
const GONZALO = table(['Litros'], [['Lavar los platos', '45 L'], ['Poner la lavadora', '37 L'], ['Bañarse', '130 L'], ['Lavarse las manos', '9 L']]);

const tablasDeDatos = {
  slug: 'tablas-de-datos',
  title: 'Tablas de datos',
  heading: 'El agua de los calderos',
  type: 'quiz',
  instructions: 'Mira la tabla: cuánta agua ha usado cada uno para lavar su caldero.',
  questions: [
    { prompt: '¿Quién ha gastado más agua?', scene: CALDEROS, choices: ['Lena', 'Mica', 'Topi', 'Teo'], answer: 'Topi' },
    { prompt: '¿Cuántos litros ha gastado Mica?', scene: CALDEROS, choices: ['4 L', '0 L', '2 L'], answer: '0 L' },
    { prompt: '¿Quién ha gastado 3 litros?', scene: CALDEROS, choices: ['Teo', 'Lena', 'Topi'], answer: 'Lena' },
    { prompt: '¿Quién ha gastado menos que Lena pero algo de agua?', scene: CALDEROS, choices: ['Mica', 'Topi', 'Teo'], answer: 'Teo' },
    { prompt: 'Mica no ha gastado agua. ¿Cómo puede ser?', scene: CALDEROS, choices: ['Ha gastado mucha agua', 'Aún no ha lavado su caldero'], answer: 'Aún no ha lavado su caldero' },
  ],
  more: [
    {
      title: 'Del gráfico a la tabla',
      type: 'numbers',
      write: true,
      instructions: 'Cada barra sube un cuadro por cada litro. Mira el gráfico y escribe.',
      questions: [
        { prompt: 'Teo: ? L', scene: chart([['Teo', 2], ['Lena', 3], ['Mica', 0], ['Topi', 4]]), answer: 2 },
        { prompt: 'Topi: ? L', scene: chart([['Teo', 2], ['Lena', 3], ['Mica', 0], ['Topi', 4]]), answer: 4 },
        { story: '¿Cuántos litros han gastado entre todos?', prompt: '2 + 3 + 0 + 4 = ?', answer: 9 },
        { story: '¿Cuántos litros más ha gastado Topi que Teo?', prompt: '4 - 2 = ?', answer: 2 },
      ],
    },
    {
      title: 'El agua de Gonzalo',
      type: 'quiz',
      instructions: 'Mira cuánta agua ha usado Gonzalo en cada tarea.',
      questions: [
        { prompt: '¿En qué tarea ha usado más agua?', scene: GONZALO, choices: ['Bañarse', 'Lavar los platos', 'Lavarse las manos'], answer: 'Bañarse' },
        { prompt: '¿En qué tarea ha usado menos agua?', scene: GONZALO, choices: ['Poner la lavadora', 'Lavar los platos', 'Lavarse las manos'], answer: 'Lavarse las manos' },
        { prompt: '¿Cuántos litros ha gastado al lavar los platos?', scene: GONZALO, choices: ['9 L', '45 L', '37 L'], answer: '45 L' },
        { prompt: '¿Qué puede hacer Gonzalo para ahorrar agua?', scene: GONZALO, choices: ['Ducharse en vez de bañarse', 'Poner la lavadora casi vacía', 'Dejar el grifo abierto'], answer: 'Ducharse en vez de bañarse' },
      ],
    },
    {
      title: 'Calcula con la tabla',
      type: 'tower',
      instructions: 'Usa los datos de Gonzalo y resta en torre.',
      questions: [
        { op: '-', a: 45, b: 9, story: 'Lavar los platos gasta 45 L y lavarse las manos 9 L. ¿Cuántos litros menos gasta al lavarse las manos?' },
        { op: '-', a: 45, b: 37, story: '¿Cuántos litros más gasta al lavar los platos que al poner la lavadora?' },
        { op: '+', a: 45, b: 37, story: '¿Cuántos litros gasta entre lavar los platos y poner la lavadora?' },
      ],
    },
  ],
};

export default tablasDeDatos;
