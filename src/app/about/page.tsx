import AboutMe from "@/components/AboutMe";
import AboutSection from "@/components/AboutSection";
import AboutService from "@/components/AboutService";
import Banner from "@/components/Banner";
import Socials from "@/components/Socials";

const page = () => {
  return (
    <div className="min-h-screen w-full max-w-[1660px] mx-auto items-center flex flex-col">
      <Banner image="aboutBanner.png" name="About Us" />
      <AboutSection />
      <AboutService />
      <AboutMe />
      <Socials />
    </div>
  );
};

export default page;
