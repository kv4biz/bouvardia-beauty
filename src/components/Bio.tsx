import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Bio = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden mt-20">
      <div className="flex md:hidden my-10 justify-center relative">
        <div className="absolute inset-0 -z-10 mx-auto h-[50px] w-[150px] bg-[#D0A88D]" />
        <h1 className="text-4xl tracking-widest text-center">
          welcome friends
        </h1>
      </div>
      <div className="flex w-full justify-center mx-auto gap-10 md:gap-4 py-10 ">
        <div
          className="group flex md:h-full md:max-h-[520px] md:w-1/4 h-80 w-80 overflow-hidden rounded-2xl hover:-rotate-3 transition-transform duration-300"
          style={{ perspective: "1000px" }}
        >
          {/* image 1 src:bio-img1.svg */}
          <Image
            src="/bio-img1.svg"
            alt="Bio Image 1"
            width={320}
            height={320}
            className="object-cover w-full h-full transform transition-transform duration-300 group-hover:translate-z-[-50px] group-hover:scale-105"
          />
        </div>
        <div className="hidden md:flex flex-col gap-5 md:w-1/2 text-center items-center">
          <div className="flex mb-10 justify-center relative">
            <div className="absolute inset-0 -z-10 mx-auto h-[50px] w-[150px] bg-[#D0A88D]" />
            <h1 className="text-4xl tracking-widest text-center">
              welcome friends
            </h1>
          </div>
          <div className="flex">
            <span className="text-7xl">
              HELLO, I’M <br />
              ABISOLA
            </span>
          </div>
          <div className="flex max-w-sm">
            <span className="">
              Lorem ipsum dolor sit amet consecte turadipiscing elit sed do
              eiusmodte porincididunt ut laboreua.
            </span>
          </div>
          <Button className="px-6 bg-pinkLight text-darkGray hover:text-pinkLight hover:bg-darkGray">
            My story
          </Button>
        </div>
        <div
          className="group flex md:mt-20 md:max-h-[520px] md:h-full md:w-1/4 h-80 w-80 overflow-hidden rounded-2xl hover:rotate-3 transition-transform duration-300"
          style={{ perspective: "1000px" }}
        >
          {/* image 2 src:bio-img2.svg */}
          <Image
            src="/bio-img2.svg"
            alt="Bio Image 2"
            width={320}
            height={320}
            className="object-cover w-full h-full transform transition-transform duration-300 group-hover:translate-z-[-50px] group-hover:scale-105"
          />
        </div>
      </div>
      <div className="flex flex-col md:hidden my-10 gap-5 justify-center items-center">
        <div className="flex text-center">
          <span className="text-6xl">
            HELLO, I’M <br />
            ABISOLA
          </span>
        </div>
        <div className="flex max-w-sm">
          <span className="">
            Lorem ipsum dolor sit amet consecte turadipiscing elit sed do
            eiusmodte porincididunt ut laboreua.
          </span>
        </div>
        <Button className="px-6 bg-pinkLight text-darkGray hover:text-pinkLight hover:bg-darkGray">
          My story
        </Button>
      </div>
    </div>
  );
};

export default Bio;
