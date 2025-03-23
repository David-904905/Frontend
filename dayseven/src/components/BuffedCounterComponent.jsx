import { useReducer, useState } from "react";

import reducer from "../utilities/BuffedCounterUtil";

const initialState = {
    count: 0
}


const BuffedCounterComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [specialValue, setSpecialValue] = useState("");
    const [operation, setOperation] = useState("increment");


    const handleInputChange = (e) => {
        setSpecialValue(e.target.value);
    }

    const handleSpecialRequest = (e) => {
        e.preventDefault();
        if(!isNaN(specialValue) && specialValue.trim() !== ""){
            dispatch({type: operation == "increment" ? "user-increment" : "user-decrement", inputValue: Number(specialValue)})
        }  
    };

    const handleOperationChange = (e) => {
        setOperation(e.target.value);
    }

    return (
        <>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: "increment"})}>+</button>
            <button onClick={() => dispatch({type: "decrement"})}>-</button>
            <button onClick={() => dispatch({type: "reset"})}>reset</button>
            <form onSubmit={handleSpecialRequest}>
                <label htmlFor="special-operation">Special Increment</label>
                <input type="text" id="special-operation" name="special-operation" value={specialValue} onChange={handleInputChange}/>
                
                <select value={operation} onChange={handleOperationChange} name="operation-select" id="operation-select">
                    <option value="increment">increment</option>
                    <option value="decrement">decrement</option>
                </select>


                <button type="submit">Perform Operation</button><br />
            </form>
        </>
    )
}

export default BuffedCounterComponent;

// we can say action.inputvalue as the objects stuff