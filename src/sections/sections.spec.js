import { act, fireEvent, screen } from '@testing-library/react';

import en from '@/locales/en.json';
import es from '@/locales/es.json';
import { renderWithProviders, i18n } from '@/test-utils';
import Experience from './Experience';
import Projects from './Projects';
import Background from './Background';
import Skills from './Skills';

describe('landing sections', () => {
  beforeEach(() => i18n.changeLanguage('en'));

  it('lists every job from the content file, most recent first', () => {
    renderWithProviders(<Experience />);
    const companies = en.experience.map(job => job.company);
    const rendered = companies.map(name => screen.getByText(name));
    rendered.forEach((node, index) => {
      if (index > 0) {
        expect(rendered[index - 1].compareDocumentPosition(node))
          .toBe(Node.DOCUMENT_POSITION_FOLLOWING);
      }
    });
    en.experience.flatMap(job => [].concat(job.summary))
      .forEach(paragraph => expect(screen.getByText(paragraph)).toBeInTheDocument());
  });

  it('shows the period of each job with where it was on the line below', () => {
    renderWithProviders(<Experience />);
    en.experience.forEach(job => expect(screen.getByText(job.period)).toBeInTheDocument());
    const period = screen.getByText('Oct 2017 – Jun 2019');
    expect(period.nextElementSibling).toHaveTextContent(/^Valladolid$/);
  });

  it('renders every project with its links and skips empty award lists', () => {
    renderWithProviders(<Projects />);
    const hrefs = screen.getAllByRole('link').map(a => a.getAttribute('href'));
    en.projects.forEach(project => {
      expect(screen.getByText(project.name)).toBeInTheDocument();
      project.links.forEach(link => expect(hrefs).toContain(link.href));
    });
    const withAwards = en.projects.filter(p => p.awards.length > 0).length;
    expect(screen.getAllByText(en.awardsLabel)).toHaveLength(withAwards);
  });

  it('renders education, workshops, languages and hobbies', () => {
    renderWithProviders(<Background />);
    expect(screen.getByText('Universidad de Burgos')).toBeInTheDocument();
    expect(screen.getByText('Workshops')).toBeInTheDocument();
    expect(screen.getByText('PeopleStorming')).toBeInTheDocument();
    expect(screen.getByText('Spanish')).toBeInTheDocument();
    expect(screen.getByText(en.offWork)).toBeInTheDocument();
  });

  it('renders the skills in Spanish too', () => {
    i18n.changeLanguage('es');
    renderWithProviders(<Skills />);
    expect(screen.getAllByRole('listitem')).toHaveLength(es.skills.length);
    expect(screen.getByText('Diseño de sistemas')).toBeInTheDocument();
  });

  it('lights the bubble under a finger sliding over them, and lets it go after the finger lifts', () => {
    jest.useFakeTimers();
    renderWithProviders(<Skills />);
    const [first, second] = screen.getAllByRole('listitem');
    const list = first.parentElement;
    const slideOver = (bubble, type = 'touchMove') => {
      document.elementFromPoint = () => bubble;
      fireEvent[type](list, { touches: [{ clientX: 0, clientY: 0 }] });
    };

    slideOver(first, 'touchStart');
    expect(first).toHaveAttribute('data-touched');

    slideOver(second);
    expect(first).not.toHaveAttribute('data-touched');
    expect(second).toHaveAttribute('data-touched');

    fireEvent.touchEnd(list);
    expect(second).toHaveAttribute('data-touched');
    act(() => jest.advanceTimersByTime(400));
    expect(second).not.toHaveAttribute('data-touched');

    delete document.elementFromPoint;
    jest.useRealTimers();
  });
});
