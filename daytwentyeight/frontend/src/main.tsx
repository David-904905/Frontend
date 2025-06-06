import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// context providers
import { UserDetailsProvider } from "@contexts/UserDetails.tsx";
import { AuthProvider } from "@contexts/AuthContext.tsx";
import SettingsContextProvider from "@contexts/SettingsContext.tsx";

// components
import App from "./App.tsx";
import DashBoard from "./components/user/dashboard/DashBoard.tsx";
import Home from "@common/home/Home.tsx";
import Profile from "./components/user/profile/Profile.tsx";
import Settings from "./components/user/settings/Settings.tsx";
import Login from "@common/authcomponents/Login.tsx";
import SignUp from "@common/authcomponents/SignUp.tsx";
import NotFound from "@common/errors/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <UserDetailsProvider>
      <SettingsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="user">
                <Route index path="profile" element={<Profile />} />
                <Route path="dashboard" element={<DashBoard />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              <Route path="auth">
                <Route index element={<SignUp />} path="sign-up" />
                <Route path="login" element={<Login />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SettingsContextProvider>
    </UserDetailsProvider>
  </AuthProvider>
);
