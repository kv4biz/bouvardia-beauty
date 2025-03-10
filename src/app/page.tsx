import Bio from "@/components/Bio";
import Collection from "@/components/Collection";
import HomeBanner from "@/components/HomeBanner";
import Portfolio from "@/components/Portfolio";
import Quotes from "@/components/Quotes";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-[1660px] mx-auto items-center flex flex-col">
      <HomeBanner />
      <Bio />
      <Collection />
      <Services />
      <Portfolio />
      <Quotes />
      <Reviews />
      <Socials />
    </div>
  );
}
