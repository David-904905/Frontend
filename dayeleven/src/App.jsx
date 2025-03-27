import NavBar from "./components/navigation/navbar";
import NavigationFilter from "./components/navfilter/NavigationFilter";
import { FilterStateProvider } from "./contexts/FilterContext";
import MainContent from "./components/main/MainContent";
import SideBar from "./components/sidebar/SideBar";

import "./App.css"


const App = () => {

  return (
    <>
      <div className="container">
        <FilterStateProvider>
          <div className="sidebar-container">
            <SideBar />
          </div>
          <div className="other">
            <NavBar />
            <NavigationFilter />
            < MainContent />
          </div>
        </FilterStateProvider>
      </div>
    </>
  )
}


export default App;