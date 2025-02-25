import Image from "next/image";
import React from "react";
import { Marquee } from "@/components/magicui/marquee";
const Socials = () => {
  const images = [
    { src: "/social1.png", alt: "social image" },
    { src: "/social2.png", alt: "social image" },
    { src: "/social3.png", alt: "social image" },
    { src: "/social4.png", alt: "social image" },
  ];

  return (
    <div className="flex flex-col mt-5 w-full overflow-hidden gap-4 relative">
      <div className="flex w-full justify-center mb-2 md:mb-5">
        <span className="heading">Our Instagram</span>
      </div>
      <div className="group relative w-full overflow-hidden h-[400px]">
        <div className="lg:hidden h-full">
          <Marquee
            className="h-full gap-0"
            pauseOnHover
            style={{ "--duration": "10s" } as React.CSSProperties}
          >
            {images.map((image, index) => (
              <div key={index} className="flex w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Marquee>
        </div>

        <div className="hidden lg:flex w-full h-full">
          {images.map((image, index) => (
            <div key={index} className="w-1/2 h-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="pathwayGothicOne text-xl md:text-2xl lg:text-5xl font-medium tracking-[10px] md:tracking-[20px] lg:tracking-[32px] text-white group-hover:text-slate-700 bg-transparent group-hover:bg-white/85 border bg-opacity-50 px-4 py-5 lg:px-16 lg:py-8">
            BOURVARDIA BEAUTY
          </span>
        </div>
      </div>
    </div>
  );
};

export default Socials;
