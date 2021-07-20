import Link from "next/link";
import styles from '../../styles/Aside.module.scss'

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <h3>Contact me</h3>
      <ul>
        <li>
          <Link href="#">Send Email</Link>
        </li>
        <li>
          <Link href="#">LinkedIn</Link>
        </li>
        <li>
          <Link href="#">Github</Link>
        </li>
        <li>
          <Link href="#">AngelList</Link>
        </li>
        <li>
          <Link href="#">Xing</Link>
        </li>
      </ul>
    </aside>
  )
};