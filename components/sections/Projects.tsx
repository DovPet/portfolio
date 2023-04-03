import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { Project } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  projects: Project[];
  sectionTitle: string | undefined;
};

function Projects({ projects, sectionTitle }: Props) {
  return (
    <motion.div
      className="relative flex flex-row overflow-hidden text-center max-w-full justify-evenly mx-auto items-center z-0 mt-14 smooth-scroll"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="titleContainer">
        <h3 className="title">
          {sectionTitle}
        </h3>

        <div className="relative w-screen max-w-7xl flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory snap-start z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          {projects?.map((project, i) => (
            <div
              key={project._id}
              className="w-7xl flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-20"
            >
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt="Logo image"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4-xl font-semibold text-center">
                  <span>
                    Project {i + 1} of {projects.length}:
                  </span>{" "}
                  {project?.title}
                </h4>

                <div className="flex items-center space-x-2 justify-center">
                  {project?.technologies?.map((technology) => (
                    <Image
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                      alt={technology.title}
                      width={40}
                      height={40}
                      objectFit='contain'
                    />
                  ))}
                </div>
                <p className="text-lg text-center md:text-left">
                  {project?.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
