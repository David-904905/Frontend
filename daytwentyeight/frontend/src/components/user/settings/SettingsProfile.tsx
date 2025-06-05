import "@css/settings.css";

import { useUserDetails } from "@hooks/useUserDetails";

const SettingsProfile = () => {
  const { profileImage, name, email } = useUserDetails();
  return (
    <div className="settings-profile-section">
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
        <button>Edit</button>
      </div>
    </div>
  );
};

export default SettingsProfile;
