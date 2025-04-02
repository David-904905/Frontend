import "./App.css";
// navigation
import NavBar from "./components/navigation/NavBar";

// sections
import WelcomeSection from "./components/main/welcomesection/WelcomeSection";
import ServicesSection from "./components/main/servicessesction/ServicesSection";
import Locations from "./components/main/locationssection/Locations";



const App = () => {
    return (
      <>
        <NavBar />
        <WelcomeSection />
        <ServicesSection />
        <Locations />
      </>
    )
  }
  
export default App;