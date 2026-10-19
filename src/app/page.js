import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TerminalLink from '@/components/TerminalLink';
import Intro from '@/sections/Intro';
import Experience from '@/sections/Experience';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Background from '@/sections/Background';
import Contact from '@/sections/Contact';
import { Page } from '@/styles';
import { buildPersonJsonLd } from '@/content/llms';

// Who the site is about, for search engines and AI crawlers. "<" is escaped so the data can never
// close the script tag.
const personJsonLd = JSON.stringify(buildPersonJsonLd()).replace(/</g, '\\u003c');

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personJsonLd }} />
      <Header />
      <Page>
        <Intro />
        <Experience />
        <Skills />
        <Background />
        <Projects />
        <Contact />
      </Page>
      <Footer />
      <TerminalLink />
    </>
  );
}
