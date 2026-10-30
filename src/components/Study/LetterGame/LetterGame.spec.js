import {
  act, fireEvent, screen, within,
} from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import numbers from '../exercises/english/numbers';
import { loadNet, readLetter } from '../handwriting';
import LetterGame from '.';

jest.mock('../handwriting', () => ({
  loadNet: jest.fn(() => Promise.resolve('net')),
  readLetter: jest.fn(),
}));

// The letters are written by hand: the tiles for most of these tests.
const parts = [numbers, ...numbers.more].map(part => ({ ...part, write: false }));
const word = () => within(screen.getByLabelText('Your answer')).getAllByText(/./).map(box => box.textContent).join('');
const missingOf = ({ word: spelt, shown }) => [...shown].flatMap((letter, i) => (letter === '_' ? [spelt[i]] : []));
// The first tile with that letter still to tap.
const tap = letter => fireEvent.click(screen.getAllByRole('button', { name: letter }).find(tile => !tile.disabled));

describe('LetterGame', () => {
  beforeAll(() => {
    window.speechSynthesis = { speak: jest.fn(), cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
  });

  it('spells every number from 1 to 20, with some letters missing', () => {
    const words = parts.flatMap(part => part.words);
    expect(words.map(({ number }) => number)).toEqual(Array.from({ length: 20 }, (_, i) => i + 1));
    words.forEach(({ word: spelt, shown }) => {
      expect(shown).toHaveLength(spelt.length);
      expect(shown).toContain('_');
      [...shown].forEach((letter, i) => expect([spelt[i], '_']).toContain(letter));
    });
  });

  it('shows the number, the word with gaps, and the missing letters among others', () => {
    renderWithProviders(<LetterGame exercise={parts[0]} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(word()).toBe('oe');
    expect(screen.getAllByLabelText('Missing letter')).toHaveLength(1);
    expect(screen.getByRole('button', { name: 'n' })).toBeInTheDocument();
    expect(screen.getAllByRole('button').filter(button => /^[a-z]$/.test(button.textContent))).toHaveLength(4);
  });

  it('only takes the right letter for the next gap', () => {
    renderWithProviders(<LetterGame exercise={parts[0]} />);
    fireEvent.click(screen.getByRole('button', { name: 'Next question' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next question' }));
    expect(word()).toBe('the');
    tap('e');
    expect(screen.getByText('Not that letter! Try another one.')).toBeInTheDocument();
    expect(word()).toBe('the');
    tap('r');
    tap('e');
    expect(word()).toBe('three');
    expect(window.speechSynthesis.speak).toHaveBeenLastCalledWith(expect.objectContaining({ text: 'three' }));
  });

  it('goes through every word, and celebrates after the last', () => {
    parts.forEach((part) => {
      const { unmount } = renderWithProviders(<LetterGame exercise={part} />);
      part.words.forEach((puzzle, index) => {
        missingOf(puzzle).forEach(tap);
        expect(word()).toBe(puzzle.word);
        fireEvent.click(screen.getByRole('button', { name: index + 1 < part.words.length ? 'Next →' : 'Finish ✓' }));
      });
      expect(screen.getByLabelText('3 out of 3 stars')).toBeInTheDocument();
      unmount();
    });
  });

  describe('written by hand', () => {
    beforeAll(() => {
      window.PointerEvent ??= class PointerEvent extends MouseEvent {
        constructor(type, init = {}) {
          super(type, init);
          this.pointerId = init.pointerId;
        }
      };
      HTMLCanvasElement.prototype.getContext = () => ({
        setTransform: jest.fn(), beginPath: jest.fn(), moveTo: jest.fn(), lineTo: jest.fn(), stroke: jest.fn(),
      });
    });

    const writeLetter = async (letter) => {
      readLetter.mockReturnValueOnce({ text: letter });
      const pad = screen.getByRole('img', { name: 'Write the letter here' });
      fireEvent.pointerDown(pad, { pointerId: 1, clientX: 10, clientY: 10 });
      fireEvent.pointerMove(pad, { pointerId: 1, clientX: 20, clientY: 60 });
      fireEvent.pointerUp(pad, { pointerId: 1 });
      await act(async () => fireEvent.click(screen.getByRole('button', { name: 'Check' })));
    };

    it('reads each letter written, says what it read when it is wrong, and fills the gaps', async () => {
      renderWithProviders(<LetterGame exercise={numbers.more[0]} />);
      expect(screen.queryByRole('button', { name: 'v' })).not.toBeInTheDocument();
      fireEvent.click(screen.getByRole('button', { name: 'Check' }));
      expect(screen.getByText('Write a letter first.')).toBeInTheDocument();
      await writeLetter('a');
      expect(screen.getByText('I read “a”. Not quite. Try again!')).toBeInTheDocument();
      expect(word()).toBe('elvn');
      await writeLetter('e');
      await writeLetter('e');
      expect(word()).toBe('eleven');
      expect(screen.getByRole('button', { name: 'Next →' })).toBeInTheDocument();
    });

    it('says so, and keeps the writing, when the reader cannot be loaded', async () => {
      loadNet.mockReturnValueOnce(Promise.reject(new Error('offline')));
      renderWithProviders(<LetterGame exercise={numbers.more[0]} />);
      await writeLetter('e');
      expect(screen.getByText('I can’t read writing right now. Try again in a moment.')).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'Write the letter here' })).toHaveAttribute('data-strokes', '1');
      readLetter.mockReset();
    });

    it('can swap to the letter tiles and back', async () => {
      renderWithProviders(<LetterGame exercise={numbers.more[0]} />);
      await writeLetter('e');
      fireEvent.click(screen.getByRole('button', { name: '🔤 Use the letter tiles' }));
      tap('e');
      expect(word()).toBe('eleven');
    });
  });
});
