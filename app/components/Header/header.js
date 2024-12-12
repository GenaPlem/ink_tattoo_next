import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <a href="" className={styles.header__logo}>
            Ink tattoo
          </a>

          <nav className={styles.header__navigation}>
            <input id="nav_btn" type="checkbox" className={styles.nav_btn} />
            <label htmlFor="nav_btn">
              <i
                className="fa-solid fa-bars menu-icon"
                id={styles.open_icon}
              ></i>
              <i className="fa-solid fa-xmark" id={styles.close_icon}></i>
            </label>
            <ul className={styles.header__links}>
              <li className={styles.header__link}>
                <a href="#home">Home</a>
              </li>
              <li className={styles.header__link}>
                <a href="#about">About us</a>
              </li>
              <li className={styles.header__link}>
                <a href="#gallery">Gallery</a>
              </li>
              <li className={styles.header__link}>
                <a href="#faq">FAQ</a>
              </li>
              <li className={styles.header__link}>
                <a href="#contacts">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
