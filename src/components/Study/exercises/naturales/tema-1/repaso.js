// Naturales, tema 1: comprueba tu progreso. Las funciones vitales y lo que hemos aprendido del
// cuerpo, para el atlas del cuerpo humano.
const NUTRICION = { id: 'nutricion', title: 'Nutrición', colour: '#f7c96f' };
const RELACION = { id: 'relacion', title: 'Relación', colour: '#a6db8a' };
const REPRODUCCION = { id: 'reproduccion', title: 'Reproducción', colour: '#f5a8c8' };

const repaso = {
  slug: 'repaso',
  title: 'Comprueba tu progreso',
  heading: 'Las funciones vitales',
  type: 'colour',
  instructions: 'Coge el color de cada función vital y colorea lo que hacemos en ella.',
  crayons: [NUTRICION, RELACION, REPRODUCCION],
  words: [
    { id: 'aire', word: 'Respiramos aire', crayon: 'nutricion' },
    { id: 'alimentos', word: 'Tomamos alimentos', crayon: 'nutricion' },
    { id: 'sentidos', word: 'Órganos de los sentidos', crayon: 'relacion' },
    { id: 'reaccionamos', word: 'Reaccionamos y nos movemos', crayon: 'relacion' },
    { id: 'hijos', word: 'Tenemos hijos e hijas', crayon: 'reproduccion' },
    { id: 'digestion', word: 'La digestión', crayon: 'nutricion' },
    { id: 'vista', word: 'La vista y el oído', crayon: 'relacion' },
  ],
  more: [
    {
      title: '¿Qué sabes del cuerpo?',
      type: 'quiz',
      instructions: 'Repasa todo el tema antes de hacer tu atlas del cuerpo humano.',
      questions: [
        { prompt: '¿Cuántas funciones vitales hay?', choices: ['Dos', 'Tres', 'Cinco'], answer: 'Tres' },
        { prompt: '¿Cuántos sentidos tenemos?', choices: ['Tres', 'Cinco', 'Diez'], answer: 'Cinco' },
        { prompt: 'El aire llega hasta los pulmones, y luego…', choices: ['lo expulsamos por la nariz o la boca', 'se queda dentro para siempre'], answer: 'lo expulsamos por la nariz o la boca' },
        { prompt: '¿Qué une los huesos entre sí?', choices: ['Las articulaciones', 'Los pulmones'], answer: 'Las articulaciones' },
        { prompt: '¿Por dónde bajan los alimentos hasta el estómago?', choices: ['Por el esófago', 'Por la tráquea'], answer: 'Por el esófago' },
        { prompt: '¿Por dónde baja el aire hasta los pulmones?', choices: ['Por el esófago', 'Por la tráquea'], answer: 'Por la tráquea' },
        { prompt: 'Cuando llegamos a la edad adulta…', choices: ['dejamos de crecer', 'crecemos más deprisa'], answer: 'dejamos de crecer' },
      ],
    },
  ],
};

export default repaso;
