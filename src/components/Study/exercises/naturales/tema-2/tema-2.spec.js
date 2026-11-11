import salud from './salud';
import habitos from './habitos';
import alimentacion from './alimentacion';
import accidentes from './accidentes';
import ejercicioEmociones from './ejercicio-emociones';
import menuSaludable from './menu-saludable';
import repaso from './repaso';

// Every Naturales tema 2 exercise, checked: each answer is one of its choices, each card and word
// has a column or crayon that exists.
const exercises = [salud, habitos, alimentacion, accidentes, ejercicioEmociones, menuSaludable, repaso];
const parts = exercises.flatMap(exercise => [exercise, ...(exercise.more ?? [])]);
const ofType = type => parts.filter(part => (part.type ?? 'label') === type);

describe('Naturales, tema 2', () => {
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
