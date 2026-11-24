import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import livingTogether from '../exercises/social-science/unit-2/living-together';
import SpotGame from '.';

const street = livingTogether.more.find(part => part.type === 'spot');

describe('SpotGame', () => {
  const speak = jest.fn();

  beforeAll(() => {
    window.speechSynthesis = { speak, cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
  });

  it('circles the good behaviours and crosses out the bad ones of page 27', () => {
    renderWithProviders(<SpotGame exercise={street} />);
    expect(screen.getByText('Tap a person in the picture.')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'He paints on the wall.' }));
    fireEvent.click(screen.getByRole('button', { name: '⭕ Good behaviour' }));
    expect(screen.getByText('Not quite. Try again!')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '❌ Bad behaviour' }));
    expect(screen.getByText('✓ ❌ Bad behaviour: He paints on the wall.')).toBeInTheDocument();
    expect(screen.getAllByTestId('cross')).toHaveLength(1);

    fireEvent.click(screen.getByRole('button', { name: 'She cleans up after her dog.' }));
    fireEvent.click(screen.getByRole('button', { name: '⭕ Good behaviour' }));
    expect(screen.getAllByTestId('circle')).toHaveLength(1);
    expect(screen.getByText('2 of 6 done')).toBeInTheDocument();
  });
});
