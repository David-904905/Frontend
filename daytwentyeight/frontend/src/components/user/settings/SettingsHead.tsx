import { useSettings } from "@hooks/useSettings";
import SettingsSearchBar from "./SettingsSearchBar";
import { useEffect } from "react";
// icons
import { IoNotificationsOutline } from "react-icons/io5";
import { useUserDetails } from "@hooks/useUserDetails";

const SettingsHead = () => {
  const date = new Date();
  const dateString = date.toDateString();
  const { searchValue, setShowNotificationModal } = useSettings();
  const { profileImage } = useUserDetails();

  const { name } = useUserDetails();
  

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);
  return (
    <div className="settings-head">
      <div className="welcome-and-date">
        <h2>Welcome, {name}</h2>
        <p>{dateString}</p>
      </div>
      <div className="search-notify-pic">
        <SettingsSearchBar />
        <div className="notification-icon-container pointer" onClick={() => setShowNotificationModal(true)}>
          <IoNotificationsOutline />
        </div>
        <div className="settings-profile-image">
          <img src={profileImage} alt="user-profile-image" />
        </div>
      </div>
    </div>
  );
};

export default SettingsHead;
