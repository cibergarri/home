import { fireEvent, screen, within } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import daysOfTheWeek from '../exercises/english/days-of-the-week';
import rulesAndGames from '../exercises/english/rules-and-games';
import funciones from '../exercises/naturales/tema-1/funciones';
import localCouncil from '../exercises/social-science/unit-2/local-council';
import { ExplainContext } from '../Explain';
import { LanguageContext } from '../language';
import MatchGame from '.';

const english = text => within(screen.getByRole('list', { name: 'English' })).getByRole('button', { name: text });
const spanish = text => within(screen.getByRole('list', { name: 'Español' })).getByRole('button', { name: text });

describe('MatchGame', () => {
  const speak = jest.fn();

  beforeAll(() => {
    window.speechSynthesis = { speak, cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
  });

  it('pairs an English word with its Spanish one and says it', () => {
    renderWithProviders(<MatchGame exercise={daysOfTheWeek} />);
    fireEvent.click(english('Monday'));
    fireEvent.click(spanish('Lunes'));
    expect(english('Monday')).toBeDisabled();
    expect(spanish('Lunes')).toBeDisabled();
    expect(screen.getByText('✓ Monday = Lunes')).toBeInTheDocument();
    expect(speak).toHaveBeenCalledWith(expect.objectContaining({ text: 'Monday' }));
  });

  it('works starting from the Spanish side too, and leaves a wrong pair open', () => {
    renderWithProviders(<MatchGame exercise={daysOfTheWeek} />);
    fireEvent.click(spanish('Martes'));
    fireEvent.click(english('Friday'));
    expect(english('Friday')).toBeEnabled();
    expect(screen.getByText('Not quite. Try another pair!')).toBeInTheDocument();
    fireEvent.click(spanish('Viernes'));
    fireEvent.click(english('Friday'));
    expect(english('Friday')).toBeDisabled();
  });

  it('matches only `draw` of the pairs, picked from the whole list', () => {
    const pool = { ...daysOfTheWeek, draw: 3 };
    renderWithProviders(<MatchGame exercise={pool} />);
    const shown = daysOfTheWeek.pairs.filter(({ en }) => screen.queryByRole('button', { name: en }));
    expect(shown).toHaveLength(3);
    shown.forEach(({ en, es }) => {
      fireEvent.click(english(en));
      fireEvent.click(spanish(es));
    });
    expect(screen.getByRole('button', { name: 'Play again' })).toBeInTheDocument();
  });

  it('celebrates when every pair is matched', () => {
    renderWithProviders(<MatchGame exercise={daysOfTheWeek} />);
    daysOfTheWeek.pairs.forEach(({ en, es }) => {
      fireEvent.click(english(en));
      fireEvent.click(spanish(es));
    });
    expect(screen.getByLabelText('3 out of 3 stars')).toBeInTheDocument();
  });

  it('shows pictures instead of Spanish when the pairs have them, labelled in Spanish', () => {
    renderWithProviders(<MatchGame exercise={rulesAndGames} />);
    const pictures = screen.getByRole('list', { name: 'Pictures' });
    expect(within(pictures).queryByText('Lávate las manos.')).not.toBeInTheDocument();
    fireEvent.click(english('Wash your hands.'));
    fireEvent.click(within(pictures).getByRole('button', { name: 'Lávate las manos.' }));
    expect(screen.getByText('✓ Wash your hands.')).toBeInTheDocument();
  });

  it('shows a wrong pair again at the end, and matches it again with the one it was mixed up with', () => {
    renderWithProviders(<MatchGame exercise={daysOfTheWeek} />);
    fireEvent.click(english('Monday'));
    fireEvent.click(spanish('Martes'));
    daysOfTheWeek.pairs.forEach(({ en, es }) => {
      fireEvent.click(english(en));
      fireEvent.click(spanish(es));
    });
    expect(screen.getByLabelText('Not Martes')).toBeInTheDocument();
    expect(screen.getByLabelText('Right answer: Lunes')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Practise my mistakes 💪' }));
    expect(screen.getByText('0 of 2 pairs')).toBeInTheDocument();
    expect(english('Monday')).toBeEnabled();
    expect(english('Tuesday')).toBeEnabled();
    expect(screen.queryByRole('button', { name: 'Friday' })).not.toBeInTheDocument();
  });

  it('hangs the functions from the root in a diagram, and joins each one to what it is with a line', () => {
    renderWithProviders(<LanguageContext.Provider value="es"><MatchGame exercise={funciones} /></LanguageContext.Provider>);
    const functions = screen.getByRole('list', { name: 'Función' });
    const meanings = screen.getByRole('list', { name: '¿Qué es?' });
    expect(within(functions).getByText('Funciones vitales')).toBeInTheDocument();
    expect(screen.queryAllByTestId('join')).toHaveLength(0);
    fireEvent.click(within(functions).getByRole('button', { name: 'Nutrición' }));
    fireEvent.click(within(meanings).getByRole('button', { name: 'Tomamos alimentos y aire para crecer y tener energía.' }));
    expect(screen.getByText('✓ Nutrición: Tomamos alimentos y aire para crecer y tener energía.')).toBeInTheDocument();
    expect(speak).toHaveBeenLastCalledWith(expect.objectContaining({ text: 'Nutrición: Tomamos alimentos y aire para crecer y tener energía.' }));
    expect(screen.getAllByTestId('join')).toHaveLength(1);
    fireEvent.click(within(meanings).getByRole('button', { name: 'Escuchar Los seres vivos tienen hijos que se parecen a ellos.' }));
    expect(speak).toHaveBeenLastCalledWith(expect.objectContaining({ text: 'Los seres vivos tienen hijos que se parecen a ellos.' }));
  });

  it('joins each word to its Spanish first, then the Spanish to what it means, with a flag for its Spanish', () => {
    renderWithProviders(<ExplainContext.Provider value><MatchGame exercise={localCouncil} /></ExplainContext.Provider>);
    const words = screen.getByRole('list', { name: 'Word' });
    const spanishRow = screen.getByRole('list', { name: 'In Spanish' });
    const meanings = screen.getByRole('list', { name: 'What is it?' });
    const mayor = within(words).getByRole('button', { name: 'Mayor' });
    const alcalde = within(spanishRow).getByRole('button', { name: 'alcalde o alcaldesa' });
    const head = within(meanings).getByRole('button', { name: 'The head of the local council.' });

    fireEvent.click(mayor);
    fireEvent.click(head); // a word goes with its Spanish first: this only picks the meaning
    expect(screen.queryAllByTestId('join')).toHaveLength(0);
    fireEvent.click(within(spanishRow).getByRole('button', { name: 'concejales' }));
    expect(screen.getByText(/Not quite|Casi/)).toBeInTheDocument();

    fireEvent.click(mayor);
    fireEvent.click(alcalde);
    expect(screen.getByText('✓ Mayor = alcalde o alcaldesa')).toBeInTheDocument();
    expect(speak).toHaveBeenLastCalledWith(expect.objectContaining({ text: 'alcalde o alcaldesa', lang: 'es-ES' }));
    expect(mayor).toBeDisabled();
    expect(alcalde).not.toBeDisabled(); // it still goes with what it means

    fireEvent.click(alcalde);
    fireEvent.click(head);
    expect(screen.getByText('✓ alcalde o alcaldesa: The head of the local council.')).toBeInTheDocument();
    expect(alcalde).toBeDisabled();
    expect(head).toBeDisabled();
    expect(screen.getAllByTestId('join')).toHaveLength(2);

    fireEvent.click(within(meanings).getByRole('button', { name: '¿Qué significa The head of the local council.?' }));
    expect(within(screen.getByRole('dialog')).getByText('La persona que dirige el ayuntamiento.')).toBeInTheDocument();
  });
});
