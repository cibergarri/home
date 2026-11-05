import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import { LanguageContext } from '../language';
import euros from '../exercises/mates/tema-2/euros';
import MoneyGame, { fewestPieces } from '.';

const part = title => euros.more.find(more => more.title === title);
const inSpanish = ui => renderWithProviders(<LanguageContext.Provider value="es">{ui}</LanguageContext.Provider>);
const put = (...values) => values.forEach(value => fireEvent.click(screen.getByRole('button', { name: `Poner ${value} €` })));
const check = () => fireEvent.click(screen.getByRole('button', { name: 'Comprobar' }));

describe('MoneyGame', () => {
  beforeAll(() => {
    window.speechSynthesis = { speak: jest.fn(), cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
  });

  it('knows the fewest notes and coins for an amount', () => {
    expect(fewestPieces(4)).toBe(2);
    expect(fewestPieces(8)).toBe(3);
    expect(fewestPieces(37)).toBe(4);
    expect(fewestPieces(99)).toBe(6);
  });

  it('adds up the money put down, and takes a piece back when tapped', () => {
    inSpanish(<MoneyGame exercise={part('Paga justo')} />);
    expect(screen.getByText('Paga 8 € justos.')).toBeInTheDocument();
    put(5, 2, 2);
    expect(screen.getByRole('region', { name: 'Tu dinero' })).toHaveTextContent('9 €');
    fireEvent.click(screen.getAllByRole('button', { name: 'Quitar 2 €' })[0]);
    expect(screen.getByRole('region', { name: 'Tu dinero' })).toHaveTextContent('7 €');
  });

  it('wants the right amount, with the fewest notes and coins', () => {
    inSpanish(<MoneyGame exercise={part('Paga justo')} />);
    check();
    expect(screen.getByText('Pon primero algo de dinero.')).toBeInTheDocument();
    put(5, 2);
    check();
    expect(screen.getByText('Así tienes 7 €. Tienen que ser 8 €.')).toBeInTheDocument();
    put(1);
    check();
    expect(screen.getByRole('button', { name: 'Siguiente →' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente →' }));
    put(5, 5, 5);
    check();
    expect(screen.getByText('Está bien el dinero, pero se puede con menos billetes y monedas.')).toBeInTheDocument();
  });

  it('changes money for as many notes as it asks for', () => {
    inSpanish(<MoneyGame exercise={{ ...part('Cambia por billetes'), questions: [part('Cambia por billetes').questions[2]] }} />);
    expect(screen.getByText('Cambia todo este dinero por tres billetes.')).toBeInTheDocument();
    put(50, 10);
    check();
    expect(screen.getByText('Está bien el dinero, pero tiene que ser con tres billetes.')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Quitar 50 €' }));
    fireEvent.click(screen.getByRole('button', { name: 'Quitar 10 €' }));
    put(20, 20, 20);
    check();
    expect(screen.getByRole('button', { name: 'Terminar ✓' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Terminar ✓' }));
    expect(screen.getByLabelText('2 de 3 estrellas')).toBeInTheDocument();
  });
});
