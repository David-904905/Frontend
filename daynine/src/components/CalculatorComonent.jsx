import { useState } from "react";

const CalculatorComponent = () => {
    const [inputValue, setInputValue] = useState("");

    const addition = (array) => array.reduce((acc, cur) => acc + cur, 0);
    const subtraction = (array) => array.reduce((acc, cur) => acc - cur);
    const multiplication = (array) => array.reduce((acc, cur) => acc * cur, 1);
    const division = (array) => array.length ? array.reduce((acc, cur) => acc / cur) : undefined;

    const executeInstruction = (e) => {
        e.preventDefault();
        const inputString = e.target.elements.inputField.value.trim();
        let result;

        if (inputString.includes("+")) {
            result = addition(inputString.split("+").map(Number));
        }
        else if (inputString.includes("-")) {
            result = subtraction(inputString.split("-").map(Number));
        }
        else if (inputString.includes("*")) {
            result = multiplication(inputString.split("*").map(Number));
        }
        else if (inputString.includes("/")) {
            result = division(inputString.split("/").map(Number));
        }
        else {
            result = "Invalid Operation";
        }

        setInputValue(String(result));
    }

    return (
        <>
            <div className="calculator-container">
                <form onSubmit={executeInstruction} >
                    <input type="text" name="inputField" defaultValue={inputValue} />
                    <button type="submit">=</button>
                </form>
                <p>Result: {inputValue}</p>
            </div>
        </>
    )
}

export default CalculatorComponent;