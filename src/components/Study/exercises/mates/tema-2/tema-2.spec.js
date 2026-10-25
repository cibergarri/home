import centena from './centena';
import hasta199 from './hasta-199';
import sumar from './sumar';
import restar from './restar';
import dieces from './dieces';
import euros from './euros';
import barras from './barras';
import tabla from './tabla-100-199';
import mensajeSecreto from './mensaje-secreto';
import repaso from './repaso';

// The maths of every Tema 2 exercise, checked: if a sum is written down, it adds up.
const exercises = [centena, hasta199, sumar, restar, dieces, euros, barras, tabla, mensajeSecreto, repaso];
const parts = exercises.flatMap(exercise => [exercise, ...(exercise.more ?? [])]);
const ofType = type => parts.filter(part => (part.type ?? 'label') === type).flatMap(part => part.questions);

// A prompt with its answers written in place of the ?s.
const filledIn = ({ prompt, answer }) => {
  const answers = [].concat(answer);
  let i = 0;
  return prompt.replace(/\?/g, () => {
    i += 1;
    return String(answers[i - 1]);
  });
};

describe('Mates, tema 2', () => {
  it('has every sum and subtraction in a prompt right, all sides of a chain equal', () => {
    const value = side => side.trim().split(/\s+/).reduce(
      ({ total, sign }, token) => {
        if (token === '+' || token === '-') return { total, sign: token };
        return { total: sign === '-' ? total - Number(token) : total + Number(token), sign: '+' };
      },
      { total: 0, sign: '+' },
    ).total;
    ofType('numbers').map(filledIn).forEach((line) => {
      line.split(/ {3}|\. /).filter(piece => /^[\d\s+\-=.]+$/.test(piece) && piece.includes('='))
        .forEach((piece) => {
          const sides = piece.replace(/\.$/, '').split('=').map(value);
          sides.forEach(side => expect(`${piece} → ${side}`).toBe(`${piece} → ${sides[0]}`));
        });
    });
  });

  it('has tens and units that make a hundred, and numbers broken down right', () => {
    ofType('numbers').map(filledIn).forEach((line) => {
      [...line.matchAll(/(\d+) D y (\d+) D son 1 C/g)].forEach(([, a, b]) => expect(Number(a) + Number(b)).toBe(10));
      [...line.matchAll(/(\d+) U y (\d+) U son 1 C/g)].forEach(([, a, b]) => expect(Number(a) + Number(b)).toBe(100));
      const htu = line.match(/(\d+) = (\d+) C \+ (\d+) D \+ (\d+) U$/);
      if (htu) expect(Number(htu[2]) * 100 + Number(htu[3]) * 10 + Number(htu[4])).toBe(Number(htu[1]));
      const split = line.match(/^(\d+) = (\d+) \+ (\d+) \+ (\d+)$/);
      if (split) expect(Number(split[2]) + Number(split[3]) + Number(split[4])).toBe(Number(split[1]));
    });
  });

  it('has series that go up or down in equal steps', () => {
    ofType('numbers').filter(({ prompt }) => /^\d+, /.test(prompt)).map(filledIn).forEach((line) => {
      const numbers = line.split(', ').map(Number);
      const step = numbers[1] - numbers[0];
      numbers.slice(1).forEach((n, i) => expect(n - numbers[i]).toBe(step));
    });
  });

  it('only has sums under 1000 and subtractions that do not borrow, with blocks and in columns', () => {
    [...ofType('blocks'), ...ofType('tower')].forEach(({ op, a, b }) => {
      if (op === '+') {
        expect(a + b).toBeLessThan(1000);
        return;
      }
      [1, 10, 100].forEach(place => expect(Math.floor(a / place) % 10).toBeGreaterThanOrEqual(Math.floor(b / place) % 10));
    });
  });

  it('turns every clue of the secret message into its letter', () => {
    const code = {
      S: 119, P: 102, M: 137, A: 164, U: 140, C: 173, O: 189, G: 185, R: 145, I: 157, H: 156, L: 167,
    };
    const moves = {
      '↑': -10, '↓': 10, '←': -1, '→': 1,
    };
    mensajeSecreto.questions.forEach(({ prompt, answer, letter }) => {
      expect(code[letter]).toBe(answer);
      const arrow = prompt.match(/^(\d+) ([↑↓←→]) de (\d+)/);
      if (arrow) expect(Number(arrow[3]) + Number(arrow[1]) * moves[arrow[2]]).toBe(answer);
    });
    expect(mensajeSecreto.questions.map(q => `${q.letter}${q.space ? ' ' : ''}`).join('')).toBe('MUCHAS GRACIAS');
  });

  it('ends every route on the 100 to 199 chart where its message says', () => {
    const moves = {
      north: -10, south: 10, west: -1, east: 1,
    };
    tabla.routes.forEach(({ start: [column, row], steps, done }) => {
      const end = steps.reduce((n, { direction, squares }) => n + moves[direction] * squares, 100 + row * 10 + column);
      expect(end).toBeGreaterThanOrEqual(100);
      expect(end).toBeLessThan(200);
      expect(done).toMatch(new RegExp(`al ${end}!`));
    });
  });

  it('has the right answer among the choices of every question', () => {
    ofType('quiz').forEach(({ choices, answer }) => expect(choices).toContain(answer));
  });
});
