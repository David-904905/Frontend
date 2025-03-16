const JSXRules = () => {
    const fruits = ["apple", "banana", "mango"];
    return (
    <>
        <section 
            style={{
                    background: "maroon",
                    color: "white", 
                    padding: "30px",
                    borderRadius: "5px"
                }}
            className="jsxRules"
        >
            <h1>JSX Rules</h1>
            <ul>
            <li>JSX must return a single parent element</li>
            <li>JSX elemebts must be properly closed</li>
            <li>JSX attributes are written using camelCase</li>
            </ul>

            <h2>Expressions</h2>
            <p>You can write valid expressions in React by closing them inside the braces</p>
            <p>The fruits below were rendered using expressions</p>

            <h3>Fruits</h3>
            <ul>
               {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
               ))}
            </ul>
            
        </section>
    </>
    )
}

export default JSXRules;