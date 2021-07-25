import Head from 'next/head'
import styles from '../styles/Home.module.scss'

// Components
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import Jumbotron from '../components/Jumbotron';
import Services from '../components/Services';
import Principles from '../components/Principles';
import Techstack from '../components/Techstack';
import Projects from '../components/Projects';
import About from '../components/About';

export default function Home() {
  return (
    <>
      <Head>
        <title>c1x.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.layout}>
        <Nav />
        <main>
          <section className="content">
            <Jumbotron />
            <Techstack />
            <Services />
            <Projects />
            <About />
          </section>
          <Aside />
        </main>
      </div>
    </>
  )
}
