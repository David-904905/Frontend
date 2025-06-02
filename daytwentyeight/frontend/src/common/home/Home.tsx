import "@css/home.css";

import HomeNav from "./HomeNav";
import { useContext, useEffect } from "react";
import { AuthContext } from "@contexts/AuthContext";
import HomeMessage from "./HomeMessage";
import Contribute from "./contribute/Contribute";
import About from "./aboutus/About";
import Contact from "./contactus/Contact";
import Mission from "./aboutus/Mission";

// contexts
import { MenuOpenProvider } from "@contexts/NavBarContext";

const Home = () => {
  const context = useContext(AuthContext);
  if (!context) {
    return;
  }

  const { setIsHome } = context;

  useEffect(() => {
    setIsHome(true);
  }, []);
  return (
    <>
      <MenuOpenProvider>
        <HomeNav />
        <HomeMessage />
        <About />
        <Mission />
        <Contribute />
        <Contact />
      </MenuOpenProvider>
    </>
  );
};

export default Home;
