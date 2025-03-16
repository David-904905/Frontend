import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App, Name} from './App.jsx'
// import Greetings from "./components/Greet.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Name/>
    {/* <Greetings/> */}
  </StrictMode>,
)
