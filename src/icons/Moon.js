import * as React from 'react';

function SvgMoon(props) {
  return (
    <svg width={20} height={20} {...props}>
      <path d="M17.39 15.14A7.33 7.33 0 0111.75 1.6c.23-.11.56-.23.79-.34a8.19 8.19 0 00-5.41.45 9 9 0 107 16.58 8.42 8.42 0 004.29-3.84 5.3 5.3 0 01-1.03.69z" />
    </svg>
  );
}

export default SvgMoon;
