import { navLinks } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
  return (
    <div className="fixed h-[12vh] z-[10] bg-blue-950 w-full">
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="logo"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
        />
        {/* Nav Links  */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p className="nav_link">{navlink.label}</p>
                </Link>
              );
            })}
          </div>
          {/* Buttons  */}
          <div className="flex items-center space-x-4"></div>
          <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
            Hire Me
          </button>
          {/* Burger Menu */}
          <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-white lg:hidden"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
