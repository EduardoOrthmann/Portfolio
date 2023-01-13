import Head from 'next/head';
import Contact from '../containers/Contact';
import Experiences from '../containers/Experiences';
import HomePage from '../containers/HomePage';
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
        <HomePage />
        <Projects />
        <Skills />
        <Experiences />
        <Contact />
      </main>
    </div>
  );
}
