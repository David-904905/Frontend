import "@css/settings.css";

// react
import { useEffect } from "react";

// hooks
import useAuth from "@hooks/useAuth";

// components
import SettingsHead from "./SettingsHead";
import SettingsBody from "./SettingsBody";

const Settings = () => {
  const { setIsHome } = useAuth();

  useEffect(() => {
    setIsHome(false);
  }, [])

  return <div className="settings-main-container">
    <SettingsHead />
    <SettingsBody />
    
  </div>;
};

export default Settings;
