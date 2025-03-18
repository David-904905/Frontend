import MovieComponent from "./components/MovieComponent";
import MultipleMovieComponent from "./components/MultipleMovieComponent";
import CounterComponentOne from "./components/CounterComponentOne";
import CounterComponentTwo from "./components/CounterComponentTwo";
import CallBackCount from "./components/CallBackCount";
import RandomNumberComponent from "./components/RandomNumberComponent";
import StateExampleThree from "./components/StateExampleThree";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => setCount(count + 1);
  return (
    <>
      <h2>Welcome</h2>
      <MovieComponent />
      <MultipleMovieComponent />
      <h4>{count}</h4>
      <CounterComponentOne count={count} onClickHandler={handleButtonClick}/>
      <CounterComponentTwo count={count} onClickHandler={handleButtonClick}/>
      <p>The two components above handle the same data and change it dynamically using the state data shared amongst themselves.</p>
      <CallBackCount />
      <RandomNumberComponent />
      <StateExampleThree />
    </>
  )
}


export default App;