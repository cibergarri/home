import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  it('opens the social links in a side drawer from the edge tab and closes it with Escape', async () => {
    renderWithProviders(<Header />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    const drawer = screen.getByRole('dialog', { name: 'Find me on' });
    expect(within(drawer).getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', SOCIAL_LINKS.github);
    expect(within(drawer).getAllByRole('link')).toHaveLength(Object.keys(SOCIAL_LINKS).length);
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveFocus();
    expect(document.body.style.overflow).toBe('hidden');

    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveFocus();
    expect(document.body.style.overflow).toBe('');
  });

  it('closes the drawer from its close button and from the backdrop', async () => {
    const { container } = renderWithProviders(<Header />);
    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    await userEvent.click(screen.getByRole('button', { name: 'Close menu' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    await userEvent.click(container.querySelector('div[aria-hidden="true"]'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('loads the hero mouse animation script for the current theme', () => {
    renderWithProviders(<Header />);
    const script = document.getElementById('bg-animation');
    expect(script).toHaveAttribute('data-class-suffix', 'normal');
    expect(script.getAttribute('src')).toBe('/scripts/bg-animation.js');
  });
});
