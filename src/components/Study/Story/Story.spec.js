import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import rivers from '../exercises/rivers';
import Story from '.';

describe('Story', () => {
  const speak = jest.fn();

  beforeAll(() => {
    window.speechSynthesis = { speak, cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
  });

  beforeEach(() => speak.mockClear());

  it('starts with what a river is, with no way back yet', () => {
    renderWithProviders(<Story exercise={rivers} />);
    expect(screen.getByRole('heading', { name: 'A river' })).toBeInTheDocument();
    expect(screen.getByText(/The route of a river is its course/)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: '← Back' })).not.toBeInTheDocument();
    expect(screen.getByLabelText('Step 1 of 4')).toBeInTheDocument();
  });

  it('follows the river course by course, naming its parts on the picture', () => {
    renderWithProviders(<Story exercise={rivers} />);
    const next = () => fireEvent.click(screen.getByRole('button', { name: 'Next →' }));
    next();
    expect(screen.getByRole('heading', { name: 'Upper course' })).toBeInTheDocument();
    expect(screen.getByText('Source')).toBeInTheDocument();
    next();
    expect(screen.getByRole('heading', { name: 'Middle course' })).toBeInTheDocument();
    expect(screen.getByText('Tributary')).toBeInTheDocument();
    next();
    expect(screen.getByRole('heading', { name: 'Lower course' })).toBeInTheDocument();
    expect(screen.getByText('Mouth')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '← Back' }));
    expect(screen.getByRole('heading', { name: 'Middle course' })).toBeInTheDocument();
  });

  it('reads the card aloud', () => {
    renderWithProviders(<Story exercise={rivers} />);
    fireEvent.click(screen.getByRole('button', { name: 'Next →' }));
    fireEvent.click(screen.getByRole('button', { name: 'Listen' }));
    expect(speak).toHaveBeenCalledWith(expect.objectContaining({ text: expect.stringMatching(/^Upper course\. Rivers start in the mountains/) }));
  });

  it('starts again after the last course', () => {
    renderWithProviders(<Story exercise={rivers} />);
    [1, 2, 3].forEach(() => fireEvent.click(screen.getByRole('button', { name: 'Next →' })));
    fireEvent.click(screen.getByRole('button', { name: 'Again ↺' }));
    expect(screen.getByRole('heading', { name: 'A river' })).toBeInTheDocument();
  });
});
