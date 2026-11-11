// Naturales, tema 2: ¿tenemos hábitos saludables? La higiene, el ejercicio, las posturas, el
// descanso y la alimentación.
const habitos = {
  slug: 'habitos',
  title: '¿Tenemos hábitos saludables?',
  heading: 'Los hábitos saludables',
  type: 'match',
  instructions: 'Para cuidar nuestra salud, es importante mantener unos hábitos saludables. Toca un hábito y después lo que nos dice.',
  root: 'Hábitos saludables',
  columns: ['Hábito', '¿Qué hacemos?'],
  pairs: [
    { id: 'higiene', en: 'Higiene', es: 'Lavarnos las manos, ducharnos y cepillarnos los dientes después de cada comida.' },
    { id: 'ejercicio', en: 'Ejercicio', es: 'Hacer deporte para fortalecer los músculos y los huesos.' },
    { id: 'posturas', en: 'Posturas', es: 'Sentarnos con la espalda recta para no hacernos daño.' },
    { id: 'descanso', en: 'Descanso', es: 'Dormir unas diez horas cada día.' },
    { id: 'alimentacion', en: 'Alimentación', es: 'Comer mucha fruta y verdura para crecer sanos.' },
  ],
  more: [
    {
      title: '¿Es un hábito saludable?',
      type: 'sort',
      instructions: 'Lleva cada tarjeta a su sitio: ¿es un hábito saludable o no?',
      columns: [
        { id: 'si', title: '✅ Saludable' },
        { id: 'no', title: '❌ No saludable' },
      ],
      cards: [
        { id: 'ducharse', text: 'Ducharse a menudo', columns: ['si'] },
        { id: 'tenis', text: 'Jugar al tenis a menudo', columns: ['si'] },
        { id: 'fruta', text: 'Comer fruta todos los días', columns: ['si'] },
        { id: 'espalda', text: 'Sentarse con la espalda recta', columns: ['si'] },
        { id: 'manos', text: 'Lavarse las manos antes de comer', columns: ['si'] },
        { id: 'diez-horas', text: 'Dormir unas diez horas', columns: ['si'] },
        { id: 'seis-horas', text: 'Dormir seis horas', columns: ['no'] },
        { id: 'dientes-una-vez', text: 'Lavarse los dientes una vez al día', columns: ['no'] },
        { id: 'chuches', text: 'Comer chucherías todos los días', columns: ['no'] },
        { id: 'pantallas', text: 'Pasar toda la tarde con la tableta', columns: ['no'] },
      ],
    },
    {
      title: 'Mi higiene',
      type: 'quiz',
      instructions: '¿Qué usas para tu higiene?',
      questions: [
        { prompt: '¿Con qué te lavas los dientes?', choices: ['Con el cepillo y la pasta de dientes', 'Con el champú'], answer: 'Con el cepillo y la pasta de dientes' },
        { prompt: '¿Con qué te lavas el pelo?', choices: ['Con el champú', 'Con la pasta de dientes'], answer: 'Con el champú' },
        { prompt: '¿Con qué te lavas las manos?', choices: ['Con agua y jabón', 'Solo con una servilleta'], answer: 'Con agua y jabón' },
        { prompt: '¿Cuándo te cepillas los dientes?', choices: ['Después de cada comida', 'Una vez a la semana'], answer: 'Después de cada comida' },
        { prompt: '¿Cuántas horas deben dormir los niños y las niñas?', choices: ['Unas diez horas', 'Unas cinco horas'], answer: 'Unas diez horas' },
        { prompt: '¿Cómo te sientas para estudiar?', choices: ['Con la espalda recta', 'Encorvado y torcido'], answer: 'Con la espalda recta' },
      ],
    },
  ],
};

export default habitos;
