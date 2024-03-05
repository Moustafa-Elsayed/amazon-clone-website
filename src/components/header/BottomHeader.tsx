import React from "react";
import { MdOutlineMenu } from "react-icons/md";

const BottomHeader = () => {
  return (
    <div className="bg-amazon_light h-10 w-full text-white text-sm px-4 flex items-center ">
      <p className="cursor-pointer flex  items-center px-2 gap-1 h-8 border border-transparent hover:border-white duration-300">
        <MdOutlineMenu />
        ALL
      </p>
      <p className="  hidden cursor-pointer md:inline-flex items-center px-2 gap-1 h-8 border border-transparent hover:border-white duration-300">
        Todays Deals
      </p>
      <p className="  hidden cursor-pointer md:inline-flex items-center px-2 gap-1 h-8 border border-transparent hover:border-white duration-300">
        Customer Service
      </p>
      <p className="  hidden cursor-pointer md:inline-flex items-center px-2 gap-1 h-8 border border-transparent hover:border-white duration-300">
        Registry
      </p>
      <p className="  hidden cursor-pointer md:inline-flex items-center px-2 gap-1 h-8 border border-transparent hover:border-white duration-300">
        Gift Cards
      </p>
      <p className="  hidden cursor-pointer md:inline-flex items-center px-2 gap-1 h-8 border border-transparent hover:border-white duration-300">
        Sell
      </p>
      <p className="  hidden cursor-pointer md:inline-flex text-amazon_yellow items-center px-2 gap-1 h-8 border border-transparent hover:border-amazon_yellow duration-300">
        Sign Out
      </p>
    </div>
  );
};

export default BottomHeader;
