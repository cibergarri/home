'use client';

import { useSyncExternalStore } from 'react';

// Who is studying, kept in this browser only: the name typed in the settings. Without one, the
// pages and games speak to nobody in particular.
const KEY = 'study-profile';
const CHANGED = 'study-profile-changed';

const read = () => {
  try {
    return window.localStorage.getItem(KEY) ?? '';
  } catch {
    return ''; // storage can be missing (a private window)
  }
};

const parse = (stored) => {
  try {
    return JSON.parse(stored);
  } catch {
    return {};
  }
};

export const loadProfile = () => {
  const { name } = parse(read() || '{}');
  return { name: typeof name === 'string' ? name.trim() : '' };
};

export const saveProfile = ({ name }) => {
  try {
    const trimmed = name.trim();
    if (trimmed) window.localStorage.setItem(KEY, JSON.stringify({ name: trimmed }));
    else window.localStorage.removeItem(KEY);
  } catch {
    // Nowhere to keep it: it stays as it was.
  }
  window.dispatchEvent(new Event(CHANGED));
};

const subscribe = (onChange) => {
  window.addEventListener(CHANGED, onChange);
  window.addEventListener('storage', onChange); // changed in another tab
  return () => {
    window.removeEventListener(CHANGED, onChange);
    window.removeEventListener('storage', onChange);
  };
};

// The name of who is studying, or '' when there is none (and on the server, which can't know).
export const useName = () => useSyncExternalStore(subscribe, () => loadProfile().name, () => '');
