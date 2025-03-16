import Person from "./components/Person";
import Product from "./components/Product";
import Child from "./components/Child";
import Password from "./components/PasswordValidation";
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import Greeting from "./components/Greeting";
import "./App.css";

const App = () => {
  return (
    <>
      <User email="davidnduonofit47@gmail.com" name="David Nduonofit" isMarried={false} age={18} hobbies={["Coding", "Learning new things", "drawing"]}/>
      <Person name="John" age={19}/>
      <Product name="Black jean" price={3000}/>
      <Child>
        <h2>My Card</h2>
        <p>This component has an opening and closing tag.</p>
      </Child>
      <Password isValid={false}/>
      <Weather temperature={25}/>
      <UserStatus loggedIn={true} isAdmin={true}/>
      <Greeting timeOfDay={"afternoon"}/>
    </>
  )
}

// user is a child property to app, and user inherits the props given to it by app
// const User = (props) => { you can use either this way or you can destructure directly

const User = ({name, email, age, isMarried, hobbies}) => {
  return (
    <>
      <div style={{background : "maroon",borderRadius: "5px", color: "white", height: "300px" }}>
        <h2 style={{textAlign: "center", padding: "30px"}}>{name}</h2>
        <div className="otherProperties">
          <p>Email: {email}</p>
          <p>Age: {age}</p>
          <p>Single: {isMarried ? "True" : "False" }</p>
          <p>Hobbies: {hobbies.join(", ")}</p>
        </div>
      </div>
    </>
  );
}

export default App