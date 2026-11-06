// A house seen from the front with its front wall taken away, in a 1000 × 640 box, like the
// school, with the things in it: a bed and a window in the bedroom, a shower, a sofa, a cooker
// and a fridge. In the roof: the attic. Upstairs: a bedroom and the bathroom. Downstairs: the hall with
// the stairs, the living room and the kitchen. On the right, the garage with a car; on the left,
// the garden with a tree and flowers.

const WALL = '#8a6a4a';

function Garden() {
  return (
    <g>
      <rect x={150} y={330} width={24} height={230} fill="#9a6a3f" />
      <circle cx={162} cy={300} r={80} fill="#5fb85f" />
      <circle cx={110} cy={340} r={50} fill="#6cc46c" />
      <circle cx={210} cy={335} r={48} fill="#6cc46c" />
      {[[40, '#ef6fa3'], [80, '#f2c94c'], [230, '#e06a4a'], [205, '#9b6be0']].map(([x, colour]) => (
        <g key={x}>
          <line x1={x} y1={560} x2={x} y2={525} stroke="#3e8e41" strokeWidth={4} />
          <circle cx={x} cy={520} r={10} fill={colour} />
          <circle cx={x} cy={520} r={4} fill="#fff4c7" />
        </g>
      ))}
    </g>
  );
}

function Attic() {
  return (
    <g>
      <path d="M318,205 L525,62 L732,205 Z" fill="#f6e6c8" />
      {/* Old boxes and a rocking horse under the roof. */}
      <rect x={400} y={160} width={50} height={42} fill="#c9a26b" stroke="#8a6a4a" strokeWidth={2} />
      <rect x={440} y={176} width={40} height={26} fill="#d8b47c" stroke="#8a6a4a" strokeWidth={2} />
      <path d="M570,200 Q590,185 610,200" fill="none" stroke="#8a4a2a" strokeWidth={5} />
      <rect x={578} y={168} width={28} height={18} rx={6} fill="#e06a4a" />
      <circle cx={608} cy={166} r={9} fill="#e06a4a" />
      <circle cx={525} cy={130} r={16} fill="#bfe3f5" stroke={WALL} strokeWidth={3} />
    </g>
  );
}

function Bedroom() {
  return (
    <g>
      <rect x={302} y={207} width={296} height={171} fill="#fde9c9" />
      {/* The bed, with a pillow and a blanket. */}
      <rect x={330} y={322} width={170} height={36} rx={6} fill="#6f9de0" />
      <rect x={322} y={300} width={14} height={76} rx={3} fill="#b5824f" />
      <rect x={340} y={308} width={44} height={18} rx={8} fill="#fff" stroke="#c9c9c9" strokeWidth={1.5} />
      <rect x={330} y={356} width={170} height={10} fill="#b5824f" />
      {/* A lamp, and the window with the sky behind. */}
      <rect x={530} y={330} width={40} height={46} fill="#b5824f" />
      <path d="M538,330 L562,330 L556,308 L544,308 Z" fill="#f2c94c" />
      <rect x={538} y={222} width={56} height={52} fill="#bfe3f5" stroke="#fff" strokeWidth={5} />
      <rect x={538} y={222} width={56} height={52} fill="none" stroke={WALL} strokeWidth={2} />
      <line x1={566} y1={222} x2={566} y2={274} stroke="#fff" strokeWidth={4} />
      <line x1={538} y1={248} x2={594} y2={248} stroke="#fff" strokeWidth={4} />
      <circle cx={552} cy={236} r={6} fill="#fff4c7" />
    </g>
  );
}

function Bathroom() {
  return (
    <g>
      <rect x={602} y={207} width={196} height={171} fill="#dff5f2" />
      {/* The shower: its head, the water and a curtain. */}
      <line x1={760} y1={232} x2={760} y2={252} stroke="#7f8790" strokeWidth={4} />
      <path d="M744,252 L776,252 L770,262 L750,262 Z" fill="#c3c9d0" />
      {[748, 756, 764, 772].map(x => <line key={x} x1={x} y1={268} x2={x - 4} y2={330} stroke="#6fb7e8" strokeWidth={2} strokeDasharray="6 6" />)}
      <path d="M728,240 L728,372 Q736,360 744,372 L744,240 Z" fill="#f5a8c8" opacity={0.8} />
      <rect x={730} y={366} width={64} height={10} fill="#c3c9d0" />
      {/* The washbasin with a mirror, and the toilet. */}
      <rect x={630} y={248} width={40} height={46} rx={6} fill="#bfe3f5" stroke="#7f8790" strokeWidth={2} />
      <path d="M622,310 L678,310 L670,328 L630,328 Z" fill="#fff" stroke="#9aa3ab" strokeWidth={2} />
      <rect x={644} y={328} width={12} height={48} fill="#fff" stroke="#9aa3ab" strokeWidth={2} />
      <rect x={686} y={318} width={22} height={34} rx={4} fill="#fff" stroke="#9aa3ab" strokeWidth={2} />
      <path d="M680,352 L716,352 Q714,376 698,376 Q682,376 680,352 Z" fill="#fff" stroke="#9aa3ab" strokeWidth={2} />
    </g>
  );
}

