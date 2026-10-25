import { Kid } from './parts';

// A school seen from the side with its front wall taken away, in a 1000 × 640 box. Upstairs: the
// library, a classroom and the computer room. Downstairs: the dining room, the corridor, the
// toilet and the gym. Outside on the left: the playground. `people` puts Toby, Daisy or Sam in a
// place, e.g. [{ name: 'Toby', place: 'library' }].

// Where someone stands in each place: the middle of its floor.
export const PLACES = {
  library: [395, 330],
  classroom: [600, 330],
  'computer room': [790, 330],
  'dining room': [300, 535],
  corridor: [510, 535],
  toilet: [650, 535],
  gym: [850, 535],
  playground: [120, 600],
};

const BOOK_COLOURS = ['#e06a4a', '#4f8fe0', '#f2c94c', '#3fae6a', '#9b6be0', '#ef6fa3'];

function Shelf({ x }) {
  return (
    <g>
      <rect x={x} y={200} width={70} height={130} fill="#b5824f" stroke="#7a5532" strokeWidth={2} />
      {[214, 256, 298].map(y => (
        <g key={y}>
          {BOOK_COLOURS.map((colour, index) => (
            <rect key={colour} x={x + 6 + index * 10} y={y} width={8} height={30} fill={colour} />
          ))}
        </g>
      ))}
    </g>
  );
}

export default function School({ people = [] }) {
  return (
    <g>
      <rect width={1000} height={640} fill="#d9f1fc" />
      <rect y={540} width={1000} height={100} fill="#a8d97f" />

      {/* The playground: swings and hopscotch. */}
      <g>
        <path d="M30,540 L60,390 L180,390 L210,540" fill="none" stroke="#e06a4a" strokeWidth={8} strokeLinejoin="round" />
        <line x1={90} y1={392} x2={90} y2={470} stroke="#555" strokeWidth={2} />
        <line x1={130} y1={392} x2={130} y2={470} stroke="#555" strokeWidth={2} />
        <rect x={84} y={468} width={52} height={8} rx={3} fill="#f2c94c" />
        {[[40, 582], [80, 582], [60, 552], [60, 612]].map(([x, y]) => (
          <rect key={`${x},${y}`} x={x} y={y - 12} width={36} height={26} fill="none" stroke="#fff" strokeWidth={3} />
        ))}
      </g>

      {/* The building and its roof. */}
      <path d="M210,138 L580,40 L950,138 Z" fill="#c95440" stroke="#9c3c2c" strokeWidth={3} strokeLinejoin="round" />
      <rect x={500} y={84} width={160} height={36} rx={6} fill="#fff4e0" />
      <text x={580} y={109} textAnchor="middle" fontSize={22} fontWeight={700} fill="#24324a" fontFamily="inherit">SCHOOL</text>
      <rect x={230} y={136} width={700} height={404} fill="#efe6d6" stroke="#8a6a4a" strokeWidth={4} />

      {/* Upstairs. */}
      <rect x={232} y={138} width={238} height={196} fill="#fde9c9" />
      <rect x={470} y={138} width={240} height={196} fill="#e3f1fb" />
      <rect x={710} y={138} width={218} height={196} fill="#ece6fb" />
      {/* Downstairs. */}
      <rect x={232} y={336} width={218} height={202} fill="#fbe3e3" />
      <rect x={450} y={336} width={120} height={202} fill="#f1ede4" />
      <rect x={570} y={336} width={110} height={202} fill="#dff5f2" />
      <rect x={680} y={336} width={248} height={202} fill="#fff1c7" />
      <g stroke="#8a6a4a" strokeWidth={4}>
        <line x1={230} y1={335} x2={930} y2={335} />
        <line x1={470} y1={136} x2={470} y2={335} />
        <line x1={710} y1={136} x2={710} y2={335} />
        <line x1={450} y1={335} x2={450} y2={540} />
        <line x1={570} y1={335} x2={570} y2={540} />
        <line x1={680} y1={335} x2={680} y2={540} />
      </g>

      {/* Library: shelves full of books. */}
      <Shelf x={250} />
      <Shelf x={330} />

      {/* Classroom: a board and desks. */}
      <rect x={530} y={200} width={130} height={60} rx={4} fill="#2f5f4f" stroke="#7a5532" strokeWidth={4} />
      <path d="M548,222 h30 M548,236 h50" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
      <rect x={500} y={292} width={60} height={10} fill="#b5824f" />
      <rect x={640} y={292} width={60} height={10} fill="#b5824f" />
      <path d="M506,302 v28 M554,302 v28 M646,302 v28 M694,302 v28" stroke="#7a5532" strokeWidth={4} />

      {/* Computer room: screens on a long desk. */}
      <rect x={720} y={282} width={200} height={10} fill="#8a8f98" />
      {[730, 820].map(x => (
        <g key={x}>
          <rect x={x} y={232} width={70} height={46} rx={4} fill="#24324a" />
          <rect x={x + 5} y={237} width={60} height={36} fill="#6cc0ec" />
          <rect x={x + 30} y={278} width={10} height={6} fill="#24324a" />
        </g>
      ))}

      {/* Dining room: a table laid for lunch. */}
      <rect x={250} y={470} width={180} height={12} fill="#b5824f" />
      <path d="M262,482 v52 M418,482 v52" stroke="#7a5532" strokeWidth={5} />
      {[280, 340, 400].map(x => <ellipse key={x} cx={x} cy={466} rx={18} ry={5} fill="#fff" stroke="#c9d6df" strokeWidth={1.5} />)}

      {/* Corridor: a long hall with coat pegs. */}
      <path d="M462,410 H558" stroke="#8a6a4a" strokeWidth={4} />
      {[475, 500, 525, 550].map(x => <circle key={x} cx={x} cy={420} r={4} fill="#8a6a4a" />)}
      <rect x={470} y={424} width={18} height={34} rx={6} fill="#e06a4a" />
      <rect x={520} y={424} width={18} height={34} rx={6} fill="#4f8fe0" />

      {/* Toilet: a toilet and a sink. */}
      <rect x={590} y={470} width={30} height={40} rx={4} fill="#fff" stroke="#9aa6b2" strokeWidth={2} />
      <path d="M582,512 h46 v8 a23,14 0 0 1 -46,0 Z" fill="#fff" stroke="#9aa6b2" strokeWidth={2} />
      <rect x={640} y={430} width={30} height={18} rx={4} fill="#fff" stroke="#9aa6b2" strokeWidth={2} />
      <rect x={652} y={448} width={6} height={86} fill="#c9d6df" />

      {/* Gym: a basketball hoop, a ball and a mat. */}
      <rect x={900} y={370} width={10} height={70} fill="#8a8f98" />
      <rect x={880} y={362} width={40} height={30} fill="#fff" stroke="#8a8f98" strokeWidth={2} />
      <ellipse cx={872} cy={400} rx={18} ry={5} fill="none" stroke="#e06a4a" strokeWidth={3} />
      <circle cx={760} cy={520} r={14} fill="#f2994a" stroke="#b5642a" strokeWidth={2} />
      <rect x={700} y={526} width={110} height={10} rx={3} fill="#4f8fe0" />

      {people.map(({ name, place }) => {
        const [x, y] = PLACES[place];
        return <Kid key={name} name={name} x={x} y={y} scale={1.15} />;
      })}
    </g>
  );
}
