import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main style={{ padding: 40, textAlign: "center" }}>
      <h1>404</h1>
      <p>Такої сторінки не існує.</p>
      <Link to="/schedule">Перейти до розкладу</Link>
    </main>
  );
}
