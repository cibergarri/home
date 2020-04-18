import { THEMES } from '../constants/config';

const themes = {
  [THEMES.NORMAL]: {
    main: {
      name: 'normal',
      primary: "#0d0469",
      background: "#dedede",
    },
  },
  [THEMES.NIGHT]: {
    main: {
      name: 'night',
      primary: "#dedede",
      background: "#010012",
    },    
  },
};

export default themes;