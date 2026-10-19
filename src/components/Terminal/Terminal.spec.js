import { act, fireEvent, screen } from '@testing-library/react';

import en from '@/locales/en.json';
import { renderWithProviders, i18n } from '@/test-utils';
import Terminal from '.';

const push = jest.fn();
jest.mock('next/navigation', () => ({ useRouter: () => ({ push }) }));

const type = (line) => {
  const input = screen.getByLabelText('Type a command');
  fireEvent.change(input, { target: { value: line } });
  fireEvent.submit(input.closest('form'));
};

describe('Terminal', () => {
  beforeAll(() => {
    Element.prototype.scrollIntoView = jest.fn(); // jsdom does not scroll
  });

  beforeEach(() => {
    jest.useFakeTimers();
    i18n.changeLanguage('en');
    push.mockClear();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const boot = () => {
    renderWithProviders(<Terminal />);
    act(() => jest.runAllTimers());
  };

  it('boots by typing whoami, then shows the photo, the intro and the shortcuts', () => {
    boot();
    expect(screen.getByRole('img', { name: 'Javier Garrido, in 8-bit pixel art' })).toBeInTheDocument();
    expect(screen.getByText(en.introParagraph1)).toBeInTheDocument();
    expect(screen.getByText(en.terminal.hint)).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Commands' })).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute('data-terminal');
  });

  it('runs typed commands and prints their output under the prompt', () => {
    boot();
    type('experience');
    en.experience.forEach(job => expect(screen.getByText(`▸ ${job.company}`)).toBeInTheDocument());
    expect(screen.getByText((_, element) => element.textContent === 'javier@garrido:~$ experience'))
      .toBeInTheDocument();
  });

  it('answers unknown commands, and clear empties the screen', () => {
    boot();
    type('rm -rf /');
    expect(screen.getByText(/command not found: rm/)).toBeInTheDocument();
    type('clear');
    expect(screen.queryByText(/command not found/)).not.toBeInTheDocument();
    expect(screen.queryByText(en.introParagraph1)).not.toBeInTheDocument();
  });

  it('brings back earlier commands with the up arrow and completes with Tab', () => {
    boot();
    type('skills');
    const input = screen.getByLabelText('Type a command');
    fireEvent.keyDown(input, { key: 'ArrowUp' });
    expect(input).toHaveValue('skills');
    fireEvent.change(input, { target: { value: 'proj' } });
    fireEvent.keyDown(input, { key: 'Tab' });
    expect(input).toHaveValue('projects');
  });

  it('switches language with lang', () => {
    boot();
    type('lang es');
    expect(screen.getByText('Idioma cambiado a español.')).toBeInTheDocument();
    expect(i18n.language).toBe('es');
  });

  it('runs a shortcut, and exit goes back to the site', () => {
    boot();
    fireEvent.click(screen.getByRole('button', { name: 'contact' }));
    expect(screen.getByText(en.contactText)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'exit' }));
    act(() => jest.runAllTimers());
    expect(push).toHaveBeenCalledWith('/');
  });

  it('opens the bug game with play', async () => {
    boot();
    type('play');
    jest.useRealTimers();
    expect(await screen.findByRole('dialog', { name: 'Bug squash' })).toBeInTheDocument();
  });
});
