import Image from "next/image";
import { Button } from "./ui/button";
import { cards } from "@/context/servicesContext";

const Services = () => {
  return (
    <div className="relative flex z-10 bg-[#f5f5f5] flex-col w-full mt-5 md:pt-10 pb-10 overflow-hidden">
      {/* Flower Image positioned at the top right */}
      <Image
        src="/flower2.png"
        alt="flower"
        width={360}
        height={360}
        loading="lazy"
        className="absolute -top-20 md:right-0 -right-40 z-10 opacity-30 object-contain"
      />

      {/* Content Section */}
      <div className="px-5 md:px-20 pt-5 md:pt-10">
        {/* Header Section */}
        <div className="flex flex-col w-full items-center text-center md:text-left md:items-start gap-2 md:gap-4 mb-10">
          <h1 className="text-tan text-4xl font-medium">What We Do</h1>
          <span className="text-4xl font-medium">Our Services</span>
          <span className="text-lg text-[#676565]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod
            <br className="hidden md:flex" />
            porincididunt ut labore.
          </span>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 md:px-24 pb-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#3c3333] h-80 items-center justify-center text-center"
          >
            {/* Card Image */}
            <div className="h-48 w-full">
              <Image
                src={card.img}
                alt={card.title}
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Card Content */}
            <div className="flex flex-col p-4 h-full">
              <h2 className="text-white text-xl font-extralight mb-3">
                {card.title}
              </h2>
              <p className="text-white tracking-wider font-light text-xs">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
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

export default Services;
