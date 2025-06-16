import { useSettings } from "@hooks/useSettings";
import { useEffect, useState } from "react";

import { IoAddCircle } from "react-icons/io5";

const SettingsAddEmailModal = () => {
  const [newEmail, setNewEmail] = useState<string>("");
  const { setShowAddEmailModal } = useSettings();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowAddEmailModal(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="settings-search-modal" onClick={() => setShowAddEmailModal(false)}>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="close-modal-button">
            
        </div>
        <div className="modal-search-header">
          <h2>Add email</h2>
        </div>
        <div className="search-input-n-button">
          <input
            type="email"
            name="newemail-settings"
            id="newemail-settings"
            value={newEmail}
            placeholder="example@mail.com"
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <button>
            <IoAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsAddEmailModal;
