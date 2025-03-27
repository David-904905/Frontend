import { TiShoppingCart } from "react-icons/ti";
import { useContext, useEffect } from "react";
import { FilterContext } from "../../contexts/FilterContext";

import "../../styling/sidebar.css";

const SideBar = () => {
    const { _filter, _setFilter, colorFilter, setColorFilter, currentColor, setCurrentColor } = useContext(FilterContext)

    useEffect(() => {
        console.log(colorFilter);
        console.log(currentColor);
    }, [colorFilter, currentColor])

    const handleColorChange = (e) => {
        setCurrentColor(e.target.value);
        currentColor.toLowerCase() === "colorall" ? setColorFilter(false) : setColorFilter(true);
    }
    return (
        <>
            <div className="sidebar-container">
                <div className="cart-section">
                    <TiShoppingCart style={{ fontSize: "40px" }} />
                    <hr />
                </div>
                <form action="">
                    <label htmlFor="category">Category</label>
                    <div className="radio-group">
                        <input type="radio" name="category" id="all" />
                        <label htmlFor="all1">All</label>
                    </div>
                    <div className="radio-group">
                        <input type="radio" name="category" />
                        <label htmlFor="sneakers">Sneakers</label>
                    </div>
                    <div className="radio-group">
                        <input type="radio" name="category" />
                        <label htmlFor="flats">Flats</label>
                    </div>
                    <div className="radio-group">
                        <input type="radio" name="category" />
                        <label htmlFor="sandals">Sandals</label>
                    </div>
                    <div className="radio-group">
                        <input type="radio" name="category" />
                        <label htmlFor="heels">Heels</label>
                    </div>
                </form>

                <form action="">
                    <label htmlFor="category">Price</label>
                    <div className="radio-group">
                        <input type="radio" name="category" id="all" />
                        <label htmlFor="all2">All</label>
                    </div>
                    <div className="radio-group">
                        <input type="radio" name="category" />
                        <label htmlFor="zero">$0 - $50</label>
                    </div>
                    <div className="radio-group">
                        <input type="radio" name="category" />
                        <label htmlFor="fifty">$50 - $100</label>
                    </div>
                    <div className="radio-group">
                        <input type="radio" name="category" />
                        <label htmlFor="hundred">$100 - $150</label>
                    </div>
                    <div className="radio-group">
                        <input type="radio" name="category" />
                        <label htmlFor="onefifty">Over $150</label>
                    </div>
                </form>
                <form className="color-form" action="">
                    <label htmlFor="category">Color</label>

                    <div className="radio-group">
                        <input type="radio" name="color" id="colorall" value="colorall" onChange={(e) => handleColorChange(e)} />
                        <div className="colorwheel all"></div>
                        <label htmlFor="colorall">All</label>
                    </div>

                    <div className="radio-group">
                        <input type="radio" name="color" id="black" value="black" onChange={(e) => handleColorChange(e)}  />
                        <div className="colorwheel black"></div>
                        <label htmlFor="black">Black</label>
                    </div>

                    <div className="radio-group">
                        <input type="radio" name="color" id="blue" value="blue" onChange={(e) => handleColorChange(e)} />
                        <div className="colorwheel blue"></div>
                        <label htmlFor="blue">Blue</label>
                    </div>

                    <div className="radio-group">
                        <input type="radio" name="color" id="red" value="red" onChange={(e) => handleColorChange(e)}/>
                        <div className="colorwheel red"></div>
                        <label htmlFor="red">Red</label>
                    </div>

                    <div className="radio-group">
                        <input type="radio" name="color" id="green" value="green" onChange={(e) => handleColorChange(e)} />
                        <div className="colorwheel green"></div>
                        <label htmlFor="green">Green</label>
                    </div>

                    <div className="radio-group">
                        <input type="radio" name="color" id="white" value="white" onChange={(e) => handleColorChange(e)} />
                        <div className="colorwheel white"></div>
                        <label htmlFor="white">White</label>
                    </div>
                </form>

            </div>
        </>
    )
}

export default SideBar;