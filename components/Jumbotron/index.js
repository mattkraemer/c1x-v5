import styles from '../../styles/Jumbotron.module.scss'
import Jumbo from '../../svg/jumbo'

export default function Jumbotron() {
  return (
    <section className={styles.jumbotron}>
      <div className={styles.inner}>
        <div className="container">
          <h1>Modern Frontend Development</h1>
          <h2>I build state-of-the-art User Interfaces, Websites & Web Applications</h2>
          <p>Check out my current projects or learn more about me.</p>
        </div>
      </div>
      <Jumbo class={styles.jumbo} />
    </section>
  );
};