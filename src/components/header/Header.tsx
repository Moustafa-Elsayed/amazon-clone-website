import React from "react";
import logo from "../../images/logo.png";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";

const Header = () => {
  return (
    <div className="w-full h-20 bg-amazon_blue sticky top-0 z-50">
      <div className="w-full h-full mx-auto inline-flex justify-between items-center gap-1 mdl:gap-4 px-4">
        {/* logo */}
        <div className="px-2 border border-transparent hover:border-white flex items-center justify-center h-[70%] duration-300 cursor-pointer">
          <Image
            className="w-28 object-cover mt-1"
            src={logo}
            alt="logoImage"
          />
        </div>
        {/* Dilvery */}
        <div className="px-2 border border-transparent hover:border-white  items-center justify-center h-[70%] duration-300 cursor-pointer hidden xl:inline-flex gap-1">
          <SlLocationPin className="text-white" />
          <div className="text-xs">
            <p className="text-white">Dilver to</p>
            <p className="text-white font-bold uppercase">usa</p>
          </div>
        </div>
        {/* SearchBar */}
        {/* sign in */}
        {/* favorite  */}
        {/* cart */}
      </div>
    </div>
  );
};

export default Header;
