import React from "react";
import { motion } from "framer-motion";

const BackgroundBlur = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        backdropFilter: "blur(0px)"
      }}
      animate={{
        opacity: 1,
        backdropFilter: "blur(12px)"
      }}
      transition={{
        duration: 0.25
      }}
      className="absolute inset-0 bg-zinc-900/80 z-40"></motion.div>
  );
};

export default BackgroundBlur;
