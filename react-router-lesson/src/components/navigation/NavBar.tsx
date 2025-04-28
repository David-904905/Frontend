import { Link, NavLink } from "react-router"
// import { useState } from "react"


const NavBar = () => {
    // const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar">
        <NavLink
            to={"/"}
            className={
                ({isActive}) => isActive? "active" : ""
            }
            
        >
            Home
        </NavLink>
        <NavLink
            to={"/products"}
            className={
                ({isActive}) => isActive? "active" : ""
            }
        >
            Product
        </NavLink>
        <Link to={"/auth"}>Login</Link>

        
    </nav>
  )
}

export default NavBar