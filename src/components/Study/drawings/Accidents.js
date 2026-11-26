// Naturales, tema 2: preventing accidents, as sketches, each 320 × 200. Safe and risky things to do
// at home (the floor at y 180) and outside (a road across), and the protections we wear for sport.
import {
  INK, PENCIL, PAPER, YELLOW, MINT, PINK, SKY, ORANGE, RED, GREEN, BLUE, BROWN, GREY, THIN,
  ink, Person, Car,
} from './sketch';

// A room: a wall and the floor.
function Room({ children }) {
  return (
    <g>
      <rect width={320} height={200} fill="#fdf3e4" />
      <rect y={176} width={320} height={24} fill="#e9d3b4" />
      <path d="M0 176 L320 176" {...ink} strokeWidth={THIN} />
      {children}
    </g>
  );
}

// A street: the sky, a pavement and the road from `top`.
function Street({ top = 110, children }) {
  return (
    <g>
      <rect width={320} height={200} fill="#eaf6ff" />
      <rect y={top - 20} width={320} height={20} fill="#e8d9bd" />
      <rect y={top} width={320} height={200 - top} fill="#9aa3b2" />
      <path d={`M0 ${top - 20} L320 ${top - 20} M0 ${top} L320 ${top}`} {...ink} strokeWidth={THIN} />
      {children}
    </g>
  );
}

// A cooker with a frying pan on it, its handle out to the left.
function Cooker({ x }) {
  return (
    <g {...ink} strokeWidth={2.5}>
      <rect x={x} y={112} width={110} height={64} fill={GREY} />
      <circle cx={x + 20} cy={146} r={6} fill={PAPER} strokeWidth={1.5} />
      <circle cx={x + 40} cy={146} r={6} fill={PAPER} strokeWidth={1.5} />
      <path d={`M${x + 30} 112 Q ${x + 34} 96 ${x + 42} 106 Q ${x + 50} 92 ${x + 58} 106 Q ${x + 66} 94 ${x + 72} 112`} fill={ORANGE} stroke={RED} strokeWidth={2} />
      <path d={`M${x + 22} 86 L${x + 86} 86 L${x + 80} 96 L${x + 28} 96 Z`} fill={INK} />
      <path d={`M${x + 24} 90 L${x - 18} 84`} strokeWidth={5} />
      <path d={`M${x + 44} 78 Q ${x + 38} 68 ${x + 46} 58 M${x + 62} 78 Q ${x + 56} 68 ${x + 64} 58`} strokeWidth={1.5} stroke={PENCIL} />
    </g>
  );
}

// A bicycle with its wheels on `base`, from x to x + 110.
function Bike({ x, base }) {
  return (
    <g {...ink} strokeWidth={3} fill="none">
      <circle cx={x + 18} cy={base - 22} r={22} />
      <circle cx={x + 92} cy={base - 22} r={22} />
      <path d={`M${x + 18} ${base - 22} L${x + 44} ${base - 62} L${x + 82} ${base - 62} L${x + 92} ${base - 22} M${x + 44} ${base - 62} L${x + 56} ${base - 22} L${x + 82} ${base - 62} M${x + 56} ${base - 22} L${x + 18} ${base - 22} M${x + 82} ${base - 62} L${x + 78} ${base - 78} L${x + 92} ${base - 80} M${x + 38} ${base - 68} L${x + 52} ${base - 68}`} stroke={GREEN} />
    </g>
  );
}

// A bike helmet on the head of a Person of the same x, base and scale.
function HelmetOn({
  x, base, scale, colour = BLUE,
}) {
  return (
    <path
      d="M-18 -98 Q -17 -126 0 -126 Q 17 -126 18 -98 Z M-14 -98 L-12 -90 M14 -98 L12 -90"
      transform={`translate(${x} ${base}) scale(${scale})`}
      {...ink}
      strokeWidth={2}
      fill={colour}
    />
  );
}

