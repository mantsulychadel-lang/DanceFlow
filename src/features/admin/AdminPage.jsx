import Button from "../../components/Button/Button";
import { lessons } from "../../data/mock";
import styles from "./AdminPage.module.css";

const menu = ["Розклад", "Групи", "Тренери", "Учні", "Абонементи"];

function AdminPage() {
  return (
    <div className={styles.layout}>
      <aside className={styles.side}>
        <div className={styles.logo}>DanceFlow</div>
        {menu.map((m, i) => (
          <a key={m} href="#" className={i === 0 ? styles.active : styles.item}>
            {m}
          </a>
        ))}
      </aside>
      <main className={styles.main}>
        <div className={styles.top}>
          <h1>Розклад: адміністрування</h1>
          <Button>+ Додати заняття</Button>
        </div>
        <div className={styles.cols}>
          <div className={styles.panel}>
            <table>
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
                {lessons.slice(0, 6).map((l) => (
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
          <form className={styles.form}>
            <h2>Нове заняття</h2>
            <label htmlFor="g">Група</label>
            <input id="g" type="text" />
            <label htmlFor="t">Тренер</label>
            <input id="t" type="text" />
            <label htmlFor="d">Дата й час</label>
            <input id="d" type="text" />
            <label htmlFor="l">Ліміт місць</label>
            <input id="l" type="number" />
            <Button type="button">Зберегти</Button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AdminPage;
