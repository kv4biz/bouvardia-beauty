import React from "react";
import Link from "next/link";
import { Services } from "@/context/servicesContext";
import { Button } from "@/components/ui/button";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = Services.find((s) => s.id === slug);

  if (!service) {
    return (
      <section className="py-10 lg:py-28 text-center inter">
        <div className="container mx-auto py-10 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Service Not Found</h1>
          <p className="text-lg mt-4">
            The service you are looking for does not exist or has been removed.
          </p>
          <Button variant={"darkghost"} className="p-4 px-8 rounded-lg mt-8">
            <Link href="/">
              <p>Go Back to home</p>
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
        <div className="p-4 lg:py-6 border-y-2 border-darkTan">
          <p className="capitalise text-xl roboto font-medium">
            Service Description
          </p>
          <p className="font-light text-lg robotoCondensed mt-2 max-w-4xl">
            {service.desc}
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:gap-8 roboto px-2 md:px-6 lg:px-28">
          <p>
            Cancellation Policy
            <br />
            Dear Client,
          </p>
          <p>
            Thank you so much for considering Tolabanks beauty. Please Read
            Terms of Booking Before Paying.
          </p>
          <p>
            Please note that the fees above are for service(s) stated on the
            invoice only.
          </p>
          <p>
            For regular glam sessions; <br /> Studio sessions are for only
            booked in clients so please endeavour to come alone for your
            appointment. No friends, or family who aren’t getting their make up
            done will be necessary to bring along for your appointment.
          </p>
          <p>
            Timing is very crucial to the successful delivery of my service to
            you and other clients alike, so please keep to your appointment
            times strictly. A lateness fee of $50 applies after a 15-30 minute
            wait period and the appointment may be cancelled once you’re over 30
            minutes late.
          </p>
          <p>Payments;</p>
          <p>
            Non Bridals - A 50% non-refundable deposit is required to book and
            the balance is due 24 hours to service date/time. <br /> For Bridals
            - A 30% non-refundable deposit is required to book and the balance
            is due at least 2 weeks to the wedding day. <br /> Appointments can
            be rescheduled within 2 months of original booking date and is
            strictly based on the discretion and availability of the artist.
          </p>
          <p>
            With your permission, there may be videos and pictures of you taken
            during and/or after your appointment, It would be really nice to
            come with your outfit or something you’re comfortable wearing in
            pictures. Black, white or neutral colored tops and sweats are a good
            way to go when you don’t want to dress up just yet.
          </p>
          <p>For Bridals;</p>
          <p>
            Touch up services are available from $100. Waiting time is 30
            minutes from agreed timing as longer hours would attract extra
            charges.
          </p>
          <p>Bonuses</p>
          <p>
            - All bridal bookings come with a complimentary bridal consultation
            (virtually or atstudio). <br />- All booked brides get $50 off their
            bridesmaid’s make up. <br />- Booked Trad brides get 50% off head
            gear styling
          </p>
          <p>For services outside Calgary, </p>
          <p>
            An out of station fee of $100-$500 will apply based on location.
            Flight costs, ground transportation and hotel accommodation will be
            sorted by the client or paid for separately.
          </p>
          <p>
            Thank you so much for your understanding and compliance, I look
            forward to an awesome glam time with you ❤️.
          </p>
        </div>
      </div>
    </div>
  );
}
