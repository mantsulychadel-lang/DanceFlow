import { Button } from "../../ui/button";
import { StatusBadge } from "../status-badge";
import styles from "./lesson-card.module.css";
import { Link } from "react-router-dom";

export function LessonCard({ lesson }) {
  const { id, time, title, trainer, free } = lesson;

  return (
    <article className={styles.card}>
      <div className={styles.time}>{time}</div>
      <h3 className={styles.title}>
        <Link to={`/lesso/${id}`}>{title}</Link>
      </h3>
      <div>{trainer}</div>
      <div className={styles.badge}>
        <StatusBadge free={free} />
      </div>
      <Button variant={free === 0 ? "secondary" : "primary"}>
        {free === 0 ? "У чергу" : "Записатися"}
      </Button>
    </article>
  );
}
