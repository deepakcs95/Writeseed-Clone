import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:px-20 mt-20 items-center  justify-center gap-12 md:gap-16 lg:gap-20 py-10 text-center ">
      <Image
        src="/seohero.png"
        alt="seohero"
        width={500}
        height={500}
        className="w-3/5 md:w-2/3 lg:w-2\3 rounded-md lg:mt-20 order-first lg:order-last"
      />
      <div className="flex flex-col order-last lg:order-first items-center gap-7 mt-10 lg:mt-20">
        <p className="text-4xl font-bold mt-10 md:text-5xl lg:text-7xl">
          SEO & NLP <br /> Editor
        </p>
        <p className="text-xl text-muted-foreground  max-w-[36ch]">
          Track the most important SEO metrics while creating your content and optimize it with NLP
          terms.
        </p>
      </div>
    </section>
  );
};

export default Hero;
