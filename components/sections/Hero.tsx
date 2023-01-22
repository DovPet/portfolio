import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../../sanity";
import { PageInfo } from "../../typings";
import HeroBackground from "../HeroBackground";
import Lottie from "react-lottie";
import animationData from "../../resources/hero_animation.json";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi My Name Is ${pageInfo?.name}`,
      "I am a full-stack web developer",
      "And ready to make your ideas come true"
    ],
    loop: true,
    delaySpeed: 1500
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="h-screen min-h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      {/* <HeroBackground /> */}

      <div className="flex flex-row">
        <div className="max-w-[50%]">
          <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
              {pageInfo?.role}
            </h2>

            <div className="min-h-[220px]">
              <h1 className="text-5xl md:text-6xl font-semibold px-10">
                <span className="mr-3">
                  {`Hi My Name Is ${pageInfo?.name}
                    "I am a full-stack web developer"
                    "And ready to make your ideas come true"`}
                </span>
                <Cursor cursorColor="#F7AB0A" />
              </h1>
            </div>
          </div>
        </div>
        <div className="min-w-[50%]">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        {/* <Image
        className="rounded-full mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="Logo image"
        width={128}
        height={128}
      /> */}
      </div>
      <div className="py-5 border-b mx-auto max-w-[455px]">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>

        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>

        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>

        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
