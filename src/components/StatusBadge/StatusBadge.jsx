import styles from "./StatusBadge.module.css";

function StatusBadge({ free }) {
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

export default StatusBadge;
