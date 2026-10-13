import React from 'react';

import Intro from './sections/Intro';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Background from './sections/Background';
import Contact from './sections/Contact';

import Layout from '../layout';
import { Page } from '../../styles';

function Landing() {
  const content = (
    <Page>
      <Intro />
      <Experience />
      <Skills />
      <Projects />
      <Background />
      <Contact />
    </Page>
  );
  return (
    <Layout content={content} />
  );
}

export default Landing;
