import clasificamos from './clasificamos';
import mamiferosAves from './mamiferos-aves';
import pecesReptilesAnfibios from './peces-reptiles-anfibios';
import invertebrados from './invertebrados';
import habitats from './habitats';
import clave from './clave';
import cuidamos from './cuidamos';
import repaso from './repaso';

// Every Naturales tema 3 exercise, checked: each answer is one of its choices, each card and word
// has a column or crayon that exists.
const exercises = [clasificamos, mamiferosAves, pecesReptilesAnfibios, invertebrados, habitats, clave, cuidamos, repaso];
const parts = exercises.flatMap(exercise => [exercise, ...(exercise.more ?? [])]);
const ofType = type => parts.filter(part => (part.type ?? 'label') === type);

describe('Naturales, tema 3', () => {
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
});

describe('Naturales, tema 3: joins and gaps', () => {
  it('joins every item to a word that is there, and leaves no word alone', () => {
    ofType('join').forEach(({ left, right }) => {
      const ids = left.map(({ id }) => id);
      right.forEach(({ to }) => expect(ids).toContain(to));
      ids.forEach(id => expect(right.some(({ to }) => to === id)).toBe(true));
    });
  });

  it('has a gap in every sentence', () => {
    ofType('gaps').forEach(({ sentences }) => sentences.forEach(sentence => expect(sentence).toMatch(/\[[^\]]+\]/)));
  });
});
