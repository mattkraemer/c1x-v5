import { useEffect } from 'react'
import styles from '../../styles/Layout.module.css'
import Navbar from './navbar'

export default function Layout({ children }) {

  useEffect(() => {

    let circle2 = document.querySelector('#circle2');
    document.addEventListener('mousemove', (e) => {
      circle2.style.left = e.pageX + 'px';
    });

    let tronGridElem = document.querySelector('#tronGrid');
    document.addEventListener('scroll', () => {
      let offset = window.scrollY / (document.body.offsetHeight - window.innerHeight);
      tronGridElem.style.transform = 'perspective(20vw) rotateX(40deg) scale(' + (offset+2) + ',' + (offset+1) + ') translateZ(0)';
    })

  })

  return (
    <div class={styles.layout}>
      <div id="circle1" class={styles.circle1}></div>
      <div id="circle2" class={styles.circle2}></div>
      {/* <div id="tronGrid" class={styles.bgGrid}></div> */}
      <Navbar />
      <main class={styles.main}>
        {children}
      </main>
    </div>
  )
}