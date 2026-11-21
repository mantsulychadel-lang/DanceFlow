import Header from "../../components/Header/Header";
import { subscription, history } from "../../data/mock";
import styles from "./ProfilePage.module.css";

function ProfilePage({ links }) {
  const percent = (subscription.left / subscription.total) * 100;
  return (
    <>
      <Header links={links} />
      <main className={styles.wrap}>
        <h1>Мій кабінет</h1>
        <div className={styles.cols}>
          <div>
            <section className={styles.sub}>
              <p>Абонемент</p>
              <h2>{subscription.name}</h2>
              <p>
                Залишилось{" "}
                <b>
                  {subscription.left} із {subscription.total}
                </b>{" "}
                · діє до {subscription.until}
              </p>
              <div className={styles.bar}>
                <div className={styles.fill} style={{ width: `${percent}%` }} />
              </div>
            </section>
            <section className={styles.panel}>
              <h2>Майбутні записи</h2>
              <p>
                Пн 23.11, 18:00 · Hip-hop, Анна <a href="#">Скасувати</a>
              </p>
              <p>
                Чт 26.11, 18:00 · Latina, Олег <a href="#">Скасувати</a>
              </p>
            </section>
          </div>
          <section className={styles.panel}>
            <h2>Історія відвідувань</h2>
            <table>
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Група</th>
                  <th>Статус</th>
                </tr>
              </thead>
              <tbody>
                {history.map((h) => (
                  <tr key={h.date}>
                    <td>{h.date}</td>
                    <td>{h.group}</td>
                    <td>{h.present ? "Був" : "Пропустив"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </>
  );
}

export default ProfilePage;
