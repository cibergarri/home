// A sheet of rules as a sketchnote, as on pages 26 and 28 of Social Science: the title in a yellow
// cloud with its Spanish, a line or two saying what the rules are for, and six rules in two rows of
// three, each a little picture (`Picture`, drawn in `viewBox`, 340 × 200 unless it says) over the
// rule (`en`, a line each, with *key words*) and its Spanish (`es`). 1200 × 940; `id` names the
// sheet's wobble filter and arrowhead, `${id}-rough` and `${id}-head`.
import {
  INK, PAPER, YELLOW, THIN, ink, Title, Hand, Marker, SketchDefs,
} from './sketch';

const COLUMNS = [30, 430, 830];
const ROWS = [210, 580];

export default function RuleSheet({
  id, title, es, intro, rules,
}) {
  const rough = `url(#${id}-rough)`;
  return (
    <g>
      <SketchDefs id={id} />

      <g {...ink} filter={rough}>
        <ellipse cx={600} cy={84} rx={270} ry={58} fill={YELLOW} />
        <ellipse cx={603} cy={81} rx={276} ry={61} strokeWidth={THIN} />
      </g>
      <Title x={600} y={86} size={44} mid>{title}</Title>
      <Hand x={600} y={118} size={21} mid grey>{es}</Hand>
      {intro.map((line, k) => <Hand key={line} x={600} y={intro.length > 1 ? 166 + k * 28 : 180} size={25} mid>{line}</Hand>)}

      {rules.map(({
        Picture, viewBox = '0 0 340 200', colour, en, es: spanish,
      }, n) => {
        const [x, y] = [COLUMNS[n % 3], ROWS[Math.floor(n / 3)]];
        return (
          <g key={spanish}>
            <g {...ink} filter={rough}>
              <rect x={x} y={y} width={340} height={350} rx={20} fill={PAPER} stroke={INK} />
            </g>
            <g transform={`translate(${x} ${y + 8})`}>
              <svg width={340} height={200} viewBox={viewBox} overflow="hidden">
                <g filter={rough}>
                  <Picture />
                </g>
              </svg>
            </g>
            <Marker x={x + 14} y={y + 14} width={36} height={36} colour={colour} tilt={-4} />
            <Title x={x + 32} y={y + 42} size={30} mid>{n + 1}</Title>
            {en.map((line, k) => <Hand key={line} x={x + 170} y={y + 248 + k * 32} size={25} mid>{line}</Hand>)}
            <Hand x={x + 170} y={y + 320} size={18} mid grey>{spanish}</Hand>
          </g>
        );
      })}
    </g>
  );
}
