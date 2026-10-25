import { fireEvent, screen, within } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';
import findDirections from '../exercises/find-directions';
import DirectionsGame from '.';

const press = (direction, times = 1) => {
  for (let i = 0; i < times; i += 1) fireEvent.click(screen.getByRole('button', { name: direction }));
};
const followRoute = ({ steps }) => steps.forEach(({ direction, squares }) => press(direction, squares));
const currentStep = () => within(screen.getByLabelText('Instructions'))
  .getAllByRole('listitem').find(item => item.getAttribute('aria-current') === 'step');

describe('DirectionsGame', () => {
  it('starts with the workbook route to the village, one step at a time', () => {
    renderWithProviders(<DirectionsGame exercise={findDirections} />);
    expect(screen.getByText('Follow the instructions to get to the village.')).toBeInTheDocument();
    expect(currentStep()).toHaveTextContent('6 squares north');
    expect(currentStep()).toHaveTextContent('0 of 6');
  });

  it('moves a square with the right arrow and counts it', () => {
    renderWithProviders(<DirectionsGame exercise={findDirections} />);
    press('north', 2);
    expect(currentStep()).toHaveTextContent('2 of 6');
    press('north', 4);
    expect(currentStep()).toHaveTextContent('4 squares west');
  });

  it('does not move with a wrong arrow, and says which way to go', () => {
    renderWithProviders(<DirectionsGame exercise={findDirections} />);
    press('north', 2);
    press('east');
    expect(screen.getByText('Not that way! Go 4 squares north.')).toBeInTheDocument();
    expect(currentStep()).toHaveTextContent('2 of 6');
  });

  it('gets to the village, then gives the next route', () => {
    renderWithProviders(<DirectionsGame exercise={findDirections} />);
    followRoute(findDirections.routes[0]);
    expect(screen.getByText('🎉 You got to the village!')).toBeInTheDocument();
    expect(screen.getByLabelText('3 out of 3 stars')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Play again' }));
    expect(screen.getByText('Follow the instructions to get to the lake.')).toBeInTheDocument();
  });

  it('keeps every route on the map', () => {
    const moves = {
      north: [0, -1], south: [0, 1], west: [-1, 0], east: [1, 0],
    };
    findDirections.routes.forEach(({ steps }) => {
      let [column, row] = findDirections.start;
      steps.forEach(({ direction, squares }) => {
        column += moves[direction][0] * squares;
        row += moves[direction][1] * squares;
        expect(column).toBeGreaterThanOrEqual(0);
        expect(column).toBeLessThan(8);
        expect(row).toBeGreaterThanOrEqual(0);
        expect(row).toBeLessThan(8);
      });
    });
  });
});
