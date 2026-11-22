import styles from "./header.module.css";

export function Header({ links = [] }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>DanceFlow</div>
      <nav className={styles.nav}>
        {links.map((link) => (
          <a key={link.label} href="#" className={link.active ? styles.active : styles.link}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className={styles.avatar}>A</div>
    </header>
  );
}
