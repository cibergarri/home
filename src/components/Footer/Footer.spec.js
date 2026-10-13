import { screen } from '@testing-library/react';

import { renderWithProviders, i18n } from '@/test-utils';
import Footer from '.';

describe('Footer', () => {
  beforeEach(() => i18n.changeLanguage('en'));

  it('credits love, JavaScript and Claude, in that order', () => {
    renderWithProviders(<Footer />);
    const icons = ['love', 'JavaScript', 'Claude'].map(name => screen.getByLabelText(name));
    icons.forEach((icon, index) => {
      if (index > 0) {
        expect(icons[index - 1].compareDocumentPosition(icon)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
      }
    });
    expect(screen.getByText(/Made with/)).toBeInTheDocument();
    expect(screen.getByText(/by Javier Garrido/)).toBeInTheDocument();
    expect(screen.getByText(String(new Date().getFullYear()))).toBeInTheDocument();
  });
});
