// src/components/Navbar.tsx
"use client";
import React, { useState } from "react";
import { Menu, HoveredLink } from "./ui/navbar-menu";
import Image from "next/image";
import { NAV_LINKS } from "../constants/nav-links";
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
      <div className="hidden md:flex items-center space-x-6 md:space-x-10">
        {NAV_LINKS.slice(0, 3).map((link) => (
          <HoveredLink key={link.name} href={link.href}>
            {link.name}
          </HoveredLink>
        ))}
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
      <div className="hidden md:flex items-center space-x-6 md:space-x-10">
        {NAV_LINKS.slice(3).map((link) => (
          <HoveredLink key={link.name} href={link.href}>
            {link.name}
          </HoveredLink>
        ))}

        {/* Booking Button */}
        <Button
          asChild
          className="px-6 py-2 text-darkGray bg-pinkLight hover:bg-darkGray hover:text-pinkLight"
        >
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
            <div className="flex flex-col space-y-6 mt-6">
              {/* Navigation Links */}
              {NAV_LINKS.map((link) => (
                <HoveredLink key={link.name} href={link.href}>
                  {link.name}
                </HoveredLink>
              ))}
              {/* Booking Button */}
              <Button
                asChild
                className="mt-6 w-full px-6 py-2 text-darkGray bg-pinkLight hover:bg-darkGray hover:text-pinkLight"
              >
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
