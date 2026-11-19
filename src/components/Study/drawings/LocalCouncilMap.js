// Social Science, unit 2, pages 30–31: a mind map of the local council, drawn as a sketchnote in
// felt-tip, with the Spanish in grey under each word. 1200 × 870: the council in the middle, then
// the municipality (top left), who is in it (top right), where it works (left), who chooses it
// (right) and the local services along the bottom. The two hand fonts come from the study corner's
// layout, through ./sketch.

import {
  INK, PAPER, YELLOW, MINT, PINK, SKY, ORANGE, RED, GREEN, THIN, ink, Title, Hand, Marker, SketchDefs, Stick,
} from './sketch';

const SERVICES = [
  { x: 120, en: ['Libraries'], es: 'bibliotecas' },
  { x: 280, en: ['Museums'], es: 'museos' },
  { x: 440, en: ['Parks and', 'gardens'], es: 'parques y jardines' },
  { x: 600, en: ['Police and', 'traffic'], es: 'policía y tráfico' },
  { x: 760, en: ['Public', 'transport'], es: 'transporte público' },
  { x: 920, en: ['Rubbish', 'collection'], es: 'recogida de basura' },
  { x: 1080, en: ['Cultural', 'events'], es: 'actividades culturales' },
];

export default function LocalCouncilMap() {
  return (
    <g>
      <SketchDefs id="local-council" />

      {/* Arrows out of the centre */}
      <g {...ink} filter="url(#local-council-rough)" markerEnd="url(#local-council-head)">
        <path d="M455 350 Q 400 300 320 286" />
        <path d="M745 350 Q 790 300 800 268" />
        <path d="M402 432 Q 365 446 330 452" />
        <path d="M798 432 Q 840 440 880 446" />
        <path d="M600 522 L 600 588" />
      </g>

      {/* The local council */}
      <g {...ink} filter="url(#local-council-rough)">
        <ellipse cx={600} cy={425} rx={200} ry={100} fill={YELLOW} />
        <ellipse cx={603} cy={421} rx={207} ry={104} strokeWidth={THIN} />
      </g>
      <Title x={600} y={410} size={56} mid>The local council</Title>
      <Hand x={600} y={452} size={27} mid>*governs* the *municipality*</Hand>
      <Hand x={600} y={484} size={23} mid grey>el ayuntamiento</Hand>

      {/* Municipality */}
      <Marker x={54} y={50} width={276} colour={MINT} tilt={-1.5} />
      <Title x={60} y={76} size={44}>*Municipality*</Title>
      <Hand x={342} y={74} size={22} grey>el municipio</Hand>
      <g {...ink} filter="url(#local-council-rough)">
        <path d="M60 190 Q 120 118 200 186" strokeWidth={THIN} />
        <path d="M58 190 Q 220 176 392 190" />
        <rect x={120} y={146} width={40} height={40} fill={ORANGE} />
        <path d="M114 148 L140 120 L166 148 Z" fill={RED} />
        <rect x={134} y={166} width={12} height={20} fill={PAPER} />
        <rect x={176} y={156} width={34} height={30} fill={SKY} />
        <path d="M171 158 L193 136 L215 158 Z" fill={RED} />
        <rect x={236} y={126} width={28} height={60} fill={PAPER} />
        <path d="M231 128 L250 104 L269 128 Z" fill={PINK} />
        <path d="M250 104 L250 92 M244 97 L256 97" strokeWidth={THIN} />
        <path d="M320 188 L320 162" />
        <circle cx={320} cy={146} r={20} fill={MINT} />
        <rect x={352} y={170} width={24} height={18} fill={YELLOW} />
        <path d="M348 171 L364 156 L380 171 Z" fill={RED} />
      </g>
      <Hand x={60} y={228} size={25}>one or more villages or towns</Hand>
      <Hand x={60} y={256} size={25}>and the area around them</Hand>
      <Hand x={60} y={282} size={21} grey>Ours is Burgos!</Hand>

      {/* Who is in it */}
      <Marker x={814} y={50} width={214} colour={PINK} tilt={1.2} />
      <Title x={820} y={76} size={44}>Who is in it?</Title>
      <g {...ink} filter="url(#local-council-rough)">
        <Stick x={880} y={122} r={17} />
        <path d="M867 142 Q 880 162 893 142" strokeWidth={THIN} />
        <circle cx={880} cy={164} r={6} fill={YELLOW} strokeWidth={THIN} />
        <Stick x={1010} y={134} r={12} />
        <Stick x={1060} y={134} r={12} />
        <Stick x={1110} y={134} r={12} />
        <path d="M992 112 Q 950 92 912 112" strokeWidth={THIN} markerEnd="url(#local-council-head)" />
      </g>
      <Hand x={952} y={92} size={19} mid grey>help</Hand>
      <Title x={842} y={250} size={34}>*Mayor*</Title>
      <Hand x={820} y={274} size={20}>the *head*</Hand>
      <Hand x={820} y={296} size={19} grey>alcalde · alcaldesa</Hand>
      <Title x={980} y={250} size={31}>*Councillors*</Title>
      <Hand x={980} y={274} size={20}>they *help* the mayor</Hand>
      <Hand x={980} y={296} size={19} grey>concejales · concejalas</Hand>

      {/* Who chooses them */}
      <Marker x={894} y={356} width={268} colour={SKY} tilt={-1} />
      <Title x={900} y={380} size={38}>Who chooses them?</Title>
      <g {...ink} filter="url(#local-council-rough)">
        <rect x={930} y={430} width={92} height={70} fill={PAPER} />
        <path d="M956 436 L996 436" />
        <path d="M962 440 L962 404 L990 400 L992 438" fill={PAPER} strokeWidth={THIN} />
        <path d="M970 412 L984 426 M984 412 L970 426" strokeWidth={THIN} />
        <circle cx={1100} cy={460} r={30} fill={YELLOW} />
      </g>
      <Title x={1100} y={474} size={44} mid>4</Title>
      <Hand x={1100} y={512} size={21} mid>years</Hand>
      <Hand x={900} y={540} size={25}>The people *vote*</Hand>
      <Hand x={900} y={566} size={25}>every *4 years*.</Hand>
      <Hand x={900} y={590} size={20} grey>votamos cada 4 años</Hand>

      {/* Where */}
      <Marker x={54} y={340} width={112} colour={ORANGE} tilt={-2} />
      <Title x={60} y={364} size={40}>Where?</Title>
      <g {...ink} filter="url(#local-council-rough)">
        <path d="M170 392 L170 362" />
        <path d="M170 362 L202 370 L170 378" fill={PINK} strokeWidth={THIN} />
        <path d="M72 434 L170 392 L268 434 Z" fill={ORANGE} />
        <rect x={82} y={434} width={176} height={78} fill={PAPER} />
        <circle cx={170} cy={418} r={10} fill={PAPER} strokeWidth={THIN} />
        <path d="M170 418 L170 412 M170 418 L175 420" strokeWidth={THIN} />
        <path d="M108 444 L108 506 M136 444 L136 506 M204 444 L204 506 M232 444 L232 506" strokeWidth={THIN} />
        <rect x={158} y={474} width={24} height={38} fill={SKY} />
        <path d="M70 514 L270 514 M62 524 L278 524" />
      </g>
      <Title x={60} y={562} size={34}>*Town hall*</Title>
      <Hand x={60} y={586} size={21}>where the council works</Hand>
      <Hand x={60} y={608} size={19} grey>el ayuntamiento (el edificio)</Hand>

      {/* Local services */}
      <Marker x={360} y={602} width={480} colour={YELLOW} tilt={-0.8} />
      <Title x={600} y={628} size={40} mid>It organises the *local services*</Title>
      <Hand x={600} y={656} size={21} mid grey>los servicios municipales</Hand>
      <g {...ink} strokeDasharray="2 7" strokeWidth={2.5}>
        <path d="M520 664 Q 300 668 120 694" />
        <path d="M545 666 Q 400 674 280 696" />
        <path d="M570 668 Q 500 676 440 696" />
        <path d="M600 668 L 600 688" />
        <path d="M630 668 Q 700 676 760 698" />
        <path d="M655 666 Q 800 674 920 696" />
        <path d="M680 664 Q 900 668 1080 696" />
      </g>

      <g {...ink} filter="url(#local-council-rough)">
        {/* Libraries */}
        <rect x={94} y={752} width={56} height={16} fill={SKY} />
        <rect x={101} y={736} width={46} height={16} fill={PINK} />
        <rect x={91} y={720} width={58} height={16} fill={MINT} />
        <path d="M96 718 Q 108 702 122 712 Q 136 702 148 718" strokeWidth={THIN} fill={PAPER} />
        {/* Museums */}
        <rect x={250} y={700} width={60} height={48} fill={PAPER} />
        <path d="M256 742 L272 718 L284 732 L292 724 L304 742" strokeWidth={THIN} fill={MINT} />
        <circle cx={296} cy={711} r={5} fill={YELLOW} strokeWidth={THIN} />
        <path d="M262 748 L255 772 M298 748 L305 772" />
        {/* Parks and gardens */}
        <path d="M400 772 L482 772" />
        <path d="M424 772 L424 736" />
        <circle cx={424} cy={718} r={22} fill={MINT} />
        <path d="M462 772 L462 746" strokeWidth={THIN} />
        {[[455, 740], [469, 740], [462, 733], [462, 747]].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={5} fill={PINK} strokeWidth={THIN} />
        ))}
        <circle cx={462} cy={740} r={3.5} fill={YELLOW} strokeWidth={THIN} />
        {/* Police and traffic */}
        <rect x={585} y={692} width={30} height={66} rx={6} fill={INK} />
        <circle cx={600} cy={705} r={7} fill={RED} strokeWidth={THIN} />
        <circle cx={600} cy={725} r={7} fill={ORANGE} strokeWidth={THIN} />
        <circle cx={600} cy={745} r={7} fill={GREEN} strokeWidth={THIN} />
        <path d="M600 758 L600 776" />
        {/* Public transport */}
        <rect x={720} y={704} width={82} height={52} rx={9} fill={SKY} />
        {[729, 752, 775].map(x => <rect key={x} x={x} y={713} width={17} height={15} fill={PAPER} strokeWidth={THIN} />)}
        <circle cx={740} cy={758} r={8} fill={PAPER} />
        <circle cx={782} cy={758} r={8} fill={PAPER} />
        {/* Rubbish collection */}
        <path d="M898 712 L942 712 L937 772 L903 772 Z" fill={MINT} />
        <rect x={893} y={702} width={54} height={10} rx={3} fill={GREEN} />
        <path d="M912 702 Q 920 692 928 702" strokeWidth={THIN} />
        <path d="M912 722 L913 762 M920 722 L920 762 M928 722 L927 762" strokeWidth={THIN} />
        {/* Cultural events */}
        <path d="M1069 762 L1069 717 L1102 709 L1102 754" />
        <circle cx={1062} cy={762} r={7} fill={INK} strokeWidth={THIN} />
        <circle cx={1095} cy={754} r={7} fill={INK} strokeWidth={THIN} />
        <path d="M1052 700 L1056 711 L1067 711 L1058 718 L1061 729 L1052 722 L1043 729 L1046 718 L1037 711 L1048 711 Z" fill={YELLOW} strokeWidth={THIN} />
      </g>

      {SERVICES.map(({ x, en, es }) => (
        <g key={x}>
          {en.map((line, index) => <Hand key={line} x={x} y={804 + index * 22} size={22} mid>{line}</Hand>)}
          <Hand x={x} y={en.length === 1 ? 828 : 850} size={18} mid grey>{es}</Hand>
        </g>
      ))}
    </g>
  );
}
