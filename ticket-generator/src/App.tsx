import NavBar from "./components/navigation/NavBar";
import { FormDataProvider } from "./contexts/FormDataProvider";
import Form from "./components/body/formsection/Form";
import Welcome from "./components/body/ticketorwelcome/Welcome";
import Ticket from "./components/body/ticketorwelcome/Ticket";

import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <FormDataProvider>
        <Welcome />
        {/* <Form /> */}
        <Ticket />
      </FormDataProvider>
    </>
  )
}

export default App;