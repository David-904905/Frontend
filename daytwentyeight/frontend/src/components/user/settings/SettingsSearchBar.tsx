import "@css/settings.css";

// icons
import { CiSearch } from "react-icons/ci";

// contexts
import { useSettings } from "@hooks/useSettings";

const SettingsSearchBar = () => {
    const { searchValue, setSearchValue } = useSettings();
  return (
    <div className="settings-search-bar">
        <CiSearch className="settings-search-icon" /> 
        <input type="text" placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
    </div>
  )
}

export default SettingsSearchBar;