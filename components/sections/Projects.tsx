import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { Navigation, Pagination, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { Project } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  projects: Project[];
  sectionTitle: string | undefined;
};

function Projects({ projects, sectionTitle }: Props) {
  return (
    <motion.div
      className="relative flex flex-row text-center justify-evenly items-center z-0 mt-14 smooth-scroll"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="titleContainer">
        <h3 className="title">{sectionTitle}</h3>

        <Swiper
          className="max-w-7xl mx-auto"
          pagination={{
            type: "fraction"
          }}
          navigation={true}
          modules={[Pagination, Navigation, EffectCreative]}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              origin: "left center",
              translate: ["-5%", 0, -200],
              rotate: [0, 100, 0],
            },
            next: {
              origin: "right center",
              translate: ["5%", 0, -200],
              rotate: [0, -100, 0],
            },
          }}
        >
          {projects?.map((project, i) => (
            <SwiperSlide key={project._id}>
              <div className="max-w-6xl flex flex-row space-y-5 space-x-5 items-center mx-auto">
                <motion.img
                  initial={{ y: -100, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  src={urlFor(project?.image).url()}
                  alt="Logo image"
                  className="max-w-1/2"
                />
                <div className="flex flex-col max-w-1/2 space-y-4 px-0 md:px-10 max-w-xl">
                  <h2 className="text-4xl font-semibold text-center">
                    {project?.title}
                  </h2>
                  <a href={`${project.linkToBuild}`} target="blank">
                    {project.linkToBuild}
                  </a>
                  <div className="flex items-center space-x-2 justify-center">
                    {project?.technologies?.map((technology) => (
                      <Image
                        key={technology._id}
                        src={urlFor(technology.image).url()}
                        alt={technology.title}
                        width={40}
                        height={40}
                        objectFit="contain"
                      />
                    ))}
                  </div>
                  <p className="text-lg text-center md:text-left">
                    {project?.summary}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
