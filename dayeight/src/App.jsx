
import PostComponent from "./components/PostComponent";
import { UserProvider } from "./contexts/UserContext";
import DisplayUserDetailsComponent from "./components/DisplayUserDetailsComponent";
import GreetingsComponent from "./components/GreetingsComponent";
import CustomIdComponent from "./components/CustomIdComponent";

import "./App.css"


const App = () => {
  return (
    <>
      <PostComponent />
      <UserProvider>
        <DisplayUserDetailsComponent />
        <GreetingsComponent />
      </UserProvider>
      <CustomIdComponent />
    </>
  )
}


export default App