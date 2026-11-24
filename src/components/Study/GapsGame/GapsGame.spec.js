import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import roadSafety from '../exercises/social-science/unit-2/road-safety';
import localCouncil from '../exercises/social-science/unit-2/local-council';
import GapsGame from '.';

const complete = localCouncil.more.find(part => part.type === 'gaps');

describe('GapsGame', () => {
  const speak = jest.fn();

  beforeAll(() => {
    window.speechSynthesis = { speak, cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
  });

  it('puts the words of page 31 in their gaps, and reads a sentence when it is complete', () => {
    renderWithProviders(<GapsGame exercise={complete} />);
    expect(screen.getAllByRole('button', { name: /^Gap/ })).toHaveLength(7);

    fireEvent.click(screen.getAllByRole('button', { name: 'services' })[0]);
    fireEvent.click(screen.getAllByRole('button', { name: 'Gap 1' })[0]); // the mayor's gap
    expect(screen.getByText('Not quite. Try another box!')).toBeInTheDocument();

    fireEvent.click(screen.getAllByRole('button', { name: 'mayor' })[0]);
    fireEvent.click(screen.getAllByRole('button', { name: 'Gap 1' })[0]);
    expect(screen.getByText('✓ The mayor is the head of the local council.')).toBeInTheDocument();
    expect(speak).toHaveBeenLastCalledWith(expect.objectContaining({ text: 'The mayor is the head of the local council.' }));
    expect(screen.getAllByRole('button', { name: /^Gap/ })).toHaveLength(6);
    expect(screen.getByText('1 of 7 done')).toBeInTheDocument();
  });

  it('completes the road safety rules of page 33', () => {
    renderWithProviders(<GapsGame exercise={roadSafety.more.find(part => part.title === 'Safe routes')} />);
    expect(screen.getAllByRole('button', { name: /^Gap/ })).toHaveLength(3);
    fireEvent.click(screen.getByRole('button', { name: 'cycle lane' }));
    fireEvent.click(screen.getAllByRole('button', { name: 'Gap 1' })[1]);
    expect(screen.getByText('✓ Bikes ride on the cycle lane.')).toBeInTheDocument();
  });
});
