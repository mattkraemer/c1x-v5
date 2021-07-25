import styles from '../../styles/About.module.scss'

export default function About() {
  return (
    <section className={styles.jumbotron}>
      <div className="container">
        <h1>About me</h1>
        <h2>I build state-of-the-art User Interfaces, Websites & Web Applications</h2>
        <p>Check out my current projects or learn more about me.</p>
      </div>
    </section>
  );
};