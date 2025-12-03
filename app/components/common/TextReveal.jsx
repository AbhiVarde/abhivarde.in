"use client";

import React, { useState, useEffect } from "react";
import splitStrUsingRegex from "../../utils/splitStrUsingRegex";
import { motion } from "motion/react";

const TextReveal = ({ text }) => {
  const [isMounted, setIsMounted] = useState(false);
  const splitText = splitStrUsingRegex(text);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <span>
      {splitText.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={
            isMounted
              ? { opacity: 1, filter: "blur(0px)" }
              : { opacity: 0, filter: "blur(8px)" }
          }
          transition={{
            duration: 0.5,
            delay: index * 0.015,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default TextReveal;
