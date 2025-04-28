import NavBar from "./components/navigation/NavBar";
import { useNavigate } from "react-router";

const App = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  }

  return (
    <>
      <section className="main-section">
        <NavBar />
        <div>Welcome</div>
        <button onClick={handleClick}>Go to about</button>
      </section>
    </>
  );
};



export default App;