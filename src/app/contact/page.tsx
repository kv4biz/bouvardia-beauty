import ContactBanner from "@/components/ContactBanner";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import ContactMap from "@/components/ContactMap";
import React from "react";

const page = () => {
  return (
    <div className="h-2/3 w-full max-w-[1660px] mx-auto items-center flex flex-col">
      <ContactBanner />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </div>
  );
};

export default page;
