// English, class notes: the verb to be, from Julia's notebook (11-11-26), drawn as a sketchnote
// with the Spanish in grey. 1200 × 1040: the rainbow title in a green cloud, then a row for each
// person, a little drawing, the person (its first letter in red, as in the notebook), the verb on
// a pill coloured by the verb (am, is, are) and the Spanish. One person or thing first, then two or
// more; on the right, which verb goes with whom.
import {
  INK, PAPER, YELLOW, MINT, PINK, SKY, ORANGE, RED, GREEN, BLUE, BROWN, PENCIL, THIN,
  ink, Title, Hand, SketchDefs, Person, Dog,
} from './sketch';

const ROUGH = 'url(#verb-to-be-rough)';
const HEAD = 'url(#verb-to-be-head)';
const PURPLE = '#9b6fd6';

// The colour of each verb's pill.
const VERBS = { am: PINK, is: SKY, are: MINT };

// Each letter's colour, and the space before it.
const TITLE = [['V', PURPLE], ['E', BLUE], ['R', BLUE], ['B', PURPLE], ['T', GREEN, 34], ['O', '#e6b800'], ['B', BROWN, 34], ['E', GREEN]];

// Long hair, drawn behind a Person of the same x, base and scale.
function LongHair({ x, base, scale }) {
  return (
    <path
      d="M-16 -98 Q -22 -72 -15 -64 L15 -64 Q 22 -72 16 -98 Z"
      transform={`translate(${x} ${base}) scale(${scale})`}
      {...ink}
      strokeWidth={1.5}
      fill={BROWN}
    />
  );
}

// An arrow pointing at someone: the one you are talking to.
const Pointer = ({ from, to }) => <path d={`M${from} Q ${to}`} {...ink} strokeWidth={THIN} markerEnd={HEAD} />;

const S = 0.56; // the people's size

const ROWS = [
  {
    who: 'I', verb: 'am', es: 'yo soy / estoy',
    Icon: ({ x, base }) => (
      <g>
        <Person x={x} base={base} scale={S} shirt={YELLOW} hands={[[-22, -45], [6, -60]]} />
        <path d={`M${x + 46} ${base - 66} Q ${x + 40} ${base - 30} ${x + 14} ${base - 36}`} {...ink} strokeWidth={THIN} markerEnd={HEAD} />
        <Hand x={x + 52} y={base - 64} size={17} grey>me</Hand>
      </g>
    ),
  },
  {
    who: 'You', verb: 'are', es: 'tú eres / estás',
    Icon: ({ x, base }) => (
      <g>
        <Pointer from={`${x - 52} ${base - 44}`} to={`${x - 36} ${base - 62} ${x - 16} ${base - 46}`} />
        <Person x={x} base={base} scale={S} shirt={ORANGE} />
      </g>
    ),
  },
  {
    who: 'He', verb: 'is', es: 'él es / está',
    Icon: ({ x, base }) => <Person x={x} base={base} scale={S} shirt={BLUE} />,
  },
  {
    who: 'She', verb: 'is', es: 'ella es / está',
    Icon: ({ x, base }) => (
      <g>
        <LongHair x={x} base={base} scale={S} />
        <Person x={x} base={base} scale={S} shirt={PINK} />
      </g>
    ),
  },
  {
    who: 'It', verb: 'is', es: 'es / está (una cosa, un animal)',
    Icon: ({ x, base }) => (
      <g>
        <Dog x={x - 10} base={base} />
        <circle cx={x + 34} cy={base - 7} r={7} fill={RED} {...ink} strokeWidth={THIN} />
      </g>
    ),
  },
  {
    who: 'We', verb: 'are', es: 'nosotros somos / estamos',
    Icon: ({ x, base }) => (
      <g>
        <Person x={x - 18} base={base} scale={S} shirt={YELLOW} hands={[[-22, -45], [30, -48]]} />
        <Person x={x + 18} base={base} scale={S} shirt={GREEN} hands={[[-30, -48], [22, -45]]} />
      </g>
    ),
  },
  {
    who: 'You', verb: 'are', es: 'vosotros sois / estáis',
    Icon: ({ x, base }) => (
      <g>
        <Pointer from={`${x - 62} ${base - 44}`} to={`${x - 48} ${base - 62} ${x - 34} ${base - 46}`} />
        <Person x={x - 14} base={base} scale={S} shirt={ORANGE} />
        <LongHair x={x + 22} base={base} scale={S} />
        <Person x={x + 22} base={base} scale={S} shirt={SKY} />
      </g>
    ),
  },
  {
    who: 'They', verb: 'are', es: 'ellos son / están',
    Icon: ({ x, base }) => (
      <g>
        <Person x={x - 30} base={base} scale={S * 0.9} shirt={PINK} hair={INK} />
        <LongHair x={x} base={base} scale={S * 0.9} />
        <Person x={x} base={base} scale={S * 0.9} shirt={MINT} />
        <Person x={x + 30} base={base} scale={S * 0.9} shirt={BLUE} />
      </g>
    ),
  },
];

const SINGULAR = 5; // the first rows are one person or thing
const rowY = index => 304 + index * 84 + (index >= SINGULAR ? 34 : 0); // the middle of each row

