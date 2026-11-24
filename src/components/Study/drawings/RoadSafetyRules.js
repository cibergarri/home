// Social Science, unit 2, page 28: the road safety rules, drawn as a sketchnote with the Spanish in
// grey. 1200 × 940: the question at the top, then the six rules of the page in two rows of three,
// each a little picture over its rule, with the key words to remember.
import {
  INK, PAPER, YELLOW, MINT, PINK, SKY, ORANGE, RED, GREEN, BLUE, BROWN, GREY, THIN,
  ink, Title, Hand, Marker, SketchDefs, Person, Car,
} from './sketch';

const ROUGH = 'url(#road-rules-rough)';
const HEAD = 'url(#road-rules-head)';
const TARMAC = '#9aa3b2';

// A road across a panel, from `top` to `bottom`, with its dashed middle line.
function Road({ top, bottom }) {
  return (
    <g>
      <rect x={0} y={top} width={340} height={bottom - top} fill={TARMAC} />
      <path d={`M0 ${top} L340 ${top} M0 ${bottom} L340 ${bottom}`} {...ink} />
      <path d={`M10 ${(top + bottom) / 2} L330 ${(top + bottom) / 2}`} stroke={PAPER} strokeWidth={3} strokeDasharray="16 12" />
    </g>
  );
}

// A helmet on the head of a Person of the same x, base and scale.
function Helmet({
  x, base, scale, colour = BLUE,
}) {
  return (
    <path
      d="M-17 -98 Q -16 -124 0 -124 Q 16 -124 17 -98 Z"
      transform={`translate(${x} ${base}) scale(${scale})`}
      {...ink}
      strokeWidth={2}
      fill={colour}
    />
  );
}

function Pavements() {
  return (
    <g>
      <rect x={0} y={96} width={340} height={34} fill="#e8d9bd" />
      <Road top={130} bottom={196} />
      <Person x={110} base={124} scale={0.78} shirt={PINK} hands={[[-26, -40], [26, -44]]} />
      <Person x={160} base={124} scale={0.56} shirt={YELLOW} />
      <Car x={210} base={186} colour={RED} width={80} />
    </g>
  );
}

function Crossing() {
  return (
    <g>
      <rect x={0} y={60} width={340} height={136} fill={TARMAC} />
      <path d="M0 60 L340 60 M0 196 L340 196" {...ink} />
      {[70, 94, 118, 142, 166].map(y => <rect key={y} x={110} y={y} width={120} height={14} fill={PAPER} />)}
      <Person x={150} base={176} scale={0.9} shirt={SKY} hands={[[-24, -44], [26, -38]]} />
      <Person x={196} base={176} scale={0.6} shirt={ORANGE} hands={[[-30, -50], [22, -45]]} hair={GREY} />
    </g>
  );
}

function Lights() {
  return (
    <g {...ink}>
      <path d="M110 128 L110 196" strokeWidth={5} />
      <rect x={86} y={14} width={48} height={116} rx={10} fill={INK} />
      <circle cx={110} cy={38} r={13} fill={RED} stroke={PAPER} strokeWidth={2} />
      <circle cx={110} cy={72} r={13} fill="#6b5a2a" stroke={PAPER} strokeWidth={2} />
      <circle cx={110} cy={106} r={13} fill="#2f5a3a" stroke={PAPER} strokeWidth={2} />
      <path d="M240 112 L240 196" strokeWidth={5} />
      <path d="M240 26 L292 116 L188 116 Z" fill={PAPER} stroke={RED} strokeWidth={8} strokeLinejoin="round" />
      <circle cx={240} cy={68} r={6} fill={INK} stroke="none" />
      <path d="M240 74 L240 94 M240 94 L232 106 M240 94 L248 106 M230 82 L250 82" strokeWidth={3} />
    </g>
  );
}

function Protection() {
  return (
    <g>
      <g {...ink}>
        <circle cx={110} cy={160} r={30} fill="none" />
        <circle cx={226} cy={160} r={30} fill="none" />
        <path d="M110 160 L150 112 L208 112 L226 160 M150 112 L168 160 L208 112 M140 100 L160 100 M208 112 L202 92 L218 90" fill="none" strokeWidth={3.5} stroke={GREEN} />
        <path d="M168 160 L110 160" stroke={GREEN} strokeWidth={3.5} />
      </g>
      <Helmet x={290} base={194} scale={0.8} />
      <Person x={290} base={194} scale={0.8} shirt={MINT} hands={[[-40, -66], [22, -45]]} />
      <Hand x={150} y={52} size={20} grey>¡casco!</Hand>
      <path d="M214 46 Q 260 38 276 82" {...ink} strokeWidth={THIN} markerEnd={HEAD} />
    </g>
  );
}

