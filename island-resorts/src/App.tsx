import "./App.css";
// navigation
import NavBar from "./components/navigation/NavBar";

// sections
import WelcomeSection from "./components/main/welcomesection/WelcomeSection";
import ServicesSection from "./components/main/servicessesction/ServicesSection";
import Locations from "./components/main/locationssection/Locations";
import AboutUs from "./components/main/aboutsection/AboutUs";
import Contact from "./components/main/contactsection/Contact";
import Footer from "./components/main/footersection/Footer";



const App = () => {
    return (
      <>
        <NavBar />
        <WelcomeSection />
        <ServicesSection />
        <Locations />
        <AboutUs />
        <Contact />
        <Footer />
      </>
    )
  }
  
export default App;