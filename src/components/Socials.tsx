import Image from "next/image";
import React from "react";

const Socials = () => {
  return (
    <div className="flex flex-col mt-10 w-full md:mt-24 overflow-hidden gap-4 relative">
      <div className="flex w-full justify-center mb-2 md:mb-5">
        <span className="text-3xl font-medium">Our Instagram</span>
      </div>
      <div className="group relative w-full overflow-hidden h-[400px]">
        {/* Images */}
        <div className="flex w-full h-full gap-0">
          <Image
            src="/social1.png"
            height={400}
            width={400}
            alt="social image"
            className="w-1/2 md:w-1/3 lg:w-1/4 h-full object-cover"
          />
          <Image
            src="/social2.png"
            height={400}
            width={400}
            alt="social image"
            className="w-1/2 md:w-1/3 lg:w-1/4 h-full object-cover"
          />
          <Image
            src="/social3.png"
            height={400}
            width={400}
            alt="social image"
            className="hidden md:block md:w-1/3 lg:w-1/4 h-full object-cover"
          />
          <Image
            src="/social4.png"
            height={400}
            width={400}
            alt="social image"
            className="hidden md:block md:w-1/3 lg:w-1/4 h-full object-cover"
          />
        </div>
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl md:text-3xl font-semibold tracking-[12px] lg:tracking-[24px] xl:tracking-[40px] text-white group-hover:text-slate-700 bg-transparent group-hover:bg-white/85 border bg-opacity-50 px-4 py-5 lg:px-16 lg:py-8">
            BOURVARDIA BEAUTY
          </span>
        </div>
      </div>
    </div>
  );
};

export default Socials;
