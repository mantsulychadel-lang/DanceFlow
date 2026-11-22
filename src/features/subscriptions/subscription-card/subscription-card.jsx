import styles from "./subscription-card.module.css";

export function SubscriptionCard({ data }) {
  const percent = (data.left / data.total) * 100;

  return (
    <section className={styles.card}>
      <p>Абонемент</p>
      <h2>{data.name}</h2>
      <p>
        Залишилось{" "}
        <b>
          {data.left} із {data.total}
        </b>{" "}
        · діє до {data.until}
      </p>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${percent}%` }} />
      </div>
    </section>
  );
}
