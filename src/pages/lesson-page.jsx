import { Header } from "../features/ui/header";
import { Button } from "../features/ui/button";
import styles from "./lesson-page.module.css";
import { useParams } from "react-router-dom";
import { StatusBadge, lessons } from "../features/lessons";

export function LessonPage() {
  const { id } = useParams();
  const lesson = lessons.find((l) => l.id === Number(id));

  if (!lesson) {
    return (
      <>
        <Header />
        <p style={{ padding: 40 }}>Заняття не знайдено.</p>
      </>
    );
  }
  return (
    <>
      <Header />
      <main className={styles.wrap}>
        <section className={styles.info}>
          <h1>{lesson.title}</h1>
          <p className={styles.meta}>Рівень: початківець · 60 хв · Зал 1 </p>
          <div className={styles.photo}>[Фото заняття]</div>
          <p>Базові рухи, ритм і координація. Підходить тим, хто танцює вперше.</p>
          <div className={styles.trainer}>
            <div className={styles.avatar}>А</div>
            <div>
              <h3>{lesson.trainer}</h3>
              <p>8 років досвіду</p>
            </div>
          </div>
        </section>

        <aside className={styles.booking}>
          <p className={styles.meta}>Найближче заняття</p>
          <h2>
            {lesson.day}, {lesson.time}
          </h2>
          <StatusBadge free={6} />
          <p className={styles.meta}>Буде списано 1 заняття з абонемента.</p>
          <Button>Записатися</Button>
          <Button variant="secondary">Записатися на пробне заняття</Button>
        </aside>
      </main>
    </>
  );
}
