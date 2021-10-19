import styles from '../../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <div class="container">
        <div class={styles.grid}>
          <Link href="#">Go to top</Link>
          <Link href="#" class={styles.logo}>c1x.dev</Link>
          <Link href="#">Imprint</Link>
        </div>
      </div>
    </footer>
  )
}