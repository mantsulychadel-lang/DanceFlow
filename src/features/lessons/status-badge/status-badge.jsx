import styles from "./status-badge.module.css";

export function StatusBadge({ free }) {
  let kind = "ok";
  let text = `Вільних: ${free}`;
  if (free === 0) {
    kind = "none";
    text = "Місць немає";
  } else if (free <= 3) {
    kind = "few";
    text = `Залишилось ${free}`;
  }
  return <span className={`${styles.badge} ${styles[kind]}`}>{text}</span>;
}
