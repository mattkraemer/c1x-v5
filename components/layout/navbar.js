import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <section class={styles.navbar}>
      <nav class="container-lg">
        <div class={styles.navSection}>
          <Link href="#">
            <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.417 78.75v52.5a5.833 5.833 0 0 0 5.833 5.833H52.5a2.917 2.917 0 0 0 2.917-2.916v-23.334a14.583 14.583 0 0 1 29.166 0v23.334a2.917 2.917 0 0 0 2.917 2.916h26.25a5.833 5.833 0 0 0 5.833-5.833V81.667M2.917 75.833 70 8.75l67.083 67.083" stroke-width="5.83333"/>
              </g>
            </svg>
          </Link>
          <Link href="#technologies">Technologies</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
        </div>
        <span class={styles.logo}><span class={styles.c1x}>c1x</span><span class={styles.dev}>dev</span></span>
        <div class={styles.navSection}>
          <Link target="_blank" rel="noreferrer" href="https://github.com/mattkraemer">
            <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
              <path d="M70 2.917a67.083 67.083 0 0 0-21.204 130.748c3.348.583 4.41-1.382 4.41-3.156 0-1.604.035-6.049 0-11.666-18.667 4.048-22.523-8.838-22.523-8.838a17.75 17.75 0 0 0-7.443-9.812c-6.09-4.165.455-4.083.455-4.083a14.082 14.082 0 0 1 10.278 6.907 14.28 14.28 0 0 0 19.519 5.576 14.292 14.292 0 0 1 4.258-8.936c-14.892-1.704-30.555-7.455-30.555-33.169a25.94 25.94 0 0 1 6.913-18.001 24.068 24.068 0 0 1 .653-17.751s5.64-1.803 18.445 6.883a63.484 63.484 0 0 1 33.6 0c12.833-8.68 18.427-6.883 18.427-6.883a24.098 24.098 0 0 1 .665 17.75A25.912 25.912 0 0 1 112.8 66.5c0 25.783-15.686 31.447-30.63 33.098a15.907 15.907 0 0 1 4.59 12.367v18.573c0 1.791 1.085 3.774 4.492 3.127A67.083 67.083 0 0 0 70 2.917Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.83333"/>
            </svg>
          </Link>
          <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/matthias-kraemer1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
              <g transform="scale(5.83333)">
                <path d="M6.5 22.5h-5v-13h5Zm9-9a2 2 0 0 0-2 2v7h-5v-13h5v1.485a6.307 6.307 0 0 1 3.99-1.495c2.962 0 5.01 2.2 5.01 6.355V22.5h-5v-7a2 2 0 0 0-2-2ZM6.5 5A2.5 2.5 0 1 1 4 2.5 2.5 2.5 0 0 1 6.5 5Z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
          </Link>
          <Link target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/7437415/matthias-kr%c3%a4mer">
            <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M102.083 87.5v37.917a11.667 11.667 0 0 1-11.666 11.666H26.25a11.667 11.667 0 0 1-11.667-11.666V87.5M81.667 113.75H35M83.924 98.082l-45.657-9.69M89.378 83.213 46.731 64.266M97.807 69.808 60.02 42.425M108.827 58.438 77.542 23.812M121.97 49.607 98.547 9.24" stroke-width="5.83333"/>
              </g>
            </svg>
          </Link>
          <Link href="mailto:matthias@c1x.dev">
            <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2.917 23.065h134.166v93.333H2.917Z" stroke-width="5.83333"/>
                <path d="M133.648 26.46 70 78.482 6.352 26.46" stroke-width="5.83333"/>
              </g>
            </svg>
            Email me
          </Link>
        </div>
      </nav>
    </section>
  )
}