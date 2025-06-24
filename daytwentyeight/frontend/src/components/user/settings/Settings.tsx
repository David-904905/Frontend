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
import { useMenuOpen } from "@hooks/useMenuOpen";
import SettingsAddEmailModal from "./modals/SettingsAddEmailModal";
import Notifications from "../../ui/notifications/Notifications";

const Settings = () => {

  const {showModal, showEditModal, showAddEmailModal, showNotificationModal} = useSettings();
  const { setMenuOpen } = useMenuOpen();
  
  const { setIsHome } = useAuth();

  useEffect(() => {
    setIsHome(false);
  }, [])

  return <div className="settings-main-container" onClick={() => setMenuOpen(false)}>
    <SettingsHead />
    <SettingsBody />
    {showModal && <SettingsSearchModal />}
    {showEditModal && <SettingsEditModal />}
    {showAddEmailModal && <SettingsAddEmailModal />}
    {showNotificationModal && <Notifications />}
    
  </div>;
};

export default Settings;
