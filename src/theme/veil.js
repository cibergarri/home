export const VEIL_DURATION = 1600;
export const SWITCHING_CLASS = 'theme-switching';

// Changes the theme under a sheet in the colour the page had, then fades the sheet out.
// Every element lands on its new colours in the same frame, with transitions suspended,
// so the whole page changes at one pace instead of each part at its own.
export function fadeThemeChange(applyTheme) {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const previousBackground = getComputedStyle(root).getPropertyValue('--c-background').trim();

  const veil = document.createElement('div');
  veil.setAttribute('aria-hidden', 'true');
  veil.dataset.themeVeil = '';
  veil.style.cssText = `position:fixed;inset:0;z-index:2147483647;pointer-events:none;background:${previousBackground}`;
  document.body.appendChild(veil);

  root.classList.add(SWITCHING_CLASS);
  applyTheme();
  void document.body.offsetHeight; // lay the new theme out while transitions are off
  root.classList.remove(SWITCHING_CLASS);

  if (reduceMotion || typeof veil.animate !== 'function') {
    veil.remove();
    return;
  }
  const fade = veil.animate([{ opacity: 1 }, { opacity: 0 }], { duration: VEIL_DURATION, easing: 'ease-out' });
  fade.onfinish = () => veil.remove();
  fade.oncancel = () => veil.remove();
}
