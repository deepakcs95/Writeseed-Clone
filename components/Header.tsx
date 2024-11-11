import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
const Header = () => {
  return (
    <div className="flex justify-center gap-16 md:gap-96  py-5 items-center">
      <Image
        src="/logo.jpg"
        alt="logo"
        width={100}
        height={100}
        className="w-40 h-10 md:w-44  md:h-12"
      />
      <Button
        variant={"outline"}
        className="border-black border-2 hover:bg-primary hover:text-white"
      >
        Login
      </Button>
    </div>
  );
};

export default Header;
