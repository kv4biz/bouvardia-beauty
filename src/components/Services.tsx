import Image from "next/image";
import { cards } from "@/context/servicesContext";

const Services = () => {
  return (
    <div className="flex bg-[#f5f5f5] w-full pt-10 md:pt-16 pb-10 mt-10 justify-center overflow-hidden">
      <div className="relative container flex z-10 flex-col w-full">
        {/* Flower Image positioned at the top right */}
        <Image
          src="/flower2.png"
          alt="flower"
          width={360}
          height={360}
          loading="lazy"
          className="lg:block absolute w-2/5 h-1/2 -top-32 -right-24 z-10 hidden opacity-35 object-cover"
        />

        {/* Content Section */}
        <div className="px-5 md:px-20 pt-5 md:pt-10">
          {/* Header Section */}
          <div className="flex flex-col w-full items-center text-center gap-2 md:gap-4 mb-10">
            <h1 className="title">What We Do</h1>
            <span className="heading">Our Services</span>
            <span className="text">
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
              className="flex flex-col gap-8 inter bg-[#d9d9d9]/30 h-72 items-center text-center rounded-lg p-4"
            >
              {/* Card Image */}
              <div className="h-28 w-28 mt-4">
                <Image
                  src={"/service.svg"}
                  alt={card.title}
                  width={320}
                  height={320}
                  className="object-contain w-full h-full"
                />
              </div>
              {/* Card Content */}
              <div className="flex flex-col h-full mb-4">
                <h2 className="text-black text-md font-semibold">
                  {card.title}
                </h2>
                <p className="text-black font-light text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
