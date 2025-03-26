import { useState } from "react";
import { FaSearch    } from "react-icons/fa";
import { useRef } from "react";

const HiddenSearchBar = () => {
    const [showInput, setShowInput] = useState(false);
    const [bgColor, setBgColor] = useState("white");
    const [textColor, setTextColor] = useState("black");
    const inputRef = useRef();

    const handleClick = () => {
        setShowInput(!showInput);  // Toggle visibility of input
        setBgColor(bgColor === "white" ? "black" : "white");
        setTextColor(textColor === "black" ? "white" : "black");
        if (!showInput) inputRef.current.focus();  // Focus only if the input is being shown
      };

    return (
        <>
            <section style={{
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                height: "100vh",
                background: bgColor,
                color: textColor,
                transition: "background 0.3s ease-in, color 0.3s ease-in",
                }} className="container">
                <div className="inputSection">
                    { showInput ? <input ref={inputRef} type="text"  style={{
                        background: bgColor,
                        color: textColor,
                        padding: "20px",
                        borderRadius: "10px",
                        transition: "opacity 0.3s ease-in",
                        opacity: showInput ? 1 : 0,
                        visibility: showInput ? "visible" : "hidden",
                        }} /> : <div className="search-btn-container">
                        <FaSearch style={{
                        fontSize: "40px",
                        cursor: "pointer"
                        }} onClick={handleClick} />
                    </div> }
                </div>
            </section>
        </>
    )
}

export default HiddenSearchBar;