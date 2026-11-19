// Social Science, unit 2, pages 24–25: a mind map of where we live, a village or a town or city,
// drawn as a sketchnote with the Spanish in grey. 1200 × 880: the question at the top, the village
// on the left and the city on the right, and below them a row for each difference (inhabitants,
// buildings, streets, traffic, houses), the village's side to the left of the dashed line. The
// words that make the difference are the key words.
import {
  INK, PAPER, YELLOW, MINT, PINK, SKY, ORANGE, RED, GREEN, BLUE, GREY, THIN,
  ink, Title, Hand, Marker, SketchDefs, Stick, Car,
} from './sketch';

const ROUGH = 'url(#villages-cities-rough)';
const HEAD = 'url(#villages-cities-head)';

// A little house with its floor at (x, base).
function House({
  x, base, width = 34, colour = ORANGE, roof = RED,
}) {
  const height = width * 0.8;
  return (
    <g>
      <rect x={x} y={base - height} width={width} height={height} fill={colour} />
      <path d={`M${x - 5} ${base - height + 2} L${x + width / 2} ${base - height - width * 0.65} L${x + width + 5} ${base - height + 2} Z`} fill={roof} />
    </g>
  );
}

// A tall block of flats with rows of windows, its floor at `base`.
function Block({
  x, base, width, height, colour,
}) {
  const windows = [];
  for (let wy = base - height + 10; wy < base - 16; wy += 16) {
    for (let wx = x + 7; wx < x + width - 10; wx += 14) windows.push([wx, wy]);
  }
  return (
    <g>
      <rect x={x} y={base - height} width={width} height={height} fill={colour} />
      {windows.map(([wx, wy]) => <rect key={`${wx}-${wy}`} x={wx} y={wy} width={7} height={8} fill={PAPER} strokeWidth={1.5} />)}
    </g>
  );
}

const ROWS = [
  {
    topic: 'inhabitants', es: 'habitantes', colour: SKY,
    village: ['*few* inhabitants'], villageEs: 'pocos habitantes',
    city: ['*many* inhabitants'], cityEs: 'muchos habitantes',
  },
  {
    topic: 'buildings', es: 'edificios', colour: ORANGE,
    village: ['most buildings are *low*'], villageEs: 'edificios bajos',
    city: ['most buildings are *tall*'], cityEs: 'edificios altos',
  },
  {
    topic: 'streets', es: 'calles', colour: MINT,
    village: ['*narrow* and *short* streets'], villageEs: 'calles estrechas y cortas',
    city: ['*long* and *wide* streets'], cityEs: 'calles anchas y largas',
  },
  {
    topic: 'traffic', es: 'tráfico', colour: PINK,
    village: ['*not much* traffic'], villageEs: 'poco tráfico',
    city: ['*a lot of* traffic'], cityEs: 'mucho tráfico',
  },
  {
    topic: 'houses', es: 'casas', colour: YELLOW,
    village: ['*few* houses'], villageEs: 'pocas casas',
    city: ['*many* houses, in', 'different *neighbourhoods*'], cityEs: 'muchas casas, en barrios',
  },
];

const rowY = index => 418 + index * 98; // the middle of each row

function Pictures({ index, y }) {
  switch (index) {
    case 0:
      return (
        <g {...ink} filter={ROUGH}>
          <Stick x={110} y={y - 28} r={9} />
          <Stick x={150} y={y - 28} r={9} />
          {[712, 734, 756, 778, 800, 822].map(x => <Stick key={x} x={x} y={y - 26} r={8} />)}
        </g>
      );
    case 1:
      return (
        <g {...ink} filter={ROUGH}>
          <House x={86} base={y + 24} colour={ORANGE} />
          <House x={136} base={y + 24} colour={SKY} />
          <Block x={718} base={y + 30} width={30} height={72} colour={SKY} />
          <Block x={752} base={y + 30} width={34} height={58} colour={PINK} />
          <Block x={790} base={y + 30} width={30} height={80} colour={MINT} />
        </g>
      );
    case 2:
      return (
        <g {...ink} filter={ROUGH}>
          <rect x={92} y={y - 9} width={80} height={18} fill={GREY} strokeWidth={0} />
          <path d={`M92 ${y - 9} L172 ${y - 9} M92 ${y + 9} L172 ${y + 9}`} />
          <rect x={700} y={y - 24} width={150} height={48} fill={GREY} strokeWidth={0} />
          <path d={`M700 ${y - 24} L850 ${y - 24} M700 ${y + 24} L850 ${y + 24}`} />
          <path d={`M708 ${y} L844 ${y}`} stroke={PAPER} strokeDasharray="12 9" />
        </g>
      );
    case 3:
      return (
        <g filter={ROUGH}>
          <Car x={104} base={y + 18} colour={GREEN} />
          <Car x={700} base={y + 2} colour={RED} width={50} />
          <Car x={760} base={y + 2} colour={BLUE} width={50} />
          <Car x={728} base={y + 36} colour={YELLOW} width={50} />
          <Car x={788} base={y + 36} colour={GREEN} width={50} />
        </g>
      );
    default:
      return (
        <g {...ink} filter={ROUGH}>
          <House x={88} base={y + 22} width={28} colour={ORANGE} />
          <path d={`M138 ${y + 22} L138 ${y + 4}`} />
          <circle cx={138} cy={y - 6} r={12} fill={MINT} />
          <House x={158} base={y + 22} width={28} colour={SKY} />
          {[[690, ORANGE], [752, SKY], [814, PINK]].map(([x, colour]) => (
            <g key={x}>
              <ellipse cx={x + 24} cy={y + 4} rx={30} ry={30} fill="none" strokeDasharray="4 6" strokeWidth={THIN} />
              <House x={x + 4} base={y + 4} width={14} colour={colour} />
              <House x={x + 30} base={y + 4} width={14} colour={colour} />
              <House x={x + 17} base={y + 26} width={14} colour={colour} />
            </g>
          ))}
        </g>
      );
  }
}

