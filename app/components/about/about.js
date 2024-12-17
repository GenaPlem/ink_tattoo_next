import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <h2>About us</h2>
        <div className={styles.about__wrapper}>
          <div className={styles.about__image}>
            <Image
              src="/images/about_img.png"
              alt="Tattoo artist drawing"
              fill
              styles={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.about__info}>
            <p className={styles.about__description}>
              <span>Ink Tattoo</span>
              <br /> dedicated to providing top-tier tattooing and piercing
              services that meet the highest standards of excellence. Each
              member of our team is well-trained and experienced, ensuring that
              your experience with us is safe, comfortable, and tailored to your
              preferences.
            </p>
            <p className={styles.about__description}>
              <span>Unleash</span>
              <br /> your imagination and let our skilled artists bring your
              tattoo vision to life.
            </p>
            <p className={styles.about__description}>
              <span>Explore</span>
              <br />
              our gallery to witness the artistic journey from concept to
              creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
