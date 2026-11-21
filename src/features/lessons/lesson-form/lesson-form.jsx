import { Button } from "../../ui";
import styles from "./lesson-form.module.css";

export function LessonForm() {
  return (
    <form className={styles.form}>
      <h2>Нове заняття</h2>
      <label htmlFor="group">Група</label>
      <input id="group" type="text" />
      <label htmlFor="trainer">Тренер</label>
      <input id="trainer" type="text" />
      <label htmlFor="datetime">Дата й час</label>
      <input id="datetime" type="text" />
      <label htmlFor="limit">Ліміт місць</label>
      <input id="limit" type="number" />
      <Button type="button">Зберегти</Button>
    </form>
  );
}
