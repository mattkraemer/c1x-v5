import styles from '../../styles/Jumbotron.module.scss'

export default function Techstack() {
  return (
    <section className={styles.jumbotron}>
      <div className="container">
        <h1>Techstack</h1>
        <h2>I build state-of-the-art User Interfaces, Websites & Web Applications</h2>
        <p>Check out my current projects or learn more about me.</p>
      </div>
    </section>
  );
};