import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="relative w-full py-10 md:py-16">
      {/* Background image for small screens */}
      <div className="absolute inset-0 flex items-center justify-center md:hidden">
        <Image
          src="/makeup.png"
          alt="Makeup Background"
          width={350}
          height={350}
          className="object-cover opacity-15"
        />
      </div>
      <div className="relative z-10 px-5">
        <div className="flex flex-col md:flex-row gap-5 md:gap-12 lg:gap-28 container items-end justify-center mx-auto overflow-hidden">
          <div className="hidden md:block mt-4">
            <Image
              src="/makeup.png"
              alt="Makeup"
              width={400}
              height={400}
              className="w-full max-h-[360px] max-w-[320px] h-full object-cover"
            />
          </div>
          <div>
            <div className="max-w-lg">
              <div className="flex flex-col text-center mb-4 lg:mb-10">
                <span className="text-3xl text-black/55 italianno">
                  Welcome to
                </span>
                <h1 className="text-4xl font-light text-black -mt-2 inter">
                  Paradise Center
                </h1>
              </div>
              <div className="flex flex-col gap-4 md:gap-8">
                <h2 className="text-3xl font-bold text-black domine">
                  Who we are &amp; Why it matters
                </h2>
                <p className="mt-4 text-black md:text-gray-700 inter text-sm">
                  Balliss is a spa &amp; wellness consultancy, development and
                  management company. For 18 years we’ve had our feet on the
                  ground, and have navigated the complexities of
                  conceptualising, developing, opening and operating 32
                  destination spas across Africa and the Middle East.
                </p>
                <p className="mt-4 text-black md:text-gray-700 inter text-sm">
                  Our invaluable experiences positions us perfectly to develop a
                  framework of success for businesses wanting to offer a
                  holistic luxury spa experience in the wellness hospitality
                  industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
