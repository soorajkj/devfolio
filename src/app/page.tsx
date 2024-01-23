import { Fragment } from 'react';
import About from '@components/about';
import Experience from '@components/experience';
import Expertise from '@components/expertise';
import Footer from '@components/footer';
import Header from '@components/header';
import Projects from '@components/projects';

export default function Page() {
  return (
    <Fragment>
      <Header />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Footer />
    </Fragment>
  );
}
