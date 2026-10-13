import { createStore, applyMiddleware, compose } from 'redux';
import reduxCookiesMiddleware, { getStateFromCookies } from 'redux-cookies-middleware';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';
import { THEMES } from './constants/config';

const prefersDark = () => typeof window.matchMedia === 'function'
  && window.matchMedia('(prefers-color-scheme: dark)').matches;

const getDefaultState = () => ({
  config: {
    theme: null,
    loading: true,
  },
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// state to persist in cookies
const paths = {
  'config.theme': { name: 'my_theme' },
};

const initialState = getStateFromCookies(getDefaultState(), paths);
// Without a saved preference, follow the operating system setting.
initialState.config.theme = initialState.config.theme
  || (prefersDark() ? THEMES.NIGHT : THEMES.NORMAL);

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(
      thunk,
      reduxCookiesMiddleware(paths),
    )),
  );
}
