import styles from '../../styles/Projects.module.scss'
import ProjectsJSON from '../../json/projects.json'
import Link from'next/link'

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className="container">
        <header className={styles.sectionHeader}>
          <h1>Projects</h1>
        </header>
        <div className={styles.wrapper}>
          <div className={styles.grid}>
            {
              ProjectsJSON.map((item, index) => (
                <Link href={item.url}>
                  <a key={index} className={styles.project}>
                    <header className={styles.projectHeader}>
                      <span>{item.year}</span>
                      <h1>{item.title}</h1>
                    </header>
                    <section className={styles.projectContent}>
                      <h2>Description</h2>
                      <p>{item.description}</p>
                    </section>
                    <footer className={styles.projectFooter}>
                      <h2>Techstack</h2>
                      <ul>
                        {
                          item.tech.map(tech => (
                            <li>{tech}</li>
                          ))
                        }
                      </ul>
                    </footer>

                  </a>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};