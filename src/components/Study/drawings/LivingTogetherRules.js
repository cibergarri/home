// Social Science, unit 2, page 26: the rules in the neighbourhood, drawn as a sketchnote with the
// Spanish in grey, on a ./RuleSheet. The pictures are the ones of the rules cards (./LivingTogether,
// 300 × 200), and one of its own for not disturbing other people.
import {
  YELLOW, MINT, PINK, SKY, ORANGE, THIN, ink, Hand, Person,
} from './sketch';
import { RULES } from './LivingTogether';
import RuleSheet from './RuleSheet';

const CARD = '0 0 300 200';

// Shh: a neighbour asleep behind a window at night, and a child with a finger on the lips.
function Quiet() {
  return (
    <g>
      <path d="M12 172 L288 172" {...ink} />
      <g {...ink}>
        <rect x={170} y={52} width={112} height={120} fill={SKY} />
        <path d="M162 54 L226 18 L290 54 Z" fill={ORANGE} />
        <rect x={194} y={76} width={64} height={46} fill="#3b4a6b" />
        <path d="M218 84 A 12 12 0 1 0 232 104 A 9 9 0 1 1 218 84 Z" fill={YELLOW} strokeWidth={THIN} />
      </g>
      <Hand x={236} y={70} size={20} grey>Zzz</Hand>
      <Person x={96} base={172} shirt={MINT} mouth="flat" hands={[[-22, -45], [4, -90]]} />
      <path d="M96 84 L96 96" {...ink} strokeWidth={THIN} />
      <Hand x={118} y={70} size={22}>shh!</Hand>
    </g>
  );
}

const RULES_OF_PAGE = [
  {
    Picture: RULES.bins, viewBox: CARD, colour: MINT,
    en: ['Use the *bins* and keep', 'the streets *clean*.'],
    es: 'Usa las papeleras y mantén limpias las calles.',
  },
  {
    Picture: RULES.separate, viewBox: CARD, colour: YELLOW,
    en: ['*Separate* your rubbish into', 'different *containers*.'],
    es: 'Separa la basura en distintos contenedores.',
  },
  {
    Picture: RULES.lead, viewBox: CARD, colour: ORANGE,
    en: ['Walk your dog on a *lead*.', '*Clean up* after them.'],
    es: 'Perro con correa; recoge lo que ensucie.',
  },
  {
    Picture: Quiet, viewBox: CARD, colour: SKY,
    en: ['Don’t *disturb*', 'other people.'],
    es: 'No molestes a los demás.',
  },
  {
    Picture: RULES.lookAfter, viewBox: CARD, colour: PINK,
    en: ['*Look after* the', '*facilities* we share.'],
    es: 'Cuida las instalaciones que compartimos.',
  },
  {
    Picture: RULES.seat, viewBox: CARD, colour: '#c3a6f2',
    en: ['*Help* our', '*neighbours*.'],
    es: 'Ayuda a tus vecinos.',
  },
];

export default function LivingTogetherRules() {
  return (
    <RuleSheet
      id="living-rules"
      title="Rules for living together"
      es="las normas de convivencia"
      intro={['The people who live near us are our *neighbours*.', 'We *respect* each other. We have *rules* to live together.']}
      rules={RULES_OF_PAGE}
    />
  );
}

