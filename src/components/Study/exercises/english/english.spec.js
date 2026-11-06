import { ALL_SUBJECTS } from '../../subjects';

// Every English exercise of every unit, checked: each quiz answer is one of its choices, the
// words to sort and colour have a column or crayon that is there, the missing letters can be
// written by hand, and the pairs to match are all different.
const units = ALL_SUBJECTS.find(({ slug }) => slug === 'english').units; // shown or hidden
const parts = units.flatMap(unit => unit.exercises).flatMap(exercise => [exercise, ...(exercise.more ?? [])]);
const ofType = type => parts.filter(part => (part.type ?? 'label') === type);

describe('English', () => {
  it('has every unit of the book, in order', () => {
    expect(units.map(unit => unit.slug)).toEqual(['welcome', 'unit-1', 'unit-2', 'unit-3', 'unit-4', 'unit-5', 'unit-6', 'festivals']);
  });

  it('has exercises with different names in each unit', () => {
    units.forEach(({ exercises }) => {
      const slugs = exercises.map(({ slug }) => slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });
  });

  it('has the right answer among the choices of every question, and each choice once', () => {
    ofType('quiz').forEach(({ questions }) => {
      questions.forEach(({ prompt, choices, answer }) => {
        expect(`${prompt} → ${choices.includes(answer)}`).toBe(`${prompt} → true`);
        expect(new Set(choices).size).toBe(choices.length);
      });
    });
  });

  it('sorts and colours into columns and crayons that are there', () => {
    ofType('sort').forEach(({ columns, cards }) => {
      const ids = columns.map(({ id }) => id);
      cards.forEach(card => card.columns.forEach(column => expect(ids).toContain(column)));
      ids.forEach(id => expect(cards.some(card => card.columns.includes(id))).toBe(true));
    });
    ofType('colour').forEach(({ crayons, words }) => {
      words.forEach(({ crayon }) => expect(crayons.map(({ id }) => id)).toContain(crayon));
    });
  });

  it('spells each word with gaps where its letters are, and only letters that can be written', () => {
    ofType('letters').flatMap(({ words }) => words).forEach(({ word, shown }) => {
      expect(shown).toHaveLength(word.length);
      [...shown].forEach((letter, i) => {
        if (letter === '_') expect(`${word}: ${word[i]}`).toMatch(/: [a-z]$/);
        else expect(letter).toBe(word[i]);
      });
    });
  });

  it('matches pairs that are all different', () => {
    ofType('match').forEach(({ pairs }) => {
      expect(new Set(pairs.map(({ en }) => en)).size).toBe(pairs.length);
      expect(new Set(pairs.map(({ es }) => es)).size).toBe(pairs.length);
    });
  });
});
