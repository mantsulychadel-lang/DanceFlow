import { useState } from "react";
import { Button } from "../../ui/button";
import styles from "./login-form.module.css";

export function LoginForm() {
  const [mode, setMode] = useState("login");

  return (
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
          <label htmlFor="name">Ім'я</label>
          <input id="name" type="text" placeholder="Ваше ім'я" />
        </>
      )}

      <label htmlFor="email">Електронна пошта</label>
      <input id="email" type="email" placeholder="name@example.com" />

      <label htmlFor="password">Пароль</label>
      <input id="password" type="password" placeholder="Ваш пароль" />

      <Button>{mode === "login" ? "Увійти" : "Зареєструватися"}</Button>
    </div>
  );
}
