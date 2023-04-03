import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Skill from "../Skill";
import { Technology } from "../../typings";

type Props = {
  skills: Technology[];
  sectionTitle: string | undefined;
  sectionHeader: string | undefined;
};

function Skills({ skills, sectionTitle, sectionHeader }: Props) {
  return (
    <motion.div
      className="flex flex-col text-center md:text-left xl:flex-row max-w-7xl xl:px-10 justify-center xl:space-y-0 mx-auto items-center smooth-scroll"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="titleContainer">
        <h3 className="title">{sectionTitle}</h3>

        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm text-center">
          {sectionHeader}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          <AnimatePresence mode="sync">
            {skills?.sort((a, b) => b.progress - a.progress).map((skill, i) => (
              <Skill key={skill?._id} skill={skill} customId={i}/>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
