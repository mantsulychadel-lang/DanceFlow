import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

export function Header() {
  const linkClass = ({ isActive }) => (isActive ? styles.active : styles.link);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>DanceFlow</div>
      <nav className={styles.nav}>
        <NavLink to="/schedule" className={linkClass}>
          Розклад
        </NavLink>
        <NavLink to="/profile" className={linkClass}>
          Мій кабінет
        </NavLink>
        <NavLink to="/admin" className={linkClass}>
          Адмін
        </NavLink>
        <NavLink to="/login" className={linkClass}>
          Вийти
        </NavLink>
      </nav>
      <div className={styles.avatar}>A</div>
    </header>
  );
}
