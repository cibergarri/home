// Naturales, tema 3, page 52: the key to classify animals, as a sketch. 1200 × 940: question 1 on
// the left sends the vertebrates up and the invertebrates down; the vertebrates go down a column of
// questions (2 to 4), each sending its group to the right, and then 5 and 6 for reptiles and fish.
// Green arrows are "sí", red ones "no".
import {
  INK, PAPER, YELLOW, PINK, SKY, ORANGE, RED, GREEN, THIN,
  ink, Title, Hand, SketchDefs,
} from './sketch';

const ROUGH = 'url(#animal-key-rough)';
const LILAC = '#d9c6f5';
const LIME = '#d8eea0';

// A question, with its number on the corner and its *key word*.
function Question({
  x, y, width, number, lines,
}) {
  const height = 34 + lines.length * 32;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={16} {...ink} strokeWidth={THIN} fill={PAPER} filter={ROUGH} />
      <circle cx={x + 4} cy={y + 2} r={17} {...ink} strokeWidth={THIN} fill={YELLOW} />
      <Title x={x + 4} y={y + 10} size={22} mid>{String(number)}</Title>
      {lines.map((line, n) => (
        <Hand key={line} x={x + width / 2} y={y + 44 + n * 32} size={28} mid>{line}</Hand>
      ))}
    </g>
  );
}

// What the animal is, in a coloured pill.
function Answer({
  x, y, width, colour, children, size = 30,
}) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={58} rx={29} {...ink} strokeWidth={THIN} fill={colour} filter={ROUGH} />
      <Title x={x + width / 2} y={y + 39} size={size} mid>{children}</Title>
    </g>
  );
}

// An arrow along a path, green for "sí" and red for "no", with its word at (lx, ly).
function Arrow({
  d, yes, lx, ly,
}) {
  const colour = yes ? GREEN : RED;
  return (
    <g>
      <path d={d} fill="none" stroke={colour} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#animal-key-head)" />
      <circle cx={lx} cy={ly} r={22} fill={colour} stroke={INK} strokeWidth={1.5} />
      <text x={lx} y={ly + 8} fontSize={22} fontWeight={700} fill={PAPER} textAnchor="middle">{yes ? 'sí' : 'no'}</text>
    </g>
  );
}

export default function AnimalKey() {
  return (
    <g>
      <SketchDefs id="animal-key" />
      <rect width={1200} height={940} fill="#fff7fa" />
      <Title x={600} y={56} size={46} mid>Clasificar animales: la clave</Title>
      <Hand x={600} y={92} size={24} mid grey>Empieza por la pregunta 1 y sigue las flechas</Hand>

      {/* 1: bones or not */}
      <Arrow d="M150 440 L150 172 L318 172" yes lx={150} ly={300} />
      <Arrow d="M150 540 L150 866 L318 866" lx={150} ly={720} />
      <Question x={30} y={440} width={240} number={1} lines={['¿Tiene huesos', 'en su interior?']} />
      <Answer x={330} y={142} width={440} colour={GREEN}>Es un VERTEBRADO 🦴</Answer>
      <Answer x={330} y={836} width={440} colour={ORANGE}>Es un INVERTEBRADO 🐌</Answer>

      {/* 2 to 4, down the middle */}
      <path d="M550 200 L550 232" stroke={INK} strokeWidth={4} markerEnd="url(#animal-key-head)" />
      <Question x={400} y={240} width={300} number={2} lines={['¿Tiene *pelo*?']} />
      <Arrow d="M700 273 L842 273" yes lx={770} ly={273} />
      <Answer x={852} y={244} width={320} colour={PINK}>Es un MAMÍFERO 🐻</Answer>

      <Arrow d="M550 306 L550 352" lx={600} ly={330} />
      <Question x={400} y={360} width={300} number={3} lines={['¿Tiene *plumas*?']} />
      <Arrow d="M700 393 L842 393" yes lx={770} ly={393} />
      <Answer x={852} y={364} width={320} colour={ORANGE}>Es un AVE 🐦</Answer>

      <Arrow d="M550 426 L550 472" lx={600} ly={450} />
      <Question x={400} y={480} width={300} number={4} lines={['¿Tiene *escamas*?']} />
      <Arrow d="M550 546 L550 652" lx={600} ly={600} />
      <Answer x={410} y={660} width={280} colour={LILAC}>Es un ANFIBIO 🐸</Answer>

      {/* 5 and 6, on the right */}
      <Arrow d="M700 513 L782 513" yes lx={740} ly={513} />
      <Question x={790} y={480} width={220} number={5} lines={['¿Tiene patas?']} />
      <Arrow d="M1010 513 L1110 513 L1110 572" yes lx={1110} ly={513} />
      <Answer x={990} y={580} width={200} colour={LIME} size={26}>REPTIL 🦎</Answer>

      <Arrow d="M860 546 L860 692" lx={860} ly={620} />
      <Question x={760} y={700} width={220} number={6} lines={['¿Tiene aletas?']} />
      <Arrow d="M980 733 L1090 733 L1090 792" yes lx={1040} ly={733} />
      <Answer x={990} y={800} width={200} colour={SKY} size={26}>PEZ 🐟</Answer>
    </g>
  );
}
