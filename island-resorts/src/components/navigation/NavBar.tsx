import "./navbar.css";

const NavBar = () => {
    return (
        <>  
            <nav className="navbar">
                <div className="header">
                    <h2>Island Resorts</h2>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><a className="nav-links-a" href="">Home</a></li>
                        <li><a className="nav-links-a" href="">Our Services</a></li>
                        <li><a className="nav-links-a" href="">About Us</a></li>
                        <li><a className="nav-links-a" href="">Contact Us</a></li>
                    </ul>
                </div>
                <div className="login-or-profile">
                    <button>Login</button>
                </div>
            </nav>
        </>
    )
}

export default NavBar;