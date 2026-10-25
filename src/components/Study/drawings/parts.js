// Small pieces shared by the drawings, in drawing units.

// A little house far away, its walls `y` to `y + 14` and its roof above.
export function SmallHouse({
  x, y, wall, roof,
}) {
  return (
    <g>
      <rect x={x - 10} y={y} width={20} height={14} fill={wall} stroke="#8a6a4a" strokeWidth={1} />
      <path d={`M${x - 13},${y + 1} L${x},${y - 10} L${x + 13},${y + 1} Z`} fill={roof} />
    </g>
  );
}

export function Cloud({ x, y }) {
  return (
    <g fill="#fff" opacity={0.9}>
      <ellipse cx={x} cy={y} rx={42} ry={16} />
      <circle cx={x - 14} cy={y - 12} r={16} />
      <circle cx={x + 12} cy={y - 16} r={20} />
    </g>
  );
}
