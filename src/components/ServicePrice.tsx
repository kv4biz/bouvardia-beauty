import { Services } from "@/context/servicesContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const ServicePrice = () => {
  return (
    <div className="w-full py-10 md:py-16">
      <div className="container mx-auto flex flex-col gap-2 md:gap-4 px-4 overflow-hidden">
        <div className="flex flex-col gap-2 items-center justify-center text-center">
          <h1 className="IBMPlexMono font-medium text-3xl">
            Our Services & Pricing
          </h1>
          <p className="max-w-lg jomolhari text-sm text-black/60">
            Lorem ipsum dolor sit amet consecte turadipiscing elit sed do
            eiusmodte porincididunt ut laboreua.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {Services.map((service) => (
            <div
              key={service.id}
              className="flex items-center justify-between bg-[#D0A88D]/20 rounded-sm w-full p-4 md:p-6 md:px-10"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div>
                  <Image
                    src={service.img}
                    alt={`${service.id}-img`}
                    width={400}
                    height={400}
                    className="h-28 w-28 object-cover"
                  />
                </div>
                <div className="max-w-xs flex flex-col gap-2">
                  <p className="pathwayGothicOne text-[20px]">
                    {service.title}
                  </p>
                  <p className="text-xs  inter text-[#676565] max-w-[240px]">
                    {service.desc.split(" ").length > 16
                      ? service.desc.split(" ").slice(0, 16).join(" ") + "..."
                      : service.desc}
                  </p>
                  <Link
                    href={`/services/${service.id}`}
                    className="font-medium inter underline underline-offset-2"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="border-l-2 border-black/20 p-2 py-10 flex flex-col gap-2">
                <p className="text-xs inter font-light">{service.duration}</p>
                <p className="text-sm inter font-medium">{service.price}</p>
                <Button
                  size={"sm"}
                  variant={"darkghost"}
                  className="mt-3 text-xs inter"
                >
                  <Link href={service.link}>Book Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePrice;
