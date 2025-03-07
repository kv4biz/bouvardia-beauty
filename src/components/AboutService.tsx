import React from "react";
import { abtServices } from "@/context/servicesContext";
import Image from "next/image";

const AboutService = () => {
  return (
    <div className="w-full bg-[#d9d9d9]/20 py-10 md:py-16">
      <div className="container mx-auto flex flex-col gap-2 md:gap-4 px-4 md:px-10 overflow-hidden">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="domine text-4xl">Our Services</h1>
          <p className="inter font-light text-sm max-w-sm text-center text-gray-700">
            hpenatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
        </div>
        {/* Cards Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-8 lg:px-24">
          {abtServices.map((card, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 inter items-center text-center p-2 py-4 md:p-4"
            >
              {/* Card Image */}
              <div className="h-48 w-48 md:mt-4">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={320}
                  height={320}
                  className="object-contain w-full h-full"
                />
              </div>
              {/* Card Content */}
              <div className="flex flex-col h-full md:mb-4">
                <h2 className="text-black text-sm md:text-md font-semibold">
                  {card.title}
                </h2>
                <p className="text-black/80 font-light text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutService;
