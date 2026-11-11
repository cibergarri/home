// Social Science, unit 2: a street map, a drawing of a neighbourhood from above (as in the
// workbook's "Read a street map"). 1000 × 640, with three streets down (Green Street, Sun Street,
// Book Street) and two across (Doctors Street at y 190–250, Peace Avenue at y 430–490), so the
// boxes to fill in can sit on the streets across without covering a place. The places to name
// have no sign with their name; a bakery, a library, a circus and a church are there too.

const STREET = '#f4f1ea';
const BLOCK = '#ddd6c8';
const EDGE = '#b9b0a0';

function Block({
  x, y, width, height, fill = BLOCK,
}) {
  return <rect x={x + 6} y={y + 6} width={width - 12} height={height - 12} rx={10} fill={fill} stroke={EDGE} strokeWidth={2} />;
}

function Tree({ x, y, r = 16 }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#3f8f3a" />
      <circle cx={x - r / 3} cy={y - r / 3} r={r / 3} fill="#5aab4d" />
    </g>
  );
}

function Bench({ x, y }) {
  return <rect x={x - 16} y={y - 5} width={32} height={10} rx={3} fill="#8a5a3a" />;
}

function StreetName({
  x, y, text, down = false,
}) {
  return (
    <text
      x={x}
      y={y}
      transform={down ? `rotate(-90 ${x} ${y})` : undefined}
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize={17}
      fontWeight={700}
      letterSpacing={1.5}
      fill="#6d6455"
      fontFamily="inherit"
    >
      {text}
    </text>
  );
}

