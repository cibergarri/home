import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import diagrams from '../exercises/social-science/unit-2/diagrams';
import Diagram from '.';

describe('Diagram', () => {
  it('shows the mind map of the local council, described for screen readers', () => {
    renderWithProviders(<Diagram exercise={diagrams} />);
    expect(screen.getByRole('img', { name: /The local council governs the municipality/ })).toBeInTheDocument();
    expect(screen.getByText('The local council')).toBeInTheDocument();
    expect(screen.getByText('Town hall')).toBeInTheDocument();
    expect(screen.getByText('recogida de basura')).toBeInTheDocument();
    expect(screen.getByText('Grey words are in Spanish.')).toBeInTheDocument();
  });
});
