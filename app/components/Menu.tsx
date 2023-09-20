import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const Menu = () => {
  return (
    <nav className=" hidden md:flex flex-row  text-white">
      <div className="p-2 flex  items-center cursor-pointer">
        Products{" "}
        <IoIosArrowDown className="ml-1 text-white opacity-50" size={14} />
      </div>
      <div className="p-2 flex items-center cursor-pointer">
        Solutions{" "}
        <IoIosArrowDown className="ml-1 text-white opacity-50" size={14} />
      </div>
      <div className="p-2 flex items-center cursor-pointer">
        Open Source{" "}
        <IoIosArrowDown className="ml-1 text-white opacity-50" size={14} />
      </div>
      <div className="p-2 flex items-center cursor-pointer">Pricing</div>
    </nav>
  );
};

export default Menu;
