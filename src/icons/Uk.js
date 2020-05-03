import * as React from 'react';

function SvgUk(props) {
  return (
    <svg viewBox="0 0 60 30" width={1200} height={600} {...props}>
      <clipPath id="uk_svg__a">
        <path d="M0 0v30h60V0z" />
      </clipPath>
      <clipPath id="uk_svg__b">
        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
      </clipPath>
      <g clipPath="url(#uk_svg__a)">
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth={6} />
        <path
          d="M0 0l60 30m0-30L0 30"
          clipPath="url(#uk_svg__b)"
          stroke="#C8102E"
          strokeWidth={4}
        />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth={10} />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth={6} />
      </g>
    </svg>
  );
}

export default SvgUk;
