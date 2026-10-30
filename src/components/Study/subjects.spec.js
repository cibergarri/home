import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import { Exercise, CardList } from '@/components/Study';
import JuliaPage from '@/app/julia/page';
import SubjectPage from '@/app/julia/[subject]/page';
import UnitPage from '@/app/julia/[subject]/[unit]/page';
import { generateStaticParams } from '@/app/julia/[subject]/[unit]/[exercise]/page';

const params = value => Promise.resolve(value);
const hrefs = () => screen.getAllByRole('link').map(link => link.getAttribute('href'));

describe("Julia's study pages", () => {
  it('lists the subjects', () => {
    renderWithProviders(<JuliaPage />);
    expect(screen.getByText('Social Science')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Mates')).toBeInTheDocument();
    expect(hrefs()).toEqual(['/julia/social-science', '/julia/mates', '/julia/english']);
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
      ...['numeros-de-dos-cifras', 'comparar', 'aproximar', 'sumar', 'restar', 'problemas', 'tabla-cien', 'tablas', 'repaso']
        .map(exercise => ({ subject: 'mates', unit: 'tema-1', exercise })),
      ...['centena', 'hasta-199', 'sumar', 'restar', 'dieces', 'euros', 'barras', 'tabla-100-199', 'mensaje-secreto', 'repaso']
        .map(exercise => ({ subject: 'mates', unit: 'tema-2', exercise })),
      { subject: 'english', unit: 'unit-1', exercise: 'days-of-the-week' },
      { subject: 'english', unit: 'unit-1', exercise: 'places-at-school' },
      { subject: 'english', unit: 'unit-1', exercise: 'wheres' },
      { subject: 'english', unit: 'unit-1', exercise: 'positions' },
      { subject: 'english', unit: 'unit-1', exercise: 'rules-and-games' },
      { subject: 'english', unit: 'unit-1', exercise: 'story-phrases' },
      { subject: 'english', unit: 'unit-1', exercise: 'numbers' },
      { subject: 'english', unit: 'unit-1', exercise: 'review' },
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
    expect(screen.getByText('Tema 1')).toBeInTheDocument();
    expect(screen.getByText('9 ejercicios')).toBeInTheDocument();
    renderWithProviders(await UnitPage({ params: params({ subject: 'mates', unit: 'tema-1' }) }));
    expect(screen.getAllByText('3 partes')).not.toHaveLength(0);
  });
});
