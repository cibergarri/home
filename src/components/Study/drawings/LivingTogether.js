// Social Science, unit 2, pages 26–27: a little sketch of each thing on the rules for living
// together cards, shown in the 🇪🇸 bubble beside the card. Each is 300 × 200, with the ground at
// y 172. They show what happens and leave it to Julia to say whether it is good or bad.
import {
  INK, PAPER, YELLOW, MINT, PINK, SKY, ORANGE, RED, GREEN, BLUE, BROWN, GREY, SKIN, THIN,
  ink, Person, Dog,
} from './sketch';

const Ground = () => <path d="M12 172 L288 172" {...ink} />;

function Paper({ x, y }) {
  return <path d={`M${x - 6} ${y - 4} L${x + 1} ${y - 7} L${x + 7} ${y - 2} L${x + 4} ${y + 6} L${x - 5} ${y + 5} Z`} {...ink} strokeWidth={THIN} fill={PAPER} />;
}

function SwingFrame({ broken = false }) {
  return (
    <g {...ink}>
      <path d="M50 40 L210 40 M60 40 L40 172 M60 40 L80 172 M200 40 L180 172 M200 40 L220 172" />
      {broken ? (
        <>
          <path d="M112 40 L112 82" strokeWidth={THIN} />
          <path d="M106 86 L112 82 L117 88 M112 82 L108 76" strokeWidth={THIN} />
          <path d="M148 40 L148 124" strokeWidth={THIN} />
          <rect x={92} y={120} width={56} height={9} fill={ORANGE} transform="rotate(48 148 124)" />
          <path d="M122 168 L128 162 L134 168 M140 170 L146 164" strokeWidth={THIN} />
        </>
      ) : (
        <>
          <path d="M112 40 L112 124 M148 40 L148 124" strokeWidth={THIN} />
          <rect x={102} y={122} width={56} height={9} fill={ORANGE} />
        </>
      )}
    </g>
  );
}

function Bins() {
  return (
    <g>
      <Ground />
      <g {...ink}>
        <path d="M188 122 L232 122 L227 172 L193 172 Z" fill={GREEN} />
        <rect x={183} y={113} width={54} height={9} rx={3} fill={MINT} />
        <path d="M200 96 L200 104 M212 92 L212 100" strokeWidth={THIN} strokeDasharray="2 4" />
      </g>
      <Paper x={206} y={106} />
      <Person x={120} base={172} shirt={SKY} hands={[[-22, -45], [62, -80]]} />
    </g>
  );
}

function Separate() {
  const containers = [
    { x: 30, colour: YELLOW }, { x: 120, colour: BLUE }, { x: 210, colour: GREEN },
  ];
  return (
    <g>
      <Ground />
      <g {...ink}>
        {containers.map(({ x, colour }) => (
          <g key={x}>
            <rect x={x} y={100} width={60} height={72} rx={9} fill={colour} />
            <rect x={x + 14} y={110} width={32} height={7} rx={3} fill={INK} />
          </g>
        ))}
        <rect x={51} y={50} width={18} height={26} rx={3} fill={GREY} />
        <ellipse cx={60} cy={50} rx={9} ry={3} fill={GREY} strokeWidth={THIN} />
        <rect x={134} y={54} width={32} height={22} fill={ORANGE} />
        <path d="M134 54 L126 46 M166 54 L174 46" strokeWidth={THIN} />
        <path d="M232 78 L232 60 Q 232 54 237 52 L237 42 L243 42 L243 52 Q 248 54 248 60 L248 78 Z" fill={MINT} />
        <path d="M60 82 L60 96 M150 82 L150 96 M240 84 L240 96" strokeWidth={THIN} strokeDasharray="3 4" />
      </g>
    </g>
  );
}

function Lead() {
  return (
    <g>
      <Ground />
      <path d="M124 120 Q 170 150 214 132" {...ink} strokeWidth={THIN} stroke={RED} />
      <Person x={90} base={172} shirt={PINK} hands={[[-22, -45], [34, -52]]} />
      <Dog x={196} base={172} />
    </g>
  );
}

function CleanUp() {
  return (
    <g>
      <Ground />
      <Dog x={72} base={172} colour={GREY} />
      <path d="M150 170 Q 152 160 158 162 Q 162 156 166 162 Q 172 162 170 170 Z" {...ink} strokeWidth={THIN} fill={BROWN} />
      <Person x={208} base={172} shirt={GREEN} hands={[[-48, -30], [20, -46]]} />
      <path d="M152 150 L170 150 L168 132 L156 132 Z" {...ink} strokeWidth={THIN} fill={SKY} />
    </g>
  );
}

