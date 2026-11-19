// English, unit 2 (My dream house): a sketchnote of There is / There are, with the Spanish in grey.
// 1200 × 920: a column for one thing and one for two or more, and a row each for saying it is
// there (+), saying it isn't (−) and asking (?), with the short answers. Things from the house.
import {
  INK, PAPER, YELLOW, MINT, PINK, SKY, ORANGE, RED, GREEN, BROWN, GREY, THIN,
  ink, Title, Hand, Marker, SketchDefs,
} from './sketch';

const ROUGH = 'url(#there-is-rough)';
const HEAD = 'url(#there-is-head)';

const LEFT = 175; // where each column starts
const RIGHT = 700;
const ROWS = [262, 462, 662]; // where each row starts

function Sofa({ x, y }) {
  return (
    <g {...ink} filter={ROUGH}>
      <rect x={x + 14} y={y} width={112} height={44} rx={10} fill={PINK} />
      <rect x={x + 14} y={y + 38} width={112} height={26} rx={6} fill={PINK} />
      <rect x={x} y={y + 22} width={22} height={46} rx={8} fill={PINK} />
      <rect x={x + 118} y={y + 22} width={22} height={46} rx={8} fill={PINK} />
      <path d={`M${x + 8} ${y + 68} L${x + 8} ${y + 78} M${x + 132} ${y + 68} L${x + 132} ${y + 78}`} />
    </g>
  );
}

function Bed({ x, y, colour }) {
  return (
    <g {...ink} filter={ROUGH}>
      <rect x={x} y={y} width={14} height={62} rx={4} fill={BROWN} />
      <rect x={x + 10} y={y + 26} width={62} height={24} rx={4} fill={PAPER} />
      <rect x={x + 30} y={y + 22} width={42} height={28} rx={4} fill={colour} />
      <ellipse cx={x + 21} cy={y + 24} rx={9} ry={6} fill={PAPER} strokeWidth={THIN} />
      <path d={`M${x + 70} ${y + 50} L${x + 70} ${y + 62}`} />
    </g>
  );
}

function Cross({ x, y, size = 46 }) {
  return <path d={`M${x - size / 2} ${y - size / 2} L${x + size / 2} ${y + size / 2} M${x + size / 2} ${y - size / 2} L${x - size / 2} ${y + size / 2}`} {...ink} stroke={RED} strokeWidth={6} />;
}

function NoGarage({ x, y }) {
  return (
    <g>
      <g {...ink} filter={ROUGH} strokeDasharray="6 8" stroke={GREY}>
        <path d={`M${x} ${y + 80} L${x} ${y + 26} L${x + 70} ${y} L${x + 140} ${y + 26} L${x + 140} ${y + 80}`} />
        <path d={`M${x + 28} ${y + 80} L${x + 28} ${y + 42} L${x + 112} ${y + 42} L${x + 112} ${y + 80}`} />
      </g>
      <Cross x={x + 70} y={y + 46} size={64} />
    </g>
  );
}

function NoWindows({ x, y }) {
  return (
    <g>
      <g {...ink} filter={ROUGH}>
        <rect x={x} y={y} width={140} height={84} fill={ORANGE} />
      </g>
      <g {...ink} strokeDasharray="5 7" strokeWidth={THIN}>
        <rect x={x + 18} y={y + 20} width={38} height={38} fill="none" />
        <rect x={x + 84} y={y + 20} width={38} height={38} fill="none" />
      </g>
      <Cross x={x + 70} y={y + 40} size={58} />
    </g>
  );
}

function Garden({ x, y }) {
  return (
    <g>
      <g {...ink} filter={ROUGH}>
        <path d={`M${x} ${y + 84} L${x + 110} ${y + 84}`} />
        <path d={`M${x + 34} ${y + 84} L${x + 34} ${y + 46}`} />
        <circle cx={x + 34} cy={y + 30} r={26} fill={MINT} />
        <path d={`M${x + 80} ${y + 84} L${x + 80} ${y + 60}`} strokeWidth={THIN} />
        <circle cx={x + 80} cy={y + 54} r={8} fill={YELLOW} strokeWidth={THIN} />
      </g>
      <Title x={x + 138} y={y + 70} size={64} mid>?</Title>
    </g>
  );
}

