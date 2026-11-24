// Social Science, unit 2, page 27 (exercise 1): a street in the neighbourhood with good and bad
// behaviours to find, as a sketch. 1200 × 640, the pavement from y 500: from left to right, a boy
// holding the door for a woman in a wheelchair, a girl putting litter in the bin, a boy breaking a
// branch off a tree, a girl cleaning up after her dog, a boy painting on a wall, and a child on a
// balcony pouring water on a man below. A grandmother walks by, doing nothing to find.
import {
  INK, PAPER, YELLOW, MINT, PINK, SKY, ORANGE, RED, GREEN, BLUE, BROWN, GREY, THIN,
  ink, SketchDefs, Person, Dog,
} from './sketch';

const ROUGH = 'url(#neighbourhood-rough)';

function Building() {
  return (
    <g {...ink}>
      <rect x={20} y={150} width={280} height={350} fill="#f3e6d3" />
      <rect x={50} y={190} width={60} height={60} fill={SKY} />
      <rect x={140} y={190} width={60} height={60} fill={SKY} />
      <rect x={230} y={190} width={50} height={60} fill={SKY} />
      <rect x={196} y={330} width={70} height={170} fill={BROWN} />
      <path d="M266 330 L300 316 L300 494 L266 500 Z" fill="#d9a36f" />
    </g>
  );
}

function Wheelchair() {
  return (
    <g>
      <Person x={118} base={566} scale={1.05} shirt={BLUE} hair={ORANGE} hands={[[-10, -40], [18, -40]]} />
      <g {...ink}>
        <path d="M80 470 L84 540 L150 540" strokeWidth={4} />
        <circle cx={110} cy={566} r={40} fill="none" strokeWidth={4} />
        <circle cx={110} cy={566} r={5} fill={INK} />
        <circle cx={168} cy={596} r={10} fill="none" strokeWidth={3} />
        <path d="M150 540 L168 586" strokeWidth={3} />
      </g>
      <Person x={236} base={600} scale={0.95} shirt={RED} hands={[[-30, -50], [48, -122]]} />
    </g>
  );
}

function Bin() {
  return (
    <g>
      <g {...ink}>
        <path d="M402 540 L446 540 L441 600 L407 600 Z" fill={GREEN} />
        <rect x={397} y={532} width={54} height={9} rx={3} fill={MINT} />
        <path d="M408 496 L416 490 L424 497 L420 506 L410 505 Z" fill={PAPER} strokeWidth={THIN} />
        <path d="M414 512 L414 522 M424 512 L424 520" strokeWidth={THIN} strokeDasharray="2 4" />
      </g>
      <Person x={350} base={600} scale={0.95} shirt={YELLOW} hands={[[-22, -45], [62, -102]]} />
    </g>
  );
}

function Tree() {
  return (
    <g>
      <g {...ink}>
        <path d="M540 600 L540 380 M540 450 L500 400 M540 420 L590 372" strokeWidth={6} stroke={BROWN} />
        <circle cx={540} cy={330} r={74} fill={GREEN} />
        <circle cx={492} cy={372} r={30} fill={GREEN} strokeWidth={THIN} />
        <path d="M600 494 L650 452" strokeWidth={5} stroke={BROWN} />
        <path d="M650 452 L662 446 M650 452 L660 462 M632 466 L640 456" strokeWidth={THIN} stroke={GREEN} />
        <path d="M588 378 L596 370 M592 384 L602 380" strokeWidth={THIN} />
      </g>
      <Person x={612} base={600} scale={0.95} shirt={RED} mouth="open" hands={[[-12, -112], [28, -70]]} />
    </g>
  );
}

function DogWalk() {
  return (
    <g>
      <path d="M744 530 Q 790 548 800 548" {...ink} strokeWidth={THIN} stroke={RED} />
      <Dog x={824} base={600} colour={GREY} />
      <Person x={730} base={600} scale={0.95} shirt={PINK} hands={[[16, -36], [-18, -46]]} />
      <path d="M740 568 L758 568 L756 552 L742 552 Z" {...ink} strokeWidth={THIN} fill={SKY} />
      <path d="M752 596 Q 754 586 760 588 Q 764 582 768 588 Q 774 588 772 596 Z" {...ink} strokeWidth={THIN} fill={BROWN} />
    </g>
  );
}

