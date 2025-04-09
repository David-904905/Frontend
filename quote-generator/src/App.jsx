
// components
import Welcome from "./components/Wecome";
import Quote from "./components/Quote";
import SwipeComponent from "./components/Swipe";

// styling
import "./App.css";

// contexts
import { QuoteContextProvider } from "./contexts/QuoteContext";


const App = () => {
  return (
    <>
      <QuoteContextProvider>
        <Welcome/>
        {/* <SwipeComponent /> */}
      </QuoteContextProvider>
    </>
  )
}

export default App;

