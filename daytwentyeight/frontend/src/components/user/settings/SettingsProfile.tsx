import "@css/settings.css";
import { useSettings } from "@hooks/useSettings";

import { useUserDetails } from "@hooks/useUserDetails";

import { FaRegEdit } from "react-icons/fa";

const SettingsProfile = () => {
  const { profileImage, name, email } = useUserDetails();
  const { setShowEditModal } = useSettings();
  return (
    <div className="settings-profile-section" >
      <div className="sett-profile-img-details">
        <div className="sett-profile-image">
          <img src={profileImage} alt="user profile image" />
        </div>
        <div className="sett-profile-name-email">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
      <div className="sett-profile-button">
        {/* implement me as a modal */}
        <button className="edit-profile-btn ">Edit</button>
      </div>
      <div className="edit-btn-mobile" onClick={() => setShowEditModal(true)}>
        <button><FaRegEdit /></button>
      </div>
    </div>
  );
};

export default SettingsProfile;
