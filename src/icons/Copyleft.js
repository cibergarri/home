import * as React from "react";

function SvgCopyleft(props) {
  return (
    <svg viewBox="0 0 980 980" {...props}>
      <circle
        cx={490}
        cy={490}
        r={440}
        fill="none"
        stroke={props.fill}
        strokeWidth={100}
      />
      <path d="M219 428h131a150 150 0 110 125H219a275 275 0 100-125z" />
    </svg>
  );
}

export default SvgCopyleft;
