import React from "react";
import logo from "../../images/logo.png";
import Image from "next/image";
const Header = () => {
  return (
    <div className="w-full h-20 bg-amazon_blue sticky top-0 z-50">
      <div className="w-full h-full mx-auto inline-flex justify-between items-center gap-1 mdl:gap-4 px-4">
        {/* logo */}
        <Image className="w-28 object-cover" src={logo} alt="logoImage" />
        {/* Dilvery */}
        {/* SearchBar */}
        {/* sign in */}
        {/* favorite  */}
        {/* cart */}
      </div>
    </div>
  );
};

export default Header;
