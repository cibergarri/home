import { THEMES } from '../constants/config';

const themes = {
  [THEMES.NORMAL]: {
    main: {
      name: 'normal',
      primary: '#0d0469',
      secondary: '#dc2287',
      background: '#ececf0',
      canvas: '#ffffff',
      textColor: '#0d0469',
      muted: '#4b4a73',
      line: 'rgba(13, 4, 105, 0.16)',
      lineStrong: 'rgba(13, 4, 105, 0.4)',
      accent: '#dc2287',
      chip: 'rgba(13, 4, 105, 0.07)',
    },
  },
  [THEMES.NIGHT]: {
    main: {
      name: 'night',
      primary: '#dedede',
      secondary: '#627e79',
      background: '#010012',
      canvas: '#060627',
      textColor: '#dedede',
      muted: '#9a9bb3',
      line: 'rgba(222, 222, 222, 0.14)',
      lineStrong: 'rgba(222, 222, 222, 0.4)',
      accent: '#8fb3ad',
      chip: 'rgba(222, 222, 222, 0.08)',
    },
  },
};

export default themes;