function LookAfter() {
  return (
    <g>
      <Ground />
      <SwingFrame />
      <path d="M130 84 C 120 70 104 84 130 102 C 156 84 140 70 130 84 Z" {...ink} strokeWidth={THIN} fill={PINK} />
      <Person x={255} base={172} scale={0.8} shirt={YELLOW} hands={[[-40, -62], [22, -45]]} />
    </g>
  );
}

function Seat() {
  return (
    <g>
      <Ground />
      <g {...ink}>
        <rect x={20} y={28} width={120} height={48} rx={8} fill={SKY} />
        <path d="M80 28 L80 76" strokeWidth={THIN} />
        <rect x={102} y={92} width={14} height={50} rx={4} fill={RED} />
        <rect x={50} y={128} width={66} height={12} rx={4} fill={RED} />
        <path d="M82 140 L82 172" />
      </g>
      <Person x={160} base={172} scale={0.75} shirt={ORANGE} hands={[[-62, -66], [20, -45]]} />
      <Person x={238} base={172} shirt={MINT} hair={GREY} hands={[[-22, -45], [24, -48]]} />
      <path d="M256 136 L262 172" {...ink} stroke={BROWN} />
    </g>
  );
}

function Litter() {
  return (
    <g>
      <Ground />
      <Person x={100} base={172} shirt={ORANGE} hands={[[-22, -45], [40, -54]]} />
      <Paper x={150} y={136} />
      <path d="M144 124 L146 130 M156 126 L154 131" {...ink} strokeWidth={THIN} />
      <Paper x={190} y={166} />
      <Paper x={226} y={168} />
      <g {...ink} strokeWidth={THIN}>
        <rect x={250} y={158} width={22} height={12} rx={4} fill={GREY} transform="rotate(-12 261 164)" />
      </g>
    </g>
  );
}

function Walls() {
  const bricks = [];
  for (let row = 0; row < 8; row += 1) {
    const y = 40 + row * 16.5;
    bricks.push(<path key={`r${row}`} d={`M150 ${y} L288 ${y}`} />);
    for (let x = 150 + (row % 2 ? 17 : 0); x < 288; x += 34) {
      bricks.push(<path key={`b${row}-${x}`} d={`M${x} ${y} L${x} ${y + 16.5}`} />);
    }
  }
  return (
    <g>
      <Ground />
      <g {...ink} strokeWidth={1.5}>
        <rect x={150} y={40} width={138} height={132} fill={ORANGE} strokeWidth={3} />
        {bricks}
      </g>
      <path d="M170 80 Q 190 50 210 82 T 250 80 Q 270 60 276 92 M178 120 Q 200 100 214 130 Q 236 104 262 132" {...ink} stroke={PINK} strokeWidth={6} />
      <path d="M190 146 L260 140" {...ink} stroke={BLUE} strokeWidth={6} />
      <Person x={84} base={172} shirt={GREY} hands={[[-22, -45], [42, -84]]} />
      <rect x={122} y={78} width={10} height={20} rx={2} {...ink} strokeWidth={THIN} fill={RED} />
      <path d="M136 82 L144 78 M137 88 L146 88 M136 94 L144 98" {...ink} strokeWidth={THIN} strokeDasharray="1 4" />
    </g>
  );
}

function Shout() {
  return (
    <g>
      <Ground />
      <g {...ink}>
        <circle cx={46} cy={36} r={16} fill={YELLOW} />
        <circle cx={54} cy={30} r={14} fill={PAPER} strokeWidth={0} />
        <path d="M110 24 L110 32 M106 28 L114 28 M150 44 L150 50 M147 47 L153 47" strokeWidth={THIN} />
        <rect x={180} y={70} width={100} height={102} fill={SKY} />
        <path d="M172 72 L230 34 L288 72 Z" fill={RED} />
        <rect x={208} y={92} width={42} height={36} fill={YELLOW} />
        <circle cx={229} cy={116} r={9} fill={SKIN} strokeWidth={THIN} />
        <path d="M224 118 Q 229 114 234 118" strokeWidth={1.5} />
      </g>
      <Person x={88} base={172} shirt={PINK} mouth="open" hands={[[-30, -100], [30, -100]]} />
      <path d="M110 64 Q 118 74 110 84 M120 58 Q 132 74 120 90 M130 52 Q 146 74 130 96" {...ink} strokeWidth={THIN} />
    </g>
  );
}

function Break() {
  return (
    <g>
      <Ground />
      <SwingFrame broken />
    </g>
  );
}

// By the card each one is for.
export const RULES = {
  bins: Bins,
  separate: Separate,
  lead: Lead,
  cleanUp: CleanUp,
  lookAfter: LookAfter,
  seat: Seat,
  litter: Litter,
  walls: Walls,
  shout: Shout,
  break: Break,
};
