// Reads a word aloud with the browser's own voices, in British English as taught at school, and a
// little slower than normal. Browsers without speech synthesis stay silent.
const LANG = 'en-GB';

const pickVoice = (voices) => (
  voices.find(voice => voice.lang === LANG && voice.localService)
  ?? voices.find(voice => voice.lang === LANG)
  ?? voices.find(voice => voice.lang?.startsWith('en'))
);

export const canSpeak = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

export function speak(text) {
  if (!canSpeak()) return;
  const { speechSynthesis } = window;
  speechSynthesis.cancel();
  const utterance = new window.SpeechSynthesisUtterance(text);
  utterance.lang = LANG;
  utterance.rate = 0.85;
  const voice = pickVoice(speechSynthesis.getVoices?.() ?? []);
  if (voice) utterance.voice = voice;
  speechSynthesis.speak(utterance);
}
