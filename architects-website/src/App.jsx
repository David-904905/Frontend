import "./App.css";

import NavBar from "./components/nav/NavBar";
import Home from "./components/main/Home";
import About from "./components/about/About";
import { NavBarProvider } from "./contexts/NavContext";

const App = () => {
  return (
    <>
      <NavBarProvider>
        <NavBar />
        <Home />
        <About />
      </NavBarProvider>
    </>
  )
}

export default App;