import React from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="flex flex-col  items-center  gap-12 md:gap-16 lg:gap-20 py-10 text-center ">
      <div className="flex flex-col items-center gap-7">
        <h1 className="text-5xl font-bold mt-10 md:text-7xl lg:text-8xl">
          The Best <br /> AI Writing Tool
        </h1>
        <p className="text-xl text-muted-foreground  max-w-[36ch]">
          Create SEO-optimized content for your blog, website & more 10x faster.
        </p>
        <Button className="px-12 py-8  text-lg rounded-lg  hover:bg-black hover:text-white self-center w-fit">
          Start Free Trial <ArrowRightIcon />
        </Button>
      </div>
      <video
        src="/models.mp4"
        autoPlay
        loop
        muted
        className="w-3/5 md:w-2/3 lg:w-full rounded-md"
      />
      <Image
        src="/ratings2.png"
        alt="hero"
        className="w-3/5 md:w-2/3 lg:w-full"
        width={1000}
        height={100}
      />
    </section>
  );
};

export default Hero;
