import Image from "next/image";
import React from "react";

const Quotes = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[500px]">
      {/* Background Image */}
      <Image
        src="/quote-banner.png"
        alt="quote-banner"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center px-5">
        {/* Quote Text */}
        <p className="text-white text-center text-xl md:text-4xl mt-5 md:mt-10 tracking-wide font-light leading-relaxed max-w-4xl">
          Beauty is but a vain and doubtful good; A shining gloss that fadeth
          suddenly; A flower that dies when first it 'gins to bud, A brittle
          glass that's broken presently. ...
        </p>
      </div>
    </div>
  );
};

export default Quotes;
