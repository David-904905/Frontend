import { useContext } from "react";
import { Outlet } from "react-router-dom";

// contexts
import { AuthContext } from "@contexts/AuthContext";
// components
import Sidebar from "./common/Sidebar";
// css
import "./App.css";
import MobileNavBar from "@common/MobileNavBar";
import { MenuOpenProvider } from "@contexts/NavBarContext";
import { useMenuOpen } from "@hooks/useMenuOpen";

const App = () => {
  const {setMenuOpen} = 
  const context = useContext(AuthContext);
  if (!context) {
    return;
  }
  const { loginStatus, isHome } = context;
  return (
    <>
      <MenuOpenProvider>
        {loginStatus && !isHome && <Sidebar />}
        {loginStatus && !isHome && <MobileNavBar />}
        <div className="outlet-container">
          <Outlet />
        </div>
      </MenuOpenProvider>
    </>
  );
};

export default App;
