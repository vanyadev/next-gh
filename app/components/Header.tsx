'use client'

import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleScrollOverflow = (enabled: boolean) => {
    document.body.style.overflow = enabled ? "auto" : "hidden";
  };

  const handleResize = () => {
    if (isOpen && window.innerWidth <= 768) {
      toggleScrollOverflow(false);
    } else {
      toggleScrollOverflow(true);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <header className="bg-[#24292e] flex items-center justify-between gap-5 text-white py-4 px-6 sm:px-4">
      <Link href={"/"} className="md:mr-4 relative z-20">
        <Image src="./git.svg" alt="logo" width={48} height={48} />
      </Link>
      <Menu />
      <Search />
      <MobileMenu isOpen={isOpen} handleMenu={handleMenu} />
      <button
        onClick={handleMenu}
        className={`px- hamburger relative z-20 block md:hidden focus:outline-none ${
          isOpen && "open"
        }`}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </header>
  );
};

export default Header;
