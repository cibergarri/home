import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
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
    expect(hrefs()).toContain('/julia/social-science');
  });

  it('lists the units of a subject', async () => {
    renderWithProviders(await SubjectPage({ params: params({ subject: 'social-science' }) }));
    expect(screen.getByRole('heading', { name: 'Social Science' })).toBeInTheDocument();
    expect(screen.getByText('Unit 1')).toBeInTheDocument();
    expect(screen.getByText('1 exercise')).toBeInTheDocument();
    expect(hrefs()).toContain('/julia/social-science/unit-1');
  });

  it('lists the exercises of a unit, with a way back to the subject', async () => {
    renderWithProviders(await UnitPage({ params: params({ subject: 'social-science', unit: 'unit-1' }) }));
    expect(screen.getByRole('heading', { name: 'Unit 1' })).toBeInTheDocument();
    expect(screen.getByText('Coastal landscape')).toBeInTheDocument();
    expect(hrefs()).toEqual(expect.arrayContaining([
      '/julia/social-science',
      '/julia/social-science/unit-1/coastal-landscape',
    ]));
  });

  it('generates a page for every exercise', () => {
    expect(generateStaticParams()).toEqual([
      { subject: 'social-science', unit: 'unit-1', exercise: 'coastal-landscape' },
    ]);
  });
});