function Seatbelt() {
  return (
    <g>
      <g {...ink}>
        <rect x={20} y={10} width={300} height={186} rx={22} fill="#dfe8f2" />
        <rect x={232} y={30} width={74} height={70} rx={10} fill={SKY} />
        <path d="M120 40 Q 120 20 150 20 L210 20 Q 236 20 236 46 L236 150 L110 150 Z" fill={BROWN} />
        <rect x={96} y={148} width={156} height={34} rx={12} fill={BROWN} />
      </g>
      <Person x={176} base={176} scale={0.92} shirt={PINK} hands={[[-30, -36], [30, -36]]} />
      <path d="M190 104 L154 146" stroke={RED} strokeWidth={9} strokeLinecap="round" />
      <path d="M190 104 L154 146" stroke={INK} strokeWidth={1.5} strokeDasharray="1 7" />
    </g>
  );
}

function SaferSide() {
  return (
    <g>
      <Road top={150} bottom={196} />
      <rect x={0} y={120} width={340} height={30} fill="#e8d9bd" />
      <path d="M0 120 L340 120" {...ink} />
      <g transform="translate(60 0)">
        <Car x={0} base={182} colour={SKY} width={150} />
      </g>
      <Person x={226} base={146} scale={0.66} shirt={PINK} hands={[[-26, -50], [22, -45]]} />
      <path d="M186 160 Q 196 128 212 118" {...ink} strokeWidth={THIN} markerEnd={HEAD} />
      <Hand x={250} y={112} size={18} grey>la acera</Hand>
    </g>
  );
}

const RULES = [
  {
    Picture: Pavements, colour: SKY,
    en: ['Always walk on the *pavements*,', 'not in the *road*.'],
    es: 'Camina siempre por la acera, no por la calzada.',
  },
  {
    Picture: Crossing, colour: YELLOW,
    en: ['Cross the road at the', '*pedestrian crossings*.'],
    es: 'Cruza por los pasos de peatones.',
  },
  {
    Picture: Lights, colour: PINK,
    en: ['Always *respect* the', '*traffic lights* and *road signs*.'],
    es: 'Respeta los semáforos y las señales.',
  },
  {
    Picture: Protection, colour: MINT,
    en: ['Wear *protection* when riding', 'a *bike* or a *scooter*.'],
    es: 'Lleva protección en bici o en patinete.',
  },
  {
    Picture: Seatbelt, colour: ORANGE,
    en: ['Always wear a *seatbelt*', 'in the car.'],
    es: 'Ponte siempre el cinturón en el coche.',
  },
  {
    Picture: SaferSide, colour: '#c3a6f2',
    en: ['Get out on the *safer side*', 'of the car.'],
    es: 'Baja del coche por el lado de la acera.',
  },
];

const COLUMNS = [30, 430, 830];
const ROWS = [210, 580];

export default function RoadSafetyRules() {
  return (
    <g>
      <SketchDefs id="road-rules" />

      {/* The question */}
      <g {...ink} filter={ROUGH}>
        <ellipse cx={600} cy={84} rx={250} ry={58} fill={YELLOW} />
        <ellipse cx={603} cy={81} rx={256} ry={61} strokeWidth={THIN} />
      </g>
      <Title x={600} y={86} size={44} mid>Road safety rules</Title>
      <Hand x={600} y={118} size={21} mid grey>las normas de seguridad vial</Hand>
      <Hand x={600} y={180} size={26} mid>To avoid road *accidents*: obey the *rules* and respect the *road signs*!</Hand>

      {RULES.map(({
        Picture, colour, en, es,
      }, n) => {
        const [x, y] = [COLUMNS[n % 3], ROWS[Math.floor(n / 3)]];
        return (
          <g key={es}>
            <g {...ink} filter={ROUGH}>
              <rect x={x} y={y} width={340} height={350} rx={20} fill={PAPER} stroke={INK} />
            </g>
            <g transform={`translate(${x} ${y + 8})`}>
              <svg width={340} height={200} viewBox="0 0 340 200" overflow="hidden">
                <g filter={ROUGH}>
                  <Picture />
                </g>
              </svg>
            </g>
            <Marker x={x + 14} y={y + 14} width={36} height={36} colour={colour} tilt={-4} />
            <Title x={x + 32} y={y + 42} size={30} mid>{n + 1}</Title>
            {en.map((line, k) => <Hand key={line} x={x + 170} y={y + 248 + k * 32} size={25} mid>{line}</Hand>)}
            <Hand x={x + 170} y={y + 320} size={18} mid grey>{es}</Hand>
          </g>
        );
      })}
    </g>
  );
}
