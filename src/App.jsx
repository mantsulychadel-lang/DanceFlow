import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/login-page";
import { SchedulePage } from "./pages/schedule-page";
import { LessonPage } from "./pages/lesson-page";
import { ProfilePage } from "./pages/profile-page";
import { AdminPage } from "./pages/admin-page";
import { NotFoundPage } from "./pages/not-found-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/lesson" element={<LessonPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default App;
