// import { Suspense } from "react"; // the use hook does not work with cra or vite, it needs a framework that allows server components
import "./App.css";

import { ThemeProvider } from "./contexts/Theme";

import FetchTodo from "./components/FetchTodo";
// import FetchWithUse from "./components/FetchWithUse";

const App = () => {
  return (
    // <>
    //   <h2>User Info</h2>
    //   <Suspense fallback={<p>Loading...</p>}>
    //     <FetchWithUse />
    //   </Suspense>
    // </>
    <>
      <ThemeProvider>
        <FetchTodo />
      </ThemeProvider>
    </>
  );
};

export default App;
