import { act, fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import coastalLandscape from '../exercises/coastal-landscape';
import LabelMap from '.';

const words = coastalLandscape.items.map(item => item.word);
const word = name => screen.getByRole('button', { name, pressed: false });
const box = id => screen.getByTestId(`box-${id}`);

// jsdom lays nothing out, so each box is given a rectangle of its own, one under the other.
const layOutBoxes = () => {
  coastalLandscape.items.forEach(({ id }, index) => {
    box(id).getBoundingClientRect = () => ({
      left: 0, right: 100, top: index * 100, bottom: index * 100 + 50, width: 100, height: 50,
    });
  });
};
const centreOf = id => coastalLandscape.items.findIndex(item => item.id === id) * 100 + 25;

const dragTo = (name, id) => {
  const handle = word(name);
  fireEvent.pointerDown(handle, { pointerId: 1, button: 0, clientX: 500, clientY: 500 });
  fireEvent.pointerMove(handle, { pointerId: 1, clientX: 300, clientY: 300 });
  fireEvent.pointerMove(handle, { pointerId: 1, clientX: 50, clientY: centreOf(id) });
  fireEvent.pointerUp(handle, { pointerId: 1, clientX: 50, clientY: centreOf(id) });
};

describe('LabelMap', () => {
  const speak = jest.fn();

  beforeAll(() => {
    // jsdom has no pointer events: a mouse event that also carries the pointer's id will do.
    window.PointerEvent ??= class PointerEvent extends MouseEvent {
      constructor(type, init = {}) {
        super(type, init);
        this.pointerId = init.pointerId;
      }
    };
    window.speechSynthesis = { speak, cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
  });

  beforeEach(() => speak.mockClear());

  it('puts every word in the tray and an empty box for each on the picture', () => {
    renderWithProviders(<LabelMap exercise={coastalLandscape} />);
    words.forEach(name => expect(word(name)).toBeInTheDocument());
    expect(screen.getAllByRole('button', { name: /^Box \d$/ })).toHaveLength(words.length);
    expect(screen.getByText(`0 of ${words.length} done`)).toBeInTheDocument();
  });

  it('reads a word aloud in British English from its speaker', () => {
    renderWithProviders(<LabelMap exercise={coastalLandscape} />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Archipelago' }));
    expect(speak).toHaveBeenCalledWith(expect.objectContaining({ text: 'Archipelago', lang: 'en-GB' }));
  });

  it('keeps a word dropped on its box there and tells what it means', () => {
    renderWithProviders(<LabelMap exercise={coastalLandscape} />);
    layOutBoxes();
    dragTo('Cape', 'cape');
    expect(box('cape')).toHaveTextContent('Cape');
    expect(screen.queryByRole('button', { name: 'Cape' })).not.toBeInTheDocument();
    expect(screen.getByText(/pointed piece of land/)).toBeInTheDocument();
    expect(screen.getByText(`1 of ${words.length} done`)).toBeInTheDocument();
  });

  it('sends a word dropped on the wrong box back to the tray', () => {
    renderWithProviders(<LabelMap exercise={coastalLandscape} />);
    layOutBoxes();
    dragTo('Bay', 'gulf');
    expect(word('Bay')).toBeInTheDocument();
    expect(box('gulf')).toHaveTextContent('?');
    expect(screen.getByText('Not quite. Try another box!')).toBeInTheDocument();
  });

  it('also works by tapping a word, then its box', () => {
    renderWithProviders(<LabelMap exercise={coastalLandscape} />);
    fireEvent.click(box('island'));
    expect(screen.getByText('First pick a word, then tap its box.')).toBeInTheDocument();
    fireEvent.click(word('Island'));
    expect(screen.getByRole('button', { name: 'Island', pressed: true })).toBeInTheDocument();
    fireEvent.click(box('island'));
    expect(box('island')).toHaveTextContent('Island');
  });

  it('celebrates when every word is in place, with fewer stars for mistakes, and starts again', () => {
    renderWithProviders(<LabelMap exercise={coastalLandscape} />);
    fireEvent.click(word('Gulf'));
    fireEvent.click(box('bay'));
    coastalLandscape.items.forEach(({ id, word: name }) => {
      fireEvent.click(word(name));
      fireEvent.click(box(id));
    });
    expect(screen.getByText('Well done, Julia!')).toBeInTheDocument();
    expect(screen.getByLabelText('2 out of 3 stars')).toBeInTheDocument();
    act(() => fireEvent.click(screen.getByRole('button', { name: 'Play again' })));
    words.forEach(name => expect(word(name)).toBeInTheDocument());
  });
});
