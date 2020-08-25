/* eslint-disable max-len */
import React from 'react';
// import PropTypes from 'prop-types';

import Summary from './summary';
import Projects from './projects';
// import {
//   Main, Body,
// } from './style';

import Layout from '../layout';

function Landing() {
  const content = (
    <>
      <Summary />
      <Projects />
    </>
  );
  return (
    <Layout content={content} />
  );
}

export default Landing;