function Bath({ x, y, colour }) {
  return (
    <g {...ink} filter={ROUGH}>
      <path d={`M${x} ${y + 20} L${x + 62} ${y + 20} Q ${x + 60} ${y + 50} ${x + 31} ${y + 50} Q ${x + 2} ${y + 50} ${x} ${y + 20} Z`} fill={colour} />
      <path d={`M${x + 10} ${y + 20} L${x + 10} ${y} L${x + 20} ${y}`} strokeWidth={THIN} />
      <path d={`M${x + 12} ${y + 50} L${x + 8} ${y + 58} M${x + 50} ${y + 50} L${x + 54} ${y + 58}`} strokeWidth={THIN} />
    </g>
  );
}

// A short answer, in a pill with a tick or a cross.
function Answer({
  x, y, yes, children,
}) {
  const width = 218;
  return (
    <g>
      <rect x={x} y={y} width={width} height={40} rx={20} fill={yes ? MINT : PINK} stroke={INK} strokeWidth={2.5} />
      {yes
        ? <path d={`M${x + 14} ${y + 21} L${x + 22} ${y + 29} L${x + 34} ${y + 12}`} {...ink} stroke={GREEN} strokeWidth={4} />
        : <path d={`M${x + 16} ${y + 12} L${x + 32} ${y + 28} M${x + 32} ${y + 12} L${x + 16} ${y + 28}`} {...ink} stroke={RED} strokeWidth={4} />}
      <Hand x={x + 44} y={y + 28} size={23}>{children}</Hand>
    </g>
  );
}

// A sentence in two lines, the first (the There is part) highlighted, with a note and the Spanish.
function Sentence({
  x, y, first, second, colour, note, es,
}) {
  return (
    <g>
      <Marker x={x - 6} y={y - 30} width={first.length * 17 + 14} height={38} colour={colour} tilt={-1} />
      <Title x={x} y={y} size={42}>{first}</Title>
      <Title x={x} y={y + 42} size={42}>{second}</Title>
      {note && <Hand x={x} y={y + 76} size={22}>{note}</Hand>}
      <Hand x={x} y={y + (note ? 102 : 76)} size={21} grey>{es}</Hand>
    </g>
  );
}

function Badge({ y, kind }) {
  const cx = 88;
  const fills = { yes: MINT, no: PINK, ask: YELLOW };
  return (
    <g>
      <g {...ink} filter={ROUGH}>
        <circle cx={cx} cy={y} r={34} fill={fills[kind]} />
      </g>
      {kind === 'yes' && <path d={`M${cx - 15} ${y + 1} L${cx - 4} ${y + 13} L${cx + 16} ${y - 12}`} {...ink} stroke={GREEN} strokeWidth={6} />}
      {kind === 'no' && <path d={`M${cx - 13} ${y - 13} L${cx + 13} ${y + 13} M${cx + 13} ${y - 13} L${cx - 13} ${y + 13}`} {...ink} stroke={RED} strokeWidth={6} />}
      {kind === 'ask' && <Title x={cx} y={y + 17} size={50} mid>?</Title>}
    </g>
  );
}

