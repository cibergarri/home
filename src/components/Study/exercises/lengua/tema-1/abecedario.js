// Lengua, tema 1: el abecedario. Vocales y consonantes, la letra siguiente y el orden alfabético.
const VOCAL = { id: 'vocal', title: 'Vocal', colour: '#f7c96f' };
const CONSONANTE = { id: 'consonante', title: 'Consonante', colour: '#8ec5f2' };

const abecedario = {
  slug: 'abecedario',
  title: 'El abecedario',
  heading: 'En orden alfabético',
  type: 'build',
  instructions: 'Para ordenar las palabras alfabéticamente, fíjate en la primera letra. Toca las palabras en orden.',
  puzzles: [
    { prompt: 'Lo que hay en el baño:', hint: 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z', answer: ['cepillo', 'espejo', 'jabón', 'peine', 'toalla'], separator: ', ' },
    { prompt: 'Lo que hay en el campo:', hint: 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z', answer: ['arbusto', 'camino', 'llanura', 'pradera'], separator: ', ' },
    { prompt: 'Cosas que hacemos:', hint: 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z', answer: ['descansar', 'escribir', 'leer', 'pasear'], separator: ', ' },
    { prompt: 'Palabras del diccionario:', hint: 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z', answer: ['dedal', 'megáfono', 'tenazas'], separator: ', ' },
    { prompt: 'Si empiezan por la misma letra, mira la segunda:', hint: 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z', answer: ['acelga', 'ardilla', 'brocha', 'búho', 'masticar', 'tejado', 'yoga'], separator: ', ' },
  ],
  more: [
    {
      title: '¿Qué letra va después?',
      type: 'letters',
      write: true,
      instructions: 'Escribe la letra que va después en el abecedario y pulsa ✓.',
      words: [
        { clue: 'a, b, c, …', word: 'abcd', shown: 'abc_' },
        { clue: 'l, m, …', word: 'lmn', shown: 'lm_' },
        { clue: 'r, s, …', word: 'rst', shown: 'rs_' },
        { clue: 'e, f, …', word: 'efg', shown: 'ef_' },
        { clue: 'u, v, …', word: 'uvw', shown: 'uv_' },
        { clue: 'g, h, …', word: 'ghi', shown: 'gh_' },
      ],
    },
    {
      title: 'Vocales y consonantes',
      type: 'colour',
      instructions: 'Las letras a, e, i, o, u son vocales. Las demás son consonantes.',
      crayons: [VOCAL, CONSONANTE],
      words: [
        { id: 'a', word: 'a', crayon: 'vocal' },
        { id: 'm', word: 'm', crayon: 'consonante' },
        { id: 'e', word: 'e', crayon: 'vocal' },
        { id: 't', word: 't', crayon: 'consonante' },
        { id: 'o', word: 'o', crayon: 'vocal' },
        { id: 'r', word: 'r', crayon: 'consonante' },
        { id: 'i', word: 'i', crayon: 'vocal' },
        { id: 'enye', word: 'ñ', crayon: 'consonante' },
        { id: 'u', word: 'u', crayon: 'vocal' },
        { id: 'z', word: 'z', crayon: 'consonante' },
      ],
    },
    {
      title: 'El abecedario',
      type: 'quiz',
      instructions: 'Contesta sobre el abecedario.',
      questions: [
        { prompt: '¿Cuántas vocales hay?', choices: ['Tres', 'Cinco', 'Diez'], answer: 'Cinco' },
        { prompt: '¿Qué letra va justo después de la n?', choices: ['o', 'ñ', 'm'], answer: 'ñ' },
        { prompt: '¿Cómo se llama la letra y?', choices: ['i griega', 'uve doble', 'equis'], answer: 'i griega' },
        { prompt: '¿Cómo se llama la letra h?', choices: ['jota', 'hache', 'ge'], answer: 'hache' },
        { prompt: 'En el diccionario, las palabras están…', choices: ['en orden alfabético', 'de la más corta a la más larga', 'sin orden'], answer: 'en orden alfabético' },
      ],
    },
  ],
};

export default abecedario;
