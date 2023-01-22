import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] px-12 md:px-0 p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="flex flex-col text-center w-full px-5">
        <div className="flex flex-col md:flex-row text-center md:text-right justify-between">
          <div className="self-start items-center w-full">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              <Image
                className="rounded-full object-cover object-center"
                src={urlFor(experience?.companyImage).url()}
                alt={experience?.company}
                width={70}
                height={70}
              />
            </motion.div>
            <motion.div
              className="flex space-x-2 my-2 justify-center md:justify-start"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              {experience?.technologies?.map((technology) => (
                <Image
                  key={technology?._id}
                  className="rounded-full"
                  src={urlFor(technology?.image).url()}
                  alt={technology?.title}
                  width={40}
                  height={40}
                />
              ))}
            </motion.div>
          </div>
          <div className="lg:max-w-[220px]">
            <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
            <p className="text-2xl font-bold mt-1">{experience?.company}</p>
          </div>
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
      </div>
      <div>
        <ul className="list-disc space-y-4 ml-5 text-lg h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
