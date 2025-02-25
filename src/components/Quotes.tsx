import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Quotes = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-16 py-2 w-full overflow-hidden">
      <div className="flex container mx-auto overflow-hidden">
        <div className="relative w-full h-[560px]">
          {/* Background Image */}
          <Image
            src="/quotesImg.png"
            alt="quote-banner"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-left-top"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-10 bg-white/70 md:bg-transparent">
            {/* Quote Text */}
            <div className="flex flex-col gap-4 md:gap-8 items-center justify-start">
              <h1 className="title">Work</h1>
              <h2 className="heading">Let’s Work Together.</h2>
              <p className="text-lg md:text-2xl md:text-center jomolhari text-tan">
                Get in touch with our team? leave your message with the offers
                and let’s start co-operative work.
              </p>
              <p className="text-darkGray md:text-center text-lg md:text-2xl tracking-wide font-light leading-relaxed max-w-5xl jomolhari">
                Lorem ipsum dolor sit amet consectetur. Imperdiet ligula morbi
                hendrerit egestas eu. Dictum lectus nisi mi risus. Eget posuere
                sed nibh at aenean diam ultrices ultrices. Fermentum semper
                mattis scelerisque sodales felis magna malesuada interdum cras
              </p>
              <Button variant={"outline"}>Book Schedule</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="relative w-full h-[400px] lg:h-[520px]">
          <Image
            src="/enquiryImg.png"
            alt="quote-banner"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute mx-auto my-auto inset-0 flex items-center justify-center max-w-3xl max-h-[300px] bg-black/60">
            <div className="flex w-full flex-col items-center justify-center text-center gap-10 p-4">
              <p className="text-lg text-white inter tracking-wider">
                Have a general enquiry?
              </p>
              <h1 className="text-lg md:text-xl tracking-wider font-light text-white inter">
                Get in touch with our team at Bouvardia Beauty Head office
              </h1>
              <Button variant={"darkghost"}>Get in Touch</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
