// Reads a word aloud with the browser's own voices, a little slower than normal: in British English
// as taught at school, or in Spanish for the subjects studied in Spanish. Browsers without speech
// synthesis stay silent.
const VOICES = { en: 'en-GB', es: 'es-ES' };

const pickVoice = (voices, locale) => (
  voices.find(voice => voice.lang === locale && voice.localService)
  ?? voices.find(voice => voice.lang === locale)
  ?? voices.find(voice => voice.lang?.startsWith(locale.slice(0, 2)))
);

export const canSpeak = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

export function speak(text, lang = 'en') {
  if (!canSpeak()) return;
  const locale = VOICES[lang] ?? VOICES.en;
  const { speechSynthesis } = window;
  speechSynthesis.cancel();
  const utterance = new window.SpeechSynthesisUtterance(text);
  utterance.lang = locale;
  utterance.rate = 0.85;
  const voice = pickVoice(speechSynthesis.getVoices?.() ?? [], locale);
  if (voice) utterance.voice = voice;
  speechSynthesis.speak(utterance);
}
