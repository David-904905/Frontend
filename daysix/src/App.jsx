import { createContext } from "react";

import "./App.css"

import PostComponent from "./components/PostComponent";
import BasicEffectComponent from "./components/BasicEffectComponent";
import CounterEffectComponent from "./components/CounterEffectComponent";
import ThirdComponent from "./components/ThirdComponent";
import UserProviderComponent from "./components/UserProviderComponent";

export const Data = createContext();

const App = () => {

  const author = "David Nduonofit"; // this author variables data is going to be drilled into other components
  const age = 18

  return (
    <>
      <Data.Provider value={{author, age}}>
        <BasicEffectComponent />
        <PostComponent />      
        <CounterEffectComponent />
        <ThirdComponent />
        <UserProviderComponent />
      </Data.Provider>
    </>
  )
}


export default App;