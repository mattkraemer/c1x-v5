import styles from '../../styles/About.module.css'

export default function About() {
  return (
    <section id="about" class={styles.about}>
      <div class="container">
        <h1 class={styles.headline}>About me</h1>
        <div class={styles.grid}>
          <div class={styles.left}>
            <p class={styles.lead}>
              I have over 15 years of experience in building Frontends for Websites and Web Applications with HTML, CSS and Javascript.
            </p>
            <p>
              I started building Web Applications using the React.js and Next.js Frameworks in 2015 and since 2018 I use (besides vanilla CSS) TailwindCSS to build fast and consistent User Interfaces. I also have experience working with popular CSS Frameworks like Bootstrap and Bulma.
            </p>
            <div class={styles.details}>
              <article>
                <h1>Location</h1>
                <span>Germany</span>
              </article>
              <article>
                <h1>Timezone</h1>
                <span>UTC + 2</span>
              </article>
              <article>
                <h1>Status</h1>
                <span class={styles.available}>Available</span>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}