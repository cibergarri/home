
export const setThemeAction = (theme) => dispatch => {
  dispatch({
    type: 'SET_THEME',
    payload: theme,
  });
};

export const setLoadingAction = (loading) => dispatch => {
  document.getElementById('loader').style.opacity = loading ? '1' : '0';
  dispatch({
    type: 'SET_LOADING',
    payload: loading,
  });
};
