import "./App.css" // importing your styling.
import { FaBeer, FaHeart } from "react-icons/fa"
import { AiFillAndroid } from "react-icons/ai";
import StyledCard from "./components/StyleCard"; 
import ProfileCard from "./components/ProfileCard";
import IconComponent from "./components/IconComponent";
import ButtonElement from "./components/ButtonComponent";
import Card from "./components/Card";
import CounterComponent from "./components/CounterComponent";
import FriendComponent from "./components/FriendComponent";
// mr chuckwudi 
// basics of styling
// first lets look at rendering child component.

// you can also render your styling dynamically

// const style =  {
//   backgroundColor: "crimson",
//   color: "white",
//   textAlign: "center",
//   padding: "10px"
// }

const App = () => {
  return (
    <>
      <UserComponent>
          <h2>Welcome</h2>
          <p>This is a sample test for revision <FaBeer className="bearIcon" /></p>
          <p>Heart icon <FaHeart className="heartIcon" /></p>
          <p>Android Icon <AiFillAndroid style={{fontSize: "150px", color: "black"}}/></p>
      </ UserComponent>
      <StyledCard />
      <ProfileCard />
      <IconComponent />
      <ButtonElement />
      <Card />
      <CounterComponent />
      <FriendComponent />
    </>
  )
}
// it is the user component component that is responsible for rendering the children. // teal is a nice background color.
const UserComponent = ({children}) => {
    return (
      <>
        <div className="backgroundTile">
          {children} 
        </div>
      </>
    )
}

export default App;