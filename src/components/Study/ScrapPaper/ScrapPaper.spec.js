import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import { LanguageContext } from '../language';
import ScrapPaper from '.';

const inSpanish = ui => renderWithProviders(<LanguageContext.Provider value="es">{ui}</LanguageContext.Provider>);
const button = name => screen.getByRole('button', { name });
const paper = () => document.querySelector('canvas');

const draw = (pointerId, pointerType = 'touch') => {
  fireEvent.pointerDown(paper(), {
    pointerId, pointerType, clientX: 10, clientY: 10,
  });
  fireEvent.pointerMove(paper(), {
    pointerId, pointerType, clientX: 40, clientY: 30,
  });
  fireEvent.pointerUp(paper(), { pointerId, pointerType });
};

describe('ScrapPaper', () => {
  beforeAll(() => {
    // jsdom has no pointer events nor a canvas to draw on: stand-ins that carry what is used.
    window.PointerEvent ??= class PointerEvent extends MouseEvent {
      constructor(type, init = {}) {
        super(type, init);
        this.pointerId = init.pointerId;
        this.pointerType = init.pointerType;
      }
    };
    HTMLCanvasElement.prototype.getContext = () => ({
      setTransform: jest.fn(),
      beginPath: jest.fn(),
      moveTo: jest.fn(),
      lineTo: jest.fn(),
      stroke: jest.fn(),
    });
  });

  it('opens beside the exercise and closes again', () => {
    inSpanish(<ScrapPaper><p>45 + 20</p></ScrapPaper>);
    expect(screen.getByText('45 + 20')).toBeInTheDocument();
    expect(screen.queryByRole('region', { name: 'Borrador' })).not.toBeInTheDocument();
    fireEvent.click(button('Borrador'));
    expect(screen.getByRole('region', { name: 'Borrador' })).toBeInTheDocument();
    fireEvent.click(button('Cerrar'));
    expect(screen.queryByRole('region', { name: 'Borrador' })).not.toBeInTheDocument();
  });

  it('keeps what is drawn while closed, and undoes and clears it', () => {
    inSpanish(<ScrapPaper><p>45 + 20</p></ScrapPaper>);
    fireEvent.click(button('Borrador'));
    expect(button('Deshacer')).toBeDisabled();
    draw(1);
    draw(2);
    expect(paper()).toHaveAttribute('data-strokes', '2');
    fireEvent.click(button('Cerrar'));
    fireEvent.click(button('Borrador'));
    expect(paper()).toHaveAttribute('data-strokes', '2');
    fireEvent.click(button('Deshacer'));
    expect(paper()).toHaveAttribute('data-strokes', '1');
    fireEvent.click(button('Borrar todo'));
    expect(paper()).toHaveAttribute('data-strokes', '0');
    expect(button('Borrar todo')).toBeDisabled();
  });

  it('picks a colour or the eraser', () => {
    inSpanish(<ScrapPaper><p>45 + 20</p></ScrapPaper>);
    fireEvent.click(button('Borrador'));
    expect(button('Lápiz negro')).toHaveAttribute('aria-pressed', 'true');
    fireEvent.click(button('Goma'));
    expect(button('Goma')).toHaveAttribute('aria-pressed', 'true');
    expect(button('Lápiz negro')).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(button('Lápiz rojo'));
    expect(button('Lápiz rojo')).toHaveAttribute('aria-pressed', 'true');
  });

  it('ignores a hand resting on the screen once a pencil has been used', () => {
    inSpanish(<ScrapPaper><p>45 + 20</p></ScrapPaper>);
    fireEvent.click(button('Borrador'));
    draw(1, 'pen');
    draw(2, 'touch');
    expect(paper()).toHaveAttribute('data-strokes', '1');
  });
});
