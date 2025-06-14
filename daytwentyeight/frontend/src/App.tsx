import { Outlet } from "react-router-dom";

// components
import Sidebar from "./common/Sidebar";
// css
import "./App.css";
import MobileNavBar from "@common/MobileNavBar";
import { MenuOpenProvider } from "@contexts/NavBarContext";
import { useMenuOpen } from "@hooks/useMenuOpen";
import useAuth from "@hooks/useAuth";

const App = () => {
  // const {setMenuOpen} = useMenuOpen();
  const {loginStatus, isHome} = useAuth();
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
