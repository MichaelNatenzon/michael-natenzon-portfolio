import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Modularize Animations to Simplify Configuration

const formatVariants = (x, y, o, d, delay) => {
  return {
    hidden: {
      opacity: o[0],
      x: x[0],
      y: y[0],
    },
    visible: {
      opacity: o[1],
      x: x[1],
      y: y[1],
      transition: { duration: d[0], delay: delay },
    },
  };
};

const FramerMotionItem = ({ x, y, o, d, delay, content, showState, style }) => {
  return (
    <motion.div
      variants={formatVariants(x, y, o, d, delay)}
      initial="hidden"
      animate="visible"
      style={style}
    >
      {x.length > 2 ? (
        <AnimatePresence>
          {showState && (
            <motion.div
              exit={{ x: x[2], y: y[2], opacity: o[2] }}
              transition={{ duration: d[1] }}
            >
              {content}
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <motion.div>{content}</motion.div>
      )}
    </motion.div>
  );
};

export default FramerMotionItem;
