import {
  act, fireEvent, screen, within,
} from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import { LanguageContext } from '../language';
import sumar from '../exercises/mates/sumar';
import restar from '../exercises/mates/restar';
import problemas from '../exercises/mates/problemas';
import repaso from '../exercises/mates/repaso';
import { readNumber } from '../handwriting';
import { ALL_SUBJECTS } from '../subjects';
import NumberGame, { problemData, columnSumFor } from '.';

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
    problemas.questions.forEach((question, index) => {
      problemData(question).forEach(({ value }) => {
        type(String(value));
        check();
      });
      type(String(question.answer));
      check();
      fireEvent.click(screen.getByRole('button', { name: index + 1 < problemas.questions.length ? 'Siguiente →' : 'Terminar ✓' }));
    });
    expect(screen.getByText('¡Muy bien!')).toBeInTheDocument();
    expect(screen.getByLabelText('3 de 3 estrellas')).toBeInTheDocument();
  });

  it('finds the data of a word problem, and what each number counts', () => {
    expect(problemData({ story: 'Hay 26 raquetas de bádminton y 32 de tenis. ¿Cuántas hay?', prompt: '? raquetas' }))
      .toEqual([
        {
          value: 26, at: 4, end: 6, unit: 'raquetas',
        },
        {
          value: 32, at: 31, end: 33, unit: null,
        },
      ]);
    expect(problemData({ story: 'Tiene 12 € y gasta 5 €. ¿Cuánto le queda?', prompt: '? €' }).map(d => d.unit)).toEqual(['€', '€']);
    expect(problemData({ story: '¿Qué número es el anterior a 345?', prompt: '?' })).toEqual([]);
    expect(problemData({ story: 'Tenía 20 € y le dan 2 €. ¿Cuánto tiene?', prompt: '20 + 2 = ?' })).toEqual([]);
    expect(problemData({ story: 'Cuesta 1,50 € y paga 2 €. ¿Cuánto le devuelven?', prompt: '? céntimos' })).toEqual([]);
    expect(problemData({ story: 'Tiene 3 y le dan 4. ¿Cuántos tiene?', prompt: '?', data: false })).toEqual([]);
    expect(problemData({ story: 'Hay 18 niños y 11 practican yudo. ¿Cuántos no?', prompt: '? niños' }).map(d => d.unit)).toEqual(['niños', null]);
    expect(problemData({ story: 'En 2.º hay 46 alumnos y 32 comen en casa. ¿Cuántos no?', prompt: '?' }).map(d => d.value)).toEqual([46, 32]);
    expect(problemData({ story: 'Hay 305 en la zona 1 y 152 en la zona 2. ¿Cuántos hay?', prompt: '?', data: [305, 152] }).map(d => d.value))
      .toEqual([305, 152]);
    expect(problemData({ story: 'Lena gasta 7 € y Teo 7 €. ¿Cuánto gastan?', prompt: '? €', data: [7, 7] }).map(d => d.at)).toEqual([11, 21]);
  });

  it('asks for the data of a word problem before the answer, in any order', () => {
    jest.useFakeTimers();
    const exercise = {
      instructions: 'Lee y calcula.',
      questions: [{ story: 'Lena tiene 26 cromos y Mica le regala 16. ¿Cuántos cromos tiene ahora?', prompt: '? cromos', answer: 42 }],
    };
    inSpanish(<NumberGame exercise={exercise} />);
    expect(screen.getByText('Primero, los datos: escribe cada número del problema.')).toBeInTheDocument();
    type('42');
    check();
    expect(screen.getByText('El 42 no está en el problema. Léelo otra vez.')).toBeInTheDocument();
    act(() => jest.runAllTimers());
    type('16');
    check();
    expect(screen.getAllByText('16')).toHaveLength(2); // underlined in the story, and written in the data
    type('16');
    check();
    expect(screen.getByText('El 16 ya está escrito. Busca otro número.')).toBeInTheDocument();
    act(() => jest.runAllTimers());
    type('26');
    check();
    expect(screen.getByText('26 cromos')).toBeInTheDocument();
    expect(screen.getByText('Datos:')).toBeInTheDocument();
    expect(screen.getByText('Respuesta:')).toBeInTheDocument();
    type('42');
    check();
    expect(screen.getByRole('button', { name: 'Terminar ✓' })).toBeInTheDocument();
    jest.useRealTimers();
  });

  it('asks for each datum in turn when the problem says what each one means', () => {
    jest.useFakeTimers();
    const exercise = {
      instructions: 'Lee y calcula.',
      questions: [{
        story: 'La tortilla grande necesita 25 huevos y la pequeña 8. ¿Cuántos huevos necesita?',
        data: [[25, 'huevos para la tortilla grande'], [8, 'huevos para la tortilla pequeña']],
        prompt: '? huevos',
        answer: 33,
      }],
    };
    inSpanish(<NumberGame exercise={exercise} />);
    expect(screen.getByText('huevos para la tortilla grande')).toBeInTheDocument();
    expect(screen.getByText('huevos para la tortilla pequeña')).toBeInTheDocument();
    type('8');
    check();
    expect(screen.getByText('El 8 es otro dato. Busca: «huevos para la tortilla grande».')).toBeInTheDocument();
    act(() => jest.runAllTimers());
    type('25');
    check();
    type('8');
    check();
    type('33');
    check();
    expect(screen.getByRole('button', { name: 'Terminar ✓' })).toBeInTheDocument();
    jest.useRealTimers();
  });

  it('says what each datum means in every word problem of Mates, with numbers that are in the story', () => {
    const questions = [];
    const seen = new Set();
    const walk = (node) => {
      if (!node || typeof node !== 'object' || seen.has(node)) return;
      seen.add(node);
      if (node.type === 'numbers' && node.questions) questions.push(...node.questions);
      Object.values(node).forEach(walk);
    };
    walk(ALL_SUBJECTS.find(subject => subject.slug === 'mates'));
    const problems = questions.filter(question => problemData(question).length);
    expect(problems.length).toBeGreaterThan(100);
    problems.forEach((question) => {
      expect([question.story, Array.isArray(question.data)]).toEqual([question.story, true]);
      expect([question.story, problemData(question).length]).toEqual([question.story, question.data.length]);
      question.data.forEach(datum => expect([question.story, typeof datum[1]]).toEqual([question.story, 'string']));
    });
  });

  it('goes on with the next steps of the same problem, keeping the ones done', () => {
    const exercise = {
      instructions: 'Lee y calcula.',
      questions: [{
        story: 'Claudia tiene 14 € y Aitor 25 €. ¿Cuánto tienen?',
        data: [[14, '€ tiene Claudia'], [25, '€ tiene Aitor']],
        prompt: '? €',
        answer: 39,
        then: [
          { story: 'El tren cuesta 32 €. ¿Pueden comprarlo?', choices: ['Sí', 'No'], answer: 'Sí' },
          { story: '¿Qué signo va en el hueco?', compare: [39, 32] },
          {
            story: '¿Cuánto les sobra?', data: [[39, '€ tienen'], [32, '€ cuesta el tren']], prompt: 'Les sobran ? €', answer: 7,
          },
        ],
      }],
    };
    inSpanish(<NumberGame exercise={exercise} />);
    ['14', '25', '39'].forEach((number) => {
      type(number);
      check();
    });
    expect(screen.getByText('✓ 39 €')).toBeInTheDocument();
    expect(screen.getByText('El tren cuesta 32 €. ¿Pueden comprarlo?')).toBeInTheDocument();
    expect(screen.queryByRole('group', { name: 'Teclado de números' })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'No' }));
    fireEvent.click(screen.getByRole('button', { name: 'Sí' }));
    expect(screen.getByText('✓ Sí')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '>' }));
    expect(screen.getByText('✓ 39 > 32')).toBeInTheDocument();
    expect(screen.getByText('€ cuesta el tren')).toBeInTheDocument();
    ['39', '32', '7'].forEach((number) => {
      type(number);
      check();
    });
    fireEvent.click(screen.getByRole('button', { name: 'Terminar ✓' }));
    expect(screen.getByText('1 fallo por el camino.')).toBeInTheDocument();
  });

  it('knows which sum in columns solves a step', () => {
    const data = values => values.map(value => ({ value }));
    expect(columnSumFor({ prompt: '? puntos', answer: 138 }, data([122, 16]))).toEqual({ a: 122, b: 16, op: '+' });
    expect(columnSumFor({ prompt: '? €', answer: 23 }, data([42, 65]))).toEqual({ a: 65, b: 42, op: '-' });
    expect(columnSumFor({ prompt: '45 + 20 = ?', answer: 65 }, [])).toEqual({
      a: 45, b: 20, op: '+', written: true,
    });
    expect(columnSumFor({ prompt: '? €', answer: 9 }, data([4, 5]))).toBeNull();
    expect(columnSumFor({ prompt: '? cromos', answer: 8 }, data([10, 5, 7]))).toBeNull();
    expect(columnSumFor({ prompt: '? €', answer: 177 }, data([305, 128]))).toBeNull();
  });

  it('works out the answer in columns after choosing to add or take away', () => {
    const exercise = {
      instructions: 'Lee y calcula.',
      questions: [{
        story: 'Coco tiene 122 puntos en una prueba y 16 en otra. ¿Cuántos tiene en total?',
        data: [[122, 'puntos en una prueba'], [16, 'puntos en la otra']],
        prompt: '? puntos',
        answer: 138,
      }],
    };
    inSpanish(<NumberGame exercise={exercise} />);
    expect(screen.queryByRole('button', { name: '🧮 Hacer la cuenta en columnas' })).not.toBeInTheDocument();
    ['122', '16'].forEach((number) => {
      type(number);
      check();
    });
    fireEvent.click(screen.getByRole('button', { name: '🧮 Hacer la cuenta en columnas' }));
    fireEvent.click(screen.getByRole('button', { name: '➖ Restar' }));
    expect(screen.getByText('Piensa otra vez qué pide el problema.')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '➕ Sumar' }));
    const tower = screen.getByRole('group', { name: 'Operación en torre' });
    expect(tower).toBeInTheDocument();
    ['8', '3', '1'].forEach(digit => fireEvent.click(within(tower.parentElement).getByRole('button', { name: digit })));
    expect(screen.queryByText(/Suma las unidades/)).not.toBeInTheDocument();
    expect(screen.getByText('138')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Terminar ✓' })).toBeInTheDocument();
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
