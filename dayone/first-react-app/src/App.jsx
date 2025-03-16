import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import WelcomeMessaage from "./components/WelcomeMessage"
import JSXRules from "./components/JSXRules"
import Products from "./components/Products"
import DynamicRender from "./components/DynamicRender"
import UserList from "./components/UserList"




const App = () => {
  return (
  <>
    <Header/>
    <JSXRules/>
    <WelcomeMessaage/>
    <MainContent/>
    <Products/>
    <DynamicRender/>
    <UserList/>
    <Footer/>
  </>
  )
}

const Name =()=> {
  return <h1>David</h1>
}

// export default App for single exports

export { 
  App,
  Name,
};