export function ToysAway() {
  return (
    <Room>
      <g {...ink} strokeWidth={2.5}>
        <rect x={186} y={126} width={84} height={50} fill={BROWN} />
        <circle cx={208} cy={124} r={12} fill={RED} />
        <rect x={230} y={108} width={20} height={20} fill={YELLOW} />
        <rect x={70} y={160} width={16} height={16} fill={SKY} />
      </g>
      <Person x={136} base={180} scale={1.15} shirt={MINT} hands={[[-22, -45], [44, -46]]} />
      <rect x={180} y={116} width={14} height={14} {...ink} strokeWidth={THIN} fill={PINK} />
    </Room>
  );
}

export function Socket() {
  return (
    <Room>
      <g {...ink} strokeWidth={2.5}>
        <rect x={226} y={92} width={36} height={36} rx={6} fill={PAPER} />
        <circle cx={238} cy={110} r={3} fill={INK} />
        <circle cx={250} cy={110} r={3} fill={INK} />
        <path d="M270 84 L280 92 L272 96 L284 104 M262 76 L266 64 M276 128 L290 132" stroke={YELLOW} strokeWidth={4} />
      </g>
      <Person x={160} base={180} scale={1.15} shirt={PINK} mouth="open" hands={[[-22, -45], [60, -62]]} />
    </Room>
  );
}

export function CookerAlone() {
  return (
    <Room>
      <Cooker x={190} />
      <Person x={128} base={180} scale={0.95} shirt={YELLOW} mouth="open" hands={[[-22, -45], [48, -100]]} />
    </Room>
  );
}

export function CookerWithAdult() {
  return (
    <Room>
      <Cooker x={200} />
      <Person x={168} base={180} scale={1.35} shirt={BLUE} hair={INK} hands={[[-22, -45], [40, -72]]} />
      <path d="M222 83 L246 94" {...ink} strokeWidth={3} stroke={BROWN} />
      <Person x={84} base={180} scale={0.85} shirt={ORANGE} hands={[[-22, -45], [22, -45]]} />
    </Room>
  );
}

export function ZebraCrossing() {
  return (
    <Street top={96}>
      {[104, 124, 144, 164, 184].map(y => <rect key={y} x={130} y={y} width={90} height={10} fill={PAPER} />)}
      <Car x={16} base={186} colour={RED} width={80} />
      <g {...ink}>
        <path d="M282 96 L282 30" strokeWidth={4} />
        <rect x={268} y={14} width={28} height={44} rx={5} fill={INK} />
        <circle cx={282} cy={26} r={6} fill="#6b2a2a" stroke="none" />
        <circle cx={282} cy={46} r={6} fill={GREEN} stroke="none" />
      </g>
      <Person x={174} base={170} scale={0.9} shirt={SKY} hands={[[-22, -45], [22, -45]]} />
    </Street>
  );
}

export function BetweenCars() {
  return (
    <Street top={96}>
      <path d="M8 140 L312 140" stroke={PAPER} strokeWidth={3} strokeDasharray="16 12" />
      <Car x={220} base={134} colour={BLUE} width={80} />
      <path d="M306 112 L318 112 M304 122 L316 122" {...ink} strokeWidth={THIN} />
      <Car x={20} base={196} colour={GREEN} width={86} />
      <Car x={150} base={196} colour={ORANGE} width={86} />
      <Person x={128} base={186} scale={0.85} shirt={PINK} mouth="open" hands={[[-30, -60], [30, -60]]} />
    </Street>
  );
}

export function BikeWithHelmet() {
  return (
    <Street top={176}>
      <Bike x={100} base={178} />
      <Person x={150} base={150} scale={0.85} shirt={RED} hands={[[30, -46], [48, -58]]} />
      <HelmetOn x={150} base={150} scale={0.85} />
    </Street>
  );
}

export function BikeWithoutHelmet() {
  return (
    <Street top={176}>
      <Bike x={100} base={178} />
      <Person x={150} base={150} scale={0.85} shirt={YELLOW} mouth="open" hands={[[30, -46], [48, -58]]} />
      <path d="M60 60 L90 60 M50 76 L84 76 M64 92 L92 92" {...ink} strokeWidth={THIN} />
    </Street>
  );
}

// The protections for sport, each with a hint of its sport.
const Plain = ({ children }) => (
  <g>
    <rect width={320} height={200} fill="#f4f8ee" />
    {children}
  </g>
);

