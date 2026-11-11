import { act, fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import WordGame, { answerIn, plain } from '.';

const exercise = {
  instructions: 'Find the word.',
  questions: [
    { prompt: 'Un antónimo de «fácil»', answers: ['difícil', 'complicado'] },
    { prompt: 'Un sinónimo de «alegre»', answers: ['contento', 'feliz'] },
  ],
};

const type = (word) => {
  fireEvent.change(screen.getByRole('textbox', { name: 'Type the word here' }), { target: { value: word } });
  fireEvent.click(screen.getByRole('button', { name: 'Check' }));
};

describe('WordGame', () => {
  beforeAll(() => {
    window.speechSynthesis = { speak: jest.fn(), cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
  });

  afterEach(() => {
    delete window.webkitSpeechRecognition;
  });

  it('compares words without capitals, accents or punctuation', () => {
    expect(plain('¡Difícil!')).toBe('dificil');
    expect(answerIn('DIFICIL', ['difícil'])).toBe('difícil');
    expect(answerIn(['es fácil', 'es difícil'], ['difícil'])).toBe('difícil');
    expect(answerIn('fácil', ['difícil'])).toBeNull();
  });

  it('takes a typed word, and shows it spelt right with the others that are right too', () => {
    renderWithProviders(<WordGame exercise={exercise} />);
    type('Dificil');
    expect(screen.getByText('✓ difícil')).toBeInTheDocument();
    expect(screen.getByText('Also right: complicado.')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Next →' }));
    expect(screen.getByText('Un sinónimo de «alegre»')).toBeInTheDocument();
  });

  it('gives a clue after a wrong word, and an answer after two', () => {
    renderWithProviders(<WordGame exercise={exercise} />);
    type('fácil');
    expect(screen.getByText('Clue: it starts with “d”.')).toBeInTheDocument();
    type('rápido');
    expect(screen.getByText('One answer is “difícil”.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next →' })).toBeInTheDocument();
  });

  it('asks for a word before checking', () => {
    renderWithProviders(<WordGame exercise={exercise} />);
    fireEvent.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByText('Type or say a word first.')).toBeInTheDocument();
  });

  it('has no microphone where the browser cannot listen', () => {
    renderWithProviders(<WordGame exercise={exercise} />);
    expect(screen.queryByRole('button', { name: '🎤 Say it' })).not.toBeInTheDocument();
  });

  it('listens for the word where the browser can', () => {
    let ear;
    window.webkitSpeechRecognition = function Recognition() {
      ear = this;
      this.start = jest.fn();
      this.stop = jest.fn();
      this.abort = jest.fn();
    };
    renderWithProviders(<WordGame exercise={exercise} />);
    fireEvent.click(screen.getByRole('button', { name: '🎤 Say it' }));
    expect(ear.start).toHaveBeenCalled();
    act(() => ear.onresult({ results: [[{ transcript: 'Complicado' }]] }));
    act(() => ear.onend());
    expect(screen.getByText('✓ complicado')).toBeInTheDocument();
  });
});
