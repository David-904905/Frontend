import "@css/settings.css";

// icons
import { CiSearch } from "react-icons/ci";

// contexts
import { useSettings } from "@hooks/useSettings";

const SettingsSearchBar = () => {
    const { searchValue, setSearchValue } = useSettings();
    const {showModal, setShowModal } = useSettings();
    const handleShowModal = () => {
      setShowModal(!showModal);
    }
  return (
    <div className="settings-search-bar">
        <CiSearch className="settings-search-icon" /> 
        <CiSearch onClick={handleShowModal} className="settings-search-icon-mobile" /> 
        <input type="text" placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
    </div>
  )
}

export default SettingsSearchBar;