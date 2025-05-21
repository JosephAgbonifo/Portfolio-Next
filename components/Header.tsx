import Blink from "@/utils/blink";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-10 md:px-20 fixed top-0 left-0 right-0 z-10">
      <Image src="/images/hellojoe.png" alt="Logo" width={50} height={50} />
      <h1 className="text-lg md:text-xl font-bold">
        Hello Joe
        <Blink />
      </h1>
    </div>
  );
};

export default Header;
