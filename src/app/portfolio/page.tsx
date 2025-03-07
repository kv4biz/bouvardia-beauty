import Banner from "@/components/Banner";
import PortfolioCatalog from "@/components/PortfolioCatalog";
import Socials from "@/components/Socials";
const page = () => {
  return (
    <div className="min-h-screen w-full max-w-[1660px] mx-auto items-center flex flex-col">
      <Banner image="portfolioBanner.png" name="Portfolio" />
      <PortfolioCatalog />
      <Socials />
    </div>
  );
};

export default page;
