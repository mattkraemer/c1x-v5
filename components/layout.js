import styles from '../styles/Layout.module.css'
import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <div class={styles.layout}>
      <Navbar />
      <main class={styles.main}>
        {children}
      </main>
    </div>
  )
}