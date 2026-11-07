// What the food gives us, for Naturales, as a concept map in a 1000 × 640 box: food is made of
// nutrients, which give us matter to grow and energy to do things. The four words are left out,
// for their boxes: food at (500, 130), nutrients at (500, 280), matter at (200, 400) and energy at
// (800, 400).

const INK = '#24324a';
const LINE = '#7a8aa3';

const say = {
  textAnchor: 'middle', fontSize: 26, fontWeight: 600, fill: INK, fontFamily: 'inherit',
};

function Arrow({ x, y1, y2 }) {
  return (
    <g stroke={LINE} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d={`M${x},${y1} L${x},${y2}`} />
      <path d={`M${x - 10},${y2 - 12} L${x},${y2} L${x + 10},${y2 - 12}`} />
    </g>
  );
}

// A plate of food: an apple, bread, a fish and broccoli.
function Food() {
  return (
    <g>
      <ellipse cx={500} cy={78} rx={150} ry={16} fill="#e9e1d0" />
      <circle cx={410} cy={52} r={22} fill="#e5484d" />
      <path d="M410,32 q4,-10 12,-12" stroke="#6b4f2a" strokeWidth={4} fill="none" strokeLinecap="round" />
      <ellipse cx={470} cy={56} rx={34} ry={20} fill="#d9a35c" />
      <path d="M452,50 l6,12 M468,46 l6,12 M484,48 l6,12" stroke="#b07a3a" strokeWidth={3} strokeLinecap="round" />
      <path d="M520,58 q30,-24 60,0 q-30,24 -60,0 Z" fill="#8ec5f2" />
      <path d="M580,58 l16,-12 l0,24 Z" fill="#8ec5f2" />
      <circle cx={536} cy={54} r={3} fill={INK} />
      <rect x={612} y={50} width={8} height={22} rx={3} fill="#6aa84f" />
      <circle cx={606} cy={44} r={12} fill="#4e9a3a" />
      <circle cx={626} cy={42} r={12} fill="#4e9a3a" />
      <circle cx={616} cy={32} r={12} fill="#5bb046" />
    </g>
  );
}

// A measuring stick with marks, and an arrow going up: growing.
function Growing() {
  return (
    <g>
      <rect x={168} y={556} width={26} height={80} rx={5} fill="#8ec5f2" />
      {[572, 588, 604, 620].map(y => <path key={y} d={`M168,${y} h10`} stroke="#fff" strokeWidth={3} />)}
      <g stroke="#4caf50" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M222,632 L222,562" />
        <path d="M209,576 L222,562 L235,576" />
      </g>
    </g>
  );
}

// A flash of lightning: energy.
function Energy() {
  return <path d="M806,558 L782,604 L800,604 L788,636 L828,592 L808,592 L824,558 Z" fill="#f7c948" stroke="#c99a1c" strokeWidth={4} strokeLinejoin="round" />;
}

export function Nutrients() {
  return (
    <g>
      <Food />
      <text x={500} y={207} {...say}>están formados por</text>
      <Arrow x={500} y1={218} y2={244} />
      <text x={500} y={347} {...say}>que nos proporcionan</text>
      <g stroke={LINE} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M500,360 L500,400 M300,400 L700,400" />
        <path d="M312,390 L298,400 L312,410 M688,390 L702,400 L688,410" />
      </g>
      <Arrow x={200} y1={438} y2={470} />
      <Arrow x={800} y1={438} y2={470} />
      <text x={200} y={508} {...say}>que nos ayuda</text>
      <text x={200} y={540} {...say}>a crecer</text>
      <text x={800} y={508} {...say}>para realizar</text>
      <text x={800} y={540} {...say}>nuestras actividades</text>
      <Growing />
      <Energy />
    </g>
  );
}
