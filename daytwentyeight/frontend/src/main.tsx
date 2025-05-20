import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// contexts
import { UserDetailsProvider } from "./contexts/UserDetails.tsx";

// components
import App from "./App.tsx";
import DashBoard from "./components/user/dashboard/DashBoard.tsx";
import Profile from "./components/user/profile/Profile.tsx";
import Settings from "./components/user/settings/Settings.tsx";

createRoot(document.getElementById("root")!).render(
  <UserDetailsProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<DashBoard />} />
          <Route path="user">
              <Route index element={<Profile />} />
              <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </UserDetailsProvider>
);
