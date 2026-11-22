import { Header } from "../features/ui/header";
import { LessonCard, lessons } from "../features/lessons";
import styles from "./schedule-page.module.css";

const days = ["Пн", "Вт", "Ср", "Чт", "Пт"];

const links = [
  { label: "Розклад", active: true },
  { label: "Мій кабінет", active: false },
];

export function SchedulePage() {
  return (
    <>
      <Header links={links} />
      <main className={styles.wrap}>
        <h1>Розклад занять</h1>
        <div className={styles.grid}>
          {days.map((day) => (
            <section key={day}>
              <h2>{day}</h2>
              {lessons
                .filter((l) => l.day === day)
                .map((l) => (
                  <LessonCard key={l.id} lesson={l} />
                ))}
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
