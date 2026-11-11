import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import positions from '../exercises/english/positions';
import wheres from '../exercises/english/wheres';
import review from '../exercises/english/review';
import numerosDeDosCifras from '../exercises/mates/numeros-de-dos-cifras';
import comparar from '../exercises/mates/comparar';
import aproximar from '../exercises/mates/aproximar';
import restar from '../exercises/mates/restar';
import tablas from '../exercises/mates/tablas';
import repaso from '../exercises/mates/repaso';
import problemas from '../exercises/mates/problemas';
import { ALL_SUBJECTS } from '../subjects';
import QuizGame, { mixed } from '.';

const choose = text => fireEvent.click(screen.getByRole('button', { name: new RegExp(`^(✓ )?${text}$`) }));

describe('QuizGame', () => {
  beforeAll(() => {
    window.speechSynthesis = { speak: jest.fn(), cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
  });

  it('plays only `draw` of the questions, a different few each time', () => {
    const pool = {
      instructions: 'Pick',
      draw: 3,
      questions: Array.from({ length: 12 }, (_, i) => ({ prompt: `Question ${i}?`, choices: ['yes', 'no'], answer: 'yes' })),
    };
    const seen = new Set();
    renderWithProviders(<QuizGame exercise={pool} />);
    for (let round = 0; round < 6; round += 1) {
      expect(screen.getByText('Question 1 of 3')).toBeInTheDocument();
      for (let i = 0; i < 3; i += 1) {
        seen.add(screen.getByText(/^Question \d+\?$/).textContent);
        choose('yes');
        fireEvent.click(screen.getByRole('button', { name: i < 2 ? 'Next →' : 'Finish ✓' }));
      }
      fireEvent.click(screen.getByRole('button', { name: 'Play again' }));
    }
    expect(seen.size).toBeGreaterThan(3);
  });

  it('puts the sign chosen in the gap between two numbers, with no words for the signs', () => {
    renderWithProviders(<QuizGame exercise={{ instructions: 'Compare', questions: [{ compare: [33, 36] }] }} />);
    expect(screen.getByLabelText('33, a gap for the sign, 36')).toBeInTheDocument();
    expect(screen.getAllByRole('button').map(button => button.textContent)).toEqual(expect.arrayContaining(['<', '>', '=']));
    expect(screen.queryByText(/less than|greater than|menor que|mayor que/)).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '>' }));
    expect(screen.getByRole('button', { name: '>' })).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: '<' }));
    expect(screen.getByLabelText('33 < 36')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Finish ✓' })).toBeInTheDocument();
  });

  it('shows the whole word on the right answer when the question says so', () => {
    const exercise = {
      instructions: 'Pick',
      questions: [{ prompt: 'Lo contrario de coser', choices: ['in', 'des'], answer: 'des', solved: 'descoser' }],
    };
    renderWithProviders(<QuizGame exercise={exercise} />);
    choose('des');
    expect(screen.getByRole('button', { name: '✓ descoser' })).toBeInTheDocument();
  });

  it('asks a question with a picture and answers to choose from', () => {
    renderWithProviders(<QuizGame exercise={positions} />);
    expect(screen.getByText('Where’s Daisy?')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Picture for the question' })).toBeInTheDocument();
    expect(screen.getByText('Question 1 of 7')).toBeInTheDocument();
  });

  it('crosses out a wrong answer and leads on after the right one', () => {
    renderWithProviders(<QuizGame exercise={positions} />);
    choose('She’s next to the chair.');
    expect(screen.getByRole('button', { name: 'She’s next to the chair.' })).toBeDisabled();
    expect(screen.queryByRole('button', { name: 'Next →' })).not.toBeInTheDocument();
    choose('She’s behind the chair.');
    fireEvent.click(screen.getByRole('button', { name: 'Next →' }));
    expect(screen.getByText('Question 2 of 7')).toBeInTheDocument();
  });

  it('celebrates after the last question', () => {
    renderWithProviders(<QuizGame exercise={positions} />);
    positions.questions.forEach(({ answer }, index) => {
      choose(answer);
      fireEvent.click(screen.getByRole('button', { name: index + 1 < positions.questions.length ? 'Next →' : 'Finish ✓' }));
    });
    expect(screen.getByLabelText('3 out of 3 stars')).toBeInTheDocument();
  });

  it('goes back and forward between questions, each starting afresh', () => {
    renderWithProviders(<QuizGame exercise={positions} />);
    expect(screen.queryByRole('button', { name: 'Previous question' })).not.toBeInTheDocument();
    choose('She’s next to the chair.');
    fireEvent.click(screen.getByRole('button', { name: 'Next question' }));
    expect(screen.getByText('Question 2 of 7')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Previous question' }));
    expect(screen.getByText('Question 1 of 7')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'She’s next to the chair.' })).toBeEnabled();
  });

  it('has the right answer among the choices of every question', () => {
    [wheres, positions, review, numerosDeDosCifras, comparar, aproximar, restar, tablas, repaso, problemas].flatMap(exercise => [exercise, ...(exercise.more ?? [])])
      .filter(part => part.type === 'quiz')
      .flatMap(part => part.questions)
      .filter(question => !question.compare)
      .forEach(({ choices, answer }) => expect(choices).toContain(answer));
  });

  it('mixes the choices, the same way every time, so the right one is not always first', () => {
    const choices = ['el cerdo', 'la vaca', 'el gato', 'la oveja'];
    expect(mixed(choices, 'a')).toEqual(mixed(choices, 'a'));
    expect([...mixed(choices, 'a')].sort()).toEqual([...choices].sort());
    expect(mixed(['3', '30', '300'], 'a')).toEqual(['3', '30', '300']);

    const questions = ALL_SUBJECTS.flatMap(({ units }) => units).flatMap(({ exercises }) => exercises)
      .flatMap(exercise => [exercise, ...(exercise.more ?? [])])
      .filter(({ type, keepOrder }) => type === 'quiz' && !keepOrder)
      .flatMap(({ questions: asked }) => asked)
      .filter(question => !question.compare)
      .filter(({ choices: offered }) => !offered.every(choice => /^\d+$/.test(choice)));
    const first = questions.filter(({ prompt, choices: offered, answer }) => mixed(offered, `${prompt}|${offered.join('|')}`)[0] === answer);
    expect(first.length / questions.length).toBeLessThan(0.55);
  });

  it('shows the mistakes again at the end, and plays only those questions again', () => {
    renderWithProviders(<QuizGame exercise={positions} />);
    const [first] = positions.questions;
    const wrong = first.choices.find(choice => choice !== first.answer);
    choose(wrong);
    positions.questions.forEach(({ answer }, index) => {
      choose(answer);
      fireEvent.click(screen.getByRole('button', { name: index + 1 < positions.questions.length ? 'Next →' : 'Finish ✓' }));
    });
    const review = screen.getByRole('region', { name: 'Let’s look at these again 🔍' });
    expect(review).toHaveTextContent(first.prompt);
    expect(screen.getByLabelText(`Not ${wrong}`)).toBeInTheDocument();
    expect(screen.getByLabelText(`Right answer: ${first.answer}`)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Practise my mistakes 💪' }));
    expect(screen.getByText(first.prompt)).toBeInTheDocument();
    expect(screen.queryByText('Question 1 of 7')).not.toBeInTheDocument(); // just the one
    choose(first.answer);
    fireEvent.click(screen.getByRole('button', { name: 'Finish ✓' }));
    expect(screen.getByLabelText('3 out of 3 stars')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Practise my mistakes 💪' })).not.toBeInTheDocument();
  });
});
