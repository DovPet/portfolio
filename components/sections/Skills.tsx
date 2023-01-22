import React from "react";
import { motion } from "framer-motion";
import Skill from "../Skill";
import { Technology } from "../../typings";

type Props = {
  skills: Technology[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="titleContainer">
        <h3 className="title">
          Skills
        </h3>

        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm mx-5">
          Hover over a skill for current profieciency
        </h3>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mt-10">
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <Skill key={skill?._id} skill={skill} />
          ))}
          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <Skill key={skill?._id} skill={skill} directionLeft />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
