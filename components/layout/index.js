import { useEffect } from 'react'
import styles from '../../styles/Layout.module.css'
import Navbar from './navbar'

export default function Layout({ children }) {

  useEffect(() => {
    let circle1 = document.getElementById('circle1');

    const onMouseMove = (e) =>{
      circle1.style.left = e.pageX + 'px';
      circle1.style.top = e.pageY + 'px';
    }

    document.addEventListener('mousemove', onMouseMove);
  })

  return (
    <div class={styles.layout}>
      <div id="circle1" class={styles.circle1}></div>
      <Navbar />
      <main class={styles.main}>
        {children}
      </main>
    </div>
  )
}