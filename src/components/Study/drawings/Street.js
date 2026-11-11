// Social Science, unit 2: a crossroads from above, for the road safety words (as in the workbook's
// "observe and write the numbers"), and the little man of a pedestrian traffic light.
//
// The street is 1000 × 640: a road across (y 300–440), with a cycle lane along its top, and a road
// down (x 560–700), with a pedestrian crossing above the crossroads. Pavements and buildings fill
// the corners; a road sign stands by the crossing and traffic lights at the bottom right corner.

const ROAD = '#596170';
const PAVEMENT = '#d9d3c7';
const KERB = '#bdb5a6';
const LANE = '#e2725b';

function Building({
  x, y, width, height, colour, roof,
}) {
  const windows = [];
  for (let wx = x + 18; wx < x + width - 30; wx += 46) {
    for (let wy = y + 18; wy < y + height - 30; wy += 44) windows.push([wx, wy]);
  }
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={6} fill={colour} stroke="#8a7f70" strokeWidth={2} />
      <rect x={x} y={y} width={width} height={10} rx={4} fill={roof} />
      {windows.map(([wx, wy]) => <rect key={`${wx}-${wy}`} x={wx} y={wy} width={26} height={22} rx={3} fill="#cfe8f7" stroke="#8a7f70" strokeWidth={1.5} />)}
    </g>
  );
}

function Car({
  x, y, colour, down = false,
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${down ? 90 : 0})`}>
      <rect x={-58} y={-26} width={116} height={52} rx={14} fill={colour} stroke="#2b3240" strokeWidth={2.5} />
      <rect x={-28} y={-20} width={50} height={40} rx={8} fill="#cfe8f7" stroke="#2b3240" strokeWidth={2} />
      <rect x={-54} y={-32} width={20} height={8} rx={3} fill="#2b3240" />
      <rect x={34} y={-32} width={20} height={8} rx={3} fill="#2b3240" />
      <rect x={-54} y={24} width={20} height={8} rx={3} fill="#2b3240" />
      <rect x={34} y={24} width={20} height={8} rx={3} fill="#2b3240" />
    </g>
  );
}

function Bike({ x, y }) {
  return (
    <g fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
      <circle cx={x - 14} cy={y + 4} r={8} />
      <circle cx={x + 14} cy={y + 4} r={8} />
      <path d={`M${x - 14},${y + 4} L${x - 4},${y - 8} H${x + 8} L${x + 14},${y + 4} M${x - 4},${y - 8} L${x + 2},${y + 4} L${x + 8},${y - 8}`} />
    </g>
  );
}

export default function Street() {
  const stripes = [];
  for (let sx = 566; sx < 700; sx += 26) stripes.push(sx);
  const dashes = [];
  for (let dx = 20; dx < 1000; dx += 70) if (dx + 40 < 556 || dx > 704) dashes.push(dx);
  return (
    <g>
      <rect width={1000} height={640} fill={PAVEMENT} />
      <Building x={20} y={20} width={480} height={190} colour="#f3e3c3" roof="#d98c5f" />
      <Building x={760} y={20} width={220} height={190} colour="#e6eef5" roof="#7a9cc6" />
      <Building x={20} y={500} width={480} height={130} colour="#f1d9d9" roof="#c46b6b" />
      <Building x={760} y={500} width={220} height={130} colour="#e3efd9" roof="#7fae6a" />

      <rect x={0} y={296} width={1000} height={148} fill={KERB} />
      <rect x={556} y={0} width={148} height={640} fill={KERB} />
      <rect x={0} y={300} width={1000} height={140} fill={ROAD} />
      <rect x={560} y={0} width={140} height={640} fill={ROAD} />
      {dashes.map(dx => <rect key={dx} x={dx} y={384} width={40} height={6} fill="#fff" opacity={0.8} />)}

      <rect x={0} y={300} width={556} height={34} fill={LANE} />
      <rect x={704} y={300} width={296} height={34} fill={LANE} />
      <path d="M0,334 H556 M704,334 H1000" stroke="#fff" strokeWidth={3} strokeDasharray="12 8" />
      <Bike x={300} y={314} />
      <Bike x={860} y={314} />

      {stripes.map(sx => <rect key={sx} x={sx} y={206} width={14} height={70} fill="#fff" />)}

      <Car x={180} y={398} colour="#5aa9e6" />
      <Car x={630} y={545} colour="#f2c94c" down />

      <rect x={516} y={150} width={8} height={120} fill="#6d7480" />
      <circle cx={520} cy={146} r={26} fill="#2f7bd6" stroke="#fff" strokeWidth={4} />
      <path d="M520,164 V132 M508,144 L520,130 L532,144" stroke="#fff" strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" />

      <rect x={731} y={450} width={8} height={70} fill="#2f5f3a" />
      <rect x={717} y={372} width={36} height={86} rx={8} fill="#2b3240" />
      <circle cx={735} cy={390} r={10} fill="#e5484d" />
      <circle cx={735} cy={415} r={10} fill="#6b5a2a" />
      <circle cx={735} cy={440} r={10} fill="#2c5a36" />
    </g>
  );
}

// A pedestrian traffic light: the red man on top, the green man below, one of them lit.
export const LIGHT = { width: 200, height: 300 };

function Walker({ y, colour, walking }) {
  return (
    <g fill={colour}>
      <circle cx={100} cy={y - 36} r={11} />
      {walking ? (
        <path d={`M92,${y - 22} H108 L114,${y + 6} L126,${y + 34} L116,${y + 38} L104,${y + 12} L96,${y + 38} L84,${y + 34} L94,${y + 4} Z`} />
      ) : (
        <path d={`M90,${y - 22} H110 L112,${y + 8} H106 L104,${y + 38} H96 L94,${y + 8} H88 Z`} />
      )}
    </g>
  );
}

export function PedestrianLight({ go }) {
  return (
    <g>
      <rect width={200} height={300} fill="#fffaf2" />
      <rect x={40} y={14} width={120} height={272} rx={16} fill="#2b3240" />
      <circle cx={100} cy={84} r={52} fill="#1d222b" />
      <circle cx={100} cy={216} r={52} fill="#1d222b" />
      <Walker y={96} colour={go ? '#5b3b3b' : '#ff4d4d'} />
      <Walker y={228} colour={go ? '#4ee36a' : '#2c4a33'} walking />
    </g>
  );
}
