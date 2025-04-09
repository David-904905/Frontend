import React, { useState, useRef } from 'react';

const SwipeComponent = () => {
    const [swiped, setSwiped] = useState(false);
    const startTouch = useRef(0); // Keeps track of the initial touch position

    // Function to handle the start of the touch
    const handleTouchStart = (e) => {
        startTouch.current = e.touches[0].clientX; // Record the initial touch X position
    };

    // Function to handle the touch end
    const handleTouchEnd = (e) => {
        const endTouch = e.changedTouches[0].clientX; // Get the final touch position
        const distance = endTouch - startTouch.current; // Calculate the swipe distance

        // Check if the swipe is significant (you can adjust the threshold)
        if (Math.abs(distance) > 50) {
            // Update the state based on swipe direction
            if (distance > 0) {
                setSwiped(true); // Swipe to the right
            } else {
                setSwiped(false); // Swipe to the left
            }
        }
    };

    return (
        <div
            onTouchStart={handleTouchStart} // Detect touch start
            onTouchEnd={handleTouchEnd}     // Detect touch end
            style={{
                width: '300px',
                height: '300px',
                backgroundColor: swiped ? 'lightgreen' : 'lightcoral',
                margin: '50px auto',
                borderRadius: '10px',
                textAlign: 'center',
                lineHeight: '300px',
                color: 'white',
                fontSize: '20px',
            }}
        >
            Swipe Me!
        </div>
    );
};

export default SwipeComponent;
