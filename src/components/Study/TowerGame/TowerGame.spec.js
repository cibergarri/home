import { act, fireEvent, screen, within } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import { LanguageContext } from '../language';
import sumar from '../exercises/mates/sumar';
import restar from '../exercises/mates/restar';
import TowerGame from '.';

const inSpanish = ui => renderWithProviders(<LanguageContext.Provider value="es">{ui}</LanguageContext.Provider>);
const key = digit => fireEvent.click(within(screen.getByRole('group', { name: 'Teclado de números' })).getByRole('button', { name: String(digit) }));
const box = name => screen.getByTestId(`box-${name}`);
const columnSums = sumar.more.find(part => part.type === 'tower');
const columnSubtractions = restar.more.find(part => part.type === 'tower');

describe('TowerGame', () => {
  beforeAll(() => {
    window.speechSynthesis = { speak: jest.fn(), cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
  });

  it('adds units first, then the tens, without a carry when it is not needed', () => {
    inSpanish(<TowerGame exercise={{ questions: [{ op: '+', a: 52, b: 34 }] }} />);
    expect(screen.getByText(/Suma las unidades: 2 \+ 4/)).toBeInTheDocument();
    expect(screen.queryByTestId('box-carry')).not.toBeInTheDocument();
    key(6);
    expect(box('units')).toHaveTextContent('6');
    expect(screen.getByText('Suma las decenas: 5 + 3.')).toBeInTheDocument();
    key(8);
    expect(screen.getByText('✓ 52 + 34 = 86')).toBeInTheDocument();
  });

  it('asks for the 1 carried to the tens when the units come to 10 or more', () => {
    jest.useFakeTimers();
    inSpanish(<TowerGame exercise={{ questions: [{ op: '+', a: 26, b: 16 }] }} />);
    key(1);
    expect(screen.getByText('¡Ese no! Vuelve a mirar.')).toBeInTheDocument();
    expect(box('units')).toHaveTextContent('');
    act(() => jest.runAllTimers());
    key(2);
    expect(screen.getByText(/12 son 1 decena y 2 unidades: te llevas 1/)).toBeInTheDocument();
    key(1);
    expect(box('carry')).toHaveTextContent('1');
    expect(screen.getByText('Suma las decenas: 1 + 2 + 1.')).toBeInTheDocument();
    key(4);
    expect(screen.getByText('✓ 26 + 16 = 42')).toBeInTheDocument();
    jest.useRealTimers();
  });

  it('subtracts units, then tens', () => {
    inSpanish(<TowerGame exercise={{ questions: [{ op: '-', a: 57, b: 36 }] }} />);
    expect(screen.getByText('Resta las unidades: 7 - 6.')).toBeInTheDocument();
    key(1);
    key(2);
    expect(screen.getByText('✓ 57 - 36 = 21')).toBeInTheDocument();
  });

  it('swaps 1 ten for 10 units when the units on top are too few, crossing out the tens', () => {
    inSpanish(<TowerGame exercise={{ questions: [{ op: '-', a: 35, b: 6 }] }} />);
    expect(screen.getByText(/A 5 no le puedes quitar 6: cambia 1 decena por 10 unidades/)).toBeInTheDocument();
    key(2);
    expect(box('topTens')).toHaveTextContent('2');
    expect(within(screen.getByRole('group', { name: 'Operación en torre' })).getByText('3')).toHaveStyle('text-decoration: line-through 3px var(--s-accent)');
    key(1);
    expect(box('topUnits')).toHaveTextContent('1');
    key(5);
    expect(box('topUnits')).toHaveTextContent('15');
    expect(screen.getByText('Resta las unidades: 15 - 6.')).toBeInTheDocument();
    key(9);
    expect(screen.getByText('Resta las decenas: 2 - 0.')).toBeInTheDocument();
    key(2);
    expect(screen.getByText('✓ 35 - 6 = 29')).toBeInTheDocument();
  });

  it('swaps 1 hundred for 10 tens too, after the units', () => {
    inSpanish(<TowerGame exercise={{ questions: [{ op: '-', a: 245, b: 172 }] }} />);
    key(3);
    expect(screen.getByText(/A 4 decenas no le puedes quitar 7: cambia 1 centena por 10 decenas/)).toBeInTheDocument();
    key(1);
    key(1);
    key(4);
    expect(box('topTens')).toHaveTextContent('14');
    key(7);
    expect(screen.getByText('Resta las centenas: 1 - 1.')).toBeInTheDocument();
    key(0);
    expect(screen.getByText('✓ 245 - 172 = 73')).toBeInTheDocument();
  });

  it('only has two-digit sums under 100 and subtractions that do not borrow', () => {
    columnSums.questions.forEach(({ a, b }) => expect(a + b).toBeLessThan(100));
    columnSubtractions.questions.forEach(({ a, b }) => {
      expect(a % 10).toBeGreaterThanOrEqual(b % 10);
      expect(a).toBeGreaterThanOrEqual(b);
    });
  });
});
