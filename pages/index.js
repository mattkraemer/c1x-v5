import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import BG from '../svg/bg.svg'

// Components
import Nav from '../components/nav';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>c1x.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BG />
      <Nav />
    </div>
  )
}
