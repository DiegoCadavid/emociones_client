import React from "react";

import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import NoScroll from "../placeholders/NoScroll";

const Transition = ({ children }) => {
  const location = useLocation();

  return (
    <div key={location.pathname}>
      <motion.div
        initial={{
          right: "-100vw"
        }}
        animate={{
          right: "100vw"
        }}
        transition={{
          duration: 0.45,
        }}
        className="absolute inset-y-0 w-screen bg-primary-100 dark:bg-zinc-100 z-20"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={ { opacity: 1 }}
        transition={{
          delay:0.35,
          duration: 0.3,
        }}>
        {children}
      </motion.div>
    </div>
  );
};

export default Transition;
