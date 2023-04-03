import React from "react";
import { motion } from "framer-motion";
import { Technology } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  customId: number;
  skill: Technology;
};

function Skill({ skill, customId }: Props) {
  return (
    <motion.div
      className="group flex flex-row gap-4 items-center mx-6"
      custom={customId}
      variants={{
        initial: {
          opacity: 0,
          y: 100,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: customId * 0.1,
          },
        },
      }}
      initial="initial"
      animate="visible"
    >
      <img
        className="object-contain h-10 w-10 md:w-14 md:h-14"
        src={urlFor(skill?.image).url()}
        alt={skill?.title}
      />
      <div>
        <div className="flex flex-row justify-between mb-2">
          <div>{`${skill?.title} ${skill?.experience}`}</div>
          <div>{`${skill?.progress}%`}</div>
        </div>
        <div className="relative w-72 sm:w-96 bg-white h-4 rounded-lg">
          <motion.div
            custom={customId}
            variants={{
              initial: {
                width: 0,
              },
              animated: {
                width: `${skill?.progress}%`,
                transition: {
                  delay: customId * 0.2,
                },
              },
            }}
            initial="initial"
            whileInView="animated"
            className="absolute h-4 bg-dark-green rounded-lg"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
