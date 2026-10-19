import { act, fireEvent, screen, within } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import Header, { SOCIAL_LINKS } from '.';

describe('Header', () => {
  it('keeps the typewriter hero', () => {
    const { container } = renderWithProviders(<Header />);
    const hero = container.querySelector('#background-image');
    expect(hero).toHaveTextContent('<hate \\>');
    expect(hero).toHaveTextContent('<heart \\>');
    expect(hero).toHaveTextContent('coding');
  });

  it('links to every social profile in a new tab', () => {
    renderWithProviders(<Header />);
    Object.values(SOCIAL_LINKS).forEach(href => {
      const link = screen.getAllByRole('link').find(a => a.getAttribute('href') === href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('keeps the social links in a floating dock for phones, no menu to open', () => {
    renderWithProviders(<Header />);
    const dock = screen.getByRole('navigation', { name: 'Find me on' });
    expect(within(dock).getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', SOCIAL_LINKS.github);
    expect(within(dock).getAllByRole('link')).toHaveLength(Object.keys(SOCIAL_LINKS).length);
    expect(screen.queryByRole('button', { name: 'Open menu' })).not.toBeInTheDocument();
  });

  it('dims the dock while the page scrolls and brings it back once it settles', () => {
    jest.useFakeTimers();
    renderWithProviders(<Header />);
    const dock = screen.getByRole('navigation', { name: 'Find me on' });
    expect(dock).toHaveStyle({ opacity: '1' });

    fireEvent.scroll(window);
    expect(dock).toHaveStyle({ opacity: '0.45' });

    act(() => jest.advanceTimersByTime(600));
    expect(dock).toHaveStyle({ opacity: '1' });
    jest.useRealTimers();
  });

  it('loads the hero mouse animation script for the current theme', () => {
    renderWithProviders(<Header />);
    const script = document.getElementById('bg-animation');
    expect(script).toHaveAttribute('data-class-suffix', 'normal');
    expect(script.getAttribute('src')).toBe('/scripts/bg-animation.js');
  });
});
