import { useReducer } from "react";

const initialState = {
    count: 0
}

const reducer = (state, action) => {
    switch (action.type)
    {
        case "increment":
            return {...state, count: state.count + 1}
        case "decrement":
            return {...state, count: state.count - 1}
        case "reset":
            return {...state, count: state.count = 0}
        default:
            return state
    }
}

const CounterComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: "increment"})}>+</button>
            <button onClick={() => dispatch({type: "decrement"})}>-</button>
            <button onClick={() => dispatch({type: "reset"})}>reset</button>
        </>
    )
}

export default CounterComponent;
