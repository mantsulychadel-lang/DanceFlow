import styles from "./button.module.css";

export function Button({ children, variant = "primary", ...props }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
