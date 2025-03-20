import { useState, useEffect } from "react";

const IncrementTitle = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log("use state has been called");
        document.title = `Count ${value}`
    },[value]) // anytime our value changes, the callback will fire, it will only fire if the state of value changes

    return (
        <>
            <button onClick={() => setValue( value + 1)}>Increment</button>
        </>
    )
}

export default IncrementTitle;