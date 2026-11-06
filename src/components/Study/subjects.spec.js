import { cleanup, screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import { Exercise, CardList } from '@/components/Study';
import JuliaPage from '@/app/julia/page';
import SubjectPage from '@/app/julia/[subject]/page';
import UnitPage from '@/app/julia/[subject]/[unit]/page';
import { generateStaticParams } from '@/app/julia/[subject]/[unit]/[exercise]/page';
import { findSubject, findUnit } from './subjects';
import { HIDDEN_UNITS } from './hidden';

const params = value => Promise.resolve(value);
const hrefs = () => screen.getAllByRole('link').map(link => link.getAttribute('href'));

describe("Julia's study pages", () => {
  it('lists the subjects', () => {
    renderWithProviders(<JuliaPage />);
    expect(screen.getByText('Social Science')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Mates')).toBeInTheDocument();
    expect(hrefs()).toEqual(['/julia/social-science', '/julia/mates', '/julia/lengua', '/julia/naturales', '/julia/english']);
  });

  it('says so when there is nothing to list yet', () => {
    renderWithProviders(<CardList cards={[]} empty="No units here yet." />);
    expect(screen.getByText('No units here yet.')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('lists the exercises of English unit 1', async () => {
    renderWithProviders(await UnitPage({ params: params({ subject: 'english', unit: 'unit-1' }) }));
    expect(hrefs()).toEqual([
      '/julia/english',
      ...['days-of-the-week', 'places-at-school', 'wheres', 'positions', 'rules-and-games', 'story-phrases', 'numbers', 'review']
        .map(slug => `/julia/english/unit-1/${slug}`),
    ]);
  });

  it('lists the units of a subject', async () => {
    renderWithProviders(await SubjectPage({ params: params({ subject: 'social-science' }) }));
    expect(screen.getByRole('heading', { name: 'Social Science' })).toBeInTheDocument();
    expect(screen.getByText('Unit 1')).toBeInTheDocument();
    expect(screen.getByText('7 exercises')).toBeInTheDocument();
    expect(hrefs()).toContain('/julia/social-science/unit-1');
  });

  it('lists the exercises of a unit, with a way back to the subject', async () => {
    renderWithProviders(await UnitPage({ params: params({ subject: 'social-science', unit: 'unit-1' }) }));
    expect(screen.getByRole('heading', { name: 'Unit 1' })).toBeInTheDocument();
    expect(hrefs()).toEqual([
      '/julia/social-science',
      '/julia/social-science/unit-1/landscape',
      '/julia/social-science/unit-1/coastal-landscape',
      '/julia/social-science/unit-1/mountain-landscapes',
      '/julia/social-science/unit-1/flat-landscape',
      '/julia/social-science/unit-1/rivers',
      '/julia/social-science/unit-1/find-directions',
      '/julia/social-science/unit-1/physical-and-human-features',
    ]);
  });

  it('generates a page for every exercise', () => {
    expect(generateStaticParams()).toEqual([
      { subject: 'social-science', unit: 'unit-1', exercise: 'landscape' },
      { subject: 'social-science', unit: 'unit-1', exercise: 'coastal-landscape' },
      { subject: 'social-science', unit: 'unit-1', exercise: 'mountain-landscapes' },
      { subject: 'social-science', unit: 'unit-1', exercise: 'flat-landscape' },
      { subject: 'social-science', unit: 'unit-1', exercise: 'rivers' },
      { subject: 'social-science', unit: 'unit-1', exercise: 'find-directions' },
      { subject: 'social-science', unit: 'unit-1', exercise: 'physical-and-human-features' },
      ...[
        ['bienvenida', ['empezamos', 'numeros', 'repaso']],
        ['tema-1', ['numeros-de-dos-cifras', 'comparar', 'aproximar', 'sumar', 'restar', 'problemas', 'tabla-cien', 'tablas', 'con-las-manos', 'repaso']],
        ['tema-2', ['centena', 'hasta-199', 'tres-cifras', 'sumar', 'restar', 'dieces', 'euros', 'barras', 'tabla-100-199', 'mensaje-secreto', 'con-las-manos', 'repaso']],
        ['tema-3', ['hasta-999', 'sumar', 'restar', 'restar-decenas', 'medir', 'lineas-poligonos', 'problemas', 'desafio', 'con-las-manos', 'repaso']],
        ['tema-4', ['recta', 'prueba-resta', 'desagrupar', 'recta-calculo', 'calendario', 'reloj', 'barras', 'desafio', 'con-las-manos', 'repaso']],
        ['tema-5', ['anterior-posterior', 'ordinales', 'sumar-reagrupando', 'restar-desagrupando', 'sumar-restar-9', 'litros', 'kilos', 'tablas-de-datos', 'problemas-de-litros', 'con-las-manos', 'repaso']],
        ['tema-6', ['aproximar', 'conmutativa', 'restar-desagrupando', 'restar-saltando', 'reloj-digital', 'circulo', 'graficos-de-barras', 'problemas-dos-pasos', 'con-las-manos', 'repaso']],
        ['tema-7', ['aproximar', 'asociativa', 'restar', 'restar-saltando', 'centimos', 'cuerpos', 'seguro-posible', 'barras-dinero', 'con-las-manos', 'repaso']],
        ['tema-8', ['pares-impares', 'sumandos-repetidos', 'multiplicacion', 'doble-mitad', 'longitud', 'izquierda-derecha', 'planos', 'problemas', 'con-las-manos', 'repaso']],
        ['tema-9', ['tres-cifras', 'sumar-restar', 'tabla-2', 'tablas-5-10', 'minutos-segundos', 'simetria', 'graficos', 'problemas-cambio', 'con-las-manos', 'repaso']],
      ].flatMap(([unit, exercises]) => exercises.map(exercise => ({ subject: 'mates', unit, exercise }))),
      ...[
        ['bienvenida', ['teo-regresa', 'empezamos']],
        ['tema-1', ['trolls', 'genero-numero', 'mayusculas', 'abecedario', 'receta', 'pareados', 'juegos']],
        ['tema-2', ['ciervo', 'adjetivos', 'silabas', 'sinonimos', 'nutrias', 'cancion']],
        ['tema-3', ['frutillas', 'demostrativos', 'ca-que', 'diminutivos', 'cartel', 'poesia', 'repaso']],
        ['tema-4', ['reloj', 'pronombres', 'za-ce', 'polisemicas', 'noticia', 'mitos', 'juegos', 'repaso']],
        ['tema-5', ['pantanos', 'verbos', 'gue-gui', 'familias', 'entrevista', 'teatro', 'aire', 'repaso']],
        ['tema-6', ['rueda-rocas', 'sujeto', 'ge-gi-je-ji', 'campos', 'tiempo', 'trabalenguas', 'resumen', 'repaso']],
        ['tema-7', ['niebla', 'oraciones', 'mp-mb-nv', 'frases-hechas', 'instrucciones', 'comic', 'esquema', 'repaso']],
        ['tema-8', ['festival', 'lenguas', 'r-fuerte', 'derivadas', 'dialogo', 'monstruo', 'bruja-mon', 'repaso']],
        ['tema-9', ['hechizo', 'oral-escrita', 'bl-br', 'compuestas', 'patines', 'adivinanzas', 'juegos', 'repaso']],
      ].flatMap(([unit, exercises]) => exercises.map(exercise => ({ subject: 'lengua', unit, exercise }))),
      { subject: 'naturales', unit: 'tema-1', exercise: 'etapas' },
      { subject: 'naturales', unit: 'tema-1', exercise: 'funciones' },
      { subject: 'naturales', unit: 'tema-1', exercise: 'movemos' },
      { subject: 'naturales', unit: 'tema-1', exercise: 'respirar' },
      { subject: 'naturales', unit: 'tema-1', exercise: 'alimentamos' },
      { subject: 'naturales', unit: 'tema-1', exercise: 'repaso' },
      ...[
        ['welcome', ['family', 'greetings', 'whos-that', 'story', 'review']],
        ['unit-1', ['days-of-the-week', 'places-at-school', 'wheres', 'positions', 'rules-and-games', 'story-phrases', 'numbers', 'review']],
        ['unit-2', ['rooms', 'theres-there-are', 'story', 'where-do-you-live', 'furniture', 'materials', 'review']],
        ['unit-3', ['clothes', 'what-are-you-wearing', 'the-scarecrow', 'put-on-your-sweater', 'new-and-old', 'seasons', 'school-uniforms', 'review']],
        ['unit-4', ['hair', 'hes-got', 'a-new-star', 'im-brave', 'has-she-got', 'portraits', 'dressing-up', 'review']],
        ['unit-5', ['camp-activities', 'i-want-to', 'fun-at-camp', 'whose-turn', 'do-you-want-to', 'lets-move', 'countryside', 'unit-review']],
        ['unit-6', ['summer-places', 'in-summer', 'a-safari-adventure', 'wheres-the-funfair', 'by-car', 'moving-around', 'summer-activities', 'unit-review', 'review']],
        ['festivals', ['halloween', 'christmas', 'holi']],
      ].flatMap(([unit, exercises]) => exercises.map(exercise => ({ subject: 'english', unit, exercise }))),
    ]);
  });

  it('shows the further pictures of an exercise below the first, and counts all their words', async () => {
    renderWithProviders(<Exercise subject="social-science" unit="unit-1" exercise="mountain-landscapes" />);
    expect(screen.getByRole('heading', { name: 'Parts of a mountain' })).toBeInTheDocument();
    ['Mountain range', 'Peak', 'Slope', 'Foot'].forEach((word) => {
      expect(screen.getByRole('button', { name: word })).toBeInTheDocument();
    });
    expect(screen.getAllByRole('button', { name: 'Valley' })).toHaveLength(2);

    renderWithProviders(await UnitPage({ params: params({ subject: 'social-science', unit: 'unit-1' }) }));
    expect(screen.getByText('10 words')).toBeInTheDocument(); // Valley is in both parts
  });

  it('speaks Spanish on the pages of Mates', async () => {
    renderWithProviders(await SubjectPage({ params: params({ subject: 'mates' }) }));
    expect(screen.getByText('🔢 Asignatura')).toBeInTheDocument();
    expect(screen.getByText('Tema 1. ¡Qué bien estoy!')).toBeInTheDocument();
    expect(screen.getAllByText('10 ejercicios')).not.toHaveLength(0);
    renderWithProviders(await UnitPage({ params: params({ subject: 'mates', unit: 'tema-1' }) }));
    expect(screen.getAllByText('3 partes')).not.toHaveLength(0);
  });

  it('leaves the units in hidden.js out of the list, though their pages are there', async () => {
    Object.entries(HIDDEN_UNITS).forEach(([subject, units]) => {
      units.forEach(unit => expect(`${subject}/${findUnit(findSubject(subject), unit)?.hidden}`).toBe(`${subject}/true`));
    });
    expect(generateStaticParams()).toContainEqual({ subject: 'mates', unit: 'tema-3', exercise: 'sumar' });
    renderWithProviders(await SubjectPage({ params: params({ subject: 'mates' }) }));
    expect(hrefs()).toContain('/julia/mates/tema-2');
    expect(hrefs()).not.toContain('/julia/mates/tema-3');
  });

  it('lists the hidden units too after ?all, and remembers it until ?all=0', async () => {
    window.history.replaceState(null, '', '/julia/mates?all');
    renderWithProviders(await SubjectPage({ params: params({ subject: 'mates' }) }));
    expect(await screen.findByRole('link', { name: /Tema 9/ })).toHaveAttribute('href', '/julia/mates/tema-9');
    cleanup();

    window.history.replaceState(null, '', '/julia/lengua');
    renderWithProviders(await SubjectPage({ params: params({ subject: 'lengua' }) }));
    expect(await screen.findByRole('link', { name: /Tema 9/ })).toBeInTheDocument();
    cleanup();

    window.history.replaceState(null, '', '/julia/lengua?all=0');
    renderWithProviders(await SubjectPage({ params: params({ subject: 'lengua' }) }));
    expect(hrefs()).not.toContain('/julia/lengua/tema-9');
    window.history.replaceState(null, '', '/');
  });
});
