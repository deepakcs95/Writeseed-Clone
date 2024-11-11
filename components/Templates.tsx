import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="flex flex-col   mt-20 items-center  justify-center gap-12 md:gap-16 lg:gap-20 py-10 text-center ">
      <div className="flex flex-col   items-center gap-7 mt-10 lg:mt-20">
        <p className="text-4xl font-bold mt-10 md:text-5xl lg:text-7xl">Over 70+ Templates</p>
      </div>
      <Image
        src="/templates.png"
        alt="templates"
        width={700}
        height={700}
        className="w-3/5 md:w-2/3 lg:w-4/5 rounded-md lg:mt-10  "
      />
    </section>
  );
};

export default Hero;
