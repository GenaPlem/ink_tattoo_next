import Link from "next/link";
import styles from "./nav.module.css";

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <input id="nav__btn" type="checkbox" className={styles.nav__btn} />
      <label htmlFor="nav__btn">
        <i className="fa-solid fa-bars menu-icon" id={styles.open_icon} />
        <i className="fa-solid fa-xmark" id={styles.close_icon} />
      </label>

      <ul className={styles.nav__links}>
        <li className={styles.nav__link}>
          <Link href="#home">Home</Link>
        </li>
        <li className={styles.nav__link}>
          <Link href="#about">About us</Link>
        </li>
        <li className={styles.nav__link}>
          <Link href="#gallery">Gallery</Link>
        </li>
        <li className={styles.nav__link}>
          <Link href="#faq">FAQ</Link>
        </li>
        <li className={styles.nav__link}>
          <Link href="#contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}
