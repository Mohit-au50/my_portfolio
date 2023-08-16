import React from "react";
import { Link } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="z-10 w-full h-[5rem] lg:h-[7rem] fixed px-9 lg:px-24 flex items-center">
      <div className="w-full flex lg:flex-row items-center justify-between">
        {/* logo image */}
        <Link to="/" className="flex gap-2 items-center">
          <img src={Logo} alt="" className="w-7 lg:w-10 lg:h-10 h-7" />
          <span className="font-semibold text-lg">Mohit</span>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
