import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Portfolio = () => {
  return (
    <div className="flex flex-col w-full px-5 md:px-20 mt-10 md:mt-16">
      {/* Header Section */}
      <div className="flex flex-col w-full items-center md:items-start text-center md:text-left gap-2 mb-10">
        <h1 className="title">our work</h1>
        <span className="heading">Portfolio</span>
        <p className="text max-w-xl">
          Lorem ipsum dolor sit amet consectetur elit. Laboriosam ad illum nam
          aliquid error! Quasi modi vero consequatur!
        </p>
      </div>

      {/* small and Medium Screen Layout: Overlay + Grid of 4 Images */}
      <div className=" flex lg:hidden flex-col gap-1">
        {/* Overlay Image */}
        <div className="relative w-full h-96">
          <Image
            src="/hportfolio1.png"
            alt="Portfolio Image"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center gap-10 text-white">
            <p className="text-md tracking-[6px] inter">GIFT COLLECTION</p>
            <h2 className="text-5xl tracking-[30px] font-bold inter">COLOR</h2>
            <Button variant={"ghost"}>Step up your beauty.</Button>
          </div>
        </div>
        {/* Grid of Four Images */}
        <div className="grid grid-cols-2 gap-1">
          <div className="relative w-full h-64">
            <Image
              src="/hportfolio2.png"
              alt="Portfolio Image 1"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src="/hportfolio3.png"
              alt="Portfolio Image 2"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src="/hportfolio4.png"
              alt="Portfolio Image 3"
              layout="fill"
              objectFit="cover"
              className="object-cover object-right-top"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src="/hportfolio5.png"
              alt="Portfolio Image 4"
              layout="fill"
              objectFit="cover"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Large Screen Layout: Original Two-Column Layout */}
      <div className="hidden lg:flex flex-row w-full lg:h-[530px] gap-1">
        {/* Left Section (Overlay Image with Text) */}
        <div className="relative w-full lg:w-4/12 flex h-full items-center justify-center">
          <Image
            src="/hportfolio1.png"
            alt="Portfolio Image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col gap-16 py-10 items-center justify-start  text-white">
            <p className="text-sm tracking-[3px] inter">GIFT COLLECTION</p>
            <h2 className="text-6xl tracking-[30px] inter font-bold">COLOR</h2>
            <Button variant={"ghost"}>Step up your beauty.</Button>
          </div>
        </div>
        {/* Right Section (Top Image and Row of Three Images) */}
        <div className="flex flex-col w-full lg:w-8/12 gap-1">
          {/* Top Image */}
          <div className="w-full h-1/2">
            <Image
              src="/hportfolio2.png"
              alt="Portfolio Image"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Bottom Row of Three Images */}
          <div className="flex w-full h-1/2 gap-1">
            <Image
              src="/hportfolio3.png"
              alt="Portfolio Image"
              width={500}
              height={500}
              className="w-1/3 h-full object-cover"
            />
            <Image
              src="/hportfolio4.png"
              alt="Portfolio Image"
              width={500}
              height={500}
              className="w-1/3 h-full object-cover"
            />
            <Image
              src="/hportfolio5.png"
              alt="Portfolio Image"
              width={500}
              height={500}
              className="w-1/3 h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="flex items-center justify-center my-5 lg:mt-10">
        <Button variant={"outline"}>View More</Button>
      </div>
    </div>
  );
};

export default Portfolio;
