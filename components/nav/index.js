import Link from "next/link";
import styles from '../../styles/Nav.module.scss'

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarInner + " container"}>
        <header>
          <span className="logo">c1x.dev</span>
        </header>
        <ul>
          <li>
            <Link href="#">Techstack</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Principles</Link>
          </li>
          <li>
            <Link href="#">Projects</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};