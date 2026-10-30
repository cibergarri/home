import { table } from '../scenes';

// Mates, tema 2: el desafío de Malún, un mensaje secreto. Cada número es una letra del código; las
// flechas son movimientos en la tabla de los cienes (↑ resta 10, ↓ suma 10, ← resta 1, → suma 1).
const CODE = table(['', '', ''], [
  ['S = 119', 'P = 102', 'M = 137', 'A = 164'],
  ['U = 140', 'C = 173', 'O = 189', 'G = 185'],
  ['R = 145', 'I = 157', 'H = 156', 'L = 167'],
]);

const clue = (prompt, answer, letter, space = false) => ({
  prompt: `${prompt} = ?`, answer, letter, space, scene: CODE,
});

const mensajeSecreto = {
  slug: 'mensaje-secreto',
  title: 'Un mensaje secreto',
  type: 'numbers',
  write: true,
  instructions: 'Lorenzo quiere dar las gracias al equipo de rescate. Calcula cada pista: el número es una letra del código. En las flechas, ↑ resta 10, ↓ suma 10, ← resta 1 y → suma 1.',
  questions: [
    clue('6 ↑ de 197', 137, 'M'),
    clue('145 - 5', 140, 'U'),
    clue('3 ↓ de 143', 173, 'C'),
    clue('166 - 10', 156, 'H'),
    clue('5 ↓ de 114', 164, 'A'),
    clue('149 - 30', 119, 'S', true),
    clue('2 ↓ de 165', 185, 'G'),
    clue('175 - 30', 145, 'R'),
    clue('4 ← de 168', 164, 'A'),
    clue('143 + 30', 173, 'C'),
    clue('5 ↓ de 107', 157, 'I'),
    clue('184 - 20', 164, 'A'),
    clue('8 → de 111', 119, 'S'),
  ],
};

export default mensajeSecreto;
