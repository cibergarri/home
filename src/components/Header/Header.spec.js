import { screen } from '@testing-library/react';

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

  it('loads the hero mouse animation script for the current theme', () => {
    renderWithProviders(<Header />);
    const script = document.getElementById('bg-animation');
    expect(script).toHaveAttribute('data-class-suffix', 'normal');
    expect(script.getAttribute('src')).toBe('/scripts/bg-animation.js');
  });
});
