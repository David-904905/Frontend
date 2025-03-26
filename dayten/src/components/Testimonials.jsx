import { useState } from "react";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            quote: "This is the best product in the market",
            author: "James Synder"
        },
        {
            quote: "By far the best product to be released",
            author: "Ukpong Imaobong"
        },
        {
            quote: "I got introduced by a friend and since then Ive been hooked, outstanding service",
            author: "Chidozie Eze"
        },
    ]

    const handlePrvious = () => {
        currentIndex === 0 ? setCurrentIndex(currentIndex) : setCurrentIndex(currentIndex - 1);
    }

    const handleNext = () => {
        currentIndex === testimonials.length - 1 ? setCurrentIndex(currentIndex) : setCurrentIndex(currentIndex + 1);
    }
    return (
        <>
            <div className="container">
                <div className="testimonials-container">
                    <div className="testimonials-quote">
                        {testimonials[currentIndex].quote}
                    </div>
                    <div className="testimonial-author">
                        <p>{testimonials[currentIndex].author}</p>
                    </div>
                    <div className="button-container">
                        <button onClick={handlePrvious} className="next">Previous</button>
                        <button onClick={handleNext} className="previous">Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Testimonials;