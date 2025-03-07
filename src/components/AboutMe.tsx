import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full py-10 md:py-16 ">
      <div className="flex flex-col container mx-auto md:flex-row gap-4 md:gap-8 lg:gap-16 lg:pl-28 items-center md:items-end justify-center">
        <div className="h-[400px] lg:h-[500px]">
          <Image
            src="/aboutme.png"
            alt="about-image"
            height={600}
            width={400}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-8 lg:gap-16">
          <div className="flex flex-col gap-4 inriaSerif">
            <h1 className="text-3xl">ABOUT US</h1>
            <p className="text-sm max-w-lg text-black/70">
              hpenatibus et magnis dis parturient montes, nascetur ridiculus
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim. Donec pede justo,
              fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
              rhoncus ut, imperdiet a, venenatis vitae
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl playfairDisplay">Opening Hours</h2>
            {/* table for opening hours */}
            <div className="flex flex-col max-w-xs">
              <ul className="inter font-medium text-sm text-slate-700">
                <li className="flex py-2 justify-between border-b-2 border-slate-500 border-dotted">
                  <p>Mon - Wed</p>
                  <p className="mr-4">10:00AM-9:00PM</p>
                </li>
                <li className="flex py-2 justify-between border-b-2 border-slate-500 border-dotted">
                  <p>Thursday</p>
                  <p className="mr-4">10:00AM-7:00PM</p>
                </li>
                <li className="flex py-2 justify-between border-b-2 border-slate-500 border-dotted">
                  <p>Friday</p>
                  <p className="mr-4">10:00AM-9:00PM</p>
                </li>
                <li className="flex py-2 justify-between border-b-2 border-slate-500 border-dotted">
                  <p>Sat - Sun</p>
                  <p className="mr-4">10:00AM-9:00PM</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
