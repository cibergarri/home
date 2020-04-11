import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from 'styled-components';

import * as serviceWorker from './serviceWorker';
import './index.css';

import App from './views/app/App.js';
import Landing from './views/landing/index.js';

const hist = createBrowserHistory();

const theme = {
  main: {
    primary: "white",
    background: "#282c34",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router history={hist}>
        <Switch>
          <Route path="/app" component={App} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>,
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
