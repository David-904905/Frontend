
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuUserRoundPlus } from "react-icons/lu";
import { CiSearch, CiHeart } from "react-icons/ci";

import "../../styling/navbar.css";

const NavBar = () => {
    return (
        <>
            <div className="nav-container">
                <nav className="nav-bar">
                    <div className="inputsec">
                        <input type="text" id="search" name="search" placeholder="search"/>
                        <div className="search-btn-container">
                            <CiSearch className="search-btn" />
                        </div>
                    </div>
                    <div className="other-btns">
                        <CiHeart className="other-btns-child" />
                        <MdOutlineShoppingCart className="other-btns-child" />
                        <LuUserRoundPlus className="other-btns-child" />
                    </div>
                </nav>
            </div>
            <hr />
        </>
    )
}

export default NavBar;