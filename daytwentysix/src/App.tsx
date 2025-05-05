import "./App.css";
import { Outlet } from "react-router-dom";
 // import Form from "./components/Form";

const App = () => {
  return (
    <>  
      <div className="message">
        This is a message
      </div>
      <Outlet />

    </>
  )
}

export default App;