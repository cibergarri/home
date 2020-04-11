import { createStore, applyMiddleware, compose } from 'redux';
import reduxCookiesMiddleware, { getStateFromCookies } from 'redux-cookies-middleware';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const defaultTheme = 'normal';

const defaultState = () => ({
  config: {},
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// state to persist in cookies
const paths = {
  'config.theme': { name: 'my_theme' },
};

const initialState = getStateFromCookies(defaultState, paths);

initialState.config.theme = initialState.config.theme || defaultTheme;

export default function configureStore() {
 return createStore(
   rootReducer,
   initialState,
   composeEnhancers(applyMiddleware(
     thunk,
     reduxCookiesMiddleware(paths)
    ))
 );
}