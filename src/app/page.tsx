import Bio from "@/components/Bio";
import Collection from "@/components/Collection";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Quotes from "@/components/Quotes";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-[1360px] mx-auto items-center flex flex-col">
      <Navbar />
      <HomeBanner />
      <Bio />
      {/* <Collection />
      <Services />
      <Quotes />
      <Portfolio />
      <Reviews />
      <Socials /> */}
      <Footer />
    </div>
  );
}
