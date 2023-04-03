import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  id: number;
  iteration: number;
  text: String;
};

function DynamicHeroText({ id, text, iteration }: Props) {
  const animation = [
    {
      initial: {
        y: 50,
        opacity: 0,
        scale: 0.5,
      },
      exit: { opacity: 0, x: -100, y: -50 },
    },
    {
      initial: {
        y: -50,
        opacity: 0,
        scale: 0.5,
      },
      exit: { opacity: 0, x: 100, y: 50 },
    },
    {
      initial: {
        y: -50,
        opacity: 0,
        scale: 0.5,
      },
      exit: { opacity: 0, x: -100, y: 50 },
    },
    {
        initial: {
          y: 50,
          opacity: 0,
          scale: 0.5,
        },
        exit: { opacity: 0, x: 100, y: -50 },
      },
  ];

  return (
    <AnimatePresence mode="popLayout">
      {iteration === id && (
        <motion.h3
          key={id}
          className={`text-white text-xl font-semibold`}
          initial={animation[iteration].initial}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          exit={animation[iteration].exit}
        >
          {text}
        </motion.h3>
      )}
    </AnimatePresence>
  );
}

export default DynamicHeroText;
