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
          <a href="https://altcoinlist.vercel.app/" target="_blank" rel="noreferrer">
            <article>
              <div class={styles.screenshot}>
                <Image alt="Screenshot" class={styles.screenshot} src={AltCoinList} layout="fill" placeholder="blur" />
              </div>
              <div class={styles.main}>
                <header>
                  <span>2021</span>
                  <h1 class="truncate">AltCoinList</h1>
                  <p>AltCoinList is a web application that allows users to view performance data for various altcoins. The app is built using the Next.js framework and is hosted on Vercel. It uses TailwindCSS for styling.</p>
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
          <a href="https://www.todoiq.com" target="_blank" rel="noreferrer">
            <article>
              <div class={styles.screenshot}>
                <Image alt="Screenshot" class={styles.screenshot} src={todoIQ} layout="fill" placeholder="blur" />
              </div>
              <div class={styles.main}>
                <header>
                  <span>2020 - Rebuild 2021</span>
                  <h1 class="truncate">todoIQ.com</h1>
                  <p>todoIQ.com is a decentralized todo list app that allows users to manage their tasks directly in their web browser. The app does not require registration or a database to function. It was initially built in 2020 and was subsequently rebuilt in 2021. The app is built using the Next.js framework and is hosted on Netlify. It uses TailwindCSS for styling.</p>
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
          <a href="https://www.apibucket.net" target="_blank" rel="noreferrer">
            <article>
              <div class={styles.screenshot}>
                <Image alt="Screenshot" class={styles.screenshot} src={APIbucket} layout="fill" placeholder="blur" />
              </div>
              <div class={styles.main}>
                <header>
                  <span>2020</span>
                  <h1 class="truncate">APIbucket.net</h1>
                  <p>APIbucket.net is a database for Big Data APIs, Open Data, and other content APIs. It was built in 2020 using the Gatsby.js framework and is hosted on Netlify. The app uses TailwindCSS for styling.</p>
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
          <a href="https://www.countrycodesdb.com" target="_blank" rel="noreferrer">
            <article>
              <div class={styles.screenshot}>
                <Image alt="Screenshot" class={styles.screenshot} src={CountryCodesDB} layout="fill" placeholder="blur" />
              </div>
              <div class={styles.main}>
                <header>
                  <span>2020</span>
                  <h1 class="truncate">CountryCodesDB.com</h1>
                  <p>Data for 249 Countries including Regions and ISO-3166-2-Codes. CountryCodesDB.com is a database of information about 249 countries, including their regions and ISO-3166-2 codes. The app was built in 2020 using the Gatsby.js framework and is hosted on Netlify. It uses Bootstrap 4 for styling.</p>
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
          <a href="https://svgmule.vercel.app/" target="_blank" rel="noreferrer">
            <article>
              <div class={styles.screenshot}>
                <Image alt="Screenshot" class={styles.screenshot} src={SVGMULE} layout="fill" placeholder="blur" />
              </div>
              <div class={styles.main}>
                <header>
                  <span>2020</span>
                  <h1 class="truncate">SVGMULE</h1>
                  <p>Free SVG Illustrations. It was built in 2020 using the Next.js framework and is hosted on Vercel. The app uses TailwindCSS for styling.</p>
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
          <a href="https://rssbundler.netlify.app/" target="_blank" rel="noreferrer">
            <article>
              <div class={styles.screenshot}>
                <Image alt="Screenshot" class={styles.screenshot} src={RSSBundler} layout="fill" placeholder="blur" />
              </div>
              <div class={styles.main}>
                <header>
                  <span>2019</span>
                  <h1 class="truncate">RSSBundler</h1>
                  <p>RSSBundler is a web application that allows users to combine multiple RSS feeds into a single feed. The app was built in 2019 using the React.js framework and is hosted on Netlify. It uses TailwindCSS for styling.</p>
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