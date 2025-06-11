import { useSettings } from "@hooks/useSettings";
import { useEffect, useState } from "react";

import { FaSearch } from "react-icons/fa";

const SettingsSearchModal = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { setShowModal } = useSettings();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="settings-search-modal" onClick={() => setShowModal(false)}>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="close-modal-button">
            
        </div>
        <div className="modal-search-header">
          <h2>Search</h2>
        </div>
        <div className="search-input-n-button">
          <input
            type="text"
            name="search-settings"
            id="search-settings"
            value={searchValue}
            placeholder="dashboard..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsSearchModal;
