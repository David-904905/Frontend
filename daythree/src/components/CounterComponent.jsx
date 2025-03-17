import { useState } from "react";


const CounterComponent = () => {
    const [count, setCount] = useState(0); // this is a state, it provides a way for us to monitor and update data that will most likely change during the lifetime of the project

    // the setCount allows us to change the value of count both in the logic and in the UI

    const increment = () => setCount(count + 1);
    const decrement = () => count === 0 ? setCount(0) : setCount(count - 1);
    

    return (
        <>
            <div>
                Welcome to the counter
                <h3>{count}</h3>
                <button style={{padding: "20px"}} onClick={increment}>+</button>
                <button style={{padding: "20px"}} onClick={decrement}>-</button>
            </div>
        </>
    )
}

export default CounterComponent;