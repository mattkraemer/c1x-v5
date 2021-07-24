import styles from '../../styles/Services.module.scss'

export default function Services() {
  return (
    <section className={styles.services}>
      <div className="container">
        <header>
          <h1>Services</h1>
        </header>
        <div className={styles.grid}>
          <article>
            <h1>Frontend Development</h1>
            <p>Turning designs into usable, production-ready and future-proof User Interfaces.</p>
          </article>
          <article>
            <h1>Web Applications</h1>
            <p>Creating Applications for the web with features like User-Authentication, Payments & more.</p>
          </article>
          <article>
            <h1>Minimum Viable Products (MVP)</h1>
            <p>Building fully working MVPs with all the features needed in a short time.</p>
          </article>
          <article>
            <h1>Websites</h1>
            <p>Building & designing modern Websites with a variety of tools for clients of all kind.</p>
          </article>
          <article>
            <h1>Optimization & Refactoring</h1>
            <p>Optimizing existing Websites & Applications for Performance, Accessibility and more.</p>
          </article>
          <article>
            <h1>Prototypes & Mockups</h1>
            <p>Turning ideas into Mockups or Prototypes for presentations and more.</p>
          </article>
        </div>
      </div>
    </section>
  );
};