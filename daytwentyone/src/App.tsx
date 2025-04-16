import User from "./components/User";
import Child from "./components/Child";
import UserTwo from "./components/UserTwo";
import TweakedUser from "./components/TweakedUser";
import Admin from "./components/Admin";
import TypedState from "./components/TypedState";

import "./App.css"
const App = () => {
    return (
        <>
            {/* <User name="peter" age={32} isStudent={true} />
            <Child>
                <p>This is a child property</p>
                <a href="">This is also a child property</a>
            </Child>
            <UserTwo name={"peter"} age={30} isStudent={true}/>
            <TweakedUser name={"james"} id={2} email="james@mail.com"/>
            <Admin email="admin@mail.com" id={1} name="admin" roles={['add user', 'delete user']} superRole={() => console.log("Hello")}/> */}
            <TypedState />

        </>
    )
}

export default App;