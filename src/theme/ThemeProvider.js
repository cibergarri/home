'use client';

import {
  createContext, useCallback, useContext, useMemo, useSyncExternalStore,
} from 'react';

import { fadeThemeChange } from './veil';

export const THEMES = {
  NORMAL: 'normal',
  NIGHT: 'night',
};

export const THEME_STORAGE_KEY = 'theme';

const ThemeContext = createContext({ theme: THEMES.NORMAL, toggleTheme: () => {} });

// The data-theme attribute on <html> is the source of truth. The inline script in
// the layout sets it before hydration, and the CSS variables key off it.
const readTheme = () => (
  document.documentElement.dataset.theme === THEMES.NIGHT ? THEMES.NIGHT : THEMES.NORMAL
);
const serverTheme = () => THEMES.NORMAL;
const subscribe = (onChange) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
};

export function ThemeProvider({ children }) {
  const theme = useSyncExternalStore(subscribe, readTheme, serverTheme);

  const toggleTheme = useCallback(() => {
    const next = readTheme() === THEMES.NIGHT ? THEMES.NORMAL : THEMES.NIGHT;
    fadeThemeChange(() => {
      document.documentElement.dataset.theme = next;
    });
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the choice then lasts for the visit.
    }
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
