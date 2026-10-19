import { act, render, screen } from '@testing-library/react';

import useReveal from './use-reveal';

function Box() {
  const ref = useReveal();
  return <div ref={ref} data-testid="box" />;
}

describe('useReveal', () => {
  let observers;
  let top;

  beforeEach(() => {
    observers = [];
    window.IntersectionObserver = jest.fn(callback => {
      const observer = { callback, observe: jest.fn(), disconnect: jest.fn() };
      observers.push(observer);
      return observer;
    });
    jest.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(() => ({ top }));
  });

  afterEach(() => {
    delete window.IntersectionObserver;
    jest.restoreAllMocks();
  });

  it('hides an element below the fold until it scrolls into view', () => {
    top = window.innerHeight + 200;
    render(<Box />);
    const box = screen.getByTestId('box');
    expect(box).toHaveAttribute('data-reveal', 'waiting');

    act(() => observers[0].callback([{ isIntersecting: true }]));
    expect(box).toHaveAttribute('data-reveal', 'shown');
    expect(observers[0].disconnect).toHaveBeenCalled();
  });

  it('leaves alone what is already on screen when the page loads', () => {
    top = 100;
    render(<Box />);
    expect(screen.getByTestId('box')).not.toHaveAttribute('data-reveal');
  });

  it('does nothing where IntersectionObserver is missing', () => {
    delete window.IntersectionObserver;
    top = window.innerHeight + 200;
    render(<Box />);
    expect(screen.getByTestId('box')).not.toHaveAttribute('data-reveal');
  });
});
