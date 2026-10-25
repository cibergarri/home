import { fireEvent, screen, within } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import wheres from '../exercises/english/wheres';
import BuildGame from '.';

const building = wheres.more.find(part => part.type === 'build');
const tap = word => fireEvent.click(screen.getByRole('button', { name: word }));
const answer = () => within(screen.getByLabelText('Your answer')).queryAllByRole('listitem')
  .map(item => item.textContent).filter(Boolean);

describe('BuildGame', () => {
  beforeAll(() => {
    window.speechSynthesis = { speak: jest.fn(), cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
  });

  it('shows the Spanish and the English words mixed up', () => {
    renderWithProviders(<BuildGame exercise={building} />);
    expect(screen.getByText('Él está en la biblioteca.')).toBeInTheDocument();
    ['He’s', 'in', 'the', 'library.'].forEach(word => expect(screen.getByRole('button', { name: word })).toBeInTheDocument());
  });

  it('only takes the next word of the sentence', () => {
    renderWithProviders(<BuildGame exercise={building} />);
    tap('the');
    expect(answer()).toEqual([]);
    expect(screen.getByText('Not yet! Which word comes next?')).toBeInTheDocument();
    tap('He’s');
    tap('in');
    expect(answer()).toEqual(['He’s', 'in']);
  });

  it('goes on to the next sentence, and celebrates after the last', () => {
    renderWithProviders(<BuildGame exercise={building} />);
    building.puzzles.forEach(({ answer: words }, index) => {
      words.forEach(tap);
      fireEvent.click(screen.getByRole('button', { name: index + 1 < building.puzzles.length ? 'Next →' : 'Finish ✓' }));
    });
    expect(screen.getByLabelText('3 out of 3 stars')).toBeInTheDocument();
  });
});
