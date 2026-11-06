import { Kid } from './parts';

// Little pictures, 160 × 110 each, for the family words of the welcome unit: mum, dad, brother,
// sister, grandma, grandpa and the whole family. Each is a component to use inside an
// <svg viewBox="0 0 160 110">.

const LINE = '#24324a';
const SKIN = '#f2c9a0';
const GROUND = 104;

const round = v => Math.round(v * 100) / 100;

function Room({ colour = '#fdf1e4' }) {
  return (
    <g>
      <rect width={160} height={110} fill={colour} />
      <rect y={GROUND - 8} width={160} height={18} fill="#ead9bd" />
    </g>
  );
}

// A grown-up standing with their feet at (x, y), about 112 units tall before `scale`.
// `hair` is 'short', 'long', 'bun' (grey, on top) or 'bald' (grey at the sides). A `dress` hides
// the legs under a skirt; `beard`, `glasses`, `tie` and `stick` add those.
function Adult({
  x, y = GROUND, scale = 1, hair = 'short', hairColour = '#5a3a1e', top, bottom = '#3b4a66',
  dress = false, beard = false, moustache = false, glasses = false, tie = false, stick = false,
  lips = false, necklace = false,
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {hair === 'long' && <path d="M-17,-94 C-20,-118 20,-118 17,-94 L20,-66 H-20 Z" fill={hairColour} />}
      <rect x={-11} y={-44} width={9} height={42} rx={3} fill={bottom} />
      <rect x={2} y={-44} width={9} height={42} rx={3} fill={bottom} />
      <ellipse cx={-8} cy={-2} rx={8} ry={4} fill="#3a2a20" />
      <ellipse cx={8} cy={-2} rx={8} ry={4} fill="#3a2a20" />
      <path d="M-18,-76 L-27,-42 M18,-76 L27,-42" stroke={top} strokeWidth={9} strokeLinecap="round" fill="none" />
      <circle cx={-27} cy={-41} r={4.5} fill={SKIN} />
      <circle cx={27} cy={-41} r={4.5} fill={SKIN} />
      {dress
        ? <path d="M-16,-82 H16 L26,-26 H-26 Z" fill={top} stroke={LINE} strokeWidth={1.5} strokeLinejoin="round" />
        : <rect x={-18} y={-82} width={36} height={42} rx={8} fill={top} stroke={LINE} strokeWidth={1.5} />}
      {tie && <path d="M0,-80 l-4,6 l4,22 l4,-22 Z" fill="#e5484d" stroke={LINE} strokeWidth={1} />}
      {necklace && <path d="M-8,-81 Q0,-70 8,-81" fill="none" stroke="#f2c94c" strokeWidth={2.5} />}
      <rect x={-4} y={-88} width={8} height={8} fill={SKIN} />
      <circle cx={0} cy={-98} r={14} fill={SKIN} stroke={LINE} strokeWidth={1} />
      {hair === 'short' && <path d="M-14,-100 C-15,-118 15,-118 14,-100 C8,-107 -8,-107 -14,-100 Z" fill={hairColour} />}
      {hair === 'long' && (
        <g fill={hairColour}>
          <path d="M-15,-98 C-15,-117 15,-117 15,-98 C6,-108 -6,-108 -15,-98 Z" />
          <path d="M-15,-100 C-20,-90 -22,-78 -24,-68 C-18,-70 -14,-74 -12,-80 C-14,-88 -14,-94 -15,-100 Z" />
          <path d="M15,-100 C20,-90 22,-78 24,-68 C18,-70 14,-74 12,-80 C14,-88 14,-94 15,-100 Z" />
        </g>
      )}
      {hair === 'bun' && (
        <g fill="#c9ccd2" stroke="#9aa0a8" strokeWidth={1}>
          <circle cx={0} cy={-117} r={8} />
          <path d="M-15,-97 C-16,-117 16,-117 15,-97 C8,-106 -8,-106 -15,-97 Z" />
        </g>
      )}
      {hair === 'bald' && (
        <g fill="#d4d7dc" stroke="#9aa0a8" strokeWidth={1}>
          <path d="M-14,-90 C-18,-96 -17,-104 -12,-106 C-12,-100 -12,-96 -10,-92 Z" />
          <path d="M14,-90 C18,-96 17,-104 12,-106 C12,-100 12,-96 10,-92 Z" />
        </g>
      )}
      {beard && <path d="M-13,-98 C-14,-80 14,-80 13,-98 C10,-90 -10,-90 -13,-98 Z" fill={hairColour} />}
      {moustache && <path d="M-9,-90 Q-4,-95 0,-91 Q4,-95 9,-90 Q4,-88 0,-89 Q-4,-88 -9,-90 Z" fill="#d4d7dc" stroke="#9aa0a8" strokeWidth={0.8} />}
      <circle cx={-5} cy={-99} r={2} fill={LINE} />
      <circle cx={5} cy={-99} r={2} fill={LINE} />
      {glasses && (
        <g fill="none" stroke={LINE} strokeWidth={1.5}>
          <circle cx={-5.5} cy={-99} r={4.5} />
          <circle cx={5.5} cy={-99} r={4.5} />
          <path d="M-1,-99 h2" />
        </g>
      )}
      {!beard && (lips
        ? <path d="M-4,-91 Q0,-88 4,-91 Q0,-86 -4,-91 Z" fill="#e5484d" />
        : <path d="M-4,-91 Q0,-87 4,-91" fill="none" stroke={LINE} strokeWidth={1.6} strokeLinecap="round" />)}
      {beard && <path d="M-4,-91 Q0,-88 4,-91" fill="none" stroke="#f2c9a0" strokeWidth={1.6} strokeLinecap="round" />}
      {stick && <path d="M32,-2 V-40 q0,-8 -6,-6" fill="none" stroke="#7a5532" strokeWidth={3.5} strokeLinecap="round" />}
    </g>
  );
}

