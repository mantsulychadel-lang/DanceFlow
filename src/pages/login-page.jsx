import { LoginForm } from "../features/users";
import styles from "./login-page.module.css";

export function LoginPage() {
  return (
    <div className={styles.page}>
      <aside className={styles.side}>
        <h1>DanceFlow</h1>
        <p>Запис на заняття, абонемент і відвідуваність танцювальної студії в одному місці.</p>
      </aside>
      <main className={styles.main}>
        <LoginForm />
      </main>
    </div>
  );
}
