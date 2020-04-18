/*
 src/App.js
*/
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';

// Themes
import themes from './styles/themes';

// Routes
import Landing from './views/landing';

const hist = createBrowserHistory();

const mapStateToProps = (state) => ({
  theme: state.config.theme,
});

function App(props) {
  const { theme } = props;
  return (
    <ThemeProvider theme={themes[theme]}>
      <Router history={hist}>
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default connect(mapStateToProps)(App);
