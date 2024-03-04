import React from "react";
import logo from "../../images/logo.png";
import Image from "next/image";
const Header = () => {
  return (
    <div>
      <Image src={logo} alt="logoImage" />
    </div>
  );
};

export default Header;
