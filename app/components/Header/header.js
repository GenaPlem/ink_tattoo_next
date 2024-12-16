import Link from "next/link";
import styles from "./header.module.css";
import NavMenu from "../nav/nav";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <Link href="/" className={styles.header__logo}>
            Ink tattoo
          </Link>
          <NavMenu />
        </div>
      </div>
    </header>
  );
}
