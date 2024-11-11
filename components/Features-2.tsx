import React from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:px-20 mt-20 items-center  justify-center gap-12 md:gap-16 lg:gap-20 py-10 text-center ">
      <video
        src="/models.mp4"
        autoPlay
        loop
        muted
        className="w-3/5 md:w-2/3 lg:w-1/4 rounded-md lg:mt-20 order-first lg:order-last"
      />
      <div className="flex flex-col order-last lg:order-first items-center gap-7 mt-10 lg:mt-20">
        <p className="text-4xl font-bold mt-10 md:text-5xl lg:text-7xl">
          Let our AI writer <br /> find topics
        </p>
        <p className="text-xl text-muted-foreground  max-w-[36ch]">
          If you provide the niche or industry of your business, our AI can recommend topics it can
          write about for you.
        </p>
        <div>
          <ul className="flex flex-col  gap-4 lg:gap-7">
            <li>
              <p className="flex items-center text-xl lg:text-2xl gap-5 md:gap-10 lg:gap-14 font-bold">
                <CheckIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 text-primary " />{" "}
                Unique Content
              </p>
            </li>
            <li>
              <p className="flex items-center text-xl lg:text-2xl gap-5 md:gap-10 lg:gap-14 font-bold">
                <CheckIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 text-primary " /> SEO
                Safe
              </p>
            </li>
            <li>
              <p className="flex items-center text-xl lg:text-2xl gap-5 md:gap-10 lg:gap-14 font-bold">
                <CheckIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 text-primary " />{" "}
                Blazing Fast
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
