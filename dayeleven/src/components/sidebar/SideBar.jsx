import { TiShoppingCart } from "react-icons/ti";

import "../../styling/sidebar.css";

const SideBar = () => {
    return (
        <>
            <div className="sidebar-container">
                <div className="cart-section">
                    <TiShoppingCart style={{ fontSize: "40px" }} />
                    <hr />
                </div>
                <form action="">
                    <label htmlFor="category">Category</label>
                    <div class="radio-group">
                        <input type="radio" name="category" id="all" />
                        <label for="all">All</label>
                    </div>
                    <div class="radio-group">
                        <input type="radio" name="category" />
                        <label for="all">Sneakers</label>
                    </div>
                    <div class="radio-group">
                        <input type="radio" name="category" />
                        <label for="all">Flats</label>
                    </div>
                    <div class="radio-group">
                        <input type="radio" name="category" />
                        <label for="all">Sandals</label>
                    </div>
                    <div class="radio-group">
                        <input type="radio" name="category" />
                        <label for="all">Heels</label>
                    </div>
                </form>

                <form action="">
                    <label htmlFor="category">Price</label>
                    <div class="radio-group">
                        <input type="radio" name="category" id="all" />
                        <label for="all">All</label>
                    </div>
                    <div class="radio-group">
                        <input type="radio" name="category" />
                        <label for="all">$0 - $50</label>
                    </div>
                    <div class="radio-group">
                        <input type="radio" name="category" />
                        <label for="all">$50 - $100</label>
                    </div>
                    <div class="radio-group">
                        <input type="radio" name="category" />
                        <label for="all">$100 - $150</label>
                    </div>
                    <div class="radio-group">
                        <input type="radio" name="category" />
                        <label for="all">Over $150</label>
                    </div>
                </form>
                <form className="color-form" action="">
                    <label for="category">Color</label>

                    <div class="radio-group">
                        <input type="radio" name="color" id="all" />
                        <div class="colorwheel all"></div>
                        <label for="all">All</label>
                    </div>

                    <div class="radio-group">
                        <input type="radio" name="color" id="black" />
                        <div class="colorwheel black"></div>
                        <label for="black">Black</label>
                    </div>

                    <div class="radio-group">
                        <input type="radio" name="color" id="blue" />
                        <div class="colorwheel blue"></div>
                        <label for="blue">Blue</label>
                    </div>

                    <div class="radio-group">
                        <input type="radio" name="color" id="red" />
                        <div class="colorwheel red"></div>
                        <label for="red">Red</label>
                    </div>

                    <div class="radio-group">
                        <input type="radio" name="color" id="green" />
                        <div class="colorwheel green"></div>
                        <label for="green">Green</label>
                    </div>

                    <div class="radio-group">
                        <input type="radio" name="color" id="white" />
                        <div class="colorwheel white"></div>
                        <label for="white">White</label>
                    </div>
                </form>

            </div>
        </>
    )
}

export default SideBar;