export default function ThereIsThereAreMap() {
  return (
    <g>
      <SketchDefs id="there-is" />

      {/* The title */}
      <g {...ink} filter={ROUGH}>
        <ellipse cx={600} cy={78} rx={230} ry={56} fill={YELLOW} />
        <ellipse cx={603} cy={75} rx={236} ry={59} strokeWidth={THIN} />
      </g>
      <Title x={600} y={84} size={46} mid>There is · There are</Title>
      <Hand x={600} y={116} size={22} mid grey>hay</Hand>
      <g {...ink} filter={ROUGH} markerEnd={HEAD}>
        <path d="M420 112 Q 400 138 404 160" />
        <path d="M780 112 Q 820 138 870 160" />
      </g>

      {/* The columns */}
      <Marker x={300} y={172} width={176} colour={MINT} tilt={-1.5} height={34} />
      <Title x={306} y={202} size={42}>One thing</Title>
      <g {...ink} filter={ROUGH}>
        <circle cx={520} cy={192} r={24} fill={PAPER} />
      </g>
      <Title x={520} y={206} size={38} mid>1</Title>
      <Hand x={306} y={234} size={21} grey>una cosa · a, an</Hand>

      <Marker x={800} y={172} width={200} colour={PINK} tilt={1.2} height={34} />
      <Title x={806} y={202} size={42}>Two or more</Title>
      <Hand x={1020} y={200} size={28}>2, 3, 4…</Hand>
      <Hand x={806} y={234} size={21} grey>dos o más</Hand>

      {/* The grid */}
      <g {...ink} strokeDasharray="3 10" strokeWidth={THIN}>
        <path d="M680 168 L680 910" />
        <path d="M160 250 L160 910" />
        <path d="M40 252 L1170 252 M40 452 L1170 452 M40 652 L1170 652" />
      </g>

      {/* + */}
      <Badge y={ROWS[0] + 72} kind="yes" />
      <Hand x={88} y={ROWS[0] + 138} size={21} mid grey>hay</Hand>
      <Sentence x={LEFT + 12} y={ROWS[0] + 58} first="There is" second="a sofa." colour={MINT} note="There’s = There is" es="Hay un sofá." />
      <Sofa x={LEFT + 300} y={ROWS[0] + 60} />
      <Sentence x={RIGHT + 12} y={ROWS[0] + 58} first="There are" second="two beds." colour={PINK} es="Hay dos camas." />
      <Bed x={RIGHT + 280} y={ROWS[0] + 64} colour={SKY} />
      <Bed x={RIGHT + 370} y={ROWS[0] + 64} colour={MINT} />

      {/* − */}
      <Badge y={ROWS[1] + 72} kind="no" />
      <Hand x={88} y={ROWS[1] + 138} size={21} mid grey>no hay</Hand>
      <Sentence x={LEFT + 12} y={ROWS[1] + 58} first="There isn’t" second="a garage." colour={MINT} note="isn’t = is not" es="No hay garaje." />
      <NoGarage x={LEFT + 316} y={ROWS[1] + 50} />
      <Sentence x={RIGHT + 12} y={ROWS[1] + 58} first="There aren’t" second="any windows." colour={PINK} note="aren’t = are not" es="No hay ventanas." />
      <NoWindows x={RIGHT + 316} y={ROWS[1] + 50} />

      {/* ? */}
      <Badge y={ROWS[2] + 64} kind="ask" />
      <Hand x={88} y={ROWS[2] + 128} size={21} mid grey>¿hay…?</Hand>
      <Hand x={88} y={ROWS[2] + 170} size={19} mid>There is</Hand>
      <path d={`M88 ${ROWS[2] + 180} L88 ${ROWS[2] + 204}`} {...ink} strokeWidth={THIN} markerEnd={HEAD} />
      <Hand x={88} y={ROWS[2] + 228} size={19} mid>Is there…?</Hand>
      <Sentence x={LEFT + 12} y={ROWS[2] + 52} first="Is there" second="a garden?" colour={MINT} es="¿Hay jardín?" />
      <Garden x={LEFT + 290} y={ROWS[2] + 4} />
      <Answer x={LEFT + 12} y={ROWS[2] + 146} yes>Yes, there is.</Answer>
      <Answer x={LEFT + 244} y={ROWS[2] + 146}>No, there isn’t.</Answer>
      <Hand x={LEFT + 12} y={ROWS[2] + 214} size={20} grey>Sí, hay. · No, no hay.</Hand>

      <Sentence x={RIGHT + 12} y={ROWS[2] + 52} first="Are there" second="two bathrooms?" colour={PINK} es="¿Hay dos baños?" />
      <Bath x={RIGHT + 300} y={ROWS[2] + 26} colour={SKY} />
      <Bath x={RIGHT + 376} y={ROWS[2] + 26} colour={MINT} />
      <Title x={RIGHT + 452} y={ROWS[2] + 74} size={52} mid>?</Title>
      <Answer x={RIGHT + 12} y={ROWS[2] + 146} yes>Yes, there are.</Answer>
      <Answer x={RIGHT + 244} y={ROWS[2] + 146}>No, there aren’t.</Answer>
      <Hand x={RIGHT + 12} y={ROWS[2] + 214} size={20} grey>Sí, hay. · No, no hay.</Hand>
    </g>
  );
}
