// Mates, tema 1: problemas de suma y resta. Primero los del libro; después los del cuaderno y las
// fichas de clase, los de aproximar a la decena y unos retos con números más grandes.
const problemas = {
  slug: 'problemas',
  title: 'Problemas',
  heading: 'Lee y calcula',
  type: 'numbers',
  instructions: 'Lee con calma el problema. Piensa si hay que sumar o restar, calcula y escribe el resultado.',
  questions: [
    {
      story: 'Samuel actúa en una obra. En el primer pase había 30 espectadores y en el segundo había 40. ¿Cuántas personas vieron en total la obra?',
      data: [[30, 'espectadores en el primer pase'], [40, 'espectadores en el segundo pase']],
      prompt: '? personas',
      answer: 70,
    },
    {
      story: 'En otra obra contó 25 personas en el primer pase y 40 en el segundo. ¿Cuántas personas vieron la segunda obra?',
      data: [[25, 'personas en el primer pase'], [40, 'personas en el segundo pase']],
      prompt: '? personas',
      answer: 65,
    },
    {
      story: 'Lena tiene 26 cromos y Mica le regala 16. ¿Cuántos cromos tiene ahora Lena?',
      data: [[26, 'cromos tiene Lena'], [16, 'cromos le regala Mica']],
      prompt: '? cromos',
      answer: 42,
    },
    {
      story: 'Celia ha leído 16 páginas por la mañana y 27 páginas por la tarde. ¿Cuántas páginas ha leído en total?',
      data: [[16, 'páginas por la mañana'], [27, 'páginas por la tarde']],
      prompt: '? páginas',
      answer: 43,
    },
    {
      story: 'Isa utilizó 18 pegatinas para decorar su dibujo y Julio necesitó 7. ¿Cuántas pegatinas usaron entre los dos?',
      data: [[18, 'pegatinas utilizó Isa'], [7, 'pegatinas necesitó Julio']],
      prompt: '? pegatinas',
      answer: 25,
    },
    {
      story: 'El libro de Topi tiene 34 páginas y ya ha leído 12. ¿Cuántas páginas le quedan por leer?',
      data: [[34, 'páginas tiene el libro'], [12, 'páginas ya ha leído']],
      prompt: '? páginas',
      answer: 22,
    },
    {
      story: 'En el colegio de Julia 18 niños practican artes marciales. De ellos, 11 practican yudo y el resto, kárate. ¿Cuántos niños practican kárate?',
      data: [[18, 'niños practican artes marciales'], [11, 'niños practican yudo']],
      prompt: '? niños',
      answer: 7,
    },
    {
      story: 'Noelia tiene 98 cromos. Si tuviera 38 cromos menos, tendría los mismos que Martín. ¿Cuántos cromos tiene Martín?',
      data: [[98, 'cromos tiene Noelia'], [38, 'cromos menos tendría']],
      prompt: '? cromos',
      answer: 60,
    },
    {
      story: 'Hay 26 raquetas de bádminton y 32 raquetas de tenis. ¿Cuántas raquetas hay en total?',
      data: [[26, 'raquetas de bádminton'], [32, 'raquetas de tenis']],
      prompt: '? raquetas',
      answer: 58,
    },
    {
      story: 'Hay 26 raquetas de bádminton y 32 raquetas de tenis. ¿Cuántas raquetas de bádminton hay menos que de tenis?',
      data: [[26, 'raquetas de bádminton'], [32, 'raquetas de tenis']],
      prompt: '? raquetas',
      answer: 6,
    },
    {
      story: 'Lena hace magia con 19 naranjas. En una nube desaparecen 14. ¿Cuántas naranjas quedan?',
      data: [[19, 'naranjas al principio'], [14, 'naranjas desaparecen']],
      prompt: '? naranjas',
      answer: 5,
    },
    {
      story: 'A Martín le gusta hacer pulseras de 10 abalorios. Tiene 3 pulseras y 4 abalorios sueltos. ¿Cuántos abalorios tiene en total?',
      data: [[10, 'abalorios en cada pulsera'], [3, 'pulseras hechas'], [4, 'abalorios sueltos']],
      prompt: '? abalorios',
      answer: 34,
    },
    {
      story: 'El enigma de la taquilla: si siete años tiene Teo, tres tendrás que quitar y, después, seis añadirás. ¿Qué número abre la puerta?',
      prompt: 'El número es ?',
      answer: 10,
    },
  ],
  more: [
    {
      title: 'Problemas dibujando bloques',
      type: 'blocks',
      instructions: 'Resuelve el problema dibujando o tachando decenas y unidades.',
      questions: [
        {
          story: 'Lena tiene 26 cromos y Mica le regala 16. ¿Cuántos cromos tiene ahora Lena?', data: [[26, 'cromos tiene Lena'], [16, 'cromos le regala Mica']], op: '+', a: 26, b: 16,
        },
        {
          story: 'El libro de Topi tiene 34 páginas y ya ha leído 12. ¿Cuántas páginas le quedan por leer?', data: [[34, 'páginas tiene el libro'], [12, 'páginas ya ha leído']], op: '-', a: 34, b: 12,
        },
        {
          story: 'Celia ha leído 16 páginas por la mañana y 27 por la tarde. ¿Cuántas páginas ha leído en total?', op: '+', a: 16, b: 27,
        },
        {
          story: 'En la clase de Ana hay 28 niños con camiseta. 18 llevan camiseta blanca. ¿Cuántos llevan camiseta negra?', op: '-', a: 28, b: 18,
        },
        {
          story: 'Pablo tiene 34 cromos y Pedro le da 24 más. ¿Cuántos cromos tiene Pablo?', op: '+', a: 34, b: 24,
        },
        {
          story: 'Elena tiene 24 cromos de hadas y de duendes. 12 son de hadas. ¿Cuántos son de duendes?', op: '-', a: 24, b: 12,
        },
        {
          story: 'En el campamento hay 25 balones de fútbol y 13 de baloncesto. ¿Cuántos balones hay en total?', op: '+', a: 25, b: 13,
        },
        {
          story: 'Paula hace 26 pulseras por la mañana y por la tarde vende 13. ¿Cuántas pulseras le quedan?', data: [[26, 'pulseras hace por la mañana'], [13, 'pulseras vende por la tarde']], op: '-', a: 26, b: 13,
        },
      ],
    },
    {
      title: 'Más problemas',
      type: 'numbers',
      instructions: 'Los problemas del cuaderno. Lee con calma: ¿hay que sumar o restar?',
      questions: [
        {
          story: 'Ana tiene 7 caramelos y Paula tiene 8. ¿Cuántos caramelos tienen entre las dos?',
          data: [[7, 'caramelos tiene Ana'], [8, 'caramelos tiene Paula']],
          prompt: '? caramelos',
          answer: 15,
        },
        {
          story: 'Ana tiene 15 caramelos. Si tuviera 5 caramelos menos, tendría los mismos que Paula. ¿Cuántos caramelos tiene Paula?',
          data: [[15, 'caramelos tiene Ana'], [5, 'caramelos menos tendría']],
          prompt: '? caramelos',
          answer: 10,
        },
        {
          story: 'En la clase de Ana hay 25 niños. De esos 25 niños, 15 son rubios. ¿Cuántos son morenos?',
          data: [[25, 'niños en la clase'], [15, 'niños rubios']],
          prompt: '? niños',
          answer: 10,
        },
        {
          story: 'En la clase de Ana hay 28 niños con camiseta. De ellos, 18 llevan camiseta blanca. ¿Cuántos niños llevan camiseta negra?',
          data: [[28, 'niños con camiseta'], [18, 'niños con camiseta blanca']],
          prompt: '? niños',
          answer: 10,
        },
        {
          story: 'En un campamento, 30 niños van a comer pizza y 20 niños van a comer perrito. ¿Cuántos niños que comen perrito hay menos que los que comen pizza?',
          data: [[30, 'niños comen pizza'], [20, 'niños comen perrito']],
          prompt: '? niños',
          answer: 10,
        },
        {
          story: 'Tengo 10 cromos. Mi amigo me da 5 más, pero se me pierden 7. ¿Cuántos cromos tengo ahora?',
          data: [[10, 'cromos tengo al principio'], [5, 'cromos me da mi amigo'], [7, 'cromos se me pierden']],
          hint: 'Primero suma los que te dan y después resta los que se pierden. Puedes ayudarte con la recta.',
          prompt: '? cromos',
          answer: 8,
        },
        {
          story: 'Elena tiene 75 pegatinas. Si tuviera 45 pegatinas menos, tendría las mismas que Paula. ¿Cuántas pegatinas tiene Paula?',
          data: [[75, 'pegatinas tiene Elena'], [45, 'pegatinas menos tendría']],
          prompt: '? pegatinas',
          answer: 30,
        },
        {
          story: 'Paula tiene 33 pegatinas. Si tuviera 23 pegatinas más, tendría las mismas que Ana. ¿Cuántas pegatinas tiene Ana?',
          data: [[33, 'pegatinas tiene Paula'], [23, 'pegatinas más tendría']],
          prompt: '? pegatinas',
          answer: 56,
        },
        {
          story: 'En el frigorífico hay 15 yogures. Si nos comemos 5, ¿cuántos yogures quedan?',
          data: [[15, 'yogures en el frigorífico'], [5, 'yogures nos comemos']],
          prompt: '? yogures',
          answer: 10,
        },
        {
          story: 'Elena tiene 24 cromos de hadas y de duendes. Si 12 cromos son de hadas, ¿cuántos son de duendes?',
          data: [[24, 'cromos de hadas y de duendes'], [12, 'cromos de hadas']],
          prompt: '? cromos',
          answer: 12,
        },
        {
          story: 'Pablo tiene 34 cromos y Pedro le da 24 cromos más. ¿Cuántos cromos tiene Pablo ahora?',
          data: [[34, 'cromos tiene Pablo'], [24, 'cromos le da Pedro']],
          prompt: '? cromos',
          answer: 58,
        },
        {
          story: 'En un campamento hay 25 balones de fútbol y 13 balones de baloncesto. ¿Cuántos balones hay en total?',
          data: [[25, 'balones de fútbol'], [13, 'balones de baloncesto']],
          prompt: '? balones',
          answer: 38,
        },
        {
          story: 'En el campamento hay 25 balones de fútbol y 13 de baloncesto. ¿Cuántos balones de fútbol hay más que de baloncesto?',
          data: [[25, 'balones de fútbol'], [13, 'balones de baloncesto']],
          prompt: '? balones',
          answer: 12,
        },
        {
          story: 'Paula hace 26 pulseras por la mañana y por la tarde vende 13. ¿Cuántas pulseras le quedan?',
          data: [[26, 'pulseras hace por la mañana'], [13, 'pulseras vende por la tarde']],
          prompt: '? pulseras',
          answer: 13,
        },
        {
          story: 'Al día siguiente, Paula pierde 10 de las 13 pulseras que le quedaban. ¿Cuántas pulseras le quedan ahora?',
          data: [[13, 'pulseras le quedaban'], [10, 'pulseras pierde']],
          prompt: '? pulseras',
          answer: 3,
        },
        {
          story: 'Ana tiene 3 bolsas de caramelos: la azul tiene 13, la roja tiene 20 y la amarilla tiene 18. ¿Cuántos caramelos tiene en total?',
          data: [[13, 'caramelos en la bolsa azul'], [20, 'caramelos en la bolsa roja'], [18, 'caramelos en la bolsa amarilla']],
          prompt: '? caramelos',
          answer: 51,
        },
        {
          story: 'Las bolsas de Ana: azul 13, roja 20 y amarilla 18. ¿Cuál es la diferencia entre las dos bolsas que menos caramelos tienen?',
          data: [[13, 'caramelos en la bolsa azul'], [20, 'caramelos en la bolsa roja'], [18, 'caramelos en la bolsa amarilla']],
          hint: 'Las dos que menos tienen son la azul y la amarilla.',
          prompt: '? caramelos',
          answer: 5,
        },
        {
          story: 'Las bolsas de Ana: azul 13, roja 20 y amarilla 18. ¿Cuántos caramelos hay entre la bolsa que más tiene y la que menos tiene?',
          data: [[13, 'caramelos en la bolsa azul'], [20, 'caramelos en la bolsa roja'], [18, 'caramelos en la bolsa amarilla']],
          hint: '«Entre las dos» es juntarlas: la que más tiene y la que menos tiene.',
          prompt: '? caramelos',
          answer: 33,
        },
        {
          story: 'Paula tiene 3 bolsas de manzanas: la roja tiene 15, la azul tiene 13 y la amarilla tiene 18. ¿Cuántas manzanas tiene en total?',
          data: [[15, 'manzanas en la bolsa roja'], [13, 'manzanas en la bolsa azul'], [18, 'manzanas en la bolsa amarilla']],
          prompt: '? manzanas',
          answer: 46,
        },
        {
          story: 'Las bolsas de Paula: roja 15, azul 13 y amarilla 18. ¿Cuántas manzanas hay entre la bolsa que más tiene y la que menos tiene?',
          data: [[15, 'manzanas en la bolsa roja'], [13, 'manzanas en la bolsa azul'], [18, 'manzanas en la bolsa amarilla']],
          prompt: '? manzanas',
          answer: 31,
        },
        {
          story: 'Las bolsas de Paula: roja 15, azul 13 y amarilla 18. ¿Cuál es la diferencia entre las dos bolsas que menos manzanas tienen?',
          data: [[15, 'manzanas en la bolsa roja'], [13, 'manzanas en la bolsa azul'], [18, 'manzanas en la bolsa amarilla']],
          prompt: '? manzanas',
          answer: 2,
        },
        {
          story: 'Las bolsas de Paula: roja 15, azul 13 y amarilla 18. ¿Cuál es la diferencia entre las dos bolsas que más manzanas tienen?',
          data: [[15, 'manzanas en la bolsa roja'], [13, 'manzanas en la bolsa azul'], [18, 'manzanas en la bolsa amarilla']],
          prompt: '? manzanas',
          answer: 3,
        },
        {
          story: 'Ginés tiene 25 libros en su habitación, 18 en el salón y 7 en el desván. ¿Cuántos libros tiene en su casa?',
          data: [[25, 'libros en la habitación'], [18, 'libros en el salón'], [7, 'libros en el desván']],
          prompt: '? libros',
          answer: 50,
        },
      ],
    },
    {
      title: '¿Tendrán para todos?',
      type: 'quiz',
      instructions: 'Aproxima a la decena y piensa si llega para todos.',
      questions: [
        {
          prompt: 'En una clase hay 38 niños. La profesora compra caramelos aproximando a la decena. ¿Cuántos compra?',
          choices: ['30', '40'],
          answer: '40',
        },
        {
          prompt: 'Hay 38 niños y la profesora ha comprado 40 caramelos. ¿Tendrá para todos?',
          choices: ['Sí', 'No'],
          answer: 'Sí',
        },
        {
          prompt: 'En un campamento hay 22 niños. Compran helados aproximando a la decena. ¿Cuántos compran?',
          choices: ['20', '30'],
          answer: '20',
        },
        {
          prompt: 'Hay 22 niños y han comprado 20 helados. ¿Tendrán para todos?',
          choices: ['Sí', 'No, faltan 2 helados'],
          answer: 'No, faltan 2 helados',
        },
      ],
    },
    {
      title: '⭐ Retos con números grandes',
      type: 'numbers',
      instructions: 'Dos problemas de la ficha con números de tres cifras. ¡A por ellos!',
      questions: [
        {
          story: 'Deva tiene 122 euros en su hucha. Su madre le da 13 y su abuela 5. ¿Cuántos euros tiene en total?',
          data: [[122, 'euros en la hucha'], [13, 'euros le da su madre'], [5, 'euros le da su abuela']],
          prompt: '? euros',
          answer: 140,
        },
        {
          story: 'Talía tiene una bolsa con 178 caramelos para ella y sus amigos. Si ya ha repartido 23, ¿cuántos le quedan por repartir?',
          data: [[178, 'caramelos en la bolsa'], [23, 'caramelos ya ha repartido']],
          prompt: '? caramelos',
          answer: 155,
        },
      ],
    },
  ],
};

export default problemas;
