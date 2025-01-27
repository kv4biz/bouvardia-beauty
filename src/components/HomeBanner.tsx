import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import TypingAnimation from "./ui/typing-animation";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="relative items-center justify-center flex w-full h-[580px] mt-6 md:mt-12 md:h-screen">
      {/* Background Image */}
      <Image
        src="/home-banner.png"
        alt="home banner"
        fill
        className="absolute inset-0 -z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black bg-opacity-20"></div>
      {/* Text Content */}
      <div className="relative z-20 flex mt-28 md:mt-40 flex-col items-center justify-center w-full h-full text-center">
        <TypingAnimation
          className="text-2xl md:text-3xl font-light tracking-wide zeyada text-white"
          duration={100}
          text="Elegant, Fashion, Stories."
        />
        <span className="text-6xl md:text-8xl md:tracking-tighter font-light  kurale text-white">
          Bouvardia Beauty
        </span>
        <span className="mt-5 text-xl md:text-2xl md:leading-5 md:tracking-wide text-white">
          Your Guide to Glamorous Transformation
        </span>
        <div className="flex items-center justify-between p-4 md:p-6 lg:px-8 w-full max-w-sm md:max-w-lg lg:max-w-2xl mt-16 lg:mt-20 rounded-md bg-white">
          <p className="">Schedule a consultation today.</p>
          <Button className="bg-tan px-5">
            <Link href={"https://calendly.com/kv4biz"}>Book Now</Link>
          </Button>
        </div>
      </div>
      {/* Flower Image */}
      <Image
        src="/flower.png"
        alt="flower"
        width={420}
        height={420}
        loading="lazy"
        className="absolute -z-10 -bottom-60 opacity-50 object-contain"
      />
    </div>
  );
};

export default HomeBanner;
