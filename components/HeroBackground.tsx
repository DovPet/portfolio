import React from "react";
import { motion } from "framer-motion";

type Props = {};

function HeroBackground({}: Props) {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{
        opacity: 0
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
      }}
      transition={{
        duration: 2.5
      }}
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-[#333333] rounded-full h-[450px] w-[450px] mt-52" />
      <div className="absolute border border-[#F7AB0A] rounded-full h-[520px] w-[520px] mt-52 opacity-20 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[600px] w-[600px] mt-52" />
    </motion.div>
  );
}

export default HeroBackground;
