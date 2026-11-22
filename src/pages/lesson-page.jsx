import { Header } from "../features/ui/header";
import { Button } from "../features/ui/button";
import styles from "./lesson-page.module.css";
import { StatusBadge } from "../features/lessons";

const links = [
  { label: "Розклад", active: true },
  { label: "Мій кабінет", active: false },
];

export function LessonPage() {
  return (
    <>
      <Header links={links} />
      <main className={styles.wrap}>
        <section className={styles.info}>
          <h1>Hip-hop, початківці</h1>
          <p className={styles.meta}>Рівень: початківець · 60 хв · Зал 1 </p>
          <div className={styles.photo}>[Фото заняття]</div>
          <p>Базові рухи, ритм і координація. Підходить тим, хто танцює вперше.</p>
          <div className={styles.trainer}>
            <div className={styles.avatar}>А</div>
            <div>
              <h3>Анна, тренер</h3>
              <p>8 років досвіду</p>
            </div>
          </div>
        </section>

        <aside className={styles.booking}>
          <p className={styles.meta}>Найближче заняття</p>
          <h2>Понеділок, 23 листопада, 18:00</h2>
          <StatusBadge free={6} />
          <p className={styles.meta}>Буде списано 1 заняття з абонемента.</p>
          <Button>Записатися</Button>
          <Button variant="secondary">Записатися на пробне заняття</Button>
        </aside>
      </main>
    </>
  );
}
