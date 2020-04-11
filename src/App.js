/*
 src/App.js
*/
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from 'styled-components';

// Routes
import Landing from './views/landing/index.js';

const hist = createBrowserHistory();

const mapStateToProps = state => {
  return {
    theme: state.config.theme,
  };
}

function App(props) {
  return (
    <ThemeProvider theme={props.theme}>
    <Router history={hist}>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </Router>,
  </ThemeProvider>
  )
}
export default connect(mapStateToProps)(App);