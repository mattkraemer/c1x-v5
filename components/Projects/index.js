import styles from '../../styles/Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" class={styles.projects}>
      <div class="container">
        <h1 class={styles.headline}>Projects</h1>
      </div>
      <div class="container">
        <div class={styles.grid}>
          <a href="https://www.todoiq.com" target="_blank">
            <article>
              <header>
                <span>2020</span>
                <h1 class="truncate">todoIQ.com</h1>
                <p>Todo List in your Browser - no registration needed.</p>
              </header>
              <div class={styles.techstack}>
                <h1>Techstack</h1>
                <ul>
                  <li>React.js</li>
                  <li>Netlify</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>
            </article>
          </a>
          <a href="https://www.apibucket.net" target="_blank">
            <article>
              <header>
                <span>2020</span>
                <h1 class="truncate">APIbucket.net</h1>
                <p>Database for Big Data APIs, Open Data and other Content APIs.</p>
              </header>
              <div class={styles.techstack}>
                <h1 class="truncate">Techstack</h1>
                <ul>
                  <li>Gatsby.js</li>
                  <li>Netlify</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>
            </article>
          </a>
          <a href="https://www.countrycodesdb.com" target="_blank">
            <article>
              <header>
                <span>2020</span>
                <h1 class="truncate">CountryCodesDB.com</h1>
                <p>Data for 249 Countries including Regions and ISO-3166-2-Codes.</p>
              </header>
              <div class={styles.techstack}>
                <h1>Techstack</h1>
                <ul>
                  <li>Gatsby.js</li>
                  <li>Netlify</li>
                  <li>Bootstrap 4</li>
                </ul>
              </div>
            </article>
          </a>
          <a href="https://svgmule.vercel.app/" target="_blank">
            <article>
              <header>
                <span>2020</span>
                <h1 class="truncate">SVGMULE</h1>
                <p>Free SVG Illustrations.</p>
              </header>
              <div class={styles.techstack}>
                <h1>Techstack</h1>
                <ul>
                  <li>Next.js</li>
                  <li>Vercel</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>
            </article>
          </a>
          <a href="https://rssbundler.netlify.app/" target="_blank">
            <article>
              <header>
                <span>2019</span>
                <h1 class="truncate">RSSBundler</h1>
                <p>Bundling multiple RSS Feeds into a single Feed.</p>
              </header>
              <div class={styles.techstack}>
                <h1>Techstack</h1>
                <ul>
                  <li>React.js</li>
                  <li>Netlify</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>
            </article>
          </a>
        </div>
      </div>
    </section>
  )
}