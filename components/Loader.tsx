import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../resources/loader_animation.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <motion.div
      className="flex h-screen bg-[rgb(24,44,37)] items-center"
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <Lottie options={defaultOptions} height={400} width={400} />
    </motion.div>
  );
};

export default Loader;
