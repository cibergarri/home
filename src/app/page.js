import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Intro from '@/sections/Intro';
import Experience from '@/sections/Experience';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Background from '@/sections/Background';
import Contact from '@/sections/Contact';
import { Page } from '@/styles';

export default function Home() {
  return (
    <>
      <Header />
      <Page>
        <Intro />
        <Experience />
        <Skills />
        <Projects />
        <Background />
        <Contact />
      </Page>
      <Footer />
    </>
  );
}