const MUM = {
  hair: 'long', hairColour: '#8a4a24', top: '#ef4f6f', bottom: SKIN, dress: true, lips: true, necklace: true,
};
const DAD = {
  hair: 'short', hairColour: '#4a2e18', top: '#4f8fe0', beard: true, tie: true,
};
const GRANDMA = {
  hair: 'bun', top: '#9b6be0', bottom: SKIN, dress: true, glasses: true, necklace: true,
};
const GRANDPA = {
  hair: 'bald', top: '#8a6a4a', bottom: '#6b7280', moustache: true, glasses: true, stick: true,
};

// Mum: a grown-up woman with long hair, red lips and a dress.
export function Mum() {
  return (
    <g>
      <Room />
      <Adult x={80} y={106} scale={0.8} {...MUM} />
    </g>
  );
}

// Dad: a grown-up man with a beard, a shirt and a tie.
export function Dad() {
  return (
    <g>
      <Room />
      <Adult x={80} y={106} scale={0.8} {...DAD} />
    </g>
  );
}

// Grandma: grey hair in a bun and glasses.
export function Grandma() {
  return (
    <g>
      <Room colour="#f3ecfb" />
      <Adult x={80} y={106} scale={0.8} {...GRANDMA} />
    </g>
  );
}

// Grandpa: bald with grey hair at the sides, a grey moustache, glasses and a walking stick.
export function Grandpa() {
  return (
    <g>
      <Room colour="#eef3e8" />
      <Adult x={76} y={106} scale={0.8} {...GRANDPA} />
    </g>
  );
}

// Brother: a boy, Toby, with a ball.
export function Brother() {
  return (
    <g>
      <Room colour="#e8f2fc" />
      <Kid name="Toby" x={70} y={GROUND} scale={0.9} label={false} />
      <circle cx={112} cy={92} r={12} fill="#f2994a" stroke={LINE} strokeWidth={1.5} />
      <path d="M100,92 h24 M112,80 v24" stroke={LINE} strokeWidth={1.2} />
    </g>
  );
}

// Sister: a girl, Daisy, with a flower.
export function Sister() {
  return (
    <g>
      <Room colour="#fdeaf2" />
      <Kid name="Daisy" x={70} y={GROUND} scale={0.9} label={false} />
      <path d="M110,100 V72" stroke="#3e8e41" strokeWidth={3} />
      {[0, 72, 144, 216, 288].map((angle) => {
        const a = (angle * Math.PI) / 180;
        return <circle key={angle} cx={round(110 + 7 * Math.cos(a))} cy={round(66 + 7 * Math.sin(a))} r={5} fill="#f2c94c" />;
      })}
      <circle cx={110} cy={66} r={4} fill="#e06a4a" />
    </g>
  );
}

// The family: grandpa, grandma, dad, mum and the two children, side by side, under a heart.
export function Family() {
  return (
    <g>
      <Room />
      <path d="M80,16 c-6,-8 -16,-2 -10,6 l10,9 l10,-9 c6,-8 -4,-14 -10,-6 Z" fill="#ef4f6f" />
      <Adult x={18} y={106} scale={0.56} {...GRANDPA} stick={false} />
      <Adult x={43} y={106} scale={0.56} {...GRANDMA} />
      <Kid name="Toby" x={68} y={GROUND} scale={0.46} label={false} />
      <Kid name="Daisy" x={92} y={GROUND} scale={0.46} label={false} />
      <Adult x={117} y={106} scale={0.6} {...MUM} />
      <Adult x={142} y={106} scale={0.6} {...DAD} />
    </g>
  );
}
