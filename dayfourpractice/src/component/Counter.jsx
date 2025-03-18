import { useState } from "react"

const CounterComponent = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => setCount(count + 1)

    return(
        <>
            <h2>{count}</h2>
            <button onClick={handleCount}>Increment Count</button>
        </>
    )
}

export default CounterComponent;