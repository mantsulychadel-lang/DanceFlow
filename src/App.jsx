import { useState } from "react";
import { LoginPage, SchedulePage, LessonPage, ProfilePage, AdminPage } from "./pages";

// Тимчасове перемикання сторінок (без маршрутизації).
// У лабораторній №5 його замінить React Router.
const pages = {
  login: LoginPage,
  schedule: SchedulePage,
  lesson: LessonPage,
  profile: ProfilePage,
  admin: AdminPage,
};
const labels = {
  login: "Вхід",
  schedule: "Розклад",
  lesson: "Заняття",
  profile: "Кабінет",
  admin: "Адмін",
};

function App() {
  const [page, setPage] = useState("login");
  const Page = pages[page];
  const links = [
    { label: "Розклад", href: "#", active: page === "schedule" },
    { label: "Мій кабінет", href: "#", active: page === "profile" },
  ];
  return (
    <>
      <div style={{ padding: 8, background: "#1e1b2e", display: "flex", gap: 8, flexWrap: "wrap" }}>
        {Object.keys(pages).map((key) => (
          <button
            key={key}
            onClick={() => setPage(key)}
            style={{ padding: "6px 12px", cursor: "pointer" }}
          >
            {labels[key]}
          </button>
        ))}
      </div>
      <Page links={links} />
    </>
  );
}

export default App;
