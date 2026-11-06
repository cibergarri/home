// Lengua, tema 4: ¡diviértete con Topi! El código secreto, la poesía incompleta, letras
// desordenadas y palabras encadenadas.
const CODE = '1 = A, 2 = B, 3 = C, 4 = D, 5 = E, 6 = F, 7 = G, 8 = H, 9 = I, 10 = J, 11 = K, 12 = L, 13 = M, 14 = N, 15 = Ñ, 16 = O, 17 = P, 18 = Q, 19 = R, 20 = S, 21 = T, 22 = U, 23 = V, 24 = W, 25 = X, 26 = Y, 27 = Z.';

const juegos = {
  slug: 'juegos',
  title: '¡Diviértete con Topi!',
  heading: 'El código secreto',
  type: 'quiz',
  instructions: `Cada número es una letra: ${CODE} Descifra el código.`,
  questions: [
    { prompt: '5 12 · 17 19 9 14 3 9 17 9 21 16', say: false, choices: ['El principito', 'El petirrojo', 'El reloj universal'], answer: 'El principito' },
    { prompt: '13 9 3 1', say: false, choices: ['Mica', 'Lena', 'Topi'], answer: 'Mica' },
    { prompt: '21 16 17 9', say: false, choices: ['Topi', 'Teo', 'Mica'], answer: 'Topi' },
    { prompt: '12 5 14 1', say: false, choices: ['Lena', 'Luna', 'Mica'], answer: 'Lena' },
    { prompt: '27 5 22 20', say: false, choices: ['Zeus', 'Hades', 'Teo'], answer: 'Zeus' },
  ],
  more: [
    {
      title: 'La poesía incompleta',
      type: 'match',
      instructions: 'A la poesía del coche rojo se le han escapado unas palabras. Busca la que rima con cada una.',
      columns: ['Palabra', 'Rima con'],
      pairs: [
        { id: 'rojo', en: 'rojo', es: 'ojo' },
        { id: 'temprano', en: 'temprano', es: 'hermano' },
        { id: 'moche', en: 'moche', es: 'noche' },
        { id: 'claro', en: 'claro', es: 'faro' },
      ],
    },
    {
      title: '¿Quién se esconde?',
      type: 'quiz',
      instructions: 'Ordena las letras de las burbujas y descubre quién se esconde debajo del mar.',
      questions: [
        { prompt: 'z · e · p · e · p · a · s · a · d', say: false, choices: ['pez espada', 'pez payaso', 'tiburón'], answer: 'pez espada' },
        { prompt: 'l · a · b · e · l · n · a', say: false, choices: ['ballena', 'langosta', 'delfín'], answer: 'ballena' },
        { prompt: 'p · u · l · o · p', say: false, choices: ['pulpo', 'pez', 'foca'], answer: 'pulpo' },
      ],
    },
    {
      title: 'Palabras encadenadas',
      type: 'quiz',
      instructions: 'Cada palabra empieza por la última sílaba de la anterior: plane-ta → ta-za → za-pato.',
      questions: [
        { prompt: 'planeta → …', choices: ['taza', 'luna', 'sol'], answer: 'taza' },
        { prompt: 'taza → …', choices: ['zapato', 'vaso', 'plato'], answer: 'zapato' },
        { prompt: 'zapato → …', choices: ['tomate', 'bota', 'pato'], answer: 'tomate' },
        { prompt: 'tomate → …', choices: ['teléfono', 'mesa', 'tomo'], answer: 'teléfono' },
        { prompt: 'casa → …', choices: ['sapo', 'cosa', 'mesa'], answer: 'sapo' },
        { prompt: 'luna → …', choices: ['nave', 'lupa', 'sol'], answer: 'nave' },
      ],
    },
  ],
};

export default juegos;
