import { ALL_SUBJECTS } from '../../subjects';

// Every Mates exercise of every unit, checked: each quiz answer is one of its choices, each number
// question has as many answers as gaps, and each sum in columns or with blocks is one the game
// can do. Each unit's own spec checks its sums are right.
const units = ALL_SUBJECTS.find(({ slug }) => slug === 'mates').units; // shown or hidden
const parts = units.flatMap(unit => unit.exercises).flatMap(exercise => [exercise, ...(exercise.more ?? [])]);
const ofType = type => parts.filter(part => (part.type ?? 'label') === type);
const digits = n => [Math.floor(n / 100), Math.floor(n / 10) % 10, n % 10];

describe('Mates', () => {
  it('has every unit of the book, in order', () => {
    expect(units.map(unit => unit.slug)).toEqual([
      'bienvenida', 'tema-1', 'tema-2', 'tema-3', 'tema-4', 'tema-5', 'tema-6', 'tema-7', 'tema-8', 'tema-9',
    ]);
  });

  it('has exercises with different names in each unit', () => {
    units.forEach(({ exercises }) => {
      const slugs = exercises.map(({ slug }) => slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });
  });

  it('has the right answer among the choices of every question, and each choice once', () => {
    ofType('quiz').forEach(({ questions }) => {
      questions.filter(question => !question.compare).forEach(({ prompt, choices, answer }) => {
        expect(`${prompt} → ${choices.includes(answer)}`).toBe(`${prompt} → true`);
        expect(new Set(choices).size).toBe(choices.length);
      });
    });
  });

  it('has an answer for each gap, every one a whole number', () => {
    ofType('numbers').forEach(({ questions }) => {
      questions.forEach(({ prompt, answer }) => {
        const answers = [answer].flat();
        expect(`${prompt} → ${answers.length}`).toBe(`${prompt} → ${(prompt.match(/\?/g) ?? []).length}`);
        answers.forEach(value => expect(Number.isInteger(value) && value >= 0).toBe(true));
      });
    });
  });

  it('works out every plain sum right: 45 + 20 = ?, 3 × 2 = ?, ? + 5 = 9', () => {
    const value = side => side.split(/\s*([+\-×])\s*/).reduce((total, token, i, tokens) => {
      if (i === 0) return Number(token);
      if (i % 2) return total;
      if (tokens[i - 1] === '+') return total + Number(token);
      return tokens[i - 1] === '-' ? total - Number(token) : total * Number(token);
    }, 0);
    let checked = 0;
    ofType('numbers').forEach(({ questions }) => {
      questions.forEach(({ prompt, answer }) => {
        if (!/^[\d\s+\-×?]+=[\d\s+\-×?]+$/.test(prompt) || (prompt.match(/\?/g) ?? []).length !== 1) return;
        const filled = prompt.replace('?', String(answer));
        const [left, right] = filled.split('=');
        expect(`${filled} → ${value(left.trim()) === value(right.trim())}`).toBe(`${filled} → true`);
        checked += 1;
      });
    });
    expect(checked).toBeGreaterThan(100);
  });

  it('only has sums in columns under 1000, and subtractions that do not borrow across a 0', () => {
    ofType('tower').forEach(({ questions }) => {
      questions.forEach(({ op, a, b }) => {
        if (op === '+') {
          expect(a + b).toBeLessThan(1000);
          return;
        }
        expect(a).toBeGreaterThanOrEqual(b);
        const [, tens, units] = digits(a);
        if (units < b % 10) expect(`${a} - ${b}: ${tens}`).not.toBe(`${a} - ${b}: 0`);
      });
    });
  });

  it('only crosses out blocks that are there', () => {
    ofType('blocks').filter(({ questions }) => questions.some(({ op }) => op === '-')).forEach(({ questions }) => {
      questions.filter(({ op }) => op === '-').forEach(({ a, b }) => {
        digits(a).forEach((digit, i) => expect(digit).toBeGreaterThanOrEqual(digits(b)[i]));
      });
    });
  });

  it('spells each word with gaps only for letters that can be written', () => {
    ofType('letters').flatMap(({ words }) => words).forEach(({ word, shown }) => {
      expect(shown).toHaveLength(word.length);
      [...shown].forEach((letter, i) => {
        if (letter === '_') expect(`${word}: ${word[i]}`).toMatch(/: [a-z]$/);
        else expect(letter).toBe(word[i]);
      });
    });
  });

  it('sorts into columns that are there, each with a card', () => {
    ofType('sort').forEach(({ columns, cards }) => {
      const ids = columns.map(({ id }) => id);
      cards.forEach(card => card.columns.forEach(column => expect(ids).toContain(column)));
      ids.forEach(id => expect(cards.some(card => card.columns.includes(id))).toBe(true));
    });
  });
});
