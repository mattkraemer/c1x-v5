import styles from '../../styles/Techstack.module.scss'

export default function Techstack() {
  return (
    <section className={styles.techstack}>
      <div className="container">
        <header>
          <h1>Techstack</h1>
        </header>
        <div className={styles.wrapper}>
          <div className={styles.grid}>
            <article className={styles.languagesMarkup}>
              <h1>Languages & Markup</h1>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>PHP</li>
              </ul>
            </article>
            <article className={styles.frontendFrameworks}>
              <h1>Frontend & Frameworks</h1>
              <ul>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Gatsby.js</li>
                <li>TailwindCSS</li>
                <li>Bootstrap</li>
              </ul>
            </article>
            <article className={styles.backendDeployment}>
              <h1>Backend & Deployment</h1>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>Vercel</li>
              </ul>
            </article>
            <article className={styles.toolsSoftware}>
              <h1>Tools & Software</h1>
              <ul>
                <li>Github</li>
                <li>Figma</li>
                <li>Webpack</li>
                <li>Discord</li>
                <li>Stripe</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};