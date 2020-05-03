import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StylesProvider } from '@material-ui/core/styles';
import configureStore from './store';
import * as serviceWorker from './serviceWorker';
import './index.css';
import './i18n';


// Deferred load of the App so the static html with the css animation loads very fast
const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <Provider store={configureStore()}>
        <Suspense fallback={<div>Loading...</div>}><App /></Suspense>
      </Provider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
