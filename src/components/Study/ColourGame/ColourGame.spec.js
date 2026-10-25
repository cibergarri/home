import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import physicalAndHumanFeatures from '../exercises/physical-and-human-features';
import ColourGame from '.';

const crayon = title => fireEvent.click(screen.getByRole('button', { name: title }));
const colour = word => fireEvent.click(screen.getByRole('button', { name: word }));
const isColoured = word => screen.getByRole('button', { name: word }).disabled;

describe('ColourGame', () => {
  it('shows a crayon per type of landscape and every word, none coloured', () => {
    renderWithProviders(<ColourGame exercise={physicalAndHumanFeatures} />);
    ['Mountain landscapes', 'Flat landscapes', 'Coastal landscapes']
      .forEach(title => expect(screen.getByRole('button', { name: title, pressed: false })).toBeInTheDocument());
    physicalAndHumanFeatures.words.forEach(({ word }) => expect(isColoured(word)).toBe(false));
    expect(screen.getByText('0 of 10 coloured')).toBeInTheDocument();
  });

  it('asks for a crayon first', () => {
    renderWithProviders(<ColourGame exercise={physicalAndHumanFeatures} />);
    colour('Valley');
    expect(screen.getByText(/First pick up a crayon/)).toBeInTheDocument();
    expect(isColoured('Valley')).toBe(false);
  });

  it('colours a word with its own crayon and not with another', () => {
    renderWithProviders(<ColourGame exercise={physicalAndHumanFeatures} />);
    crayon('Coastal landscapes');
    colour('Plateau');
    expect(isColoured('Plateau')).toBe(false);
    expect(screen.getByText(/Plateau isn't in coastal landscapes/)).toBeInTheDocument();
    colour('Cliff');
    expect(isColoured('Cliff')).toBe(true);
    expect(screen.getByText('1 of 10 coloured')).toBeInTheDocument();
  });

  it('celebrates when every word is coloured', () => {
    renderWithProviders(<ColourGame exercise={physicalAndHumanFeatures} />);
    physicalAndHumanFeatures.crayons.forEach(({ id, title }) => {
      crayon(title);
      physicalAndHumanFeatures.words.filter(word => word.crayon === id).forEach(({ word }) => colour(word));
    });
    expect(screen.getByText('Well done, Julia!')).toBeInTheDocument();
    expect(screen.getByLabelText('3 out of 3 stars')).toBeInTheDocument();
  });
});
