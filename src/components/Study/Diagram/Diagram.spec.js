import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import diagrams from '../exercises/social-science/unit-2/diagrams';
import Diagram from '.';

describe('Diagram', () => {
  it('shows the mind map of villages, towns and cities, described for screen readers', () => {
    renderWithProviders(<Diagram exercise={diagrams} />);
    expect(screen.getByRole('img', { name: /A village is small and quiet/ })).toBeInTheDocument();
    expect(screen.getByText('Where do we live?')).toBeInTheDocument();
    expect(screen.getByText('narrow and short streets')).toBeInTheDocument();
    expect(screen.getByText('muchas casas, en barrios')).toBeInTheDocument();
    expect(screen.getByText('Grey words are in Spanish.')).toBeInTheDocument();
  });

  it('shows the mind map of the local council', () => {
    renderWithProviders(<Diagram exercise={diagrams.more[0]} />);
    expect(screen.getByRole('img', { name: /The local council governs the municipality/ })).toBeInTheDocument();
    expect(screen.getByText('Town hall')).toBeInTheDocument();
    expect(screen.getByText('recogida de basura')).toBeInTheDocument();
  });
});
