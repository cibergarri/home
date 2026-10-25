import School from '../../drawings/School';
import Positions from '../../drawings/Positions';

// Pictures for quiz questions: the school with people in it, or someone placed by some furniture.
export const atSchool = (...people) => ({
  Drawing: School, width: 1000, height: 640, props: { people },
});

export const placed = (name, position, thing) => ({
  Drawing: Positions, width: 400, height: 230, props: { name, position, thing },
});