function Hall() {
  return (
    <g>
      <rect x={302} y={382} width={136} height={176} fill="#f1ede4" />
      {/* The stairs up, the front door and the coat hooks. */}
      <path d="M302,558 L302,538 L332,538 L332,514 L362,514 L362,490 L392,490 L392,466 L422,466 L422,442 L438,442 L438,558 Z" fill="#c9a26b" stroke={WALL} strokeWidth={2} />
      <rect x={312} y={420} width={50} height={8} rx={3} fill="#7a5532" />
      <circle cx={322} cy={436} r={6} fill="#e06a4a" />
      <circle cx={348} cy={436} r={6} fill="#4f8fe0" />
    </g>
  );
}

function LivingRoom() {
  return (
    <g>
      <rect x={442} y={382} width={176} height={176} fill="#fbe3e3" />
      {/* The sofa, a rug and the television. */}
      <rect x={460} y={500} width={120} height={36} rx={8} fill="#e06a4a" />
      <rect x={460} y={480} width={120} height={28} rx={8} fill="#c95440" />
      <rect x={452} y={490} width={18} height={50} rx={6} fill="#c95440" />
      <rect x={572} y={490} width={18} height={50} rx={6} fill="#c95440" />
      <ellipse cx={530} cy={552} rx={70} ry={6} fill="#f2c94c" />
      <rect x={560} y={416} width={48} height={32} rx={3} fill="#24324a" />
      <rect x={564} y={420} width={40} height={24} fill="#6fb7e8" />
    </g>
  );
}

function Kitchen() {
  return (
    <g>
      <rect x={622} y={382} width={176} height={176} fill="#fff1c7" />
      {/* The fridge, and the cooker with a pan. */}
      <rect x={740} y={422} width={48} height={134} rx={6} fill="#f4f6f8" stroke="#9aa3ab" strokeWidth={2} />
      <line x1={740} y1={470} x2={788} y2={470} stroke="#9aa3ab" strokeWidth={2} />
      <rect x={780} y={440} width={4} height={20} fill="#9aa3ab" />
      <rect x={780} y={482} width={4} height={24} fill="#9aa3ab" />
      <rect x={640} y={490} width={84} height={66} fill="#c3c9d0" stroke="#7f8790" strokeWidth={2} />
      <rect x={652} y={510} width={60} height={34} rx={4} fill="#24324a" />
      <rect x={648} y={482} width={68} height={8} fill="#7f8790" />
      <ellipse cx={682} cy={476} rx={24} ry={7} fill="#3a3f4a" />
      <rect x={700} y={472} width={30} height={5} rx={2} fill="#3a3f4a" />
    </g>
  );
}

function Garage() {
  return (
    <g>
      <rect x={806} y={400} width={172} height={160} fill="#e4e0d8" stroke={WALL} strokeWidth={4} />
      <rect x={798} y={388} width={188} height={16} fill="#9c3c2c" />
      {/* The family car. */}
      <path d="M826,536 L826,506 Q832,494 846,492 L862,470 Q868,464 878,464 L920,464 Q930,464 936,472 L950,492 Q962,494 964,506 L964,536 Z" fill="#4f8fe0" stroke="#2d5797" strokeWidth={2} />
      <path d="M870,474 L894,474 L894,492 L858,492 Z M902,474 L926,474 L940,492 L902,492 Z" fill="#bfe3f5" />
      <circle cx={858} cy={538} r={16} fill="#24324a" />
      <circle cx={858} cy={538} r={6} fill="#c3c9d0" />
      <circle cx={934} cy={538} r={16} fill="#24324a" />
      <circle cx={934} cy={538} r={6} fill="#c3c9d0" />
    </g>
  );
}

export default function House() {
  return (
    <g>
      <rect width={1000} height={640} fill="#d9f1fc" />
      <rect y={560} width={1000} height={80} fill="#a8d97f" />
      <Garden />

      {/* The roof, the chimney and the walls. */}
      <rect x={650} y={70} width={36} height={80} fill="#b0533f" stroke="#7a3a2a" strokeWidth={3} />
      <path d="M270,210 L525,30 L780,210 Z" fill="#c95440" stroke="#9c3c2c" strokeWidth={4} strokeLinejoin="round" />
      <Attic />
      <rect x={300} y={205} width={500} height={355} fill="#efe6d6" stroke={WALL} strokeWidth={4} />
      <Bedroom />
      <Bathroom />
      <Hall />
      <LivingRoom />
      <Kitchen />
      <g stroke={WALL} strokeWidth={4}>
        <line x1={300} y1={205} x2={800} y2={205} />
        <line x1={300} y1={380} x2={800} y2={380} />
        <line x1={600} y1={205} x2={600} y2={380} />
        <line x1={440} y1={380} x2={440} y2={560} />
        <line x1={620} y1={380} x2={620} y2={560} />
      </g>
      <Garage />
    </g>
  );
}
