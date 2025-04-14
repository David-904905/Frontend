import "./App.css";

import NavBar from "./components/nav/NavBar";
import Home from "./components/main/Home";
import About from "./components/about/About"
import Mission from "./components/mission/Mission";
import Products from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import { NavBarProvider } from "./contexts/NavContext";

const App = () => {
  return (
    <>
      <NavBarProvider>
        <NavBar />
        <Home />
        <About />
        <Mission />
        <Products />
        <Contact />
      </NavBarProvider>
    </>
  )
}

export default App;