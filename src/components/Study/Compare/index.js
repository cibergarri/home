'use client';

import { useStrings } from '../language';
import {
  Line, Number, Gap, Signs, Sign,
} from './style';

export const SIGNS = ['<', '>', '='];

// The sign that goes between two numbers.
export const signFor = (a, b) => {
  if (a < b) return '<';
  return a > b ? '>' : '=';
};

// How a comparison is read aloud: «36 es mayor que 33».
export const sayComparison = (a, b, lang) => `${a} ${{ '<': lang === 'es' ? 'es menor que' : 'is less than', '>': lang === 'es' ? 'es mayor que' : 'is greater than', '=': lang === 'es' ? 'es igual a' : 'is equal to' }[signFor(a, b)]} ${b}`;

// Two numbers with a gap between them («33 _ 36») and the three signs to choose from, with nothing
// to say what each one means. A wrong sign is crossed out; the right one goes in the gap.
export default function Compare({
  a, b, tried, onChoose,
}) {
  const text = useStrings();
  const right = signFor(a, b);
  const solved = tried.includes(right);
  return (
    <>
      <Line aria-label={solved ? `${a} ${right} ${b}` : text.compareGap(a, b)}>
        <Number>{a}</Number>
        <Gap $solved={solved}>{solved ? right : ''}</Gap>
        <Number>{b}</Number>
      </Line>
      <Signs aria-label={text.signs}>
        {SIGNS.map((sign) => {
          let state;
          if (solved && sign === right) state = 'right';
          else if (tried.includes(sign)) state = 'wrong';
          return (
            <Sign key={sign} type="button" $state={state} onClick={() => onChoose(sign)} disabled={solved || Boolean(state)}>
              {sign}
            </Sign>
          );
        })}
      </Signs>
    </>
  );
}