export function HelmetPicture() {
  return (
    <Plain>
      <g {...ink} strokeWidth={3}>
        <path d="M70 130 Q 70 40 160 40 Q 250 40 250 130 Z" fill={BLUE} />
        <path d="M110 60 L120 110 M160 48 L160 110 M210 60 L200 110" stroke={PAPER} strokeWidth={6} />
        <path d="M100 130 Q 120 176 160 176 Q 200 176 220 130" fill="none" strokeWidth={THIN} />
        <rect x={150} y={168} width={20} height={12} rx={3} fill={INK} />
      </g>
    </Plain>
  );
}

export function KneePads() {
  const pad = x => (
    <g {...ink} strokeWidth={3}>
      <rect x={x} y={40} width={64} height={110} rx={28} fill={INK} />
      <ellipse cx={x + 32} cy={84} rx={24} ry={30} fill={GREY} />
      <path d={`M${x} 70 L${x + 64} 70 M${x} 124 L${x + 64} 124`} stroke={RED} strokeWidth={6} />
    </g>
  );
  return (
    <Plain>
      {pad(40)}
      {pad(124)}
      <g {...ink} strokeWidth={2.5}>
        <path d="M222 120 L222 80 L250 80 L254 120 L296 128 L296 146 L222 146 Z" fill={PINK} />
        {[236, 262, 286].map(x => <circle key={x} cx={x} cy={160} r={10} fill={YELLOW} />)}
      </g>
    </Plain>
  );
}

export function Goggles() {
  return (
    <Plain>
      <path d="M0 160 Q 40 146 80 160 T 160 160 T 240 160 T 320 160 L320 200 L0 200 Z" fill={SKY} />
      <g {...ink} strokeWidth={3}>
        <path d="M40 96 Q 30 70 70 70 M280 96 Q 290 70 250 70" fill="none" strokeWidth={5} stroke={PINK} />
        <ellipse cx={116} cy={96} rx={52} ry={34} fill="#bfe6ff" />
        <ellipse cx={204} cy={96} rx={52} ry={34} fill="#bfe6ff" />
        <path d="M156 92 Q 160 84 164 92" strokeWidth={4} />
        <path d="M40 96 L64 96 M256 96 L280 96" stroke={PINK} strokeWidth={6} />
        <path d="M94 84 L106 76 M182 84 L194 76" stroke={PAPER} strokeWidth={4} />
      </g>
    </Plain>
  );
}

export function LifeJacket() {
  return (
    <Plain>
      <path d="M0 168 Q 40 154 80 168 T 160 168 T 240 168 T 320 168 L320 200 L0 200 Z" fill={SKY} />
      <g {...ink} strokeWidth={3}>
        <path d="M110 30 L140 30 Q 150 60 160 60 Q 170 60 180 30 L210 30 L226 150 L94 150 Z" fill={ORANGE} />
        <path d="M160 60 L160 150" strokeWidth={THIN} />
        <path d="M98 96 L222 96 M100 124 L220 124" stroke={INK} strokeWidth={5} />
        <rect x={150} y={90} width={20} height={12} rx={2} fill={GREY} strokeWidth={2} />
        <rect x={150} y={118} width={20} height={12} rx={2} fill={GREY} strokeWidth={2} />
      </g>
    </Plain>
  );
}

export function ShinPads() {
  const pad = x => (
    <g {...ink} strokeWidth={3}>
      <path d={`M${x} 30 Q ${x + 30} 20 ${x + 60} 30 L${x + 54} 160 Q ${x + 30} 170 ${x + 6} 160 Z`} fill={MINT} />
      <path d={`M${x + 16} 60 L${x + 44} 60 M${x + 16} 90 L${x + 44} 90 M${x + 16} 120 L${x + 44} 120`} strokeWidth={THIN} />
    </g>
  );
  return (
    <Plain>
      {pad(46)}
      {pad(130)}
      <g {...ink} strokeWidth={2.5}>
        <circle cx={252} cy={140} r={36} fill={PAPER} />
        <path d="M252 122 L268 134 L262 152 L242 152 L236 134 Z" fill={INK} />
        <path d="M252 122 L252 104 M268 134 L286 128 M262 152 L272 168 M242 152 L232 168 M236 134 L218 128" strokeWidth={THIN} />
      </g>
    </Plain>
  );
}
