import * as React from 'react';

function SvgEs(props) {
  return (
    <svg width={750} height={500} viewBox="0 0 3 2" {...props}>
      <path d="M0 0h3v2H0z" fill="#db000c" />
      <path d="M0 1h3" stroke="#fbea0d" />
    </svg>
  );
}

export default SvgEs;
