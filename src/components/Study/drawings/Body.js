// The human body for Naturales, each in a 1000 × 640 box with room on both sides for the labels:
// a child's skeleton over the shape of the body, as in the book, and a child seen from the front
// with the organs of breathing or of digestion drawn in.

const SKIN = '#f2c7a5';
const SKIN_LINE = '#c98f6b';
const SHAPE = '#6f5a58'; // the body behind the skeleton
const BONE = '#f4e9cf';
const BONE_LINE = '#b39b6a';

// The shape of a child from the front: head, neck, body, arms and legs, in one colour.
function Shape({ fill, line }) {
  const limb = {
    fill: 'none', stroke: fill, strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  return (
    <g>
      {line && (
        <g stroke={line} strokeWidth={4} fill="none">
          <ellipse cx={500} cy={88} rx={54} ry={62} />
        </g>
      )}
      <path d="M432,180 L408,285 L394,385" {...limb} strokeWidth={line ? 42 : 40} stroke={line ?? fill} />
      <path d="M568,180 L592,285 L606,385" {...limb} strokeWidth={line ? 42 : 40} stroke={line ?? fill} />
      <path d="M432,180 L408,285 L394,385" {...limb} strokeWidth={36} />
      <path d="M568,180 L592,285 L606,385" {...limb} strokeWidth={36} />
      <circle cx={392} cy={405} r={20} fill={fill} />
      <circle cx={608} cy={405} r={20} fill={fill} />
      <path d="M466,380 L463,495 L461,598" {...limb} strokeWidth={line ? 50 : 48} stroke={line ?? fill} />
      <path d="M534,380 L537,495 L539,598" {...limb} strokeWidth={line ? 50 : 48} stroke={line ?? fill} />
      <path d="M466,380 L463,495 L461,598" {...limb} strokeWidth={44} />
      <path d="M534,380 L537,495 L539,598" {...limb} strokeWidth={44} />
      <ellipse cx={452} cy={614} rx={30} ry={13} fill={fill} />
      <ellipse cx={548} cy={614} rx={30} ry={13} fill={fill} />
      <rect x={484} y={136} width={32} height={34} fill={fill} />
      <path d="M440,160 Q500,150 560,160 Q590,166 582,200 L566,330 Q570,370 562,396 L438,396 Q430,370 434,330 L418,200 Q410,166 440,160 Z" fill={fill} stroke={line} strokeWidth={line ? 3 : 0} />
      <ellipse cx={500} cy={88} rx={52} ry={60} fill={fill} />
    </g>
  );
}

const boneLine = {
  fill: 'none', stroke: BONE, strokeLinecap: 'round', strokeLinejoin: 'round',
};

// A bone with a darker edge: drawn twice, wide and dark, then a little narrower and light.
function Bone({ d, width }) {
  return (
    <g>
      <path d={d} {...boneLine} stroke={BONE_LINE} strokeWidth={width + 4} />
      <path d={d} {...boneLine} strokeWidth={width} />
    </g>
  );
}

const RIBS = [0, 1, 2, 3, 4].map((i) => {
  const y = 186 + i * 22;
  const reach = 50 - Math.abs(i - 1.5) * 4;
  return [
    `M497,${y} C${470},${y - 8} ${500 - reach},${y - 2} ${500 - reach - 2},${y + 18}`,
    `M503,${y} C${530},${y - 8} ${500 + reach},${y - 2} ${500 + reach + 2},${y + 18}`,
  ];
}).flat();

const VERTEBRAE = Array.from({ length: 15 }, (_, i) => 150 + i * 14);

export function Skeleton() {
  return (
    <g>
      <rect width={1000} height={640} fill="#fdf6ec" />
      <Shape fill={SHAPE} />

      {/* Arms: upper arm, then the two bones of the forearm, and the hand. */}
      {[1, -1].map(side => (
        <g key={side} transform={side === -1 ? 'translate(1000 0) scale(-1 1)' : undefined}>
          <Bone d="M437,178 L411,281" width={10} />
          <Bone d="M408,288 L394,378" width={6} />
          <Bone d="M415,289 L402,379" width={6} />
          <Bone d="M398,386 L386,410 M398,386 L393,414 M398,386 L400,415 M398,386 L407,410" width={3} />
          <Bone d="M468,394 L464,488" width={13} />
          <Bone d="M461,503 L459,596" width={10} />
          <Bone d="M472,506 L471,592" width={4} />
          <Bone d="M460,604 L436,616" width={7} />
          <Bone d="M498,165 L441,174" width={7} />
        </g>
      ))}

      {/* The spine down the middle, the ribs and the breastbone, and the hips. */}
      {VERTEBRAE.map(y => <rect key={y} x={493} y={y} width={14} height={10} rx={3} fill={BONE} stroke={BONE_LINE} strokeWidth={1.5} />)}
      {RIBS.map(d => <Bone key={d} d={d} width={6} />)}
      <rect x={494} y={176} width={12} height={84} rx={5} fill={BONE} stroke={BONE_LINE} strokeWidth={1.5} />
      <path d="M446,352 Q500,330 554,352 L566,386 Q534,378 512,404 L488,404 Q466,378 434,386 Z" fill={BONE} stroke={BONE_LINE} strokeWidth={2} />
      <ellipse cx={470} cy={378} rx={10} ry={8} fill={SHAPE} />
      <ellipse cx={530} cy={378} rx={10} ry={8} fill={SHAPE} />

      {/* The skull, with its eyes, nose and teeth. */}
      <path d="M500,34 C548,34 552,78 548,100 C546,116 536,120 530,126 L528,140 L472,140 L470,126 C464,120 454,116 452,100 C448,78 452,34 500,34 Z" fill={BONE} stroke={BONE_LINE} strokeWidth={2} />
      <ellipse cx={482} cy={90} rx={11} ry={12} fill={SHAPE} />
      <ellipse cx={518} cy={90} rx={11} ry={12} fill={SHAPE} />
      <path d="M500,102 L493,116 L507,116 Z" fill={SHAPE} />
      <path d="M478,128 H522 M486,124 V134 M494,124 V136 M502,124 V136 M510,124 V136 M518,124 V134" stroke={BONE_LINE} strokeWidth={1.5} fill="none" />
    </g>
  );
}

// A child from the front, with a face, for the organs inside.
function Child() {
  return (
    <g>
      <Shape fill={SKIN} line={SKIN_LINE} />
      <path d="M448,62 C452,24 548,24 552,62 C540,46 460,46 448,62 Z" fill="#8a5a3b" />
      <circle cx={482} cy={84} r={5} fill="#3b2a20" />
      <circle cx={518} cy={84} r={5} fill="#3b2a20" />
    </g>
  );
}

// The air goes in by the nose or the mouth, down the windpipe and into the two lungs.
export function Breathing() {
  return (
    <g>
      <rect width={1000} height={640} fill="#fdf6ec" />
      <Child />
      <path d="M500,92 C492,104 492,110 500,112 C508,110 508,104 500,92 Z" fill="#e48a7a" stroke="#b9584a" strokeWidth={2} />
      <path d="M484,126 Q500,138 516,126 Q500,130 484,126 Z" fill="#c4554b" stroke="#9c3b34" strokeWidth={2} />
      <path d="M500,112 C512,114 512,124 506,128 L506,136" fill="none" stroke="#e07b6c" strokeWidth={6} strokeLinecap="round" opacity={0.8} />
      <path d="M500,138 V222 M500,222 C488,232 476,238 466,244 M500,222 C512,232 524,238 534,244" fill="none" stroke="#f3b9b0" strokeWidth={14} strokeLinecap="round" />
      {Array.from({ length: 7 }, (_, i) => <line key={i} x1={493} x2={507} y1={146 + i * 11} y2={146 + i * 11} stroke="#d98f84" strokeWidth={2} />)}
      <path d="M488,196 C450,190 430,230 430,280 C430,330 446,350 470,350 C486,350 490,330 490,300 L490,232 Z" fill="#c96a7a" stroke="#934354" strokeWidth={2.5} />
      <path d="M512,196 C550,190 570,230 570,280 C570,330 554,350 530,350 C514,350 510,330 510,300 L510,232 Z" fill="#e48f9f" stroke="#934354" strokeWidth={2.5} />
      <path d="M466,244 L452,270 M466,244 L470,282 M534,244 L548,270 M534,244 L530,282" stroke="#934354" strokeWidth={2} opacity={0.7} />
    </g>
  );
}

// The food goes in by the mouth, down the gullet to the stomach, through the intestines and out.
export function Digestion() {
  return (
    <g>
      <rect width={1000} height={640} fill="#fdf6ec" />
      <Child />
      <path d="M500,98 C494,106 494,110 500,112 C506,110 506,106 500,98 Z" fill="none" stroke={SKIN_LINE} strokeWidth={2} />
      <ellipse cx={500} cy={124} rx={14} ry={7} fill="#c4554b" stroke="#9c3b34" strokeWidth={2} />
      <path d="M500,130 V236 C500,246 506,252 514,254" fill="none" stroke="#e58f8f" strokeWidth={12} strokeLinecap="round" />
      <path d="M512,240 C552,226 572,252 566,282 C560,312 520,318 494,304 C482,298 486,286 498,288 C520,294 540,286 540,268 C540,254 526,250 512,256 Z" fill="#e07a85" stroke="#a9414d" strokeWidth={2.5} />
      <path d="M452,318 H548 C560,318 560,330 548,330 H452 C440,330 440,342 452,342 H548 C560,342 560,354 548,354 H452 C440,354 440,366 452,366 H500" fill="none" stroke="#f2a7a0" strokeWidth={10} strokeLinejoin="round" strokeLinecap="round" />
      <path d="M440,312 V376 Q440,384 448,384 H552 Q560,384 560,376 V312" fill="none" stroke="#e2867c" strokeWidth={14} strokeLinejoin="round" />
      <path d="M500,384 V392" stroke="#e2867c" strokeWidth={10} strokeLinecap="round" />
      <circle cx={500} cy={394} r={5} fill="#a9414d" />
    </g>
  );
}
