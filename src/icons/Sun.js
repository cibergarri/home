import * as React from "react";

function SvgSun(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M377.139 259.492c0 66.637-54.02 120.658-120.658 120.658-66.637 0-120.658-54.021-120.658-120.658s54.02-120.658 120.658-120.658c66.637 0 120.658 54.02 120.658 120.658zM228.352 100.669l30.27-77.906 25.979 77.906zM228.352 411.341l30.27 77.895 25.979-77.895zM100.659 287.601l-77.895-30.29 77.895-25.959zM411.361 287.601l77.875-30.29-77.875-25.959zM126.597 165.703L92.938 89.231l73.442 36.7zM346.276 385.423l76.524 33.639-36.741-73.442zM168.499 388.199l-76.493 33.639 36.72-73.442zM388.199 168.499l33.618-76.513-73.4 36.751z" />
    </svg>
  );
}

export default SvgSun;
