import Image from "next/image";
import React from "react";

const ContactBanner = () => {
  return (
    <div className="relative items-center justify-center flex w-full h-screen max-h-[400px] md:max-h-[500px] mt-6 md:mt-12 md:h-screen">
      {/* Background Image */}
      <Image
        src="/contactBanner.png"
        alt="Contact-banner"
        fill
        className="absolute inset-0 -z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black bg-opacity-50"></div>
      <div className="relative z-20 flex flex-col items-center justify-center gap-4 w-full h-full text-center text-white inter max-w-2xl">
        <h2 className="text-4xl font-semibold">CONTACT US</h2>
        <p className="font-medium">
          Lekki Gardens is one of West Africa’s leading master developers. Our
          distinctive signature projects form a portfolio of iconic master
          residential developments in Lagos
        </p>
      </div>
    </div>
  );
};

export default ContactBanner;
