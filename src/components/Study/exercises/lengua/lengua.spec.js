import { ALL_SUBJECTS } from '../../subjects';

// Every Lengua exercise, checked: each answer is one of its choices, each card and word has a
// column or crayon that exists, and the missing letters can be written by hand (no accents or ñ:
// the handwriting reader only knows a to z).
const units = ALL_SUBJECTS.find(({ slug }) => slug === 'lengua').units; // shown or hidden
const parts = units.flatMap(unit => unit.exercises).flatMap(exercise => [exercise, ...(exercise.more ?? [])]);
const ofType = type => parts.filter(part => (part.type ?? 'label') === type);

describe('Lengua', () => {
  it('has every unit of the book: the welcome and temas 1 to 9', () => {
    expect(units.map(unit => unit.slug)).toEqual(['bienvenida', ...Array.from({ length: 9 }, (_, i) => `tema-${i + 1}`)]);
  });

  it('has exercises with different names in each unit', () => {
    units.forEach(({ exercises }) => {
      const slugs = exercises.map(({ slug }) => slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });
  });

  it('has the right answer among the choices of every question, and no question twice', () => {
    ofType('quiz').forEach(({ questions }) => {
      questions.forEach(({ prompt, choices, answer }) => expect(`${prompt} → ${choices.includes(answer)}`).toBe(`${prompt} → true`));
      const prompts = questions.map(({ prompt }) => prompt);
      expect(new Set(prompts).size).toBe(prompts.length);
    });
  });

  it('has a word for every column of a table, and a row only once', () => {
    ofType('table').forEach(({ columns, rows }) => {
      rows.forEach(({ word, cells }) => expect(`${word} → ${cells.length}`).toBe(`${word} → ${columns.length - 1}`));
      const ids = rows.map(({ id }) => id);
      expect(new Set(ids).size).toBe(ids.length);
    });
  });

  it('asks for each word only once, with answers that are not the word itself', () => {
    ofType('word').forEach(({ questions }) => {
      const prompts = questions.map(({ prompt }) => prompt);
      expect(new Set(prompts).size).toBe(prompts.length);
      questions.forEach(({ prompt, answers }) => {
        expect(answers.length).toBeGreaterThan(0);
        answers.forEach(answer => expect(prompt).not.toContain(`«${answer}»`));
      });
    });
  });

  it('sorts and colours into columns and crayons that are there', () => {
    ofType('sort').forEach(({ columns, cards }) => {
      cards.forEach(card => card.columns.forEach(column => expect(columns.map(({ id }) => id)).toContain(column)));
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
