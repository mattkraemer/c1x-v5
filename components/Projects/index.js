import styles from '../../styles/Projects.module.css'
import Image from 'next/image'
import AltCoinList from '../../public/screenshots/altcoinlist.png'
import todoIQ from '../../public/screenshots/todoiq.png'
import RSSBundler from '../../public/screenshots/rssbundler.png'
import CountryCodesDB from '../../public/screenshots/countrycodesdb.png'
import SVGMULE from '../../public/screenshots/svgmule.png'
import APIbucket from '../../public/screenshots/apibucket.png'

export default function Projects() {
  return (
    <section id="projects" class={styles.projects}>
      <div class="container">
        <h1 class="headline">Projects</h1>
      </div>
      <div class="container-lg">
        <div class={styles.grid}>
          <a href="https://altcoinlist.vercel.app/" target="_blank">
            <article>
              <div class={styles.screenshot}>
                <Image alt="Screenshot" class={styles.screenshot} src={AltCoinList} layout="fill" placeholder="blur" />
              </div>
              <div class={styles.main}>
                <header>
                  <span>2021</span>
                  <h1 class="truncate">AltCoinList</h1>
                  <p>Showing performance data for a variety of altcoins.</p>
                </header>
                <hr />
                <div class={styles.techstack}>
                  <h1>Techstack</h1>
                  <ul>
                    <li>Next.js</li>
                    <li>Vercel</li>
                    <li>TailwindCSS</li>
                  </ul>
                </div>
              </div>
            </article>
          </a>
          <a href="https://www.todoiq.com" target="_blank">
            <article>
              <div class={styles.screenshot}>
                <Image alt="Screenshot" class={styles.screenshot} src={todoIQ} layout="fill" placeholder="blur" />
              </div>
              <div class={styles.main}>
                <header>
                  <span>2020 - Rebuild 2021</span>
                  <h1 class="truncate">todoIQ.com</h1>
                  <p>Decentralized Todo List in your Browser - no registration, no database.</p>
                </header>
                <hr />
                <div class={styles.techstack}>
                  <h1>Techstack</h1>
                  <ul>
                    <li>Next.js</li>
                    <li>Netlify</li>
                    <li>TailwindCSS</li>
                  </ul>
                </div>
              </div>
            </article>
          </a>
          <a href="https://www.apibucket.net" target="_blank">
            <article>
              <div class={styles.screenshot}>
                <Image alt="Screenshot" class={styles.screenshot} src={APIbucket} layout="fill" placeholder="blur" />
              </div>
              <div class={styles.main}>
                <header>
                  <span>2020</span>
                  <h1 class="truncate">APIbucket.net</h1>
                  <p>Database for Big Data APIs, Open Data and other Content APIs.</p>
                </header>
                <hr />
                <div class={styles.techstack}>
                  <h1 class="truncate">Techstack</h1>
                  <ul>
                    <li>Gatsby.js</li>
                    <li>Netlify</li>
                    <li>TailwindCSS</li>
                  </ul>
                </div>
              </div>
            </article>
          </a>
          <a href="https://www.countrycodesdb.com" target="_blank">
            <article>
              <div class={styles.screenshot}>
                <Image alt="Screenshot" class={styles.screenshot} src={CountryCodesDB} layout="fill" placeholder="blur" />
              </div>
              <div class={styles.main}>
                <header>
                  <span>2020</span>
                  <h1 class="truncate">CountryCodesDB.com</h1>
                  <p>Data for 249 Countries including Regions and ISO-3166-2-Codes.</p>
                </header>
                <hr />
                <div class={styles.techstack}>
                  <h1>Techstack</h1>
                  <ul>
                    <li>Gatsby.js</li>
                    <li>Netlify</li>
                    <li>Bootstrap 4</li>
                  </ul>
                </div>
              </div>
            </article>
          </a>
          <a href="https://svgmule.vercel.app/" target="_blank">
            <article>
              <div class={styles.screenshot}>
                <Image alt="Screenshot" class={styles.screenshot} src={SVGMULE} layout="fill" placeholder="blur" />
              </div>
              <div class={styles.main}>
                <header>
                  <span>2020</span>
                  <h1 class="truncate">SVGMULE</h1>
                  <p>Free SVG Illustrations.</p>
                </header>
                <hr />
                <div class={styles.techstack}>
                  <h1>Techstack</h1>
                  <ul>
                    <li>Next.js</li>
                    <li>Vercel</li>
                    <li>TailwindCSS</li>
                  </ul>
                </div>
              </div>
            </article>
          </a>
          <a href="https://rssbundler.netlify.app/" target="_blank">
            <article>
              <div class={styles.screenshot}>
                <Image alt="Screenshot" class={styles.screenshot} src={RSSBundler} layout="fill" placeholder="blur" />
              </div>
              <div class={styles.main}>
                <header>
                  <span>2019</span>
                  <h1 class="truncate">RSSBundler</h1>
                  <p>Bundling multiple RSS Feeds into a single Feed.</p>
                </header>
                <hr />
                <div class={styles.techstack}>
                  <h1>Techstack</h1>
                  <ul>
                    <li>React.js</li>
                    <li>Netlify</li>
                    <li>TailwindCSS</li>
                  </ul>
                </div>
              </div>
            </article>
          </a>
        </div>
      </div>
    </section>
  )
}