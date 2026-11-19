import { fireEvent, screen, within } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import { findSubject } from '../subjects';
import { GLOSSARY, meaningOf } from '../exercises/glossary';
import Explain, { ExplainContext } from '.';
import { Exercise } from '..';

const explaining = ui => renderWithProviders(<ExplainContext.Provider value>{ui}</ExplainContext.Provider>);

describe('Explain', () => {
  const speak = jest.fn();

  beforeAll(() => {
    window.speechSynthesis = { speak, cancel: jest.fn(), getVoices: () => [] };
    window.SpeechSynthesisUtterance = function Utterance(text) { this.text = text; };
  });

  it('has a meaning for every word of every Social Science exercise', () => {
    findSubject('social-science').units.flatMap(unit => unit.exercises)
      .flatMap(exercise => [exercise, ...(exercise.more ?? [])])
      .flatMap(part => part.items ?? part.words ?? [])
      .forEach(({ word }) => expect([word, meaningOf(word)]).toEqual([word, expect.objectContaining({ es: expect.any(String) })]));
  });

  it('has a photo or a drawing for each word it explains, apart from the directions and the parts', () => {
    const fs = jest.requireActual('fs');
    const path = jest.requireActual('path');
    Object.entries(GLOSSARY).filter(([, { photo }]) => photo).forEach(([word, { photo }]) => {
      expect([word, fs.existsSync(path.join(process.cwd(), 'public', photo.src))]).toEqual([word, true]);
      expect(photo.credit).toMatch(/, (CC|FAL)/);
    });
    expect(Object.keys(GLOSSARY).filter(word => !GLOSSARY[word].photo && !GLOSSARY[word].drawing)).toEqual(
      [
        'parts of a mountain', 'parts of a river',
        'cardinal points', 'north', 'south', 'east', 'west',
      ],
    );
  });

  it('has a drawing for every card of the rules for living together', () => {
    const rules = findSubject('social-science').units[1].exercises.find(({ slug }) => slug === 'living-together');
    rules.cards.forEach(({ text }) => expect([text, typeof meaningOf(text)?.drawing]).toEqual([text, 'function']));
  });

  it('has a flag on every answer of Choose the rule, the good ones and the bad ones', () => {
    renderWithProviders(<Exercise subject="social-science" unit="unit-2" exercise="living-together" />);
    const quiz = screen.getByRole('heading', { name: 'Choose the rule' }).parentElement;
    const answers = within(quiz).getByRole('list', { name: /answers|respuestas/i });
    const flags = within(answers).getAllByRole('button', { name: /^¿Qué significa/ });
    expect(flags).toHaveLength(2);
    fireEvent.click(flags[0]);
    expect(within(screen.getByRole('dialog')).getByText(/basura|asiento|paredes|perro/)).toBeInTheDocument();
    const rules = findSubject('social-science').units[1].exercises.find(({ slug }) => slug === 'living-together').more[0];
    rules.questions.flatMap(({ choices }) => choices).forEach(choice => expect(rules.translations).toHaveProperty([choice]));
  });

  it('shows the drawing in the bubble when the word has one', () => {
    explaining(<Explain word="Clean up after your dog" />);
    fireEvent.click(screen.getByRole('button', { name: '¿Qué significa Clean up after your dog?' }));
    const bubble = screen.getByRole('dialog', { name: 'Clean up after your dog' });
    expect(within(bubble).getByRole('img', { name: 'recoger lo que ensucia tu perro' }).tagName).toBe('svg');
    expect(within(bubble).queryByText(/^Foto: /)).not.toBeInTheDocument();
  });

  it('looks words up in the plural, in brackets or with an article', () => {
    expect(meaningOf('Physical features (natural)').es).toBe('elemento natural');
    expect(meaningOf('Mountain landscapes').es).toBe('paisaje de montaña');
    expect(meaningOf('A river').es).toBe('río');
    expect(meaningOf('Councillors').es).toBe('concejal o concejala');
    expect(meaningOf('Libraries').es).toBe('biblioteca');
    expect(meaningOf('Which course is it?')).toBeUndefined();
  });

  it('opens a bubble beside the word, to read or hear, and closes it', () => {
    explaining(<p><span>outside</span><Explain word="Mountain" /></p>);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '¿Qué significa Mountain?' }));
    const bubble = screen.getByRole('dialog', { name: 'Mountain' });
    expect(within(bubble).getByText('montaña')).toBeInTheDocument();
    expect(within(bubble).getByText('Tierra muy alta, con los lados empinados.')).toBeInTheDocument();
    expect(within(bubble).getByRole('img', { name: 'montaña' })).toHaveAttribute('src', '/study-corner/photos/mountain.jpg');
    expect(within(bubble).getByText(/^Foto: /)).toBeInTheDocument();
    fireEvent.click(within(bubble).getByRole('button', { name: 'Escuchar' }));
    expect(speak).toHaveBeenCalledWith(expect.objectContaining({ text: 'montaña. Tierra muy alta, con los lados empinados.', lang: 'es-ES' }));
    fireEvent.pointerDown(screen.getByText('outside'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '¿Qué significa Mountain?' }));
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('shows nothing for words it does not know, or in subjects that do not explain', () => {
    explaining(<Explain word="Which course is it?" />);
    renderWithProviders(<Explain word="Mountain" />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
