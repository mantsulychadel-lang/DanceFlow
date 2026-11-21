import { Header } from "../features/ui";
import {
  SubscriptionCard,
  AttendanceHistory,
  subscription,
  history,
} from "../features/subscriptions";
import styles from "./profile-page.module.css";

export function ProfilePage({ links }) {
  return (
    <>
      <Header links={links} />
      <main className={styles.wrap}>
        <h1>Мій кабінет</h1>
        <div className={styles.cols}>
          <div>
            <SubscriptionCard data={subscription} />
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
          <AttendanceHistory items={history} />
        </div>
      </main>
    </>
  );
}
