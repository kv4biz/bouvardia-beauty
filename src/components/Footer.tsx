import Link from "next/link";
import React from "react";
import SocialBtn from "./SocialBtn";

const Footer = () => {
  return (
    <div className="w-full pt-10 px-4 md:pt-16 md:px-8 lg:px-16 bg-black pb-16 md:pb-28 heebo">
      <div className="flex flex-col md:flex-row container mx-auto gap-10">
        <div className="flex flex-col gap-2 text-center lg:text-left w-full lg:w-3/5">
          <h1 className="text-3xl tracking-[5px] text-white">
            BOURVARDIA BEAUTY
          </h1>
          <p className="text-md text-white mt-5 max-w-md tracking-widest">
            Rapidiously my cardinate cross-platform intellectual capital model.
            Appropriately create interactive infrastructures
          </p>
        </div>
        <div className="flex max-w-5xl md:justify-end">
          <div className="flex flex-col md:flex-row w-full justify-between gap-10 text-white">
            <div className="flex flex-col gap-4">
              <span className="text-md font-semibold underline underline-offset-8">
                About
              </span>
              <Link href="#" className="text-sm font-extralight ">
                Home
              </Link>
              <Link href="#" className="text-sm font-extralight ">
                About
              </Link>
              <Link href="#" className="text-sm font-extralight ">
                Shop
              </Link>
              <Link href="#" className="text-sm font-extralight ">
                Support
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-md font-semibold underline underline-offset-8">
                Privacy
              </span>
              <Link href="#" className="text-sm font-extralight ">
                Privacy
              </Link>
              <Link href="#" className="text-sm font-extralight ">
                Policy
              </Link>
              <Link href="#" className="text-sm font-extralight ">
                Payments
              </Link>
              <Link href="#" className="text-sm font-extralight ">
                Term
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-md font-semibold underline underline-offset-8">
                Contact
              </span>
              <span className="text-sm font-extralight ">
                No 12, allen road lagos
              </span>
              <span className="text-sm font-extralight ">
                Email: kallif@gmail.com
              </span>
              <span className="text-sm font-extralight ">+234-81-0000-234</span>
              <SocialBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
