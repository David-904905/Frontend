import { useState, useEffect } from "react";

// icons
import { FaCartShopping } from "react-icons/fa6";

const ShoppingCart = () => {
    const [cart, setCart] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCartItems);
        const itemCount = JSON.parse(localStorage.getItem("count")) || 0;
        setCount(itemCount);
    }, []);

    const addItemToCart = (event) => {
        event.preventDefault();
        const newItem = { id: Date.now, name, price };
        const updateCart = [...cart, newItem];
        const newCount = count + 1;
        setCart(updateCart);
        setCount(newCount);
        setName("");
        setPrice("");

        localStorage.setItem("cart", JSON.stringify(updateCart));
        localStorage.setItem("count", JSON.stringify(newCount));
    };
    // engaged in a friendly conversation.

    return (
        <>
            <div className="formSection">
                <form onSubmit={addItemToCart}>
                    <label htmlFor="itemNameInput">Name: </label>
                    <input
                        type="text"
                        id="itemNameInput"
                        name="itemNameInput"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <label htmlFor="itemPriceInput">Price: </label>
                    <input
                        type="number"
                        id="itemPriceInput"
                        name="itemPriceInput"
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                    />
                    <button type="submit">Add Item</button>
                </form>
            </div>
            <div className="cartItems">
                <div className="cartIcon">
                    {count}
                    <FaCartShopping />
                </div>
                <h2>Shopping Cart</h2>
                <table border="1">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Price</td>
                        </tr>
                        {cart.map((e) => (
                            <tr>
                                <td>{e.name}</td>
                                <td>$ {parseFloat(e.price)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ShoppingCart;
