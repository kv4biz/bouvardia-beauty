import React from "react";
import Link from "next/link";
import { Services } from "@/context/servicesContext";
import { Button } from "@/components/ui/button";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  const service = Services.find((s) => s.id === slug);
  // If no service is found
  if (!service) {
    return (
      <section className="py-10 lg:py-28 text-center inter">
        <div className="container mx-auto py-10 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Service Not Found</h1>
          <p className="text-lg  mt-4">
            The service you are looking for does not exist or has been removed.
          </p>
          <Button variant={"darkghost"} className="p-4 px-8 rounded-lg mt-8">
            <Link href="/">
              <p className="">Go Back to home</p>
            </Link>
          </Button>
        </div>
      </section>
    );
  }
  return (
    <div className="w-full py-10 md:py-16">
      <div className="container mx-auto flex flex-col gap-5 md:gap-8 lg:gap-12 justify-center py-10 px-4">
        <div className="flex flex-col items-center justify-center murecho">
          <h1 className="text-4xl font-semibold uppercase">{service.title}</h1>
          <h2 className="text-2xl tracking-wider font-light">{service.tags}</h2>
        </div>
        <div className="flex flex-col items-start justify-center ml-4 lg:ml-8 mt-24 lg:mt-32 mb-6 gap-5 lg:gap-8">
          <div className="flex border-2 rounded-md border-darkTan murecho text-sm font-medium">
            <div className="p-8">{service.duration}</div>
            <div className="p-8 border-x-2 border-darkTan">{service.price}</div>
            <div className="p-8">Customer's Place</div>
          </div>
          <div>
            <Button variant={"secondary"} size={"lg"}>
              <Link href={service.link} className="inter">
                Book Now
              </Link>
            </Button>
          </div>
        </div>
        <div className="p-4 lg:py-6 border-y-2 inter border-darkTan">
          <p className="capitalise text-xl font-medium">Service Description</p>
          <p className="font-light text-lg max-w-4xl">{service.desc}</p>
        </div>
      </div>
    </div>
  );
}
