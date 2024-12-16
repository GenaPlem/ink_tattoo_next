import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <Link href="/" className={styles.header__logo}>
            Ink tattoo
          </Link>

          <nav className={styles.header__navigation}>
            <input id="nav_btn" type="checkbox" className={styles.nav_btn} />
            <label htmlFor="nav_btn">
              <i className="fa-solid fa-bars menu-icon" id={styles.open_icon} />
              <i className="fa-solid fa-xmark" id={styles.close_icon} />
            </label>
            <ul className={styles.header__links}>
              <li className={styles.header__link}>
                <Link href="#home">Home</Link>
              </li>
              <li className={styles.header__link}>
                <Link href="#about">About us</Link>
              </li>
              <li className={styles.header__link}>
                <Link href="#gallery">Gallery</Link>
              </li>
              <li className={styles.header__link}>
                <Link href="#faq">FAQ</Link>
              </li>
              <li className={styles.header__link}>
                <Link href="#contacts">Contacts</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
