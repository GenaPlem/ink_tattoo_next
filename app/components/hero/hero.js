import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className="container" id={styles.hero_mobile}>
        <h1 className={styles.hero__title}>
          Welcome to our
          <br /> Tattoo Studio
        </h1>
        <p className={styles.hero__description}>
          Experience the art of tattooing
          <br /> like never before.
        </p>
        <a href="#consultation" className={styles.hero__consultation}>
          Booking A consultation
        </a>
      </div>
    </section>
  );
}
