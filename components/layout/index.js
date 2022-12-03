import { useEffect } from 'react'
import styles from '../../styles/Layout.module.css'
import Navbar from './navbar'

export default function Layout({ children }) {

  useEffect(() => {

    let circle2 = document.querySelector('#circle2');
    document.addEventListener('mousemove', (e) => {
      circle2.style.left = e.pageX + 'px';
    });

  })

  return (
    <div class={styles.layout}>
      {/* <div id="circle1" class={styles.circle1}></div> */}
      <div id="circle2" class={styles.circle2}></div>
      {/* <div id="tronGrid" class={styles.bgGrid}></div> */}
      <Navbar />
      <main class={styles.main}>
        {children}
      </main>
    </div>
  )
}