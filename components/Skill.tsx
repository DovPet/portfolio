import React from "react";
import { motion } from "framer-motion";
import { Technology } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: Technology;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group  flex cursor-pointer">
      <motion.img
        className="relative rounded-full border border-gray-500 object-cover h-12 w-12 sm:h-20 sm:w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-200 ease-in-out"
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        transition={{
          duration: 1
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        src={urlFor(skill?.image).url()}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 sm:h-20 sm:w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
