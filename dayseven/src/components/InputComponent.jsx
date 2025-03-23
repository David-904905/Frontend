import { useRef } from "react";

const InputComponent = () => {
    const InputValue = useRef(null);
    console.log(InputValue);
    const manipulateInputValue = () => {
        InputValue.current.focus();
        InputValue.current.value = "David Nduonofit";
        InputValue.current.style.color = "teal";
        InputValue.current.style.padding = "20px";
    }
    return (
        <>
            <input type="text" ref={InputValue} />
            <button onClick={manipulateInputValue}>Click me!</button>
        </>
    )
}

export default InputComponent;