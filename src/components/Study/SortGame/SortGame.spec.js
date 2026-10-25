import { fireEvent, screen, within } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import rivers from '../exercises/rivers';
import SortGame from '.';

const sorting = rivers.more.find(part => part.type === 'sort');
const card = text => screen.getByRole('button', { name: text, pressed: false });
const column = id => screen.getByTestId(`column-${id}`);
const sortInto = (text, id) => {
  fireEvent.click(card(text));
  fireEvent.click(within(column(id)).getAllByRole('button')[0]);
};

describe('SortGame', () => {
  it('shows a column per course and every card to sort', () => {
    renderWithProviders(<SortGame exercise={sorting} />);
    ['Upper course', 'Middle course', 'Lower course'].forEach(title => expect(screen.getByText(title)).toBeInTheDocument());
    sorting.cards.forEach(({ text }) => expect(card(text)).toBeInTheDocument());
  });

  it('keeps a card sorted into its column and sends a wrong one back', () => {
    renderWithProviders(<SortGame exercise={sorting} />);
    sortInto('Flows fast', 'upper');
    expect(within(column('upper')).getByText('Flows fast')).toBeInTheDocument();
    sortInto('Ends at the sea', 'middle');
    expect(within(column('middle')).queryByText('Ends at the sea')).not.toBeInTheDocument();
    expect(card('Ends at the sea')).toBeInTheDocument();
    expect(screen.getByText('Not quite. Try another column!')).toBeInTheDocument();
  });

  it('takes a card that fits more than one column in any of them', () => {
    renderWithProviders(<SortGame exercise={sorting} />);
    sortInto('Wide', 'lower');
    expect(within(column('lower')).getByText('Wide')).toBeInTheDocument();
  });

  it('celebrates when every card is sorted', () => {
    renderWithProviders(<SortGame exercise={sorting} />);
    sorting.cards.forEach(({ text, columns }) => sortInto(text, columns[0]));
    expect(screen.getByText('Well done, Julia!')).toBeInTheDocument();
    expect(screen.getByLabelText('3 out of 3 stars')).toBeInTheDocument();
  });
});
