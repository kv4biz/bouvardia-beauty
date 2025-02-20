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
        <Button variant={"outline"}>
          <Link href={"/about"}>My Story</Link>
        </Button>
      </div>
      <div className="flex w-full justify-center mx-auto gap-2 md:gap-4 py-10 ">
        <div className="group flex md:max-h-[520px] md:h-full md:w-1/4 h-96 w-72 lg:h-[500px] lg:w-[360px] overflow-hidden rounded-md">
          <Image
            src="/bio-img1.png"
            alt="Bio Image 1"
            width={420}
            height={550}
            className="object-cover w-full h-full scale-105"
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
          <Button variant={"outline"}>
            <Link href={"/about"}>My Story</Link>
          </Button>
        </div>
        <div className="group flex mt-10 md:mt-32 md:max-h-[520px] md:h-full md:w-1/4  h-96 w-72 lg:h-[500px] lg:w-[360px] overflow-hidden rounded-md">
          <Image
            src="/bio-img2.png"
            alt="Bio Image 2"
            width={420}
            height={550}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Bio;
