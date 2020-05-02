/*
 src/App.js
*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';

// Themes
import themes from './styles/themes';

// Routes
import Landing from './views/landing';

const hist = createBrowserHistory();

const mapStateToProps = ({ config }) => ({
  theme: config.theme,
});

function App(props) {
  const { theme } = props;
  document.getElementById('loader').style.transition = 'all 2s ease-in';
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

App.propTypes = {
  theme: PropTypes.shape({}).isRequired,
};

App.defaultProps = {};

export default connect(mapStateToProps)(App);