export default function StreetMap() {
  return (
    <g>
      <rect width={1000} height={640} fill={STREET} />

      {/* Park, at the top left: grass, a pond, trees and swings. */}
      <Block x={0} y={0} width={180} height={430} fill="#8fcf7a" />
      <ellipse cx={90} cy={110} rx={52} ry={74} fill="#8ec5f2" stroke="#5f9fd0" strokeWidth={3} />
      <Tree x={40} y={230} />
      <Tree x={140} y={250} r={18} />
      <Tree x={60} y={380} />
      <path d="M100,330 V390 M160,330 V390 M96,332 H164" stroke="#c9952b" strokeWidth={5} fill="none" strokeLinecap="round" />
      <path d="M118,334 V368 M142,334 V368" stroke="#6d6455" strokeWidth={2} />
      <rect x={110} y={366} width={16} height={6} fill="#e5484d" />
      <rect x={134} y={366} width={16} height={6} fill="#e5484d" />

      {/* Bakery: a shop with a striped awning and bread. */}
      <Block x={240} y={0} width={220} height={190} />
      <rect x={280} y={60} width={140} height={100} fill="#f8d7e3" stroke={EDGE} strokeWidth={2} />
      <path d="M272,60 H428 L420,36 H280 Z" fill="#fff" />
      {[280, 308, 336, 364, 392].map(sx => <path key={sx} d={`M${sx},36 H${sx + 14} L${sx + 16},60 H${sx + 2} Z`} fill="#e5484d" />)}
      <ellipse cx={322} cy={112} rx={22} ry={12} fill="#d9a35b" />
      <rect x={364} y={96} width={36} height={64} fill="#4fa37a" />

      {/* Supermarket: a big shop with a trolley. */}
      <Block x={520} y={0} width={220} height={190} />
      <rect x={548} y={40} width={164} height={120} fill="#e8f1fb" stroke={EDGE} strokeWidth={2} />
      <rect x={548} y={40} width={164} height={22} fill="#e5484d" />
      <rect x={566} y={84} width={128} height={56} fill="#cfe8f7" stroke={EDGE} strokeWidth={2} />
      <g fill="none" stroke="#2b3240" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
        <path d="M600,96 H612 L622,124 H660 L668,104 H616" />
        <circle cx={628} cy={134} r={4} />
        <circle cx={656} cy={134} r={4} />
      </g>

      {/* Library, with its name on it. */}
      <Block x={800} y={0} width={200} height={190} />
      <rect x={830} y={40} width={140} height={120} fill="#2f6fbf" stroke="#1f4f8f" strokeWidth={2} />
      {[850, 880, 910, 940].map(wx => <rect key={wx} x={wx} y={80} width={20} height={60} fill="#8ec5f2" />)}
      <rect x={846} y={50} width={108} height={22} rx={4} fill="#fff" />
      <text x={900} y={62} textAnchor="middle" dominantBaseline="middle" fontSize={14} fontWeight={700} fill="#1f4f8f" fontFamily="inherit">LIBRARY</text>

      {/* Square: paving, a fountain, benches and trees. */}
      <Block x={240} y={250} width={220} height={180} fill="#c9c3b6" />
      <circle cx={350} cy={340} r={44} fill="#e8e3d8" stroke={EDGE} strokeWidth={3} />
      <circle cx={350} cy={340} r={30} fill="#8ec5f2" />
      <path d="M350,340 V316 M350,318 C340,312 336,320 334,328 M350,318 C360,312 364,320 366,328" stroke="#fff" strokeWidth={3} fill="none" strokeLinecap="round" />
      <Tree x={272} y={282} r={13} />
      <Tree x={428} y={282} r={13} />
      <Tree x={272} y={400} r={13} />
      <Tree x={428} y={400} r={13} />
      <Bench x={350} y={278} />
      <Bench x={350} y={404} />

      {/* Hospital: a white building with a red cross. */}
      <Block x={520} y={250} width={220} height={180} />
      <rect x={550} y={280} width={160} height={120} fill="#fff" stroke={EDGE} strokeWidth={2} />
      <rect x={616} y={296} width={28} height={70} fill="#e5484d" />
      <rect x={595} y={317} width={70} height={28} fill="#e5484d" />
      {[562, 690].map(wx => [300, 340, 376].map(wy => <rect key={`${wx}-${wy}`} x={wx} y={wy} width={12} height={14} fill="#8ec5f2" />))}

      {/* Museum: a building with columns. */}
      <Block x={800} y={250} width={200} height={180} />
      <path d="M826,316 L900,276 L974,316 Z" fill="#e9d8b4" stroke="#9a8460" strokeWidth={2} />
      <rect x={826} y={316} width={148} height={12} fill="#e9d8b4" stroke="#9a8460" strokeWidth={2} />
      {[836, 864, 892, 920, 948].map(cx => <rect key={cx} x={cx} y={330} width={14} height={58} fill="#f4ead6" stroke="#9a8460" strokeWidth={2} />)}
      <rect x={820} y={388} width={160} height={14} fill="#e9d8b4" stroke="#9a8460" strokeWidth={2} />

      {/* Circus tent, at the bottom left. */}
      <Block x={0} y={490} width={460} height={150} />
      <path d="M150,616 V560 L230,512 L310,560 V616 Z" fill="#fff" stroke="#c94a4a" strokeWidth={3} />
      {[166, 198, 230, 262, 294].map(sx => <rect key={sx} x={sx} y={560} width={14} height={56} fill="#e5484d" />)}
      <path d="M150,560 L230,512 L310,560" fill="none" stroke="#c94a4a" strokeWidth={4} />
      <path d="M216,616 V584 Q230,570 244,584 V616 Z" fill="#4b4f5c" />
      <path d="M40,520 Q100,560 150,540 M310,540 Q360,560 420,520" stroke="#6d6455" strokeWidth={2} fill="none" />

      {/* School: a building with a clock, and a playground with a basketball hoop. */}
      <Block x={520} y={490} width={220} height={150} fill="#a6d98a" />
      <rect x={540} y={520} width={120} height={96} fill="#f2a64a" stroke="#b56a1a" strokeWidth={2} />
      <path d="M534,522 L600,494 L666,522 Z" fill="#3f7f4a" />
      <circle cx={600} cy={540} r={11} fill="#fff" stroke="#b56a1a" strokeWidth={2} />
      <path d="M600,540 V533 M600,540 H606" stroke="#2b3240" strokeWidth={2} strokeLinecap="round" />
      <rect x={590} y={584} width={20} height={32} fill="#7a4a2a" />
      {[552, 626].map(wx => <rect key={wx} x={wx} y={560} width={22} height={18} fill="#cfe8f7" />)}
      <rect x={672} y={540} width={56} height={76} rx={6} fill="#8a8f99" />
      <path d="M700,548 V560" stroke="#fff" strokeWidth={3} />
      <circle cx={700} cy={566} r={7} fill="none" stroke="#e5484d" strokeWidth={3} />

      {/* Church, at the bottom right. */}
      <Block x={800} y={490} width={200} height={150} />
      <rect x={850} y={550} width={100} height={66} fill="#f4e3a8" stroke="#9a8460" strokeWidth={2} />
      <path d="M842,552 L900,516 L958,552 Z" fill="#8a5a3a" />
      <path d="M900,516 V494 M892,502 H908" stroke="#6d6455" strokeWidth={3} />
      <path d="M890,616 V592 Q900,580 910,592 V616 Z" fill="#7a4a2a" />

      <StreetName x={210} y={330} text="GREEN STREET" down />
      <StreetName x={490} y={340} text="SUN STREET" down />
      <StreetName x={770} y={330} text="BOOK STREET" down />
    </g>
  );
}
