import { fireEvent, screen, within } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import TableGame from '.';

const exercise = {
  instructions: 'Fill in the table.',
  columns: ['Palabra', 'Sinónimo', 'Antónimo'],
  rows: [
    { id: 'alto', word: 'alto', cells: ['elevado', 'bajo'] },
    { id: 'ganar', word: 'ganar', cells: ['vencer', 'perder'] },
  ],
};

const tile = word => within(screen.getByRole('list', { name: 'Cards' })).getByRole('button', { name: word });
const box = name => screen.getByRole('button', { name });

describe('TableGame', () => {
  beforeAll(() => {
    window.speechSynthesis = { speak: jest.fn(), cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
  });

  it('shows the words of the table and a box for each of the other columns', () => {
    renderWithProviders(<TableGame exercise={exercise} />);
    expect(screen.getAllByRole('columnheader').map(heading => heading.textContent)).toEqual(exercise.columns);
    expect(box('Sinónimo de alto')).toBeInTheDocument();
    expect(box('Antónimo de ganar')).toBeInTheDocument();
    expect(screen.getByText('0 of 4 done')).toBeInTheDocument();
  });

  it('puts a word in its box, and shakes a box that wants another', () => {
    renderWithProviders(<TableGame exercise={exercise} />);
    fireEvent.click(tile('bajo'));
    fireEvent.click(box('Sinónimo de alto'));
    expect(screen.getByText('Not quite. Try another box!')).toBeInTheDocument();
    expect(tile('bajo')).toBeInTheDocument();
    fireEvent.click(tile('bajo'));
    fireEvent.click(box('Antónimo de alto'));
    expect(box('Antónimo de alto: bajo')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'bajo' })).not.toBeInTheDocument();
  });

  it('asks for a word first when a box is tapped', () => {
    renderWithProviders(<TableGame exercise={exercise} />);
    fireEvent.click(box('Sinónimo de ganar'));
    expect(screen.getByText('First pick a word, then tap its box.')).toBeInTheDocument();
  });

  it('celebrates when the table is full', () => {
    renderWithProviders(<TableGame exercise={exercise} />);
    exercise.rows.forEach(({ word, cells: [same, opposite] }) => {
      fireEvent.click(tile(same));
      fireEvent.click(box(`Sinónimo de ${word}`));
      fireEvent.click(tile(opposite));
      fireEvent.click(box(`Antónimo de ${word}`));
    });
    expect(screen.getByLabelText('3 out of 3 stars')).toBeInTheDocument();
  });

  it('fills in only `draw` of the rows', () => {
    renderWithProviders(<TableGame exercise={{ ...exercise, draw: 1 }} />);
    expect(screen.getAllByRole('button', { name: /^Sinónimo de / })).toHaveLength(1);
    expect(screen.getByText('0 of 2 done')).toBeInTheDocument();
  });
});
