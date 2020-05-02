import { createStore, applyMiddleware, compose } from 'redux';
import reduxCookiesMiddleware, { getStateFromCookies } from 'redux-cookies-middleware';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const DEFAULT_THEME = 'normal';

const getDefaultState = () => ({
  config: {
    theme: DEFAULT_THEME,
    loading: true,
  },
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// state to persist in cookies
const paths = {
  'config.theme': { name: 'my_theme' },
};

const initialState = getStateFromCookies(getDefaultState(), paths);
initialState.config.theme = initialState.config.theme || DEFAULT_THEME;

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
