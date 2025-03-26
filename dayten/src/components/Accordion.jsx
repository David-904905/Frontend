import { useState } from "react";
import accordion from "../utilities/accordionContent";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleBtnClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        }
        else
        {
            setActiveIndex(index);
        }
    }
    return (
        <>
            <div className="accordion-container">
                {
                    accordion.map((item, index) => (
                        <div key={index} className="acc-items">
                            <button className={`accordion-btn ${activeIndex === index ? "active" : ""}`} onClick={() => handleBtnClick(index)} >{item.title}</button>
                            <p className="description" style={{display: activeIndex === index ? "block" : "none"}} >{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Accordion;