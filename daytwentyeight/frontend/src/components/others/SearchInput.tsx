import "@css/settings.css";

// icons
import { CiSearch } from "react-icons/ci";

// contexts
import { useSettings } from "@hooks/useSettings";

const SearchInput = () => {
    const { searchValue, setSearchValue } = useSettings();
    const {showModal, setShowModal } = useSettings();
    const handleShowModal = () => {
      setShowModal(!showModal);
    }
  return (
    <div className="accessibility-search-bar">
        <CiSearch className="accessibility-search-icon" /> 
        <CiSearch onClick={handleShowModal} className="accessibility-search-icon-mobile" /> 
        <input type="text" placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
    </div>
  )
}

export default SearchInput;