export default function VillagesAndCitiesMap() {
  return (
    <g>
      <SketchDefs id="villages-cities" />

      {/* The question */}
      <g {...ink} filter={ROUGH}>
        <ellipse cx={600} cy={92} rx={180} ry={64} fill={YELLOW} />
        <ellipse cx={603} cy={89} rx={186} ry={67} strokeWidth={THIN} />
      </g>
      <Title x={600} y={96} size={44} mid>Where do we live?</Title>
      <Hand x={600} y={128} size={21} mid grey>¿Dónde vivimos?</Hand>
      <g {...ink} filter={ROUGH} markerEnd={HEAD}>
        <path d="M440 122 Q 380 150 340 172" />
        <path d="M760 122 Q 820 150 860 172" />
      </g>

      {/* The village */}
      <Marker x={222} y={176} width={156} colour={MINT} tilt={-1.5} />
      <Title x={300} y={202} size={46} mid>Village</Title>
      <Hand x={300} y={230} size={21} mid grey>el pueblo</Hand>
      <Hand x={300} y={258} size={27} mid>*small* and *quiet*</Hand>
      <g {...ink} filter={ROUGH}>
        <path d="M90 352 Q 170 276 270 348" strokeWidth={THIN} />
        <path d="M80 352 Q 300 338 520 352" />
        <House x={160} base={348} colour={ORANGE} />
        <House x={212} base={348} width={30} colour={SKY} />
        <rect x={276} y={292} width={28} height={56} fill={PAPER} />
        <path d="M271 294 L290 270 L309 294 Z" fill={PINK} />
        <path d="M290 270 L290 258 M284 263 L296 263" strokeWidth={THIN} />
        <path d="M372 348 L372 322" />
        <circle cx={372} cy={306} r={20} fill={MINT} />
        <House x={420} base={348} width={28} colour={YELLOW} />
        <path d="M454 288 Q 460 282 466 288 Q 472 282 478 288 M486 300 Q 491 295 496 300 Q 501 295 506 300" strokeWidth={THIN} />
      </g>

      {/* The town or city */}
      <Marker x={786} y={176} width={228} colour={PINK} tilt={1.2} />
      <Title x={900} y={202} size={46} mid>Town or city</Title>
      <Hand x={900} y={230} size={21} mid grey>la ciudad</Hand>
      <Hand x={900} y={258} size={27} mid>*large* and *busy*</Hand>
      <g {...ink} filter={ROUGH}>
        <Block x={684} base={352} width={50} height={52} colour={ORANGE} />
        <Block x={738} base={352} width={44} height={74} colour={SKY} />
        <Block x={786} base={352} width={56} height={62} colour={MINT} />
        <Block x={846} base={352} width={42} height={82} colour={PINK} />
        <Block x={892} base={352} width={52} height={56} colour={YELLOW} />
        <Block x={948} base={352} width={46} height={76} colour={SKY} />
        <Block x={998} base={352} width={56} height={60} colour={ORANGE} />
        <Block x={1058} base={352} width={44} height={70} colour={MINT} />
        <path d="M672 352 L1120 352" />
      </g>

      {/* Village on the left, city on the right */}
      <path d="M600 168 L600 870" {...ink} strokeDasharray="3 10" strokeWidth={THIN} />
      <g {...ink} filter={ROUGH}>
        <circle cx={600} cy={300} r={28} fill={PAPER} />
      </g>
      <Title x={600} y={310} size={30} mid>vs</Title>

      {ROWS.map((row, index) => {
        const y = rowY(index);
        return (
          <g key={row.topic}>
            <rect x={528} y={y - 34} width={144} height={58} rx={16} fill={row.colour} stroke={INK} strokeWidth={2.5} />
            <Hand x={600} y={y - 8} size={24} mid>{row.topic}</Hand>
            <Hand x={600} y={y + 15} size={18} mid grey>{row.es}</Hand>
            <Pictures index={index} y={y} />
            <Hand x={212} y={y + (row.village.length > 1 ? -14 : -2)} size={25}>{row.village[0]}</Hand>
            <Hand x={212} y={y + 24} size={19} grey>{row.villageEs}</Hand>
            {row.city.map((line, n) => (
              <Hand key={line} x={884} y={y + (row.city.length > 1 ? -18 + n * 26 : -2)} size={row.city.length > 1 ? 23 : 25}>{line}</Hand>
            ))}
            <Hand x={884} y={y + (row.city.length > 1 ? 34 : 24)} size={19} grey>{row.cityEs}</Hand>
          </g>
        );
      })}
    </g>
  );
}
