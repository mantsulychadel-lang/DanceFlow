import styles from "./lesson-table.module.css";

export function LessonTable({ items }) {
  return (
    <div className={styles.panel}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Група</th>
            <th>Тренер</th>
            <th>Час</th>
            <th>Місця</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {items.map((l) => (
            <tr key={l.id}>
              <td>{l.title}</td>
              <td>{l.trainer}</td>
              <td>
                {l.day} {l.time}
              </td>
              <td>{l.free}</td>
              <td>
                <a href="#">Редагувати</a> · <a href="#">Видалити</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
