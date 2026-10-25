import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import positions from '../exercises/english/positions';
import wheres from '../exercises/english/wheres';
import review from '../exercises/english/review';
import QuizGame from '.';

const choose = text => fireEvent.click(screen.getByRole('button', { name: new RegExp(`^(✓ )?${text}$`) }));

describe('QuizGame', () => {
  beforeAll(() => {
    window.speechSynthesis = { speak: jest.fn(), cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
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

  it('has the right answer among the choices of every English question', () => {
    [wheres, positions, review].flatMap(exercise => [exercise, ...(exercise.more ?? [])])
      .filter(part => part.type === 'quiz')
      .flatMap(part => part.questions)
      .forEach(({ choices, answer }) => expect(choices).toContain(answer));
  });
});
