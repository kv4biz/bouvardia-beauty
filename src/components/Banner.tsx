import React from "react";

interface BannerProps {
  image: string;
  name: string;
}

const Banner: React.FC<BannerProps> = ({ image, name }) => {
  return (
    <div
      className="relative w-full h-screen max-h-[500px] md:max-h-[560px] px-4 md:px-10 lg:px-32 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Light black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative top-40 container mx-auto flex flex-col md:flex-row items-center md:justify-between w-full">
        {/* Right side fixed text */}
        <div className="flex flex-col text-center md:text-left text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl murecho font-extralight uppercase ml-4">
            New
          </h2>
          <h2 className="text-8xl lg:text-9xl pathwayGothicOne tracking-wide uppercase -mt-2">
            cosmetic
          </h2>
          <h2 className="text-6xl md:text-7xl pathwayGothicOne uppercase m-0">
            line
          </h2>
          <p className="text-2xl lg:text-3xl tracking-[7px] lg:tracking-[10px] capitalize pathwayGothicOne mt-4">
            Experience Beauty Like Never Before.
          </p>
        </div>
        {/* Left side overlapping rectangles with centered name */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Bottom rectangle */}
            <div className="border border-white px-5 py-4 w-40 h-64 lg:w-48 lg:h-72">
              {/* Intentionally left blank for layering */}
            </div>
            {/* Top rectangle, offset upward and to the left */}
            <div className="absolute top-0 left-0 border border-white px-5 py-4 w-40 h-64 lg:w-48 lg:h-72 -translate-x-1 -translate-y-1 lg:-translate-x-2 lg:-translate-y-2">
              {/* Intentionally left blank for layering */}
            </div>
            {/* Centered name text over the overlapping rectangles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white pathwayGothicOne text-xl font-light uppercase">
                {name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
