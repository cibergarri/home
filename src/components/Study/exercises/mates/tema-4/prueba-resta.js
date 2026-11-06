// Mates, tema 4: la prueba de la resta. La suma y la resta están relacionadas: si 5 + 3 = 8,
// entonces 8 - 5 = 3 y 8 - 3 = 5. Para comprobar una resta: sustraendo + diferencia = minuendo.
const family = (a, b) => ({
  prompt: `${a} + ${b} = ?   ? - ${a} = ${b}   ? - ${b} = ${a}`,
  answer: [a + b, a + b, a + b],
});

const proof = (a, b) => ({
  prompt: `${a} - ${b} = ?   ${b} + ? = ${a}`,
  answer: [a - b, a - b],
});

const take = (a, b) => ({ op: '-', a, b });

const pruebaResta = {
  slug: 'prueba-resta',
  title: 'La prueba de la resta',
  heading: 'Suma y resta, de la mano',
  type: 'numbers',
  write: true,
  instructions: 'La pócima de Teo y Lena tiene que cocer 8 horas. Han pasado 5, así que faltan 3: 5 + 3 = 8 y 8 - 5 = 3. Calcula la suma y completa las restas. Pulsa ✓ después de cada número.',
  questions: [family(5, 3), family(12, 24), family(7, 21), family(16, 23), family(30, 45)],
  more: [
    {
      title: 'Resta y comprueba',
      type: 'numbers',
      write: true,
      instructions: 'Resuelve la resta. Después suma el sustraendo y la diferencia: si te sale el minuendo, ¡está bien!',
      questions: [proof(26, 5), proof(38, 6), proof(56, 31), proof(75, 42), proof(573, 161), proof(261, 151)],
    },
    {
      title: 'Resta en torre',
      type: 'tower',
      instructions: 'Resta en torre. Después haz la prueba en tu pizarra: sustraendo + diferencia = minuendo.',
      questions: [take(26, 14), take(56, 31), take(75, 42), take(573, 161), take(261, 151), take(698, 245)],
    },
    {
      title: '¿Está bien la resta?',
      type: 'quiz',
      instructions: 'Haz la prueba de cada resta: suma el sustraendo y la diferencia.',
      questions: [
        {
          prompt: '48 - 15 = 33. La prueba es 15 + 33 = 48. ¿Está bien?', say: false, choices: ['Sí', 'No'], answer: 'Sí',
        },
        {
          prompt: '67 - 24 = 41. La prueba es 24 + 41 = 65. ¿Está bien?', say: false, choices: ['Sí', 'No'], answer: 'No',
        },
        {
          prompt: '385 - 132 = 253. ¿Qué suma hace la prueba?', say: false, choices: ['132 + 253', '385 + 132', '385 + 253'], answer: '132 + 253',
        },
        {
          prompt: 'Al restar dos números, ¿la diferencia puede ser mayor que el minuendo?',
          choices: ['Sí', 'No, porque la diferencia más el sustraendo da el minuendo'],
          answer: 'No, porque la diferencia más el sustraendo da el minuendo',
        },
        {
          prompt: 'En 26 - 14 = 12, ¿cómo se llama el 26?', choices: ['Minuendo', 'Sustraendo', 'Diferencia'], answer: 'Minuendo',
        },
        {
          prompt: 'En 26 - 14 = 12, ¿cómo se llama el 12?', choices: ['Minuendo', 'Sustraendo', 'Diferencia'], answer: 'Diferencia',
        },
      ],
    },
  ],
};

export default pruebaResta;
