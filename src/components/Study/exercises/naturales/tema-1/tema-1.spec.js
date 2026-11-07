import etapas from './etapas';
import funciones from './funciones';
import movemos from './movemos';
import respirar from './respirar';
import alimentamos from './alimentamos';
import repaso from './repaso';

// Every Naturales tema 1 exercise, checked: each answer is one of its choices, each card and word
// has a column or crayon that exists, and each label points inside its drawing.
const exercises = [etapas, funciones, movemos, respirar, alimentamos, repaso];
const parts = exercises.flatMap(exercise => [exercise, ...(exercise.more ?? [])]);
const ofType = type => parts.filter(part => (part.type ?? 'label') === type);

describe('Naturales, tema 1', () => {
  it('has the right answer among the choices of every question, and no question twice', () => {
    ofType('quiz').forEach(({ questions }) => {
      questions.forEach(({ prompt, choices, answer }) => expect(`${prompt} → ${choices.includes(answer)}`).toBe(`${prompt} → true`));
      const prompts = questions.map(({ prompt }) => prompt);
      expect(new Set(prompts).size).toBe(prompts.length);
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

  it('labels the drawings with boxes and dots inside them, one group each', () => {
    ofType('label').forEach(({
      items, groups, width, height,
    }) => {
      items.forEach(({ dot, box, group }) => {
        [dot, box].forEach(([x, y]) => {
          expect(x).toBeGreaterThan(0);
          expect(x).toBeLessThan(width);
          expect(y).toBeGreaterThan(0);
          expect(y).toBeLessThan(height);
        });
        if (groups) expect(groups.map(({ id }) => id)).toContain(group);
      });
    });
    expect(ofType('label')).toHaveLength(4);
  });
});