// A curly bracket down the left of some rows, with what they are.
function Bracket({
  top, bottom, label, es,
}) {
  const mid = (top + bottom) / 2;
  return (
    <g>
      <path d={`M112 ${top} Q 96 ${top} 96 ${top + 16} L96 ${mid - 12} Q 96 ${mid} 82 ${mid} Q 96 ${mid} 96 ${mid + 12} L96 ${bottom - 16} Q 96 ${bottom} 112 ${bottom}`} {...ink} strokeWidth={THIN} filter={ROUGH} />
      <g transform={`rotate(-90 52 ${mid})`}>
        <Hand x={52} y={mid} size={24} mid>{label}</Hand>
        <Hand x={52} y={mid + 24} size={17} mid grey>{es}</Hand>
      </g>
    </g>
  );
}

function Pill({
  x, y, verb, width = 110, size = 40,
}) {
  return (
    <g>
      <rect x={x} y={y - 30} width={width} height={50} rx={22} fill={VERBS[verb]} stroke={INK} strokeWidth={2.5} filter={ROUGH} />
      <Title x={x + width / 2} y={y + 6} size={size} mid>{verb}</Title>
    </g>
  );
}

// The title in a wavy cloud, as in the notebook.
function Cloud() {
  const [x0, x1, y0, y1] = [300, 900, 112, 212];
  const bumps = [];
  for (let x = x0; x < x1; x += 40) bumps.push(`Q ${x + 20} ${y0 - 14} ${x + 40} ${y0}`);
  const right = `Q ${x1 + 18} ${y0 + 24} ${x1} ${(y0 + y1) / 2} Q ${x1 + 18} ${y1 - 24} ${x1} ${y1}`;
  const under = [];
  for (let x = x1; x > x0; x -= 40) under.push(`Q ${x - 20} ${y1 + 14} ${x - 40} ${y1}`);
  const left = `Q ${x0 - 18} ${y1 - 24} ${x0} ${(y0 + y1) / 2} Q ${x0 - 18} ${y0 + 24} ${x0} ${y0}`;
  return (
    <path d={`M${x0} ${y0} ${bumps.join(' ')} ${right} ${under.join(' ')} ${left} Z`} fill="#e9f8ef" stroke={GREEN} strokeWidth={3} filter={ROUGH} />
  );
}

export default function VerbToBeSheet() {
  return (
    <g>
      <SketchDefs id="verb-to-be" />

      {/* The top of the page, as in the notebook */}
      <Hand x={60} y={56} size={24} grey>Class notes</Hand>
      <Hand x={1050} y={56} size={24} grey>11-11-26</Hand>
      <Title x={600} y={78} size={38} mid>
        <tspan fill={RED}>E</tspan>
        nglish
      </Title>
      <path d="M548 88 L656 88" {...ink} strokeWidth={THIN} />

      <Cloud />
      <Title x={600} y={184} size={72} mid>
        {TITLE.map(([letter, colour, space], n) => (
          <tspan key={`${letter}${n}`} fill={colour} dx={space}>{letter}</tspan>
        ))}
      </Title>
      <Hand x={600} y={244} size={22} mid grey>el verbo ser o estar</Hand>

      <Bracket top={rowY(0) - 36} bottom={rowY(SINGULAR - 1) + 36} label="one" es="uno" />
      <Bracket top={rowY(SINGULAR) - 36} bottom={rowY(ROWS.length - 1) + 36} label="two or more" es="dos o más" />
      <path d={`M120 ${rowY(SINGULAR) - 59} L900 ${rowY(SINGULAR) - 59}`} {...ink} strokeWidth={THIN} strokeDasharray="3 10" />

      {ROWS.map(({
        who, verb, es, Icon,
      }, index) => {
        const y = rowY(index);
        return (
          <g key={`${who}-${es}`}>
            <Icon x={210} base={y + 32} />
            <Title x={300} y={y + 14} size={50}>
              <tspan fill={RED}>{who[0]}</tspan>
              {who.slice(1)}
            </Title>
            <Pill x={448} y={y} verb={verb} />
            <Hand x={586} y={y + 8} size={23} grey>{es}</Hand>
          </g>
        );
      })}

      {/* Which verb goes with whom */}
      <g {...ink} filter={ROUGH}>
        <rect x={930} y={336} width={236} height={500} rx={18} fill={PAPER} strokeWidth={THIN} strokeDasharray="8 6" />
      </g>
      <Title x={1048} y={382} size={34} mid>Which one?</Title>
      <Hand x={1048} y={408} size={18} mid grey>¿cuál va?</Hand>
      <Pill x={993} y={466} verb="am" />
      <Title x={1048} y={536} size={34} mid>I</Title>
      <Pill x={993} y={604} verb="is" />
      <Title x={1048} y={672} size={30} mid>he · she · it</Title>
      <Pill x={993} y={740} verb="are" />
      <Title x={1048} y={808} size={28} mid>you · we · they</Title>

      <Hand x={600} y={rowY(ROWS.length - 1) + 92} size={22} mid>
        <tspan fill={PENCIL}>Say it out loud: </tspan>
        I am, you are, he is, she is, it is, we are, you are, they are!
      </Hand>
    </g>
  );
}
