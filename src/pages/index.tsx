import Head from 'next/head';
import About from '../containers/About';
import Contact from '../containers/Contact';
import Header from '../containers/Header';
import Navbar from '../containers/Navbar';
import Projects from '../containers/Projects';
import Skills from '../containers/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfólio</title>
        <meta name="description" content="Personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
