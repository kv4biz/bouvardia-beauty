import { info } from "@/context/contactContext";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="w-full py-10 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-1 px-4 lg:px-16">
        {info.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.tag}
              className="flex flex-col gap-4 items-center justify-center text-center inter p-4 px-8 rounded-md shadow-lg max-w-72"
            >
              <div className="p-2 rounded-full shadow-lg">
                <Icon className="text-3xl text-darkTan" />
              </div>
              <h1 className="text-md font-semibold">{item.title}</h1>
              <p className="text-sm text-gray-700">{item.desc}</p>
              <p className="text-darkTan font-semibold">{item.tag}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
