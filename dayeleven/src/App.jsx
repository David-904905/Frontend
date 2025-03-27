import NavBar from "./components/navigation/navbar";
import NavigationFilter from "./components/navfilter/NavigationFilter";
import { FilterStateProvider } from "./contexts/FilterContext";
import MainContent from "./components/main/MainContent";

import "./App.css"

const App = () => {
  
  return (
    <>
      <NavBar />
      <FilterStateProvider>
        <NavigationFilter />
        < MainContent />
      </FilterStateProvider>
      
    </>
  )
}


export default App;