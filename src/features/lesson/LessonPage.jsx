import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import StatusBadge from "../../components/StatusBadge/StatusBadge";
import styles from "./LessonPage.module.css";

function LessonPage({ links }) {
  return (
    <>
      <Header links={links} />
      <main className={styles.wrap}>
        <section className={styles.info}>
          <a href="#">← Назад до розкладу</a>
          <h1>Hip-hop, початківці</h1>
          <p className={styles.meta}>Стиль: hip-hop · Рівень: початковий · 60 хв · Зал 1</p>
          <div className={styles.photo}>[Фото заняття]</div>
          <p>Базові рухи, ритм і координація. Підходить тим, хто танцює вперше.</p>
          <div className={styles.trainer}>
            <div className={styles.avatar}>А</div>
            <div>
              <h3>Анна, тренер</h3>
              <p>8 років досвіду, переможниця регіональних змагань</p>
            </div>
          </div>
        </section>
        <aside className={styles.booking}>
          <p className={styles.meta}>Найближче заняття</p>
          <h2>Понеділок, 23 листопада, 18:00</h2>
          <StatusBadge free={6} />
          <p className={styles.meta}>Буде списано 1 заняття з абонемента (залишок: 5).</p>
          <Button>Записатися</Button>
          <Button variant="secondary">Записатися на пробне заняття</Button>
        </aside>
      </main>
    </>
  );
}

export default LessonPage;
