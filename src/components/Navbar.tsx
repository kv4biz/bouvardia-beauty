// src/components/Navbar.tsx
"use client";
import React from "react";
import { Menu, HoveredLink } from "./ui/navbar-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
} from "./ui/sheet";
import { Menu as MenuIcon } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <Menu setActive={() => {}}>
      {/* Left Side Links (Hidden on small screens) */}
      <div className="hidden md:flex items-center space-x-8 lg:space-x-20">
        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/about">About</HoveredLink>
        <HoveredLink href="/portfolio">Portfolio</HoveredLink>
      </div>

      {/* Logo in the Center */}
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={50}
          height={50}
          className="cursor-pointer"
        />
      </Link>

      {/* Right Side Links & Button (Hidden on small screens) */}
      <div className="hidden md:flex items-center space-x-8 lg:space-x-20">
        <HoveredLink href="/services">Services</HoveredLink>
        <HoveredLink href="/contact">Contact</HoveredLink>
        {/* Booking Button */}
        <Button asChild variant={"destructive"} size={"nav"}>
          <Link href="/booking">Bookings</Link>
        </Button>
      </div>

      {/* Hamburger and Sidebar for Mobile View */}
      <div className="md:hidden flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Open Menu">
              <MenuIcon className="h-8 w-8 text-darkGray mr-4" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-3/4 p-6">
            {/* Accessible SheetTitle */}
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetClose className="absolute border-none top-4 right-4">
              <span className="sr-only">Close</span>
            </SheetClose>
            <div className="flex flex-col space-y-6 mt-6 mobile-nav">
              {/* Navigation Links */}
              <HoveredLink href="/">Home</HoveredLink>
              <HoveredLink href="/about">About</HoveredLink>
              <HoveredLink href="/portfolio">Portfolio</HoveredLink>
              <HoveredLink href="/services">Services</HoveredLink>
              <HoveredLink href="/contact">Contact</HoveredLink>
              {/* Booking Button */}
              <Button className="mt-6 w-full px-6 py-2 text-darkGray bg-pinkLight hover:bg-darkGray hover:text-pinkLight">
                <Link href="/booking">Bookings</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Menu>
  );
};

export default Navbar;
