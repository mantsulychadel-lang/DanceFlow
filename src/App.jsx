import { useState } from "react";
import { LoginPage } from "./pages/login-page";
import { SchedulePage } from "./pages/schedule-page";
import { LessonPage } from "./pages/lesson-page";
import { ProfilePage } from "./pages/profile-page";
import { AdminPage } from "./pages/admin-page";

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

  return (
    <>
      <div style={{ padding: 8, background: "#1e1b2e", display: "flex", gap: 8 }}>
        {Object.keys(pages).map((key) => (
          <button key={key} onClick={() => setPage(key)}>
            {labels[key]}
          </button>
        ))}
      </div>
      <Page />
    </>
  );
}

export default App;
