import { useState } from "react";

const ToggleBackgroundColor = () => {
    const [color, setColor] = useState("")

    const toggleColor = () => {
        const colors = ["red", "green", "navy", "black", "white", "crimson", "brown", "gold"];
        const randomIndex = Math.floor(Math.random() * colors.length);

        setColor(colors[randomIndex]);

        document.body.style.background = color;
    }

    return (
        <>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
                <button style={{color: "white", background: "teal", borderRadius: "5px", padding: "10px", "border": "none"}} onClick={toggleColor}>Change Bg Color</button>
            </div>
        </>
    )
}

export default ToggleBackgroundColor;