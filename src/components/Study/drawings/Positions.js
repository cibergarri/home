import { Kid } from './parts';

// A small room, 400 × 230, to show where someone is: Toby, Daisy or Sam (`name`) `next to`,
// `behind`, `in front of` or `between` a chair, a table or a bin (`thing`). Behind means drawn
// first and a little further back, so the thing hides part of them; between means two of the thing.

const FLOOR = 200;

function Chair({ x, y, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x={-28} y={-100} width={10} height={100} rx={3} fill="#a8703f" />
      <rect x={18} y={-100} width={10} height={100} rx={3} fill="#a8703f" />
      <rect x={-30} y={-104} width={60} height={30} rx={6} fill="#c98a52" />
      <rect x={-34} y={-50} width={68} height={12} rx={4} fill="#c98a52" />
    </g>
  );
}

function Table({ x, y, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x={-75} y={-78} width={150} height={14} rx={4} fill="#b5824f" />
      <rect x={-66} y={-64} width={10} height={64} fill="#8a5a3a" />
      <rect x={56} y={-64} width={10} height={64} fill="#8a5a3a" />
    </g>
  );
}

function Bin({ x, y, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-26,-62 H26 L20,0 H-20 Z" fill="#5fae7a" stroke="#3f8a5a" strokeWidth={2} />
      <rect x={-30} y={-68} width={60} height={8} rx={3} fill="#3f8a5a" />
      <path d="M-10,-50 V-10 M0,-50 V-10 M10,-50 V-10" stroke="#3f8a5a" strokeWidth={2} />
    </g>
  );
}

const THINGS = { chair: Chair, table: Table, bin: Bin };

export default function Positions({ name, position, thing }) {
  const Thing = THINGS[thing];
  let scene;
  if (position === 'behind') {
    scene = (
      <>
        <Kid name={name} x={200} y={FLOOR - 22} />
        <Thing x={200} y={FLOOR + 4} scale={0.8} />
      </>
    );
  } else if (position === 'in front of') {
    scene = (
      <>
        <Thing x={200} y={FLOOR - 26} scale={0.85} />
        <Kid name={name} x={200} y={FLOOR + 6} />
      </>
    );
  } else if (position === 'between') {
    scene = (
      <>
        <Thing x={95} y={FLOOR} />
        <Thing x={305} y={FLOOR} />
        <Kid name={name} x={200} y={FLOOR} />
      </>
    );
  } else {
    scene = (
      <>
        <Thing x={140} y={FLOOR} />
        <Kid name={name} x={265} y={FLOOR} />
      </>
    );
  }
  return (
    <g>
      <rect width={400} height={230} fill="#eef6fb" />
      <rect y={FLOOR - 40} width={400} height={70} fill="#ead9bd" />
      <line x1={0} y1={FLOOR - 40} x2={400} y2={FLOOR - 40} stroke="#d4bf9c" strokeWidth={2} />
      {scene}
    </g>
  );
}
