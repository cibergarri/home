
export const setThemeAction = (theme) => dispatch => {
  dispatch({
   type: 'SET_THEME',
   payload: theme,
  })
 }
