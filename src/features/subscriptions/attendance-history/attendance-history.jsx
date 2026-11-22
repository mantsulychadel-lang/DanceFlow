import styles from "./attendance-history.module.css";

export function AttendanceHistory({ items }) {
  return (
    <section className={styles.panel}>
      <h2>Історія відвідувань</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Група</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {items.map((h) => (
            <tr key={h.date}>
              <td>{h.date}</td>
              <td>{h.group}</td>
              <td>{h.present ? "Був" : "Пропустив"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
