/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { BiCaretDown } from "react-icons/bi";
import cartImage from "../../images/cartIcon.png";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { stateProps } from "../../../type";
import { UserButton, useUser } from "@clerk/nextjs";

const Header = () => {
  const { user } = useUser();
  const [allData, setAllData] = useState([]);
  const { productData, favoriteData, userInfo, allProducts } = useSelector(
    (state: stateProps) => state.next
  );
  const dispatch = useDispatch();
  useEffect(() => {
    setAllData(allProducts.allProducts);
  }, [allProducts]);

  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="w-full h-full mx-auto inline-flex justify-between items-center gap-1 mdl:gap-4 px-4">
        {/* logo */}
        <Link
          href="/"
          className="px-2 border border-transparent hover:border-white flex items-center justify-center h-[70%] duration-300 cursor-pointer"
        >
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
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <Link
          href={"/sign-in"}
            className=" text-xs flex-col px-2 border border-transparent hover:border-white  items-center justify-center h-[70%] duration-300 cursor-pointer flex gap-1"
          >
            <p>Hello , Sign in</p>
            <p className="flex justify-between items-center font-bold  text-white">
              Account , Lists
              <BiCaretDown />
            </p>
          </Link>
        )}

        {/* favorite  */}
        <Link
          href={"/favorite"}
          className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <p>Marked</p>
          <p className="text-xs md:text-base text-white font-bold">
            & Favorite
          </p>

          <>
            {favoriteData.length > 0 && (
              <span className="absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow">
                {favoriteData.length}
              </span>
            )}
          </>
        </Link>
        {/* cart */}
        <Link
          href={"/cart"}
          className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <Image
            className="w-auto object-cover h-8"
            src={cartImage}
            alt="cartImg"
          />
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
            <>{productData ? productData.length : 0}</>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
