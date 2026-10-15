import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders, i18n } from '@/test-utils';
import Controls from '.';

describe('Controls', () => {
  beforeEach(() => {
    document.documentElement.dataset.theme = 'normal';
    document.cookie = 'my_language=; max-age=0; path=/';
    localStorage.clear();
    return i18n.changeLanguage('en');
  });

  it('offers the other language as one switch', () => {
    renderWithProviders(<Controls />);
    expect(screen.getByRole('button', { name: 'Switch to Spanish' })).toHaveTextContent('ENES');
  });

  it('changes the language and remembers it wherever the switch is clicked', async () => {
    renderWithProviders(<Controls />);
    await userEvent.click(screen.getByRole('button', { name: 'Switch to Spanish' }));
    expect(i18n.language).toBe('es');
    expect(document.cookie).toContain('my_language=es');
    await userEvent.click(screen.getByRole('button', { name: 'Cambiar a inglés' }));
    expect(i18n.language).toBe('en');
  });

  it('switches to night mode and back, persisting the choice', async () => {
    renderWithProviders(<Controls />);
    await userEvent.click(screen.getByRole('button', { name: 'Switch to dark mode' }));
    expect(document.documentElement.dataset.theme).toBe('night');
    expect(localStorage.getItem('theme')).toBe('night');
    await userEvent.click(screen.getByRole('button', { name: 'Switch to light mode' }));
    expect(document.documentElement.dataset.theme).toBe('normal');
  });

  it('changes the theme under a veil that is removed once it has faded', async () => {
    const finish = [];
    Element.prototype.animate = jest.fn(() => {
      const animation = {};
      finish.push(() => animation.onfinish());
      return animation;
    });
    renderWithProviders(<Controls />);
    await userEvent.click(screen.getByRole('button', { name: 'Switch to dark mode' }));
    expect(document.documentElement.dataset.theme).toBe('night');
    expect(document.querySelector('[data-theme-veil]')).toBeInTheDocument();
    expect(document.documentElement.classList.contains('theme-switching')).toBe(false);
    finish.forEach(f => f());
    expect(document.querySelector('[data-theme-veil]')).not.toBeInTheDocument();
    delete Element.prototype.animate;
  });

  it('starts from the theme the page already has', () => {
    document.documentElement.dataset.theme = 'night';
    renderWithProviders(<Controls />);
    expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument();
  });
});
