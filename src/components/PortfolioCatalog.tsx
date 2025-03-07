"use client";
import { portfolio } from "@/context/portfolioContext";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

interface PortfolioItem {
  name: string;
  main: string;
  other: string[];
}

const PortfolioCatalog: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <div className="w-full py-10 md:py-16">
      <div className="flex flex-col items-center container mx-auto gap-4 md:gap-10">
        {/* Heading */}
        <div className="flex items-center justify-center">
          <h1 className="capitalize zeyada text-3xl lg:text-5xl font-bold tracking-wider drop-shadow-lg text-darkTan">
            Stunning Work On Some Of Our Clients
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap max-w-5xl gap-4 justify-center">
          {portfolio.map((item, index) => (
            <div
              key={index}
              className="relative w-80 h-88 cursor-pointer overflow-hidden"
              onClick={() => setSelectedItem(item)}
            >
              <Image
                src={item.main}
                alt={item.name}
                height={400}
                width={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white text-2xl uppercase playfairDisplay">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay with Carousel */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-5 bg-black bg-opacity-80">
          <div className="relative text-white w-11/12 md:w-3/4">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={() => setSelectedItem(null)}
            >
              &times;
            </button>

            {/* Title */}
            <h2 className="text-2xl inter font-semibold uppercase mb-4">
              {selectedItem.name}
            </h2>

            {/* Carousel */}
            <Carousel className="relative">
              <CarouselContent>
                {selectedItem.other.map((img, i) => (
                  <CarouselItem key={i} className="flex justify-center">
                    <Image
                      src={img}
                      alt={"images"}
                      height={400}
                      width={400}
                      className="object-contain w-full h-96 md:h-[400px] lg:h-[560px]"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioCatalog;
