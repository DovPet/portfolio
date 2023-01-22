import React from "react";
import { motion } from "framer-motion";
import { Technology } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  skill: Technology;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <motion.div
      className="group flex cursor-pointer rounded-full"
      initial={{
        x: directionLeft ? -100 : 100,
        opacity: 0
      }}
      transition={{
        duration: 1
      }}
      whileInView={{
        x: 0,
        opacity: 1
      }}
    >
      <Image
        className="relative rounded-full border border-gray-500 object-cover h-20 w-20 md:w-28 md:h-28 filter group-hover:grayscale transition duration-200 ease-in-out"
        src={urlFor(skill?.image).url()}
        alt={skill?.title}
        layout='fill'
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
