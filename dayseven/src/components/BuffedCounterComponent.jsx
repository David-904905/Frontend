import { useReducer } from "react";

import reducer from "../utilities/BuffedCounterUtil";

const initialState = {
    count: 0
}


const BuffedCounterComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const handleSpecialRequest = (e) => {
        e.preventDefault();
        dispatch({type: "user-increment", inputValue: e.target.value})
        
    
    }
    return (
        <>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: "increment"})}>+</button>
            <button onClick={() => dispatch({type: "decrement"})}>-</button>
            <button onClick={() => dispatch({type: "reset"})}>reset</button>
            <form onChange={handleSpecialRequest}>
                <label htmlFor="special-increment">Special Increment</label>
                <input type="text" id="special-increment" name="special-increment" />
                <button type="submit">S+</button>
            </form>
        </>
    )
}

export default BuffedCounterComponent;

// we can say action.inputvalue as the objects stuff