function Wall() {
  const bricks = [];
  for (let row = 0; row < 10; row += 1) {
    const y = 300 + row * 20;
    bricks.push(<path key={`r${row}`} d={`M890 ${y} L1010 ${y}`} />);
    for (let x = 890 + (row % 2 ? 20 : 0); x < 1010; x += 40) bricks.push(<path key={`b${row}-${x}`} d={`M${x} ${y} L${x} ${y + 20}`} />);
  }
  return (
    <g>
      <g {...ink} strokeWidth={1.5}>
        <rect x={890} y={300} width={120} height={200} fill={ORANGE} strokeWidth={3} />
        {bricks}
      </g>
      <path d="M904 340 Q 930 310 950 350 T 996 340 M910 420 Q 940 390 960 430" {...ink} stroke={PINK} strokeWidth={7} />
      <Person x={938} base={600} scale={0.95} shirt={GREY} hands={[[-22, -45], [8, -126]]} />
      <rect x={936} y={452} width={10} height={20} rx={2} {...ink} strokeWidth={THIN} fill={RED} />
    </g>
  );
}

function Balcony() {
  return (
    <g>
      <g {...ink}>
        <rect x={1030} y={20} width={170} height={480} fill="#e4e8ee" />
        <rect x={1060} y={60} width={60} height={70} fill={SKY} />
        <rect x={1040} y={248} width={160} height={14} fill={GREY} />
      </g>
      <Person x={1110} base={248} scale={0.8} shirt={ORANGE} hands={[[-22, -45], [-44, -60]]} />
      <g {...ink}>
        <path d="M1040 248 L1040 196 L1200 196 M1060 196 L1060 248 M1080 196 L1080 248 M1100 196 L1100 248 M1120 196 L1120 248 M1140 196 L1140 248 M1160 196 L1160 248 M1180 196 L1180 248" strokeWidth={2.5} />
        <path d="M1050 186 L1076 186 L1072 204 L1054 204 Z M1050 190 L1036 180" fill={SKY} strokeWidth={THIN} />
        <path d="M1036 214 L1034 230 M1044 240 L1042 258 M1032 272 L1030 290 M1040 304 L1038 322 M1034 340 L1032 358 M1042 376 L1040 394 M1036 410 L1034 428 M1044 444 L1042 462" stroke={BLUE} strokeWidth={3} />
      </g>
      <Person x={1060} base={600} scale={1.25} shirt="#a98bd8" hair={INK} mouth="open" hands={[[-24, -50], [26, -50]]} />
    </g>
  );
}

export default function Neighbourhood() {
  return (
    <g>
      <SketchDefs id="neighbourhood" />
      <rect width={1200} height={640} fill="#eaf6ff" />
      <g filter={ROUGH}>
        <rect x={0} y={500} width={1200} height={140} fill="#ece6dc" />
        <path d="M0 500 L1200 500" {...ink} />
        <Building />
        <Wheelchair />
        <Bin />
        <Tree />
        <Person x={470} base={620} scale={1.25} shirt={MINT} hair={GREY} hands={[[-22, -45], [24, -48]]} />
        <DogWalk />
        <Wall />
        <Balcony />
      </g>
    </g>
  );
}

// The behaviours to find: where each one is (a circle in the drawing), what is happening, and
// whether it is good.
export const BEHAVIOURS = [
  {
    id: 'door', x: 190, y: 470, r: 120, good: true,
    text: 'He holds the door for his neighbour.', es: 'Sujeta la puerta a su vecina.',
  },
  {
    id: 'bin', x: 380, y: 500, r: 90, good: true,
    text: 'She puts her litter in the bin.', es: 'Tira la basura a la papelera.',
  },
  {
    id: 'branch', x: 600, y: 470, r: 95, good: false,
    text: 'He breaks a branch off the tree.', es: 'Rompe una rama del árbol.',
  },
  {
    id: 'dog', x: 770, y: 520, r: 90, good: true,
    text: 'She cleans up after her dog.', es: 'Recoge lo que ensucia su perro.',
  },
  {
    id: 'wall', x: 940, y: 440, r: 100, good: false,
    text: 'He paints on the wall.', es: 'Pinta en la pared.',
  },
  {
    id: 'balcony', x: 1110, y: 190, r: 90, good: false,
    text: 'She pours water on the man below.', es: 'Echa agua al señor de abajo.',
  },
];
