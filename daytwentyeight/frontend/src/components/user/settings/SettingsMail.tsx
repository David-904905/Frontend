// icons
import { IoMailOutline } from "react-icons/io5";

// hooks
import { useUserDetails } from "@hooks/useUserDetails";
import { useSettings } from "@hooks/useSettings";

const SettingsMail = () => {
  const { email } = useUserDetails();
  const { setShowAddEmailModal } = useSettings();
  return (
    <div className="settings-mail-container">
      <div className="settings-mail-message">
        <h4>Your email Address</h4>
      </div>
      <div className="settings-email-card">
        <div className="settings-email-icon-container">
          <IoMailOutline className="settings-mail-icon" />
        </div>
        <div className="settings-e-add-n-time">
          <div className="setting-email-add">
            <p><strong>{email}</strong></p>
          </div>
          <div className="last-change-time">
            <p>1 month ago</p>
          </div>
        </div>
      </div>
      <div className="add-email-button">
        <button onClick={() => setShowAddEmailModal(true)}>+Add Email Address</button>
      </div>
    </div>
  );
};

export default SettingsMail;
