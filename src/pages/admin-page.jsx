import { Button } from "../features/ui";
import { LessonTable, LessonForm, lessons } from "../features/lessons";
import styles from "./admin-page.module.css";

const menu = ["Розклад", "Групи", "Тренери", "Учні", "Абонементи"];

export function AdminPage() {
  return (
    <div className={styles.layout}>
      <aside className={styles.side}>
        <div className={styles.logo}>DanceFlow</div>
        {menu.map((item, i) => (
          <a key={item} href="#" className={i === 0 ? styles.active : styles.item}>
            {item}
          </a>
        ))}
      </aside>
      <main className={styles.main}>
        <div className={styles.top}>
          <h1>Розклад: адміністрування</h1>
          <Button>+ Додати заняття</Button>
        </div>
        <div className={styles.cols}>
          <LessonTable items={lessons.slice(0, 6)} />
          <LessonForm />
        </div>
      </main>
    </div>
  );
}
