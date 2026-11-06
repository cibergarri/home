import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '@/test-utils';
import JuliaPage from '@/app/julia/page';
import { WellDone } from './game';
import { LanguageContext } from './language';
import { loadProfile } from './profile';

const setName = async (name) => {
  await userEvent.click(screen.getByRole('button', { name: 'Settings' }));
  const input = screen.getByLabelText('Who is studying?');
  await userEvent.clear(input);
  if (name) await userEvent.type(input, name);
  await userEvent.click(screen.getByRole('button', { name: 'Save' }));
};

describe('who is studying', () => {
  afterEach(() => window.localStorage.clear());

  it('says hello to nobody in particular until a name is set', () => {
    renderWithProviders(<JuliaPage />);
    expect(screen.getByText('Hi! 👋')).toBeInTheDocument();
  });

  it('keeps the name typed in the settings in this browser, and says hello by name', async () => {
    renderWithProviders(<JuliaPage />);
    await setName('  Ana ');
    expect(screen.getByText('Hi, Ana! 👋')).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(loadProfile()).toEqual({ name: 'Ana' });
  });

  it('forgets the name when it is left empty', async () => {
    window.localStorage.setItem('study-profile', JSON.stringify({ name: 'Ana' }));
    renderWithProviders(<JuliaPage />);
    await userEvent.click(screen.getByRole('button', { name: 'Settings' }));
    expect(screen.getByLabelText('Who is studying?')).toHaveValue('Ana');
    await userEvent.click(screen.getByRole('button', { name: 'Settings' })); // closes without saving
    await setName('');
    expect(screen.getByText('Hi! 👋')).toBeInTheDocument();
    expect(window.localStorage.getItem('study-profile')).toBeNull();
  });

  it('cheers at the end of a game, by name if there is one', () => {
    window.localStorage.setItem('study-profile', JSON.stringify({ name: 'Ana' }));
    renderWithProviders(<WellDone mistakes={0} onAgain={() => {}} />);
    expect(screen.getByRole('heading', { name: 'Well done, Ana!' })).toBeInTheDocument();
    expect(screen.getAllByRole('paragraph')).toHaveLength(2); // how it went, and a cheer
  });

  it('cheers in Spanish with no name', () => {
    renderWithProviders(
      <LanguageContext.Provider value="es">
        <WellDone mistakes={1} onAgain={() => {}} />
      </LanguageContext.Provider>,
    );
    expect(screen.getByRole('heading', { name: '¡Muy bien!' })).toBeInTheDocument();
    expect(screen.queryByText(/Ana/)).not.toBeInTheDocument();
  });
});
