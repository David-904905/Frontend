import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const AnimateMe = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true)
  return (
    <>
      <motion.div
        className="animation-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateY: 360, repeatCount: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.button
        className="hero-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Click me
      </motion.button>
      {/* <ul>
        <motion.li 
          initial={{ transform: "translateX(-100px) "}}
          animate={{ transform: "translateX(0px)" }}
          transition={{ type: "spring" }}
        >One</motion.li>
                <motion.li 
          initial={{ transform: "translateX(-100px) "}}
          animate={{ transform: "translateX(0px)" }}
          transition={{ type: "spring" }}
        >Two</motion.li>
                <motion.li 
          initial={{ transform: "translateX(-100px) "}}
          animate={{ transform: "translateX(0px)" }}
          transition={{ type: "spring" }}
        >Three</motion.li>
                <motion.li 
          initial={{ transform: "translateX(-100px) "}}
          animate={{ transform: "translateX(0px)" }}
          transition={{ type: "spring" }}
        >Four</motion.li>
      </ul> */}
      <motion.ul
        initial={{ "--rotate": "0deg" }}
        animate={{ "--rotate": "360deg" }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <li style={{ transform: "rotate(var(--rotate))" }} >This is a task</li>
        <li style={{ transform: "rotate(var(--rotate))" }} >This is definitely another task</li>
        <li style={{ transform: "rotate(var(--rotate))" }} >This is another task</li>
      </motion.ul>
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            key={'modal'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            className="toggle-visibility"
          />
        )}
      </AnimatePresence>
      <motion.button className="toggle-visibility-button" whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9 }} onClick={() => setIsVisible(!isVisible)} >Show</motion.button>
      <button onClick={() => window.location.reload()}>refresh</button>
      {/* <mpto */}
    </>
  );
};

export default AnimateMe;
