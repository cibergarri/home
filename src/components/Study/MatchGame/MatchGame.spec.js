import { fireEvent, screen, within } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import daysOfTheWeek from '../exercises/english/days-of-the-week';
import rulesAndGames from '../exercises/english/rules-and-games';
import MatchGame from '.';

const english = text => within(screen.getByRole('list', { name: 'English' })).getByRole('button', { name: text });
const spanish = text => within(screen.getByRole('list', { name: 'Español' })).getByRole('button', { name: text });

describe('MatchGame', () => {
  const speak = jest.fn();

  beforeAll(() => {
    window.speechSynthesis = { speak, cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
  });

  it('pairs an English word with its Spanish one and says it', () => {
    renderWithProviders(<MatchGame exercise={daysOfTheWeek} />);
    fireEvent.click(english('Monday'));
    fireEvent.click(spanish('Lunes'));
    expect(english('Monday')).toBeDisabled();
    expect(spanish('Lunes')).toBeDisabled();
    expect(screen.getByText('✓ Monday = Lunes')).toBeInTheDocument();
    expect(speak).toHaveBeenCalledWith(expect.objectContaining({ text: 'Monday' }));
  });

  it('works starting from the Spanish side too, and leaves a wrong pair open', () => {
    renderWithProviders(<MatchGame exercise={daysOfTheWeek} />);
    fireEvent.click(spanish('Martes'));
    fireEvent.click(english('Friday'));
    expect(english('Friday')).toBeEnabled();
    expect(screen.getByText('Not quite. Try another pair!')).toBeInTheDocument();
    fireEvent.click(spanish('Viernes'));
    fireEvent.click(english('Friday'));
    expect(english('Friday')).toBeDisabled();
  });

  it('celebrates when every pair is matched', () => {
    renderWithProviders(<MatchGame exercise={daysOfTheWeek} />);
    daysOfTheWeek.pairs.forEach(({ en, es }) => {
      fireEvent.click(english(en));
      fireEvent.click(spanish(es));
    });
    expect(screen.getByLabelText('3 out of 3 stars')).toBeInTheDocument();
  });

  it('shows pictures instead of Spanish when the pairs have them, labelled in Spanish', () => {
    renderWithProviders(<MatchGame exercise={rulesAndGames} />);
    const pictures = screen.getByRole('list', { name: 'Pictures' });
    expect(within(pictures).queryByText('Lávate las manos.')).not.toBeInTheDocument();
    fireEvent.click(english('Wash your hands.'));
    fireEvent.click(within(pictures).getByRole('button', { name: 'Lávate las manos.' }));
    expect(screen.getByText('✓ Wash your hands.')).toBeInTheDocument();
  });
});
