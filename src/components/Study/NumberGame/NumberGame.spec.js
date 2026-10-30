import { act, fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import { LanguageContext } from '../language';
import sumar from '../exercises/mates/sumar';
import restar from '../exercises/mates/restar';
import problemas from '../exercises/mates/problemas';
import repaso from '../exercises/mates/repaso';
import { readNumber } from '../handwriting';
import NumberGame from '.';

jest.mock('../handwriting', () => ({
  loadNet: () => Promise.resolve('net'),
  readNumber: jest.fn(),
}));

// Sumar is answered by hand: the keys for most of these tests.
const typedSumar = { ...sumar, write: false };

const inSpanish = ui => renderWithProviders(<LanguageContext.Provider value="es">{ui}</LanguageContext.Provider>);
const type = digits => [...digits].forEach(digit => fireEvent.click(screen.getByRole('button', { name: digit })));
const check = () => fireEvent.click(screen.getByRole('button', { name: 'Comprobar' }));

describe('NumberGame', () => {
  beforeAll(() => {
    window.speechSynthesis = { speak: jest.fn(), cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
  });

  it('shows the sum with a box for the answer, in Spanish', () => {
    inSpanish(<NumberGame exercise={typedSumar} />);
    expect(screen.getByText('14 + 30 =')).toBeInTheDocument();
    expect(screen.getByLabelText('Tu respuesta')).toHaveTextContent('?');
    expect(screen.getByText('Pregunta 1 de 10')).toBeInTheDocument();
  });

  it('clears a wrong answer for another try, and leads on after the right one', () => {
    jest.useFakeTimers();
    inSpanish(<NumberGame exercise={typedSumar} />);
    type('43');
    check();
    expect(screen.getByText('¡Casi! Inténtalo otra vez.')).toBeInTheDocument();
    act(() => jest.runAllTimers());
    expect(screen.getByLabelText('Tu respuesta')).toHaveTextContent('?');
    type('44');
    check();
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente →' }));
    expect(screen.getByText('20 + 50 =')).toBeInTheDocument();
    jest.useRealTimers();
  });

  it('asks for a number before checking, and can rub one out', () => {
    inSpanish(<NumberGame exercise={typedSumar} />);
    check();
    expect(screen.getByText('Escribe primero un número.')).toBeInTheDocument();
    type('45');
    fireEvent.click(screen.getByRole('button', { name: 'Borrar' }));
    expect(screen.getByLabelText('Tu respuesta')).toHaveTextContent('4');
  });

  it('celebrates in Spanish after the last question', () => {
    inSpanish(<NumberGame exercise={problemas} />);
    problemas.questions.forEach(({ answer }, index) => {
      type(String(answer));
      check();
      fireEvent.click(screen.getByRole('button', { name: index + 1 < problemas.questions.length ? 'Siguiente →' : 'Terminar ✓' }));
    });
    expect(screen.getByText('¡Muy bien, Julia!')).toBeInTheDocument();
    expect(screen.getByLabelText('3 de 3 estrellas')).toBeInTheDocument();
  });

  it('moves between questions with the arrows, in Spanish', () => {
    inSpanish(<NumberGame exercise={typedSumar} />);
    type('9');
    fireEvent.click(screen.getByRole('button', { name: 'Pregunta siguiente' }));
    expect(screen.getByText('20 + 50 =')).toBeInTheDocument();
    expect(screen.getByLabelText('Tu respuesta')).toHaveTextContent('?');
    fireEvent.click(screen.getByRole('button', { name: 'Pregunta anterior' }));
    expect(screen.getByText('14 + 30 =')).toBeInTheDocument();
  });

  it('has the right answer for every sum written out in Mates', () => {
    const parts = [sumar, restar, repaso].flatMap(exercise => [exercise, ...(exercise.more ?? [])])
      .filter(part => part.type === 'numbers');
    parts.flatMap(part => part.questions)
      .filter(({ prompt }) => /^[\d?]+ [+-] [\d?]+ = [\d?]+$/.test(prompt))
      .forEach(({ prompt, answer }) => {
        const [a, sign, b, , c] = prompt.replace('?', String(answer)).split(' ');
        const result = sign === '+' ? Number(a) + Number(b) : Number(a) - Number(b);
        expect(result).toBe(Number(c));
      });
  });

  describe('written by hand', () => {
    beforeAll(() => {
      window.PointerEvent ??= class PointerEvent extends MouseEvent {
        constructor(type, init = {}) {
          super(type, init);
          this.pointerId = init.pointerId;
        }
      };
      HTMLCanvasElement.prototype.getContext = () => ({
        setTransform: jest.fn(), beginPath: jest.fn(), moveTo: jest.fn(), lineTo: jest.fn(), stroke: jest.fn(),
      });
    });

    const scribble = () => {
      const pad = screen.getByRole('img', { name: 'Escribe aquí el número' });
      fireEvent.pointerDown(pad, { pointerId: 1, clientX: 10, clientY: 10 });
      fireEvent.pointerMove(pad, { pointerId: 1, clientX: 20, clientY: 60 });
      fireEvent.pointerUp(pad, { pointerId: 1 });
    };

    it('reads what is written, says what it read when it is wrong, and takes the right answer', async () => {
      jest.useFakeTimers();
      inSpanish(<NumberGame exercise={sumar} />);
      expect(screen.queryByRole('group', { name: 'Teclado de números' })).not.toBeInTheDocument();
      check();
      expect(screen.getByText('Escribe primero un número.')).toBeInTheDocument();

      readNumber.mockReturnValueOnce({ text: '47' });
      scribble();
      await act(async () => check());
      expect(screen.getByText('He leído 47. ¡Casi! Inténtalo otra vez.')).toBeInTheDocument();
      act(() => jest.runAllTimers());

      readNumber.mockReturnValueOnce({ text: '44' });
      scribble();
      await act(async () => check());
      expect(screen.getByRole('button', { name: 'Siguiente →' })).toBeInTheDocument();
      jest.useRealTimers();
    });

    it('can swap to the number keys and back', () => {
      inSpanish(<NumberGame exercise={sumar} />);
      fireEvent.click(screen.getByRole('button', { name: '🔢 Usar el teclado' }));
      expect(screen.getByRole('group', { name: 'Teclado de números' })).toBeInTheDocument();
      fireEvent.click(screen.getByRole('button', { name: '✍️ Escribir a mano' }));
      expect(screen.getByRole('img', { name: 'Escribe aquí el número' })).toBeInTheDocument();
    });
  });
});
