import { Header } from "../features/ui";
import { LessonCard, lessons } from "../features/lessons";
import styles from "./schedule-page.module.css";

const days = ["Пн", "Вт", "Ср", "Чт", "Пт"];

export function SchedulePage({ links }) {
  return (
    <>
      <Header links={links} />
      <main className={styles.wrap}>
        <h1>Розклад занять</h1>
        <div className={styles.filters}>
          {["Стиль", "Рівень", "Тренер"].map((name) => (
            <div key={name}>
              <label htmlFor={name}>{name}</label>
              <select id={name}>
                <option>Усі</option>
              </select>
            </div>
          ))}
        </div>
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
