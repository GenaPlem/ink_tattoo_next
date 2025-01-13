import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.footer_text}>{new Date().getFullYear()} </p>
        <p className={styles.footer_text}>
          Custom Concepts Tattoo and Design, All right reserved.
        </p>
      </div>
    </footer>
  );
}
