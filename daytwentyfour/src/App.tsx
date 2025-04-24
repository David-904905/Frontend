
import { Suspense } from "react";
import "./App.css";


// import FetchTodo from "./components/FetchTodo";
import FetchWithUse from "./components/FetchWithUse";




const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <FetchWithUse />
    </Suspense>
  )
}


export default App;
