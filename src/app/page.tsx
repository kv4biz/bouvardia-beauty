import HomeBanner from "@/components/HomeBanner";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center ">
      <Navbar />
      <HomeBanner />
    </div>
  );
}
