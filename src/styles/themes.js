import { THEMES } from '../constants/config';

const themes = {
  [THEMES.NORMAL]: {
    main: {
      name: 'normal',
      primary: '#0d0469',
      secondary: '#dc2287',
      background: '#dedede',
      canvas: '#ffffff',
      textColor: '#110469',
    },
  },
  [THEMES.NIGHT]: {
    main: {
      name: 'night',
      primary: '#dedede',
      secondary: '#627e79',
      background: '#010012',
      canvas: '#060627',
      textColor: '#ffffff',
    },
  },
};

export default themes;
