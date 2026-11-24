import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import villagesAndCities from '../exercises/social-science/unit-2/villages-and-cities';
import JoinGame from '.';

const [pictures, join] = villagesAndCities.more.filter(part => part.type === 'join');

describe('JoinGame', () => {
  const speak = jest.fn();

  beforeAll(() => {
    window.speechSynthesis = { speak, cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
  });

  it('joins villages and cities to what they are like, as on page 25', () => {
    renderWithProviders(<JoinGame exercise={join} />);
    const cities = screen.getByRole('button', { name: 'cities' });

    fireEvent.click(screen.getByRole('button', { name: 'few houses' }));
    fireEvent.click(cities);
    expect(screen.getByText('Not quite. Try another pair!')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'tall buildings' }));
    fireEvent.click(cities);
    expect(screen.getByText('✓ cities: tall buildings')).toBeInTheDocument();
    expect(speak).toHaveBeenLastCalledWith(expect.objectContaining({ text: 'cities: tall buildings' }));
    expect(screen.getByRole('button', { name: 'tall buildings' })).toBeDisabled();

    fireEvent.click(cities); // a left word can have several lines
    fireEvent.click(screen.getByRole('button', { name: 'many houses' }));
    expect(screen.getByText('2 of 4 done')).toBeInTheDocument();
  });

  it('joins the pictures of page 25 to village or city', () => {
    renderWithProviders(<JoinGame exercise={pictures} />);
    fireEvent.click(screen.getByRole('button', { name: /A few low houses/ }));
    fireEvent.click(screen.getByRole('button', { name: 'village' }));
    expect(screen.getByText('✓ village')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /A few low houses/ })).toBeDisabled();
  });
});
