import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const images = [
  "/collection-img1.png",
  "/collection-img2.png",
  "/collection-img3.png",
  "/collection-img4.png",
];

const Collection = () => {
  return (
    <div className="flex flex-col w-full px-5 md:px-20 md:-mt-16 md:mb-10">
      {/* Header Section */}
      <div className="flex flex-col w-full items-center text-center md:text-left md:items-start gap-2 md:gap-4 mb-10">
        <h1 className="text-tan text-4xl font-medium">New Collection</h1>
        <span className="text-4xl font-medium">
          Uniqueness & Current Makeup Trends
        </span>
        <span className="text-lg text-[#676565]">
          Lorem ipsum dolor sit amet consecte turadipiscing elit sed do
          <br className="hidden md:flex" />
          eiusmodte porincididunt ut laboreua.
        </span>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="group flex md:h-full md:max-h-[520px] md:w-full h-80 w-full overflow-hidden rounded-2xl hover:-rotate-3 transition-transform duration-300"
            style={{ perspective: "1000px" }}
          >
            <Image
              src={src}
              alt={`Collection Image ${index + 1}`}
              width={320}
              height={320}
              className="object-cover w-full h-full transform transition-transform duration-300 group-hover:translate-z-[-50px] group-hover:scale-105"
            />
          </div>
        ))}
      </div>
      {/* button */}
      <div className="flex items-center justify-center my-5 mt-10">
        <Button className="px-6 bg-white border border-darkTan text-darkTan hover:text-white hover:bg-darkTan">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Collection;
