"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MorphingWord = () => {
  const words = ["hassle", "effort", "friction", "limits"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2400); // Cycles every 2.4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      style={{ 
        position: "relative", 
        display: "inline-block", 
        minWidth: "180px",
        height: "1.15em",
        verticalAlign: "bottom"
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.32, 0.94, 0.6, 1] }}
          className="hero-heading-purple"
          style={{
            position: "absolute",
            left: 0,
            bottom: "0.15em",
            whiteSpace: "nowrap"
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default MorphingWord;
