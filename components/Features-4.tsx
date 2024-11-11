import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:px-20 mt-20 items-center  justify-center gap-12 md:gap-16 lg:gap-20 py-10 text-center ">
      <Image
        src="/ais.png"
        alt="ai"
        width={500}
        height={500}
        className="w-3/5 md:w-2/3 lg:w-2\3 rounded-md lg:mt-20 order-first lg:order-last"
      />
      <div className="flex flex-col order-last lg:order-first items-center gap-7 mt-10 lg:mt-20">
        <p className="text-4xl font-bold mt-10 md:text-5xl lg:text-7xl">
          One platform, all <br /> AI models
        </p>
        <p className="text-xl text-muted-foreground  max-w-[36ch]">
          With Writeseed you can use all the top AI models, like GPT-4, GPT-4o, Claude 3.5 Sonnet,
          Llama 3 and many more.
        </p>
      </div>
    </section>
  );
};

export default Hero;
