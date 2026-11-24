// Social Science, unit 2, page 25: a village and a city to join to their names, as sketches, each
// 320 × 200 with the ground at y 176; and little pictures of what each is like.
import {
  INK, PAPER, YELLOW, MINT, PINK, SKY, ORANGE, RED, GREEN, BLUE, BROWN, GREY, SKIN, THIN,
  ink, SketchDefs, Car,
} from './sketch';

// A little stone house with a tiled roof, its floor at (x, base).
function Cottage({
  x, base, width = 50, colour = '#d9c7a8',
}) {
  const height = width * 0.7;
  return (
    <g {...ink} strokeWidth={2.5}>
      <rect x={x} y={base - height} width={width} height={height} fill={colour} />
      <path d={`M${x - 6} ${base - height + 2} L${x + width / 2} ${base - height - width * 0.45} L${x + width + 6} ${base - height + 2} Z`} fill={ORANGE} />
      <rect x={x + width * 0.38} y={base - height * 0.55} width={width * 0.24} height={height * 0.55} fill={BROWN} strokeWidth={THIN} />
      <rect x={x + width * 0.1} y={base - height * 0.75} width={width * 0.18} height={width * 0.16} fill={SKY} strokeWidth={THIN} />
    </g>
  );
}

// A block of flats with rows of windows, its floor at `base`.
function Block({
  x, base, width, height, colour,
}) {
  const windows = [];
  for (let wy = base - height + 10; wy < base - 14; wy += 15) {
    for (let wx = x + 6; wx < x + width - 9; wx += 13) windows.push([wx, wy]);
  }
  return (
    <g {...ink} strokeWidth={2.5}>
      <rect x={x} y={base - height} width={width} height={height} fill={colour} />
      {windows.map(([wx, wy]) => <rect key={`${wx}-${wy}`} x={wx} y={wy} width={7} height={8} fill={PAPER} strokeWidth={1.2} />)}
    </g>
  );
}

export function Village() {
  return (
    <g>
      <SketchDefs id="village-scene" />
      <rect width={320} height={200} fill="#eaf6ff" />
      <g filter="url(#village-scene-rough)">
        <path d="M0 120 Q 70 60 150 110 Q 220 70 320 112 L320 200 L0 200 Z" {...ink} fill="#cfe9c4" strokeWidth={THIN} />
        <path d="M130 200 Q 150 180 160 176 Q 172 180 196 200 Z" {...ink} fill={GREY} strokeWidth={THIN} />
        <path d="M0 176 L320 176" {...ink} strokeWidth={THIN} />
        <Cottage x={30} base={176} />
        <Cottage x={94} base={176} width={40} colour="#e6d6b8" />
        <g {...ink} strokeWidth={2.5}>
          <rect x={210} y={110} width={30} height={66} fill={PAPER} />
          <path d="M205 112 L225 84 L245 112 Z" fill={RED} />
          <path d="M225 84 L225 70 M218 76 L232 76" strokeWidth={THIN} />
        </g>
        <Cottage x={252} base={176} width={44} />
        <path d="M176 176 L176 150" {...ink} />
        <circle cx={176} cy={136} r={16} {...ink} fill={MINT} />
      </g>
      <circle cx={280} cy={34} r={14} {...ink} fill={YELLOW} strokeWidth={THIN} />
    </g>
  );
}

export function City() {
  const blocks = [
    [6, 30, 96, PINK], [40, 36, 120, SKY], [80, 28, 84, YELLOW], [112, 40, 140, MINT],
    [156, 30, 104, ORANGE], [190, 38, 130, SKY], [232, 30, 92, PINK], [266, 46, 118, MINT],
  ];
  return (
    <g>
      <SketchDefs id="city-scene" />
      <rect width={320} height={200} fill="#eaf6ff" />
      <g filter="url(#city-scene-rough)">
        {blocks.map(([x, width, height, colour]) => <Block key={x} x={x} base={160} width={width} height={height} colour={colour} />)}
        <rect x={0} y={160} width={320} height={40} fill={GREY} />
        <path d="M0 160 L320 160 M0 200 L320 200" {...ink} />
        <path d="M8 180 L312 180" stroke={PAPER} strokeWidth={3} strokeDasharray="14 10" />
        <Car x={30} base={178} colour={RED} width={48} />
        <Car x={120} base={178} colour={BLUE} width={48} />
        <Car x={220} base={198} colour={GREEN} width={48} />
      </g>
      <path d="M260 30 Q 270 22 280 30 Q 292 22 300 32" {...ink} stroke={INK} strokeWidth={THIN} />
    </g>
  );
}

// Little pictures, 60 × 40, of what villages and cities are like, beside the words on the cards.
const icon = { ...ink, strokeWidth: 1.6 };

function Head({ x, y, colour }) {
  return (
    <g {...icon}>
      <path d={`M${x} ${y + 5} L${x} ${y + 15} M${x - 4} ${y + 22} L${x} ${y + 15} L${x + 4} ${y + 22} M${x - 5} ${y + 9} L${x + 5} ${y + 9}`} />
      <circle cx={x} cy={y} r={4} fill={colour} />
    </g>
  );
}

