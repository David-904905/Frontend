import { useState } from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <>
            <div className="container">
                <div className="countsec">
                    <h2 className="count">
                        {count}
                    </h2>
                </div>
                <div className="btn-sec">
                    <button onClick={increment} className="btn">+</button>
                    <button onClick={decrement} className="btn">-</button>
                </div>
            </div>
        </>
    )
}

export default CounterComponent;