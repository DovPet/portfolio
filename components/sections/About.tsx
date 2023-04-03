import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
  sectionTitle: string | undefined;
};

function About({ pageInfo, sectionTitle }: Props) {
  console.log(pageInfo);
  return (
    <motion.div
      className="flex overflow-hidden max-w-7xl flex-col md:text-left md:flex-row px-10 justify-evenly mx-auto items-center text-center smooth-scroll"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="titleContainer">
        <h3 className="title">
          {sectionTitle}
        </h3>

        <div className="flex flex-col md:flex-row items-center">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] mb-5"
            src={urlFor(pageInfo?.profilePicture).url()}
          />

          <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
              {pageInfo?.backgroundInformationTitle}
            </h4>
            <p className="text-base">{pageInfo?.backgroundInformation}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
