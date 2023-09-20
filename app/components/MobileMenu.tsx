import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface IMobileMenu {
  isOpen: boolean;
  handleMenu: () => void;
}

const MobileMenu = ({ isOpen, handleMenu }: IMobileMenu) => {
  return (
    <>
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed right-0 top-20 z-20 min-h-screen w-[320px] p-4 bg-white flex-col gap-3 md:hidden rounded-[8px_0_0_8px]`}
      >
        <div className="p-2 flex  items-center justify-between text-xl text-black font-semibold">
          Products{" "}
          <IoIosArrowForward className="ml-1 text-black opacity-50" size={14} />
        </div>
        <div className="p-2 flex items-center justify-between text-xl text-black font-semibold">
          Solutions{" "}
          <IoIosArrowForward className="ml-1 text-black opacity-50" size={14} />
        </div>
        <div className="p-2 flex items-center justify-between text-xl text-black font-semibold">
          Open Source{" "}
          <IoIosArrowForward className="ml-1 text-black opacity-50" size={14} />
        </div>
        <div className="p-2 flex items-center text-xl text-black font-semibold">
          Pricing
        </div>
      </nav>
      <div
        onClick={handleMenu}
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden fixed top-0 left-0 min-h-screen w-full bg-[rgba(31,35,40,0.5)] z-10`}
      ></div>
    </>
  );
};

export default MobileMenu;
