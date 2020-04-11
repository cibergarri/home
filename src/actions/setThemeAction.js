const themes = {
  day: {
    main: {
      primary: "blue",
      background: "#ffffff",
    },
  },
  night: {
    main: {
      primary: "red",
      background: "#282c34",
    },    
  },
};

export const setThemeAction = (theme) => dispatch => {
  dispatch({
   type: 'SET_THEME',
   payload: themes[theme],
  })
 }
