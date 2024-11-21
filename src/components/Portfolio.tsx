import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Portfolio = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden mt-10 md:mt-16">
      {/* Header Section */}
      <div className="flex flex-col w-full items-center text-center gap-2 mb-10">
        <h1 className="text-tan text-4xl font-medium">Portfolio</h1>
        <span className="text-4xl font-medium">Creative Works</span>
      </div>
      <div className="flex flex-col w-full items-center gap-4 px-5 md:px-16 my-8">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:h-[500px] items-stretch">
          {/* Column 1 */}
          <div className="relative flex justify-center w-full h-[450px] md:h-full md:w-1/3 group overflow-hidden">
            <Image
              src="/portfolio-img1.png"
              alt="Portfolio Image 1"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
            />
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-4 w-full md:w-2/3">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row gap-4 md:h-1/2 h-[450px] w-full">
              <div className="relative w-full h-full md:w-1/2 group overflow-hidden">
                <Image
                  src="/portfolio-img2.png"
                  alt="Portfolio Image 2"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
              </div>
              <div className="relative w-full h-full md:w-1/2 group overflow-hidden">
                <Image
                  src="/portfolio-img3.png"
                  alt="Portfolio Image 3"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
              </div>
            </div>
            {/* Bottom Section */}
            <div className="relative w-full h-[450px] md:h-1/2 group overflow-hidden">
              <Image
                src="/portfolio-img4.png"
                alt="Portfolio Image 4"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:h-[500px] items-stretch">
          {/* Column Left */}
          <div className="relative flex w-full h-[450px] md:w-1/2 md:h-full group overflow-hidden">
            <Image
              src="/portfolio-img5.png"
              alt="Portfolio Image 5"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
            />
          </div>
          {/* Column Right */}
          <div className="relative flex w-full h-[450px] md:w-1/2 md:h-full group overflow-hidden">
            <Image
              src="/portfolio-img6.png"
              alt="Portfolio Image 6"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
            />
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="flex items-center justify-center my-5 mt-10">
        <Button className="px-6 bg-white border border-darkTan text-darkTan hover:text-white hover:bg-darkTan">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Portfolio;
