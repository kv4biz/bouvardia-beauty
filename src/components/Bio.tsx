import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Bio = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden mt-16">
      <div className="flex md:hidden my-10 justify-center relative">
        <div className="absolute inset-0 -z-10 mx-auto h-[40px] w-[130px] bg-tan" />
        <h1 className="text-3xl tracking-widest text-center zeyada">
          welcome Friends
        </h1>
      </div>

      <div className="flex flex-col md:hidden md:my-10 gap-5 justify-center items-center">
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
        <Button className="px-6 bg-white border border-darkTan text-darkTan hover:text-white hover:bg-darkTan">
          <Link href={"/about"}>My Story</Link>
        </Button>
      </div>
      <div className="flex w-full justify-center mx-auto gap-2 md:gap-4 py-10 ">
        <div
          className="group flex md:h-full md:max-h-[520px] md:w-1/4 h-96 w-80 lg:h-[500px] lg:w-[380px] overflow-hidden hover:-rotate-3 transition-transform duration-300"
          style={{ perspective: "1000px" }}
        >
          <Image
            src="/bio-img1.png"
            alt="Bio Image 1"
            width={420}
            height={550}
            className="object-cover w-full h-full transform transition-transform duration-300 group-hover:translate-z-[-50px] group-hover:scale-105"
          />
        </div>
        <div className="hidden md:flex flex-col gap-5 md:w-1/2 text-center items-center">
          <div className="flex mb-10 justify-center relative">
            <div className="absolute inset-0 -z-10 mx-auto h-[50px] w-[150px] bg-tan" />
            <h1 className="text-4xl font-semibold tracking-widest text-center zeyada">
              welcome Friends
            </h1>
          </div>
          <div className="flex">
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
          <Button className="px-10 bg-white border border-darkTan text-darkTan hover:text-white hover:bg-darkTan">
            <Link href={"/about"}>My Story</Link>
          </Button>
        </div>
        <div
          className="group flex mt-10 md:mt-20 md:max-h-[520px] md:h-full md:w-1/4  h-96 w-80 lg:h-[500px] lg:w-[380px] overflow-hidden hover:rotate-3 transition-transform duration-300"
          style={{ perspective: "1000px" }}
        >
          <Image
            src="/bio-img2.png"
            alt="Bio Image 2"
            width={420}
            height={550}
            className="object-cover w-full h-full transform transition-transform duration-300 group-hover:translate-z-[-50px] group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Bio;
