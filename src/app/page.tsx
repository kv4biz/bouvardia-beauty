import Bio from "@/components/Bio";
import HomeBanner from "@/components/HomeBanner";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-[1360px] mx-auto items-center flex flex-col">
      <Navbar />
      <HomeBanner />
      <Bio />
    </div>
  );
}
