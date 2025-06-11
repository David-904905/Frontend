import "@css/settings.css";

// react
import { useEffect } from "react";

// hooks
import useAuth from "@hooks/useAuth";

// components
import SettingsHead from "./SettingsHead";
import SettingsBody from "./SettingsBody";
import SettingsSearchModal from "./modals/SettingsSearchModal";
import { useSettings } from "@hooks/useSettings";
import SettingsEditModal from "./modals/SettingsEditModal";

const Settings = () => {

  const {showModal, showEditModal} = useSettings();
  
  const { setIsHome } = useAuth();

  useEffect(() => {
    setIsHome(false);
  }, [])

  return <div className="settings-main-container">
    <SettingsHead />
    <SettingsBody />
    {showModal && <SettingsSearchModal />}
    {showEditModal && <SettingsEditModal />}
    
  </div>;
};

export default Settings;
