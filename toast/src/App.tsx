
import Toast from "./components/Toast";
import { createPortal } from "react-dom";
import useToastContext from "./hooks/useToastContext";

const message = "login successful, you will be redirected shortly";
const location = document.getElementById('root') as HTMLElement;
console.log(location);

const App = () => {
  const {showToast, setShowToast} = useToastContext();

  const renderToast = (duration: number) =>
  {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, duration);
  };

  const toastPortal = showToast && createPortal(
    <Toast status="success" message={message} duration={3} />, 
    location
  )
  return (
    <>
      <button onClick={() => renderToast(3000)}>click me</button>
      {toastPortal}
    </>
  )
}

export default App;