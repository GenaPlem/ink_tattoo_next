import styles from "./consultation.module.css";

export default function Consultation() {
  return (
    <section className={styles.consultation} id="consultation">
      <div className="container">
        <div className={styles.consultation__wrapper}>
          <h2>Consultation</h2>
          <p>We`ll contact you shorty</p>
          <form action="https://formdump.codeinstitute.net" method="post">
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              required
            />
            <label htmlFor="number"></label>
            <input
              type="text"
              name="number"
              id="number"
              placeholder="Phone number"
              required
            />
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required
            />
            <label htmlFor="description"></label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="6"
              placeholder="Tell us about the design, style, and details..."
            ></textarea>
            <input type="submit" value="Send" />
          </form>
          <a href="privacy_policy.html" id={styles.privacy_policy}>
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
}
