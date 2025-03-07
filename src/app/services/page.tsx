import Banner from "@/components/Banner";
import ServicePrice from "@/components/ServicePrice";
import Socials from "@/components/Socials";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full max-w-[1660px] mx-auto items-center flex flex-col">
      <Banner image="serviceBanner.png" name="Services" />
      <ServicePrice />
      <Socials />
    </div>
  );
};

export default page;
