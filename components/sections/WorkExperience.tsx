import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../ExperienceCard";
import { Experience } from "../../typings";

type Props = {
  experiences: Experience[];
  sectionTitle: string | undefined;
};

function WorkExperience({ experiences, sectionTitle }: Props) {
  return (
    <motion.div
      className="flex overflow-hidden flex-row text-left max-w-full px-10 justify-evenly mx-auto items-center smooth-scroll"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="titleContainer">
        <h3 className="title">{sectionTitle}</h3>

        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          {experiences?.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default WorkExperience;
