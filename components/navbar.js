import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <section class={styles.navbar}>
      <a href="" class={styles.logo}>c1x.dev</a>
      <nav>
        <Link href="/about"><a>Technologies</a></Link>
        <Link href="/about"><a>Projects</a></Link>
        <Link href="/about"><a>About</a></Link>
      </nav>
    </section>
  )
}