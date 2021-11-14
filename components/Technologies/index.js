import styles from '../../styles/Technologies.module.css'

export default function Technologies() {
  return (
    <section id="technologies" class={styles.technologies}>
      <div class="container">
        <h1 class="headline">Technologies</h1>
        <div class={styles.grid}>
            <article>
              <header>
                <h1>Languages<span> / Markup</span></h1>
              </header>
              <ul>
                <li><span />HTML5</li>
                <li><span />CSS3</li>
                <li><span />Javascript</li>
                <li><span />Typescript</li>
                <li><span />PHP</li>
              </ul>
            </article>
            <article>
              <header>
                <h1>Frontend<span> / Frameworks</span></h1>
              </header>
              <ul>
                <li><span />React.js</li>
                <li><span />Next.js</li>
                <li><span />Gatsby.js</li>
                <li><span />TailwindCSS</li>
                <li><span />Bootstrap</li>
              </ul>
            </article>
            <article>
              <header>
                <h1>Backend<span> / Deployment</span></h1>
              </header>
              <ul>
                <li><span />Firebase</li>
                <li><span />Node.js</li>
                <li><span />Netlify</li>
                <li><span />Vercel</li>
                <li><span />MongoDB</li>
              </ul>
              </article>
            <article>
              <header>
                <h1>Tools<span> / Software</span></h1>
              </header>
              <ul>
                <li><span />VS Code</li>
                <li><span />Github</li>
                <li><span />Figma</li>
                <li><span />Discord</li>
                <li><span />Stripe</li>
              </ul>
            </article>
        </div>
      </div>
    </section>
  )
}