import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <section class={styles.navbar}>
      <a href="" class={styles.logo}>c1x.dev</a>
      <nav>
        <Link href="#technologies"><a>Technologies</a></Link>
        <Link href="#projects"><a>Projects</a></Link>
        <Link href="#about"><a>About</a></Link>
      </nav>
      <Link href="mailto:matthias@c1x.dev"><a class={styles.button}>Email me</a></Link>
    </section>
  )
}