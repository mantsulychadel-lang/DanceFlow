import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import styles from "./login-form.module.css";

export function LoginForm() {
  const [mode, setMode] = useState("login");
  const navigate = useNavigate();

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
          <label htmlFor="name">Імʼя</label>
          <input id="name" type="text" placeholder="Ваше імʼя" />
        </>
      )}

      <label htmlFor="email">Електронна пошта</label>
      <input id="email" type="email" placeholder="name@student.uzhnu.edu.ua" />

      <label htmlFor="password">Пароль</label>
      <input id="password" type="password" placeholder="Ваш пароль" />

      <Button onClick={() => navigate("/schedule")}>
        {mode === "login" ? "Увійти" : "Зареєструватися"}
      </Button>
    </div>
  );
}
