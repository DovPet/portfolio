import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { PageInfo } from "../../typings";
import animationData from "../../resources/hero_animation.json";
import DynamicHeroText from './../DynamicHeroText';

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [typeOfWorks, setTypeOfWorks] = useState<String[]>(
    pageInfo?.typeOfWorks
  );
  const [iteration, setIteration] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
    if (iteration === typeOfWorks.length - 1) setIteration(0);
    else setIteration(iteration + 1);
  }, 3000);
  
    return () => {
      clearInterval(interval)
    }
  }, [iteration])
  

  return (
    <div className="flex flex-col space-y-8 items-center justify-center text-center overflow-hidden max-w-7xl mx-auto">
      <div className="flex flex-row">
        <div className="max-w-[50%]">
          <div className="z-20">
            <>
              <div className="min-h-[150px]">
                <h1 className="text-5xl md:text-6xl font-semibold px-10">
                  <span className="mr-3">{pageInfo?.heroText}</span>
                </h1>
              </div>
              <div>
                {typeOfWorks?.map((tow, i) => (
                  <DynamicHeroText key={i} id={i} text={tow} iteration={iteration} />
                ))}
              </div>
            </>
          </div>
        </div>
        <div className="min-w-[50%] z-20">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
      <div className="flex md:flex-row flex-col py-5 border-b mx-auto gap-4">
        <div className="flex gap-4">
          <Link href="#about" scroll={false}>
            <button className="heroButton">{pageInfo?.navigationLinks[0]}</button>
          </Link>

          <Link href="#experience" scroll={false}>
            <button className="heroButton">{pageInfo?.navigationLinks[1]}</button>
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="#skills" scroll={false}>
            <button className="heroButton">{pageInfo?.navigationLinks[2]}</button>
          </Link>

          <Link href="#projects" scroll={false}>
            <button className="heroButton">{pageInfo?.navigationLinks[3]}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
