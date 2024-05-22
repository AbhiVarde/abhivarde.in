"use client";

import React, { useState, useEffect } from "react";
import splitStrUsingRegex from "../../utils/splitStrUsingRegex";
import { motion } from "framer-motion";

const charVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  reveal: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

const TextReveal = ({ text }) => {
  const [isMounted, setIsMounted] = useState(false);
  const splitText = splitStrUsingRegex(text);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.span
      initial="hidden"
      animate={isMounted ? "reveal" : ""}
      transition={{ staggerChildren: 0.015 }}
    >
      {splitText.map((char, index) => (
        <motion.span key={index} variants={charVariants}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
