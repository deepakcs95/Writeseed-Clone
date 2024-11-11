import React from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:px-20 mt-20 items-center  justify-center gap-12 md:gap-16 lg:gap-20 py-10 text-center ">
      <Image
        src="/exheronew.png"
        alt="exheronew"
        width={500}
        height={500}
        className="w-3/5 md:w-2/3 lg:w-2/3 rounded-md lg:mt-20"
      />
      <div className="flex flex-col items-center gap-7 mt-10 lg:mt-20">
        <p className="text-4xl font-bold mt-10 md:text-5xl lg:text-7xl">
          Paraphrase or <br /> summarize texts
        </p>
        <p className="text-xl text-muted-foreground  max-w-[36ch]">
          You can also edit your existing texts and either paraphrase or summarize them with a
          single click in our AI editor.
        </p>
        <Button className="px-12 py-8  text-lg rounded-lg  hover:bg-black hover:text-white self-center w-fit">
          Start Free Trial <ArrowRightIcon />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
