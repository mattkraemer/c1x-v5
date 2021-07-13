import Head from 'next/head'
import styles from '../styles/Home.module.scss'

// Components
import Nav from '../components/nav';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
    </div>
  )
}
