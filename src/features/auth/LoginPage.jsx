import { useState } from "react";
import Button from "../../components/Button/Button";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const [mode, setMode] = useState("login");
  return (
    <div className={styles.page}>
      <aside className={styles.side}>
        <h1>DanceFlow</h1>
        <p>Запис на заняття, абонемент і відвідуваність танцювальної студії в одному місці.</p>
      </aside>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.tabs}>
            <button
              onClick={() => setMode("login")}
              className={mode === "login" ? styles.on : styles.off}
            >
              Вхід
            </button>
            <button
              onClick={() => setMode("register")}
              className={mode === "register" ? styles.on : styles.off}
            >
              Реєстрація
            </button>
          </div>
          {mode === "register" && (
            <>
              <label htmlFor="name">Імʼя</label>
              <input id="name" type="text" placeholder="Ваше імʼя" />
            </>
          )}
          <label htmlFor="email">Електронна пошта</label>
          <input id="email" type="email" placeholder="name@student.uzhnu.edu.ua" />
          <label htmlFor="password">Пароль</label>
          <input id="password" type="password" placeholder="Ваш пароль" />
          <Button>{mode === "login" ? "Увійти" : "Зареєструватися"}</Button>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
