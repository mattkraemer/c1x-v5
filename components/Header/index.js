import styles from '../../styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <div class={styles.header}>
      <div class={styles.inner}>
        <h1>Modern Frontend Development</h1>
        <h2>I build state-of-the-art User Interfaces, Websites & Web Applications</h2>
        <p>
          Check out my <Link href="/projects"><a>current projects</a></Link> or <Link href="/about"><a>learn more about me</a></Link>.
        </p>
      </div>
    </div>
  )
}