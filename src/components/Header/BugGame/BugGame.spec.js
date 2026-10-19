import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders, i18n } from '@/test-utils';
import BugGame from '.';

describe('BugGame', () => {
  beforeEach(() => {
    i18n.changeLanguage('en');
    localStorage.clear();
  });

  it('starts a round from the intro card and shows the score and the debt', () => {
    renderWithProviders(<BugGame onClose={jest.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: 'Start' }));
    expect(screen.queryByRole('button', { name: 'Start' })).not.toBeInTheDocument();
    expect(screen.getByText('Bugs fixed: 0')).toBeInTheDocument();
    expect(screen.getByLabelText('Technical debt: 0 of 5')).toBeInTheDocument();
  });

  it('shows the best score kept in the browser', () => {
    localStorage.setItem('bug-squash-best', '12');
    renderWithProviders(<BugGame onClose={jest.fn()} />);
    expect(screen.getByText('Your best: 12')).toBeInTheDocument();
  });

  it('closes from its close button and locks the page scroll while open', () => {
    const onClose = jest.fn();
    const { unmount } = renderWithProviders(<BugGame onClose={onClose} />);
    expect(document.body.style.overflow).toBe('hidden');
    fireEvent.click(screen.getByRole('button', { name: 'Close the game' }));
    expect(onClose).toHaveBeenCalled();
    unmount();
    expect(document.body.style.overflow).toBe('');
  });
});
