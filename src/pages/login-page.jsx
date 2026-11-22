import { LoginForm } from "../features/users/login-form";
import styles from "./login-page.module.css";

export function LoginPage() {
  return (
    <dive className={styles.page}>
      <aside className={styles.side}>
        <h1>DanceFlow</h1>
        <p>Запис на заняття, абонемент і відвідуівність твнцюівльної студії в одному місці.</p>
      </aside>
      <main className={styles.main}>
        <LoginForm />
      </main>
    </dive>
  );
}
