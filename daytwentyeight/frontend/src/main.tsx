import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// context providers
import { UserDetailsProvider } from "@contexts/UserDetails.tsx";
import { AuthProvider } from "@contexts/AuthContext.tsx";
import SettingsContextProvider from "@contexts/SettingsContext.tsx";
import { ScreenSizeProvider } from "@contexts/ScreenSizeContext.tsx";

// components
import App from "./App.tsx";
import Home from "@common/home/Home.tsx";
import Login from "@common/authcomponents/Login.tsx";
import NotFound from "@common/errors/NotFound.tsx";
import LazyFallback from "@common/fallbacks/LazyFallback.tsx";
import SubFolder from "./components/ui/userfolder/SubFolder.tsx";
import FoldersHome from "./components/ui/userfolder/FoldersHome.tsx";
// Lazy-loaded components
const DashBoard = lazy(
  () => import("./components/user/dashboard/DashBoard.tsx")
);
const Profile = lazy(() => import("./components/user/profile/Profile.tsx"));
const Settings = lazy(() => import("./components/user/settings/Settings.tsx"));
const SignUp = lazy(() => import("@common/authcomponents/SignUp.tsx"));

createRoot(document.getElementById("root")!).render(
  <ScreenSizeProvider>
    <AuthProvider>
      <UserDetailsProvider>
        <SettingsContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />

                <Route path="user">
                  <Route
                    path="profile"
                    element={
                      <Suspense fallback={<LazyFallback />}>
                        <Profile />
                      </Suspense>
                    }
                  />
                  <Route
                    path="dashboard"
                    element={
                      <Suspense fallback={<LazyFallback />}>
                        <DashBoard />
                      </Suspense>
                    }
                  />
                  <Route
                    path="settings"
                    element={
                      <Suspense fallback={<LazyFallback />}>
                        <Settings />
                      </Suspense>
                    }
                  />
                  <Route path="folder">
                    <Route index element={<FoldersHome />}/>
                    <Route path="sub-folder/:folder_uuid" element={<SubFolder />} />
                  </Route>
                </Route>

                <Route path="auth">
                  <Route
                    path="sign-up"
                    element={
                      <Suspense fallback={<LazyFallback />}>
                        <SignUp />
                      </Suspense>
                    }
                  />
                  <Route path="login" element={<Login />} />
                </Route>

                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SettingsContextProvider>
      </UserDetailsProvider>
    </AuthProvider>
  </ScreenSizeProvider>
);
