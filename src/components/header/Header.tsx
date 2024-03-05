import React from "react";
import logo from "../../images/logo.png";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { BiCaretDown } from "react-icons/bi";
import cartImage from "../../images/cartIcon.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="w-full h-full mx-auto inline-flex justify-between items-center gap-1 mdl:gap-4 px-4">
        {/* logo */}
        <Link href="/" className="px-2 border border-transparent hover:border-white flex items-center justify-center h-[70%] duration-300 cursor-pointer">
          <Image
            className="w-28 object-cover mt-1"
            src={logo}
            alt="logoImage"
          />
        </Link>
        {/* Dilvery */}
        <div className="px-2 border border-transparent hover:border-white  items-center justify-center h-[70%] duration-300 cursor-pointer hidden xl:inline-flex gap-1">
          <SlLocationPin className="text-white" />
          <div className="text-sm">
            <p>Dilver to</p>
            <p className="text-white font-bold uppercase">usa</p>
          </div>
        </div>
        {/* SearchBar */}
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative ">
          <input
            type="text"
            placeholder="Search next_amazon_yt products"
            className="w-full h-full rounded-md px-2 outline-none placeholder:tex-sm text-base text-black border-transparent border-[3px] focus-visible:border-amazon_yellow"
          />
          <span className="w-12 h-full rounded-tr-md rounded-br-md bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0">
            <IoIosSearch />
          </span>
        </div>
        {/* sign in */}
        <div className=" text-xs flex-col px-2 border border-transparent hover:border-white  items-center justify-center h-[70%] duration-300 cursor-pointer flex gap-1">
          <p>Hello , Sign in</p>
          <p className="flex justify-between items-center font-bold  text-white">
            Account , Lists
            <BiCaretDown />
          </p>
        </div>
        {/* favorite  */}
        <div className=" text-xs flex-col px-2 border border-transparent hover:border-white  items-center justify-center h-[70%] duration-300 cursor-pointer flex gap-1">
          <p>Marked</p>
          <p className=" font-bold  text-white">& Favorite</p>
        </div>
        {/* cart */}
        <Link href="/cart" className="  px-2 border border-transparent hover:border-white  items-center justify-center h-[70%] duration-300 cursor-pointer flex gap-1 relative">
          <Image
            src={cartImage}
            alt="cartIamge"
            className="w-auto h-8 object-cover "
          />
          <p className="text-white  text-sm font-semibold">Cart</p>
          <span className="absolute text-amazon_yellow top-2 left-[29px] text-xs">
            0
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
