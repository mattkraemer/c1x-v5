import styles from '../../styles/Jumbotron.module.scss'

export default function Services() {
  return (
    <section className={styles.services}>
      <div className="container">
        <h1>Services</h1>
        <h2>I build state-of-the-art User Interfaces, Websites & Web Applications</h2>
        <p>Check out my current projects or learn more about me.</p>
      </div>
    </section>
  );
};