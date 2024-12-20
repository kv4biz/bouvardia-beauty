import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import TypingAnimation from "./ui/typing-animation";

const HomeBanner = () => {
  return (
    <div className="relative items-center justify-center flex w-full h-[580px] md:h-screen">
      {/* Background Image */}
      <Image
        src="/home-banner.png"
        alt="home banner"
        fill
        className="absolute inset-0 -z-10 object-cover"
      />

      {/* Text Content */}
      <div className="relative z-20 flex md:mt-16 flex-col items-center justify-center w-full h-full text-center">
        <TypingAnimation
          className="text-3xl md:text-4xl font-medium leading-[49.644px] text-white"
          duration={100}
          text="Elegant, Fashion, Stories."
        />
        <span className="text-5xl md:text-7xl text-white">
          Bouvardia Beauty
        </span>
        <span className="text-lg md:text-xl md:leading-5 md:tracking-wide text-white">
          Your Guide to Glamorous Transformation
        </span>
        <Button className="mt-8 px-6 text-darkGray bg-pinkLight hover:bg-darkGray hover:text-pinkLight">
          Learn More
        </Button>
        {/* Flower Image */}
        <Image
          src="/flower.png"
          alt="flower"
          width={360}
          height={360}
          loading="lazy"
          className="absolute z-30 -bottom-40 md:-bottom-36 opacity-40 object-contain"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
