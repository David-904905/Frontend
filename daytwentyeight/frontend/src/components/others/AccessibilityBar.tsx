// react
import { useEffect } from "react";
// icons
import { IoNotificationsOutline } from "react-icons/io5";

// hooks
import { useUserDetails } from "@hooks/useUserDetails";
import { useSettings } from "@hooks/useSettings";

// components
import SettingsSearchBar from "../user/settings/SettingsSearchBar";

// styling
import "@css/accessibilitybar.css";

const AccessibilityBar = () => {
  const date = new Date();
  const dateString = date.toDateString();
  const { searchValue } = useSettings();
  const { profileImage } = useUserDetails();

  const { name } = useUserDetails();
  

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);
  return (
    <div className="accessibility-head">
      <div className="welcome-and-date">
        <h2>Welcome, {name}</h2>
        <p>{dateString}</p>
      </div>
      <div className="search-notify-pic">
        <SettingsSearchBar />
        <div className="notification-icon-container">
          <IoNotificationsOutline />
        </div>
        <div className="accessibility-profile-image">
          <img src={profileImage} alt="user-profile-image" />
        </div>
      </div>
    </div>
  );
};

export default AccessibilityBar;
