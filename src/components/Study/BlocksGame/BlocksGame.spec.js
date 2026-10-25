import { fireEvent, screen, within } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import { LanguageContext } from '../language';
import sumar from '../exercises/mates/sumar';
import restar from '../exercises/mates/restar';
import problemas from '../exercises/mates/problemas';
import BlocksGame from '.';

const inSpanish = ui => renderWithProviders(<LanguageContext.Provider value="es">{ui}</LanguageContext.Provider>);
const tap = name => fireEvent.click(screen.getByRole('button', { name }));
const times = (n, action) => Array.from({ length: n }).forEach(action);
const drawing = () => within(screen.getByRole('group', { name: 'Tu dibujo' }));
const type = digits => [...digits].forEach(digit => fireEvent.click(
  within(screen.getByRole('group', { name: 'Teclado de números' })).getByRole('button', { name: digit }),
));

describe('BlocksGame', () => {
  beforeAll(() => {
    window.speechSynthesis = { speak: jest.fn(), cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
  });

  it('draws a sum, swaps 10 units for a ten, and then takes the number', () => {
    inSpanish(<BlocksGame exercise={{ questions: [{ op: '+', a: 26, b: 16 }] }} />);
    times(3, () => tap('+ 1 decena'));
    times(12, () => tap('+ 1 unidad'));
    expect(screen.getByText('3 D y 12 U')).toBeInTheDocument();
    tap('Comprobar el dibujo');
    expect(screen.getByText('¡Casi! Tienes 12 unidades: cambia 10 U por 1 D.')).toBeInTheDocument();
    tap('Cambiar 10 U por 1 D');
    expect(screen.getByText('4 D y 2 U')).toBeInTheDocument();
    tap('Comprobar el dibujo');
    expect(screen.getByText('¡Bien dibujado! Ahora escribe el número.')).toBeInTheDocument();
    type('42');
    tap('Comprobar');
    expect(screen.getByRole('button', { name: 'Terminar ✓' })).toBeInTheDocument();
  });

  it('says so when the drawing does not add up, and a block can be rubbed out', () => {
    inSpanish(<BlocksGame exercise={{ questions: [{ op: '+', a: 24, b: 10 }] }} />);
    times(4, () => tap('+ 1 decena'));
    tap('Comprobar el dibujo');
    expect(screen.getByText(/Todavía no: cuenta otra vez/)).toBeInTheDocument();
    fireEvent.click(drawing().getAllByRole('button', { name: 'decena' })[0]);
    expect(screen.getByText('3 D y 0 U')).toBeInTheDocument();
  });

  it('crosses out the second number to subtract, then takes what is left', () => {
    inSpanish(<BlocksGame exercise={{ questions: [{ op: '-', a: 34, b: 12 }] }} />);
    expect(screen.getByText('Tacha 1 D y 2 U: toca los bloques.')).toBeInTheDocument();
    fireEvent.click(drawing().getAllByRole('button', { name: 'decena' })[0]);
    fireEvent.click(drawing().getAllByRole('button', { name: 'unidad' })[0]);
    expect(screen.queryByRole('group', { name: 'Teclado de números' })).not.toBeInTheDocument();
    fireEvent.click(drawing().getAllByRole('button', { name: 'unidad' })[1]);
    expect(screen.getByText(/¡Bien tachado!/)).toBeInTheDocument();
    type('22');
    tap('Comprobar');
    expect(screen.getByRole('button', { name: 'Terminar ✓' })).toBeInTheDocument();
  });

  it('only has subtractions that do not borrow, and stories that match their numbers', () => {
    const parts = [sumar, restar, problemas].flatMap(exercise => exercise.more).filter(part => part.type === 'blocks');
    parts.flatMap(part => part.questions).forEach(({ op, a, b }) => {
      if (op === '-') expect(a % 10).toBeGreaterThanOrEqual(b % 10);
      else expect(a + b).toBeLessThan(100);
    });
    problemas.more.find(part => part.type === 'blocks').questions
      .forEach(({ story, a, b }) => expect(story).toMatch(new RegExp(`\\b${a}\\b[^]*\\b${b}\\b`)));
  });
});
