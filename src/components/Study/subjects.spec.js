import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import { Exercise } from '@/components/Study';
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
    expect(hrefs()).toEqual(['/julia/social-science', '/julia/english']);
  });

  it('says so when a subject has no units yet', async () => {
    renderWithProviders(await SubjectPage({ params: params({ subject: 'english' }) }));
    expect(screen.getByRole('heading', { name: 'English' })).toBeInTheDocument();
    expect(screen.getByText(/No units here yet/)).toBeInTheDocument();
    expect(screen.queryAllByRole('link').map(link => link.getAttribute('href'))).toEqual(['/julia']);
  });

  it('lists the units of a subject', async () => {
    renderWithProviders(await SubjectPage({ params: params({ subject: 'social-science' }) }));
    expect(screen.getByRole('heading', { name: 'Social Science' })).toBeInTheDocument();
    expect(screen.getByText('Unit 1')).toBeInTheDocument();
    expect(screen.getByText('5 exercises')).toBeInTheDocument();
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
    ]);
  });

  it('generates a page for every exercise', () => {
    expect(generateStaticParams()).toEqual([
      { subject: 'social-science', unit: 'unit-1', exercise: 'landscape' },
      { subject: 'social-science', unit: 'unit-1', exercise: 'coastal-landscape' },
      { subject: 'social-science', unit: 'unit-1', exercise: 'mountain-landscapes' },
      { subject: 'social-science', unit: 'unit-1', exercise: 'flat-landscape' },
      { subject: 'social-science', unit: 'unit-1', exercise: 'rivers' },
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
    expect(screen.getByText('11 words')).toBeInTheDocument();
  });
});
