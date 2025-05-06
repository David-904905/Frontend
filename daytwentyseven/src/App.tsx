import { useTransition } from "react";

import "./App.css";

import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import { useState } from "react";

const App = () => {
  const [render, setRender] = useState("home");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setRender(tab);
    })
  }

  const renderComponent = () => {

    switch (render) {
      case "home":
        return <Home />
      case "product":
        return <Product />
      case "about":
        return <About />
      default: 
        return <Home />
    }
    
  };
  return (
    <>
      <div className="container">
        <div className="selection">
          <button type="button" onClick={() => handleTabChange("home")}>Home</button>
          <button type="button" onClick={() => handleTabChange("product")}>Product</button>
          <button type="button" onClick={() => handleTabChange("about")}>About</button>
        </div>
      </div>
      { isPending && <p>Loading...</p> }
      <div className="results">
        {renderComponent()}
      </div>
    </>
  );
}

export default App;
