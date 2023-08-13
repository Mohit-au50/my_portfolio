import React from "react";
import { Link } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="w-full h-[5rem] lg:h-[7rem] fixed px-9 lg:px-24 flex items-center">
      <div className="w-full flex lg:flex-row lg:items-center justify-between">
        {/* logo image */}
        <Link to="/" className="flex gap-2 items-center">
          <img src={Logo} alt="" className="w-7 lg:w-10 lg:h-10 h-7" />
          <h1 className="font-serif text-2xl font-semibold">Mohit</h1>
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