function Hut({ x, base, colour = ORANGE, width = 14 }) {
  const height = width * 0.75;
  return (
    <g {...icon}>
      <rect x={x} y={base - height} width={width} height={height} fill={colour} />
      <path d={`M${x - 2} ${base - height} L${x + width / 2} ${base - height - width * 0.55} L${x + width + 2} ${base - height} Z`} fill={RED} />
    </g>
  );
}

function Tower({
  x, height, width = 10, colour,
}) {
  return (
    <g {...icon}>
      <rect x={x} y={38 - height} width={width} height={height} fill={colour} />
      {Array.from({ length: Math.floor((height - 6) / 6) }, (_, n) => (
        <path key={n} d={`M${x + 3} ${38 - height + 4 + n * 6} L${x + width - 3} ${38 - height + 4 + n * 6}`} strokeWidth={1.2} />
      ))}
    </g>
  );
}

function Mini({ x, y, colour }) {
  return <rect x={x} y={y} width={9} height={6} rx={2} {...icon} fill={colour} strokeWidth={1.2} />;
}

const Ground = () => <path d="M2 38 L58 38" {...icon} />;

export const LIKE = {
  fewPeople: () => (
    <g>
      <Head x={22} y={12} colour={SKIN} />
      <Head x={38} y={12} colour={SKIN} />
    </g>
  ),
  manyPeople: () => (
    <g>
      {[8, 18, 28, 38, 48, 13, 23, 33, 43, 53].map((x, n) => <Head key={x + n} x={x} y={n < 5 ? 6 : 14} colour={SKIN} />)}
    </g>
  ),
  lowBuildings: () => (
    <g>
      <Ground />
      <Hut x={8} base={38} colour={ORANGE} width={18} />
      <Hut x={34} base={38} colour={SKY} width={18} />
    </g>
  ),
  tallBuildings: () => (
    <g>
      <Ground />
      <Tower x={8} height={30} colour={SKY} />
      <Tower x={22} height={36} colour={PINK} width={12} />
      <Tower x={38} height={26} colour={MINT} />
    </g>
  ),
  narrowStreets: () => (
    <g>
      <rect x={4} y={16} width={52} height={8} fill={GREY} />
      <path d="M4 16 L56 16 M4 24 L32 24" {...icon} />
      <path d="M32 24 L32 36 M40 24 L40 36" {...icon} />
      <path d="M40 24 L56 24" {...icon} />
      <rect x={32} y={24} width={8} height={12} fill={GREY} />
    </g>
  ),
  wideStreets: () => (
    <g>
      <rect x={2} y={8} width={56} height={26} fill={GREY} />
      <path d="M2 8 L58 8 M2 34 L58 34" {...icon} />
      <path d="M5 21 L55 21" stroke={PAPER} strokeWidth={2} strokeDasharray="6 5" />
    </g>
  ),
  littleTraffic: () => (
    <g>
      <path d="M2 34 L58 34" {...icon} />
      <Car x={18} base={34} colour={GREEN} width={24} />
    </g>
  ),
  lotsOfTraffic: () => (
    <g>
      <Mini x={4} y={10} colour={RED} />
      <Mini x={17} y={10} colour={BLUE} />
      <Mini x={30} y={10} colour={YELLOW} />
      <Mini x={43} y={10} colour={GREEN} />
      <Mini x={10} y={22} colour={ORANGE} />
      <Mini x={23} y={22} colour={PINK} />
      <Mini x={36} y={22} colour={SKY} />
      <Mini x={49} y={22} colour={RED} />
      <path d="M2 34 L58 34" {...icon} />
    </g>
  ),
  fewHouses: () => (
    <g>
      <Ground />
      <Hut x={6} base={38} colour={ORANGE} />
      <path d="M30 38 L30 28" {...icon} />
      <circle cx={30} cy={23} r={6} {...icon} fill={MINT} />
      <Hut x={40} base={38} colour={SKY} />
    </g>
  ),
  manyHouses: () => (
    <g>
      {[[3, 20], [17, 20], [31, 20], [45, 20], [10, 38], [24, 38], [38, 38]].map(([x, base]) => (
        <Hut key={`${x}-${base}`} x={x} base={base} colour={x % 2 ? ORANGE : SKY} width={11} />
      ))}
    </g>
  ),
  neighbourhoods: () => (
    <g>
      {[[15, 20, ORANGE], [45, 20, SKY], [30, 30, PINK]].map(([x, y, colour]) => (
        <g key={x}>
          <ellipse cx={x} cy={y} rx={12} ry={9} {...icon} strokeDasharray="2 3" strokeWidth={1.2} />
          <Hut x={x - 9} base={y + 3} colour={colour} width={7} />
          <Hut x={x + 1} base={y + 3} colour={colour} width={7} />
        </g>
      ))}
    </g>
  ),
};
