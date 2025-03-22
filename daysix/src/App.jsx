import { createContext } from "react";

import "./App.css"

import PostComponent from "./components/PostComponent";
import BasicEffectComponent from "./components/BasicEffectComponent";
import CounterEffectComponent from "./components/CounterEffectComponent";
import ThirdComponent from "./components/ThirdComponent";

export const Data = createContext();

const App = () => {

  const author = "David Nduonofit"; // this author variables data is going to be drilled into other components

  return (
    <>
      <Data.Provider value={author}>
        <BasicEffectComponent />
        <PostComponent />      
        <CounterEffectComponent />
        <ThirdComponent />
      </Data.Provider>
    </>
  )
}


export default App;