import Header from "../../components/Header/Header";
import LessonCard from "../../components/LessonCard/LessonCard";
import { lessons } from "../../data/mock";
import styles from "./SchedulePage.module.css";

const days = ["Пн", "Вт", "Ср", "Чт", "Пт"];

function SchedulePage({ links }) {
  return (
    <>
      <Header links={links} />
      <main className={styles.wrap}>
        <h1>Розклад занять</h1>
        <div className={styles.filters}>
          {["Стиль", "Рівень", "Тренер"].map((f) => (
            <div key={f}>
              <label htmlFor={f}>{f}</label>
              <select id={f}>
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

export default SchedulePage;
