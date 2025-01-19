"use client";
import { navLinks } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    if (pathname === "/contact") {
      router.push(`/${url}`);
    } else {
      router.push(url);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[12vh] z-10 transition-all duration-300 
        ${
          navBg
            ? "bg-black bg-opacity-50 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }
      `}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="logo"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
        />
        {/* Nav Links */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => (
              <Link
                key={navlink.id}
                href={navlink.url}
                onClick={(e) => handleNavClick(e, navlink.url)}
                className="nav_link text-white"
              >
                <p>{navlink.label}</p>
              </Link>
            ))}
          </div>
          {/* Buttons */}
          <div className="flex items-center space-x-4"></div>
          <Link href="/contact">
            <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-xs bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg whitespace-nowrap">
              Hire Me
            </button>
          </Link>
          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
